"use client";
import { useState, useEffect } from "react";

export default function Sidebar({ sections }) {
  const [active, setActive] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  }

  return (
    <aside className="hidden lg:block w-56 flex-shrink-0">
      <div className="sticky top-24">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
          On this page
        </p>
        <nav className="space-y-0.5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-150
                ${
                  active === section.id
                    ? "bg-blue-50 text-blue-700 font-medium border-l-2 border-blue-700"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
