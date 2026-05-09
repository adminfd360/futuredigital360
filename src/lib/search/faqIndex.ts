import { frequentlyAskData } from "@/views/Faq/FrequentlyAsk/data";
import type { SearchEntry } from "./types";

/**
 * Best-effort plain-text fallback when an FAQ entry has no explicit
 * `searchText`. Walks a ReactNode tree and joins every string fragment.
 */
function nodeToText(node: unknown): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join(" ");
  if (typeof node === "object" && "props" in (node as Record<string, unknown>)) {
    const props = (node as { props?: { children?: unknown } }).props;
    return nodeToText(props?.children);
  }
  return "";
}

function truncate(value: string, max = 200): string {
  const collapsed = value.replace(/\s+/g, " ").trim();
  if (collapsed.length <= max) return collapsed;
  return collapsed.slice(0, max).trimEnd() + "…";
}

export const faqIndex: SearchEntry[] = frequentlyAskData.map((item) => {
  const description = item.searchText
    ? truncate(item.searchText)
    : truncate(nodeToText(item.answer));

  return {
    id: `faq-${item.slug}`,
    title: item.question,
    description,
    keywords: item.keywords,
    href: `/support/faq#${item.slug}`,
    category: "FAQ",
  } satisfies SearchEntry;
});
