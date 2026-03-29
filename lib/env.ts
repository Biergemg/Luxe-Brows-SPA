const clean = (value?: string) => value?.trim() || undefined;

const withNoTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const env = {
  siteUrl: withNoTrailingSlash(clean(process.env.NEXT_PUBLIC_SITE_URL) || "https://luxebrowsspa.com"),
  googleAnalyticsId: clean(process.env.NEXT_PUBLIC_GA_ID),
  googleTagManagerId: clean(process.env.NEXT_PUBLIC_GTM_ID),
  googleMapsUrl: clean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL),
  googleMapsEmbedUrl: clean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL),
};

export const hasGoogleTagManager = Boolean(env.googleTagManagerId);
export const hasGoogleAnalytics = Boolean(env.googleAnalyticsId) && !hasGoogleTagManager;
