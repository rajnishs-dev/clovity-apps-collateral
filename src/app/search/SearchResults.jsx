"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const PAGE_SIZE = 10;

export default function SearchResults({ searchIndex }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [page, setPage] = useState(1);

  // Reset to page 1 whenever the query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  const results = query.trim()
    ? searchIndex.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.articleTitle.toLowerCase().includes(q) ||
          item.appName.toLowerCase().includes(q) ||
          item.categoryTitle.toLowerCase().includes(q)
        );
      })
    : [];

  const totalPages = Math.ceil(results.length / PAGE_SIZE);
  const pageItems = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <p className="text-gray-500 text-sm mb-6">
        {query ? (
          <span>
            <span className="font-semibold text-gray-800">{results.length}</span>{" "}
            result{results.length !== 1 ? "s" : ""} for{" "}
            <span className="font-semibold text-gray-800">
              &ldquo;{query}&rdquo;
            </span>
          </span>
        ) : (
          "Enter a keyword to search"
        )}
      </p>

      {pageItems.length > 0 ? (
        <>
          <ul className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
            {pageItems.map((item) => (
              <li key={`${item.appSlug}-${item.articleSlug}`}>
                <Link
                  href={item.url}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                >
                  {item.appIcon && (
                    <Image
                      src={item.appIcon}
                      alt=""
                      width={32}
                      height={32}
                      className="rounded shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {item.articleTitle}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">
                      {item.appName} · {item.categoryTitle}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-300 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <p className="text-xs text-gray-400">
                Showing {(page - 1) * PAGE_SIZE + 1}–
                {Math.min(page * PAGE_SIZE, results.length)} of {results.length}
              </p>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => p - 1)}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50
                             disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                  const nearCurrent = Math.abs(p - page) <= 1 || p === 1 || p === totalPages;
                  const isDivider =
                    (p === 2 && page > 3) || (p === totalPages - 1 && page < totalPages - 2);
                  if (!nearCurrent && !isDivider) return null;
                  if (isDivider && !nearCurrent)
                    return (
                      <span key={p} className="px-1 text-gray-300 text-sm select-none">
                        …
                      </span>
                    );
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`min-w-9 h-9 px-2 rounded-lg text-sm font-medium border transition-colors ${
                        p === page
                          ? "border-blue-600 text-white"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                      style={p === page ? { backgroundColor: "#0052CC" } : {}}
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  onClick={() => setPage((p) => p + 1)}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50
                             disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </>
      ) : query ? (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            No results found
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Try different keywords or{" "}
            <a
              href="https://clovity.com/contact"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              contact support
            </a>
          </p>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to all apps
          </Link>
        </div>
      ) : null}
    </div>
  );
}
