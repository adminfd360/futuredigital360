import Link from "next/link";
import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import Text from "@/components/Text";
import AnimateDiv from "@/components/AnimateDiv";
import SearchBar from "@/components/SearchBar";
import { runSearch } from "@/lib/search";
import type { SearchCategory, SearchEntry } from "@/lib/search";

type Props = {
  query: string;
};

const CATEGORY_ORDER: SearchCategory[] = [
  "FAQ",
  "Service",
  "Support",
  "Guide",
  "Company",
  "Page",
];

const CATEGORY_LABELS: Record<SearchCategory, string> = {
  FAQ: "Frequently Asked Questions",
  Service: "Services",
  Support: "Support",
  Guide: "PDF Guides",
  Company: "Company",
  Page: "Pages",
};

const CATEGORY_BADGE: Record<SearchCategory, string> = {
  FAQ: "bg-brand-500/10 text-brand-500",
  Service: "bg-brand-600/10 text-brand-600",
  Support: "bg-brand-green/10 text-brand-green",
  Guide: "bg-brand-red/10 text-brand-red",
  Company: "bg-brand-700/10 text-brand-700",
  Page: "bg-gray-200 text-gray-700",
};

function groupByCategory(entries: SearchEntry[]) {
  const groups = new Map<SearchCategory, SearchEntry[]>();
  for (const entry of entries) {
    const list = groups.get(entry.category) ?? [];
    list.push(entry);
    groups.set(entry.category, list);
  }
  return CATEGORY_ORDER.flatMap((category) => {
    const items = groups.get(category);
    if (!items || items.length === 0) return [];
    return [{ category, items }];
  });
}

const ResultCard = ({ entry }: { entry: SearchEntry }) => {
  const cardClassName =
    "group block bg-white border border-gray-200 rounded-lg p-5 transition-all duration-200 hover:border-brand-500 hover:shadow-[0px_0px_8px_4px_rgba(0,0,0,0.05)]";

  const inner = (
    <>
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            CATEGORY_BADGE[entry.category]
          }`}
        >
          {entry.category}
        </span>
        <span className="text-xs text-gray-400 truncate">{entry.href}</span>
      </div>
      <h3 className="text-lg font-semibold text-text-title group-hover:text-brand-500 transition-colors">
        {entry.title}
      </h3>
      {entry.description && (
        <p className="mt-2 text-sm text-text-DEFAULT leading-relaxed line-clamp-3">
          {entry.description}
        </p>
      )}
    </>
  );

  if (entry.external) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={entry.href} className={cardClassName}>
      {inner}
    </Link>
  );
};

const SearchView = ({ query }: Props) => {
  const trimmed = query.trim();
  const results = runSearch(trimmed);
  const grouped = groupByCategory(results.map((result) => result.entry));
  const hasQuery = trimmed.length >= 3;

  return (
    <>
      <PageBanner title="Search Results" />
      <Section className="bg-accent-100">
        <AnimateDiv>
          <SearchBar defaultValue={trimmed} className="mt-4" />
        </AnimateDiv>

        <div className="mt-10 max-w-[960px] mx-auto">
          {!hasQuery ? (
            <div className="text-center py-10">
              <Text variant="subtitle">Search the entire site</Text>
              <p className="mt-3 text-text-DEFAULT">
                Type a topic, service name, or question above (at least 3
                characters) and press <span className="font-semibold">Search</span>.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10">
              <Text variant="subtitle">No results for &ldquo;{trimmed}&rdquo;</Text>
              <p className="mt-3 text-text-DEFAULT">
                Try different keywords, check the spelling, or browse our{" "}
                <Link className="text-brand-500 hover:underline" href="/services">
                  services
                </Link>{" "}
                and{" "}
                <Link className="text-brand-500 hover:underline" href="/support/faq">
                  FAQs
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              <p className="text-text-DEFAULT mb-8">
                Showing{" "}
                <span className="font-semibold text-text-title">
                  {results.length}
                </span>{" "}
                {results.length === 1 ? "result" : "results"} for{" "}
                <span className="font-semibold text-text-title">
                  &ldquo;{trimmed}&rdquo;
                </span>
              </p>

              <div className="space-y-10">
                {grouped.map(({ category, items }) => (
                  <section key={category}>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-4">
                      {CATEGORY_LABELS[category]}{" "}
                      <span className="text-gray-400 font-normal">
                        ({items.length})
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {items.map((entry) => (
                        <ResultCard key={entry.id} entry={entry} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}
        </div>
      </Section>
    </>
  );
};

export default SearchView;
