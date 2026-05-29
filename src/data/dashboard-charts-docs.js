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
Custom Charts for Jira is a reporting app that helps you **see your Jira data in a clear, visual way**.

## Core Value Proposition

- Make **charts and graphs** from your Jira issues with no coding required
- Build **tables and issue lists** with configurable columns, smart labels, and quick filters
- Create **interactive configurable dashboards** for your team using a shared Dynamic Filter Controller
- Export everything as **PNG, PDF, or CSV** for stakeholders and reporting

All of this is done **inside Jira**, using your existing projects, filters, and JQL.

<!--VIDEO_BREAK-->

## Three Integrated Gadgets

| Gadget | What It Does |
|---|---|
| **Custom Charts** | Create pie, bar, line, table, funnel, and tile charts from Jira issues; supports 10 chart types |
| **Issue List** | Display Jira issues in a configurable table with custom columns, smart labels, and quick filters |
| **Dynamic Filter Controller** | Create a shared filter bar that controls multiple charts and lists simultaneously |

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

1. Log in to your Jira Cloud site as an administrator
2. Click the **gear icon** (Settings) in the top-right corner → select **Apps**
3. Click **Find new apps** in the left sidebar
4. Search for **"Dashboard Templates Charts Graphs Reports Clovity"**
5. Click the app in the search results
6. Click **Try it free** (30-day trial) or **Buy now**
7. Review and accept the requested permissions
8. Click **Accept** - the app installs immediately, no restart required

## Verify Installation

After installation:

1. Open any Jira **Dashboard** (or create a new one)
2. Click **Add gadget** (pencil/edit mode)
3. Search for **"Custom Charts"** or **"Issue List"** or **"Dynamic Filter Controller"**
4. The gadgets should appear in the search results

## First Admin Steps

Once installed, complete these setup tasks before rolling out to your team:

| Step | Where | What to Do |
|---|---|---|
| 1. Open Admin Settings | Apps → Custom Charts → Admin | Review global defaults for export, number format, date format |
| 2. Configure export access | Admin → Customization Options | Enable or disable PNG/PDF/CSV export for all users |
| 3. Set data source rules | Admin → Data Sources | Control whether users can use Projects, Saved Filters, JQL, or Controller |
| 4. Enable/disable features | Admin → Features | Toggle Issue List, Custom Chart, Dynamic Filter Controller, and Templates on or off |
| 5. Create a test dashboard | Jira → Dashboards → Create | Add one of each gadget to verify everything works |

## Jira Permissions Required for Installation

The app requests the following permissions during Marketplace install:

| Permission | Why It's Needed |
|---|---|
| read:jira-work | Read issues, projects, and filters for charts and tables |
| write:jira-work | Save gadget configurations |
| read:jira-user | Display user information (assignees, reporters) in Issue List |
| read:dashboard:jira | Access dashboard gadgets |
| write:dashboard:jira | Save and update gadget configurations |
| storage:app | Store gadget configurations in Forge KVS |

## Uninstalling

To uninstall: Jira Settings → Apps → Manage apps → find the app → click **Uninstall**. All app-stored configurations (gadget setups, saved templates) will be permanently deleted. Jira issues and projects are unaffected.`,
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
          slug: "system-requirements",
          title: "System Requirements",
          content: `
## Platform Requirements

| Requirement | Details |
|---|---|
| **Jira Edition** | Jira Cloud only |
| **Jira Server** | Not supported |
| **Jira Data Center** | Not supported |
| **Atlassian Platform** | Atlassian Forge |

## Browser Requirements

All modern browsers are supported:

| Browser | Minimum Version |
|---|---|
| Google Chrome | Latest 2 versions |
| Mozilla Firefox | Latest 2 versions |
| Microsoft Edge | Latest 2 versions |
| Apple Safari | Latest 2 versions |

Internet Explorer is not supported.

## Jira Permissions Required

The app requests the following permissions during Marketplace install:

| Permission | Why It's Needed |
|---|---|
| read:jira-work | Read issues, projects, filters for charts and tables |
| write:jira-work | Save gadget configurations |
| read:jira-user | Display user information in Issue List columns |
| read:dashboard:jira | Access dashboard gadgets |
| write:dashboard:jira | Save and update gadget configurations on dashboards |
| storage:app | Store gadget configurations in Forge KVS |

## Data Limits & Performance

| Constraint | Impact |
|---|---|
| Large issue queries | Queries returning 50,000+ issues may be slow to render |
| Real-time updates | Data refreshes on page load or manual refresh - not streaming |
| Segment count | 10–20 segments render faster than 100+; keep queries focused |
| Forge KVS storage | Gadget configurations stored in Forge KVS - very large configurations may approach limits |

## Known Limitations

- **No Jira Server / Data Center support** - Atlassian Forge is Cloud-only
- **No real-time push updates** - dashboard data reflects the state at last page load; manual refresh required
- **No historical snapshots** - charts show current Jira state; point-in-time snapshots are not built in
- **No external integrations** - the app does not natively connect to Slack, Teams, or external BI tools

## Network Requirements

No special network configuration is required beyond standard access to \`*.atlassian.net\` and \`*.atlassian.com\`.`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## How Access Works

Custom Charts & Dashboards does not have its own user role system. Access is governed entirely by **Jira's existing permissions**:

| Access Level | How It's Determined | What Users Can Do |
|---|---|---|
| **Dashboard Owner / Editor** | Jira dashboard share permissions | Add, edit, and remove gadgets; save configurations |
| **Dashboard Viewer** | Jira dashboard share permissions | View gadget data; use Dynamic Filter Controller filters |
| **Jira Admin** | Jira site admin or project admin role | Access Admin Settings; enable/disable features and data sources |

## Jira Dashboard Permissions

Gadget access is tied to Jira dashboard permissions:

| Permission | Who Sets It | Effect |
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
          content: `
Dashboard Templates, Charts, Graphs & Reports for Jira adds three gadgets to your Jira dashboards. Use this guide to find the fastest path based on your role.

## Jira Administrator

You control who can access and export dashboards.

**Start with:**
1. [Installation & Setup](/apps/dashboard-charts-jira/installation-setup) - install from Atlassian Marketplace
2. [Admin Settings](/apps/dashboard-charts-jira/admin-settings) - enable/disable exports, set permissions, configure defaults
3. [Permissions & Access](/apps/dashboard-charts-jira/permissions-access) - who can view, edit, or export gadgets

---

## Project Manager / Team Lead

You need project-level charts and issue lists on your dashboards.

**Start with:**
1. [How to: Build Your First Dashboard](/apps/dashboard-charts-jira/how-to-first-dashboard) - add your first gadget in under 5 minutes
2. [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) - full chart types and configuration reference
3. [Issue List Gadget](/apps/dashboard-charts-jira/issue-list-gadget-intro) - configurable issue table with smart labels and quick filters

---

## Engineering Manager / Scrum Master

You need sprint velocity charts, carryover tracking, and team workload views.

**Start with:**
1. [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide) - pick the right chart for sprint and velocity data
2. [Calculations Lines](/apps/dashboard-charts-jira/calculations-lines) - add velocity baselines and goal lines to bar charts
3. [Date Range for Custom Charts](/apps/dashboard-charts-jira/date-range-custom-charts) - configure rolling time windows for trend analysis
4. [How to: Build an Executive Delivery Dashboard](/apps/dashboard-charts-jira/how-to-executive-dashboard) - full multi-gadget setup walkthrough

---

## Executive Stakeholder / PMO

You need at-a-glance KPIs and trend charts with no configuration work.

**Start with:**
1. [Templates](/apps/dashboard-charts-jira/templates) - apply a pre-built chart template in one click
2. [How to: Build an Executive Delivery Dashboard](/apps/dashboard-charts-jira/how-to-executive-dashboard) - Executive Delivery Command Center walkthrough
3. [Display Options](/apps/dashboard-charts-jira/display-options) - customise labels, colours, and export settings

---

## Any User - First Time

The fastest path: Add gadget → search **"Custom Charts"** → select **Projects** → set **Chart By = Status** → Save. You have a status pie chart in under 2 minutes.

→ [Quick Start Guide](/apps/dashboard-charts-jira/quick-start)
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `
A single-page reference for gadgets, chart types, data sources, and export formats.

## Three Gadgets at a Glance

| Gadget | Best For | Full Reference |
|---|---|---|
| **Custom Charts** | Pie, bar, line, funnel, tile, table charts | [Custom Charts Gadget](/apps/dashboard-charts-jira/custom-charts-gadget-intro) |
| **Issue List** | Configurable issue tables with smart labels and quick-filter buttons | [Issue List Gadget](/apps/dashboard-charts-jira/issue-list-gadget-intro) |
| **Dynamic Filter Controller** | One shared filter bar that updates all connected gadgets | [Dynamic Filter Controller](/apps/dashboard-charts-jira/dynamic-filter-controller-intro) |

## Chart Types Reference

| Category | Type | Best For |
|---|---|---|
| Pie | Pie Chart | Status breakdowns, issue type mix |
| Bar | Bar | Counts by assignee, component, sprint |
| Bar | Grouped Bar | Compare two dimensions side by side |
| Bar | Stacked Bar | Sprint completion rates by status layer |
| Line | Line | Single-metric trend over time |
| Line | 2D Line | Two metrics compared (e.g., created vs. resolved) |
| Table | Table | Cross-tab report |
| Table | 2D Table | Two-dimensional breakdown matrix |
| Other | Funnel | Workflow stage conversion rates |
| Other | Tile | Single KPI number with colour thresholds |

→ [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide)

## Data Source Options

| Source Type | When to Use |
|---|---|
| **Projects** | Visual picker - good for straightforward project charts |
| **Saved Filter** | Reuse a Jira filter across multiple gadgets |
| **Custom JQL** | Full control - filter by any field, date, or relationship |
| **Dynamic Filter Controller** | Connect the gadget to a shared interactive filter bar |

## Export Formats

| Format | Available On | Use Case |
|---|---|---|
| PNG | Custom Charts, Issue List | Presentations, emails, slide decks |
| PDF | Custom Charts, Issue List | Printable reports |
| CSV | Issue List | Further analysis in Excel / Google Sheets |

> Export must be enabled in [Admin Settings](/apps/dashboard-charts-jira/admin-settings).

## Common JQL Patterns

| Goal | JQL |
|---|---|
| Open issues in project | \`project = X AND resolution is EMPTY\` |
| Current sprint | \`sprint in openSprints()\` |
| Issues created this month | \`created >= startOfMonth()\` |
| High priority unresolved | \`priority in (High, Highest) AND resolution is EMPTY\` |
| Assigned to me | \`assignee = currentUser() AND resolution is EMPTY\` |
`,
        },
        {
          slug: "how-to-first-dashboard",
          title: "How to: Build Your First Dashboard",
          content: `
A step-by-step guide for adding your first three gadgets - a status pie chart, an issue list, and a KPI tile. Links to the full reference for each feature.

## Before You Start

You need edit access to a Jira dashboard. If you don't have one, go to **Jira → Dashboards → Create dashboard**.

## Step 1 - Enter Edit Mode

Open a Jira dashboard → click the **Edit** button (pencil icon, top right) → click **Add gadget**.

## Step 2 - Add a Status Pie Chart

1. Search **"Custom Charts"** → click **Add**
2. Left panel → **Source Type: Projects** → select a project
3. Right panel → **Chart Type: Pie Chart** → **Chart By: Status**
4. Check the live preview - coloured segments per status
5. Click **Save gadget**

→ [Custom Charts Overview](/apps/dashboard-charts-jira/custom-charts-overview) · [Field Segments](/apps/dashboard-charts-jira/field-segments)

## Step 3 - Add an Issue List

1. **Add gadget** → search **"Issue List"** → Add
2. Left panel → same project (or Custom JQL for finer control)
3. Right panel → configure columns: Summary, Assignee, Status, Priority
4. Add a Quick Filter button: label **"Open"**, JQL \`resolution is EMPTY\`
5. Click **Save gadget**

→ [Issue List Guide](/apps/dashboard-charts-jira/issue-list-guide)

## Step 4 - Add a KPI Tile

1. **Add gadget** → **Custom Charts** → Add
2. Same data source
3. Chart Type → **Tile** - shows the total issue count
4. In **Calculations**, set Warning = 50, Critical = 100 (adjust to your volumes)
5. Click **Save gadget**

→ [Calculations Lines](/apps/dashboard-charts-jira/calculations-lines)

## Step 5 - Arrange and Exit

Drag gadgets into your preferred layout. Click **Done** to exit edit mode.

## Next Step

Once you have multiple gadgets, connect them to a Dynamic Filter Controller so one filter updates everything simultaneously.

→ [How to: Connect Gadgets with Dynamic Filter Controller](/apps/dashboard-charts-jira/how-to-dynamic-filter)
`,
        },
        {
          slug: "how-to-executive-dashboard",
          title: "How to: Build an Executive Delivery Dashboard",
          content: `
A full walkthrough for building the Executive Delivery Command Center - a seven-gadget dashboard combining all three gadget types.

## Dashboard Layout Plan

| Row | Gadget | Type | Purpose |
|---|---|---|---|
| 1 - full width | Global Filter | Dynamic Filter Controller | One bar controls all gadgets |
| 2 - left | Total Issues | Custom Charts → Tile | Live KPI count |
| 2 - centre | Issue Distribution | Custom Charts → Pie | Issue type / status mix |
| 2 - right | Delivery Funnel | Custom Charts → Funnel | Workflow stage view |
| 3 - left | Sprint Progress | Custom Charts → Stacked Bar | Sprint completion over time |
| 3 - right | Trend Over Time | Custom Charts → 2D Line | Created vs resolved by week |
| 4 - full width | Active Issues | Issue List | Individual issue detail |

## Step 1 - Add the Dynamic Filter Controller

1. Enter edit mode → **Add gadget** → **Dynamic Filter Controller** → Add
2. Set data source (project or JQL)
3. Add filter fields: Sprint, Assignee, Priority, Issue Type, Status
4. Add preset tabs: **All Issues**, **My Issues**, **Bugs Only**, **This Sprint**
5. Click **Save gadget** - note the **Reference ID** shown on the saved gadget

→ [Dynamic Filter Controller Guide](/apps/dashboard-charts-jira/dynamic-filter-controller-guide)

## Step 2 - Add KPI Tile + Pie + Funnel (Row 2)

For each gadget set **Source Type = Dynamic Filter Controller** → select your controller.

**Tile:** Chart Type → Tile. Calculations: Warning = 50, Critical = 100.

**Pie:** Chart Type → Pie. Chart By → Issue Type.

**Funnel:** Chart Type → Funnel. Chart By → Status. Order: To Do → In Progress → In Review → Done.

→ [Chart Types Guide](/apps/dashboard-charts-jira/chart-types-guide)

## Step 3 - Add Sprint Stacked Bar + 2D Line (Row 3)

**Stacked Bar:** Chart Type → Stacked Bar. Chart By → Sprint (last 6). Group By → Status.

→ [Group By Segments 2D](/apps/dashboard-charts-jira/group-by-segments-2d)

**2D Line:** Chart Type → 2D Line. Chart By → Created (weekly). Second dimension → Resolved (weekly). Date Range → Last 90 days.

→ [Date Range for Custom Charts](/apps/dashboard-charts-jira/date-range-custom-charts)

## Step 4 - Add Issue List (Row 4)

Source: Dynamic Filter Controller. Columns: Key, Summary, Assignee, Status, Priority, Sprint, Updated. Quick Filters: My Issues, Unassigned, High Priority.

→ [Issue List Guide](/apps/dashboard-charts-jira/issue-list-guide)

## Step 5 - Test

Click **Done**. Change filter values in the controller - all gadgets update simultaneously. Switch tabs - all gadgets reflect each preset.
`,
        },
        {
          slug: "how-to-dynamic-filter",
          title: "How to: Connect Gadgets with Dynamic Filter Controller",
          content: `
The Dynamic Filter Controller is a shared interactive filter bar. Any filter selection instantly updates all connected Custom Charts and Issue Lists simultaneously.

→ [Dynamic Filter Controller Intro](/apps/dashboard-charts-jira/dynamic-filter-controller-intro) · [Dynamic Filter Controller Guide](/apps/dashboard-charts-jira/dynamic-filter-controller-guide)

## Step 1 - Add the Controller First

Always add the Dynamic Filter Controller **before** the gadgets you want to connect.

1. Enter edit mode → **Add gadget** → **Dynamic Filter Controller** → Add
2. Set a data source (same project / JQL you'll use on connected gadgets)
3. **Fields tab:** click **+ Add Field** for: Sprint, Assignee, Priority, Issue Type, Status
4. **Tabs:** Add preset views - **All Issues**, **My Issues**, **This Sprint**
5. Click **Save gadget**
6. Note the **Reference ID** shown on the saved gadget

→ [Templates For Dynamic Filter Controller](/apps/dashboard-charts-jira/templates-dynamic-filter-controller)

## Step 2 - Connect a Custom Charts Gadget

1. Add gadget → **Custom Charts** → Add (or edit an existing one)
2. Left panel → **Source Type: Dynamic Filter Controller**
3. Select your controller from the dropdown (identified by Reference ID)
4. Configure chart type, Chart By, Group By as usual
5. Click **Save gadget**

Repeat for every Custom Charts gadget you want connected.

## Step 3 - Connect an Issue List Gadget

1. Add gadget → **Issue List** → Add (or edit existing)
2. Left panel → **Source Type: Dynamic Filter Controller**
3. Select your controller → configure columns and quick filter buttons
4. Click **Save gadget**

## Step 4 - Test

1. Click **Done** to exit edit mode
2. Select a filter value - all connected gadgets must update instantly
3. Click a tab preset - all gadgets must reflect the preset's filter

## Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Gadget not updating | Source Type not set to Dynamic Filter Controller | Edit gadget → change Source Type |
| Controller not in dropdown | Controller and gadget on different dashboards | Must be on the same dashboard |
| Wrong data in gadget | Gadget has a separate JQL overriding the controller | Remove the local JQL from the gadget |
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
Non-obvious tips that make dashboards significantly more useful.

## Data Sources

- **Use Saved Filters for shared dashboards.** A Saved Filter is more maintainable than inline project selection - update the filter once and all gadgets that reference it reflect the change automatically.
- **Use JQL for dynamic conditions.** \`sprint in openSprints()\` and \`created >= startOfMonth()\` give you a living chart without manual updates.
- **Test JQL in the Jira Issue Navigator first.** Confirm it returns the right issues before building a chart on top of it.

## Configuration

- **Import/Export gadget config as JSON.** Right panel → Import/Export tab → Export Configuration. Paste into a new gadget of the same type - much faster than reconfiguring from scratch.
- **Use the Tile chart type for KPI views.** A large-font count with green/amber/red thresholds communicates health at a glance without anyone having to interpret a chart axis.
- **Live Preview updates in real time.** Every settings panel change instantly renders in the centre - no need to save to check how a chart looks.

## Dynamic Filter Controller

- **Add the controller before connecting gadgets.** You need its Reference ID to connect other gadgets. Adding it last forces you to re-edit every gadget to switch the source.
- **One controller per dashboard is usually enough.** All gadgets on the same dashboard can connect to the same controller.

## Performance

- **Start with Result Limit 50 while building.** Raise the limit once the configuration is finalized.
- **Group trend charts by Week for 90+ day windows.** Weekly grouping produces clearer trend lines than 90+ daily data points.

## Exports

- **Export must be enabled in [Admin Settings](/apps/dashboard-charts-jira/admin-settings).** If users report missing export buttons, a Jira admin needs to enable it under Customization Options.
- **Use PNG for presentations, CSV for analysis.** PNG preserves the visual. CSV gives raw numbers to pivot in Excel or Google Sheets.
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
| Pie | Pie Chart |
| Bar | Bar, Grouped Bar, Stacked Bar |
| Line | Line, 2D Line |
| Table | Table, 2D Table |
| Other | Funnel, Tile |

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
| Chart Type | Visual format (pie, bar, line, etc.) |
| Chart By | Main grouping field/segments |
| Group By | Second dimension (for 2D charts) |
| Calculations | Reference lines (goal, trend, average) |
| Display Settings | Visual options and formatting |
| Description | Explanatory text |
| Import/Export | Configuration sharing |

## Quick Reference: Chart Type Selection

| **If You Want To...** | **Use This Chart** |
| --- | --- |
| Show percentages/proportions | Pie |
| Compare values across categories | Bar |
| Compare with sub-categories | Grouped Bar |
| Show composition within categories | Stacked Bar |
| Show trends over time | Line |
| Compare multiple trends | 2D Line |
| Show exact numbers | Table |
| Show a data matrix | 2D Table |
| Show stage progression | Funnel |
| Show single KPIs | Tile |

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
| Pie | Slices |
| Bar | Bars |
| Line | Points on the line |
| Table | Rows |
| Funnel | Funnel stages |
| Tile | Single value |

## Chart By Options

![Chart By Option](/images/dashboard-charts/Custom%20Charts/Field%20Segments/chart-by-option.png)

You have three ways to define segments:

| **Option** | **Description** | **Best For** |
| --- | --- | --- |
| Jira Fields | Group by any Jira field | Simple field-based grouping |
| Custom JQL | Define segments with JQL queries | Complex, custom groupings |
| Saved Filters | Use existing filters as segments | Reusing filter definitions |

## Option 1: Grouping by Jira Fields

Select any Jira field to group your data. Segments are automatically created for each unique value.

### Common Fields

![Common Fields](/images/dashboard-charts/Custom%20Charts/Field%20Segments/common-fields.png)

| **Field** | **Creates Segments For** |
| --- | --- |
| Status | Each workflow status |
| Assignee | Each team member + Unassigned |
| Priority | Highest, High, Medium, Low, Lowest |
| Issue Type | Story, Bug, Task, Epic, etc. |
| Component | Each component in the project |
| Labels | Each label applied to issues |
| Sprint | Each sprint (active, future, closed) |

## Option 2: Grouping by Custom JQL

![Custom JQL Field](/images/dashboard-charts/Custom%20Charts/Field%20Segments/custom-jql-field.png)

Define your own segments using JQL queries. This gives you complete control over how data is grouped.

### Example: Bug Age Groupings

| **Segment Name** | **JQL Condition** |
| --- | --- |
| New (< 7 days) | issuetype = Bug AND created >= -7d |
| Aging (7-30 days) | issuetype = Bug AND created >= -30d AND created < -7d |
| Old (> 30 days) | issuetype = Bug AND created < -30d |

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
| Count (High to Low) | Largest segments first |
| Count (Low to High) | Smallest segments first |
| A to Z | Alphabetical ascending |
| Z to A | Alphabetical descending |
| Custom | Your manual drag order |
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
| Status (3 bars) | Status x Issue Type (3 groups of 3 bars) |
| One data series | Multiple data series |
| Simple comparison | Cross-dimensional analysis |

## Which Charts Support Group By?

| **Chart Type** | **Group By Support** |
| --- | --- |
| Pie | No |
| Bar (1D) | No |
| Grouped Bar | Yes |
| Stacked Bar | Yes |
| Line (1D) | No |
| 2D Line | Yes |
| Table (1D) | No |
| 2D Table | Yes |
| Funnel | No |
| Tile | No |

## How Field By and Group By Work Together

Field By = Rows/Categories (X-axis)

Group By = Columns/Series (multiple bars/lines)

### Grouped Bar Example

![Grouped Bar Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/grouped-bar-eg.png)

| **Setting** | **Value** |
| --- | --- |
| Field By | Status |
| Group By | Issue Type |
| Result | For each status, see separate bars for Stories, Bugs, Tasks side by side |

### Stacked Bar Example

![Stacked Bar Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/stacked-bar-eg.png)

| **Setting** | **Value** |
| --- | --- |
| Field By | Status |
| Group By | Priority |
| Result | Each Status shows priorities stacked in a single bar |

### 2D Table Example

![2D Table Example](/images/dashboard-charts/Custom%20Charts/Group%20By%20Segments%202D/2d-table-eg.png)

| **Setting** | **Value** |
| --- | --- |
| Field By | Priority |
| Group By | Status |
| Result | Matrix with Priority as rows, statuses as columns |

## Common Group By Combinations

| **Purpose** | **Field By** | **Group By** |
| --- | --- | --- |
| Bug vs Story by status | Status | Issue Type |
| Priority mix per sprint | Sprint | Priority |
| Team trends over time | Week | Team |
| Completion by component | Component | Status |
| Work type by person | Assignee | Issue Type |

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
| Count | Number of issues | 25 issues in "To Do" |
| Sum | Total of a numeric field | 150 total Story Points |
| Average | Mean of a numeric field | 6 SP average per issue |

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
| Goal | Fixed target value you set | We want to complete 50 SP per sprint |
| Trend | Calculated trend direction | Are bugs increasing or decreasing? |
| Average | Mean across all segments | Who's above/below average? |

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
| Week 1 | 10 - 10 |
| Week 2 | 15 - 25 |
| Week 3 | 12 - 37 |
| Week 4 | 8 - 45 |

## Which Charts Support Reference Lines?

| **Chart Type** | **Reference Lines** |
| --- | --- |
| Bar | Goal, Trend, Average |
| Grouped Bar | Goal, Trend, Average |
| Stacked Bar | Goal, Trend, Average |
| Line | Goal, Trend, Average |
| 2D Line | Goal, Trend, Average |
| Pie | Not applicable |
| Table | Not applicable |
| Funnel | Not applicable |
| Tile | Not applicable |
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

| Setting | What it does | Default |
| --- | --- | --- |
| Date format | Controls how dates appear in charts/tooltips where dates are shown. | 20 Jan 2021 (DD Mon YYYY) |
| % Places Control | Sets decimal places for percentage values shown in labels/tooltips. | 1 |
| Auto refresh every 10 minute | Refreshes the gadget automatically (primarily useful in View mode). | Off |
| Show options menu button | Shows the chart's options/menu button (for quick actions). | On |
| Export to Png, Pdf & Csv | Enables direct export from the gadget. | On (may be disabled by admin) |

If export is disabled by admin, the toggle will show **"Disabled by admin"** and exports won't be available.

## Pie / Funnel charts (Display Options)

![Pie / Funnel Display Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/pie-funnel-display-options.png)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on Legends name hover | Hover over legend items to see tooltip details. | On |
| Display on hover | What appears on hover: Count, Count / %, %, % / Count. | Count |
| Maximum pie chart diameter | Controls pie size (range: 300-400px). (Pie only) | 300px |
| Y-axis height | Vertical size control (Funnel only) (range: 320-800px). | 350px |

### Labels

![Labels](/images/dashboard-charts/Custom%20Charts/Display%20Options/labels.png)

| Setting | What it does | Default |
| --- | --- | --- |
| Heading | Heading label shown with the chart/legend area. | Blank |
| Count label | Label for count values (ex: "Issues", "Tickets"). | Issues |

### Legend display

![Legends](/images/dashboard-charts/Custom%20Charts/Display%20Options/legends.png)

| Setting | What it does | Default |
| --- | --- | --- |
| Show chart legend | Shows/hides the legend list. | On |
| Show total row | Shows a total row in the legend/table area (where applicable). | On |
| Show number column | Shows the serial/number column in the legend/table area. | On |

**Example (Pie):** If you want quick context without clicking, set **Display on hover = Count / %** and **% Places Control = 1**.

## Bar charts (Bar / Grouped Bar / Stacked Bar)

![Bar Chart Settings](/images/dashboard-charts/Custom%20Charts/Display%20Options/bar-chart-settings.png)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on bar hover | Shows tooltip when hovering a bar. | On |
| Tooltip display | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| Show Count labels above bars | Prints count values above each bar. | On |
| Show zero Count labels above bars | Also shows labels for bars with 0 count. | Off |
| Show % labels above bars | Prints % labels above bars. | Off |
| Show horizontal gridlines | Adds horizontal gridlines for readability. | Off |
| Show Count total under chart | Displays total count below the chart. | On |

### Axis & label

![Axis and Labels](/images/dashboard-charts/Custom%20Charts/Display%20Options/axis-and-labels.png)

| Setting | What it does | Default |
| --- | --- | --- |
| Show y-axis label | Toggles Y-axis label. | On |
| Y-axis label | Custom Y-axis title text. | Issues |
| Show x-axis label | Toggles X-axis label. | On |
| X-axis label | Custom X-axis title text. | Date |
| Y-axis height | Chart height control (range: 320-800px). | 350px |
| Y-axis unit | Shows axis values as Count or %. | Count |

**Example (Bar):** To display distribution instead of raw totals: set **Y-axis unit = %**, enable **Show % labels above bars**, and keep **% Places Control = 1**.

![Bar Distribution Example](/images/dashboard-charts/Custom%20Charts/Display%20Options/bar-distribution-eg.png)

## Line charts (Line / Line 2D)

![Line Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/line-chart-options.png)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on point hover | Shows tooltip when hovering a point. | On |
| Tooltip display | Tooltip format: Count, %, Count (%), % (Count). | Count (%) |
| Show Count labels above points | Prints count values above points. | On |
| Show zero Count labels above points | Shows labels for 0 values. | Off |
| Show % labels above points | Prints % labels above points. | Off |
| Show horizontal gridlines | Adds horizontal gridlines. | Off |
| Show vertical gridlines | Adds vertical gridlines. | Off |
| Show vertical hover line | Shows a vertical guide line on hover. | On |
| Show Count total under chart | Displays total count below the chart. | On |

### Axis & label

| Setting | What it does | Default |
| --- | --- | --- |
| Show y-axis label / Y-axis label | Toggle + text for Y-axis title. | On / Issues |
| Show x-axis label / X-axis label | Toggle + text for X-axis title. | On / Date |
| Y-axis height | Chart height control (range: 320-800px). | 350px |
| Y-axis unit | Axis unit: Count or %. | Count |

## Table charts (Table / Table 2D)

![Table Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/table-chart-options.png)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Show tooltip on hover | Shows tooltip when hovering over values/names. | On |
| Show number column | Adds a serial/number column. | On |
| Show total rows | Adds total row(s) at bottom. | On |
| Limit rows | Limits table rows shown (range: 1-200). | 5 |

### Table 2D only

| Setting | What it does | Default |
| --- | --- | --- |
| Show total column | Adds a total column to the right. | On |
| Display | Chooses how values display: Count, Count / %, %, % / Count. | Count |
| Group By Label | Custom label for the group-by dimension. | Blank |
| Show group by heading label | Shows/hides the group-by heading label. | On |

### Labels

| Setting | What it does | Default |
| --- | --- | --- |
| Heading | Table heading label. | Blank |
| Count label | Column label for count values. | Issues |

**Example (Table):** For clean dashboards, set **Limit rows = 10-20**, enable **Show total rows**, and keep **Display = Count / %** for executive summaries (Table 2D).

## Tile chart

![Tile Chart Options](/images/dashboard-charts/Custom%20Charts/Display%20Options/tile-chart-options.png)

### Chart options

| Setting | What it does | Default |
| --- | --- | --- |
| Max tiles per row | Controls how many tiles appear in one row (range: 1-8). | 5 |
| Limit rows | Controls how many tile rows appear (range: 1-50). | 2 |
| Display | Tile content format: Count, Count / %, %, % / Count, Name only. | Count |
| Show count total | Shows the total count summary (where applicable). | On |
| Show tooltip on name hover | Shows tooltip when hovering tile name. | On |

### Labels

| Setting | What it does | Default |
| --- | --- | --- |
| Heading | Tile section heading label. | Blank |
| Count label | Label for count values. | Issues |
| Show chart by and count labels | Shows/hides footer labels for chart-by + count label. | On |

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
| Chart setup | Chart title, chart type, main field, and group by field when defined in the template. | The basic report layout is created for you. |
| Advanced logic | JQL segments and group-by JQL segments for templates that use comparison or segment-based logic. | Templates can represent more than a simple field chart. |
| Starter labels | Starter labels used by the template where needed. | Users get a readable chart immediately and can refine it later. |

## Template catalog for Custom Charts

![Templates Catalog](/images/dashboard-charts/Custom%20Charts/Templates/templates-catalog.png)

![Read Each Template](/images/dashboard-charts/Custom%20Charts/Templates/read-each-template.png)

| **Template** | **Chart type** | **Main field** | **Group By** | **What it creates** | **Best use** |
| --- | --- | --- | --- | --- | --- |
| Issues by Status | Pie Chart | status | - | Shows how issues are distributed by status. | Good for a fast status breakdown and a simple shareable chart. |
| Issues by Priority | Funnel Chart | priority | - | Shows issue volume by priority in a funnel-style view. | Useful when you want to compare how work is distributed across priority levels. |
| Issues by Issue Type | Line Chart | issuetype | - | Plots issues by issue type in a line-style view. | Useful when you want a lightweight category comparison in a line chart presentation. |
| Issues by Assignee | Bar Chart | assignee | - | Shows how work is distributed across assignees. | Useful for workload distribution or ownership checks. |
| Unresolved Issues | Bar Chart | Custom JQL | - | Creates a JQL-segment chart using the segment "Unresolved" with JQL \`status != Done\`. | Useful when you want a quick unresolved-only starter chart without building a segment manually. |
| Issues by Component | Table Chart | components | - | Builds a table-based summary by component. | Useful when users prefer a tabular view instead of a visual chart. |
| Issues by Labels | Bar Chart | labels | - | Builds a bar chart grouped by issue labels. | Useful for tag-based reporting and theme analysis. |
| Issues by Fix Version | Line Chart | fixVersions | - | Builds a line-style chart by fix version. | Useful for release-oriented reporting. |
| Bug Rate by Sprint | Grouped Bar Chart | sprint | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "Bugs" segment using \`issuetype = Bug\`. | Useful when you want sprint-level comparison with a bug-only grouped slice. |
| Issues by Status per Project | Stacked Bar Chart | status | project | Compares statuses within each project using a stacked bar layout. | Useful for cross-project status comparison in one chart. |
| Issues by Priority per Project | Grouped Bar Chart | priority | project | Compares project-level priority distribution side by side. | Useful for seeing whether one project carries more high-priority work than another. |
| Issues by Type per Assignee | Stacked Bar Chart | issuetype | assignee | Compares issue types within each assignee. | Useful for role mix, work allocation, and team ownership analysis. |
| To Do by Priority | Stacked Bar Chart | priority | Custom JQL (group by segments) | Uses Group By JQL segments and starts with a "TO DO" segment using \`status = 'To Do'\`. | Useful when you want to compare only To Do issues by priority. |
| Epic Progress | Grouped Bar Chart | status | Epic link | Builds a grouped comparison using status within each Epic link. | Useful for epic-level progress review and delivery tracking. |

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
| Date grouping | Controls how dates are bucketed for reporting. | Days, Weeks, Months, Years |
| Date range | Limits which period is included in the chart. | All, Past 7 Days, Past 30 Days, Past 90 Days, This Week, Last Week, This Month, Last Month, This Quarter, Last Quarter, This Year, Last Year, Between dates |
| Custom from / to dates | Appears when Between dates is selected so the user can define an exact window. | Manual date entry |
| Date format | Controls how the final date labels appear to users. | Examples include DD Mon YYYY, Mon DD, YYYY, or YYYY-M-DD |
| Ordering | Keeps date charts in time order instead of alphabetical order. | Chronological by default for date fields |

> **Note:** When a date field is selected, the gadget automatically prefers chronological ordering. This makes trend charts easier to read.

## Date grouping options

| **Grouping option** | **Best use** |
| --- | --- |
| Days | Shows each day as its own point or segment. Best for short time windows and detailed monitoring. |
| Weeks | Groups issues into weekly buckets. Useful for sprint-level and weekly trend reporting. |
| Months | Groups issues by calendar month. Good for management reporting and longer trend views. |
| Years | Groups issues by year. Best for long-term summaries with a broad time span. |

## Date range options

| **Range option** | **When to use it** |
| --- | --- |
| All | Shows all available dates in the result set. |
| Past 24 Hours | Rolling window ending now. Useful for near-real-time activity. |
| Past 3 / 7 / 30 / 90 Days | Rolling time windows for short- or medium-term trend analysis. |
| This Week / Last Week | Calendar-based weekly windows. |
| This Month / Last Month | Calendar-based monthly windows. |
| This Quarter / Last Quarter | Quarter-based reporting windows. |
| This Year / Last Year | Year-based reporting windows. |
| Between dates | Lets the user choose an exact from-date and to-date for a custom report window. |

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
| **Issue List Guide** | *A quick start guide to building your first Table, understanding the configuration tabs, and best practices for visualization.* |
| **Templates For Issue List** | *Ready-made table layouts for common reporting use cases.* |
`,
        },
        {
          slug: "issue-list-guide",
          title: "Issue List Guide",
          content: `The Issue List gadget displays Jira issues in a configurable table format, perfect for status reports, work tracking, and providing quick access to issue details.
          ![The Issue List gadget displays Jira issues in a configurable table format, perfect for status reports, work tracking, and providing quick access to issue details](/images/dashboard-charts/Issue%20List/issue-list-guide.png)

## Overview


| **Feature** | **Description** |
| --- | --- |
| Custom Columns | Add any Jira field as a column |
| Smart Labels | Add indicator badges based on conditions |
| Quick Filters | One-click filter buttons |
| Sorting | Click headers to sort |
| Pagination | Control results per page |
| Export | CSV, PNG, and PDF |

## Columns

### Adding Columns

1. Click "+ Add another field"
2. Search for the field you want
3. Select the field to add it
4. Repeat for additional columns

### Recommended Column Sets

**Sprint Report:** Key, Summary, Status, Assignee, Story Points, Priority

**Bug List:** Key, Summary, Priority, Status, Assignee, Created, Component

### Reordering Columns

Drag columns up or down in the list. The first column appears on the left.

### Renaming Columns

Click the edit (pencil) icon next to a column. Enter the new name.
 
![Rename Columns](/images/dashboard-charts/Issue%20List/issue-list-renaming-columns.png)

## Smart Labels

Smart Labels add special indicator columns that show badges when issues match certain conditions.

### Types of Smart Labels

| **Type** | **How It Works** |
| --- | --- |
| Filter-Based | Shows badge if issue matches a saved filter |
| JQL-Based | Shows badge if issue matches a JQL condition |

![Smart Labels](/images/dashboard-charts/Issue%20List/smart-labels.png)

### Smart Label Examples

| **Label Name** | **JQL Condition** |
| --- | --- |
| Critical | priority = Highest |
| Overdue | duedate < now() AND resolution is EMPTY |
| Blocked | labels = blocked |
| Unassigned | assignee is EMPTY |
| Due Soon | duedate >= now() AND duedate <= 7d |

## Quick Filters

Quick Filters add clickable buttons above the table for instant filtering.

### Quick Filter Ideas

| **Filter Name** | **JQL** |
| --- | --- |
| My Issues | assignee = currentUser() |
| Bugs Only | issuetype = Bug |
| High Priority | priority in (High, Highest) |
| Due This Week | duedate >= startOfWeek() AND duedate <= endOfWeek() |
| Unassigned | assignee is EMPTY |

![Quick Filters](/images/dashboard-charts/Issue%20List/issue-list-quickfilters.png)

### AND vs OR Logic

| **Mode** | **Behavior** |
| --- | --- |
| AND | Issues must match ALL active filters |
| OR | Issues must match ANY active filter |

![AND vs OR](/images/dashboard-charts/Issue%20List/issue-list-AND-OR.png)

## Display Options

| **Option** | **Description** |
| --- | --- |
| Results per page | Show 5, 10, 20, or 50 issues per page |
| Alternating row colors | Striped rows for easier reading |
| Show number column | Row numbers |
| Show timestamps | Time on date fields |
| Show user icons | Avatar images |
| Disable hyperlinks | Turn off clickable links |

![Display Options](/images/dashboard-charts/Issue%20List/issue-list-display-options.png)

## Exporting

### Export Formats

| **Format** | **Use Case** |
| --- | --- |
| Import Export Configuration | Copy and reuse chart configuration easily |
| CSV | Open in Excel, Google Sheets |
| PNG | Image for presentations |
| PDF | Printable document |

![Export Options](/images/dashboard-charts/Issue%20List/issue-list-export-options.png)

> **Tip:** The export includes only currently filtered data. Apply filters first to export exactly what you need.
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
| Title update | The Issue List title is updated to the template name so the table is easy to recognize. |
| Column setup | The template chooses the main columns for that use case, such as Key, Summary, Status, Priority, Assignee, Created, Updated, or Resolved. |
| Sorting | The template applies default sorting so the most important issues appear first. |
| Quick filters | Templates can include one or more quick filters. Some templates include active quick filters by default, while others include optional filters that start inactive. |
| Filter operator | Templates use a filter operator to combine quick filters. In the current built-in catalog, the operator is AND. |
| Issue Type safeguard | If a template does not include Issue Type in its column list, the gadget automatically adds Issue Type so the table keeps a clear type indicator. |

## Built-in Issue List templates

| **Template** | **Best used for** | **Main columns** | **Default sort** |
| --- | --- | --- | --- |
| My Open Issues | Personal work queue | Key, Summary, Status, Priority, Updated, Assignee | Updated newest first |
| Recently Updated Issues | Latest activity tracking | Key, Summary, Status, Assignee, Updated, Project | Updated newest first |
| Unresolved by Priority | Outstanding work by urgency | Priority, Key, Summary, Status, Assignee, Created | Priority high to low, then newest created |
| Team Workload | Work split by assignee | Assignee, Key, Summary, Status, Priority, Due Date | Assignee A-Z, then Priority high to low |
| Reopened Issues | Reopened or bounced-back work | Key, Summary, Status, Priority, Assignee, Updated, Resolved | Updated newest first |
| Blockers List (Release / Sprint) | Release or sprint blockers | Key, Summary, Priority, Status, Assignee, Fix Versions, Updated | Priority high to low, then Updated newest first |
| Recently Resolved (Last 7 days) | Freshly completed work | Key, Summary, Priority, Assignee, Resolved, Created | Resolved newest first |
| High Priority Unassigned (Triage) | Unassigned urgent work needing ownership | Priority, Key, Summary, Status, Project, Created, Updated | Priority high to low, then oldest created first |
| Open Issues (No update in 14 days) | Aging open work | Key, Summary, Status, Assignee, Priority, Updated, Created | Oldest updated first |
| Critical Bugs Open (P1 Bugs) | Highest-risk bug list | Key, Summary, Priority, Status, Assignee, Updated, Created | Updated newest first |
| Delivery Outliers (Recently Resolved, Created Long Ago) | Items resolved recently but created long ago | Key, Summary, Priority, Created, Resolved, Assignee | Resolved newest first, then oldest created first |

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
| **Dynamic Filter Controller Guide** | *A high-level look at shared filtering, real-time updates, Reference IDs, and the core mechanics of the controller.* |
| **Templates For Dynamic Filter Controller** | *Ready-made filter field sets and quick filters for common use cases.* |
`,
        },
        {
          slug: "dynamic-filter-controller-guide",
          title: "Dynamic Filter Controller Guide",
          content: `The Dynamic Filter Controller creates an interactive filter bar that controls multiple charts and lists simultaneously, enabling powerful interactive dashboards.

![Dynamic Filter Controller Guide](/images/dashboard-charts/Dynamic%20FIlter/Dynamic-filter-guide.png)

## Overview

| **Feature** | **Description** |
| --- | --- |
| Shared Filtering | One filter bar controls all connected gadgets |
| Multiple Filter Types | Jira fields, text search, JQL, saved filters |
| Tabs | Preset filter combinations for one-click switching |
| Real-time Updates | Connected gadgets update instantly |
| Reference ID | Unique identifier for connecting gadgets |

## How It Works

1. You set up the filter controller with a base data source and filter fields
2. You connect your charts and lists to this controller
3. Users interact with the filter bar to change what they see
4. All connected gadgets update instantly based on the selected filters

## Setting Up the Controller

### Step 1: Base Data Source

The base data source defines the universe of issues that can be filtered.

![Dynamic Filter Base Data Source](/images/dashboard-charts/Dynamic%20FIlter/Dynamic-Filter-Base-Data-Source.png)

**Example JQL:** \`project = TEAM AND issuetype in (Story, Bug, Task)\`

### Step 2: Adding Filter Fields

Add the fields users can filter by:

1. Go to the Fields tab
2. Click "+ Add Field"
3. Select field type
4. Configure the field
5. Repeat for additional fields

### Filter Field Types

| **Type** | **Description** |
| --- | --- |
| Jira Field | Dropdown for a Jira field (Status, Sprint, etc.) |
| Contains Text | Free-text search box |
| Custom JQL | Advanced JQL input |
| Saved Filter | Toggle a saved filter |

![Dynamic Filter Columns](/images/dashboard-charts/Dynamic%20FIlter/dynmaic-filter-columns.png)

## Configuring Tabs

Tabs are preset filter combinations users can switch between with one click.

### Creating Tabs

1. Go to the Live Preview area
2. Click "+" next to existing tabs
3. A new tab is created
4. Set filter values for this tab
5. Rename the tab by clicking its name

### Tab Examples

| **Tab Name** | **Default Filters** |
| --- | --- |
| All Work | (no filters) |
| My Issues | Assignee = currentUser() |
| Bugs Only | Issue Type = Bug |
| High Priority | Priority = High, Highest |
| This Sprint | This Sprint |

![Dynamic Filter Tab](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-tab-example.png)

## Connecting Gadgets

### How to Connect

1. Edit the Custom Chart or Issue List gadget
2. In Data Source, select "Dynamic Filter Controller"
3. A dropdown appears with available controllers
4. Select your controller (identified by Reference ID)
5. Save the gadget

### Verifying Connections

Click "Show Connected Charts" in the controller to highlight all connected gadgets on the dashboard.

![Verifying Connections](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-verifying-connections.png)

## Display Options

| **Option** | **Description** |
| --- | --- |
| Show Sorting Options | Let users sort connected Issue Lists |
| Allow Add Fields | Users can temporarily add filter fields |
| Show AND/OR Selector | Toggle filter logic |
| Show Options Menu | Menu button visibility |

![Display Options](/images/dashboard-charts/Dynamic%20FIlter/dynamic-filter-display-options.png)

## User Experience

When viewing the dashboard, users can:

* Select values from filter dropdowns
* Type in text search boxes
* Click tabs to switch between preset views
* Click "Search" to apply their filter selections
* Click "Reset" to clear all filters
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
| Active tab fields | The current field list on the active tab is replaced by the template field set. |
| Quick filters | Template quick filters are added as Custom JQL toggle chips. Filters marked active in the template start enabled. |
| Selected projects | The current project selection is reused as a default selection on the active tab. |
| Other tabs | No changes are made to other tabs. |
| Data source | No change. The existing source type and source values remain in place. |
| Gadget layout and display options | No chart-style or admin-setting change is made by templates. |

> **Note:** Some templates use fields such as Sprint, Epic, or Story Points. If those fields are not available in your Jira site or are configured differently, you may need to edit the tab after applying the template.

## Built-in template catalog

| **Template** | **Best for** | **Main filters** | **Default active filter** |
| --- | --- | --- | --- |
| My Work (Daily Driver) | Everyday personal work view | Project, Issue Type, Status, Assignee, Priority, Text | Assignee to me |
| Sprint Control (Scrum) | Sprint planning and sprint tracking | Project, Sprint, Status, Assignee, Issue Type, Text | Current sprint |
| Backlog Grooming | Backlog clean-up and triage | Project, Issue Type, Priority, Assignee, Labels, Components, Text | Backlog only |
| Team Workload (People View) | Balancing work across people | Project, Assignee, Status Category, Priority, Due Date, Text | Assigned only |
| Triage Inbox (New + Unowned) | New work that needs assignment | Project, Issue Type, Priority, Assignee, Created, Components, Text | Unassigned only + Created last 48h |
| Critical Incidents (P1/P2) | Serious incident response | Project, Issue Type, Priority, Status, Assignee, Updated, Text | P1 only |
| Aging Open Issues (Stale Work) | Work that has gone quiet | Project, Status Category, Priority, Assignee, Updated, Text | Open only + No update 14d+ |
| Roadmap Scope (Epic + Work) | Roadmap and epic-level visibility | Project, Epic, Issue Type, Status Category, Assignee, Priority, Text | Not done |
| Dependency & Blockers (Delivery Risk) | Blocked work and linked issue risk | Project, Status, Priority, Assignee, Text | Is blocked |
| QA / Testing Pipeline | Testing handoff and QA tracking | Project, Status, Issue Type, Priority, Assignee, Fix Versions, Text | Bugs only |
| Due Dates & Commitments | Deadline and commitment tracking | Project, Due Date, Status Category, Assignee, Priority, Text | Due this week |
| Customer Escalations / VIP | Escalated or VIP work | Project, Priority, Status, Assignee, Labels, Updated, Text | Escalation |

> **Note:** Dynamic Filter Controller template is a starter pack for one tab. It gives that tab a useful set of fields and quick filters, but it does not rebuild the whole gadget.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. ADMIN SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "admin-settings",
      title: "Admin Settings",
      articles: [
        {
          slug: "admin-settings",
          title: "Admin Settings",
          content: `
Control global app behavior for Custom Charts, Issue List, and Dynamic Filter Controller. Use Admin Settings to manage defaults, feature availability, allowed data sources, and support links for all users in your Jira site.

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

| Tab | What it does | Applies to |
| --- | --- | --- |
| Customization Options | Sets global defaults for export and display formatting. | Custom Chart, Issue List |
| Features | Turns major app features on or off for the whole site. | All gadgets |
| Data Sources | Controls which source types users can select when building gadgets. | Custom Chart, Issue List, Filter Controller links |
| Support | Provides help, training, and documentation links. | All users |

## Customization Options

**This tab controls global defaults.** These values help keep gadget behavior consistent across the site, especially when users create new reports.

### Available settings

| Setting | What it does | Default | Notes |
| --- | --- | --- | --- |
| Allow direct export | Lets users export gadget content directly from the gadget menu. | On | If disabled, export actions should not be available to users. |
| Number format | Controls how large numbers are displayed. | 123,456.78 | Useful for keeping chart and table totals consistent. |
| Decimal places | Sets default decimal precision for percentages and calculated values. | 1 | Applied as the starting value, but users may still change it in gadget settings. |
| Date format | Controls how dates appear in supported gadgets. | 20 Jan 2025 style | Helps standardize date display across reports. |
| Time unit | Controls the default time unit used where supported. | Hours | Relevant for calculations and time-based reporting displays. |

> **Note:** Customization Options are global defaults. They are meant to give users a clean starting point, but they do not replace every gadget-level display setting.

## Features Tab

**This tab controls which major app features are available.** When a feature is disabled, users should see that the feature is unavailable instead of being able to use it normally.

### Feature toggles

| Feature | What happens when enabled | What happens when disabled |
| --- | --- | --- |
| Issue List | Users can create and use Issue List gadgets. | Issue List functionality is blocked for users. |
| Custom Chart | Users can create and use Custom Chart gadgets. | Custom Chart functionality is blocked for users. |
| Dynamic Filter Controller | Users can use the Dynamic Filter Controller gadget. | Controller-based filtering is blocked for users. |
| Templates | Users can open and apply built-in templates in supported gadgets. | Template buttons or template flows should be unavailable. |

## Data Sources

**This tab decides which source types users can choose when configuring gadgets.** It is useful when an admin wants to simplify setup, limit raw JQL usage, or guide users toward approved sources.

### Available source controls

| Source type | What it allows | Used in | If disabled |
| --- | --- | --- | --- |
| Projects | Users can build gadgets from selected Jira projects. | Custom Chart, Issue List | Project source option should not be available. |
| Saved Filters | Users can use saved Jira filters as the source. | Custom Chart, Issue List | Saved filter source option should not be available. |
| Custom JQL | Users can enter their own JQL. | Custom Chart, Issue List, Filter workflows | Raw custom JQL should not be available as a source option. |
| Filter Controller | Users can connect gadgets to a Dynamic Filter Controller. | Custom Chart, Issue List | Controller reference source should not be available. |

## Support Tab

**The Support tab is an information area rather than a control panel.** It provides users with quick access to help resources such as support tickets, training, quick-start material, and documentation links.

* Raise a support ticket.
* Schedule training.
* Open quick-start or documentation resources.
* Direct users to help without leaving the app context.

## How Admin Settings apply in the app

| Area | How settings are used | Important detail |
| --- | --- | --- |
| Custom Chart | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can influence chart setup, but not every chart-specific display option. |
| Issue List | Uses feature flags, source blocking, export control, and formatting defaults. | Admins can control broad behavior, but not every table preference. |
| Dynamic Filter Controller | Uses feature flags and source-related controls. | Formatting defaults are less relevant here than in chart and table gadgets. |
| Templates | Controlled mainly through the global Templates feature toggle. | Admins can enable or disable template access, but cannot manage template content from Admin Settings. |

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

| Jira Data Type | How the App Uses It |
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

| Gadget | Recommended Column Width |
|---|---|
| Custom Charts (Pie, Bar, Line) | 1 or 2 columns |
| Issue List | 2 or 3 columns (wider is better for many columns) |
| Dynamic Filter Controller | Full width (3 columns) or at least 2 columns |

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

| Filter Type | Supported |
|---|---|
| Personal saved filters (My Filters) | Yes |
| Shared filters (visible to you) | Yes |
| Favorite filters | Yes |
| Starred filters | Yes |
| Filters you don't have access to | No - only filters you can view in Jira |

---

## No External Service Integrations

The current version does not natively integrate with:

| Tool | Status |
|---|---|
| Slack | Not supported |
| Microsoft Teams | Not supported |
| Confluence | Not supported |
| Google Sheets / Excel | Not supported (use CSV export instead) |
| BI tools (Tableau, Power BI) | Not supported (use CSV export instead) |
| Jira Server / Data Center | Not supported |

> **Workaround for BI tools:** Use the CSV export feature to download issue data, then import it into your preferred BI or spreadsheet tool.

---

## Platform & Security

| Aspect | Detail |
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

| Included | Not Included |
|---|---|
| Chart type | Jira issue data |
| Chart By field and segments | Jira project settings |
| Group By field | Dashboard layout |
| Display Options | User access permissions |
| Quick filters (Issue List) | Dynamic Filter Controller connections |
| Smart Labels (Issue List) | |
| Reference lines (Custom Charts) | |
| Gadget title and description | |

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

| Config Element | Transfers? | Notes |
|---|---|---|
| Chart type | Yes | |
| Chart By - Jira standard fields | Usually yes | Field must exist on target instance |
| Chart By - Custom JQL segments | Usually yes | JQL field names must be valid on target |
| Display Options | Yes | |
| Smart Labels | Usually yes | JQL conditions must be valid on target |
| Quick Filters | Usually yes | JQL conditions must be valid on target |
| Chart title / description | Yes | |
| Data source selection | **No** | Must be re-selected manually |
| Custom field references | **Verify** | Custom field names must match on target |

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

| Limitation | Detail |
|---|---|
| No bulk export | Configurations must be exported one gadget at a time |
| No dashboard-level export | Jira does not support exporting a full dashboard including gadget configs |
| Controller connections not exported | Linked chart-to-controller relationships must be re-established manually after import |
| Data source not exported | Project, filter, or JQL selections must be re-entered after import |
| App uninstall deletes all configs | There is no recovery after uninstall if configurations were not exported first |
`,
        },
      ],
    },
  ],
};
