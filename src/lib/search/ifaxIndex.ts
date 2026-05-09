import {
  accountTopics,
  navigationTopics,
  receivedTopics,
  sendingTopics,
} from "@/views/Faq/IFax/data";
import {
  IFAX_TAB_LABELS,
  type IFaxTabSlug,
  slugifyTopic,
} from "@/views/Faq/IFax/slug";
import type { SearchEntry } from "./types";

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

const TAB_TOPICS: Record<
  IFaxTabSlug,
  Array<{ title: string; content: string | React.ReactNode }>
> = {
  account: accountTopics,
  navigation: navigationTopics,
  received: receivedTopics,
  sending: sendingTopics,
};

export const ifaxIndex: SearchEntry[] = (
  Object.entries(TAB_TOPICS) as Array<
    [IFaxTabSlug, (typeof TAB_TOPICS)[IFaxTabSlug]]
  >
).flatMap(([tabKey, topics]) =>
  topics.map<SearchEntry>((topic) => {
    const slug = slugifyTopic(topic.title);
    const tabLabel = IFAX_TAB_LABELS[tabKey];
    return {
      id: `ifax-${tabKey}-${slug}`,
      title: topic.title,
      description: truncate(`${tabLabel} • ${nodeToText(topic.content)}`),
      keywords: [
        "ifax",
        "i-fax",
        "internet fax",
        "online fax",
        "fax",
        tabLabel.toLowerCase(),
      ],
      href: `/support/ifax?tab=${tabKey}#${slug}`,
      category: "Support",
    };
  })
);
