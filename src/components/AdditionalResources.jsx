"use client";

import { useState } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle,
  LayoutGrid,
  Building2,
  Presentation,
  ChevronRight,
} from "lucide-react";

const RESOURCES = [
  {
    id: "suite-overview",
    label: "Apps Suite Overview",
    icon: LayoutGrid,
    color: "#3B82F6",
    coverFrom: "#2563EB",
    coverTo: "#1D4ED8",
    title: "Clovity Apps Suite Overview",
    tagline:
      "A consolidated view of all Clovity Atlassian marketplace apps — built for migration, governance, and scale.",
    pdfUrl:
      "https://clovity-website.s3.ap-south-1.amazonaws.com/App_Suite_Overview_0d66892a10.pdf",
    stats: [
      { label: "Apps in Suite", value: "5+" },
      { label: "Plugins Replaced", value: "15–25" },
      { label: "Platforms", value: "Jira & Confluence" },
    ],
    highlights: [
      "5 consolidated apps replacing 15–25 fragmented marketplace plugins",
      "Covers Jira and Confluence — time tracking, charts, formatting, reports, and LaTeX",
      "Migration-ready architecture designed for DC-to-Cloud transitions",
      "AGC-aligned and governance-ready for regulated and public-sector environments",
      "Trusted by Federal Agencies, State Governments, Universities, and Fortune 500 Enterprises",
    ],
  },
  {
    id: "agc-brochure",
    label: "AGC Apps Brochure",
    icon: Building2,
    color: "#6366F1",
    coverFrom: "#4F46E5",
    coverTo: "#3730A3",
    title: "AGC Apps Brochure",
    tagline:
      "Purpose-built for Atlassian Government Cloud — governance-aligned, compliance-aware, and public-sector proven.",
    pdfUrl:
      "https://clovity-website.s3.ap-south-1.amazonaws.com/Clovity_AGC_App_Brochure_9cdde198e4.pdf",
    stats: [
      { label: "Gov't Clients", value: "14+" },
      { label: "Cloud Tier", value: "AGC" },
      { label: "Partnership", value: "Platinum" },
    ],
    highlights: [
      "Atlassian Government Cloud (AGC) compliant apps for regulated environments",
      "Designed for federal agencies, SLED organizations, and compliance-driven teams",
      "Reduced vendor surface area — fewer apps, fewer contracts, less risk",
      "Governance controls built into every product from the ground up",
      "Deployed at IRS, NASA, Coast Guard, HHS, CA Air Resources Board, and more",
    ],
  },
  {
    id: "apps-deck",
    label: "Clovity Apps Deck",
    icon: Presentation,
    color: "#7C3AED",
    coverFrom: "#7C3AED",
    coverTo: "#5B21B6",
    title: "Clovity Apps Deck",
    tagline:
      "Empowering Public-Sector & Enterprise Innovation through integrated migration services and consolidated Atlassian apps.",
    pdfUrl:
      "https://clovity-website.s3.ap-south-1.amazonaws.com/Clovity_Apps_Deck_eb23aa9e16.pdf",
    stats: [
      { label: "Atlassian Tier", value: "Platinum" },
      { label: "Silver → Platinum", value: "18 mo" },
      { label: "Gov't Agencies", value: "14+" },
    ],
    highlights: [
      "Platinum Atlassian Solution Partner — Silver to Platinum in record-breaking 18 months",
      "\"Stop the App Crawl\" — consolidate 15–25 DC plugins into 5 focused application suites",
      "Engineered from real migration friction — built iteratively with field feedback across clients",
      "Roadmap: Cross-Tool Integrations → Workflow Automation → Work Item Execution Tools",
      "Trusted by IRS, NASA, U.S. Coast Guard, HHS, Metra, and 10+ government agencies worldwide",
    ],
    consolidation: {
      from: [
        "Time Tracking (4 apps)",
        "Capacity Planning (2 apps)",
        "Roadmapping / Gantt (3 apps)",
        "Reporting (3–5 apps)",
        "Formatting & Navigation (4 apps)",
      ],
      to: [
        "Jira Time, Capacity & PPM Suite",
        "Jira Custom Charts & Dashboards",
        "Confluence Formatting & Visibility Suite",
        "Confluence Custom Reporting",
        "LaTeX + UML for Confluence",
      ],
    },
    trustedBy: [
      "IRS",
      "NASA",
      "U.S. Coast Guard",
      "HHS",
      "Metra",
      "State of California",
      "EDD",
      "DSH",
      "CA Consumer Affairs",
      "San Diego County",
      "U of Utah Health",
      "State of Minnesota",
      "NCSA",
      "CA Air Resources Board",
    ],
  },
];

export default function AdditionalResources() {
  const [activeTab, setActiveTab] = useState("suite-overview");
  const resource = RESOURCES.find((r) => r.id === activeTab);

  return (
    <div className="mt-12">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <p className="text-sm font-semibold tracking-widest text-gray-600 whitespace-nowrap">
          ADDITIONAL RESOURCES
        </p>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {RESOURCES.map((r) => {
          const Icon = r.icon;
          const isActive = activeTab === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveTab(r.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "text-white border-transparent shadow-md"
                  : "text-gray-600 bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
              style={
                isActive
                  ? { backgroundColor: r.color, borderColor: r.color }
                  : {}
              }
            >
              <Icon size={14} />
              {r.label}
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      {resource && (
        <div
          key={resource.id}
          className="rounded-xl border border-gray-200 overflow-hidden bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left: decorative cover */}
            <div
              className="md:col-span-2 p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${resource.coverFrom} 0%, ${resource.coverTo} 100%)`,
              }}
            >
              {/* Decorative circles */}
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-2 border-white/10" />
              <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full border-2 border-white/10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border-2 border-white/10" />

              {/* PDF document icon */}
              <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="w-20 h-24 bg-white/15 rounded-lg border border-white/30 flex items-center justify-center shadow-xl backdrop-blur-sm">
                  <FileText size={32} className="text-white" />
                </div>
                <div className="text-center px-2">
                  <p className="text-white font-bold text-base leading-snug">
                    {resource.title}
                  </p>
                  <p className="text-white/60 text-xs mt-1">PDF Document</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="relative z-10 mt-6 grid grid-cols-3 gap-2 w-full">
                {resource.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/15 rounded-lg p-2 text-center border border-white/20"
                  >
                    <p className="text-white font-bold text-xs leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-[10px] mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: content */}
            <div className="md:col-span-3 p-7 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                {resource.tagline}
              </p>

              {/* Key highlights */}
              <div className="mb-5">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Key Highlights
                </p>
                <ul className="space-y-2">
                  {resource.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-700"
                    >
                      <CheckCircle
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: resource.color }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consolidation table — Apps Deck only */}
              {resource.consolidation && (
                <div className="mb-5 rounded-lg border border-gray-100 overflow-hidden text-xs">
                  <div className="grid grid-cols-2 divide-x divide-gray-100">
                    <div className="p-3 bg-gray-50">
                      <p className="font-semibold text-gray-500 mb-2">
                        Traditional DC Stack
                      </p>
                      {resource.consolidation.from.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-1.5 text-gray-500 py-1 border-b border-gray-100 last:border-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="p-3">
                      <p className="font-semibold mb-2" style={{ color: resource.color }}>
                        Consolidated Suite
                      </p>
                      {resource.consolidation.to.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-1.5 text-gray-700 font-medium py-1 border-b border-gray-100 last:border-0"
                        >
                          <ChevronRight
                            size={12}
                            className="shrink-0"
                            style={{ color: resource.color }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Trusted by — Apps Deck only */}
              {resource.trustedBy && (
                <div className="mb-5">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Trusted By
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {resource.trustedBy.map((agency) => (
                      <span
                        key={agency}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-gray-100 text-gray-600"
                      >
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Download + View buttons */}
              <div className="mt-auto pt-2 flex flex-wrap gap-3">
                <a
                  href={resource.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                  style={{ backgroundColor: resource.color }}
                >
                  <Download size={14} />
                  Download PDF
                </a>
                <a
                  href={resource.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ExternalLink size={14} />
                  View in Browser
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
