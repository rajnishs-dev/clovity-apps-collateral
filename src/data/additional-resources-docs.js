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
  <p style="color:#6b7280;font-size:14px;margin:0 auto;max-width:560px;line-height:1.7;">Confluence for clean knowledge, Jira for clear delivery signals.</p>
</div>

${sectionHeader("Outcomes")}

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">01</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:8px;">Faster discovery</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Tabbed navigation hubs and structured Confluence pages.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">02</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:8px;">Cleaner documentation</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Targeted sections plus technical diagrams and formulas where work happens.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">03</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:8px;">Reliable reporting</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Reusable reports and dashboards built from CQL/JQL.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">04</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:8px;">Better planning</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Capacity, time tracking, prioritization and portfolio rollups.</div>
  </div>
</div>

${sectionHeader("Who it is For")}

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">01</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:6px;">Teams</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Product, Engineering, Delivery, Support Ops.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">02</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:6px;">Leaders</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Program &amp; portfolio owners, PMO/PPM, Heads of Delivery.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;background:#f8fafc;">
    <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">03</div>
    <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:6px;">Admins</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.7;">Confluence and Jira admins standardizing knowledge and reporting.</div>
  </div>
</div>

${sectionHeader("Suite Quick Wins (First Week)")}

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:#f8fafc;display:flex;align-items:flex-start;gap:12px;"><span style="width:22px;height:22px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:11px;flex-shrink:0;">1</span><span style="font-size:13px;color:#374151;line-height:1.65;">Launch a Confluence homepage with tabbed navigation and role-based sections.</span></div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:#f8fafc;display:flex;align-items:flex-start;gap:12px;"><span style="width:22px;height:22px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:11px;flex-shrink:0;">2</span><span style="font-size:13px;color:#374151;line-height:1.65;">Add a live Confluence report for status rollups and content governance.</span></div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:#f8fafc;display:flex;align-items:flex-start;gap:12px;"><span style="width:22px;height:22px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:11px;flex-shrink:0;">3</span><span style="font-size:13px;color:#374151;line-height:1.65;">Create a Jira dashboard from JQL with charts plus a risk/blocked issue list.</span></div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:#f8fafc;display:flex;align-items:flex-start;gap:12px;"><span style="width:22px;height:22px;background:#0052CC;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:11px;flex-shrink:0;">4</span><span style="font-size:13px;color:#374151;line-height:1.65;">Run a lightweight planning pass: capacity vs workload, deadline risk, and a prioritization matrix.</span></div>
</div>

${sectionHeader("The 5 Apps in the Suite", "Each app is valuable alone. Together they create an end-to-end workflow from documentation to delivery.")}

<div style="border-left:3px solid #0052CC;padding-left:14px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;">Pillar 1 - Confluence Experience &amp; Reporting</div>
</div>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:2px;">Content Formatting Macros: Tabs Navigation Visibility CSS</div>
      <div style="font-size:12px;color:#6b7280;">Make Confluence pages easier to consume and maintain.</div>
    </div>
    <div style="padding:14px 20px;background:white;font-size:12px;color:#6b7280;line-height:1.85;">❖ Tabbed navigation hubs from parent pages or labels (optional CQL).<br>❖ Show/Hide sections for cleaner, targeted reading.<br>❖ Attachment governance with visibility, cleanup and auditing.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:2px;">Reports, Charts, Templates, CQL &amp; Export for Confluence</div>
      <div style="font-size:12px;color:#6b7280;">Turn CQL into living, reusable reports.</div>
    </div>
    <div style="padding:14px 20px;background:white;font-size:12px;color:#6b7280;line-height:1.85;">❖ Build reports from CQL with column control and expansions.<br>❖ Reuse templates/recipes for consistent reporting.<br>❖ Export when needed (CSV/JSON) for leadership or audits.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:2px;">LaTeX Math Formulas &amp; UML Diagrams (ERD &amp; Flowcharts)</div>
      <div style="font-size:12px;color:#6b7280;">Embed equations and UML diagrams directly into Confluence.</div>
    </div>
    <div style="padding:14px 20px;background:white;font-size:12px;color:#6b7280;line-height:1.85;">❖ Insert high-quality LaTeX formulas for clear technical docs.<br>❖ Add UML diagrams alongside requirements, decisions &amp; runbooks.<br>❖ Keep technical context where collaboration happens.</div>
  </div>
</div>

<div style="border-left:3px solid #0052CC;padding-left:14px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;">Pillar 2 - Jira Reporting &amp; Delivery Planning</div>
</div>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:2px;">Dashboard Templates, Charts, Graphs &amp; Reports for Jira</div>
      <div style="font-size:12px;color:#6b7280;">Dashboards people actually use - from JQL, filters, or projects.</div>
    </div>
    <div style="padding:14px 20px;background:white;font-size:12px;color:#6b7280;line-height:1.85;">❖ Charts and issue views for delivery health and operations.<br>❖ Reusable dashboard gadgets for teams and leadership.<br>❖ Export-friendly reporting without fragile spreadsheets.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:14px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:2px;">Time Tracking, Resource Planning &amp; Project Management</div>
      <div style="font-size:12px;color:#6b7280;">Plan capacity, track time, prioritize work &amp; roll up portfolio status.</div>
    </div>
    <div style="padding:16px 20px;background:white;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        ${featureBox("Capacity Planner", ["Workload vs capacity (holidays included)","Planner calendar, deadline risk","Status / workflow aging, trends"])}
        ${featureBox("Time Tracking", ["Multi-user timesheets and charts","Personal calendar","CSV/XLSX export, dashboard gadget"])}
        ${featureBox("Backlog Prioritization", ["ICE/RICE/WSJF templates","Formula scoring, priority matrix","Scoring history"])}
        ${featureBox("Portfolio Overview", ["Hierarchy across initiatives/epics","Filters and exports"])}
      </div>
    </div>
  </div>
</div>

${sectionHeader("Adoption Playbook", "A simple rollout path that delivers visible impact fast")}

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:18px;background:#f8fafc;">
    <div style="font-size:13px;font-weight:700;color:#0052CC;margin-bottom:10px;">Quarterly planning - Capacity + prioritization</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.85;">❖ Compare workload vs capacity with holidays.<br>❖ ICE/RICE/WSJF scorecards and priority matrix.<br>❖ Portfolio rollups with filters and exports.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:18px;background:#f8fafc;">
    <div style="font-size:13px;font-weight:700;color:#0052CC;margin-bottom:10px;">Project hub - Confluence space homepage</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.85;">❖ Tabbed navigation to specs, decisions and runbooks.<br>❖ Role-based sections to reduce clutter.<br>❖ Live report blocks for rollups.</div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:18px;background:#f8fafc;">
    <div style="font-size:13px;font-weight:700;color:#0052CC;margin-bottom:10px;">Leadership dashboard - Jira reporting</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.85;">❖ JQL charts for progress, blockers and throughput.<br>❖ Issue list view for risks and aging work.<br>❖ Export-ready weekly ops reporting.</div>
  </div>
</div>

${sectionHeader("Why Clovity")}

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;font-size:13px;font-weight:600;color:#374151;">Suite consistency across apps.</div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;font-size:13px;font-weight:600;color:#374151;">Admin-friendly standardization.</div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;font-size:13px;font-weight:600;color:#374151;">Adoption-ready quick wins.</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;font-size:13px;font-weight:600;color:#374151;">Reporting you can trust.</div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:16px;text-align:center;background:#f8fafc;font-size:13px;font-weight:600;color:#374151;">Planning signals that stay aligned.</div>
</div>

${sectionHeader("Marketplace Listings")}

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:28px;">
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:white;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
    <div style="font-size:13px;font-weight:600;color:#111827;">Dashboard Templates, Charts, Graphs &amp; Reports for Jira</div>
    <a href="https://marketplace.atlassian.com/apps/359777765/custom-charts-and-dashboards-for-jira" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:7px 16px;border-radius:6px;text-decoration:none;font-size:12px;font-weight:600;white-space:nowrap;">View on Marketplace</a>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:white;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
    <div style="font-size:13px;font-weight:600;color:#111827;">Content Formatting Macros: Tabs Navigation Visibility CSS</div>
    <a href="https://marketplace.atlassian.com/apps/3890258352/content-formatting-navigation-and-visibility-for-confluence" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:7px 16px;border-radius:6px;text-decoration:none;font-size:12px;font-weight:600;white-space:nowrap;">View on Marketplace</a>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px 18px;background:white;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
    <div style="font-size:13px;font-weight:600;color:#111827;">Reports, Charts, Templates, CQL &amp; Export for Confluence</div>
    <a href="https://marketplace.atlassian.com/apps/4125307933/custom-reports-for-confluence" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:7px 16px;border-radius:6px;text-decoration:none;font-size:12px;font-weight:600;white-space:nowrap;">View on Marketplace</a>
  </div>
</div>

${downloadCTA("/pdf/App_Suite_Overview_0d66892a10.pdf","Download the Full Apps Suite Overview","PDF")}
`;

// ─── ARTICLE 2: AGC APPS BROCHURE ────────────────────────────────────────────

const agcBrochureContent = `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:28px 24px;margin-bottom:28px;background:#f8fafc;text-align:center;">
  ${badge("ATLASSIAN GOVERNMENT CLOUD")}
  <h1 style="font-size:26px;font-weight:800;color:#111827;margin:16px 0 10px;line-height:1.3;">AGC Apps Brochure</h1>
  <p style="color:#6b7280;font-size:14px;margin:0 auto;max-width:560px;line-height:1.7;">Purpose-built apps for Atlassian Government Cloud and Atlassian Cloud - spanning Confluence and Jira.</p>
</div>

<div style="border-left:3px solid #0052CC;padding-left:14px;margin-bottom:8px;">
  <div style="font-size:15px;font-weight:800;color:#111827;">AGC + Cloud Power Apps Suite for Confluence</div>
  <div style="font-size:12px;color:#6b7280;margin-top:3px;">Format Smarter. Document Better. Report Faster.</div>
</div>
<div style="height:1px;background:#e2e8f0;margin-bottom:20px;"></div>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:13px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Formatting Suite for Confluence</div>
      <div style="font-size:14px;font-weight:700;color:#111827;">Content Formatting, Navigation and Visibility for Confluence</div>
    </div>
    <div style="padding:16px 20px;background:white;">
      <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Value we deliver</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Structure &amp; Navigation</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Consistent Layouts</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Visibility Control &amp; Governance</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Organized Attachments</div>
      </div>
    </div>
  </div>

  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:13px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Reporting Suite for Confluence</div>
      <div style="font-size:14px;font-weight:700;color:#111827;">Custom Reports for Confluence</div>
    </div>
    <div style="padding:16px 20px;background:white;">
      <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Value we deliver</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Clear Insights</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Unified View</div>
      </div>
    </div>
  </div>

  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:13px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Equations &amp; Diagrams Suite</div>
      <div style="font-size:14px;font-weight:700;color:#111827;">LaTeX Math &amp; UML Diagrams for Confluence</div>
    </div>
    <div style="padding:16px 20px;background:white;">
      <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Value we deliver</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ LaTeX Embedding</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Multiple Diagrams</div>
      </div>
    </div>
  </div>
</div>

<div style="border-left:3px solid #0052CC;padding-left:14px;margin-bottom:8px;">
  <div style="font-size:15px;font-weight:800;color:#111827;">AGC + Cloud Productivity Apps Suite for Jira</div>
  <div style="font-size:12px;color:#6b7280;margin-top:3px;">Plan Smarter. Execute Faster. Report Better.</div>
</div>
<div style="height:1px;background:#e2e8f0;margin-bottom:20px;"></div>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:13px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Planning, Capacity &amp; Portfolio Suite</div>
      <div style="font-size:14px;font-weight:700;color:#111827;">Timesheets, Capacity Planner, Prioritization &amp; PPM Suite</div>
    </div>
    <div style="padding:16px 20px;background:white;">
      <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Value we deliver</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Balanced Workload</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Time Visibility</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Portfolio Management</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Objective Scoring</div>
      </div>
    </div>
  </div>

  <div style="border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
    <div style="background:#f8fafc;padding:13px 20px;border-bottom:1px solid #e2e8f0;">
      <div style="font-size:11px;font-weight:700;color:#0052CC;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">Reporting &amp; Dashboard Solution</div>
      <div style="font-size:14px;font-weight:700;color:#111827;">Custom Charts and Dashboards for Jira</div>
    </div>
    <div style="padding:16px 20px;background:white;">
      <div style="font-size:11px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:10px;">Value we deliver</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Advanced Filters</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Custom Dashboards</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Enterprise-Grade Charts</div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:10px 13px;font-size:12px;color:#374151;font-weight:500;">❖ Quick Replication</div>
      </div>
    </div>
  </div>
</div>


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

${sectionHeader("Stop the App Crawl","Cloud transition is an opportunity to rationalize - not replicate.")}

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

${sectionHeader("Our Apps Roadmap","Next up - deeper integrations, smarter automation, stronger execution.")}

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
