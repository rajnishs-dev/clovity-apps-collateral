"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function DocSidebar({ docs, appSlug, activeArticleSlug }) {
  const scrollRef = useRef(null);
  const SCROLL_KEY = `sidebar-scroll-${appSlug}`;
  const OPEN_KEY = `sidebar-open-${appSlug}`;

  // Server-safe default - no sessionStorage here (avoids hydration mismatch)
  const [openCategories, setOpenCategories] = useState(() => {
    const initial = {};
    for (const cat of docs.categories) {
      initial[cat.id] = cat.articles.some((a) => a.slug === activeArticleSlug);
    }
    return initial;
  });

  // Restore open state + scroll before first paint - eliminates flicker
  useLayoutEffect(() => {
    try {
      const saved = sessionStorage.getItem(OPEN_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        for (const cat of docs.categories) {
          if (cat.articles.some((a) => a.slug === activeArticleSlug)) {
            parsed[cat.id] = true;
          }
        }
        setOpenCategories(parsed);
      }
    } catch {}

    try {
      const savedScroll = sessionStorage.getItem(SCROLL_KEY);
      if (savedScroll && scrollRef.current) {
        scrollRef.current.scrollTop = parseInt(savedScroll, 10);
      }
    } catch {}
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist open state
  useEffect(() => {
    try { sessionStorage.setItem(OPEN_KEY, JSON.stringify(openCategories)); } catch {}
  }, [openCategories, OPEN_KEY]);

  // Save scroll position on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      try { sessionStorage.setItem(SCROLL_KEY, String(el.scrollTop)); } catch {}
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [SCROLL_KEY]);

  function toggleCategory(catId) {
    setOpenCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }

  return (
    <aside className="hidden lg:block w-56 xl:w-60 shrink-0">
      <div ref={scrollRef} className="sticky top-34.5 h-[calc(100vh-138px)] overflow-y-auto py-8 pr-5 border-r border-gray-200/90">

          <nav className="flex flex-col gap-5">
            {docs.categories.map((cat) => {
              const isOpen = openCategories[cat.id];
              const hasActive = cat.articles.some(
                (a) => a.slug === activeArticleSlug,
              );

              return (
                <div key={cat.id}>
                  {/* Category toggle */}
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => toggleCategory(cat.id)}
                    className={`w-full text-left flex items-center justify-between mb-1.5 group transition-colors duration-150 cursor-pointer ${
                      hasActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    <span className="text-[13px] font-semibold">
                      {cat.title}
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-3 h-3 shrink-0 opacity-60" />
                    ) : (
                      <ChevronRight className="w-3 h-3 shrink-0 opacity-60" />
                    )}
                  </button>

                  {/* Article list */}
                  {isOpen && (
                    <ul className="border-l border-gray-200 ml-0.5">
                      {cat.articles.map((article) => {
                        const isActive = article.slug === activeArticleSlug;
                        return (
                          <li key={article.slug}>
                            <Link
                              href={`/apps/${appSlug}/${article.slug}`}
                              className={`relative flex items-start pl-4 pr-1 py-1.5 text-[13px] leading-snug transition-all duration-150 ${
                                isActive
                                  ? "text-blue-700 font-medium"
                                  : "text-gray-700 hover:text-gray-900"
                              }`}
                            >
                              <span
                                className={`absolute -left-px top-0 bottom-0 w-px rounded-full transition-colors duration-150 ${
                                  isActive ? "bg-blue-600" : "bg-transparent"
                                }`}
                              />
                              {article.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
      
      </div>
    </aside>
  );
}
