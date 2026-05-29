const AGENCIES = [
  "IRS","NASA","U.S. Coast Guard","HHS","Metra","State of California",
  "EDD","DSH","CA Consumer Affairs","County of San Diego",
  "U of Utah Health","State of Minnesota","NCSA","CA Air Resources Board",
];

const agencyBadges = AGENCIES.map(
  (a) =>
    `<span style="background:#f1f5f9;color:#475569;font-size:12px;font-weight:500;padding:4px 10px;border-radius:6px;border:1px solid #e2e8f0;display:inline-block;">${a}</span>`
).join(" ");

const downloadCTA = (url, label, ext, showViewInBrowser = true) =>
  `<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">${label}</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="${url}" download style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download ${ext}</a>
    ${showViewInBrowser ? `<a href="${url}" target="_blank" rel="noopener noreferrer" style="background:white;color:#374151;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;border:1px solid #d1d5db;display:inline-block;">View in Browser</a>` : ""}
  </div>
</div>`;

const badge = (text) =>
  `<span style="background:#eff6ff;color:#1d4ed8;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:700;letter-spacing:0.8px;border:1px solid #dbeafe;display:inline-block;">${text}</span>`;

const sectionHeader = (title, subtitle) =>
  `<div style="margin-bottom:20px;">
  <h2 style="font-size:20px;font-weight:800;color:#111827;margin:0 0 6px;">${title}</h2>
  ${subtitle ? `<p style="font-size:13px;color:#6b7280;margin:0;">${subtitle}</p>` : ""}
</div>`;

const compareTable = (leftTitle, leftItems, rightTitle, rightItems) =>
  `<div style="display:grid;grid-template-columns:1fr 1fr;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
  <div style="border-right:1px solid #e2e8f0;">
    <div style="background:#f1f5f9;padding:11px 16px;border-bottom:1px solid #e2e8f0;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.6px;">${leftTitle}</div>
    ${leftItems.map((t) => `<div style="padding:11px 16px;border-bottom:1px solid #f1f5f9;font-size:13px;color:#6b7280;display:flex;align-items:center;gap:8px;"><span style="color:#cbd5e1;font-size:10px;">◆</span>${t}</div>`).join("")}
  </div>
  <div>
    <div style="background:#f8fafc;padding:11px 16px;border-bottom:1px solid #e2e8f0;font-size:11px;font-weight:700;color:#1d4ed8;text-transform:uppercase;letter-spacing:0.6px;">${rightTitle}</div>
    ${rightItems.map((t) => `<div style="padding:11px 16px;border-bottom:1px solid #f8fafc;background:white;font-size:13px;color:#1e40af;font-weight:500;display:flex;align-items:center;gap:8px;"><span style="color:#93c5fd;font-size:10px;">◆</span>${t}</div>`).join("")}
  </div>
</div>`;

const featureBox = (title, bullets) =>
  `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:13px;">
  <div style="font-size:11px;font-weight:700;color:#374151;margin-bottom:7px;text-transform:uppercase;letter-spacing:0.5px;">${title}</div>
  <div style="font-size:12px;color:#6b7280;line-height:1.85;">${bullets.map((b) => `❖ ${b}`).join("<br>")}</div>
</div>`;

const appCard = (title, subtitle, featurePairs, perfectFor) =>
  `<div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:14px;">
  <div style="background:#f8fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:2px;">${title}</div>
    <div style="font-size:12px;color:#6b7280;">${subtitle}</div>
  </div>
  <div style="padding:16px 20px;background:white;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">${featurePairs.map(([t, b]) => featureBox(t, b)).join("")}</div>
    <div style="background:#f1f5f9;border-radius:6px;padding:9px 14px;font-size:12px;color:#64748b;"><span style="font-weight:700;color:#374151;margin-right:6px;">Perfect for:</span>${perfectFor}</div>
  </div>
</div>`;

// ─── ARTICLE 1: APPS SUITE OVERVIEW ──────────────────────────────────────────

const appsSuiteContent = `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:28px 24px;margin-bottom:28px;background:#f8fafc;text-align:center;">
  ${badge("ATLASSIAN PLATINUM SOLUTION PARTNER")}
  <h1 style="font-size:26px;font-weight:800;color:#111827;margin:16px 0 10px;line-height:1.3;">Clovity Apps Suite Overview</h1>
  <p style="color:#6b7280;font-size:14px;margin:0 auto;max-width:540px;line-height:1.7;">5 consolidated Atlassian apps that replace 15–25 fragmented plugins — migration-ready, AGC-aligned, and built for regulated environments.</p>
</div>

${sectionHeader("The Consolidation Opportunity", "Every DC-to-Cloud migration is a chance to stop app sprawl. Replace categories — not just plugins.")}

${compareTable(
  "Traditional DC Stack (14+ Apps)",
  ["Time Tracking — 4 apps","Capacity Planning — 2 apps","Roadmapping / Gantt — 3 apps","Reporting — 3–5 apps","Formatting &amp; Navigation — 4 apps"],
  "Consolidated Suite (5 Apps)",
  ["Jira Time, Capacity &amp; PPM Suite","Jira Custom Charts &amp; Dashboards","Confluence Formatting &amp; Visibility Suite","Confluence Custom Reporting","LaTeX + UML for Confluence"]
)}

${sectionHeader("The 5 Apps")}

${appCard(
  "Jira Time, Capacity &amp; PPM Suite",
  "Time Tracking · Capacity Planning · Backlog Prioritization · Portfolio Management",
  [
    ["Time Tracking", ["Timesheets tracking","Billable hours","Calendar visibility"]],
    ["Capacity Planning", ["Team utilization","Workload forecast"]],
    ["Backlog Prioritization", ["RICE / WSJF scoring","Priority matrix"]],
    ["Portfolio Management", ["Gantt timeline","Resource allocation","Resources clarity"]],
  ],
  "Agile Teams · Project Managers · Product Owners · Portfolio Managers · Engineering Leaders · Finance Teams"
)}

${appCard(
  "Jira Custom Charts &amp; Dashboards",
  "Visual Analytics · Multi-Project Comparison · Export-Ready Reports",
  [
    ["Charts &amp; Gadgets", ["Multiple chart types","Quick visual insights"]],
    ["Filtering &amp; Export", ["Quick filtering","Easy PDF/CSV exports"]],
    ["Cross-Team View", ["Compare work across teams","Compare across projects or categories"]],
    ["Stakeholder Ready", ["Live Jira data","No extra setup needed"]],
  ],
  "Project Managers · Product Managers · Executives · Scrum Masters"
)}

${appCard(
  "Confluence Formatting &amp; Visibility Suite",
  "Smart Navigation · Audience Visibility · Attachment Control · Page Styling",
  [
    ["Smart Navigation", ["Find info faster","Cleaner page hubs"]],
    ["Attachment Control", ["Files stay organized"]],
    ["Consistent Page Styling", ["Polished pages","Saves team time"]],
    ["Audience Based Visibility", ["Governed content sections"]],
  ],
  "Documentation Owners · Project Teams · Engineering &amp; IT · HR &amp; Operations · Leadership Teams"
)}

${appCard(
  "Confluence Custom Reporting",
  "CQL Reports · Charts · Templates · Excel &amp; PDF Export",
  [
    ["Templates &amp; Reusable Reporting", ["Prebuilt templates included","Reuse reports across teams"]],
    ["Report Builder &amp; Layouts", ["Spot trends quickly","Standardize reporting easily"]],
  ],
  "Knowledge Managers · PMs · Operations · Admins"
)}

${appCard(
  "LaTeX Math &amp; UML Diagrams for Confluence",
  "LaTeX Equations · UML Diagrams · Gantt Charts · ERDs &amp; Flowcharts",
  [
    ["LaTeX Equations", ["In-page equations","Metrics and formulas"]],
    ["UML Diagrams", ["In-page UML diagrams","Document system flows"]],
  ],
  "Engineers · Product Managers · Stakeholders · System Architects"
)}

${sectionHeader("Why Clovity")}

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:22px;font-weight:800;color:#111827;margin-bottom:4px;">Platinum</div>
    <div style="font-size:12px;color:#6b7280;">Atlassian Solution Partner</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:22px;font-weight:800;color:#111827;margin-bottom:4px;">18 mo</div>
    <div style="font-size:12px;color:#6b7280;">Silver to Platinum</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:22px;font-weight:800;color:#111827;margin-bottom:4px;">14+</div>
    <div style="font-size:12px;color:#6b7280;">Government Agencies</div>
  </div>
</div>

${sectionHeader("Trusted by Government Agencies Worldwide")}
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px;">${agencyBadges}</div>

${downloadCTA("/pdf/App_Suite_Overview_0d66892a10.pdf","Download the Full Apps Suite Overview","PDF")}
`;

// ─── ARTICLE 2: AGC APPS BROCHURE ────────────────────────────────────────────

const agcBrochureContent = `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:28px 24px;margin-bottom:28px;background:#f8fafc;text-align:center;">
  ${badge("ATLASSIAN GOVERNMENT CLOUD")}
  <h1 style="font-size:26px;font-weight:800;color:#111827;margin:16px 0 10px;line-height:1.3;">AGC Apps Brochure</h1>
  <p style="color:#6b7280;font-size:14px;margin:0 auto;max-width:540px;line-height:1.7;">Purpose-built for Atlassian Government Cloud — governance-aligned, compliance-aware, and public-sector proven.</p>
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:16px;">
    <span style="background:#f1f5f9;color:#475569;font-size:12px;font-weight:500;padding:4px 12px;border-radius:8px;border:1px solid #e2e8f0;">Federal Agencies</span>
    <span style="background:#f1f5f9;color:#475569;font-size:12px;font-weight:500;padding:4px 12px;border-radius:8px;border:1px solid #e2e8f0;">State &amp; Local Gov't</span>
    <span style="background:#f1f5f9;color:#475569;font-size:12px;font-weight:500;padding:4px 12px;border-radius:8px;border:1px solid #e2e8f0;">Regulated Industries</span>
    <span style="background:#f1f5f9;color:#475569;font-size:12px;font-weight:500;padding:4px 12px;border-radius:8px;border:1px solid #e2e8f0;">Universities</span>
  </div>
</div>

${sectionHeader("What is Atlassian Government Cloud?")}
<p style="font-size:13px;color:#4b5563;margin:0 0 20px;line-height:1.75;">Atlassian Government Cloud (AGC) is Atlassian's dedicated offering for US government and regulated-industry customers. It operates on FedRAMP-authorized infrastructure with US-only data residency, FISMA-aligned controls, and IL-4/IL-5 data handling — giving agencies a compliant path to modern tooling without sacrificing security posture.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px;">AGC Key Characteristics</div>
    <div style="font-size:13px;color:#6b7280;line-height:1.85;">❖ FedRAMP High authorized infrastructure<br>❖ US-only data residency<br>❖ FISMA-aligned security controls<br>❖ IL-4 / IL-5 support<br>❖ GovCloud deployment<br>❖ Dedicated tenant isolation</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px;">Why It Matters for Agencies</div>
    <div style="font-size:13px;color:#6b7280;line-height:1.85;">❖ Eliminates on-prem maintenance burden<br>❖ Reduces ATO scope with shared controls<br>❖ Enables modern DevSecOps workflows<br>❖ Aligns with OMB cloud-first mandate<br>❖ Reduces total app vendor footprint<br>❖ Continuous compliance posture</div>
  </div>
</div>

${sectionHeader("Clovity's AGC-Aligned Apps")}

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    <div style="background:#f8fafc;padding:12px 18px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:13px;font-weight:700;color:#111827;">Jira Time, Capacity &amp; PPM Suite</span>
      <span style="background:#eff6ff;color:#1d4ed8;font-size:11px;font-weight:600;padding:2px 8px;border-radius:8px;border:1px solid #dbeafe;">Jira Cloud</span>
    </div>
    <div style="padding:12px 18px;font-size:13px;color:#4b5563;line-height:1.7;">Governance-ready time tracking and resource management with audit-trail worklogging, role-based approval workflows, and portfolio visibility — designed to support agency reporting requirements without external data egress.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    <div style="background:#f8fafc;padding:12px 18px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:13px;font-weight:700;color:#111827;">Jira Custom Charts &amp; Dashboards</span>
      <span style="background:#eff6ff;color:#1d4ed8;font-size:11px;font-weight:600;padding:2px 8px;border-radius:8px;border:1px solid #dbeafe;">Jira Cloud</span>
    </div>
    <div style="padding:12px 18px;font-size:13px;color:#4b5563;line-height:1.7;">Stakeholder-ready reporting with no external data processing. Charts and issue lists are built from live Jira data inside your AGC tenant — nothing leaves your boundary. Export to PDF or share within your org.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    <div style="background:#f8fafc;padding:12px 18px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:13px;font-weight:700;color:#111827;">Confluence Formatting &amp; Visibility Suite</span>
      <span style="background:#f0fdf4;color:#15803d;font-size:11px;font-weight:600;padding:2px 8px;border-radius:8px;border:1px solid #bbf7d0;">Confluence Cloud</span>
    </div>
    <div style="padding:12px 18px;font-size:13px;color:#4b5563;line-height:1.7;">Audience-based visibility controls let you govern what each user group sees on a Confluence page — critical for agencies managing content sensitivity across clearance levels or role boundaries.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    <div style="background:#f8fafc;padding:12px 18px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:13px;font-weight:700;color:#111827;">Confluence Custom Reporting</span>
      <span style="background:#f0fdf4;color:#15803d;font-size:11px;font-weight:600;padding:2px 8px;border-radius:8px;border:1px solid #bbf7d0;">Confluence Cloud</span>
    </div>
    <div style="padding:12px 18px;font-size:13px;color:#4b5563;line-height:1.7;">Build CQL-driven reports and export to Excel or PDF for OMB reporting, FISMA reporting cycles, and leadership briefings — all from inside your Confluence Cloud workspace.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
    <div style="background:#f8fafc;padding:12px 18px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:13px;font-weight:700;color:#111827;">LaTeX Math &amp; UML Diagrams for Confluence</span>
      <span style="background:#f0fdf4;color:#15803d;font-size:11px;font-weight:600;padding:2px 8px;border-radius:8px;border:1px solid #bbf7d0;">Confluence Cloud</span>
    </div>
    <div style="padding:12px 18px;font-size:13px;color:#4b5563;line-height:1.7;">Renders LaTeX formulas and UML/system-flow diagrams natively in Confluence — keeping technical architecture documentation inside your secure boundary without third-party rendering services.</div>
  </div>
</div>

${sectionHeader("Governance &amp; Compliance Features")}

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:28px;">
  ${[
    ["Data Governance", ["Forge-native — no external data egress","All processing inside your Atlassian tenancy","Audit-ready worklog trails","Role-based approval controls"]],
    ["Content Governance", ["Audience-based page visibility","Structured page-styling standards","Attachment lifecycle management","Consistent documentation governance"]],
    ["Vendor Risk Reduction", ["5 apps replace 15–25 plugins","Single Atlassian Platinum partner","Consolidated contract surface","Fewer ATO review cycles"]],
    ["Operational Continuity", ["Built iteratively with field feedback","Migration-critical functions prioritized","Aligned to regulated cloud environments","Ongoing partner-level support"]],
  ].map(([t, b]) => featureBox(t, b)).join("")}
</div>

${sectionHeader("Trusted by Government Agencies Worldwide")}
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px;">${agencyBadges}</div>

${downloadCTA("/pdf/Clovity_AGC_App_Brochure_9cdde198e4.pdf","Download the AGC Apps Brochure","PDF")}
`;

// ─── ARTICLE 3: CLOVITY APPS DECK ────────────────────────────────────────────

const appsDeckContent = `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:28px 24px;margin-bottom:28px;background:#f8fafc;text-align:center;">
  ${badge("ATLASSIAN PLATINUM SOLUTION PARTNER")}
  <h1 style="font-size:26px;font-weight:800;color:#111827;margin:16px 0 10px;line-height:1.3;">Empowering Public-Sector &amp; Enterprise Innovation</h1>
  <p style="color:#6b7280;font-size:14px;margin:0 auto 18px;max-width:540px;line-height:1.7;">Integrated migration services and apps powering secure, scalable modernization.</p>
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:14px;">
    <span style="background:white;border:1px solid #e2e8f0;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#374151;">Great Place To Work Certified</span>
    <span style="background:white;border:1px solid #e2e8f0;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#374151;">Inc. 5000</span>
    <span style="background:white;border:1px solid #e2e8f0;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#374151;">USPAACC</span>
    <span style="background:white;border:1px solid #e2e8f0;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#0052CC;">Platinum Solution Partner</span>
  </div>
  <div style="border-top:1px solid #e2e8f0;padding-top:14px;font-size:12px;color:#6b7280;">From Silver to Platinum in Record Breaking 18 Months &nbsp;·&nbsp; Trusted by Federal Agencies, State Govt's, Universities &amp; Fortune 500 Enterprises</div>
</div>

${sectionHeader("Stop the App Crawl","Cloud transition is an opportunity to rationalize — not replicate.")}

${compareTable(
  "What We See in DC Environments",
  ["15–25 Marketplace Apps","Multiple Vendor Contracts &amp; Renewals","Upgrade &amp; Security Drift","Redundant Functionality Across Plugins"],
  "Our Architectural Response",
  ["Consolidated Use Cases","Reduced Vendor Surface Area","Multi-Function Applications","AGC-ready and governance-aligned"]
)}

${sectionHeader("Engineered in Response to Migration Friction","We didn't start with product ideas. We started with recurring patterns.")}

${compareTable(
  "Our Approach",
  ["Mapped Plugin Categories Across Clients","Identified Overlapping Use Cases","Prioritized Migration-Critical Functions","Focused on AGC Governance + Apps"],
  "Execution",
  ["First Bundle Delivered in 4 Months","Built Iteratively with Field Feedback","Designed for Consolidation, Not Expansion","Aligned to Regulated Cloud Environments"]
)}

${sectionHeader("From Plugin Categories to Consolidated Applications","Replace categories. Not plugins.")}

${compareTable(
  "Traditional DC Stack",
  ["Time Tracking (4 apps)","Capacity Planning (2 apps)","Roadmapping / Gantt (3 apps)","Reporting (3–5 apps)","Formatting &amp; Navigation (4 apps)"],
  "Consolidated Suite",
  ["Jira Time, Capacity &amp; PPM Suite","Jira Custom Charts &amp; Dashboards","Confluence Formatting &amp; Visibility Suite","Confluence Custom Reporting","LaTeX + UML for Confluence"]
)}

${sectionHeader("Our Apps Roadmap","Next up — deeper integrations, smarter automation, stronger execution.")}

<div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;margin-bottom:28px;">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);divide-x:1px solid #e2e8f0;">
    <div style="padding:18px;border-right:1px solid #e2e8f0;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="width:24px;height:24px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:12px;flex-shrink:0;">1</span>
        <span style="font-size:13px;font-weight:700;color:#111827;">Cross-Tool Integrations</span>
      </div>
      <div style="font-size:12px;color:#6b7280;line-height:1.85;">❖ Connect work across tools<br>❖ Reduce context switching<br>❖ Build connectors like Power BI and similar tools</div>
    </div>
    <div style="padding:18px;border-right:1px solid #e2e8f0;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="width:24px;height:24px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:12px;flex-shrink:0;">2</span>
        <span style="font-size:13px;font-weight:700;color:#111827;">Workflow Automation</span>
      </div>
      <div style="font-size:12px;color:#6b7280;line-height:1.85;">❖ Automate updates<br>❖ Reduce manual handoffs<br>❖ Fewer follow-ups</div>
    </div>
    <div style="padding:18px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span style="width:24px;height:24px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:12px;flex-shrink:0;">3</span>
        <span style="font-size:13px;font-weight:700;color:#111827;">Work Item Execution Tools</span>
      </div>
      <div style="font-size:12px;color:#6b7280;line-height:1.85;">❖ In-issue helpers<br>❖ Checklists and gates<br>❖ Better consistency</div>
    </div>
  </div>
</div>

${sectionHeader("Our Apps")}

${appCard(
  "Timesheet, Capacity, Prioritization &amp; PPM Suite",
  "The All-in-One Workspace Planning Solution for Jira Teams",
  [
    ["Time Tracking", ["Timesheets tracking","Billable hours","Calendar visibility"]],
    ["Capacity Planning", ["Team utilization","Workload forecast"]],
    ["Backlog Prioritization", ["RICE / WSJF scoring","Priority matrix"]],
    ["Portfolio Management", ["Gantt timeline","Resource allocation","Resources clarity"]],
  ],
  "Agile Teams · Project Managers · Product Owners · Portfolio Managers · Engineering Leaders · Finance Teams"
)}

${appCard(
  "Content Formatting, Navigation &amp; Visibility for Confluence",
  "Make Confluence Pages Faster to Consume, Easier to Govern and Simpler to Maintain.",
  [
    ["Smart Navigation", ["Find info faster","Cleaner page hubs"]],
    ["Attachment Control", ["Files stay organized"]],
    ["Consistent Page Styling", ["Polished pages","Saves team time"]],
    ["Audience Based Visibility", ["Governed content sections"]],
  ],
  "Documentation Owners · Project Teams · Engineering &amp; IT · HR &amp; Operations · Leadership Teams"
)}

${appCard(
  "Custom Reports for Confluence",
  "Advanced Reporting, Charts &amp; Deep Data Insights",
  [
    ["Templates &amp; Reusable Reporting", ["Prebuilt templates included","Reuse reports across teams"]],
    ["Report Builder &amp; Layouts", ["Spot trends quickly","Standardize reporting easily"]],
  ],
  "Knowledge Managers · PMs · Operations · Admins"
)}

${appCard(
  "Custom Charts &amp; Dashboards for Jira",
  "Turn Jira updates into Clear Stakeholder-Ready Insights",
  [
    ["Charts &amp; Gadgets", ["Multiple chart options","Quick visual insights"]],
    ["Filtering &amp; Export", ["Quick filtering","Easy exports for sharing"]],
    ["Cross-Team View", ["Compare work across teams","Compare across projects or categories"]],
    ["Stakeholder Ready", ["Instant answers from live Jira data"]],
  ],
  "Project Managers · Product Managers · Executives · Scrum Masters"
)}

${appCard(
  "LaTeX Math and UML Diagrams for Confluence",
  "Clear Technical Docs Right Inside Confluence with Equations and Diagrams",
  [
    ["LaTeX Equations", ["In-page equations","Metrics and formulas"]],
    ["UML Diagrams", ["In-page UML diagrams","Document system flows"]],
  ],
  "Engineers · Product Managers · Stakeholders · System Architecture"
)}

${sectionHeader("Trusted by Government Agencies Worldwide")}

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:18px;background:white;display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px;">${agencyBadges}</div>

${downloadCTA("/pdf/Clovity_Apps_Deck_eb23aa9e16.pptx","Download the Clovity Apps Deck","Presentation", false)}
`;

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const additionalResourcesDocs = {
  categories: [
    {
      id: "additional-resources",
      title: "Additional Resources",
      articles: [
        {
          slug: "apps-suite-overview",
          title: "Apps Suite Overview",
          content: appsSuiteContent,
        },
        {
          slug: "agc-apps-brochure",
          title: "AGC Apps Brochure",
          content: agcBrochureContent,
        },
        {
          slug: "clovity-apps-deck",
          title: "Clovity Apps Deck",
          content: appsDeckContent,
        },
      ],
    },
  ],
};
