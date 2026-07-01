export const dashboardChartsDocs = {
  appSlug: "dashboard-charts-jira",
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-dashboard-charts",
          title:
            "What is Dashboard Templates, Charts, Graphs & Reports for Jira?",
          sideVideo: {
            src: "https://www.youtube.com/embed/cD2Kdxp59qA",
            title:
              "Dashboard Templates, Charts, Graphs & Reports for Jira - Product Overview",
          },
          content: `
Dashboard Templates, Charts, Graphs & Reports for Jira is a reporting app that helps you **see your Jira data in a clear, visual way**.

## Core Value Proposition

- Make **charts and graphs** from your Jira issues with no coding required
- Build **tables and issue lists** with configurable columns, smart labels, and quick filters
- Create **interactive, configurable dashboards** for your team using a shared Dynamic Filter Controller
- Export everything as **PNG, PDF, or CSV** for stakeholders and reporting

All of this is done **inside Jira**, using your existing projects, filters, and JQL.

<!--VIDEO_BREAK-->

## Seven Integrated Gadgets

| **Gadget** | What It Does |
|---|---|
| **Custom Charts** | Create pie, bar, line, table, funnel, and tile charts from Jira issues; supports 10 chart types |
| **Issue List** | Display Jira issues in a configurable table with custom columns, smart labels, and quick filters |
| **Dynamic Filter Controller** | Create a shared filter bar that controls multiple charts and lists simultaneously |
| **Time in Status** | Analyze exactly how long issues spend in each workflow status using changelog-based calculations |
| **Pivot Table** | Summarize issues in a cross-tabulation with flexible row/column grouping and 9 display types |
| **Cumulative Flow Diagram** | Visualize work distribution across workflow stages over time as a stacked area chart |
| **WIP Aging Charts** | Scatter plot showing how long work-in-progress items have been active - spot stalled work instantly |

## Who Is It For?

- **Scrum Masters** who need sprint health charts, burndown views, and daily standup dashboards
- **Product Owners** who need backlog health, release readiness, and priority breakdowns
- **Engineering Managers** who need team workload charts and bug trend analysis
- **Executives** who need high-level KPI dashboards without digging into Jira
- **QA Leads** who need defect tracking and quality metrics at a glance

## Benefits & Outcomes

### Better Visibility
- See your Jira data at a glance with visual charts
- Spot trends, bottlenecks, and issues before they become problems
- Share insights with stakeholders who don't use Jira

### Save Time
- Build reports in minutes, not hours
- No coding or external tools required
- Reuse configurations across dashboards with Import/Export

### Make Better Decisions
- Data-driven insights for sprint planning
- Track progress against goals with reference lines
- Compare performance across teams, sprints, or time periods

## Platform

Jira Cloud only. Built on Atlassian Forge - no external servers, no data exports, no infrastructure to maintain.`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `4 step-by-step tutorials covering every gadget - click any video to start watching, or use the arrows to go through them in order. New to the app? Start with the [Product Introduction](/apps/dashboard-charts-jira/what-is-dashboard-charts) first.`,
          videoGallery: {
            playlistUrl:
              "https://www.youtube.com/watch?v=ld8eGIIAGzo&list=PLACoCS_WiVwT9chp45LEQYuxXOcRkDAeC",
            videos: [
              {
                id: "ld8eGIIAGzo",
                title:
                  "Dashboard Templates, Charts, Graphs & Reports for Jira - App Overview",
              },
              {
                id: "2QqeABXzzHI",
                title:
                  "Custom Charts in Jira - Build the Right Chart for Better Insights",
              },
              {
                id: "xco2CqE_64o",
                title:
                  "Jira Issue List Tutorial - Tables, Filters, Labels & Export Explained",
              },
              {
                id: "Q0NC8CoL5Do",
                title:
                  "Jira Dynamic Filter Controller - Connect & Control Your Dashboard Like a Pro",
              },
            ],
          },
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
## Prerequisites

Before installing, confirm:

1. You are a **Jira Cloud site administrator** (required to install Marketplace apps)
2. Your Jira instance is **Jira Cloud** - this app does not support Server or Data Center
3. You have access to the **Atlassian Marketplace** from your Jira instance

## Installation Steps

1. Go to **[marketplace.atlassian.com](https://marketplace.atlassian.com)** and search for **"Dashboard Templates Charts Graphs Reports Clovity"**
2. On the app listing, confirm **Hosting → Cloud** is supported
3. Click **Try it free** (30-day trial) or **Buy now**
4. Select your **Atlassian Cloud site** when prompted
5. Choose **Jira** as the product
6. Review the permissions the app requires and click **Accept** to proceed
7. The app installs automatically - no restart required

## Verify Installation

After installation:

1. Open any Jira **Dashboard** (or create a new one)
2. Click **Add gadget** (pencil/edit mode)
3. Search for **"Custom Charts"** or **"Issue List"** or **"Dynamic Filter Controller"**
4. The gadgets should appear in the search results

## First Admin Steps

Once installed, complete these setup tasks before rolling out to your team:

| **Step** | Where | What to Do |
|---|---|---|
| **1. Open Admin Settings** | Apps → Custom Charts → Admin | Review global defaults for export, number format, date format |
| **2. Configure export access** | Admin → Customization Options | Enable or disable PNG/PDF/CSV export for all users |
| **3. Set data source rules** | Admin → Data Sources | Control whether users can use Projects, Saved Filters, JQL, or Controller |
| **4. Enable/disable features** | Admin → Features | Toggle Issue List, Custom Chart, Dynamic Filter Controller, and Templates on or off |
| **5. Create a test dashboard** | Jira → Dashboards → Create | Add one of each gadget to verify everything works |

## Jira Permissions Required for Installation

The app requests the following permissions during Marketplace install:

| **Permission** | Why It's Needed |
|---|---|
| **read:jira-work** | Read issues, projects, and filters for charts and tables |
| **write:jira-work** | Save gadget configurations |
| **read:jira-user** | Display user information (assignees, reporters) in Issue List |
| **read:dashboard:jira** | Access dashboard gadgets |
| **write:dashboard:jira** | Save and update gadget configurations |
| **storage:app** | Store gadget configurations in Forge KVS |

## Uninstalling

To uninstall: Go to **admin.atlassian.com** → **Apps** → **Manage Apps** → click the app name → **Uninstall**. All app-stored configurations (gadget setups, saved templates) will be permanently deleted. Jira issues and projects are unaffected.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
Get up and running with your first Jira dashboard chart in under 5 minutes.

![Quick Start Guide](/images/dashboard-charts/quick-start-guide.png)

## Step 1 - Open or Create a Dashboard

1. In Jira, click **Dashboards** in the top navigation bar
2. Select an existing dashboard, or click **Create dashboard** to make a new one
3. Click the **Edit** button (pencil icon) to enter edit mode

## Step 2 - Add Your First Chart

1. Click **Add gadget** (top-right area of the dashboard)
2. In the gadget gallery search, type **"Custom Charts"**
3. Click **Add** - the gadget appears on your dashboard in configuration mode

## Step 3 - Set a Data Source

In the left panel of the configuration screen:

1. Select **Projects** as the source type
2. Search for and select a Jira project you have access to
3. The issue count updates to show how many issues are included

## Step 4 - Choose a Chart Type

1. Click the **Chart Type** tab in the right panel
2. Select **Pie Chart** (a great starting point)
3. In the **Chart By** tab, select **Status** from the field dropdown
4. Watch the **Live Preview** in the center panel update instantly

## Step 5 - Save the Gadget

1. Click **Save gadget** at the bottom of the configuration screen
2. Your pie chart showing issue status distribution is now live on the dashboard

## Step 6 - Add an Issue List (Optional)

1. Click **Add gadget** again
2. Search for **"Issue List"**
3. Set the same project as the data source
4. Add columns: Key, Summary, Status, Assignee, Priority
5. Click **Save gadget**

## Step 7 - Add a Dynamic Filter Controller (Optional)

To make your dashboard interactive:

1. Add the **Dynamic Filter Controller** gadget
2. Set the same project as the base data source
3. Add filter fields: Status, Assignee, Sprint
4. Note the **Reference ID** shown after saving
5. Edit your chart gadget → change Data Source to **Dynamic Filter Controller** → select the controller
6. Now the filter bar controls your chart in real time

## What's Next?

- Explore the **Chart Types Guide** for all 10 chart types
- Try **Templates** to start from a ready-made chart configuration
- Learn about **Smart Labels** for visual indicators in Issue List
- Set up **Tabs** in the Dynamic Filter Controller for preset views`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## How Access Works

Dashboard Templates, Charts, Graphs & Reports for Jira does not have its own user role system. Access is governed entirely by **Jira's existing permissions**:

| **Access Level** | How It's Determined | What Users Can Do |
|---|---|---|
| **Dashboard Owner / Editor** | Jira dashboard share permissions | Add, edit, and remove gadgets; save configurations |
| **Dashboard Viewer** | Jira dashboard share permissions | View gadget data; use Dynamic Filter Controller filters |
| **Jira Admin** | Jira site admin or project admin role | Access Admin Settings; enable/disable features and data sources |

## Jira Dashboard Permissions

Gadget access is tied to Jira dashboard permissions:

| **Permission** | Who Sets It | Effect |
|---|---|---|
| **Owner** | Dashboard creator | Full edit access |
| **Can Edit** | Dashboard owner shares with individuals or groups | Can add/edit/remove gadgets |
| **Can View** | Dashboard owner shares with individuals or groups | View-only; can interact with filters but not edit gadgets |

To share a dashboard: open the dashboard → click **Actions (•••)** → **Share** → add users or groups.

## Data Access (What Charts Can Show)

Charts and tables only show **Jira data the current user can see**. If a user does not have "Browse Projects" permission for a project, issues from that project will not appear in their charts - even if the gadget is configured with that project as a source.

This means:
- Sensitive projects are automatically excluded for users without access
- No special configuration is needed to enforce data security
- Jira's native permissions are the single source of truth

## Admin Settings Access

Admin Settings are only accessible to **Jira site administrators** or **project administrators**. Regular users cannot change global export settings, feature toggles, or data source restrictions.

To open Admin Settings:
1. Log in as a Jira administrator
2. Go to Apps in the top navigation
3. Open the Custom Charts & Dashboards app
4. Click the **Admin** page

## How to Request Access to a Dashboard

If a dashboard is not shared with you:
1. Contact the dashboard owner (shown in the dashboard header)
2. Ask them to share the dashboard with your Jira user or group
3. The owner can set view or edit permissions

There is no self-service request form - access is granted by the dashboard owner.

## Gadget Export Permissions

If export buttons (PNG, PDF, CSV) are missing or disabled:
1. Check with your Jira admin - export may be disabled globally in Admin Settings
2. The admin can re-enable it under **Admin → Customization Options → Allow direct export**`,
        },
      ],
    },

    // ═══ USER GUIDE ═══
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `Find the right starting point based on your role. Each path takes you to the pages most relevant to what you need to do.

## Jira Administrator

You install and manage the app for your organisation.

**Start with:**
1. [Installation & Setup](/apps/dashboard-charts-jira/installation-setup) - install the app and verify it works
2. [Permissions & Access](/apps/dashboard-charts-jira/permissions-access) - understand how access is governed
3. [Admin Settings](/apps/dashboard-charts-jira/admin-settings) - configure global defaults, enable features, restrict data sources

**Then explore:** Set up a test dashboard using [Quick Start Guide](/apps/dashboard-charts-jira/quick-start) to verify everything works end-to-end before rolling out to your team.

---

## Project Manager / Team Lead

You need dashboards to track work, report progress, and run team meetings.

**Start with:**
1. [Quick Start Guide](/apps/dashboard-charts-jira/quick-start) - build your first chart in 5 minutes
2. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - learn all 10 chart types
3. [Issue List Gadget](/apps/dashboard-charts-jira/issue-list-gadget-intro) - add a configurable issue table
4. [Dynamic Filter Controller](/apps/dashboard-charts-jira/dynamic-filter-controller-intro) - make the dashboard interactive

**Then explore:** [How to: Build Your First Dashboard](/apps/dashboard-charts-jira/how-to-first-dashboard) for a complete walkthrough.

---

## Engineering Manager / Scrum Master

You need sprint health charts, velocity tracking, and process metrics.

**Start with:**
1. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - status pie, assignee bar, velocity line
2. [Time in Status Gadget](/apps/dashboard-charts-jira/time-in-status-gadget-intro) - find where work slows down (Cycle Time, Lead Time)
3. [WIP Aging Charts](/apps/dashboard-charts-jira/wip-aging-charts-gadget-intro) - identify stalled work in standups
4. [Cumulative Flow Diagram](/apps/dashboard-charts-jira/cumulative-flow-gadget-intro) - monitor sprint and release flow health

**Then explore:** [Tips & Best Practices](/apps/dashboard-charts-jira/tips-best-practices) for process analytics dashboards.

---

## Executive Stakeholder / PMO

You need high-level KPI dashboards without Jira jargon.

**Start with:**
1. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - Tile charts for KPI numbers
2. [Pivot Table Gadget](/apps/dashboard-charts-jira/pivot-table-gadget-intro) - cross-project aggregation
3. [How to: Build an Executive Delivery Dashboard](/apps/dashboard-charts-jira/how-to-executive-dashboard) - full walkthrough with all gadgets

**Key tip:** Use the **Description** tab on each gadget to add plain-language context below charts - no Jira jargon required.

---

## Any User - First Time

Never used this app before?

1. Read [What is Dashboard Templates, Charts, Graphs & Reports for Jira?](/apps/dashboard-charts-jira/what-is-dashboard-charts) - 2-minute overview
2. Follow [Quick Start Guide](/apps/dashboard-charts-jira/quick-start) - build your first chart in under 5 minutes
3. Use [Quick Reference Card](/apps/dashboard-charts-jira/quick-reference) - bookmark this as a cheat sheet
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `A one-page cheat sheet for everything in the app. Bookmark this page.

## Seven Gadgets at a Glance

| **Gadget** | What It Does | Best For | Full Docs |
|---|---|---|---|
| **Custom Charts** | 10 chart types from Jira issue data | Visual reports, KPIs, trend charts | [Custom Charts →](/apps/dashboard-charts-jira/custom-charts-gadget-intro) |
| **Issue List** | Configurable table of Jira issues | Sprint boards, workqueues, exports | [Issue List →](/apps/dashboard-charts-jira/issue-list-gadget-intro) |
| **Dynamic Filter Controller** | Shared filter bar controlling all gadgets | Interactive dashboards for teams | [DFC →](/apps/dashboard-charts-jira/dynamic-filter-controller-intro) |
| **Time in Status** | How long issues spend in each status | Bottlenecks, Cycle Time, Lead Time | [Time in Status →](/apps/dashboard-charts-jira/time-in-status-gadget-intro) |
| **Pivot Table** | Cross-tabulation with 7 aggregation methods | Workload matrices, story point summaries | [Pivot Table →](/apps/dashboard-charts-jira/pivot-table-gadget-intro) |
| **Cumulative Flow Diagram** | Work accumulation over time | Sprint/release flow health, WIP trends | [CFD →](/apps/dashboard-charts-jira/cumulative-flow-gadget-intro) |
| **WIP Aging Charts** | How long in-progress items have been active | Stalled work, SLA monitoring | [WIP Aging →](/apps/dashboard-charts-jira/wip-aging-charts-gadget-intro) |

---

## 10 Chart Types (Custom Charts)

Full guide: [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide)

| **Chart** | Use When | Reference |
|---|---|---|
| **Pie** | Show proportions (status mix, priority split) | [Pie →](/apps/dashboard-charts-jira/chart-types-guide) |
| **Bar** | Compare categories (issues per assignee) | [Bar →](/apps/dashboard-charts-jira/chart-types-guide) |
| **Grouped Bar** | Compare with sub-categories (status by type) | [Grouped Bar →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Stacked Bar** | Show composition inside categories (sprint by status) | [Stacked Bar →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Line** | Show trends over time (bugs created per week) | [Line →](/apps/dashboard-charts-jira/date-range-custom-charts) |
| **2D Line** | Compare multiple trends on one axis | [2D Line →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Table** | Show exact numbers | [Table →](/apps/dashboard-charts-jira/chart-types-guide) |
| **2D Table** | Cross-tab matrix (assignee × status) | [2D Table →](/apps/dashboard-charts-jira/group-by-segments-2d) |
| **Funnel** | Show stage progression (workflow pipeline) | [Funnel →](/apps/dashboard-charts-jira/chart-types-guide) |
| **Tile** | Single KPI number | [Tile →](/apps/dashboard-charts-jira/chart-types-guide) |

---

## Data Source Types

| **Source** | When to Use | Reference |
|---|---|---|
| **Projects** | Simple project-level reports | [Quick Start →](/apps/dashboard-charts-jira/quick-start) |
| **Saved Filter** | Reusable criteria shared across gadgets | [Integrations →](/apps/dashboard-charts-jira/supported-integrations) |
| **Custom JQL** | Advanced filtering or custom conditions | [How-To JQL →](/apps/dashboard-charts-jira/how-to-guides) |
| **Board** | Time in Status, CFD, WIP Aging - board column definitions | [TIS Overview →](/apps/dashboard-charts-jira/time-in-status-overview) |
| **Dynamic Filter Controller** | End users filter the dashboard interactively | [DFC Setup →](/apps/dashboard-charts-jira/dynamic-filter-controller-setup) |

---

## Common JQL Patterns

| **Use Case** | JQL |
|---|---|
| **Current sprint** | \`sprint in openSprints()\` |
| **Open bugs** | \`issuetype = Bug AND resolution is EMPTY\` |
| **My issues** | \`assignee = currentUser()\` |
| **High priority unresolved** | \`priority in (High, Highest) AND resolution is EMPTY\` |
| **Issues created this month** | \`created >= startOfMonth()\` |
| **Overdue** | \`duedate < now() AND resolution is EMPTY\` |
| **Specific fix version** | \`fixVersion = "v2.0"\` |

---

## Export Formats by Gadget

| **Gadget** | CSV | PNG | PDF | Config JSON | Docs |
|---|---|---|---|---|---|
| **Custom Charts** | ✓ | ✓ | ✓ | ✓ | [Display Options →](/apps/dashboard-charts-jira/display-options) |
| **Issue List** | ✓ | ✓ | ✓ | ✓ | [Display & Export →](/apps/dashboard-charts-jira/issue-list-display-export) |
| **Time in Status** | ✓ | ✓ | - | ✓ | [Display & Export →](/apps/dashboard-charts-jira/time-in-status-display-export) |
| **Pivot Table** | ✓ | ✓ | - | ✓ | [Formatting & Export →](/apps/dashboard-charts-jira/pivot-table-formatting-export) |
| **WIP Aging Charts** | ✓ | ✓ | - | ✓ | [Display & Export →](/apps/dashboard-charts-jira/wip-aging-display-export) |
| **CFD** | - | - | - | ✓ | [Display Options →](/apps/dashboard-charts-jira/cumulative-flow-display) |

> Export must be enabled in [Admin Settings](/apps/dashboard-charts-jira/admin-settings).

---

## Key Settings Locations

| **Task** | Where | Reference |
|---|---|---|
| **Enable/disable gadgets site-wide** | Admin Settings → Features | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Restrict data sources** | Admin Settings → Data Sources | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Control export access** | Admin Settings → Customization Options | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Set global number/date format** | Admin Settings → Customization Options | [Admin Settings →](/apps/dashboard-charts-jira/admin-settings) |
| **Connect to Dynamic Filter Controller** | Gadget edit mode → Data Source → DFC | [Connecting Gadgets →](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) |
| **Find Reference ID** | Saved DFC gadget (shown on the gadget face) | [Connecting Gadgets →](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) |
| **Backup gadget config** | Any gadget edit mode → Import/Export tab | [Data Migration →](/apps/dashboard-charts-jira/data-migration) |

---

## All Docs - Page Index

### Getting Started
- [What Is This App?](/apps/dashboard-charts-jira/what-is-dashboard-charts)
- [Installation & Setup](/apps/dashboard-charts-jira/installation-setup)
- [Quick Start Guide](/apps/dashboard-charts-jira/quick-start)
- [Permissions & Access](/apps/dashboard-charts-jira/permissions-access)

### Custom Charts
- [Overview](/apps/dashboard-charts-jira/custom-charts-overview) · [Chart Types](/apps/dashboard-charts-jira/chart-types-guide) · [Field Segments](/apps/dashboard-charts-jira/field-segments) · [Group By (2D)](/apps/dashboard-charts-jira/group-by-segments-2d) · [Calculations & Lines](/apps/dashboard-charts-jira/calculations-lines) · [Display Options](/apps/dashboard-charts-jira/display-options) · [Templates](/apps/dashboard-charts-jira/templates) · [Date Range](/apps/dashboard-charts-jira/date-range-custom-charts)

### Issue List
- [Overview](/apps/dashboard-charts-jira/issue-list-overview) · [Columns](/apps/dashboard-charts-jira/issue-list-columns) · [Smart Labels](/apps/dashboard-charts-jira/issue-list-smart-labels) · [Quick Filters](/apps/dashboard-charts-jira/issue-list-quick-filters) · [Display & Export](/apps/dashboard-charts-jira/issue-list-display-export) · [Templates](/apps/dashboard-charts-jira/templates-issue-list)

### Dynamic Filter Controller
- [Overview](/apps/dashboard-charts-jira/dynamic-filter-controller-overview) · [Setup & Filter Types](/apps/dashboard-charts-jira/dynamic-filter-controller-setup) · [Tabs](/apps/dashboard-charts-jira/dynamic-filter-controller-tabs) · [Connecting Gadgets](/apps/dashboard-charts-jira/dynamic-filter-controller-connect) · [Templates](/apps/dashboard-charts-jira/templates-dynamic-filter-controller)

### Time in Status
- [Overview](/apps/dashboard-charts-jira/time-in-status-overview) · [Report Types](/apps/dashboard-charts-jira/time-in-status-report-types) · [Columns & Date Range](/apps/dashboard-charts-jira/time-in-status-columns-date-range) · [Status Groups](/apps/dashboard-charts-jira/time-in-status-status-groups) · [Work Schedule](/apps/dashboard-charts-jira/time-in-status-work-schedule) · [Display & Export](/apps/dashboard-charts-jira/time-in-status-display-export)

### Pivot Table
- [Overview](/apps/dashboard-charts-jira/pivot-table-overview) · [Row & Column Fields](/apps/dashboard-charts-jira/pivot-table-fields) · [Aggregation Methods](/apps/dashboard-charts-jira/pivot-table-aggregation) · [Display Types & Heatmaps](/apps/dashboard-charts-jira/pivot-table-display-types) · [Totals, Formatting & Export](/apps/dashboard-charts-jira/pivot-table-formatting-export)

### Cumulative Flow Diagram
- [Overview](/apps/dashboard-charts-jira/cumulative-flow-overview) · [Band Modes](/apps/dashboard-charts-jira/cumulative-flow-band-modes) · [Calculate By](/apps/dashboard-charts-jira/cumulative-flow-calculate-by) · [Date Ranges](/apps/dashboard-charts-jira/cumulative-flow-date-ranges) · [Display & Patterns](/apps/dashboard-charts-jira/cumulative-flow-display)

### WIP Aging Charts
- [Overview](/apps/dashboard-charts-jira/wip-aging-overview) · [Age Calculation Methods](/apps/dashboard-charts-jira/wip-aging-age-methods) · [Reference Lines & Scale](/apps/dashboard-charts-jira/wip-aging-reference-lines) · [Display & Export](/apps/dashboard-charts-jira/wip-aging-display-export)

### Admin & Other
- [Admin Settings](/apps/dashboard-charts-jira/admin-settings) · [Integrations](/apps/dashboard-charts-jira/supported-integrations) · [Data Migration](/apps/dashboard-charts-jira/data-migration)
`,
        },
        {
          slug: "how-to-first-dashboard",
          title: "How to: Build Your First Dashboard",
          content: `A step-by-step guide to building your first useful Jira dashboard in under 10 minutes using three gadgets.

## Before You Start

Make sure:
- The app is installed (check [Installation & Setup](/apps/dashboard-charts-jira/installation-setup))
- You have access to a Jira dashboard (view or edit)
- You have permission to view the project you want to report on

---

## What You Will Build

A three-gadget dashboard:
1. A **pie chart** showing issue status distribution
2. An **issue table** for reviewing the details
3. A **filter controller** so anyone can slice the data

---

## Step 1: Open or Create a Dashboard

1. In Jira, click **Dashboards** in the top navigation
2. Select an existing dashboard, or click **Create dashboard** to make a new one
3. Click the **Edit** button (pencil icon) to enter edit mode

---

## Step 2: Add a Status Pie Chart

1. Click **Add gadget**
2. Search for **"Custom Charts"** and click **Add**
3. In the **left panel**, select **Projects** and pick your project
4. In the **right panel** → **Chart Type** tab → select **Pie Chart**
5. Click the **Chart By** tab → select **Status**
6. Watch the live preview update
7. Click **Save gadget**

**Result:** A pie chart showing your project's issue distribution by status.

---

## Step 3: Add an Issue Table

1. Click **Add gadget** again
2. Search for **"Issue List"** and click **Add**
3. Set the same project as the data source
4. Add columns: Key, Summary, Status, Assignee, Priority
5. Add a Quick Filter: label "My Issues", JQL \`assignee = currentUser()\`
6. Click **Save gadget**

**Result:** A table showing all issues with a one-click "My Issues" filter.

---

## Step 4: Add a Filter Controller

1. Click **Add gadget** → search for **"Dynamic Filter Controller"** → **Add**
2. Set the same project as the base data source
3. Add filter fields: **Status**, **Assignee**, **Priority**
4. Click **Save gadget** - note the **Reference ID** shown on the saved gadget
5. Edit your pie chart → change Data Source to **Dynamic Filter Controller** → select the Reference ID
6. Edit your issue table → same step
7. Click **Done** to exit edit mode

**Result:** Selecting a filter updates both the chart and the table simultaneously.

---

## What's Next?

- Add a **Goal Line** to track targets: [Calculations & Reference Lines](/apps/dashboard-charts-jira/calculations-lines)
- Try **Templates** for faster setup: [Templates](/apps/dashboard-charts-jira/templates)
- Learn to spot bottlenecks: [Time in Status Gadget](/apps/dashboard-charts-jira/time-in-status-gadget-intro)
- See all 10 chart types: [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide)
`,
        },
        {
          slug: "how-to-executive-dashboard",
          title: "How to: Build an Executive Delivery Dashboard",
          content: `A complete guide to building a high-impact executive dashboard using all seven gadgets.

## Who This Is For

Directors, VPs, and senior stakeholders who need a clear, data-driven view of delivery health without digging into Jira themselves.

## Dashboard Layout Plan

| **Row** | Gadget | Type | Purpose |
|---|---|---|---|
| **Row 1** | Global Filter Controller | Dynamic Filter Controller | One filter bar drives everything |
| **Row 2a** | Total Open Issues | Custom Charts → Tile | Key KPI number |
| **Row 2b** | Issue Distribution | Custom Charts → Pie | Status breakdown |
| **Row 2c** | Delivery Funnel | Custom Charts → Funnel | Pipeline visualization |
| **Row 3a** | Sprint Progress | Custom Charts → Stacked Bar | Sprint completion over time |
| **Row 3b** | Trend Over Time | Custom Charts → 2D Line | Created vs resolved trend |
| **Row 4a** | Flow Health | Cumulative Flow Diagram | WIP and bottleneck visibility |
| **Row 4b** | Aging Work | WIP Aging Charts | At-risk items at a glance |
| **Row 5a** | Team × Status | Pivot Table | Cross-dimensional workload |
| **Row 5b** | Cycle Time | Time in Status | Where work slows down |
| **Row 6** | Active Issues | Issue List | Full issue details |

---

## Step 1: Add the Filter Controller (Do This First)

1. Add **Dynamic Filter Controller** → set your project or JQL as base data source
2. Add filter fields: Sprint, Assignee, Priority, Issue Type, Status
3. Add tabs: **All Issues** (no filter), **This Sprint**, **My Issues**, **Bugs Only**, **High Priority**
4. Click **Save gadget** - note the **Reference ID**

---

## Step 2: Add Custom Charts (connect each to the Reference ID)

**Tile - Total Open Issues**
- Source: Dynamic Filter Controller
- Chart By: Custom JQL segment "Open" (\`resolution is EMPTY\`)
- Display: Count only, large number

**Pie - Issue Distribution**
- Source: Dynamic Filter Controller
- Chart By: Issue Type

**Funnel - Delivery Funnel**
- Source: Dynamic Filter Controller
- Chart By: Status (order: To Do → In Progress → In Review → Done)

**Stacked Bar - Sprint Progress**
- Source: same project (last 6 sprints)
- Chart By: Sprint, Group By: Status

**2D Line - Trend Over Time**
- Source: same project
- Chart By: Created (by Week), Group By: Resolved (by Week)
- Date range: Last 90 days

---

## Step 3: Add Analytics Gadgets

**Cumulative Flow Diagram**
- Source: Dynamic Filter Controller
- Date Range: Latest sprint (auto)
- Band Mode: Board columns

**WIP Aging Charts**
- Source: Dynamic Filter Controller
- Age Method: Time since last entry in current status
- Enable Threshold Line at 10 days, Percentile Line at 85

**Pivot Table - Team × Status**
- Source: Dynamic Filter Controller
- Row: Assignee, Column: Status
- Aggregation: Count, Display: Table Row Heatmap

**Time in Status - Cycle Time**
- Source: same project
- Report Type: Average Time
- Calculate In: Business Decimal Days

---

## Step 4: Add the Issue List

- Source: Dynamic Filter Controller
- Columns: Key, Summary, Assignee, Status, Priority, Sprint, Updated
- Quick Filters: My Issues, High Priority, Unassigned

---

## Step 5: Arrange and Share

1. Drag gadgets into the layout described above
2. Click **Done** to exit edit mode
3. Share the dashboard: Actions (•••) → Share → add your stakeholders
4. Use [Data Migration](/apps/dashboard-charts-jira/data-migration) to back up the configuration

> **Tip:** Use the **Description** tab on each gadget to add plain-language notes below charts. This helps executives understand what they are looking at without Jira jargon.
`,
        },
        {
          slug: "how-to-dynamic-filter",
          title: "How to: Connect Gadgets with Dynamic Filter Controller",
          content: `A step-by-step guide to setting up the Dynamic Filter Controller and connecting all your charts and tables to it.

## What You Need

- At least two gadgets already on your dashboard (Custom Charts, Issue List, Time in Status, Pivot Table, CFD, or WIP Aging)
- Edit access to the dashboard

---

## Step 1: Add the Controller

1. Open your dashboard in **edit mode**
2. Click **Add gadget** → search for **"Dynamic Filter Controller"** → click **Add**

> **Best practice:** Add the controller FIRST, before adding other gadgets. It is easier to connect gadgets to a controller that already exists.

---

## Step 2: Set the Base Data Source

The base data source scopes all connected gadgets.

1. In the left panel, select your source type:
   - **Projects** for a simple project-level dashboard
   - **Custom JQL** for precise scoping (e.g., \`project = TEAM AND issuetype in (Story, Bug, Task)\`)
2. Search for and select your project or enter your JQL

---

## Step 3: Add Filter Fields

Filter fields are what users interact with in the bar.

1. In the settings panel, go to the **Fields** tab
2. Click **+ Add Field**
3. Add these common fields:
   - **Sprint** (Jira Field type)
   - **Assignee** (Jira Field type)
   - **Priority** (Jira Field type)
   - **Issue Type** (Jira Field type)
   - **Status** (Jira Field type)

---

## Step 4: Add Preset Tabs (Optional but Recommended)

1. In the live preview area, click **+** next to the existing tab
2. Create tabs for common views:
   - **All Work** (no filters)
   - **This Sprint** (Sprint = active sprint)
   - **My Issues** (Assignee = currentUser())
   - **Bugs Only** (Issue Type = Bug)
3. Rename each tab by clicking its name

---

## Step 5: Save and Note the Reference ID

1. Click **Save gadget**
2. The saved gadget shows a **Reference ID** (e.g., "ABC123")
3. Copy this ID - you need it to connect other gadgets

---

## Step 6: Connect Each Gadget

For every chart or table you want the controller to drive:

1. Open the gadget in edit mode
2. In the **left panel**, change **Source Type** to **Dynamic Filter Controller**
3. Select your controller from the dropdown (identified by Reference ID)
4. Click **Save gadget**

Supported gadgets: Custom Charts, Issue List, Time in Status, Pivot Table, CFD, WIP Aging Charts

---

## Step 7: Verify

Click **"Show Connected Charts"** on the controller - all connected gadgets are highlighted on the dashboard.

## Common Issues

| **Problem** | Fix |
|---|---|
| **Gadget not updating** | Check Source Type is "Dynamic Filter Controller" and correct Reference ID is selected |
| **Controller not in the dropdown** | Both gadgets must be on the same dashboard |
| **Wrong data after filtering** | Check the controller's base data source scope |
| **Old data showing** | Hard refresh (Ctrl+F5) and re-save the controller |
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `Practical advice for building better dashboards, faster.

## Data Sources

**Use Saved Filters for shared dashboards.**
If multiple people use the same dashboard, build your Jira filter once (save it in Jira), then reference it as the data source. When the filter changes, all gadgets update automatically - no need to edit each gadget.

**Use JQL for precision.**
\`sprint in openSprints() AND project = TEAM\` is more reliable than selecting the project and trusting it always shows the right sprint. Test your JQL in Jira's Issue Navigator before using it in a gadget.

**Set the Dynamic Filter Controller's base JQL tightly.**
The more focused the base scope, the faster the dashboard loads. Use \`project = X AND issuetype in (Story, Bug, Task)\` rather than just \`project = X\` if you don't need sub-tasks or epics in most views.

---

## Custom Charts

**Use Templates to start fast.**
Apply a template first, then customize. It is faster than building from scratch. See [Templates](/apps/dashboard-charts-jira/templates).

**Keep segment count under 10.**
Charts with more than 10 segments become hard to read. Use **Custom JQL** to group rare values into an "Other" segment.

**Use Cumulative Total on line charts for running totals.**
When you want to show "total issues resolved this quarter", use the Cumulative Total calculation instead of week-by-week counts.

**Add a Description tab note.**
For stakeholder dashboards, use the Description tab to explain what the chart shows in plain language - no Jira jargon.

---

## Issue List

**Use Smart Labels to surface risk.**
Add a red "Overdue" label (\`duedate < now() AND resolution is EMPTY\`) and an orange "Due Soon" label (\`duedate <= 7d AND resolution is EMPTY\`). These appear on every row without filtering - leadership sees risk at a glance.

**Export after filtering.**
The CSV and PDF exports reflect the current filtered state. Apply Quick Filters first to export exactly the subset you need - e.g., only critical unassigned bugs.

**Use AND logic for focused lists, OR logic for catch-alls.**
AND: "Show me bugs that are also unassigned" (narrower). OR: "Show me anything that's either overdue or unassigned" (broader catch-all for triage).

---

## Time in Status

**Start with Average Time to find bottlenecks.**
Sort descending. The top row is your slowest stage. See [Display Settings & Export](/apps/dashboard-charts-jira/time-in-status-display-export) for interpretation tips.

**Use Business Decimal Days for SLA reporting.**
Calendar time includes nights and weekends. If your SLA is "resolve P1 within 2 business days", always use a Business format. Set up your Work Schedule first in the gadget settings.

**Cycle Time vs Lead Time - know the difference.**
Cycle Time starts when work actively began. Lead Time starts from creation. Report Lead Time to stakeholders. Use Cycle Time to evaluate your team's actual process speed.

---

## Pivot Table

**Start with Row Heatmap for workload analysis.**
Assignee × Status with Row Heatmap immediately shows who has the most "In Progress" or "In Review" work - no reading required.

**Make values clickable for drill-through.**
Enable "Make Values Clickable" so any cell opens the matching Jira issue list. This is the fastest way to go from summary to detail.

**Use date field formatting for trend pivots.**
When using Created or Resolved as a column field, set the format to "Month" or "Quarter" for cleaner grouping in management reports.

---

## Cumulative Flow Diagram

**Use "Latest sprint auto" on permanent team dashboards.**
With Latest Sprint Auto selected, the CFD always shows the current sprint - no one needs to update it after each sprint transition. See [Date Ranges & Scoping](/apps/dashboard-charts-jira/cumulative-flow-date-ranges).

**Watch for widening bands, not total height.**
A widening "In Review" band means work is piling up in review faster than it is leaving. The total height rising is normal (scope growing). A single band widening is the bottleneck signal.

**Use 1-week interval for releases, 1-day for active sprints.**
Daily intervals on a 90-day release chart create noise. Switch to weekly for longer time windows.

---

## WIP Aging Charts

**Use in every daily standup.**
Open the chart at the start of standup. Any dot past the threshold line gets a discussion: "What's blocking this? Can it be cleared today?" No sorting or filtering needed.

**Set the 85th percentile line as your SLE.**
"85% of our work completes within X days" - this is a data-driven commitment. Track whether the line moves over time to measure process improvement. See [Reference Lines & Scale](/apps/dashboard-charts-jira/wip-aging-reference-lines).

**Exclude weekends if your SLA is in business days.**
Enable "Exclude Weekends" so items sitting over weekends don't falsely trigger your threshold line.

---

## Performance

**Keep queries under 10,000 issues.**
Add date filters or project scoping to JQL for large Jira instances. \`created >= -90d\` is often enough to keep queries fast without losing useful data.

**Use auto-refresh sparingly.**
Auto-refresh every 10 minutes is useful on live dashboards shown in team areas. Turn it off for dashboards used in weekly meetings - manual refresh is enough and avoids performance overhead.

---

## Import / Export

**Back up configurations before big changes.**
Use the Import/Export tab on any gadget to export its JSON configuration. Save to a shared document or Confluence page before making major changes - this is your restore point.

**Duplicate gadgets instantly.**
Export a configured gadget → add a new gadget of the same type → import the JSON. A complete configuration is copied in seconds with no manual re-setup.
`,
        },
        {
          slug: "user-guide-pdf",
          title: "User Guide PDF",
          content: `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">User Guide - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download the complete User Guide or open it in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Dashboard_User_Guide_e74739cc64.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },


    // ═══════════════════════════════════════════════════════════════
    // 2. CUSTOM CHARTS GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "custom-charts-gadget",
      title: "Custom Charts Gadget",
      articles: [
        {
          slug: "custom-charts-gadget-intro",
          title: "Custom Charts Gadget",
          content: `The **Custom Charts** gadget is the core of this app, allowing you to transform raw Jira data into beautiful, actionable visualizations. It supports 10 distinct chart types across 5 categories, giving you the flexibility to display everything from high-level KPI tiles to detailed 2D matrices.

Use this section to understand how to select the right chart, configure how your data is grouped, add calculations, and fine-tune your display settings.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *A quick start guide to building your first chart, understanding the configuration tabs, and best practices for visualization.* |
| **Chart Types Guide** | *A detailed breakdown of all 10 chart types (Pie, Bar, Line, Table, Funnel, Tile), including when and how to use them.* |
| **Field Segments** | *Learn how to use the "Chart By" setting to group your data into segments using Jira fields, Custom JQL, or Saved Filters.* |
| **Group By Segments 2D** | *Instructions on adding a second dimension to your charts for cross-tabulation and multi-series comparisons.* |
| **Calculations Lines** | *How to change metric calculations (Count, Sum, Average) and add Goal, Trend, or Average reference lines to your charts.* |
| **Display Options** | *A comprehensive guide to tweaking chart aesthetics, including tooltips, labels, gridlines, axes, and export settings.* |
| **Templates** | *Ready-made chart configurations for common Jira reporting use cases.* |
| **Date Range** | *How to use date fields for trend charts, time grouping, and date range filtering.* |
`,
        },
        {
          slug: "custom-charts-overview",
          title: "Overview",
          content: `The Custom Charts gadget lets you create beautiful, informative visualizations from your Jira data.

The Custom Charts gadget supports 10 chart types across 5 categories:

| **Category** | **Chart Types** |
| --- | --- |
| **Pie** | Pie Chart |
| **Bar** | Bar, Grouped Bar, Stacked Bar |
| **Line** | Line, 2D Line |
| **Table** | Table, 2D Table |
| **Other** | Funnel, Tile |

## Quick Start: Create Your First Chart

1. Add "Custom Charts" to your dashboard
2. Select a project, filter, or enter JQL
3. Click on the chart type you want (default is Pie)
4. Select how to group your data (e.g., Status, Assignee)
5. Click "Save gadget"

Done! Your chart is live.

## Configuration Tabs

| **Tab** | **What It Controls** |
| --- | --- |
| **Chart Type** | Visual format (pie, bar, line, etc.) |
| **Chart By** | Main grouping field/segments |
| **Group By** | Second dimension (for 2D charts) |
| **Calculations** | Reference lines (goal, trend, average) |
| **Display Settings** | Visual options and formatting |
| **Description** | Explanatory text |
| **Import/Export** | Configuration sharing |

## Quick Reference: Chart Type Selection

| **If You Want To...** | **Use This Chart** |
| --- | --- |
| **Show percentages/proportions** | Pie |
| **Compare values across categories** | Bar |
| **Compare with sub-categories** | Grouped Bar |
| **Show composition within categories** | Stacked Bar |
| **Show trends over time** | Line |
| **Compare multiple trends** | 2D Line |
| **Show exact numbers** | Table |
| **Show a data matrix** | 2D Table |
| **Show stage progression** | Funnel |
| **Show single KPIs** | Tile |

## Tips for Effective Charts

### Do

* Choose the right chart type for your data
* Limit segments to 10 or fewer for readability
* Use meaningful colors (red for bugs, green for done)
* Add descriptions to explain what the chart shows

### Don't

* Don't use pie charts with too many segments
* Don't use line charts for non-sequential data
* Don't forget to set a clear title
`,
        },
        {
          slug: "chart-types-guide",
          title: "Chart Types Guide",
          content: `Detailed guide to all 10 chart types available in Custom Charts, with examples and best practices.

## Pie Chart

![Pie Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/pie-chart.png)

### When to Use

* Showing how a whole is divided into parts
* Displaying percentages and proportions
* Comparing relative sizes of categories

### Best For

* Status distribution (To Do: 30%, In Progress: 45%, Done: 25%)
* Bug severity breakdown
* Work allocation by team member

### Best Practices

* Use 2-7 segments for readability
* Order segments by size (largest to smallest)
* Use contrasting colors

## Bar Chart (1D)

![Bar Chart (1D)](/images/dashboard-charts/Custom%20Charts/Chart%20Types/1d-bar-chart.png)

### When to Use

* Comparing values across categories
* Showing rankings or distributions

### Best For

* Issues per team member
* Bugs per component
* Story points by sprint

## Grouped Bar Chart (2D)

![Grouped Bar Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/grouped-bar-chart.png)

### When to Use

* Comparing multiple series side-by-side
* Showing breakdown within each category

Example: Chart By: Status | Group By: Issue Type

Result: For each status, see separate bars for Stories, Bugs, Tasks side by side.

## Stacked Bar Chart (2D)

![Stacked Bar Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/stacked-bar-chart.png)

### When to Use

* Showing composition within categories
* Comparing totals AND breakdowns

Example: Chart By: Sprint | Group By: Priority

Result: Each sprint shows a single bar with priority levels stacked.

## Line Chart (1D)

![Line Chart (1D)](/images/dashboard-charts/Custom%20Charts/Chart%20Types/1d-line-chart.png)

### When to Use

* Showing trends over time
* Displaying progression or change

### Best For

* Issues created per week
* Velocity trend across sprints
* Bug count over time

## 2D Line Chart

![2D Line Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/2d-line-chart.png)

### When to Use

* Comparing multiple trends simultaneously
* Showing related metrics over time

Example: Chart By: Week | Group By: Issue Type

Result: Separate lines for Stories, Bugs, and Tasks on the same time axis.

## Table Chart (1D)

![Table Chart (1D)](/images/dashboard-charts/Custom%20Charts/Chart%20Types/1d-table-chart.png)

### When to Use

* Displaying exact numbers
* When precision matters more than visualization

## 2D Table Chart

![2D Table Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/2d-table-chart.png)

### When to Use

* Showing data matrix with two dimensions
* Cross-tabulating two fields

Example: Chart By: Assignee | Group By: Status

Result: A table where rows are team members, columns are statuses, and cells show the count.

## Funnel Chart

![Funnel Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/funnel-chart.png)

### When to Use

* Showing stage-based progression
* Visualizing conversion or workflow

### Best For

* Support ticket funnel (New → Triaged → Working → Resolved)
* Sales pipeline stages

## Tile Chart

![Tile Chart](/images/dashboard-charts/Custom%20Charts/Chart%20Types/tile-chart.png)

### When to Use

* Displaying single KPI metrics
* Creating dashboard scorecards

### Best For

* Total open issues
* Story points remaining
* Bugs this week
`,
        },
        {
          slug: "field-segments",
          title: "Field Segments",
          content: `The "Chart By" setting determines how your data is grouped and displayed. This is the most important configuration for any chart.

![Field Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/field-segments.png)

## What is "Field"?

"Field" defines how your issues are categorized into segments (slices, bars, lines, or rows depending on chart type).

| **Chart Type** | **Field Creates** |
| --- | --- |
| **Pie** | Slices |
| **Bar** | Bars |
| **Line** | Points on the line |
| **Table** | Rows |
| **Funnel** | Funnel stages |
| **Tile** | Single value |

## Chart By Options

![Chart By Option](/images/dashboard-charts/Custom%20Charts/Field%20Segments/chart-by-option.png)

You have three ways to define segments:

| **Option** | **Description** | **Best For** |
| --- | --- | --- |
| **Jira Fields** | Group by any Jira field | Simple field-based grouping |
| **Custom JQL** | Define segments with JQL queries | Complex, custom groupings |
| **Saved Filters** | Use existing filters as segments | Reusing filter definitions |

## Option 1: Grouping by Jira Fields

Select any Jira field to group your data. Segments are automatically created for each unique value.

### Common Fields

![Common Fields](/images/dashboard-charts/Custom%20Charts/Field%20Segments/common-fields.png)

| **Field** | **Creates Segments For** |
| --- | --- |
| **Status** | Each workflow status |
| **Assignee** | Each team member + Unassigned |
| **Priority** | Highest, High, Medium, Low, Lowest |
| **Issue Type** | Story, Bug, Task, Epic, etc. |
| **Component** | Each component in the project |
| **Labels** | Each label applied to issues |
| **Sprint** | Each sprint (active, future, closed) |

## Option 2: Grouping by Custom JQL

![Custom JQL Field](/images/dashboard-charts/Custom%20Charts/Field%20Segments/custom-jql-field.png)

Define your own segments using JQL queries. This gives you complete control over how data is grouped.

### Example: Bug Age Groupings

| **Segment Name** | **JQL Condition** |
| --- | --- |
| **New (< 7 days)** | issuetype = Bug AND created >= -7d |
| **Aging (7-30 days)** | issuetype = Bug AND created >= -30d AND created < -7d |
| **Old (> 30 days)** | issuetype = Bug AND created < -30d |

> **Tip:** Each issue appears only in the FIRST matching segment. Order your segments carefully if conditions might overlap.

## Working with Segments

### Renaming Segments

![Renaming Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/renaming-segments.png)

Click on the segment name to edit it. This changes the label shown in the chart without affecting the data.

### Reordering Segments

![Reordering Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/reordering-segments.png)

Drag and drop segments to change their order in the chart.

### Showing/Hiding Segments

![Showing/Hiding Segments](/images/dashboard-charts/Custom%20Charts/Field%20Segments/showing-hiding-segments.png)

Toggle the visibility icon to show or hide segments. Hidden segments are not included in calculations.

### Changing Segment Colors

![Changing Segment Colors](/images/dashboard-charts/Custom%20Charts/Field%20Segments/changing-segments-colors.png)

Click the color swatch to open the color picker.

## Ordering Options

![Ordering Options](/images/dashboard-charts/Custom%20Charts/Field%20Segments/ordering-options.png)

| **Option** | **Sorts By** |
| --- | --- |
| **Count (High to Low)** | Largest segments first |
| **Count (Low to High)** | Smallest segments first |
| **A to Z** | Alphabetical ascending |
| **Z to A** | Alphabetical descending |
| **Custom** | Your manual drag order |
`,
        },
        {
          slug: "group-by-segments-2d",
          title: "Group By Segments 2D",
          content: `
Add a second dimension to your charts with the "Group By" feature, available for Grouped Bar, Stacked Bar, 2D Line, and 2D Table charts.

![Group By 2D](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/group-by-2d.png)

## What is "Group By"?

"Group By" adds a second grouping dimension to your chart, creating a two-dimensional visualization.

| **Without Group By** | **With Group By** |
| --- | --- |
| **Status (3 bars)** | Status x Issue Type (3 groups of 3 bars) |
| **One data series** | Multiple data series |
| **Simple comparison** | Cross-dimensional analysis |

## Which Charts Support Group By?

| **Chart Type** | **Group By Support** |
| --- | --- |
| **Pie** | No |
| **Bar (1D)** | No |
| **Grouped Bar** | Yes |
| **Stacked Bar** | Yes |
| **Line (1D)** | No |
| **2D Line** | Yes |
| **Table (1D)** | No |
| **2D Table** | Yes |
| **Funnel** | No |
| **Tile** | No |

## How Field By and Group By Work Together

Field By = Rows/Categories (X-axis)

Group By = Columns/Series (multiple bars/lines)

### Grouped Bar Example

![Grouped Bar Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/grouped-bar-eg.png)

| **Setting** | **Value** |
| --- | --- |
| **Field By** | Status |
| **Group By** | Issue Type |
| **Result** | For each status, see separate bars for Stories, Bugs, Tasks side by side |

### Stacked Bar Example

![Stacked Bar Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/stacked-bar-eg.png)

| **Setting** | **Value** |
| --- | --- |
| **Field By** | Status |
| **Group By** | Priority |
| **Result** | Each Status shows priorities stacked in a single bar |

### 2D Table Example

![2D Table Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/2d-table-eg.png)

| **Setting** | **Value** |
| --- | --- |
| **Field By** | Priority |
| **Group By** | Status |
| **Result** | Matrix with Priority as rows, statuses as columns |

## Common Group By Combinations

| **Purpose** | **Field By** | **Group By** |
| --- | --- | --- |
| **Bug vs Story by status** | Status | Issue Type |
| **Priority mix per sprint** | Sprint | Priority |
| **Team trends over time** | Week | Team |
| **Completion by component** | Component | Status |
| **Work type by person** | Assignee | Issue Type |

## Best Practices

### Limit Group By Categories

* 3-5 categories is ideal for easy reading
* Maximum 7-8 before charts become confusing

### Choose Complementary Dimensions

* Status x Type - Different aspects of same issues
* Time x Category - Trend analysis with breakdown
* Person x Status - Individual progress tracking
`,
        },
        {
          slug: "calculations-lines",
          title: "Calculations Lines",
          content: `
Configure what values your chart displays and add goal, trend, and average lines for context.

## Calculation Types

By default, charts show the Count of issues. You can change this:

| **Calculation** | **What It Shows** | **Example** |
| --- | --- | --- |
| **Count** | Number of issues | 25 issues in "To Do" |
| **Sum** | Total of a numeric field | 150 total Story Points |
| **Average** | Mean of a numeric field | 6 SP average per issue |

## Count Calculation

The number of issues in each segment. This is the default.

## Sum Calculation

The total of a numeric field across issues in each segment.

**Use cases:** Total Story Points by assignee, Total estimated hours by sprint

## Average Calculation

The mean value of a numeric field for issues in each segment.

**Use cases:** Average story points per issue by type, Average complexity by component

## Reference Lines

Add horizontal reference lines to provide context on Bar and Line charts.

| **Line Type** | **Description** | **Use Case** |
| --- | --- | --- |
| **Goal** | Fixed target value you set | We want to complete 50 SP per sprint |
| **Trend** | Calculated trend direction | Are bugs increasing or decreasing? |
| **Average** | Mean across all segments | Who's above/below average? |

## Goal Line

**What it is:** A horizontal line at a specific value you set, representing a target.

### How to Add

1. In Calculations tab, click "Goal, Trend or Average Line"
2. Select "Goal Line"
3. Enter the goal value (e.g., 50)
4. Enter a label (e.g., "Sprint Target")
5. Choose line style (solid or dashed)

## Trend Line

**What it is:** A calculated line showing the overall direction of your data (increasing, decreasing, or flat).

The trend line is calculated using linear regression across your data points.

## Average Line

**What it is:** A horizontal line showing the mean value across all segments.

Helpful for comparing individuals to team average.

## Cumulative Total

**What it is:** Shows a running total that accumulates across segments, rather than individual values.

### Example

| **Week** | **Issues (Normal) - Issues (Cumulative)** |
| --- | --- |
| **Week 1** | 10 - 10 |
| **Week 2** | 15 - 25 |
| **Week 3** | 12 - 37 |
| **Week 4** | 8 - 45 |

## Which Charts Support Reference Lines?

| **Chart Type** | **Reference Lines** |
| --- | --- |
| **Bar** | Goal, Trend, Average |
| **Grouped Bar** | Goal, Trend, Average |
| **Stacked Bar** | Goal, Trend, Average |
| **Line** | Goal, Trend, Average |
| **2D Line** | Goal, Trend, Average |
| **Pie** | Not applicable |
| **Table** | Not applicable |
| **Funnel** | Not applicable |
| **Tile** | Not applicable |
`,
        },
        {
          slug: "display-options",
          title: "Display Options",
          content: `
Control how your Custom Chart looks: formatting, tooltips, labels, layout, and export behavior.

## Where to find it

![Display Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/display-options.png)

* Open a Custom Chart gadget
* Click Edit
* Go to the Display Options tab

## What you can change

* Formatting (date format, % decimal places)
* Chart behavior (tooltips, hover display, gridlines, totals)
* Labels (heading and column/metric labels)
* Layout controls (pie size, axis height, table/tile limits)
* Export + menu (options menu button, direct export enable/disable)

## General settings (available across chart types)

![General Settings](/images/dashboard-charts/Custom%20Charts/Display%20Options/general-settings.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Date format** | Controls how dates appear in charts/tooltips where dates are shown. | 20 Jan 2021 (DD Mon YYYY) |
| **% Places Control** | Sets decimal places for percentage values shown in labels/tooltips. | 1 |
| **Auto refresh every 10 minute** | Refreshes the gadget automatically (primarily useful in View mode). | Off |
| **Show options menu button** | Shows the chart's options/menu button (for quick actions). | On |
| **Export to Png, Pdf & Csv** | Enables direct export from the gadget. | On (may be disabled by admin) |

If export is disabled by admin, the toggle will show **"Disabled by admin"** and exports won't be available.

## Pie / Funnel charts (Display Options)

![Pie / Funnel Display Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/pie-funnel-display-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on Legends name hover** | Hover over legend items to see tooltip details. | On |
| **Display on hover** | What appears on hover: Count, Count / %, %, % / Count. | Count |
| **Maximum pie chart diameter** | Controls pie size (range: 300-400px). (Pie only) | 300px |
| **Y-axis height** | Vertical size control (Funnel only) (range: 320-800px). | 350px |

### Labels

![Labels](/images/dashboard-charts/Custom%20Charts/Display%20Options/labels.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Heading** | Heading label shown with the chart/legend area. | Blank |
| **Count label** | Label for count values (ex: "Issues", "Tickets"). | Issues |

### Legend display

![Legends](/images/dashboard-charts/Custom%20Charts/Display%20Options/legends.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show chart legend** | Shows/hides the legend list. | On |
| **Show total row** | Shows a total row in the legend/table area (where applicable). | On |
| **Show number column** | Shows the serial/number column in the legend/table area. | On |

**Example (Pie):** If you want quick context without clicking, set **Display on hover = Count / %** and **% Places Control = 1**.

## Bar charts (Bar / Grouped Bar / Stacked Bar)

![Bar Chart Settings](/images/dashboard-charts/Custom%20Charts/Display%20Options/bar-chart-settings.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on bar hover** | Shows tooltip when hovering a bar. | On |
| **Tooltip display** | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| **Show Count labels above bars** | Prints count values above each bar. | On |
| **Show zero Count labels above bars** | Also shows labels for bars with 0 count. | Off |
| **Show % labels above bars** | Prints % labels above bars. | Off |
| **Show horizontal gridlines** | Adds horizontal gridlines for readability. | Off |
| **Show Count total under chart** | Displays total count below the chart. | On |

### Axis & label

![Axis and Labels](/images/dashboard-charts/Custom%20Charts/Display%20Options/axis-and-labels.png)

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show y-axis label** | Toggles Y-axis label. | On |
| **Y-axis label** | Custom Y-axis title text. | Issues |
| **Show x-axis label** | Toggles X-axis label. | On |
| **X-axis label** | Custom X-axis title text. | Date |
| **Y-axis height** | Chart height control (range: 320-800px). | 350px |
| **Y-axis unit** | Shows axis values as Count or %. | Count |

**Example (Bar):** To display distribution instead of raw totals: set **Y-axis unit = %**, enable **Show % labels above bars**, and keep **% Places Control = 1**.

![Bar Distribution Example](/images/dashboard-charts/Custom%20Charts/Display%20Options/bar-distribution-eg.png)

## Line charts (Line / Line 2D)

![Line Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/line-chart-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on point hover** | Shows tooltip when hovering a point. | On |
| **Tooltip display** | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| **Show Count labels above points** | Prints count values above points. | On |
| **Show zero Count labels above points** | Shows labels for 0 values. | Off |
| **Show % labels above points** | Prints % labels above points. | Off |
| **Show horizontal gridlines** | Adds horizontal gridlines. | Off |
| **Show vertical gridlines** | Adds vertical gridlines. | Off |
| **Show vertical hover line** | Shows a vertical guide line on hover. | On |
| **Show Count total under chart** | Displays total count below the chart. | On |

### Axis & label

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show y-axis label / Y-axis label** | Toggle + text for Y-axis title. | On / Issues |
| **Show x-axis label / X-axis label** | Toggle + text for X-axis title. | On / Date |
| **Y-axis height** | Chart height control (range: 320-800px). | 350px |
| **Y-axis unit** | Axis unit: Count or %. | Count |

## Table charts (Table / Table 2D)

![Table Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/table-chart-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show tooltip on hover** | Shows tooltip when hovering over values/names. | On |
| **Show number column** | Adds a serial/number column. | On |
| **Show total rows** | Adds total row(s) at bottom. | On |
| **Limit rows** | Limits table rows shown (range: 1-200). | 5 |

### Table 2D only

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Show total column** | Adds a total column to the right. | On |
| **Display** | Chooses how values display: Count, Count / %, %, % / Count. | Count |
| **Group By Label** | Custom label for the group-by dimension. | Blank |
| **Show group by heading label** | Shows/hides the group-by heading label. | On |

### Labels

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Heading** | Table heading label. | Blank |
| **Count label** | Column label for count values. | Issues |

**Example (Table):** For clean dashboards, set **Limit rows = 10-20**, enable **Show total rows**, and keep **Display = Count / %** for executive summaries (Table 2D).

## Tile chart

![Tile Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/tile-chart-options.png)

### Chart options

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Max tiles per row** | Controls how many tiles appear in one row (range: 1-8). | 5 |
| **Limit rows** | Controls how many tile rows appear (range: 1-50). | 2 |
| **Display** | Tile content format: Count, Count / %, %, % / Count, Name only. | Count |
| **Show count total** | Shows the total count summary (where applicable). | On |
| **Show tooltip on name hover** | Shows tooltip when hovering tile name. | On |

### Labels

| **Setting** | What it does | Default |
| --- | --- | --- |
| **Heading** | Tile section heading label. | Blank |
| **Count label** | Label for count values. | Issues |
| **Show chart by and count labels** | Shows/hides footer labels for chart-by + count label. | On |

**Example (Tiles):** For compact widgets, use **Max tiles per row = 4**, **Limit rows = 2**, and **Display = Count / %**.

![Tile Chart Example](/images/dashboard-charts/Custom%20Charts/Display%20Options/tile-chart-eg.png)

## Quick tips

* Keep **% Places Control = 0-1** for clean dashboards.
* Use **Limit rows** (Table) / **Limit rows + Max tiles per row** (Tile) to avoid overcrowding.
* Turn **Auto refresh** ON for live dashboards; keep it OFF for static reports.
* If users can't export, check whether **Export** is disabled by admin.
`,
        },
        {
          slug: "templates",
          title: "Templates",
          content: `
Use Templates to start a Custom Chart faster with a ready-made chart setup. Templates are useful for common reporting views such as Issues by Status, Priority, Issue Type, Assignee, Project, and comparison-style charts.

## Where to find it

![Where to Find Templates](/images/dashboard-charts/Custom%20Charts/Templates/where-to-find-templates.png)

* Open a Custom Chart gadget.
* Click Edit.
* Use the Templates option from the chart header or title area.
* Browse the template list, search by name, and click Use Template.

## What Templates do

* Give users a quick starting point instead of building the chart manually from scratch.
* Apply a ready-made chart idea with the main chart structure already filled in.
* Help teams create common reports more consistently across dashboards.
* Still allow the user to edit the chart after the template is applied.

## What gets applied when you use a template

![Template Applied](/images/dashboard-charts/Custom%20Charts/Templates/template-applied.png)

| **Area** | **What the template applies** | **Why it matters** |
| --- | --- | --- |
| **Chart setup** | Chart title, chart type, main field, and group by field when defined in the template. | The basic report layout is created for you. |
| **Advanced logic** | JQL segments and group-by JQL segments for templates that use comparison or segment-based logic. | Templates can represent more than a simple field chart. |
| **Starter labels** | Starter labels used by the template where needed. | Users get a readable chart immediately and can refine it later. |

## Template catalog for Custom Charts

![Templates Catalog](/images/dashboard-charts/Custom%20Charts/Templates/templates-catalog.png)

![Read Each Template](/images/dashboard-charts/Custom%20Charts/Templates/read-each-template.png)

| **Template** | **Chart type** | **Main field** | **Group By** | **What it creates** | **Best use** |
| --- | --- | --- | --- | --- | --- |
| **Issues by Status** | Pie Chart | status | - | Shows how issues are distributed by status. | Good for a fast status breakdown and a simple shareable chart. |
| **Issues by Priority** | Funnel Chart | priority | - | Shows issue volume by priority in a funnel-style view. | Useful when you want to compare how work is distributed across priority levels. |
| **Issues by Issue Type** | Line Chart | issuetype | - | Plots issues by issue type in a line-style view. | Useful when you want a lightweight category comparison in a line chart presentation. |
| **Issues by Assignee** | Bar Chart | assignee | - | Shows how work is distributed across assignees. | Useful for workload distribution or ownership checks. |
| **Unresolved Issues** | Bar Chart | Custom JQL | - | Creates a JQL-segment chart using the segment "Unresolved" with JQL \`status != Done\`. | Useful when you want a quick unresolved-only starter chart without building a segment manually. |
| **Issues by Component** | Table Chart | components | - | Builds a table-based summary by component. | Useful when users prefer a tabular view instead of a visual chart. |
| **Issues by Labels** | Bar Chart | labels | - | Builds a bar chart grouped by issue labels. | Useful for tag-based reporting and theme analysis. |
| **Issues by Fix Version** | Line Chart | fixVersions | - | Builds a line-style chart by fix version. | Useful for release-oriented reporting. |
| **Bug Rate by Sprint** | Grouped Bar Chart | sprint | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "Bugs" segment using \`issuetype = Bug\`. | Useful when you want sprint-level comparison with a bug-only grouped slice. |
| **Issues by Status per Project** | Stacked Bar Chart | status | project | Compares statuses within each project using a stacked bar layout. | Useful for cross-project status comparison in one chart. |
| **Issues by Priority per Project** | Grouped Bar Chart | priority | project | Compares project-level priority distribution side by side. | Useful for seeing whether one project carries more high-priority work than another. |
| **Issues by Type per Assignee** | Stacked Bar Chart | issuetype | assignee | Compares issue types within each assignee. | Useful for role mix, work allocation, and team ownership analysis. |
| **To Do by Priority** | Stacked Bar Chart | priority | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "TO DO" segment using \`status = 'To Do'\`. | Useful when you want to compare only To Do issues by priority. |
| **Epic Progress** | Grouped Bar Chart | status | Epic link | Builds a grouped comparison using status within each Epic link. | Useful for epic-level progress review and delivery tracking. |

## Important behavior and limitations

* Templates are built-in starter templates in the current implementation. They are not user-saved personal templates from the UI.
* Templates focus on chart setup, not full gadget restoration.
* Templates do not replace the need for Display Options when you want appearance-level customization.
* If the admin disables the Templates feature, users will not be able to use the template action.
`,
        },
        {
          slug: "date-range-custom-charts",
          title: "Date Range for Custom Charts",
          content: `
Use date fields to group Jira issues into clear time periods, build trend charts, and control how dates appear in labels and tooltips.

## Where to find it

* Open a Custom Chart gadget.
* Click Edit.
* Choose a date field such as Created, Updated, Due date, Resolved, or a custom date field.
* Use the date controls in the chart configuration and Display Options panel.

## What the date feature does

* Recognizes when the selected field is a date or date-time field.
* Groups raw dates into reporting buckets such as day, week, month, quarter, or year.
* Lets you choose a date range such as all dates, recent rolling periods, or a custom between-dates range.
* Formats date labels in a readable way across the chart, legend, labels, and tooltips.
* Keeps date-based charts in chronological order so trends are easier to read.

**When it appears:** The date feature becomes important when your Chart By field or Group By field is a date field. In that case, the gadget stops treating the values like normal categories and starts treating them as time-based data.

## Main date controls

| **Control** | **What it does** | **Common values** |
| --- | --- | --- |
| **Date grouping** | Controls how dates are bucketed for reporting. | Days, Weeks, Months, Years |
| **Date range** | Limits which period is included in the chart. | All, Past 7 Days, Past 30 Days, Past 90 Days, This Week, Last Week, This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year, Between dates |
| **Custom from / to dates** | Appears when Between dates is selected so the user can define an exact window. | Manual date entry |
| **Date format** | Controls how the final date labels appear to users. | Examples include DD Mon YYYY, Mon DD, YYYY, or YYYY-M-DD |
| **Ordering** | Keeps date charts in time order instead of alphabetical order. | Chronological by default for date fields |

> **Note:** When a date field is selected, the gadget automatically prefers chronological ordering. This makes trend charts easier to read.

## Date grouping options

| **Grouping option** | **Best use** |
| --- | --- |
| **Days** | Shows each day as its own point or segment. Best for short time windows and detailed monitoring. |
| **Weeks** | Groups issues into weekly buckets. Useful for sprint-level and weekly trend reporting. |
| **Months** | Groups issues by calendar month. Good for management reporting and longer trend views. |
| **Years** | Groups issues by year. Best for long-term summaries with a broad time span. |

## Date range options

| **Range option** | **When to use it** |
| --- | --- |
| **All** | Shows all available dates in the result set. |
| **Past 24 Hours** | Rolling window ending now. Useful for near-real-time activity. |
| **Past 3 / 7 / 30 / 90 Days** | Rolling time windows for short- or medium-term trend analysis. |
| **This Week / Last Week** | Calendar-based weekly windows. |
| **This Month / Last Month** | Calendar-based monthly windows. |
| **This Quarter / Last Quarter** | Quarter-based reporting windows. |
| **This Year / Last Year** | Year-based reporting windows. |
| **Between dates** | Lets the user choose an exact from-date and to-date for a custom report window. |

## Examples

* Created by Month: shows how many issues were created in each month.
* Resolved by Week: shows weekly completion trend.
* Due Date by Quarter: groups upcoming work by quarter.
* Updated by Day for the Past 7 Days: useful for operational monitoring and daily activity checks.

## Best practices

* Use Days for short ranges and Months or Quarters for long ranges.
* Use line charts when you want to show a clear trend over time.
* Use a custom Between dates range when you need a precise reporting window.
* Keep the selected date format simple and consistent across dashboards.
* If the chart feels crowded, widen the range grouping from Days to Weeks or Months.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. ISSUE LIST GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "issue-list-gadget",
      title: "Issue List Gadget",
      articles: [
        {
          slug: "issue-list-gadget-intro",
          title: "Issue List Gadget",
          content: `The **Issue List** gadget displays your Jira issues in a highly configurable table format. It is perfect for generating live status reports, tracking team workloads, and providing quick, clickable access to issue details directly from your dashboard.

Use this section to learn how to customize your table columns, add visual indicators for high-priority items, and set up interactive filters for your users.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Issue List does, data sources, and when to use it over a chart.* |
| **Columns** | *How to add, rename, reorder, and remove columns - plus recommended column sets for common use cases.* |
| **Smart Labels** | *Add color-coded badge indicators to issues based on JQL conditions or saved filters.* |
| **Quick Filters** | *Add one-click filter buttons above the table, configure AND/OR logic, and set up preset views.* |
| **Display Options & Export** | *Table display preferences, pagination, timestamps, avatars, and export formats.* |
| **Templates For Issue List** | *Ready-made table layouts for common reporting use cases.* |
`,
        },
        {
          slug: "issue-list-overview",
          title: "Overview",
          content: `The Issue List gadget displays your Jira issues in a configurable table on your dashboard. It complements visual charts by showing the actual issues behind the numbers - with the columns, labels, and filters your team needs.

![Issue List gadget](/images/dashboard-charts/Issue%20List/issue-list-guide.png)

## When to Use Issue List

Use Issue List when you need:
- The actual issues behind a chart segment (not just a count)
- A live sprint board or workqueue on a dashboard
- A filtered issue table for standups, triage, or reviews
- An exportable list for stakeholders

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Show all issues from one or more Jira projects |
| **Saved Filter** | Use a pre-saved Jira filter as the issue scope |
| **Custom JQL** | Write precise JQL to scope exactly which issues appear |
| **Dynamic Filter Controller** | Connect to a shared filter bar so users can filter the table interactively |

## Feature Overview

| **Feature** | **Description** |
| --- | --- |
| **Custom Columns** | Add any Jira field as a column - standard or custom |
| **Smart Labels** | Color-coded badge indicators based on JQL or saved filter conditions |
| **Quick Filters** | One-click filter buttons above the table for instant slicing |
| **AND/OR Filter Logic** | Control whether multiple active filters narrow or broaden the result |
| **Sorting** | Click any column header to sort ascending or descending |
| **Pagination** | Show 5, 10, 20, or 50 issues per page |
| **Templates** | Pre-built table layouts for common use cases |
| **Export** | CSV, PNG, and PDF export for the currently filtered result set |
| **Import/Export Config** | JSON backup and restore of the full gadget configuration |
`,
        },
        {
          slug: "issue-list-columns",
          title: "Columns",
          content: `Columns are the foundation of the Issue List. You choose which Jira fields appear as columns, what order they appear in, and what labels to show.

## Adding Columns

1. Open the Issue List gadget in edit mode
2. In the **Columns** section, click **+ Add another field**
3. Search for the field you want (e.g., "Story Points", "Due Date", "Component")
4. Click the field to add it as a column
5. Repeat to add more columns

Any Jira field is available - standard fields and custom fields.

## Reordering Columns

Drag the handle icon next to a column up or down to change its position. The top of the list = leftmost column in the table.

## Renaming Columns

Click the **pencil icon** next to a column name and enter a new label. The rename only affects the column header in the table - the underlying Jira field is unchanged.

![Rename Columns](/images/dashboard-charts/Issue%20List/issue-list-renaming-columns.png)

## Removing Columns

Click the **trash icon** next to a column to remove it.

## Recommended Column Sets

Start with one of these proven combinations for common use cases:

**Sprint Report**
Key · Summary · Status · Assignee · Story Points · Priority

**Bug List**
Key · Summary · Priority · Status · Assignee · Created · Component

**Team Workload**
Assignee · Key · Summary · Status · Priority · Due Date

**Release Tracking**
Key · Summary · Priority · Status · Assignee · Fix Version · Updated

**Triage Queue**
Key · Summary · Priority · Status · Assignee · Created · Reporter

> **Tip:** Add the **Issue Type** column to any set - it helps distinguish Stories, Bugs, Tasks, and Epics at a glance without needing to click into each issue.
`,
        },
        {
          slug: "issue-list-smart-labels",
          title: "Smart Labels",
          content: `Smart Labels add a colored badge to any issue that matches a condition. They make it easy to spot critical, overdue, blocked, or high-risk issues at a glance - without filtering the table.

![Smart Labels](/images/dashboard-charts/Issue%20List/smart-labels.png)

## How Smart Labels Work

A Smart Label adds a new **indicator column** to the table. When an issue matches the label's condition, a colored badge appears in that column. Issues that don't match show an empty cell.

Multiple Smart Labels can be active at the same time - each gets its own column.

## Two Types of Smart Labels

| **Type** | **How It Works** | **Best When** |
| --- | --- | --- |
| **JQL-Based** | Shows badge if the issue matches a JQL condition | Custom conditions - overdue, blocked, SLA breach, any complex logic |
| **Filter-Based** | Shows badge if the issue matches a saved Jira filter | Reusing filter criteria already defined in Jira |

## How to Add a Smart Label

1. Open the Issue List gadget in edit mode
2. In the right panel, find the **Smart Labels** section
3. Click **+ Add Smart Label**
4. Enter a label name (e.g., "Overdue")
5. Choose the label type: JQL-Based or Filter-Based
6. Enter the JQL condition or select the saved filter
7. Choose a badge color
8. Save the gadget

## Smart Label Examples

| **Label** | **Type** | **Condition** |
| --- | --- | --- |
| **Critical** | JQL | \`priority = Highest\` |
| **Overdue** | JQL | \`duedate < now() AND resolution is EMPTY\` |
| **Blocked** | JQL | \`labels = blocked\` |
| **Unassigned** | JQL | \`assignee is EMPTY\` |
| **Due Soon** | JQL | \`duedate >= now() AND duedate <= 7d\` |
| **Escalated** | JQL | \`labels = escalated OR priority in (Highest, High)\` |
| **My Watch** | Filter | Any saved Jira filter you select |

## Color Conventions

While any color works, a consistent convention helps users read the table faster:
- **Red** - urgent / breached (Overdue, Critical, Blocked)
- **Orange** - at risk / approaching deadline (Due Soon, High Priority)
- **Blue** - informational (Watching, Assigned to me)
- **Green** - positive state (Ready for Review, Approved)
`,
        },
        {
          slug: "issue-list-quick-filters",
          title: "Quick Filters",
          content: `Quick Filters add clickable buttons above the Issue List table. One click instantly filters the table to a preset view - no re-configuration needed.

![Quick Filters](/images/dashboard-charts/Issue%20List/issue-list-quickfilters.png)

## How Quick Filters Work

Each Quick Filter button applies a JQL condition to the current issue set. When clicked, the table reloads showing only issues that match. Click the button again to deactivate it.

Multiple filters can be active at the same time - AND/OR logic controls how they combine.

## How to Add a Quick Filter

1. Open the Issue List gadget in edit mode
2. In the right panel, find the **Quick Filters** section
3. Click **+ Add filter**
4. Enter a label (e.g., "My Issues")
5. Enter the JQL condition
6. Save the gadget

## Quick Filter Ideas

| **Button Label** | **JQL Condition** |
| --- | --- |
| **My Issues** | \`assignee = currentUser()\` |
| **Bugs Only** | \`issuetype = Bug\` |
| **High Priority** | \`priority in (High, Highest)\` |
| **Due This Week** | \`duedate >= startOfWeek() AND duedate <= endOfWeek()\` |
| **Unassigned** | \`assignee is EMPTY\` |
| **Blocked** | \`labels = blocked\` |
| **Overdue** | \`duedate < now() AND resolution is EMPTY\` |
| **This Sprint** | \`sprint in openSprints()\` |
| **Recently Updated** | \`updated >= -7d\` |

## AND vs OR Logic

When multiple Quick Filters are active, you choose how they combine:

![AND vs OR](/images/dashboard-charts/Issue%20List/issue-list-AND-OR.png)

| **Mode** | **Behavior** | **Example** |
| --- | --- | --- |
| **AND** | Issues must match ALL active filters | "My Issues" AND "High Priority" → only my high-priority issues |
| **OR** | Issues must match ANY active filter | "My Issues" OR "Unassigned" → all issues assigned to me or to nobody |

**Use AND** when you want to narrow the result - e.g., "show only bugs that are also unassigned."

**Use OR** when you want to broaden the result - e.g., "show anything that's either a bug or overdue."
`,
        },
        {
          slug: "issue-list-display-export",
          title: "Display Options & Export",
          content: `Control how the table looks, how many issues appear per page, and how to export the data.

## Display Options

![Display Options](/images/dashboard-charts/Issue%20List/issue-list-display-options.png)

| **Option** | **What It Does** | **Default** |
| --- | --- | --- |
| **Results per page** | Number of issues shown per page: 5, 10, 20, or 50 | 10 |
| **Alternating row colors** | Striped rows for easier reading | Off |
| **Show number column** | Adds a row number in the first column | Off |
| **Show timestamps** | Shows time alongside date values (e.g., "Jan 06, 2025 14:32") | Off |
| **Show user icons** | Shows avatar images for Assignee and Reporter | On |
| **Disable hyperlinks** | Turns off clickable issue key links | Off |

> **Tip:** Enable **alternating row colors** on wide tables - it makes it much easier to track a row across many columns without losing your place.

## Sorting

Click any column header to sort the table by that column. Click again to reverse the sort direction. Sorting applies to the current filtered result set.

## Export

![Export Options](/images/dashboard-charts/Issue%20List/issue-list-export-options.png)

| **Format** | **Best For** |
| --- | --- |
| **CSV** | Opening in Excel or Google Sheets for further analysis |
| **PNG** | Including the table as an image in presentations or emails |
| **PDF** | Printable document for stakeholder reports |
| **Configuration** | JSON backup of all gadget settings for reuse or backup |

> **Tip:** The export includes only the **currently filtered data**. If you have Quick Filters active, the export reflects those filters - useful for exporting exactly "all critical open bugs" without editing the underlying data source.
`,
        },
        {
          slug: "templates-issue-list",
          title: "Templates For Issue List",
          content: `
Start with a ready-made table layout instead of building the Issue List from scratch. Templates set up the most useful columns, default sorting, and quick filters so you can reach a working view faster.

## Where to find it

1. Open an Issue List gadget
2. Click Edit
3. Open the Templates option in the gadget configuration area
4. Choose a template and apply it

## What templates do

* Apply a ready-made issue table layout for a common reporting use case.
* Update the table title to match the template name.
* Set the main columns shown in the Issue List.
* Apply default table sorting for that view.
* Load the quick filters included in the template.
* Apply the template filter operator when one is defined.

> **Note:** Templates are designed to speed up setup. They give you a strong starting point, and you can still edit columns, sorting, quick filters, and display options after the template is applied.

## What stays the same when you apply a template

* The data source stays unchanged. The template does not switch your selected projects, saved filter, custom JQL, or linked Dynamic Filter Controller.
* The template mainly changes presentation and filtering inside the Issue List, not the source selection.
* Existing admin restrictions still apply.

## Important template behavior

| **Behavior** | **What it means** |
| --- | --- |
| **Title update** | The Issue List title is updated to the template name so the table is easy to recognize. |
| **Column setup** | The template chooses the main columns for that use case, such as Key, Summary, Status, Priority, Assignee, Created, Updated, or Resolved. |
| **Sorting** | The template applies default sorting so the most important issues appear first. |
| **Quick filters** | Templates can include one or more quick filters. Some templates include active quick filters by default, while others include optional filters that start inactive. |
| **Filter operator** | Templates use a filter operator to combine quick filters. In the current built-in catalog, the operator is AND. |
| **Issue Type safeguard** | If a template does not include Issue Type in its column list, the gadget automatically adds Issue Type so the table keeps a clear type indicator. |

## Built-in Issue List templates

| **Template** | **Best used for** | **Main columns** | **Default sort** |
| --- | --- | --- | --- |
| **My Open Issues** | Personal work queue | Key, Summary, Status, Priority, Updated, Assignee | Updated newest first |
| **Recently Updated Issues** | Latest activity tracking | Key, Summary, Status, Assignee, Updated, Project | Updated newest first |
| **Unresolved by Priority** | Outstanding work by urgency | Priority, Key, Summary, Status, Assignee, Created | Priority high to low, then newest created |
| **Team Workload** | Work split by assignee | Assignee, Key, Summary, Status, Priority, Due Date | Assignee A-Z, then Priority high to low |
| **Reopened Issues** | Reopened or bounced-back work | Key, Summary, Status, Priority, Assignee, Updated, Resolved | Updated newest first |
| **Blockers List (Release / Sprint)** | Release or sprint blockers | Key, Summary, Priority, Status, Assignee, Fix Versions, Updated | Priority high to low, then Updated newest first |
| **Recently Resolved (Last 7 days)** | Freshly completed work | Key, Summary, Priority, Assignee, Resolved, Created | Resolved newest first |
| **High Priority Unassigned (Triage)** | Unassigned urgent work needing ownership | Priority, Key, Summary, Status, Project, Created, Updated | Priority high to low, then oldest created first |
| **Open Issues (No update in 14 days)** | Aging open work | Key, Summary, Status, Assignee, Priority, Updated, Created | Oldest updated first |
| **Critical Bugs Open (P1 Bugs)** | Highest-risk bug list | Key, Summary, Priority, Status, Assignee, Updated, Created | Updated newest first |
| **Delivery Outliers (Recently Resolved, Created Long Ago)** | Items resolved recently but created long ago | Key, Summary, Priority, Created, Resolved, Assignee | Resolved newest first, then oldest created first |

> **Note:** Templates do not lock the Issue List. After applying a template, you can still add or remove columns, change the sort order, edit quick filters, and save the gadget with your own final setup.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. DYNAMIC FILTER CONTROLLER
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dynamic-filter-controller",
      title: "Dynamic Filter Controller",
      articles: [
        {
          slug: "dynamic-filter-controller-intro",
          title: "Dynamic Filter Controller",
          content: `The **Dynamic Filter Controller** is the key to building truly interactive dashboards. Instead of hard-coding every chart, this gadget creates a shared, interactive filter bar that controls multiple Custom Charts and Issue Lists simultaneously.

Use this section to learn how to set up your base data, configure dropdown filters, create preset tabs for your users, and connect all your gadgets together for real-time updates.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Dynamic Filter Controller does, how shared filtering works, and when to use it.* |
| **Setup & Filter Types** | *How to configure the base data source, add filter fields, and choose the right field type for each use case.* |
| **Tabs** | *How to create and manage preset filter tabs for one-click switching between views.* |
| **Connecting Gadgets** | *How to link Custom Charts and Issue Lists to the controller using Reference IDs.* |
| **Templates For Dynamic Filter Controller** | *Ready-made filter field sets and quick filters for common use cases.* |
`,
        },
        {
          slug: "dynamic-filter-controller-overview",
          title: "Overview",
          content: `The Dynamic Filter Controller (DFC) is a special gadget that adds a shared, interactive filter bar to your Jira dashboard. Instead of configuring each chart separately, you connect multiple gadgets to one controller - and users filter everything at once.

![Dynamic Filter Controller](/images/dashboard-charts/Dynamic%20FIlter/Dynamic-filter-guide.png)

## What it does

The DFC sits at the top of a dashboard (or anywhere on the page). It shows filter fields - dropdowns, text boxes, date pickers, or toggle buttons - that users interact with. Every connected gadget responds instantly when a filter changes.

## Why use it

Without a DFC, each chart is static: its data source is fixed and only an editor can change it. With a DFC, viewers can slice the same dashboard by sprint, assignee, priority, or any other field - without touching gadget configuration.

**Typical flow:**

1. A manager opens the dashboard
2. They pick "Sprint 42" from the Sprint dropdown
3. All charts and tables on the page update to show only Sprint 42 work

## Core concepts

| **Concept** | **What it means** |
| --- | --- |
| **Base data source** | The issue universe the controller works with (Projects, Saved Filter, or Custom JQL) |
| **Filter fields** | The inputs users see: dropdowns, text, JQL, saved filter toggles |
| **Tabs** | Preset filter combinations the controller saves for one-click switching |
| **Reference ID** | The unique ID of this controller - other gadgets use it to connect |
| **Connected gadgets** | Custom Charts and Issue Lists that are linked to this controller |

## When to use DFC vs a regular data source

| **Scenario** | **Use** |
| --- | --- |
| **Dashboard is for one fixed project and one audience** | Regular data source per gadget |
| **Multiple people view the same dashboard but need to filter differently** | DFC |
| **Dashboard shows multiple team views that switch between sprints** | DFC with tabs |
| **You want viewers (not editors) to control the scope** | DFC |
`,
        },
        {
          slug: "dynamic-filter-controller-setup",
          title: "Setup & Filter Types",
          content: `This page covers how to configure a Dynamic Filter Controller from scratch: choosing the base data source and adding the filter fields your users will see.

## Step 1: Set the base data source

The base data source is the issue universe the controller works with. Filter fields narrow within this scope.

![Dynamic Filter Base Data Source](/images/dashboard-charts/Dynamic%20FIlter/Dynamic-Filter-Base-Data-Source.png)

| **Source type** | **When to use** |
| --- | --- |
| **Projects** | Working within one or more specific Jira projects |
| **Saved Filter** | The team already has a Jira filter that defines the right scope |
| **Custom JQL** | Need precise, complex scoping beyond what project selection provides |

**Example JQL for base source:**
\`\`\`
project in (TEAM, PLATFORM) AND issuetype in (Story, Bug, Task)
\`\`\`

## Step 2: Add filter fields

Filter fields are what users interact with. Add one or more from the Fields tab.

1. In the DFC edit panel, go to the **Fields** tab
2. Click **+ Add Field**
3. Choose the field type (see below)
4. Configure the field options
5. Repeat for each filter you want

![Dynamic Filter Columns](/images/dashboard-charts/Dynamic%20FIlter/dynmaic-filter-columns.png)

## Filter field types

| **Type** | **What users see** | **Best for** |
| --- | --- | --- |
| **Jira Field** | Dropdown with values from that field | Filtering by Status, Assignee, Sprint, Priority, Labels, Components, Fix Version, etc. |
| **Contains Text** | Free-text input box | Searching issue summary text |
| **Custom JQL** | Advanced JQL input box | Power users who know JQL |
| **Saved Filter** | A toggle button | Switching a pre-saved Jira filter on/off |

## Jira Field configuration options

When adding a Jira Field type, you can configure:

- **Field name** - which Jira field to use
- **Label** - what to display above the dropdown (defaults to field name)
- **Multi-select** - allow choosing more than one value at once
- **Default value** - a pre-selected value that loads when the dashboard opens

## Display options

| **Option** | **What it controls** |
| --- | --- |
| **Show Sorting Options** | Lets viewers sort connected Issue Lists from the DFC bar |
| **Allow Add Fields** | Viewers can temporarily add filter fields during a session |
| **Show AND/OR Selector** | Shows a toggle to switch filter logic between AND and OR |
| **Show Options Menu** | Shows or hides the options button on the controller |

![Dynamic Filter Display Options](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-display-options.png)
`,
        },
        {
          slug: "dynamic-filter-controller-tabs",
          title: "Tabs",
          content: `Tabs are preset filter combinations that live on the Dynamic Filter Controller. One click switches the entire dashboard to a pre-configured view.

## What tabs do

Each tab stores a named set of filter values. When a user clicks a tab, the DFC loads those values and all connected gadgets update. Tabs let a single dashboard serve multiple views without reconfiguring anything.

![Dynamic Filter Tab](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-tab-example.png)

**Example tabs on a team dashboard:**

| **Tab** | **Filter values** |
| --- | --- |
| **All Work** | (no filters) |
| **This Sprint** | Sprint = current sprint |
| **My Issues** | Assignee = me |
| **Bugs** | Issue Type = Bug |
| **High Priority** | Priority = High, Highest |

## How to create a tab

1. Open the DFC gadget in **Edit** mode
2. In the **Live Preview** section at the bottom, click the **+** button next to the existing tabs
3. A new tab appears (named "Tab 1", "Tab 2", etc.)
4. Click the tab to make it active
5. Set the filter values you want this tab to default to
6. Rename the tab by double-clicking its name

## How to rename a tab

Double-click the tab name in the Live Preview area and type the new name.

## How to delete a tab

Hover over the tab and click the **X** icon that appears.

> **Note:** You must keep at least one tab. The last remaining tab cannot be deleted.

## Default tab

The first tab in the list is the default view that loads when the dashboard opens. Reorder tabs by dragging them left or right.

## Tabs and filter independence

Each tab stores its own filter values independently. Changing one tab does not affect another. When a user manually adjusts filters while on a tab, those changes are session-only - they reset when the tab is switched or the page is refreshed.
`,
        },
        {
          slug: "dynamic-filter-controller-connect",
          title: "Connecting Gadgets",
          content: `A Dynamic Filter Controller only works when other gadgets are connected to it. This page explains how to connect Custom Charts and Issue Lists to the controller.

## How connections work

Each DFC has a **Reference ID** - a unique identifier shown in the controller's header. When you configure a Custom Chart or Issue List and choose "Dynamic Filter Controller" as its data source, you select which DFC to connect to using this ID.

Once connected, the gadget stops using its own data source. Instead, it uses whatever the DFC returns based on the current filter state.

## How to connect a gadget

1. Open the **Custom Chart** or **Issue List** gadget in edit mode
2. In the **Data Source** section, select **Dynamic Filter Controller**
3. A dropdown appears listing all DFCs on the same Jira dashboard
4. Select your controller (identified by its Reference ID or label)
5. Save the gadget

The gadget is now connected. When users change filters on the DFC, this gadget updates in real time.

## Verifying connections

To see which gadgets are connected to a DFC:

1. View the DFC gadget (not edit mode)
2. Click **Show Connected Charts**

All connected gadgets on the dashboard are highlighted.

![Verifying Connections](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-verifying-connections.png)

## Connecting multiple gadgets

You can connect as many gadgets as needed to a single DFC. One filter bar can control every chart and table on the dashboard at once.

## Disconnecting a gadget

1. Open the gadget in edit mode
2. Change the Data Source from "Dynamic Filter Controller" back to "Projects", "Saved Filter", or "Custom JQL"
3. Configure the new data source
4. Save

## Common connection checklist

| **Check** | **Why it matters** |
| --- | --- |
| **DFC and charts are on the same Jira dashboard** | Gadgets only see DFCs on the same dashboard |
| **DFC is saved before connecting charts** | The DFC must exist and have a Reference ID before charts can connect |
| **Data source is set to "Dynamic Filter Controller" on each chart** | The gadget won't respond to the DFC until its data source is switched |
`,
        },
        {
          slug: "templates-dynamic-filter-controller",
          title: "Templates For Dynamic Filter Controller",
          content: `
Use Templates to add a ready-made set of filter fields and quick filters to the active tab of your Dynamic Filter Controller gadget. Templates help you start faster and then fine-tune the tab for your team.

## Where to find it

* Open a Dynamic Filter Controller gadget.
* Click Edit.
* In the top section, open Templates.
* Choose the template that matches the type of work you want to manage.

## What Templates do

* Apply only to the active tab. Other tabs stay as they are.
* Replace the active tab's field list with the fields from the selected template.
* Add the template's quick filters as toggle-style filter chips.
* Carry over the current project selection from the gadget data source into the active tab's default selections.
* Keep tabs enabled and keep the selected tab active after the template is applied.
* Leave the gadget data source unchanged. Templates do not switch Projects, Saved Filter, or Custom JQL for you.
* Do not create new tabs and do not remove existing tabs.

| **Area** | **What happens when you apply a template** |
| --- | --- |
| **Active tab fields** | The current field list on the active tab is replaced by the template field set. |
| **Quick filters** | Template quick filters are added as Custom JQL toggle chips. Filters marked active in the template start enabled. |
| **Selected projects** | The current project selection is reused as a default selection on the active tab. |
| **Other tabs** | No changes are made to other tabs. |
| **Data source** | No change. The existing source type and source values remain in place. |
| **Gadget layout and display options** | No chart-style or admin-setting change is made by templates. |

> **Note:** Some templates use fields such as Sprint, Epic, or Story Points. If those fields are not available in your Jira site or are configured differently, you may need to edit the tab after applying the template.

## Built-in template catalog

| **Template** | **Best for** | **Main filters** | **Default active filter** |
| --- | --- | --- | --- |
| **My Work (Daily Driver)** | Everyday personal work view | Project, Issue Type, Status, Assignee, Priority, Text | Assignee to me |
| **Sprint Control (Scrum)** | Sprint planning and sprint tracking | Project, Sprint, Status, Assignee, Issue Type, Text | Current sprint |
| **Backlog Grooming** | Backlog clean-up and triage | Project, Issue Type, Priority, Assignee, Labels, Components, Text | Backlog only |
| **Team Workload (People View)** | Balancing work across people | Project, Assignee, Status Category, Priority, Due Date, Text | Assigned only |
| **Triage Inbox (New + Unowned)** | New work that needs assignment | Project, Issue Type, Priority, Assignee, Created, Components, Text | Unassigned only + Created last 48h |
| **Critical Incidents (P1/P2)** | Serious incident response | Project, Issue Type, Priority, Status, Assignee, Updated, Text | P1 only |
| **Aging Open Issues (Stale Work)** | Work that has gone quiet | Project, Status Category, Priority, Assignee, Updated, Text | Open only + No update 14d+ |
| **Roadmap Scope (Epic + Work)** | Roadmap and epic-level visibility | Project, Epic, Issue Type, Status Category, Assignee, Priority, Text | Not done |
| **Dependency & Blockers (Delivery Risk)** | Blocked work and linked issue risk | Project, Status, Priority, Assignee, Text | Is blocked |
| **QA / Testing Pipeline** | Testing handoff and QA tracking | Project, Status, Issue Type, Priority, Assignee, Fix Versions, Text | Bugs only |
| **Due Dates & Commitments** | Deadline and commitment tracking | Project, Due Date, Status Category, Assignee, Priority, Text | Due this week |
| **Customer Escalations / VIP** | Escalated or VIP work | Project, Priority, Status, Assignee, Labels, Updated, Text | Escalation |

> **Note:** Dynamic Filter Controller template is a starter pack for one tab. It gives that tab a useful set of fields and quick filters, but it does not rebuild the whole gadget.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. TIME IN STATUS GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "time-in-status-gadget",
      title: "Time in Status Gadget",
      articles: [
        {
          slug: "time-in-status-gadget-intro",
          title: "Time in Status Gadget",
          content: `The **Time in Status** gadget measures exactly how long issues spend in each workflow status. Unlike charts built from current issue state, this gadget reads the full issue changelog to calculate precise transition times - giving you an accurate picture of where work gets stuck and where it flows smoothly.

Use this section to understand report types, configuration options, status grouping, and how to interpret bottleneck data.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What Time in Status does, data source options, and when to use it.* |
| **Report Types** | *All 7 report types explained - Time in Status, Average Time, Status Count, Transition Count, Time in Assignee, Time per Date, Status Entrance Date.* |
| **Columns & Date Range** | *Configure which fields and statuses appear in the report and scope the analysis to a time window.* |
| **Status Groups** | *Combine multiple statuses into named bands - built-in Cycle Time and Lead Time groups, plus how to create your own.* |
| **Work Schedule & Time Formats** | *Calculate elapsed time in business hours only using configurable work schedules and time format options.* |
| **Display Settings & Export** | *Display options, export formats, and tips for interpreting the results.* |
`,
        },
        {
          slug: "time-in-status-overview",
          title: "Overview",
          content: `The Time in Status gadget reads your Jira issue changelog to calculate exactly how long each issue has spent in every workflow status - not just the current state, but the complete history of every transition.

## When to Use It

- **Finding bottlenecks** - which status holds work longest?
- **Measuring Cycle Time and Lead Time** across your workflow
- **Detecting rework** - issues that visit the same status multiple times
- **SLA tracking** - when did issues enter each stage?
- **Assignee analysis** - who holds work the longest?

## What Makes It Different from Other Charts

Standard Jira charts show the current state of issues. Time in Status reads the full changelog - every time an issue moved from one status to another, the exact timestamp is recorded. This gadget uses those timestamps to calculate real durations, not snapshots.

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Select one or more Jira projects and analyze all issues within them |
| **Saved Filter** | Use a pre-saved Jira filter to scope the issue set |
| **Custom JQL** | Write a JQL query for precise scoping (e.g., \`sprint in openSprints()\`) |
| **Board** | Connect to a Jira Software board - issues on that board are used as the analysis scope |
| **Dynamic Filter Controller** | Connect to a shared filter bar so users can slice the data interactively |

## Feature Highlights

| **Feature** | **Description** |
| --- | --- |
| **Changelog-Based** | Reads actual status transition history - not just current state |
| **7 Report Types** | Time in Status, Average Time, Time per Date, Status Count, Transition Count, Time in Assignee, Status Entrance Date |
| **Chart Outputs** | Column chart, bar chart, and line chart - each report type has its own visualization |
| **Status Grouping** | Combine multiple statuses into named bands - built-in Cycle Time and Lead Time groups included |
| **Working Hours** | Select a "Business" time format + configure a Work Schedule to exclude non-working hours |
| **Date Range Filter** | Scope analysis to last 7/30/90 days, this/last week, this/last month, or a custom range |
| **Configurable Columns** | Choose which statuses, fields, and issues appear in the report |
`,
        },
        {
          slug: "time-in-status-report-types",
          title: "Report Types",
          content: `The **Report Type** selector controls what data the gadget shows. Each report answers a different question about your workflow.

## All 7 Report Types

| **Report Type** | **What It Shows** | **Best For** |
| --- | --- | --- |
| **Time in Status** | How long each issue has spent in each status | Per-issue bottleneck analysis |
| **Average Time** | Mean time across all issues per status | Identifying consistently slow stages |
| **Time in Status per Date** | How issue time in status breaks down by date | Temporal patterns and trend analysis |
| **Status Count** | Total count of issues that passed through each status | Volume tracking per stage |
| **Transition Count** | How many times each status was visited per issue | Rework detection (issues bouncing back) |
| **Time in Assignee** | Time each issue spent assigned to each person | Individual workload and handoff analysis |
| **Status Entrance Date** | When each issue first entered each status | Audit trails, SLA start tracking |

## Choosing the Right Report

**"Where is work getting stuck?"** → **Average Time** - sort by time descending. The top row is your biggest bottleneck.

**"Are issues bouncing back through review?"** → **Transition Count** - counts > 2 on "In Review" or "QA" indicate rework.

**"Who is holding issues longest?"** → **Time in Assignee** - see each person's average hold time.

**"When did issues enter testing?"** → **Status Entrance Date** - exact date each issue entered each status.

**"How much total work passed through each stage?"** → **Status Count** - volume tracking per stage.

**"How does time in each stage trend over time?"** → **Time in Status per Date** - reveals seasonal patterns and process changes.

## Chart Output per Report Type

| **Report** | **Default Visualization** |
| --- | --- |
| **Time in Status** | Column chart (per issue, per status) |
| **Average Time** | Bar chart (status vs average time) |
| **Time in Status per Date** | Line chart (trend over time) |
| **Status Count** | Bar chart (count per status) |
| **Transition Count** | Bar chart (transitions per status) |
| **Time in Assignee** | Bar chart (time per assignee) |
| **Status Entrance Date** | Table (date per issue per status) |
`,
        },
        {
          slug: "time-in-status-columns-date-range",
          title: "Columns & Date Range",
          content: `Control which data appears in the report and scope the analysis to a specific time window.

## Columns Configuration

The Columns section lets you choose exactly which data appears in the report table.

### Issue Fields

Toggle which issue-level fields appear as columns:
- Key, Summary, Assignee, Status, Issue Type
- Any custom fields available in your Jira instance

### Status Columns

Select which workflow statuses appear as time columns in the report:

| **Option** | **What It Does** |
| --- | --- |
| **Auto** | Includes all statuses that appear in the data - no manual selection needed |
| **All** | Includes every status in your Jira instance |
| **Custom** | You pick exactly which statuses to show |

> **Tip:** Use Custom selection to keep the report focused. For a bug-tracking report, show only "To Do → In Progress → QA → Done" and hide everything else.

### Status Column Ordering

Drag statuses in the column list to match your workflow order left to right. This makes the table read like a process flow rather than an alphabetical list.

## Date Range

Scope the analysis to a specific time window - only issues matching the date criteria will appear.

| **Option** | **Description** |
| --- | --- |
| **All** | No date restriction - analyze the full history of matching issues |
| **Past 7 / 30 / 60 / 90 Days** | Rolling time window ending today |
| **This / Last Week** | Calendar-based weekly windows |
| **This / Last Month** | Calendar-based monthly windows |
| **Custom Range** | Pick an exact from-date and to-date |

### Which Date Field Is Used?

The date range filter applies to the issue's selected date field - you can choose:
- **Created** - filter by when the issue was created
- **Updated** - filter by when the issue was last updated
- **Resolved** - filter by when the issue was resolved
- **Due** - filter by the issue due date

> **Tip:** Use "Past 30 Days" + Created to analyze how recently created issues flow through your process. Use "Past 90 Days" + Resolved to analyze recently completed work.
`,
        },
        {
          slug: "time-in-status-status-groups",
          title: "Status Groups",
          content: `Status Groups let you combine multiple workflow statuses into a single named band. Instead of seeing separate columns for "Code Review", "Peer Review", and "Awaiting Approval", you see one "Review" column showing the total time across all three.

## Why Use Status Groups?

Most teams have more workflow statuses than meaningful phases. Status Groups let you map fine-grained statuses to the business concepts that actually matter - like Cycle Time and Lead Time.

## Built-in Groups

Two groups come ready to use by default:

### Cycle Time
Measures time from when active work started to when it completed. This is the metric your team directly controls.

**Typical statuses:** All "In Progress" category statuses through "Done"

*Example: An issue spent 2 days In Progress, 1 day In Review, and 1 day in QA. Cycle Time = 4 days.*

### Lead Time
Measures total elapsed time from when the issue was created to when it was done - including waiting time before work started.

**Typical statuses:** All statuses from creation ("To Do") through "Done"

*Example: The same issue waited 5 days in To Do before work began. Lead Time = 9 days (5 waiting + 4 active).*

## Creating Custom Groups

You can create your own groups to match your team's terminology.

**Example:** Combine "Code Review", "Peer Review", and "Awaiting Approval" into a "Review" band.

### How to Set Up a Status Group

1. Open the Time in Status gadget in edit mode
2. Find the **Status Groups** section in the configuration panel
3. Click **+ Add Group**
4. Enter a name (e.g., "Testing")
5. Select the statuses to include (e.g., "QA", "UAT", "Regression Testing")
6. Save the group

The report adds a new column showing the combined time the issue spent across all statuses in that group.

## How Groups Appear in the Report

Status Groups appear as additional columns alongside individual status columns. Each group column shows the total time the issue spent across all included statuses.

You can have individual status columns AND group columns active at the same time - they do not conflict.
`,
        },
        {
          slug: "time-in-status-work-schedule",
          title: "Work Schedule & Time Formats",
          content: `Control how elapsed time is measured - calendar time (every hour) or business hours only (excluding nights, weekends, and non-working hours).

## Why This Matters

By default, Time in Status counts every hour - including nights, weekends, and public holidays. An issue that sat untouched over a 3-day weekend accumulates 72 hours against its age.

If your SLA commitments are stated in business days (e.g., "resolve P1 issues within 2 business days"), calendar time gives a misleading picture. Business-hours calculation gives the number that actually reflects your team's working capacity.

## Time Format Options

The **Calculate In** setting controls both the unit and whether business hours are used:

| **Format** | **Type** | **Example** |
| --- | --- | --- |
| **Business DaysHoursMinutes** | Business hours | 2d 3h 15m |
| **Business Decimal Days** | Business hours | 2.4 days |
| **Business Decimal Weeks** | Business hours | 0.48 weeks |
| **Decimal Days** | Calendar time | 2.4 days |
| **Decimal Hours** | Calendar time | 57.6 hours |
| **Decimal Weeks** | Calendar time | 0.34 weeks |
| **DaysHoursMinutesSeconds** | Calendar time | 2d 9h 36m 0s |
| **Hours:Minutes** | Calendar time | 57:36 |
| **HoursMinutes** | Calendar time | 57h 36m |
| **Minutes** | Calendar time | 3456 min |

> **Rule:** Any format starting with "Business" uses your Work Schedule. All others use calendar time (24/7).

## Work Schedule Configuration

To use business-hours calculation, configure your team's work schedule first.

### How to Set Up a Work Schedule

1. Open the **Work Schedule** page from the Time in Status gadget settings
2. Set the **working hours** for each day - choose a start time and end time
3. Select which **days of the week** are working days (e.g., Mon–Fri)
4. Save the schedule

### Applying the Work Schedule

Once your Work Schedule is saved, set **Calculate In** to a "Business" format (e.g., "Business Decimal Days"). The gadget now automatically excludes non-working hours from all time calculations.

## Practical Example

An issue moved to "In Review" on Friday at 5pm and out on Monday at 9am.

| **Calculation** | **Result** |
| --- | --- |
| **Calendar time** | 64 hours (full weekend counted) |
| **Business hours (8h/day, Mon–Fri)** | 0 hours (no working time elapsed over the weekend) |

The business hours result accurately reflects that no one was actually reviewing the issue over the weekend.
`,
        },
        {
          slug: "time-in-status-display-export",
          title: "Display Settings & Export",
          content: `Control how the report looks and export your data for further analysis or sharing.

## Display Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Number Format** | Controls how time values are displayed (comma separators, decimal places) |
| **Decimal Places** | Precision for time values - 0 for whole numbers, 2 for two decimal places |
| **Date Format** | Format for date columns in the Status Entrance Date report |
| **Chart Type** | For chart-based report types: Bar, Line, or Table view |
| **Default View** | Set whether the gadget opens in Chart or Table view by default |
| **Auto-Refresh** | Automatically reload data every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Full table with all issue rows, status columns, group columns, and calculated values |
| **PNG** | Image snapshot of the chart (for chart-based report types) |
| **Configuration** | JSON export of all gadget settings for reuse or backup |

## Interpreting the Results

### Finding Bottlenecks

Open **Average Time** and sort by time descending. The top row is your biggest bottleneck.

| **What You See** | **What It Means** | **What to Do** |
| --- | --- | --- |
| **"In Review" averaging 3+ days** | Reviews are not happening frequently enough | Schedule daily review slots |
| **"QA" averaging 5+ days** | QA capacity is too low relative to developer output | Add QA resource or reduce WIP |
| **"Waiting for Customer" averaging 10+ days** | Follow-up is not happening | Add SLA reminders or escalation rules |
| **"To Do" averaging 7+ days** | Work is queued longer than it takes to complete | Review prioritization process |

### Spotting Rework

Open **Transition Count**. Issues with counts > 2 on "In Review" or "QA" are bouncing back and forth - a sign of incomplete work or unclear acceptance criteria.

### SLA Tracking

Open **Status Entrance Date** and export as CSV. Combine with your SLA targets in a spreadsheet to flag issues that have been in a status longer than your policy allows.

> **Tip:** Export the chart as PNG to include Jira process data in presentations or status emails without requiring stakeholders to log into Jira.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 6. PIVOT TABLE GADGET
    // ═══════════════════════════════════════════════════════════════
    {
      id: "pivot-table-gadget",
      title: "Pivot Table Gadget",
      articles: [
        {
          slug: "pivot-table-gadget-intro",
          title: "Pivot Table Gadget",
          content: `The **Pivot Table** gadget lets you summarize Jira issues in a cross-tabulation format. Group issues by multiple fields on both rows and columns simultaneously, then aggregate by count, sum, average, minimum, or maximum. Visualize the results as a data table, heatmap, or chart.

Use this section to learn how to configure row/column grouping, choose an aggregation method, and get the most from the display types.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the Pivot Table does, data sources, and common use cases with examples.* |
| **Row & Column Fields** | *How to add, order, and nest up to 3 fields per axis for multi-level grouping.* |
| **Aggregation Methods** | *All 7 aggregation methods - Count, Sum, Average, Min, Max, Count%, Sum% - and when to use each.* |
| **Display Types & Heatmaps** | *All 9 display types including heatmaps and chart options, plus heatmap color selection.* |
| **Totals, Formatting & Export** | *Summary rows/columns, percentage and average columns, date formatting, drill-through, and export.* |
`,
        },
        {
          slug: "pivot-table-overview",
          title: "Overview",
          content: `The Pivot Table gadget transforms your Jira issue data into a cross-tabulation matrix - the same format as an Excel PivotTable. Place any combination of Jira fields on rows and columns, choose how to aggregate the values, and display the result as a table, heatmap, or chart.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Multi-Field Grouping** | Up to 3 fields on rows, up to 3 fields on columns |
| **7 Aggregation Methods** | Count, Sum, Average, Min, Max, Count %, Sum % |
| **9 Display Types** | Tables, heatmaps, and charts |
| **Heatmap Coloring** | Color-code cells by value intensity (Red, Blue, Green, Grey) |
| **Totals & Averages** | Auto-sum and average rows, columns, and grand total |
| **Make Values Clickable** | Click any cell value to open the matching Jira issue list in a new tab |
| **Date Formatting** | Per-field date format options (day, week, month, quarter, year display formats) |
| **Auto-Refresh** | Automatically reload data every 10 minutes in view mode |

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Analyze all issues across one or more Jira projects |
| **Saved Filter** | Use a pre-saved Jira filter as the scope |
| **Custom JQL** | Write a JQL query for precise scoping |
| **Dynamic Filter Controller** | Connect to a shared filter bar for interactive exploration |

## Row and Column Fields

The Pivot Table is built by selecting fields for rows and columns:

- **Row Fields**: Each unique combination of row field values becomes a row in the table
- **Column Fields**: Each unique combination of column field values becomes a column
- **Up to 3 fields per axis**: Multi-level grouping creates nested row/column headers

### Example Configurations

| **Row Fields** | **Column Fields** | **What It Shows** |
| --- | --- | --- |
| **Assignee** | Status | Issues per person per status |
| **Component** | Priority | Issues per component per priority level |
| **Sprint, Issue Type** | Status | Issues by sprint + type combination, broken down by status |
| **Project** | Month (Created) | Issue volume per project per month |

### Adding Fields

1. Open the Pivot Table gadget in edit mode
2. In the **Output Configuration** tab, click **+ Add Row Field** or **+ Add Column Field**
3. Search for and select a Jira field
4. Drag fields up or down to change grouping order (outermost = first in list)
5. Repeat to add up to 3 fields per axis

## Aggregation Methods

The aggregation method controls what value appears in each cell of the pivot table.

| **Method** | **What It Calculates** | **Best For** |
| --- | --- | --- |
| **Count** | Number of issues in that cell | Most reports - issue volume |
| **Sum** | Total of a numeric field across matching issues | Story Points, estimate, or custom number fields |
| **Average** | Mean value of a numeric field | Average story points per issue type |
| **Minimum** | Lowest value of a numeric field | Fastest resolution time per category |
| **Maximum** | Highest value of a numeric field | Longest-running issue per assignee |
| **Count as Fraction of Rows (%)** | Each cell as a percentage of its row total | Row-relative distribution |
| **Sum as Fraction of Rows (%)** | Sum value as a percentage of the row total | Proportional contribution |

### Choosing Aggregation Field

When using Sum, Average, Min, or Max, you must also select the **Aggregation Field** - the numeric Jira field whose values will be aggregated (e.g., Story Points, Original Estimate, a custom number field).

## Display Types

Choose how to present the pivot data:

| **Display Type** | **Description** | **Best For** |
| --- | --- | --- |
| **Table** | Clean data grid with row/column headers | Exact numbers, large datasets |
| **Table Heatmap** | Table with all cells color-coded by value | Quickly spotting high/low values across the whole matrix |
| **Table Row Heatmap** | Each row independently color-coded | Comparing values within each row |
| **Table Column Heatmap** | Each column independently color-coded | Comparing values within each column |
| **Column Chart** | Vertical bar chart from the pivot data | Comparing categories visually |
| **Bar Chart** | Horizontal bar chart | Long category names that overflow vertical bars |
| **Line Chart** | Line series from the pivot data | Trend comparison across multiple series |
| **Stacked Area Chart** | Stacked area chart | Cumulative composition over time or categories |
| **Pie Chart** | Pie from the first pivot dimension | Proportion breakdown of one dimension |

### Heatmap Color Customization

In heatmap display types, choose the base color:
- **Red** - for risk-oriented reports (more = worse, e.g., open bugs)
- **Blue** - neutral, general-purpose
- **Green** - for positive metrics (more = better, e.g., resolved issues)
- **Grey** - for neutral comparisons where color should not imply good or bad

The shade intensity scales automatically from the lowest value (lightest) to the highest (darkest).

## Totals, Averages, and Percentages

Control what summary rows and columns appear:

| **Setting** | **Effect** |
| --- | --- |
| **Show Totals Row** | Adds a sum row at the bottom of the table |
| **Show Totals Column** | Adds a sum column on the right |
| **Show Percentage Column** | Shows each row value as a percentage of the grand total |
| **Show Average Column** | Adds an average column; choose basis: all values or non-zero values only |

## Display & Formatting

| **Setting** | **What It Controls** |
| --- | --- |
| **Number Format** | Separator style for large numbers (1,234 vs 1.234) |
| **Decimal Places** | Precision for calculated values |
| **Date Field Formatting** | Per-field format for date values - day, week ("Week of Jan 06"), month, quarter ("Q1 2025"), year |
| **Make Values Clickable** | When on, any cell value opens the matching Jira issue list in a new tab for drill-through |
| **Legend Position** | For chart display types: top, bottom, left, right, or hidden |
| **Color Mode** | Default palette or custom per-series colors |
| **Auto-Refresh** | Reload data every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Complete pivot matrix including row/column headers and totals |
| **PNG** | Image snapshot of the current display (table or chart) |
| **Configuration** | JSON export of all settings for reuse or backup |

## Common Use Cases

### Team × Status Workload Matrix
- Row: Assignee
- Column: Status
- Aggregation: Count
- Display: Table Row Heatmap
- **Insight:** Rows with heavy color in "In Progress" or "In Review" show overloaded team members

### Story Points by Sprint × Issue Type
- Row: Sprint
- Column: Issue Type
- Aggregation: Sum of Story Points
- Display: Stacked Area Chart
- **Insight:** Track how the mix of Stories vs. Bugs changes across sprints

### Component × Priority Risk Matrix
- Row: Component
- Column: Priority
- Aggregation: Count
- Display: Table Column Heatmap
- **Insight:** Spot which components carry the most critical bugs
`,
        },
        {
          slug: "pivot-table-fields",
          title: "Row & Column Fields",
          content: `The Pivot Table is built by placing Jira fields on rows and columns. Each unique combination of field values becomes a row or column in the grid.

## How Fields Work

- **Row Fields** → each unique value (or combination of values) becomes a table row
- **Column Fields** → each unique value (or combination of values) becomes a table column
- **The cell** at the intersection shows the aggregated value for issues matching both the row and column

## Multi-Level Grouping

You can add **up to 3 fields per axis** to create nested grouping.

**Example - 2 Row Fields:**
- Row Field 1: Sprint
- Row Field 2: Issue Type
- Result: Each sprint expands into Story/Bug/Task sub-rows

**Example - 2 Column Fields:**
- Column Field 1: Status
- Column Field 2: Priority
- Result: Each status expands into High/Medium/Low sub-columns

## Adding Fields

1. Open the Pivot Table gadget in edit mode
2. In the **Output Configuration** tab, click **+ Add Row Field** or **+ Add Column Field**
3. Search for and select a Jira field
4. Repeat to add up to 3 fields per axis

## Ordering Fields

Drag fields up or down in the list to control grouping order:
- The **first field** in the list is the outermost grouping (main rows/columns)
- The **second field** creates sub-groups within the first
- The **third field** creates sub-groups within the second

## Useful Field Combinations

| **Row Fields** | **Column Fields** | **What It Shows** |
| --- | --- | --- |
| **Assignee** | Status | Issues per person per status |
| **Component** | Priority | Issues per component per priority level |
| **Sprint, Issue Type** | Status | Issues by sprint + type, broken down by status |
| **Project** | Month (Created) | Issue volume per project per month |
| **Epic** | Assignee | Work per epic per team member |
`,
        },
        {
          slug: "pivot-table-aggregation",
          title: "Aggregation Methods",
          content: `The aggregation method controls what value appears in each cell. The default is Count.

## All 7 Aggregation Methods

| **Method** | **What It Calculates** | **Best For** |
| --- | --- | --- |
| **Count** | Number of issues in that cell | Most reports - issue volume |
| **Sum** | Total of a numeric field across matching issues | Story Points, estimate, or custom number fields |
| **Average** | Mean value of a numeric field | Average story points per issue type |
| **Minimum** | Lowest value of a numeric field | Fastest resolution time per category |
| **Maximum** | Highest value of a numeric field | Longest-running issue per assignee |
| **Count as Fraction of Rows (%)** | Each cell as a percentage of its row total | Row-relative distribution |
| **Sum as Fraction of Rows (%)** | Sum as a percentage of the row total | Proportional contribution |

## Choosing an Aggregation Field

When using **Sum, Average, Minimum, or Maximum**, you must select an **Aggregation Field** - the numeric Jira field whose values will be aggregated.

Common aggregation fields:
- Story Points
- Original Estimate
- Time Spent
- Any custom numeric field

## Practical Examples

**Story points per assignee per sprint:**
- Row: Assignee, Column: Sprint, Method: Sum, Field: Story Points

**Percentage of each assignee's work by status:**
- Row: Assignee, Column: Status, Method: Count as Fraction of Rows (%)
- Result: Each row sums to 100% - shows what proportion of each person's work is in each status
`,
        },
        {
          slug: "pivot-table-display-types",
          title: "Display Types & Heatmaps",
          content: `Choose how to visualize the pivot data. The same row/column/aggregation setup can be shown as a table, a heatmap, or a chart.

## All 9 Display Types

| **Display Type** | **Description** | **Best For** |
| --- | --- | --- |
| **Table** | Clean data grid with row/column headers | Exact numbers, large datasets |
| **Table Heatmap** | Entire table color-coded by value | Quickly spotting high/low values across the whole matrix |
| **Table Row Heatmap** | Each row independently color-coded | Comparing values within each row |
| **Table Column Heatmap** | Each column independently color-coded | Comparing values within each column |
| **Column Chart** | Vertical bar chart from the pivot data | Comparing categories visually |
| **Bar Chart** | Horizontal bar chart | Long category names that would overflow vertical bars |
| **Line Chart** | Line series from the pivot data | Trend comparison across multiple series |
| **Stacked Area Chart** | Stacked area chart | Cumulative composition over time or categories |
| **Pie Chart** | Pie from the first pivot dimension | Proportion breakdown of a single dimension |

## Heatmap Color Schemes

| **Color** | **Best For** |
| --- | --- |
| **Red** | Risk-oriented reports where more = worse (e.g., open bugs per component) |
| **Blue** | Neutral, general-purpose comparisons |
| **Green** | Positive metrics where more = better (e.g., resolved issues per sprint) |
| **Grey** | Neutral comparisons where color should not imply good or bad |

The shade intensity scales automatically - the lowest value in the dataset gets the lightest shade and the highest gets the darkest.
`,
        },
        {
          slug: "pivot-table-formatting-export",
          title: "Totals, Formatting & Export",
          content: `Control summary rows/columns, number and date formatting, drill-through behavior, and how to export your pivot data.

## Summary Rows and Columns

| **Setting** | **Effect** |
| --- | --- |
| **Show Totals Row** | Adds a sum row at the bottom of the table |
| **Show Totals Column** | Adds a sum column on the right |
| **Show Percentage Column** | Shows each row value as a percentage of the grand total |
| **Show Average Column** | Adds an average column - choose basis: all values or non-zero values only |

## Number Formatting

| **Setting** | **What It Controls** |
| --- | --- |
| **Number Format** | Separator style for large numbers (1,234 vs 1.234) |
| **Decimal Places** | Precision for calculated values |

## Date Field Formatting

When a date field is used as a row or column field, you can control how the dates are grouped and displayed:

| **Format** | **Example** |
| --- | --- |
| **Day** | Jan 06, 2025 |
| **Week** | Week of Jan 06, 2025 |
| **Month** | January 2025 |
| **Quarter** | Q1 2025 |
| **Year** | 2025 |

## Make Values Clickable (Drill-Through)

When enabled, any cell value in the table becomes a clickable link. Clicking a cell opens the matching list of Jira issues in a new browser tab.

> **Note:** Drill-through works on table display types. It is not available for chart display types.

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Complete pivot matrix including row/column headers, all values, and totals |
| **PNG** | Image snapshot of the current display (table or chart) |
| **Configuration** | JSON export of all settings for reuse or backup |

> **Tip:** Export as CSV to analyze the pivot data in Excel or Google Sheets. The exported file preserves all row and column headers so you can apply your own formulas and conditional formatting.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 7. CUMULATIVE FLOW DIAGRAM
    // ═══════════════════════════════════════════════════════════════
    {
      id: "cumulative-flow-gadget",
      title: "Cumulative Flow Diagram",
      articles: [
        {
          slug: "cumulative-flow-gadget-intro",
          title: "Cumulative Flow Diagram",
          content: `The **Cumulative Flow Diagram (CFD)** shows how work accumulates across workflow stages over time as a stacked area chart. It is the standard tool for visualizing flow, measuring work-in-progress (WIP) trends, and identifying bottlenecks in Kanban and Scrum workflows.

Use this section to understand how to configure band modes, scope data to specific sprints or releases, and interpret the chart.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the CFD shows, how to read it, and data source options.* |
| **Band Modes** | *All 6 band modes - from status categories to board columns to custom field values - and how board integration works.* |
| **Calculate By** | *Choose what unit of work the bands measure: issue count, story points, time estimate, or a custom numeric field.* |
| **Date Ranges & Scoping** | *Rolling, fixed, sprint, and release date range modes - including the "latest sprint auto" option.* |
| **Display Options & Patterns** | *Display toggles, band customization, advanced options, and how to interpret common CFD patterns.* |
`,
        },
        {
          slug: "cumulative-flow-overview",
          title: "Overview",
          content: `The Cumulative Flow Diagram (CFD) plots the count of issues in each workflow stage on every day of your chosen date range. Each stage is a colored band stacked on the others, so the total height of the chart always equals your total issue count. Watching how bands grow and shrink tells you whether work is flowing smoothly or piling up.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Stacked Area Chart** | One colored band per workflow stage - bands stack to show total WIP |
| **6 Band Modes** | Status categories, individual statuses, board columns, board column categories, work item types, custom field values |
| **Calculate By** | Issue count, Story Points, Story Point Estimate, Original Time Estimate, or any custom numeric field |
| **Board Integration** | Connect to a Jira Software board to use its column definitions as bands |
| **Sprint & Release Scoping** | Scope the CFD to a specific sprint (including "latest sprint auto") or release version |
| **Flexible Date Ranges** | Rolling windows, fixed ranges, sprint dates, or release dates |
| **Include Sub-Tasks** | Toggle to include or exclude sub-tasks from the analysis |
| **Band Customization** | Reorder, hide, and color-code individual workflow bands |

## How to Read a CFD

- **Band width (vertical height at any date)** = number of issues currently in that stage
- **Narrow bands** = work moves through quickly (good)
- **Wide bands** = work is accumulating (potential bottleneck)
- **Flat top line** = no new work is being added (stable scope)
- **Rising top line** = new issues are being added (scope growth)
- **Steepening right edge** = accelerating completion (delivery speed increasing)

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Analyze all issues in one or more Jira projects |
| **Saved Filter** | Use a pre-saved Jira filter as the issue scope |
| **Custom JQL** | Write a JQL query for precise scoping (e.g., a specific component or epic) |
| **Jira Software Board** | Connect to a board to inherit its column definitions as CFD bands |

## Band Modes

| **Band Mode** | **What Defines the Bands** | **Best For** |
| --- | --- | --- |
| **Status Categories** | Jira's built-in status categories (To Do / In Progress / Done) | High-level flow overview |
| **Individual Statuses** | Each unique Jira workflow status is its own band | Detailed per-status analysis |
| **Board Columns** | Columns from a connected Jira Software board | Teams using Kanban or Scrum boards |
| **Board Column Categories** | The category groupings of board columns | Simplified board-level view |
| **Work Item Types** | Group issues by issue type | Comparing Stories vs. Bugs vs. Tasks over time |
| **Values of a Custom Field** | Group issues by a custom field value | Non-standard workflows or multi-team boards |

## Interpreting Common CFD Patterns

### Healthy Flow
All bands are roughly proportional and the total height grows steadily. Done band widens progressively. No single band dominates.

### Bottleneck
One band (e.g., "In Review") grows consistently wider over time while later bands stay flat. Work is entering the stage faster than it is leaving. Address the bottleneck stage's capacity.

### Scope Creep
The top of the chart keeps rising even as the Done band grows. New work is being added faster than it is being completed.

### Stalled Sprint
The chart goes flat across all bands for multiple days. Work is not moving - investigate blockers, dependencies, or team availability.
`,
        },
        {
          slug: "cumulative-flow-band-modes",
          title: "Band Modes",
          content: `The **Band Mode** controls how workflow stages are defined in the chart. Each band in the stacked area represents one stage.

## All 6 Band Modes

| **Band Mode** | **What Defines the Bands** | **Best For** |
| --- | --- | --- |
| **Status Categories** | Jira's built-in categories: To Do / In Progress / Done | High-level flow overview - 3 bands, always clean |
| **Individual Statuses** | Each unique Jira workflow status is its own band | Detailed per-status analysis |
| **Board Columns** | Columns from a connected Jira Software board | Teams using Kanban or Scrum boards |
| **Board Column Categories** | Category groupings of board columns | Simplified board-level view |
| **Work Item Types** | Group issues by issue type (Story/Bug/Task) | Comparing work mix over time |
| **Values of a Custom Field** | Group by any custom field value | Non-standard workflows or multi-team boards |

## Board Integration

When you select **Board Columns** or **Board Column Categories**, connect the gadget to a Jira Software board. The CFD then uses that board's column definitions instead of raw workflow statuses.

**To connect a board:**
1. Set **Band Mode** to **Board Columns**
2. In the data source panel, select **Board** and search for your board by name
3. The gadget loads the board's column configuration automatically

## Choosing the Right Band Mode

**New to CFD?** Start with **Status Categories** - just 3 bands, immediately readable.

**Want more detail?** Switch to **Individual Statuses** to see where exactly within "In Progress" the work sits.

**Using a Kanban board?** Use **Board Columns** to match your board layout exactly.

**Analyzing work mix?** Use **Work Item Types** to see how Stories vs. Bugs vs. Tasks accumulate over time.
`,
        },
        {
          slug: "cumulative-flow-calculate-by",
          title: "Calculate By",
          content: `The **Calculate By** setting controls what unit of work is counted in each band. By default, each issue counts as 1. You can switch to story points or time estimates for a more accurate picture of work volume.

## All 5 Options

| **Option** | **What Is Counted** | **Best When** |
| --- | --- | --- |
| **Work Item Count** | Number of issues in each band | Default - works for all teams |
| **Story Points** | Sum of story points for issues in each band | Your team sizes work with story points |
| **Story Point Estimate** | Sum of story point estimates (team-managed projects) | Using team-managed Jira projects |
| **Original Time Estimate (hours)** | Sum of original time estimates | Your team estimates in hours |
| **Custom Numerical Field** | Sum of any custom numeric field you select | Any other numeric sizing field |

## Why It Matters

If your team has a mix of small and large issues, **counting issues** can be misleading. A sprint with 10 small bugs looks the same as a sprint with 10 large features.

Switching to **Story Points** shows the actual weight of work in each stage - giving a more accurate flow picture.
`,
        },
        {
          slug: "cumulative-flow-date-ranges",
          title: "Date Ranges & Scoping",
          content: `Choose the time window the CFD covers. The right date range depends on whether you are monitoring ongoing flow or analyzing a specific sprint or release.

## Date Range Modes

| **Mode** | **Description** | **Best For** |
| --- | --- | --- |
| **Rolling days** | Last N calendar days ending today | Ongoing Kanban monitoring |
| **Custom date range** | Specific from-date to to-date | Point-in-time analysis or reporting periods |
| **Dates of a sprint** | Scoped to sprint start and end dates | Sprint health and retrospectives |
| **Project release dates** | Scoped to a fix version's start/end dates | Release tracking and delivery analysis |

## Rolling Days Options

Choose from: 7 days · 14 days · 30 days · 60 days · 90 days · 180 days

## Sprint Scoping

1. Set **Date Range** to **Dates of a sprint**
2. Select a sprint from the dropdown

### Latest Sprint Auto

Instead of selecting a specific sprint, choose **"Latest sprint (auto)"**. The CFD automatically uses whichever sprint is currently active - no manual update needed when a new sprint starts.

> **Tip:** Use "Latest sprint auto" on any permanent team dashboard so the CFD always shows the current sprint without anyone needing to reconfigure it.

## Release / Version Scoping

1. Set **Date Range** to **Project release dates**
2. Select a fix version from the project's version list
3. The chart spans from the version's start date to its release date

## Interval Granularity

| **Interval** | **Best For** |
| --- | --- |
| **1 day** | Short sprints, detailed monitoring |
| **1 week** | Multi-week releases, quarterly views |
| **2 weeks** | Longer release cycles |
| **1 month** | Year-level or roadmap views |
`,
        },
        {
          slug: "cumulative-flow-display",
          title: "Display Options & Patterns",
          content: `Control how the CFD looks, customize individual bands, use advanced options, and learn to read common chart patterns.

## Display Options

| **Option** | **What It Does** | **Default** |
| --- | --- | --- |
| **Interval** | Granularity: 1 day / 1 week / 2 weeks / 1 month | 1 day |
| **Include Sub-Tasks** | Include sub-tasks alongside parent issues | Off |
| **Show as % of total** | Display bands as percentage instead of counts | Off |
| **Show Legend** | Show/hide the band legend | On |
| **Hide Weekends** | Skip Saturday and Sunday on the X-axis | Off |
| **Show Horizontal Gridlines** | Add horizontal gridlines for reading values | Off |
| **Y-Axis Starts at Zero** | Force Y-axis to start at 0 - prevents misleading scale | On |
| **Enable Scroll Zoom** | Allow pinch/scroll zoom on the chart | Off |

## Advanced Options

| **Option** | **What It Does** |
| --- | --- |
| **Continue After End Date** | Include issues that transitioned after the chart's end date |
| **Show Entire Time Interval** | Extend the X-axis to the full date range even if no data exists for some days |

## Band Customization

After the chart loads, customize individual bands in the band list:

- **Exclude a band** - uncheck it to remove it from the chart and the count
- **Reorder bands** - drag bands to match your workflow order (bottom = first stage)
- **Custom colors** - click the color swatch next to a band name to change its color

> **Tip:** Order bands so the earliest stage (e.g., "To Do") is at the bottom and the final stage (e.g., "Done") is at the top. This is the standard CFD convention - completion accumulates upward.

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **Configuration** | JSON export of all settings for reuse or backup |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. WIP AGING CHARTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "wip-aging-charts-gadget",
      title: "WIP Aging Charts",
      articles: [
        {
          slug: "wip-aging-charts-gadget-intro",
          title: "WIP Aging Charts",
          content: `The **WIP Aging Charts** gadget visualizes how long your current work-in-progress items have been active. It plots issues on a scatter chart where the X-axis represents age in days - giving you an immediate view of which items are stalled, approaching SLA limits, or far outside normal cycle time.

Use this section to understand the scatter plot format, age calculation options, and how to configure reference lines for your team's SLA thresholds.

### In This Section

| **Page Name** | **Description** |
| --- | --- |
| **Overview** | *What the WIP Aging Chart shows, how to read the scatter plot, and data source options.* |
| **Age Calculation Methods** | *All 5 age calculation methods, display units, weekend exclusion, and calendar vs. business time.* |
| **Reference Lines & Scale** | *Average, threshold, and percentile reference lines - how to configure each and what they mean.* |
| **Display Settings & Export** | *Data table view, display toggles, export options, and common use cases.* |
`,
        },
        {
          slug: "wip-aging-overview",
          title: "Overview",
          content: `The WIP Aging Charts gadget plots each in-progress issue as a point on a scatter chart. The Y-axis groups issues by status or custom field; the X-axis shows how many days each issue has been in its current state. Reference lines mark your average, SLA threshold, and statistical percentiles so outliers are immediately visible.

## Overview

| **Feature** | **Description** |
| --- | --- |
| **Scatter Plot** | One dot per issue - X-axis = age, Y-axis = status group |
| **5 Age Calculation Methods** | Time since last entry, sum of all occurrences, category sum, category first entry, time since creation |
| **Three Reference Lines** | Average, Threshold (with configurable value), and Percentile (1–99) lines |
| **Data Table View** | Switch from scatter plot to a tabular view of all WIP items with age details |
| **Log Scale Option** | Compress wide age ranges for better readability |
| **Status Ordering** | Custom Y-axis order via comma-separated list |

## How to Read the Chart

- **Each dot** = one WIP issue
- **X position** = how many days it has been in its current status
- **Y position** = which status it is in
- **Dots to the right of the threshold line** = SLA risk - these need attention
- **Clusters on the left** = normal, healthy WIP
- **Sparse dots far right** = stalled or forgotten work

> **Action pattern:** Review dots to the right of your threshold line in each daily standup. Ask "what is blocking this?" for anything past the line.

## Data Sources

| **Source Type** | **When to Use** |
| --- | --- |
| **Projects** | Analyze all WIP issues in one or more Jira projects |
| **Saved Filter** | Use a pre-saved filter to scope which issues appear |
| **Custom JQL** | Write precise JQL (e.g., \`status not in (Done, Closed, Cancelled)\`) |
| **Dynamic Filter Controller** | Connect to a shared filter bar for interactive slicing |

## Display Configuration

### Chart By

Choose how the Y-axis groups issues:

| **Option** | **Y-Axis Groups** |
| --- | --- |
| **Statuses of work items** (default) | One row per workflow status - shows age per stage |
| **Columns of the selected board** | Groups issues by the board column they belong to - useful when multiple statuses map to the same board column |

## Age Calculation Methods

| **Method** | **What It Measures** | **Best For** |
| --- | --- | --- |
| **Time since last entry in current status** | How long the issue has been in its current status continuously | Standard "how long in this status now" |
| **Sum of all time in current status** | Total accumulated time ever spent in this status, across all visits | Issues that bounce back - counts re-entry time too |
| **Sum of all time in the category of current status** | Total time across all statuses in the same category (e.g., all "In Progress" statuses) | Category-level aging (Cycle Time proxy) |
| **Time since first entry in current status category** | Clock starts from the first time the issue entered this category | Lead time measurement from category start |
| **Time since work item creation** | How long since the issue was created - regardless of current status | Total issue age / oldest backlog items |

### Age Display Options

| **Option** | **What It Controls** | **Default** |
| --- | --- | --- |
| **Calculate In** | Unit for age display: Hours, Days, or Minutes | Days |
| **Exclude Weekends** | Skip Saturday and Sunday when counting age | Off |
| **Include Sub-Tasks** | Whether sub-tasks appear as dots on the chart | Off |
| **Include "To Do" Category Items** | Include statuses in the "To Do" workflow category | Off |

### Calendar vs. Working Time

By default, age is measured in **calendar time** - every hour counts from when the issue entered its current status, including nights and weekends.

Enable **Exclude Weekends** to skip Saturday and Sunday when calculating age. An issue that sat over a 3-day weekend will then not accrue those days against its age.

Use this setting when your SLA commitments are stated in business days (e.g., "resolve P1 bugs within 2 business days").

## Reference Lines

Reference lines are horizontal markers drawn across all status groups. They help you immediately identify outliers.

### Average Line

Shows the **mean age** across all issues currently in that status group.

- **Useful for:** "What is normal for this stage?" - dots to the right of the average are above-average aging
- **Enable:** Toggle **Show Average Line** in the configuration panel
- **Customize:** Change the label text (default: "Average")

### Threshold Line

A **fixed value** you set - your team's SLA limit or internal policy.

- **Enable:** Toggle **Show Threshold Line** and enter the day value
- **Typical values:** 5 days (tactical), 10 days (strategic), 20 days (escalation trigger)
- **Customize:** Label text and the numeric value

### Percentile Line

Shows a **statistical percentile** of the current age distribution (e.g., 85th percentile means 85% of issues are younger than this line).

- **85th percentile** is the most common Kanban SLE (Service Level Expectation) - "85% of issues are resolved within X days"
- **95th percentile** is a stricter commitment
- **Enable:** Toggle **Show Percentile Line** and enter a value from 1 to 99
- **Customize:** The percentile value and the label text

> **Common setup:** Use all three lines together - Average (internal baseline), Percentile 85 (SLE commitment), Threshold (escalation trigger). Issues to the right of the threshold need immediate action.

## Scale Options

### Linear Scale (default)

Standard linear X-axis. Best when most issues cluster within a similar age range (e.g., all within 0–30 days).

### Log Scale

A logarithmic X-axis compresses the right side of the chart, making it easier to see clusters when ages span a wide range (e.g., 0–200 days with most items below 20 days).

- **Enable:** Toggle **Use Log Scale**
- **When to use:** When a few very old issues stretch the axis so far that normal-age items are all crammed into the left 10% of the chart

## Custom Status Order

Enter a comma-separated list of status names in the **Custom Status Order** field to control their vertical order on the Y-axis. Typical practice: list statuses from earliest workflow stage to latest, so the chart reads top-to-bottom like a workflow board (e.g., "To Do, In Progress, In Review, Done").

## Data Table View

Switch from the scatter plot to a tabular list of all WIP items with their age details. This is useful for sharing exact numbers or drilling into specific issues.

- **Toggle the view** using the Chart / Table switcher in the gadget header
- **Open table by default**: enable "Open table view by default" in the settings so the gadget always starts in table mode

## Display Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Show Legend** | Toggle legend visibility |
| **Tilt X-Axis Labels** | Angle status labels on the X-axis to prevent overlap when there are many statuses |
| **Number Format** | Separator style for large numbers |
| **Decimal Places** | Precision for age values |
| **Color Mode** | Default colors or custom per-status colors |
| **Open Table View by Default** | Gadget loads in table mode instead of scatter chart |
| **Auto-Refresh** | Refresh the chart automatically every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Raw WIP data with one row per issue - includes status, age in days, and key fields |
| **PNG** | Image snapshot of the scatter chart with reference lines |
| **Configuration** | JSON export of all settings for reuse or backup |

## Common Use Cases

### Daily Standup WIP Review
Set threshold to your team's SLA (e.g., 10 days). During standup, the chart immediately shows which items need discussion - no sorting or filtering required.

### Kanban SLE Tracking (85th Percentile)
Enable the percentile line at 85. The line value tells you: "85% of our in-progress work resolves within X days." Share this number with stakeholders as a data-driven commitment.

### Sprint Retrospective
Run the WIP Aging report at the end of a sprint. Issues with high age that did not complete are candidates for retrospective discussion.
`,
        },
        {
          slug: "wip-aging-age-methods",
          title: "Age Calculation Methods",
          content: `The **Age Calculation Method** is the most important configuration decision in WIP Aging. It controls what "age" means for each issue - and different methods give very different numbers.

## All 5 Methods

| **Method** | **What It Measures** | **Best For** |
| --- | --- | --- |
| **Time since last entry in current status** | How long the issue has been in its current status continuously | Standard "how long in this status right now" |
| **Sum of all time in current status** | Total accumulated time in this status, including all previous visits | Issues that bounce back - counts every re-entry |
| **Sum of all time in category of current status** | Total time across all statuses in the same category | Category-level aging, Cycle Time proxy |
| **Time since first entry in current status category** | Clock starts from the very first time the issue entered this category | Lead time from category start |
| **Time since work item creation** | How long since the issue was created - regardless of current status | Total issue age, oldest backlog items |

## Choosing the Right Method

**For daily standup:** Use **Method 1** (time since last entry). It answers "how long has this been sitting here right now?" - the most actionable question for a team discussion.

**For rework detection:** Use **Method 2** (sum of all time). If an issue keeps bouncing back to "In Review", this method accumulates all that time and reveals the real cost.

**For Cycle Time monitoring:** Use **Method 3** (category sum). Measures total active working time regardless of which specific "In Progress" status the issue is in.

**For backlog hygiene:** Use **Method 5** (time since creation). Immediately shows which items have been sitting in the backlog for months.

## Age Display Units

| **Option** | **Default** |
| --- | --- |
| **Days** | ✓ Default |
| **Hours** | For short-lived workflows |
| **Minutes** | For very fast-moving processes |

## Weekend Exclusion

By default, age is measured in calendar time - every hour counts, including nights and weekends.

Enable **Exclude Weekends** to skip Saturday and Sunday. An issue that sat untouched over a 3-day weekend will not accumulate those days against its age.

Use this when your SLA commitments are stated in business days.

## Scope Options

| **Option** | **What It Does** |
| --- | --- |
| **Include Sub-Tasks** | Whether sub-tasks appear as individual dots on the chart |
| **Include "To Do" Category Items** | Include statuses in the "To Do" workflow category (off by default - WIP Aging is normally for in-progress work only) |
`,
        },
        {
          slug: "wip-aging-reference-lines",
          title: "Reference Lines & Scale",
          content: `Reference lines are horizontal markers drawn across all status groups on the chart. They give your team a visual benchmark - immediately showing which dots are within normal range and which need attention.

## Average Line

Shows the **mean age** across all currently in-progress issues.

- **What it tells you:** What is normal for your team right now
- **How to use it:** Any dot significantly to the right of the average is an outlier worth discussing
- **Enable:** Toggle **Show Average Line** in the configuration panel
- **Customize:** Change the label text (default: "Average")

## Threshold Line

A **fixed value** you set - your team's SLA limit or internal policy.

**Example:** Your team commits to resolving P1 bugs within 5 business days. Set the threshold to 5. Any dot to the right of this line is a potential SLA breach.

- **Enable:** Toggle **Show Threshold Line** and enter the day value
- **Typical values:**
  - 5 days - tactical / short SLA
  - 10 days - strategic / medium SLA
  - 20 days - escalation trigger
- **Customize:** Label text and the numeric value

> **Action pattern:** In every standup, any dot past the threshold line gets a discussion. Ask: "What is blocking this? Can it be cleared today?"

## Percentile Line

Shows a **statistical percentile** of the current age distribution.

**What 85th percentile means:** 85% of your current in-progress work is younger than this line. Only 15% is older.

This is the standard metric for a Kanban **Service Level Expectation (SLE)** - a data-driven commitment: "85% of our work completes within X days."

- **Enable:** Toggle **Show Percentile Line** and enter a value from 1 to 99
- **Common values:** 50 (median), 85 (standard SLE), 95 (stricter commitment)
- **Customize:** The percentile value and label text

## Using All Three Lines Together

A common professional setup:

| **Line** | **Value** | **Purpose** |
| --- | --- | --- |
| **Average** | Calculated automatically | Internal baseline - "what's normal" |
| **Percentile 85** | Calculated automatically | Your public SLE commitment to stakeholders |
| **Threshold** | Your SLA limit in days | Escalation trigger - anything past this needs action now |

## Scale Options

### Linear Scale (default)

Standard X-axis. Best when most issues cluster in a similar age range (e.g., 0–30 days).

### Logarithmic Scale

A log X-axis compresses the right side of the chart. Useful when a few very old issues stretch the axis so far that the normal-age items are all crammed into the left 10%.

- **Enable:** Toggle **Use Log Scale**
- **When to use:** When outliers are 10× older than typical items

## Custom Status Order

Enter a comma-separated list of status names in the **Custom Status Order** field to control the Y-axis order.

**Example:** \`To Do, In Progress, In Review, QA, Done\`

Typical practice: list statuses from earliest to latest so the chart reads top-to-bottom like a workflow board.
`,
        },
        {
          slug: "wip-aging-display-export",
          title: "Display Settings & Export",
          content: `Control the chart display, switch to a data table view, and export your WIP aging data.

## Data Table View

Switch from the scatter plot to a tabular list of all WIP items with their age details.

- **Toggle the view** using the Chart / Table switcher in the gadget header
- **Enable "Open table view by default"** in Display Settings so the gadget always starts in table mode

The data table is useful for:
- Sharing exact age numbers with stakeholders
- Exporting specific items for follow-up
- Reviewing items without the scatter plot visual

## Display Settings

| **Setting** | **What It Does** |
| --- | --- |
| **Show Legend** | Toggle legend visibility |
| **Tilt X-Axis Labels** | Angle status labels to prevent overlap when there are many statuses |
| **Number Format** | Separator style for large numbers |
| **Decimal Places** | Precision for age values |
| **Color Mode** | Default colors or custom per-status colors |
| **Open Table View by Default** | Gadget loads in table mode instead of scatter chart |
| **Auto-Refresh** | Refresh the chart automatically every 10 minutes in view mode |

## Export

| **Format** | **What Is Exported** |
| --- | --- |
| **CSV** | Raw WIP data - one row per issue, with status, age in days, and key fields |
| **PNG** | Image snapshot of the scatter chart including all reference lines |
| **Configuration** | JSON export of all gadget settings for reuse or backup |

## Common Use Cases

### Daily Standup Review
Set the threshold to your team's SLA (e.g., 10 days). Open the chart at standup - any dot past the line needs a conversation. No sorting or filtering required.

### Kanban SLE Tracking (85th Percentile)
Enable the percentile line at 85. The line value tells you: "85% of our in-progress work resolves within X days." Track this number over time to improve predictability.

### Sprint Retrospective
Run the WIP Aging report at the end of a sprint. Issues with high age that did not complete are candidates for retrospective discussion - were they blocked? Under-specified? Too large?

### SLA Breach Prevention
Set the threshold at your SLA boundary (e.g., 5 business days for P1 bugs). Run the chart daily and escalate any dot to the right of the threshold before it becomes a formal breach.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. ADMIN SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "admin-settings",
      title: "Admin Settings",
      articles: [
        {
          slug: "admin-settings",
          title: "Admin Settings",
          content: `
Control global app behavior for all gadgets - Custom Charts, Issue List, Dynamic Filter Controller, Time in Status, Pivot Table, Cumulative Flow Diagram, and WIP Aging Charts. Use Admin Settings to manage defaults, feature availability, allowed data sources, and support links for all users in your Jira site.

## Where to find it

* Open Jira and go to Apps.
* Open the Custom Charts & Dashboards app.
* Open the Admin page.
* Use the tabs at the top to manage Customization Options, Features, Data Sources, and Support.

## What Admin Settings control

* Global export access for PNG, PDF, and CSV.
* Default display values such as number format, decimal places, date format, and time unit.
* Feature availability for Issue List, Custom Chart, Dynamic Filter Controller, and Templates.
* Allowed data source types such as Projects, Saved Filters, Custom JQL, and Filter Controller.
* Support and documentation links for end users.

## Admin Settings tabs

| **Tab** | What it does | Applies to |
| --- | --- | --- |
| **Customization Options** | Sets global defaults for export and display formatting. | Custom Chart, Issue List |
| **Features** | Turns major app features on or off for the whole site. | All gadgets |
| **Data Sources** | Controls which source types users can select when building gadgets. | Custom Chart, Issue List, Filter Controller links |
| **Support** | Provides help, training, and documentation links. | All users |

## Customization Options

**This tab controls global defaults.** These values help keep gadget behavior consistent across the site, especially when users create new reports.

### Available settings

| **Setting** | What it does | Default | Notes |
| --- | --- | --- | --- |
| **Allow direct export** | Lets users export gadget content directly from the gadget menu. | On | If disabled, export actions should not be available to users. |
| **Number format** | Controls how large numbers are displayed. | 123,456.78 | Useful for keeping chart and table totals consistent. |
| **Decimal places** | Sets default decimal precision for percentages and calculated values. | 1 | Applied as the starting value, but users may still change it in gadget settings. |
| **Date format** | Controls how dates appear in supported gadgets. | 20 Jan 2025 style | Helps standardize date display across reports. |
| **Time unit** | Controls the default time unit used where supported. | Hours | Relevant for calculations and time-based reporting displays. |

> **Note:** Customization Options are global defaults. They are meant to give users a clean starting point, but they do not replace every gadget-level display setting.

## Features Tab

**This tab controls which major app features are available.** When a feature is disabled, users should see that the feature is unavailable instead of being able to use it normally.

### Feature toggles

| **Feature** | What happens when enabled | What happens when disabled |
| --- | --- | --- |
| **Issue List** | Users can create and use Issue List gadgets. | Issue List functionality is blocked for users. |
| **Custom Chart** | Users can create and use Custom Chart gadgets. | Custom Chart functionality is blocked for users. |
| **Dynamic Filter Controller** | Users can use the Dynamic Filter Controller gadget. | Controller-based filtering is blocked for users. |
| **Templates** | Users can open and apply built-in templates in supported gadgets. | Template buttons or template flows should be unavailable. |
| **Time in Status** | Users can create and use the Time in Status gadget. | Time in Status is hidden and unavailable. |
| **Pivot Table** | Users can create and use the Pivot Table gadget. | Pivot Table is hidden and unavailable. |
| **WIP Aging Charts** | Users can create and use the WIP Aging Charts gadget. | WIP Aging Charts is hidden and unavailable. |
| **Cumulative Flow Diagram** | Users can create and use the Cumulative Flow Diagram gadget. | CFD is hidden and unavailable. |

## Data Sources

**This tab decides which source types users can choose when configuring gadgets.** It is useful when an admin wants to simplify setup, limit raw JQL usage, or guide users toward approved sources.

### Available source controls

| **Source type** | What it allows | Used in | If disabled |
| --- | --- | --- | --- |
| **Projects** | Users can build gadgets from selected Jira projects. | Custom Chart, Issue List | Project source option should not be available. |
| **Saved Filters** | Users can use saved Jira filters as the source. | Custom Chart, Issue List | Saved filter source option should not be available. |
| **Custom JQL** | Users can enter their own JQL. | Custom Chart, Issue List, Filter workflows | Raw custom JQL should not be available as a source option. |
| **Filter Controller** | Users can connect gadgets to a Dynamic Filter Controller. | Custom Chart, Issue List | Controller reference source should not be available. |

## Support Tab

**The Support tab is an information area rather than a control panel.** It provides users with quick access to help resources such as support tickets, training, quick-start material, and documentation links.

* Raise a support ticket.
* Schedule training.
* Open quick-start or documentation resources.
* Direct users to help without leaving the app context.

## How Admin Settings apply in the app

| **Area** | How settings are used | Important detail |
| --- | --- | --- |
| **Custom Chart** | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can influence chart setup, but not every chart-specific display option. |
| **Issue List** | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can control broad behavior, but not every table preference. |
| **Dynamic Filter Controller** | Uses feature flags and source-related controls. | Formatting defaults are less relevant here than in chart and table gadgets. |
| **Templates** | Controlled mainly through the global Templates feature toggle. | Admins can enable or disable template access, but cannot manage template content from Admin Settings. |

> **Note:** Admin Settings work best as a global governance layer. They are strong for basic control and consistency, but they are not a full enterprise policy console.

## Recommended admin practice

* Use Customization Options to set clean default formatting before users create new gadgets.
* Disable source types that your team should not use, especially Custom JQL if you want a simpler setup flow.
* Use the Templates toggle if you want to allow or block quick-start preset usage across gadgets.
`,
        },
      ],
    },

    // ═══ INTEGRATIONS & MIGRATION ═══
    {
      id: "integrations-migration",
      title: "Integrations & Migration",
      articles: [
        {
          slug: "supported-integrations",
          title: "Supported Integrations",
          content: `
**Dashboard Templates, Charts, Graphs & Reports for Jira** is a native Jira Cloud app built on Atlassian Forge. It integrates deeply with Jira's own data model and dashboard system - no external services, no third-party connectors, and no data leaving your Atlassian environment.

---

## Native Jira Integration

The app reads and displays data directly from your Jira Cloud instance. All data access uses Jira's standard APIs within the Forge sandbox - the same data you would see in Jira's own issue navigator and board views.

### Jira Data the App Uses

| **Jira Data Type** | How the App Uses It |
|---|---|
| **Issues** | Primary source for all charts, tables, and filters - count, sum, group, and filter issues by any field |
| **Projects** | Select one or more projects as the data source for a gadget |
| **Saved Filters** | Use any saved Jira filter as a gadget data source - picks up the filter's JQL automatically |
| **Sprints** | Filter and group issues by sprint (Active, Future, Closed); supports \`openSprints()\` and \`closedSprints()\` in JQL |
| **Custom Fields** | Any custom field on your Jira instance can be used as a Chart By, Group By, column, or filter field |
| **Standard Fields** | Status, Priority, Assignee, Reporter, Issue Type, Component, Labels, Fix Version, Epic Link, Story Points, Due Date, Created, Updated, Resolved |
| **User Data** | Assignee and Reporter fields display user names and avatars (Issue List); JQL supports \`currentUser()\` for personal views |
| **Jira Statuses & Workflows** | Status values reflect your project's actual workflow statuses - no mapping needed |
| **Epics** | Group or filter by Epic Link or Epic Name using standard Jira fields or JQL |

### What the App Cannot Access

- **Jira Service Management (JSM) specific fields** - some JSM-only fields may not be available depending on your Jira configuration
- **External issue trackers** - the app only reads from Jira Cloud; no GitHub, Asana, or Linear integration
- **Confluence pages** - the app does not read from Confluence
- **Jira Server / Data Center** - Atlassian Forge is Cloud-only

---

## Jira Dashboard Gadget Integration

The app is delivered as **Jira dashboard gadgets** - the standard Atlassian mechanism for adding content to Jira dashboards.

### What This Means

- Gadgets appear in the standard Jira **Add gadget** gallery
- Gadgets follow Jira dashboard **share permissions** - view or edit access is controlled by whoever owns the dashboard
- Gadgets can be placed on **any Jira dashboard**, including personal, team, and company dashboards
- Gadgets respect Jira's **column layout system** (1, 2, or 3 column layouts)
- Multiple gadgets of the same type can be added to the same dashboard

### Gadget Sizing

Gadgets adjust their display to the column width assigned in the dashboard layout. For best results:

| **Gadget** | Recommended Column Width |
|---|---|
| **Custom Charts (Pie, Bar, Line)** | 1 or 2 columns |
| **Issue List** | 2 or 3 columns (wider is better for many columns) |
| **Dynamic Filter Controller** | Full width (3 columns) or at least 2 columns |

---

## Jira Filter Integration

**Saved Jira Filters** can be used directly as the data source for any gadget:

1. Open a gadget in edit mode
2. In the left panel, set **Source Type** to **Saved Filter**
3. Search for the filter by name
4. Select the filter - the gadget uses its JQL automatically

### Benefits of Using Saved Filters

- Changes to the saved filter in Jira are reflected automatically in the gadget
- Filters managed by your team ensure everyone uses consistent data definitions
- Useful for organization-wide dashboards where a central filter defines "all active projects"

### Supported Filter Types

| **Filter Type** | Supported |
|---|---|
| **Personal saved filters (My Filters)** | Yes |
| **Shared filters (visible to you)** | Yes |
| **Favorite filters** | Yes |
| **Starred filters** | Yes |
| **Filters you don't have access to** | No - only filters you can view in Jira |

---

## No External Service Integrations

The current version does not natively integrate with:

| **Tool** | Status |
|---|---|
| **Slack** | Not supported |
| **Microsoft Teams** | Not supported |
| **Confluence** | Not supported |
| **Google Sheets / Excel** | Not supported (use CSV export instead) |
| **BI tools (Tableau, Power BI)** | Not supported (use CSV export instead) |
| **Jira Server / Data Center** | Not supported |

> **Workaround for BI tools:** Use the CSV export feature to download issue data, then import it into your preferred BI or spreadsheet tool.

---

## Platform & Security

| **Aspect** | Detail |
|---|---|
| **Platform** | Atlassian Forge (Cloud-native, sandboxed) |
| **Data storage** | Forge KVS - gadget configurations only; no issue data stored |
| **Data transit** | All data accessed within Atlassian's infrastructure; no external API calls |
| **Permissions** | Respects Jira's native project and issue permissions - users only see data they can access in Jira |
| **Authentication** | Uses Atlassian's standard OAuth/session for all API calls |
`,
        },
        {
          slug: "data-migration",
          title: "Data Migration",
          content: `
This guide explains how to export and import gadget configurations, move setups between dashboards, back up your configurations, and understand what can and cannot be migrated.

---

## Overview

The app stores **gadget configurations** (chart settings, column choices, filter fields, display options) in Atlassian Forge KVS - not in Jira issues or project data. When you "migrate" a dashboard setup, you are moving these gadget configurations, not Jira data.

> **Important:** Uninstalling the app permanently deletes all stored gadget configurations. Back up important configurations before uninstalling.

---

## How to Export a Gadget Configuration

Every gadget has a built-in JSON export that captures the complete configuration:

1. Open the gadget in **edit mode**
2. Click the **Import/Export** tab in the right settings panel
3. Click **Export Configuration**
4. The configuration JSON is shown in the text area - **copy the entire JSON string**
5. Save it to a file or document for safekeeping

### What the Export JSON Contains

| **Included** | Not Included |
|---|---|
| **Chart type** | Jira issue data |
| **Chart By field and segments** | Jira project settings |
| **Group By field** | Dashboard layout |
| **Display Options** | User access permissions |
| **Quick filters (Issue List)** | Dynamic Filter Controller connections |
| **Smart Labels (Issue List)** | |
| **Reference lines (Custom Charts)** | |
| **Gadget title and description** | |

---

## How to Import a Configuration

1. Add a **new gadget** of the same type to a dashboard
2. Open it in **edit mode**
3. Click the **Import/Export** tab
4. Paste the exported JSON into the import text area
5. Click **Import** - all settings are applied immediately
6. Check the **Live Preview** to confirm everything looks correct
7. Adjust the **data source** if needed (the import does not transfer data source selections - you must re-select the project or filter)
8. Click **Save gadget**

> **Note:** You must re-select the data source after import. Project names and filter IDs are environment-specific and may differ between dashboards or Jira instances.

---

## Moving Configurations Between Dashboards (Same Jira Instance)

Use Import/Export to copy a gadget from one dashboard to another within the same Jira site:

1. **Export** the configuration from the source gadget (steps above)
2. Open the **destination dashboard** in edit mode
3. **Add a new gadget** of the same type
4. **Import** the configuration into the new gadget
5. **Re-select the data source** (project, filter, or JQL)
6. **Save**

### Dynamic Filter Controller - Special Consideration

When moving a Dynamic Filter Controller to a new dashboard:
- The controller gets a **new Reference ID** on the new dashboard
- All connected charts on the new dashboard must be **re-connected** to the new Reference ID
- Export and import the controller configuration, then re-link each connected gadget

---

## Moving Configurations Between Jira Instances

Gadget configurations can be moved between different Jira Cloud sites using the same Import/Export process, but with additional manual steps:

### Steps

1. Export the gadget configuration JSON from the **source Jira instance**
2. On the **target Jira instance**, add a new gadget of the same type
3. Import the JSON
4. **Re-select the data source** - project names and filter IDs do not transfer between instances
5. Verify that **custom fields** used in Chart By, Group By, or columns exist on the target instance (field names must match)
6. Verify that **JQL segment conditions** reference valid field names and values on the target instance
7. Save

### What Transfers Cleanly

| **Config Element** | Transfers? | Notes |
|---|---|---|
| **Chart type** | Yes | |
| **Chart By - Jira standard fields** | Usually yes | Field must exist on target instance |
| **Chart By - Custom JQL segments** | Usually yes | JQL field names must be valid on target |
| **Display Options** | Yes | |
| **Smart Labels** | Usually yes | JQL conditions must be valid on target |
| **Quick Filters** | Usually yes | JQL conditions must be valid on target |
| **Chart title / description** | Yes | |
| **Data source selection** | **No** | Must be re-selected manually |
| **Custom field references** | **Verify** | Custom field names must match on target |

---

## JSON Configuration Backup

Best practices for backing up your gadget configurations:

### Before Major Changes
Always export configuration before making significant changes to a working gadget - this gives you a restore point.

### Regular Backup Process

1. For each important gadget, open it in edit mode
2. Export the configuration JSON
3. Save to a shared document, wiki page, or version-controlled file

### Backup Format Recommendation

Store backups as plain text files with a clear naming convention:

\`\`\`
dashboard-name_gadget-type_chart-name_YYYY-MM-DD.json
\`\`\`

Example:
\`\`\`
sprint-dashboard_custom-charts_bug-by-priority_2026-05-19.json
team-dashboard_issue-list_workload-view_2026-05-19.json
\`\`\`

### What to Back Up Before Uninstalling

If you plan to uninstall and reinstall the app:
1. Export every gadget configuration you want to preserve
2. Note the **Reference IDs** of Dynamic Filter Controllers and which charts connect to each
3. Document your dashboard layouts (screenshot or notes)
4. After reinstalling, import configurations and re-establish controller connections

---

## Limitations

| **Limitation** | Detail |
|---|---|
| **No bulk export** | Configurations must be exported one gadget at a time |
| **No dashboard-level export** | Jira does not support exporting a full dashboard including gadget configs |
| **Controller connections not exported** | Linked chart-to-controller relationships must be re-established manually after import |
| **Data source not exported** | Project, filter, or JQL selections must be re-entered after import |
| **App uninstall deletes all configs** | There is no recovery after uninstall if configurations were not exported first |
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // DEMO DOC
    // ═══════════════════════════════════════════════════════════════
    {
      id: "demo-doc",
      title: "Demo Doc",
      articles: [
        {
          slug: "demo-doc",
          title: "Demo Doc",
          content: `
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Dashboard_Templates_Charts_Graphs_and_Reports_for_Jira_Demo_Doc_27962ca518.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // SALES DOC
    // ═══════════════════════════════════════════════════════════════
    {
      id: "sales-doc",
      title: "Sales Doc",
      articles: [
        {
          slug: "sales-doc",
          title: "Sales Doc",
          content: `
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Dashboard_Templates_Charts_Graphs_and_Reports_for_Jira_Sales_Doc_1_28b27bab5c.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // COMPETITOR COMPARISON
    // ═══════════════════════════════════════════════════════════════
    {
      id: "competitor-comparison",
      title: "Competitor Comparison",
      articles: [
        {
          slug: "competitor-comparison",
          title: "Competitor Comparison",
          content: `
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Dashboard_Competitor_Doc_479c80e80b.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // APP PRICING
    // ═══════════════════════════════════════════════════════════════
    {
      id: "app-pricing",
      title: "App Pricing",
      articles: [
        {
          slug: "cloud-app-pricing",
          title: "Cloud App Pricing",
          content: `
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Dashboard_Templates_Charts_Graphs_and_Reports_for_Jira_b57e55dbe7.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
        {
          slug: "agc-app-pricing",
          title: "AGC App Pricing",
          content: `
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Dashboard_Templates_Charts_Graphs_and_Reports_for_Jira_AGC_292b403cdc.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
      ],
    },
  ],
};
