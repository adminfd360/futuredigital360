import type { Metadata } from "next";
import SearchView from "@/views/Search";

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

function normalizeQuery(value: string | string[] | undefined): string {
  if (!value) return "";
  return Array.isArray(value) ? value[0] ?? "" : value;
}

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = normalizeQuery(q).trim();

  if (!query) {
    return {
      title: "Search",
      description:
        "Search Future Digital 360 — find FAQs, services, support guides, and company information.",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `Search results for "${query}"`,
    description: `Find FAQs, services, and support pages matching "${query}" on Future Digital 360.`,
    robots: { index: false, follow: true },
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q } = await searchParams;
  const query = normalizeQuery(q);

  return <SearchView query={query} />;
};

export default SearchPage;
