import type { Metadata, Viewport } from "next";
import { businessInfo } from "@/data/businessInfo";
import { env } from "@/lib/env";
import { siteConfig } from "@/lib/site";

const metadataBase = new URL(env.siteUrl);
const socialImageUrl = new URL(siteConfig.ogImage.path, metadataBase).toString();

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase,
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  keywords: [...siteConfig.keywords],
  category: "beauty",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: siteConfig.socialTitle,
    description: siteConfig.socialDescription,
    url: env.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImage.alt,
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.socialTitle,
    description: siteConfig.socialDescription,
    images: [socialImageUrl],
  },
  other: {
    "og:image:secure_url": socialImageUrl,
    "og:image:alt": siteConfig.ogImage.alt,
    "twitter:image:alt": siteConfig.ogImage.alt,
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    title: businessInfo.name,
    statusBarStyle: "black-translucent",
  },
};
