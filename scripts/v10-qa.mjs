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
    const tabs = await page.locator('[role="tab"]').count();
    await page.locator("#service-tab-2").click();
    const facialSelected = await page.locator("#service-tab-2").getAttribute("aria-selected");
    const treatmentVisible = await page.getByText("Hydrafacial", { exact: true }).count();
    let mobileMenuOK = true;

    if (width < 500) {
      await page.getByRole("button", { name: "Abrir menú" }).click();
      const opened = await page.getByRole("navigation", { name: "Navegación móvil" }).isVisible();
      await page.keyboard.press("Escape");
      mobileMenuOK = opened && await page.getByRole("navigation", { name: "Navegación móvil" }).count() === 0;
    }

    const ok = response.status() === 200 && result.width <= width + 2 && result.booking >= 2 &&
      result.broken === 0 && result.h1 === 1 && tabs === 6 && facialSelected === "true" &&
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
