"use client";

import { useState } from "react";
import { cx } from "@/lib/utils";

type TruncateTextProps = {
  text: string;
  maxLength?: number;
  className?: string;
  expandText?: string;
  collapseText?: string;
};

const TruncateText = ({
  text,
  maxLength = 90,
  className,
  expandText = "...",
  collapseText = " (show less)",
}: TruncateTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If text is shorter than maxLength, no need to truncate
  if (text.length <= maxLength) {
    return <span className={className}>{text}</span>;
  }

  const truncatedText = text.slice(0, maxLength);
  const displayText = isExpanded ? text : truncatedText;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <span className={cx(className)}>
      {displayText}
      {!isExpanded ? (
        <button
          onClick={handleToggle}
          className="font-bold cursor-pointer hover:opacity-80 transition-opacity ml-1 text-brand-500"
          aria-label="Expand text"
        >
          {expandText}
        </button>
      ) : (
        <button
          onClick={handleToggle}
          className="text-inherit underline cursor-pointer hover:opacity-80 transition-opacity ml-1"
          aria-label="Collapse text"
        >
          {collapseText}
        </button>
      )}
    </span>
  );
};

export default TruncateText;
