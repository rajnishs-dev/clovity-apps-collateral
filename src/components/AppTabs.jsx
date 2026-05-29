"use client";

import { useState } from "react";
import AppCard from "./AppCard";

const TABS = [
  { id: "all", label: "All Apps" },
  { id: "jira", label: "Jira Apps" },
  { id: "confluence", label: "Confluence Apps" },
];

export default function AppTabs({ apps }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? apps
      : active === "jira"
        ? apps.filter((a) => a.platform.includes("Jira"))
        : apps.filter((a) => a.platform.includes("Confluence"));

  const counts = {
    all: apps.length,
    jira: apps.filter((a) => a.platform.includes("Jira")).length,
    confluence: apps.filter((a) => a.platform.includes("Confluence")).length,
  };

  return (
    <div>
      {/* Tab Bar */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex gap-8 flex-wrap">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative flex items-center gap-2 py-3 text-sm font-medium transition-colors cursor-pointer focus:outline-none whitespace-nowrap
                  ${isActive ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`}
              >
                {tab.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-medium
                    ${isActive ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-400"}`}
                >
                  {counts[tab.id]}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-t" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
        {filtered.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}
