// QA reproducible para la propuesta V10; no modifica datos ni producción.
// Requiere Chrome instalado. Ejemplo: V10_SITE_URL=http://localhost:3110 npm run qa:v10
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const url = (process.env.V10_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
const chromePath = process.env.CHROME_PATH;
const launch = chromePath
  ? { headless: true, executablePath: chromePath, args: ["--no-sandbox"] }
  : { headless: true, channel: "chrome", args: ["--no-sandbox"] };

const browser = await chromium.launch(launch);
let failures = 0;

try {
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    const page = await context.newPage();
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    const response = await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    const result = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      booking: document.querySelectorAll('a[href*="colavo.link"]').length,
      broken: [...document.images].filter((img) => img.complete && img.getBoundingClientRect().top < 1500 && img.naturalWidth === 0).length,
      title: document.title,
      h1: document.querySelectorAll("h1").length
    }));
    const slideButtons = await page.getByRole("group", { name: "Elegir fotografía" }).getByRole("button").count();
    const initialSlide = await page.locator("[data-luxe-slide]").getAttribute("data-luxe-slide");
    await page.getByRole("button", { name: "Fotografía siguiente" }).click();
    const nextSlide = await page.locator("[data-luxe-slide]").getAttribute("data-luxe-slide");
    await page.getByRole("button", { name: "Fotografía anterior" }).click();
    const restoredSlide = await page.locator("[data-luxe-slide]").getAttribute("data-luxe-slide");
    const carouselOK = slideButtons === 11 && initialSlide === "0" && nextSlide === "1" && restoredSlide === "0";
    await page.getByRole("button", { name: /^Ampliar fotografía/ }).first().click();
    const lightbox = page.getByRole("dialog", { name: "Galería fotográfica de Luxe Brows & Spa" });
    const dialogOpen = await lightbox.isVisible();
    await page.keyboard.press("ArrowRight");
    const dialogNext = await lightbox.getByText("Facial", { exact: true }).count() === 1;
    await page.keyboard.press("Escape");
    const dialogClosed = !(await lightbox.isVisible());
    const galleryOK = dialogOpen && dialogNext && dialogClosed;
    const tabs = await page.locator('[role="tab"]').count();
    await page.locator("#service-tab-2").click();
    const facialSelected = await page.locator("#service-tab-2").getAttribute("aria-selected");
    const treatmentVisible = await page.getByText("Hydrafacial", { exact: true }).count();
    let mobileMenuOK = true;

    if (width < 500) {
      await page.getByRole("button", { name: "Abrir menú" }).click();
      const menuPanel = page.getByRole("navigation", { name: "Navegación móvil" });
      const opened = await menuPanel.isVisible();
      const menuGeometry = await menuPanel.evaluate((element) => {
        const rect = element.getBoundingClientRect();
        const topElement = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        return { height: rect.height, inFront: element === topElement || element.contains(topElement) };
      });
      await page.keyboard.press("Escape");
      mobileMenuOK = opened && menuGeometry.height >= 450 && menuGeometry.inFront &&
        await page.getByRole("navigation", { name: "Navegación móvil" }).count() === 0;
    }

    const ok = response.status() === 200 && result.width <= width + 2 && result.booking >= 2 &&
      result.broken === 0 && result.h1 === 1 && carouselOK && galleryOK && tabs === 6 && facialSelected === "true" &&
      treatmentVisible === 1 && mobileMenuOK && pageErrors.length === 0;
    console.log(JSON.stringify({ viewport: width, result: ok ? "PASS" : "FAIL", documentWidth: result.width, bookingLinks: result.booking, pageErrors }));
    if (!ok) failures++;

    if (width === 390 || width === 1440) {
      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      console.log(JSON.stringify({ accessibilityViewport: width, violations: axe.violations.map(v => ({ id: v.id, severity: v.impact, nodes: v.nodes.length })) }));
      if (axe.violations.length) failures++;
    }
    await context.close();
  }
} finally {
  await browser.close();
}
if (failures) {
  console.error("V10 QA FAILED: " + failures + " failed assertions.");
  process.exit(1);
}
console.log("V10 QA PASS: 6 responsive viewports, interactive booking/catalog/menu, axe WCAG A/AA (390 + 1440).");
