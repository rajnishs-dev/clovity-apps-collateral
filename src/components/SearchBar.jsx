"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SearchBar({ className = "", searchIndex = [] }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    const q = query.toLowerCase();
    const matches = searchIndex
      .filter(
        (item) =>
          item.articleTitle.toLowerCase().includes(q) ||
          item.appName.toLowerCase().includes(q) ||
          item.categoryTitle.toLowerCase().includes(q),
      )
      .slice(0, 8);
    setSuggestions(matches);
    setOpen(matches.length > 0);
    setActiveIdx(-1);
  }, [query, searchIndex]);

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function submitSearch() {
    if (query.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  function handleKeyDown(e) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      const item = suggestions[activeIdx];
      setOpen(false);
      setQuery("");
      router.push(item.url);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form onSubmit={(e) => { e.preventDefault(); submitSearch(); }}>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setOpen(true)}
            placeholder="Search documentation..."
            autoComplete="off"
            className="w-full pl-10 pr-28 py-3 text-sm border border-gray-200 rounded-xl
                       bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-transparent text-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 leading-4.5 text-xs
                      cursor-pointer font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0052CC" }}
          >
            Search
          </button>
        </div>
      </form>

      {open && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1.5 max-h-70 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
          <ul role="listbox">
            {suggestions.map((item, idx) => (
              <li key={`${item.appSlug}-${item.articleSlug}`} role="option">
                <Link
                  href={item.url}
                  onClick={() => { setOpen(false); setQuery(""); }}
                  className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                    idx === activeIdx ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                >
                  {item.appIcon && (
                    <Image
                      src={item.appIcon}
                      alt=""
                      width={24}
                      height={24}
                      className="rounded shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {item.articleTitle}
                    </p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">
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
          <div className="border-t border-gray-100 px-4 py-2.5 bg-gray-50">
            <button
              type="button"
              onClick={submitSearch}
              className="text-xs text-blue-600 hover:underline w-full text-left"
            >
              See all results for &ldquo;{query}&rdquo; →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
