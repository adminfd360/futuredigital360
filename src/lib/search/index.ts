import Fuse from "fuse.js";
import type { IFuseOptions } from "fuse.js";
import { faqIndex } from "./faqIndex";
import { guidesIndex } from "./guidesIndex";
import { ifaxIndex } from "./ifaxIndex";
import { siteIndex } from "./siteIndex";
import type { SearchEntry, SearchResult } from "./types";

export const searchIndex: SearchEntry[] = [
  ...faqIndex,
  ...ifaxIndex,
  ...guidesIndex,
  ...siteIndex,
];

const fuseOptions: IFuseOptions<SearchEntry> = {
  includeScore: true,
  ignoreLocation: true,
  // Per-field threshold. Kept lenient enough that real typos like "lexmrk" →
  // "lexmark" or "voicmail" → "voicemail" still match; the SCORE_CUTOFF below
  // does the second-pass filtering on the combined weighted score.
  threshold: 0.3,
  minMatchCharLength: 3,
  keys: [
    { name: "title", weight: 0.5 },
    { name: "keywords", weight: 0.3 },
    { name: "description", weight: 0.15 },
    { name: "category", weight: 0.05 },
  ],
};

const fuse = new Fuse(searchIndex, fuseOptions);

// Drop low-confidence hits even when they pass the per-field threshold (Fuse
// returns 0 = perfect, 1 = worst). 0.4 keeps real typos like "lexmrk" while
// rejecting most noise like "test" → "text"/"best".
const SCORE_CUTOFF = 0.4;

/**
 * Run a fuzzy search over every FAQ item, iFax topic, PDF guide and site
 * page. Returns an empty array when the query is empty or too short. Lower
 * `score` is a better match (Fuse convention).
 */
export function runSearch(query: string, limit = 30): SearchResult[] {
  const trimmed = query?.trim() ?? "";
  if (trimmed.length < 3) return [];

  return fuse
    .search(trimmed, { limit })
    .filter((hit) => (hit.score ?? 1) <= SCORE_CUTOFF)
    .map((hit) => ({ entry: hit.item, score: hit.score ?? 1 }));
}

export type { SearchEntry, SearchResult, SearchCategory } from "./types";
