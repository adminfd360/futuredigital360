export type SearchCategory =
  | "FAQ"
  | "Service"
  | "Support"
  | "Guide"
  | "Company"
  | "Page";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  keywords?: string[];
  href: string;
  category: SearchCategory;
  /**
   * When true, the result card renders an external `<a target="_blank">` link
   * instead of a Next.js `<Link>`. Used for downloadable PDFs and any other
   * asset that lives outside the app's routing.
   */
  external?: boolean;
};

export type SearchResult = {
  entry: SearchEntry;
  score: number;
};
