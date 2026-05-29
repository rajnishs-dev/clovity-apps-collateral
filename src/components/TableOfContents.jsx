"use client";
import { useEffect, useState } from "react";

const STICKY_OFFSET = 138; // navbar (81px) + app header (57px)

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractHeadings(content) {
  const headings = [];
  const seenIds = new Map();
  for (const line of content.split("\n")) {
    const match = line.match(/^(#{2,4})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const base = slugify(text);
      const count = (seenIds.get(base) ?? 0) + 1;
      seenIds.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      headings.push({ level, text, id });
    }
  }
  return headings;
}

function scrollToHeading(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET - 16;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function TableOfContents({ content }) {
  const headings = extractHeadings(content);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (headings.length === 0) return;
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr,
          );
          setActiveId(topmost.target.id);
        }
      },
      // top margin accounts for both sticky bars; bottom clips lower 60% of viewport
      { rootMargin: `-${STICKY_OFFSET + 4}px 0% -60% 0%`, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [content]);

  if (headings.length < 2) return null;

  return (
    <aside className="hidden xl:block w-48 xl:w-56 shrink-0 self-start sticky top-34.5 max-h-[calc(100vh-138px)] overflow-y-auto py-8 pl-5 border-l border-gray-200/90">
      <p className="text-[12px] font-semibold text-gray-600 tracking-wider mb-3">
        On this page
      </p>
      <nav className="flex flex-col gap-0.5">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToHeading(heading.id);
              setActiveId(heading.id);
            }}
            className={`block text-[12px] leading-snug py-1 transition-colors duration-150 ${
              heading.level === 2
                ? "pl-0"
                : heading.level === 3
                  ? "pl-3"
                  : "pl-5"
            } ${
              activeId === heading.id
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
