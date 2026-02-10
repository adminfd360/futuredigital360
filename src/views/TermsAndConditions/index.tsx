"use client";

import PageBanner from "@/containers/PageBanner";
import Section from "@/components/Section";
import { client } from "@/sanity/client";
import { useState, useEffect } from "react";

import bannerImg from "./assets/terms-banner.webp";

// Proper TypeScript interfaces
interface TextChild {
  _key: string;
  text: string;
  marks?: string[];
}

interface ContentBlock {
  _key: string;
  _type: string;
  children: TextChild[];
}

interface TermsItem {
  _id: string;
  title: string;
  isActive: boolean;
  content: ContentBlock[];
  _createdAt: string;
}

const TERMS_QUERY = `*[_type == "termsAndConditions"] | order(order asc) {
                      _id,
                        order,
                        title,
                        isActive,
                        content,
                        _createdAt
                      }`;

const TermsAndConditions = () => {
  const [termsData, setTermsData] = useState<TermsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchTermsData = async () => {
      try {
        const data = await client.fetch<TermsItem[]>(TERMS_QUERY);
        setTermsData(data);
      } catch (err) {
        console.error("Error fetching terms data:", err);
        setError(
          "Failed to load terms and conditions. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTermsData();
  }, []);

  const renderContent = (content: ContentBlock[]) => {
    return content.map((block) => {
      if (block._type !== "block") return null;

      return (
        <p key={block._key} className="leading-7">
          {block.children.map((child) => {
            if (child.marks?.includes("strong")) {
              return <strong key={child._key}>{child.text}</strong>;
            }
            return <span key={child._key}>{child.text}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <>
      <PageBanner title="Terms And Conditions" bannerImg={bannerImg.src} />
      <Section>
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <p className="text-red-500 text-center py-8">{error}</p>
        ) : termsData.length > 0 ? (
          <div className="prose prose-lg max-w-none">
            {termsData.map((term) => (
              <div key={term._id} className="mb-8">
                <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">
                  {term.title}
                </h2>
                {renderContent(term.content)}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-8 text-gray-500">
            No terms and conditions content available.
          </p>
        )}
      </Section>
    </>
  );
};

const LoadingSkeleton = () => (
  <div className="space-y-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="animate-pulse space-y-4">
        <div className="h-4 w-1/3 rounded bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>
      </div>
    ))}
  </div>
);

export default TermsAndConditions;
