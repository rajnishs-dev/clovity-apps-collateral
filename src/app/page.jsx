import SearchBarWrapper from "@/components/SearchBarWrapper";
import AppTabs from "@/components/AppTabs";
import { apps } from "@/data/apps";

const jiraCount = apps.filter((a) => a.platform.includes("Jira")).length;
const confluenceCount = apps.filter((a) =>
  a.platform.includes("Confluence"),
).length;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
            Atlassian Platinum Partner
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            Clovity Apps Collateral
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Product documentation, user guides, and resources for all Clovity
            apps
          </p>
          <SearchBarWrapper />
        </div>
      </div>

      {/* Apps section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Apps</h2>
          <p className="text-sm text-gray-500 mt-1">
            Select an app to browse its documentation and guides.
          </p>
        </div>

        <AppTabs apps={apps} />

        {/* All Apps Pricing */}
        <div className="mt-12 rounded-md border border-blue-100 bg-blue-50 p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                All Apps Pricing
              </h3>
              <p className="text-gray-500 text-sm max-w-xl">
                Annual Cloud pricing for every Clovity app - Dashboard Charts,
                Time Tracking, Content Formatting, Reports &amp; Charts, and
                LaTeX Diagrams - in one document.
              </p>
            </div>
            <a
              href="https://clovity-website.s3.ap-south-1.amazonaws.com/All_Apps_pricing_doc_Final_78c87b5312.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0052CC" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Pricing PDF
            </a>
          </div>
        </div>

        {/* App Resources */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              App Resources
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
              Explore our brochures, overviews, and decks to learn how
              Clovity&apos;s Atlassian apps can power your workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Card 1 - Apps Suite Overview */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="flex-1">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#0052CC" }}
                >
                  PDF Overview
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Apps Suite Overview
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A comprehensive look at all Clovity Atlassian apps &mdash;
                  features, use cases, and how they work together to power your
                  team.
                </p>
              </div>
              <a
                href="https://clovity-website.s3.ap-south-1.amazonaws.com/App_Suite_Overview_0d66892a10_9bd0021248.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-md hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0052CC" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                View PDF
              </a>
            </div>

            {/* Card 2 - AGC App Brochure */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
              </div>
              <div className="flex-1">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#0052CC" }}
                >
                  Brochure
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  AGC App Brochure
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Deep-dive into Clovity&apos;s AGC apps &mdash; built for
                  Atlassian Government Cloud with enterprise-grade compliance
                  and security.
                </p>
              </div>
              <a
                href="https://clovity-website.s3.ap-south-1.amazonaws.com/Clovity_AGC_App_Brochure_9cdde198e4_37524b21ac.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-md hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0052CC" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                View PDF
              </a>
            </div>

            {/* Card 3 - Clovity Apps Deck */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <polyline points="7 10 12 7 17 10" />
                </svg>
              </div>
              <div className="flex-1">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#0052CC" }}
                >
                  Presentation
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Clovity Apps Deck
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A visual presentation deck covering the full Clovity apps
                  portfolio &mdash; ideal for sharing with your team or
                  stakeholders.
                </p>
              </div>
              <a
                href="https://clovity-website.s3.ap-south-1.amazonaws.com/Clovity_Apps_Deck_eb23aa9e16_81736f0216.pptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-md hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0052CC" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                View Deck
              </a>
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-14 rounded-md border border-gray-200 bg-gray-50 p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            Need more help?
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Contact our Atlassian-certified support team or raise a ticket.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://clovity.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0052CC" }}
            >
              Contact Support
            </a>
            <a
              href="https://marketplace.atlassian.com/vendors/398573336/clovity"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-gray-700 rounded-md border border-gray-200 bg-white hover:bg-gray-100 transition-colors"
            >
              View All Apps on Marketplace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
