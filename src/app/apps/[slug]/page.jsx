import { apps } from "@/data/apps";
import { timeTrackingDocs } from "@/data/time-tracking-docs";
import { dashboardChartsDocs } from "@/data/dashboard-charts-docs";
import { reportsChartsConfluenceDocs } from "@/data/reports-charts-confluence-docs";
import { latexDiagramsConfluenceDocs } from "@/data/latex-diagrams-confluence-docs";
import { jqlaiDocs } from "@/data/jql-ai";
import { contentFormattingConfluenceDocs } from "@/data/content-formatting-confluence-docs";
import { backlogAuditorDocs } from "@/data/backlog-auditor-docs";
import { pulseAiJiraDocs } from "@/data/pulse-ai-jira-docs";
import Sidebar from "@/components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";
import { additionalResourcesDocs } from "@/data/additional-resources-docs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Rocket,
  BarChart2,
  Clock,
  Briefcase,
  ListOrdered,
  Users,
  Shield,
  Settings,
  LifeBuoy,
  FileText,
  PieChart,
  List,
  Filter,
  Settings2,
  Table,
  BarChart,
  Sparkles,
  BookOpen,
  Gift,
  Zap,
  Code,
} from "lucide-react";

function withResources(docs) {
  return {
    ...docs,
    categories: [...docs.categories, ...additionalResourcesDocs.categories],
  };
}

const docsMap = {
  "time-tracking-jira": withResources(timeTrackingDocs),
  "dashboard-charts-jira": withResources(dashboardChartsDocs),
  "reports-charts-confluence": withResources(reportsChartsConfluenceDocs),
  "latex-diagrams-confluence": withResources(latexDiagramsConfluenceDocs),
  "content-formatting-confluence": withResources(contentFormattingConfluenceDocs),
  "backlog-auditor-jira": withResources(backlogAuditorDocs),
  "jql-ai-jira": withResources(jqlaiDocs),
  "pulse-ai-jira": withResources(pulseAiJiraDocs),
};

const CATEGORY_META = {
  Overview: {
    icon: LayoutDashboard,
    summary: "Bird's-eye view of all features and capabilities.",
  },
  "Getting Started": {
    icon: Rocket,
    summary: "Set up the app quickly with step-by-step guides.",
  },
  "Get Started": {
    icon: Rocket,
    summary: "Install and configure the app in just a few steps.",
  },
  "Capacity Planner & Insight": {
    icon: BarChart2,
    summary: "Plan team capacity and gain actionable workload insights.",
  },
  "Time Tracking and Reporting": {
    icon: Clock,
    summary: "Log work hours and generate detailed time reports.",
  },
  "Project Portfolio Management": {
    icon: Briefcase,
    summary: "Manage multiple projects and track cross-portfolio progress.",
  },
  "Backlog Prioritization": {
    icon: ListOrdered,
    summary: "Prioritize backlog items to keep the team focused.",
  },
  "Teams management": {
    icon: Users,
    summary: "Organize team members, roles, and responsibilities.",
  },
  "Permissions & RBAC": {
    icon: Shield,
    summary: "Control access with fine-grained role-based permissions.",
  },
  "Global Setting": {
    icon: Settings,
    summary: "Configure app-wide preferences and default settings.",
  },
  "Help & Support": {
    icon: LifeBuoy,
    summary: "Raise tickets or browse resources to get quick help.",
  },
  "End User License Agreement (Eula)": {
    icon: FileText,
    summary: "Review the terms and conditions for using this app.",
  },
  "End User License Agreement": {
    icon: FileText,
    summary: "Review the licensing terms before using this app.",
  },
  "Custom Charts Gadget": {
    icon: PieChart,
    summary: "Build custom chart gadgets to visualize Jira data your way.",
  },
  "Issue List Gadget": {
    icon: List,
    summary: "Display filtered Jira issue lists as interactive gadgets.",
  },
  "Dynamic Filter Controller": {
    icon: Filter,
    summary: "Control multiple gadgets dynamically with a single filter.",
  },
  "Admin Settings": {
    icon: Settings2,
    summary: "Manage global configurations and admin-level preferences.",
  },
  "Custom Tabular Report": {
    icon: Table,
    summary: "Create structured tabular reports from Jira data in Confluence.",
  },
  "Custom Charts Report": {
    icon: BarChart,
    summary: "Visualize Jira metrics with customizable chart reports.",
  },
  Features: {
    icon: Sparkles,
    summary: "Explore all features available in this app.",
  },
  Guidelines: {
    icon: BookOpen,
    summary: "Best practices and usage guidelines for effective reporting.",
  },
  "What You Get": {
    icon: Gift,
    summary: "Discover what this app brings to your Confluence pages.",
  },
  "Quick Start": {
    icon: Zap,
    summary: "Start rendering LaTeX diagrams in Confluence within minutes.",
  },
  "Macro Reference": {
    icon: Code,
    summary: "Full reference for all macro options and syntax.",
  },
  "User Guide": {
    icon: BookOpen,
    summary:
      "Navigate the app with feature breakdowns, tutorials, and best practices.",
  },
  "Admin Settings": {
    icon: Settings2,
    summary:
      "Configure global settings, roles, permissions, and data security.",
  },
  "Release Notes": {
    icon: Sparkles,
    summary: "Latest updates, changelog, and upcoming features on the roadmap.",
  },
  "Integrations & Migration": {
    icon: Zap,
    summary: "Connect third-party tools and migrate data to or from the app.",
  },
  "Use Cases": {
    icon: Briefcase,
    summary:
      "Real-world examples, industry scenarios, and ready-to-use templates.",
  },
  "Help Center": {
    icon: LifeBuoy,
    summary: "FAQs, troubleshooting guides, and support contact options.",
  },
  "Additional Resources": {
    icon: FileText,
    summary: "Apps Suite Overview, AGC Apps Brochure, and Clovity Apps Deck - download any as PDF.",
  },
  Dashboard: {
    icon: LayoutDashboard,
    summary: "Pulse Score, findings table, and AI assistant overview.",
  },
  Governance: {
    icon: Shield,
    summary: "Audit projects, users, permissions, and group hygiene.",
  },
  "Workflows & Schemes": {
    icon: Settings2,
    summary: "Detect unused, duplicate, and dead-end workflows and schemes.",
  },
  Configuration: {
    icon: Settings,
    summary: "Audit custom fields, screens, work types, and global config.",
  },
  "Sprints & Delivery": {
    icon: Zap,
    summary: "Sprint health, risk thresholds, and AI delivery intelligence.",
  },
  "AI & Agents": {
    icon: Sparkles,
    summary: "Advance agents, active subscriptions, and reporting modules.",
  },
  Settings: {
    icon: Settings,
    summary: "Scan schedule, scoring weights, agent position, and action log.",
  },
  "Building Rulesets": {
    icon: Settings2,
    summary: "Create and manage rule-based audit checklists for your project.",
  },
  "Running Audits": {
    icon: BarChart2,
    summary: "Execute audits and interpret visual reports and violation data.",
  },
  "Rule Conditions": {
    icon: Filter,
    summary: "Explore all supported conditions by field type with examples.",
  },
  "Safety Nets & Best Practices": {
    icon: Shield,
    summary:
      "Unsaved changes protection, safeguards, and tips for effective auditing.",
  },
};

const ACCENT_COLORS = [
  { bar: "#3B82F6", iconBg: "#EFF6FF", iconText: "#1D4ED8" },
  { bar: "#6366F1", iconBg: "#EEF2FF", iconText: "#4338CA" },
  { bar: "#8B5CF6", iconBg: "#F5F3FF", iconText: "#6D28D9" },
  { bar: "#10B981", iconBg: "#ECFDF5", iconText: "#065F46" },
  { bar: "#F59E0B", iconBg: "#FFFBEB", iconText: "#92400E" },
  { bar: "#EF4444", iconBg: "#FEF2F2", iconText: "#991B1B" },
  { bar: "#06B6D4", iconBg: "#ECFEFF", iconText: "#155E75" },
  { bar: "#14B8A6", iconBg: "#F0FDFA", iconText: "#134E4A" },
];

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.shortName} Documentation - Clovity Apps Collateral`,
    description: app.description,
  };
}

export default async function AppPage({ params }) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  const docs = docsMap[slug];
  const isJira = app.platform.includes("Jira");

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {/* App sub-header breadcrumb */}
      <div className=" top-[80.8px] border-b border-gray-200 bg-white sticky z-30">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-medium truncate">
              {app.shortName}
            </span>
          </nav>
        </div>
      </div>

      {docs ? (
        <div>
          {/* Hero section - full width, no sidebar */}
          <div
            className="border-b border-gray-100"
            style={{
              background: isJira
                ? "linear-gradient(135deg, #f0f5ff 0%, #ffffff 50%, #f5f3ff 100%)"
                : "linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #f0fdf4 100%)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
              <div className="flex flex-col sm:flex-row items-start gap-7">
                <div className="w-20 h-20 rounded-xl overflow-hidden  shadow-xl shrink-0">
                  <Image
                    src={app.icon}
                    alt={app.shortName}
                    width={76}
                    height={76}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
                    {app.name}
                  </h1>
                  <p className="text-gray-500 text-base mb-6 max-w-2xl leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={app.marketplaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-md hover:opacity-90 transition-opacity shadow-md"
                      style={{ backgroundColor: "#0052CC" }}
                    >
                      View on Marketplace
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation categories grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <p className="text-sm font-semibold tracking-widest text-gray-600 mb-6">
              Documentation
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {docs.categories.filter((cat) => cat.title !== "Help & Support" && cat.title !== "Help Center").map((cat, idx) => {
                const color = ACCENT_COLORS[idx % ACCENT_COLORS.length];
                const meta = CATEGORY_META[cat.title];
                const IconComponent = meta?.icon ?? FileText;
                const summary =
                  meta?.summary ??
                  `${cat.articles.length} ${cat.articles.length === 1 ? "article" : "articles"}`;
                return (
                  <Link
                    key={cat.id}
                    href={`/apps/${slug}/${cat.articles[0].slug}`}
                    className="group relative flex flex-col rounded-md border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex flex-col flex-1 p-5">
                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 shrink-0"
                        style={{ backgroundColor: color.iconBg }}
                      >
                        <IconComponent
                          size={20}
                          stroke={color.bar}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Heading */}
                      <h3 className="font-semibold text-gray-900 text-[15px] leading-snug mb-1.5 group-hover:opacity-80 transition-opacity">
                        {cat.title}
                      </h3>

                      {/* Short summary */}
                      <p className="text-sm text-gray-400 flex-1">{summary}</p>

                      {/* CTA */}
                      <div
                        className="mt-5 flex items-center gap-1.5 text-xs font-semibold group-hover:gap-3 transition-all duration-150"
                        style={{ color: color.bar }}
                      >
                        Read docs
                        <svg
                          className="w-3.5 h-3.5"
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
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Support footer */}
            <div className="mt-12 p-6 rounded-md border border-gray-200 bg-gradient-to-r from-slate-50 to-blue-50/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Still need help?
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Contact our Atlassian-certified support team
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="mailto:developers@clovity.com"
                  className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Email Support
                </a>
                <Link
                  href={`/apps/${slug}/contact-support`}
                  className="px-4 py-2 text-xs font-semibold text-white rounded-md hover:opacity-90 transition-opacity shadow-sm"
                  style={{ backgroundColor: "#0052CC" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Legacy sections layout for apps without structured docs */
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex gap-10">
            <Sidebar sections={app.sections} />
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-200 shrink-0 shadow-sm">
                  <Image
                    src={app.icon}
                    alt={app.shortName}
                    width={64}
                    height={64}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">
                    {app.name}
                  </h1>
                  <p className="text-gray-500 text-sm">{app.description}</p>
                </div>
              </div>

              <div className="space-y-10">
                {app.sections.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    {i > 0 && (
                      <div className="border-t border-gray-100 mb-10" />
                    )}
                    <h2 className="text-base font-bold text-gray-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-16 p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Still need help?
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Contact our support team directly
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href="mailto:info-global@clovity.com"
                    className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Email Support
                  </a>
                  <a
                    href="https://clovity.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#0052CC" }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
