import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { MotionDirector } from "@/components/animations/MotionDirector";
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/jsonLd";
import { metadata, viewport } from "@/lib/seo";
import { TrackingScripts } from "@/components/integrations/TrackingScripts";

export { metadata, viewport };

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const playfairDisplay = Playfair_Display({ variable: "--font-playfair-display", subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }} />
      </head>
      <body className={inter.variable + " " + playfairDisplay.variable + " antialiased"}>
        <TrackingScripts />
        <Navbar />
        {children}
        <MotionDirector />
      </body>
    </html>
  );
}
