"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { cx } from "@/lib/utils";

type Props = {
  /** Pre-filled query (used on the results page so users can refine). */
  defaultValue?: string;
  /** Optional placeholder override. */
  placeholder?: string;
  /** Wrapper class for layout overrides. */
  className?: string;
  /** Auto-focus the input on mount (used by the header slide-down panel). */
  autoFocus?: boolean;
};

const SearchBar = ({
  defaultValue = "",
  placeholder = "Search FAQs, services, guides…",
  className,
  autoFocus = false,
}: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length < 3) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cx(
        "w-full max-w-[720px] mx-auto flex items-stretch gap-2 rounded-full bg-white shadow-[0px_0px_8px_4px_rgba(0,0,0,0.08)] p-2 border border-gray-200",
        className,
      )}
    >
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>

      <span
        aria-hidden="true"
        className="flex items-center justify-center pl-3 text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35m1.85-5.4a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
          />
        </svg>
      </span>

      <input
        id="site-search"
        name="q"
        type="search"
        autoComplete="off"
        autoFocus={autoFocus}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-base text-gray-800 placeholder:text-gray-400 px-2 max-sm:max-w-[209px]"
      />

      <button
        type="submit"
        disabled={query.trim().length < 3}
        className="bg-brand-600 text-white px-5 py-2 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:bg-brand-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
