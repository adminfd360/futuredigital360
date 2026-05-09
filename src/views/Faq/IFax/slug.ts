/**
 * Generate a stable, URL-safe slug from a topic title. The same function is
 * used both at search-index build time (`ifaxIndex.ts`) and at render time
 * inside each iFax tab subcomponent, so a deep link from the search page
 * always matches an accordion item by id.
 */
export function slugifyTopic(title: string): string {
  return title
    .toLowerCase()
    .replace(/[\u2018\u2019\u201C\u201D'"`]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export const IFAX_TAB_SLUGS = [
  "account",
  "navigation",
  "received",
  "sending",
] as const;

export type IFaxTabSlug = (typeof IFAX_TAB_SLUGS)[number];

export const IFAX_TAB_LABELS: Record<IFaxTabSlug, string> = {
  account: "Account, Team & Number Setup",
  navigation: "Navigation",
  received: "Processing Received Faxes",
  sending: "Sending Faxes",
};
