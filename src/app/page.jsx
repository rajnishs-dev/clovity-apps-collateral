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
