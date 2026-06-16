export const reportsChartsConfluenceDocs = {
  appSlug: "reports-charts-confluence",
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-reports-charts",
          title: "What is Reports & Charts for Confluence?",
          sideVideo: {
            src: "https://www.youtube.com/embed/oD5evunAQok",
            title:
              "Reports, Charts, Templates, CQL & Export for Confluence - Product Overview",
          },
          content: `
What Reports, Charts, Templates, CQL & Export for Confluence is and what it can do for you.

Reports, Charts, Templates, CQL & Export for Confluence is a macro-based reporting app that lets you build live, dynamic reports inside Confluence pages - without scripts or external tools.

<!--VIDEO_BREAK-->

## Key Capabilities

| **Capability** | **Description** |
| --- | --- |
| Data Source Selection | Spaces drill-down (visual) or Custom CQL (query-based) for flexible content targeting |
| Metadata Loading | Load expansion groups to make fields available for columns, filters, and charts |
| Display Options | Table, List, Paragraph, Grid, or Charts - choose the format that fits your audience |
| Columns & Filters | Define what data fields appear and refine which records are shown |
| Templates | 35 pre-built tabular + 17 chart templates for instant setup |
| Import / Export | Share report setups as JSON recipes across teams and spaces |
| Raw View | Inspect underlying JSON data and metadata structure for debugging |
| Explore | Discover available metadata fields with types and sample values |
| Live Preview | See changes instantly as you configure - no save needed |
| Export | Download report data as CSV or JSON for offline analysis |
| Result Limit + Pagination | Control dataset size and navigate large reports efficiently |

## Who Is It For?

- **Confluence page authors** who need live, up-to-date reporting without leaving Confluence
- **Space administrators** who want governance dashboards and content audits
- **Team leads and managers** who need activity summaries and contributor tracking
- **Non-technical users** who prefer visual configuration over scripting or external tools

## What Makes It Powerful

* No coding required - visual, user-friendly configuration interface
* Live & dynamic - reports update automatically as Confluence content changes
* Flexible - multiple views and extensive customization options
* Shareable - reuse and standardize configurations across teams and spaces
* Permission-aware - respects Confluence access rights
* Efficient - built-in pagination and result limits for performance

## Platform

Confluence Cloud only. Installed as a Confluence macro app via the Atlassian Marketplace - no external servers, no data exports, no infrastructure to maintain.`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `5 step-by-step tutorials covering every feature - click any video to start watching, or use the arrows to go through them in order. New to the app? Start with the [Product Introduction](/apps/reports-charts-confluence/what-is-reports-charts) first.`,
          videoGallery: {
            playlistUrl:
              "https://www.youtube.com/watch?v=zTSl0fVYVVA&list=PLACoCS_WiVwT1Rkz4Z29xzo8jQbkx9OZX",
            videos: [
              {
                id: "zTSl0fVYVVA",
                title: "App Overview, Data Sources & CQL Editor",
              },
              {
                id: "sDyyDFBX-hE",
                title: "Expression Panel, Columns & Block Types",
              },
              { id: "z3z7i2VWwBI", title: "Report Layouts & Charts" },
              {
                id: "46zsIYO6r5A",
                title: "Filtering, Explore Mode and Raw JSON",
              },
              {
                id: "DXGIXkgv8uQ",
                title: "Templates, Import/Export and Save to Confluence",
              },
            ],
          },
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
Install Reports, Charts, Templates, CQL & Export for Confluence from the Atlassian Marketplace in a few steps - no servers, no configuration files, no infrastructure required.

## Prerequisites

Before installing, confirm you have:

| **Requirement** | **Detail** |
| --- | --- |
| Confluence Cloud site | The app supports Confluence Cloud only (not Data Center or Server) |
| Space Admin or Site Admin role | Required to install apps from the Marketplace |
| Atlassian account | Required to accept app permissions during installation |

## Step-by-Step Installation

### Step 1 - Open Confluence Apps

1. Log in to your Confluence Cloud site.
2. Click the **Apps** menu in the top navigation bar.
3. Select **Find new apps** from the dropdown.

### Step 2 - Search for the App

1. In the Atlassian Marketplace search bar, type: \`Reports, Charts, Templates, CQL & Export for Confluence\`
2. Locate the app published by **Clovity** in the search results.
3. Click the app listing to open the detail page.

### Step 3 - Install the App

1. Click the **Try it free** or **Buy now** button on the Marketplace listing.
2. Review the app permissions - the app requires read access to Confluence content (spaces, pages, attachments, users) to build reports.
3. Click **Accept & install** to confirm.
4. Wait for the installation to complete - this typically takes under 30 seconds.

### Step 4 - Verify Installation

1. Open any Confluence page and click **Edit**.
2. In the editor, type \`/\` to open the macro insert menu.
3. Search for **Reports** - you should see the macro appear in the results.
4. If the macro appears, installation was successful.

## After Installation

Once installed, the app is available to all users on your Confluence Cloud site. No additional configuration is required to start using the macro - simply insert it on any page.

| **Next Step** | **Where to Go** |
| --- | --- |
| Build your first report | See [Quick Start Guide](/apps/reports-charts-confluence/quick-start) |
| Understand permissions | See [Permissions & Access](/apps/reports-charts-confluence/permissions-access) |
| Explore all features | See [Features](/apps/reports-charts-confluence/features-intro) |

## Troubleshooting Installation

| **Issue** | **Solution** |
| --- | --- |
| App not appearing in macro menu | Wait a few minutes and refresh - Confluence may cache the macro list |
| Permission denied during install | Confirm you have Space Admin or Site Admin role on the site |
| App not found in Marketplace | Try searching just "Reports Charts Clovity" or browse by category |
| Installation fails | Check your Atlassian Cloud subscription level and try again |`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
Build your first report in under 5 minutes. Follow these four steps.

## Step 1 - Open the Macro Editor

1. Open any Confluence page and click the **Edit** button.
2. Type \`/\` to open the macro insert menu.
3. Search for **Reports, Charts, Templates, CQL & Export for Confluence** and click to insert.
4. The macro editor opens automatically.
 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_1.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 


## Step 2 - Configure the Report

### Choose Your Data Source

Select **Spaces** (recommended for beginners) or **Custom CQL** from the Source dropdown in the header. Specify your source value - select spaces or enter a CQL query.


 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_2.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_3.png"
    alt="Configure Report"
    style=" border-radius:12px;"
  />
 

### Select a View

Choose **Table** from the Report Type dropdown. Table view is easiest to understand for first-time users. Other options: List, Paragraph, Grid, Charts.

<img 
  src="/images/global/reports-charts-confluence/quick-start-guide/img_4.png"
  alt="Configure Report"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
/>

### Add Expansions

In the left panel, select metadata groups. Load only the metadata you need. Common starting point: **metadata** and **version** - these cover most common fields.
 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_5.png"
    alt="Configure Report"
    style=" border-radius:12px;"
  />
 

### Define Columns

Navigate to the **Columns** tab in the right panel. Click **+ Add New Column**, set a label, and pick a data field. Apply formatting as needed.
 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_6.png"
    alt="Configure Report"
    style=" border-radius:12px;"
  />
 

### Apply Filters

In the center panel, use the Filter section to narrow results. Each filter row narrows results further (AND logic). Click **+ Add filter** to add a row. Use Delete (trash) to remove, or **Clear all** to reset.
 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_7.png"
    alt="Configure Report"
    style=" border-radius:12px;"
  />
 

### Set Result Limit

Set an appropriate limit in the header or right panel (e.g., 50, 100, 500). Start with 50 for faster testing.

 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_8.png"
    alt="Configure Report"
    style=" border-radius:12px;"
  />
 

## Step 3 - Confirm Results in Live Preview

The center panel shows your report results in real-time. Verify data looks correct before saving. Adjust configuration if needed.

 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_9.png"
    alt="Configure Report"
    style=" border-radius:12px;"
  />
 

## Step 4 - Save

Click **Save** to publish the report to your Confluence page. The macro editor closes and your live report appears on the page.
 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_10.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

 
  <img 
    src="/images/global/reports-charts-confluence/quick-start-guide/img_11.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Quick Start Tips

* Start with a pre-built template for faster setup - navigate to the **Templates** tab first
* Use Table view for your first report - it is the easiest to understand
* Load minimal expansions initially, add more as needed
* Check Live Preview frequently to validate changes

## What's Next?

| **Topic** | **Where to Go** |
| --- | --- |
| Data source options | [Data Source](/apps/reports-charts-confluence/data-source) |
| Understanding expansions | [Expansions](/apps/reports-charts-confluence/expansions) |
| All view types | [Report Views](/apps/reports-charts-confluence/report-views) |
| Columns and filters | [Columns & Filters](/apps/reports-charts-confluence/columns-filters) |
| Pre-built templates | [Templates & Import/Export](/apps/reports-charts-confluence/templates-import-export) |`,
        },
        {
          slug: "system-requirements",
          title: "System Requirements",
          content: `
Reports, Charts, Templates, CQL & Export for Confluence is a Confluence Cloud macro app. Review the requirements below before installing.

## Platform Requirements

| **Requirement** | **Supported** | **Not Supported** |
| --- | --- | --- |
| Confluence Cloud | Yes - fully supported | - |
| Confluence Data Center | No | Data Center is not supported |
| Confluence Server | No | Server (on-premise) is not supported |
| Jira Cloud | No - this is a Confluence app | Jira is a separate product |

> **Important:** This app is Confluence Cloud exclusive. If you are on Confluence Data Center or Server, this app will not be available in your Marketplace.

## Browser Requirements

The app works in all modern, evergreen browsers. No browser extensions or plugins are required.

| **Browser** | **Support** |
| --- | --- |
| Google Chrome (latest) | Fully supported |
| Mozilla Firefox (latest) | Fully supported |
| Microsoft Edge (latest, Chromium-based) | Fully supported |
| Apple Safari (latest) | Fully supported |
| Internet Explorer | Not supported |

For best performance, use the latest stable version of your preferred browser.

## Confluence Subscription

| **Confluence Plan** | **App Available?** |
| --- | --- |
| Confluence Cloud Free | Available (subject to Marketplace free trial) |
| Confluence Cloud Standard | Fully supported |
| Confluence Cloud Premium | Fully supported |
| Confluence Cloud Enterprise | Fully supported |

## User Permissions Required

| **Action** | **Minimum Permission Required** |
| --- | --- |
| Install the app | Space Admin or Site Admin |
| Insert the macro on a page | Edit permission on the Confluence page |
| View a report (published page) | Read permission on the Confluence page and its spaces |
| Configure macro settings | Edit permission on the page containing the macro |

## Data & Privacy

* All report data is fetched live from your Confluence Cloud instance at render time
* No report data is stored outside of Atlassian infrastructure
* The app respects all Confluence content permissions - users only see content they are authorized to access
* Compatible with Atlassian data residency settings`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
Reports, Charts, Templates, CQL & Export for Confluence uses Confluence's native permission model. No additional permission management is required - the app works within your existing Confluence access controls.

## Installation Permissions

| **Role** | **Can Install App?** |
| --- | --- |
| Confluence Site Admin | Yes |
| Confluence Space Admin | Yes (via Manage Apps in Confluence settings) |
| Regular Confluence user | No - must request install from an admin |

## Macro Usage Permissions

Once the app is installed, any Confluence user with page edit access can insert the macro.

| **Action** | **Who Can Do It** |
| --- | --- |
| Insert the macro on a page | Any user with Edit permission on that page |
| Configure the macro (open editor) | Any user with Edit permission on that page |
| View a published report | Any user with Read permission on the page |
| Export report data (CSV/JSON) | Any user who can view the published report |

## How Report Data Visibility Works

Reports, Charts, Templates, CQL & Export for Confluence fully respects Confluence content restrictions. The data returned in a report is always scoped to what the **viewing user** is permitted to access.

| **Scenario** | **Result** |
| --- | --- |
| Viewer has access to all queried spaces | Full results displayed |
| Viewer has access to only some spaces | Only permitted content appears |
| Viewer has no access to a space | That space's content is excluded entirely |
| Page has content restrictions | Restricted pages are excluded from results |

> **Important:** Two users viewing the same report on the same page may see different results - each sees only the content they are authorized to access.

## Confluence Groups & Conditional Visibility

If you need to show different reports to different user groups (e.g., admins vs. contributors), use Confluence's native **Page Restrictions** or **Space Permissions** to control who can view which page. There is no app-level group configuration required.

### Recommended Setup for Role-Based Reporting

1. Create separate Confluence pages for different audiences (e.g., an admin dashboard page, a contributor overview page).
2. Apply Confluence page restrictions to limit who can view each page.
3. Insert the appropriate report macro on each page.
4. Each user group sees only the report page they are permitted to access.

## No Admin Panel Required

The app has no separate admin panel or settings screen. All configuration is done directly in the macro editor on each Confluence page - no special admin access is needed to configure reports.`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. USER GUIDE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `
Reports, Charts, Templates, CQL & Export for Confluence is a macro that embeds live reports directly into Confluence pages - pulling data from your Confluence spaces using CQL (Confluence Query Language). Use this guide to find the fastest path for your role.

## Space Administrator / Confluence Admin

You manage spaces and want governance reports and content audits.

**Start with:**
1. [Installation & Setup](/apps/reports-charts-confluence/installation-setup) - install from Atlassian Marketplace
2. [How to: Build a Space Governance Report](/apps/reports-charts-confluence/how-to-space-audit) - stale content, orphan pages, restrictions audit
3. [Templates](/apps/reports-charts-confluence/templates-import-export) - apply a pre-built report in one click (35 tabular + 17 chart templates)
4. [Export Formats Guide](/apps/reports-charts-confluence/export) - CSV and JSON export for compliance reporting

---

## Content Author / Technical Writer

You want to embed structured content listings and summaries inside Confluence pages.

**Start with:**
1. [Quick Start Guide](/apps/reports-charts-confluence/quick-start) - embed your first report in under 5 minutes
2. [Table View](/apps/reports-charts-confluence/table-view) - the default report format for content lists
3. [Columns & Filters](/apps/reports-charts-confluence/columns-filters) - choose which fields to show and how to filter results
4. [How to: Create a Stakeholder Content Dashboard](/apps/reports-charts-confluence/how-to-content-dashboard) - page inventory with charts

---

## IT Governance / Compliance Team

You need audit reports for content restrictions, attachment storage, and contributor activity.

**Start with:**
1. [Custom Tabular Report](/apps/reports-charts-confluence/custom-tabular-report-intro) - build an audit report from CQL
2. [Data Source](/apps/reports-charts-confluence/data-source) - use Custom CQL for targeted queries
3. [Export](/apps/reports-charts-confluence/export) - export findings as CSV or JSON for compliance records
4. [How to: Build a Space Governance Report](/apps/reports-charts-confluence/how-to-space-audit) - full governance workflow

---

## Executive / PMO

You want visibility into documentation coverage, contributor activity, and content health.

**Start with:**
1. [Custom Charts Report](/apps/reports-charts-confluence/custom-charts-report-intro) - pie, bar, and line charts from Confluence metadata
2. [Chart Types](/apps/reports-charts-confluence/chart-types) - pick the right chart for contributor rankings and content trends
3. [How to: Create a Stakeholder Content Dashboard](/apps/reports-charts-confluence/how-to-content-dashboard) - live dashboard with charts and tables
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `
A single-page reference for report types, CQL patterns, column block types, and export formats.

## Report Types at a Glance

| Report Type | Best For | Full Reference |
|---|---|---|
| **Table** | Sortable page inventory with configurable columns | [Table View](/apps/reports-charts-confluence/table-view) |
| **List** | Clean reading-order content list | [List View](/apps/reports-charts-confluence/list-view) |
| **Grid** | Card-layout visual content browser | [Grid View](/apps/reports-charts-confluence/grid-view) |
| **Paragraph** | Prose-style content summaries | [Paragraph View](/apps/reports-charts-confluence/paragraph-view) |
| **Charts** | Pie, bar, line - visualise metadata distributions | [Chart Overview](/apps/reports-charts-confluence/chart-overview) |

## Data Source Options

| Source | How to Use |
|---|---|
| **Spaces** | Visual drill-down picker - select a space or page hierarchy |
| **Custom CQL** | Type a CQL query for full control over what content is included |

## Common CQL Patterns

| Goal | CQL |
|---|---|
| All pages in a space | \`space = "SPACENAME" AND type = page\` |
| Stale pages (not updated in 90 days) | \`type = page AND lastmodified < now("-90d")\` |
| Pages with a specific label | \`label = "decision" AND type = page\` |
| Recently created content | \`type = page AND created >= now("-30d")\` |
| Title contains keyword | \`type = page AND title ~ "Release Notes"\` |
| Pages with restrictions | \`type = page AND ancestor = "PAGE_ID"\` |
| Blog posts in a space | \`space = "SPACENAME" AND type = blogpost\` |

## Column Block Types

| Block Type | Use Case |
|---|---|
| Basic | Plain text field value |
| Link | Clickable link (field value + URL field) |
| Image | Thumbnail from a URL field |
| Collection | Array/list field (e.g., labels, contributors) |
| Regex | Extract part of a field value using a pattern |
| Text | Static text or combined field values |

→ [Columns & Filters](/apps/reports-charts-confluence/columns-filters)

## Export Formats

| Format | Available On | Use Case |
|---|---|---|
| CSV | Table, List | Spreadsheet analysis (Excel, Google Sheets) |
| JSON | All report types | Developer processing, full API payload |

## Settings Panel Tabs

| Tab | Purpose |
|---|---|
| Columns | Define which fields to show and how to format them |
| Templates | Browse and apply 35 tabular + 17 chart pre-built templates |
| Import | Paste a JSON recipe to recreate a full report configuration |
| Raw | Inspect raw Confluence API JSON for debugging field paths |

→ [Macro Editor UI Tour](/apps/reports-charts-confluence/macro-editor-ui-tour)
`,
        },
        {
          slug: "how-to-space-audit",
          title: "How to: Build a Space Governance Report",
          content: `
A step-by-step workflow for building a governance-focused content audit report - covering stale pages, orphaned content, contributors, and restrictions. Each step links to the relevant reference documentation.

## Step 1 - Open the Macro Editor

1. Open or create a Confluence page in edit mode
2. Type \`/\` → search **Reports** → click the macro to insert it
3. The macro editor opens with Header, Left Panel, Center Panel, and Right Panel

→ [Macro Editor UI Tour](/apps/reports-charts-confluence/macro-editor-ui-tour)

## Step 2 - Set Data Source

In the **Header**, set **Data Source** to **Custom CQL** and enter:

\`\`\`
space = "YOUR_SPACE_KEY" AND type = page
\`\`\`

Replace \`YOUR_SPACE_KEY\` with your actual space key (visible in the URL: \`/wiki/spaces/KEY/...\`).

Set **Result Limit** to **200** initially.

→ [Data Source](/apps/reports-charts-confluence/data-source)

## Step 3 - Load Expansions

In the **Left Panel**, check these expansion groups:
- **version** - gets last modified date and author
- **metadata** - gets labels and restrictions
- **history** - gets contributor data

→ [Expansions](/apps/reports-charts-confluence/expansions)

## Step 4 - Configure Columns

In the **Right Panel → Columns tab**, click **+ Add New Column** for each:

| Column Label | Block Type | Data Value |
|---|---|---|
| Page Title | Link | title / _links.webui |
| Last Modified | Basic | version.when |
| Last Author | Basic | version.by.displayName |
| Created | Basic | history.createdDate |
| Created By | Basic | history.createdBy.displayName |
| Labels | Collection | metadata.labels.results[].name |

→ [Columns & Filters](/apps/reports-charts-confluence/columns-filters)

## Step 5 - Apply Stale Content Filter

In the **Center Panel → Filter** section, click **+ Add filter**:

- Operator: **Less than**
- Property: **Last Modified date**
- Value: \`now("-90d")\`

This filters to pages not updated in the last 90 days.

## Step 6 - Switch to Chart View for Summary

In the **Header**, change **Report Type** to **Charts**:

- Chart Type: **Bar**
- Group By: **Last Author** (shows who owns stale content)
- Metric: **Count**

This surfaces which owners have the most stale pages.

→ [Chart Configuration](/apps/reports-charts-confluence/chart-configuration)

## Step 7 - Export and Share

1. Set **Report Type** back to **Table**
2. Set **Result Limit** to **1000** for a full export
3. Click **Export** → **CSV** in the Center Panel
4. Open in Excel or Google Sheets - sort by Last Modified to identify oldest pages

→ [Export](/apps/reports-charts-confluence/export)

## Step 8 - Save the Report

Click **Save** in the Header. Publish the Confluence page. The report updates live each time the page is viewed - no manual refresh needed.

> **Tip:** Use the **Import** tab to copy the JSON recipe and recreate this report in other spaces by pasting it.
`,
        },
        {
          slug: "how-to-content-dashboard",
          title: "How to: Create a Stakeholder Content Dashboard",
          content: `
A workflow for building a Confluence page that shows executives and PMO leaders a live overview of documentation health - page counts, contributor activity, content growth trends, and top contributors.

## Dashboard Structure

\`\`\`
Content Dashboard Page
├── Row 1: KPI tiles (Total Pages, New This Month, Stale Pages)
├── Row 2: Pie chart (Content by type) + Bar chart (Top contributors)
└── Row 3: Table (Recently updated pages)
\`\`\`

## Step 1 - Total Pages KPI

1. Insert the Reports macro → Header: Data Source = Spaces, select your space, Report Type = **Table**
2. Left Panel: load **version** expansion
3. Right Panel → Columns: add **Page Title** (Link type)
4. Set Result Limit to **1000**
5. Save. This table is your base - you'll convert it to a chart next

→ For a count-only tile, use the **Charts** report type with Chart Type = **Pie**, Group By = **Space** (shows total in one slice).

## Step 2 - Content Type Breakdown Pie Chart

1. Insert a second Reports macro
2. Data Source: Custom CQL → \`space = "KEY" AND type in (page, blogpost)\`
3. Report Type: **Charts** → Chart Type: **Pie** → Group By: **Content Type**
4. Save - shows the mix of pages vs blog posts

→ [Chart Types](/apps/reports-charts-confluence/chart-types)

## Step 3 - Top Contributors Bar Chart

1. Insert another Reports macro
2. Data Source: Custom CQL → \`space = "KEY" AND type = page AND lastmodified >= now("-30d")\`
3. Left Panel: load **version** expansion
4. Report Type: **Charts** → Chart Type: **Bar** → Group By: **Last Author (version.by.displayName)**
5. Save - shows who updated the most pages this month

## Step 4 - Recently Updated Pages Table

1. Insert a final Reports macro
2. Data Source: Custom CQL → \`space = "KEY" AND type = page ORDER BY lastmodified DESC\`
3. Left Panel: load **version** expansion
4. Report Type: **Table**
5. Columns: Page Title (Link), Last Modified, Last Author, Created By
6. Result Limit: **20** (most recent 20 pages)
7. Save

→ [Table View](/apps/reports-charts-confluence/table-view)

## Step 5 - Arrange and Publish

1. Use Confluence **columns layout** (two- or three-column) to arrange the macros side by side
2. Add headings above each report section: "Content Overview", "Top Contributors", "Recent Updates"
3. Publish the page

The page is now a live dashboard - all reports update automatically when the page is viewed.

→ [Templates](/apps/reports-charts-confluence/templates-import-export) - use the **Top Contributors** and **Recently Updated Pages** pre-built templates instead of configuring from scratch
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
Non-obvious tips that save time and prevent common configuration mistakes.

## CQL Queries

- **Test CQL in the Confluence search bar first.** Go to Confluence → Search → switch to Advanced search → enter your CQL. If it returns the right results there, it will work in the macro.
- **Use \`now("-Nd")\` for rolling time windows.** \`lastmodified < now("-90d")\` always means "90 days ago from now" - no hardcoded dates that become stale.
- **Spaces mode is for quick setup; CQL is for precision.** Spaces mode pulls everything in a space. CQL lets you filter by content type, date, label, title, and more. Switch to CQL as soon as you need more than one filter condition.

## Columns and Expansions

- **Only load the expansions you actually use.** Each expansion group adds API call overhead. Loading all expansions when you only need \`version.when\` slows down the report.
- **Use the Explore panel to find field paths.** Click **Explore** in the Center Panel to browse all available fields with sample values. Copy the exact path (e.g., \`version.by.displayName\`) into your column Data Value. This is faster than guessing.
- **Use Raw View when a column shows blank.** Right Panel → Raw tab → search for the field name. If it's missing in the raw JSON, the expansion isn't loaded or the field doesn't exist for that content type.

## Templates

- **Apply a template first, then customise.** Templates pre-configure source, expansions, columns, and filters. Start from a template baseline and adjust - faster than starting blank.
- **Unlock a template before editing.** Templates are locked by default. Click the **Edit (lock)** icon in the Center Panel to unlock. Unlocked templates become custom reports and won't receive future template updates.

## Export

- **Raise Result Limit before exporting.** The default is 50. Set it to 500 or 1000 before clicking Export → CSV to get a full data set.
- **JSON export contains ALL fields, not just your configured columns.** This is useful for discovering new fields or passing the raw data to a developer for processing.
- **Share report configurations as JSON recipes.** Right Panel → Import tab → Copy JSON. Share the recipe on a "Report Library" page - teammates paste it into the macro editor to recreate the exact same report in seconds.

## Performance

- **Set a sensible Result Limit.** Loading 10,000 pages on every page view creates unnecessary load. Use filters to narrow results, then set the limit to match the filtered count.
- **Use Chart view for large datasets.** A bar chart summarising 5,000 pages by author loads faster and communicates more clearly than a 5,000-row table.
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
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Reports_Charts_Templates_CQL_and_Export_for_Confluence_User_Guide_776974cfef.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 2. CUSTOM TABULAR REPORT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "custom-tabular-report",
      title: "Custom Tabular Report",
      articles: [
        {
          slug: "custom-tabular-report-intro",
          title: "Custom Tabular Report",
          content: `Four flexible layouts - Table, List, Grid, and Paragraph

| **Subpage** | **What you will find** |
| --- | --- |
| Tabular Overview | When to use each view and how to choose the right one |
| Table View | Spreadsheet-style rows and columns - the primary report type |
| List View | One card per record - clean, human-readable output |
| Grid View | Responsive card grid - visual dashboards and directories |
| Paragraph View | Prose-style output - digests, summaries, newsletters |
| Templates | All 35 pre-built tabular templates listed and described |`,
        },
        {
          slug: "tabular-overview",
          title: "Tabular Overview",
          content: `Custom Tabular Report lets you display Confluence data in four flexible layouts - Table, List, Grid, and Paragraph. Each view is suited to a different audience and purpose, all powered by the same underlying data source and column configuration.

 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Available Views

| **View** | **Layout Style** | **Best For** | **Supports Pagination** |
| --- | --- | --- | --- |
| Table | Rows and columns - spreadsheet-style | Audits, governance, structured data comparison | Yes |
| List | One card per record - vertical list | Page indexes, team directories, readable inventories | Yes |
| Grid | Card tiles in a responsive grid | Visual dashboards, profile directories, galleries | Yes |
| Paragraph | Flowing prose - one block per record | Weekly digests, executive summaries, narrative reports | No |

## What All Views Share

* Same data source - Spaces drill-down or Custom CQL
* Same expansions - load once, all views use the same metadata
* Same column configuration - Columns tab applies across Table, List, Grid, and Paragraph
* Same filters - filter rows apply to all tabular views
* Live Preview - switch between views instantly in the macro editor
* Result Limit + Pagination - control dataset size in all views

## How to Choose the Right View

| **If you want to...** | **Use This View** |
| --- | --- |
| Compare multiple fields side by side across many records | Table |
| Show a clean, readable list where each item stands alone | List |
| Present visual cards with images - like a team directory or gallery | Grid |
| Create a narrative summary - readable prose, not a data table | Paragraph |

## Switching Between Views

1. Open the macro editor.
2. Change the Report Type dropdown in the header.
3. Live Preview updates instantly - no data reload needed.
4. Save when satisfied with the selected view.

**Note:** Charts (Bar, Pie, Line) are configured separately in the Custom Charts Report section and use a different axis/series configuration.`,
        },
        {
          slug: "table-view",
          title: "Table View",
          content: `Table view displays Confluence data in rows and columns - a familiar spreadsheet-style layout. It is the primary and most versatile report type in Reports, Charts, Templates, CQL & Export for Confluence.

 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img_1.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Column headers | Defined by your Columns tab - label, block type, and source field |
| Sortable columns | Click any header to sort ascending or descending |
| Inline search | Filter visible rows by keyword - no data reload |
| CSV export | Download all visible columns and filtered data as a spreadsheet |
| JSON export | Full data structure download for developers or integrations |
| Pagination | Navigate large datasets with Previous/Next and page numbers |
| Result Limit | Control how many rows appear per page |
| All 6 block types | Basic, Image, Link, Collection, Regex, Text - all supported |

## Column Block Types in Table View

| **Block Type** | **What It Renders** | **Common Table Use Case** |
| --- | --- | --- |
| Basic | Plain text or number | Page ID, version number, space key, status |
| Image | Inline image (size adjustable) | Profile picture of last editor, page thumbnail |
| Link | Clickable hyperlink | Page title linking to the Confluence page |
| Collection | Array/list joined by separator | Labels as comma-separated list, contributors |
| Regex | Extracted or transformed text via pattern | Extracting version number from a title |
| Text | Formatted text with prefix, suffix, truncation, fallback | Truncated excerpt, 'N/A' fallback for empty fields |

## Configuring Table View

1. Set Report Type to **Table** in the header dropdown.
2. Load required expansions in the left panel.
3. Open the **Columns** tab in the right panel.
4. Click **+ Add New Column** - set Label, Block Type, and Source Field.
5. Reorder columns by dragging the handle icon.
6. Apply filters in the center panel to narrow results.
7. Set Result Limit in the header.
8. Review in Live Preview, then Save.

## Export from Table View

| **Format** | **How to Access** | **Best For** |
| --- | --- | --- |
| CSV | Export button → CSV | Excel, Google Sheets, stakeholder sharing |
| JSON | Export button → JSON | Developer use, API integrations |
| Config Recipe | Import tab → Copy JSON | Share report setup with team |

**Best for:** Content audits, governance reports, compliance tracking, contributor tracking, stale content review, and any report that benefits from side-by-side field comparison.`,
        },
        {
          slug: "list-view",
          title: "List View",
          content: `List view shows each Confluence content item as a single card in a clean vertical list. It is ideal for creating readable, human-friendly output - like a page index, task list, or simple directory.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img_2.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Card-based layout | Each record occupies its own row as a standalone card |
| Field labels inline | Column labels shown next to values for easy reading |
| Image block support | Profile pictures or thumbnails render prominently in each card |
| Link block support | Card titles or fields can be clickable links |
| Pagination | Navigate large lists with Previous/Next controls |
| Inline search | Filter visible items by keyword |

## When to Use List View

* Team or people directories - one card per person with name, role, profile picture
* Task or action item lists - clean one-item-per-row layout
* Content indexes - quick overview of pages with key metadata
* Simple space inventories - lightweight listing without heavy table formatting
* Anywhere a table feels too dense - List gives more breathing room per record

## Configuring List View

1. Set Report Type to **List** in the header dropdown.
2. Load required expansions in the left panel.
3. Open the **Columns** tab - configure columns the same way as Table view.
4. Use Image block for profile pictures or thumbnails.
5. Use Link block for clickable page titles or URLs.
6. Apply filters and set Result Limit as needed.
7. Review in Live Preview, then Save.

**Best for:** Team directories, task lists, content indexes - anywhere each record should stand out as a single readable item rather than a row in a dense table.`,
        },
        {
          slug: "grid-view",
          title: "Grid View",
          content: `Grid view displays each Confluence content item as a visual card in a responsive multi-column grid. It is ideal for dashboards, team directories with profile photos, and any report where visual browsing is more important than data comparison.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img_3.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Responsive grid layout | Cards arrange in multiple columns and adapt to page width |
| Image block - prominent | Images render as the card's visual focus (e.g. profile photo, thumbnail) |
| Link block | Card title or image can be a clickable link to the Confluence page |
| Pagination | Navigate large grids with Previous/Next controls |
| Inline search | Filter visible cards by keyword |
| All column types supported | Basic, Image, Link, Collection, Regex, Text |

## When to Use Grid View

* Team / people directories - profile photo + name + role in each card
* Visual content galleries - page thumbnails or attachment images
* Portfolio dashboards - visual showcase of projects or deliverables
* Topic hubs - cards for each topic area with a preview image and link
* Anywhere a visual, browsable layout is better than a row-based table

## Configuring Grid View

1. Set Report Type to **Grid** in the header dropdown.
2. Load history expansion for profile picture fields.
3. Open the **Columns** tab - add Image block as the first column for visual cards.
4. Add Link block for the card title - set it to link to the Confluence page.
5. Add Basic or Text block columns for supporting metadata (role, space, date).
6. Apply filters and set Result Limit.
7. Review in Live Preview, then Save.

**Best for:** Team directories with profile photos, visual page catalogs, portfolio dashboards - any report where visual browsing matters more than side-by-side data comparison.`,
        },
        {
          slug: "paragraph-view",
          title: "Paragraph View",
          content: `Paragraph view converts each Confluence content item into a readable text block - prose-style output instead of a table. It is ideal for narrative summaries, weekly digests, executive reports, and any context where readable text matters more than structured data.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img_4.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Key Features

| **Feature** | **Description** |
| --- | --- |
| Prose output | Each record becomes a readable paragraph, not a table row |
| Column concatenation | Column values are joined together to form sentences |
| Prefix & Suffix (Text block) | Add connecting words before/after field values to build natural sentences |
| Fallback values | Show a default text when a field is empty |
| No pagination | All records rendered sequentially as continuous text |
| Inline search | Filter visible paragraphs by keyword |

## When to Use Paragraph View

* Weekly content digest - narrative summary of recent created/updated pages
* Executive summaries - readable output for non-technical stakeholders
* Newsletter-style reporting - blog posts or announcements in prose format
* Change log summaries - each update described in a sentence
* Anywhere a table feels too technical - Paragraph makes data human-readable

## How to Build Readable Sentences

Use the Text block type with Prefix and Suffix settings to construct natural-language sentences from field values.

| **Column** | **Block Type** | **Prefix** | **Source Field** | **Suffix** | **Result** |
| --- | --- | --- | --- | --- | --- |
| 1 | Link | - | title → _links.webui | - | Clickable page title |
| 2 | Text | was last updated by | version.by.displayName | - | ...was last updated by John |
| 3 | Text | on | version.when | . | ...on 12 Feb 2026. |

## Configuring Paragraph View

1. Set Report Type to **Paragraph** in the header dropdown.
2. Load required expansions in the left panel.
3. Open the **Columns** tab - add columns in the order they should appear in the sentence.
4. Use Text block type - set Prefix and Suffix to add connective words.
5. Set fallback values on Text blocks so empty fields show meaningful defaults.
6. Apply filters and set Result Limit.
7. Review in Live Preview - read the output as a human would.
8. Save to your Confluence page.

**Best for:** Weekly digests, executive summaries, newsletter-style reports, change logs - any audience that prefers reading over scanning a data table.`,
        },
        {
          slug: "tabular-templates",
          title: "Templates",
          content: `Pre-built templates provide ready-to-use report configurations for common use cases. Templates save time and ensure consistent reporting patterns. All 35 templates are listed below in order.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img_5.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## How to Apply a Template

1. Open the macro editor on any Confluence page.
2. Navigate to the **Templates** tab in the right panel.
3. Search by name or browse the list.
4. Click a template - it auto-configures the entire report.
5. Review results in Live Preview.
6. Customize columns or filters if needed.
7. Click **Save** to publish to your Confluence page.

## Available Pre-built Templates

| **#** | **Template Name** | **What It Shows** | **Objective** | **Best For** |
| --- | --- | --- | --- | --- |
| 1 | Pages grouped by selected labels | Pages filtered by chosen labels, showing page title + labels list | Quickly find and review all pages tagged with important labels | Governance for 'urgent/critical' pages, label cleanup, topic-based content tracking |
| 2 | Page last update details | Each page with last editor and last edited date | Track ownership and most recent activity per page | Audit 'who changed what', stale content review, accountability reporting |
| 3 | All comments with resolution status | Comments (inline + normal) with resolution status, author, modified date, excerpt | Track discussion items and unresolved feedback across Confluence | Review unresolved inline comments, discussion follow-ups, moderation/audit |
| 4 | Blog posts overview | Table of blog posts with title + excerpt/summary | Quick overview of announcements/news posts | Company news digest, blog library, communications tracking |
| 5 | Pages matching title keyword | Pages whose title contains a keyword (e.g., 'project') | Discover related pages without knowing exact names | Find 'Release Notes', 'Project', 'Design', 'Meeting Notes' pages fast |
| 6 | Recently updated content across spaces | Latest modified pages/blogs across all spaces with space + last modified | Monitor recent activity globally | Weekly admin audit, adoption tracking, activity dashboards |
| 7 | Content created by me | All pages/blogs/comments created by current user with type, contributors, excerpt | Personal contribution inventory | Performance reporting, personal dashboard, self-audit of work |
| 8 | Pages updated this year | Pages modified after start of year + contributors | Measure this year's documentation activity | Annual reporting, review top active areas, contributor visibility |
| 9 | Pages authored by me | Only pages created by current user, sorted by last modified + title | Personal page library and maintenance list | Clean up old pages you own, maintain your content set |
| 10 | Page likes in current space | Pages in current space with like count | Identify popular/high-value pages | Highlight best docs, measure engagement, identify key references |
| 11 | Attachments and images in current space | Attachments list with file name, parent page, file size, image preview | Audit attachments usage and storage | Storage cleanup, find large files, media inventory |
| 12 | My recently updated pages | Pages last modified by current user with updated time | Track your latest edits | Daily/weekly work recap, 'what did I touch recently' |
| 13 | Child pages with contributors and last editor | Child pages under current page with last editor, last modified, contributors | Manage a page tree with clear ownership/activity | Documentation hub maintenance, section owners, navigation governance |
| 14 | Recently updated pages across all spaces | Pages sorted by last modified with space + friendly update time | Global page activity feed | Admin monitoring, knowledge base activity reporting |
| 15 | Pages created in last 3 months | Pages created in last 12 weeks + last modified | Identify new content for review | Onboarding content review, new documentation QA, growth tracking |
| 16 | Pages created this year | Pages created since start of year with created date | Measure content growth (new pages) | Annual documentation growth metrics, team output reporting |
| 17 | Page creation vs last update timeline | Pages with both created date and latest update date | Understand lifecycle - fresh vs long-lived pages | Staleness analysis, maintenance planning, governance insights |
| 18 | Pages by space and creator | Pages with space + original creator | Ownership tracking across spaces | Identify responsible teams/users, transfer ownership, audits |
| 19 | Labels used in current space | Pages in current space + their labels | Label governance and taxonomy review | Standardize labels, remove duplicates, find untagged content |
| 20 | Child pages of the current page | Child pages list with excerpt | Create quick index/summary of a section | Documentation landing pages, structured navigation, hub pages |
| 21 | Recently created pages | Pages sorted by creation date (newest first) + created date | Spotlight newly created documentation | New content review queue, onboarding 'what's new' |
| 22 | Pages Updated By a Specific User | Pages with last updated by + last updated date (version fields) | Track updates by a user (or team) for accountability | Reviewer workflow, contributor reports, audit trail |
| 23 | Attachments Overview with Metadata | Table report of attachments with key metadata | Audit and manage files easily | Clean storage, find large/old files, track uploads |
| 24 | Stale Pages – Detailed View | Pages not modified in 40+ days with space info, created/creator, last modified/modifier, page link | Full stale-content audit with enough fields to take action | Cleanup campaigns, compliance reviews, maintenance scheduling |
| 25 | Content Created in Date Range | Content with type + created date + author | Report content created within a defined period | Monthly/quarterly reporting, content production tracking |
| 26 | Attachments Coverage Summary | Pages with attachment counts and attachment paging metadata + link | Understand attachment coverage per page | Identify pages with heavy attachments, storage governance |
| 27 | Owner vs Last Editor | Pages showing creator (owner) vs last updater + last updated time | Compare ownership vs active editors | Ownership reassignment, accountability checks, audit reporting |
| 28 | Pages – IDs & ARIs | Pages with content ID, ARI, base64 ARI, type | Provide internal identifiers for integrations/debugging | API troubleshooting, migration scripts, support diagnostics |
| 29 | Space & Page Status Audit | Pages with space type/status + page status + page link | Governance view for cleanup and standardization | Space lifecycle audits, ensure pages/spaces are 'current', compliance |
| 30 | Pages – Link Formats Overview | Shows API link, standard web link, and short link for pages | Help users choose correct link format for sharing/integration | Documentation linking standards, automation/webhook references |
| 31 | Blog Posts – Older than 30 Days | Blog posts created >30 days ago with space + last updated | Review older blogs for archival/cleanup | Content hygiene, outdated announcements review |
| 32 | Content – Everything Except Pages | All content items where type != page (blogs, attachments, comments, etc.) | Audit non-page content across instance | Storage cleanup, attachment audits, content-type governance |
| 33 | Blog Posts – Updated This Year | Blog posts modified since start of year with last updated + space key | Track active blog/news activity this year | Communications KPI, yearly reporting, stakeholder updates |
| 34 | Weekly Updated Pages | Pages updated in last 7 days with space + last updated + excerpt | Weekly activity snapshot | Weekly digest, team status reporting, 'what changed' |
| 35 | Today Updated Pages | Pages updated in last 24 hours with space + last updated + excerpt | Daily change tracker | Daily standups, release/change monitoring, fast review queue |
 
  <img 
    src="/images/global/reports-charts-confluence/custom-tabular-report/img_6.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Template Benefits

| **Benefit** | **What It Means** |
| --- | --- |
| Quick start | Ready-to-use configurations - zero manual setup needed |
| Best practices | Proven report structures for the most common use cases |
| Consistency | Standardized reporting patterns across teams and spaces |
| Customizable | Use as a starting point - add, remove, or reorder columns freely after applying |
| Unlockable | Templates are locked by default - click Edit in the center panel to modify |

**Tip:** After applying a template, click the Edit button in the center panel to unlock it - then customize columns, filters, or data source to fit your exact needs.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 3. CUSTOM CHARTS REPORT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "custom-charts-report",
      title: "Custom Charts Report",
      articles: [
        {
          slug: "custom-charts-report-intro",
          title: "Custom Charts Report",
          content: `Turn Confluence content into visual insights - Bar, Pie, and Line charts

| **Subpage** | **What you will find** |
| --- | --- |
| Chart Overview | How charts work and how they are configured |
| Chart Types | Bar, Pie, and Line - when to use each |
| Chart Configuration | Step-by-step chart configuration and common patterns |
| Chart Templates | All 17 pre-built chart templates listed and described |`,
        },
        {
          slug: "chart-overview",
          title: "Chart Overview",
          content: `Reports, Charts, Templates, CQL & Export for Confluence Charts view turns Confluence content into visual insights by grouping results and applying a metric - so you can spot trends, activity, and distribution at a glance.

## What Charts Do

Charts group your Confluence data (by Space, Type, Author, Date, etc.) and apply a metric - usually Count - to produce a visual summary. Charts answer questions like 'How many pages per space?' or 'How has content grown month by month?'

## Available Chart Types

| **Chart Type** | **Best For** | **Example Use Case** |
| --- | --- | --- |
| Bar Chart | Comparing quantities across categories | Pages per space, top editors, label usage |
| Pie Chart | Understanding composition or distribution | Content type mix, likes vs no likes |
| Line Chart | Tracking change or trends over time | Pages created over time, daily updates |

## How Charts Are Configured

Charts use a separate configuration from tabular column settings. Key settings include:

* Group By - the field used to bucket/categorize data (e.g., Space, Author, Type, Month)
* Metric - what to measure per group (usually Count)
* Chart Type - Bar, Pie, or Line
* Series - optional secondary grouping for stacked charts

## When to Use Charts

* Activity dashboards - page creation trends, update frequency
* Governance insights - content distribution by space or type
* Contributor visibility - who creates or edits the most
* Engagement reporting - comment and like trends
* Storage audit - attachments by space or file type

**Tip:** Use Chart Templates in the Templates tab for instant chart setup - 17 pre-built chart configurations are ready to use.`,
        },
        {
          slug: "chart-types",
          title: "Chart Types",
          content: `Reports, Charts, Templates, CQL & Export for Confluence supports three chart types, each suited to different data and insights.

## Bar Chart

Compares grouped values using horizontal or vertical bars. Best for comparing quantities across distinct categories.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-charts-report/img.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

### Best For

* Pages per space - compare space sizes by page volume
* Top editors - rank users by update count
* Label usage - see which labels are most/least used
* Active spaces ranking - most updated spaces in a period

### Variants

* Simple bar - one bar per group (single metric)
* Stacked bar - bars broken into sub-segments by a secondary grouping (e.g., pages vs blogs per space)

## Pie Chart

Shows distribution as slices of a whole. Best for understanding composition or percentage split of content.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-charts-report/img_1.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

### Best For

* Content type mix - page vs blog vs comment share
* Likes distribution - liked vs not liked
* Status distribution - current vs archived
* Attachment file type breakdown - PDF vs PNG vs DOCX

## Line Chart

Shows change over time using a connected line. Best for tracking growth, trends, or activity spikes across a time axis.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-charts-report/img_2.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

### Best For

* Pages created over time - track content growth by month
* Pages updated over time - track maintenance activity
* Daily page activity by space - spot adoption or project spikes
* Comments trend - measure discussion engagement over time
* Blog publishing cadence - communications activity trend

## Choosing the Right Chart

| **Question to Answer** | **Recommended Chart** |
| --- | --- |
| How many [X] per [category]? | Bar Chart |
| What is the split/composition of [X]? | Pie Chart |
| How has [X] changed over time? | Line Chart |
| Who are the top [contributors/editors]? | Bar Chart |
| Which spaces are most/least active? | Bar Chart |
| What percentage is [type A] vs [type B]? | Pie Chart |`,
        },
        {
          slug: "chart-configuration",
          title: "Chart Configuration",
          content: `Charts are configured separately from tabular columns via the Charts section in the macro editor.

## Configuration Settings

| **Setting** | **Description** | **Example Values** |
| --- | --- | --- |
| Chart Type | Bar, Pie, or Line | Bar Chart |
| Group By | The field to bucket/categorize data | Space, Author, Type, Month, Day |
| Metric | What to measure per group | Count (most common) |
| Series | Optional secondary grouping for stacked charts | Type (page vs blog) |

## How to Configure a Chart

1. Set Report Type to **Charts** in the header dropdown.
2. Select Chart Type - Bar, Pie, or Line.
3. Set Group By - pick the field to categorize data (e.g., Space, Author, Month).
4. Set Metric - typically Count.
5. Optionally set a Series for stacked bar charts.
6. Load required expansions so the Group By field is available.
7. Review in Live Preview - chart renders in real-time.
8. Adjust filters to narrow the dataset if needed.

## Common Configuration Patterns

### Pages per Space (Bar)

* Group By: Space
* Metric: Count
* Chart Type: Bar

### Content Type Distribution (Pie)

* Group By: Type
* Metric: Count
* Chart Type: Pie

### Monthly Content Growth (Line)

* Group By: Month (createdDate)
* Metric: Count
* Chart Type: Line

### Pages by Space and Type (Stacked Bar)

* Group By: Space
* Series: Type
* Metric: Count
* Chart Type: Bar

## Troubleshooting Charts

| **Problem** | **Check** |
| --- | --- |
| Chart shows no data | Dataset too small or over-filtered - remove a filter and try again |
| Group By field is empty | Required expansion not loaded - add expansion for that field |
| Unexpected chart results | Verify Group By field type is suitable for aggregation |
| Date axis not working | Ensure date field is from a loaded expansion |`,
        },
        {
          slug: "chart-templates",
          title: "Chart Templates",
          content: `Reports, Charts, Templates, CQL & Export for Confluence includes 17 pre-built chart templates. Each one is ready to use - just select, review in Live Preview, and save.
 
  <img 
    src="/images/global/reports-charts-confluence/custom-charts-report/img_3.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

| **#** | **Template Name** | **Chart Type** | **Groups By** | **Use Case** |
| --- | --- | --- | --- | --- |
| 1 | Pages by space and content type | Bar (Stacked) | Space + Type | Compare pages vs blogs per space |
| 2 | Creator contributions by space | Bar (Stacked) | Creator + Space | Identify top content creators per space |
| 3 | Blog posts by space and author | Bar (Stacked) | Space + Author | See who publishes blogs and where |
| 4 | Overall content type distribution | Pie | Type | Understand content mix across instance |
| 5 | Daily page activity by space | Line | Day + Space | Track daily update trends per space |
| 6 | Total pages per space | Bar | Space | Compare space sizes by page volume |
| 7 | Most active spaces (last 30 days) | Bar | Space | Rank spaces by recent activity |
| 8 | Comments by space | Bar | Space | Measure discussion intensity per space |
| 9 | Comments by author | Bar | Author | Identify top commenters |
| 10 | Pages created over time | Line | Month (createdDate) | Track content growth trend |
| 11 | Pages updated over time | Line | Month (lastUpdated) | Track update cadence (maintenance) |
| 12 | Attachments by space | Bar | Space | Compare file usage across spaces |
| 13 | Attachments by file type | Pie | mediaType | Understand file format distribution |
| 14 | Blog posts over time | Line | Month (createdDate) | Track publishing frequency trend |
| 15 | Top page editors | Bar | Last Editor | Identify most active editors |
| 16 | Overall content growth summary | Line | Month + Type | Compare pages vs blogs growth trend |
| 17 | Comments over time | Line | Month (createdDate) | Track discussion volume trend |

## Quick-Start Guide

1. Open macro editor → navigate to **Templates** tab.
2. Search 'chart' or scroll to chart templates.
3. Click a template - it auto-configures source, expansions, chart type, and group settings.
4. Review in Live Preview.
5. Adjust filters or result limit if needed.
6. Save to your Confluence page.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 4. FEATURES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "features",
      title: "Features",
      articles: [
        {
          slug: "features-intro",
          title: "Features",
          content: `Advanced tools built into the macro editor

| **Subpage** | **What you will find** |
| --- | --- |
| Data Source | Spaces drill-down vs Custom CQL - when to use each |
| Expansions | What expansions are, how to load them, and best practices |
| Report Views | Overview of Table, List, Grid, Paragraph, and Chart views |
| Columns & Filters | Block types, column setup, filter operators and logic |
| Templates & Import/Export | Pre-built templates, JSON recipes, and export options |
| Macro Editor UI Tour | Visual walkthrough of every panel and tab in the macro editor |
| Live Preview | How and when the preview updates as you configure |
| Raw View | Inspect the JSON returned by Confluence and find exact field paths |
| Explore | Discover all available metadata fields with types and sample values |
| Export | Download report data as CSV or JSON |
| Edit Lock/Unlock | How template locking works and how to unlock for editing |
| Result Limit | Control dataset size and optimize report performance |`,
        },
        {
          slug: "data-source",
          title: "Data Source",
          content: `Reports, Charts, Templates, CQL & Export for Confluence supports two ways to fetch Confluence content. Select from the Data Source dropdown in the macro editor header.

## Option A - Spaces (Drill-down)

Best for browse-based, simple reporting. No syntax required - ideal for non-technical users.

### Capabilities

* Select one or more Spaces - choose from all available Confluence spaces
* Select specific Pages - drill down to individual pages within selected spaces
* Multi-select - select multiple spaces and pages simultaneously
* Include Children - automatically includes all child/descendant pages under selected pages
* Visual navigation - browse through space hierarchy like a file explorer
* Search functionality - find spaces and pages by name quickly

### Limits

| **Limit** | **Value** | **Reason** |
| --- | --- | --- |
| Space Selection Limit | Up to 15 spaces | Ensures optimal system performance |
| Page Selection Limit | Up to 25 pages | Maintains report performance |

### When to Use Spaces

* Simple, straightforward reporting on known spaces
* Non-technical users who prefer visual selection over queries
* Selecting content from specific pages or documentation sections
* Quick setup without writing queries
* Content selection based on space organization

 
  <img 
    src="/images/global/reports-charts-confluence/features/img.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
 

## Option B - Custom CQL

Confluence Query Language (CQL) gives you precise, rules-based control. Best for dynamic queries that update automatically as content changes.

  <img 
    src="/images/global/reports-charts-confluence/features/img_1.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

### What CQL Can Target

* Space and content type
* Labels, creator, last modifier
* Title keyword matching
* Created and updated date windows
* Multiple combined criteria

### Example CQL Queries

**Recently updated (last 30 days):** type = page AND lastmodified >= now("-30d")

**Title contains keyword:** type = page AND title ~ "Release Notes"

**Pages in a specific space:** space = "ENG" AND type = page

**Pages with a label:** label = "decision" AND type = page

### When to Use CQL

* Dynamic, rules-based selection that updates automatically
* Filtering by metadata - labels, dates, creators, status
* Complex criteria spanning multiple spaces
* Automated reports that grow with new content
* Users familiar with CQL syntax

## Side-by-Side Comparison

| **Feature** | **Spaces (Drill-down)** | **Custom CQL** |
| --- | --- | --- |
| Ease of use | Visual, no syntax required | Requires CQL knowledge |
| Dynamic updates | Fixed selection | Fully dynamic |
| Cross-space queries | Up to 15 spaces | Unlimited |
| Child page inclusion | Include Children toggle | Use CQL descendants() |
| Technical level | Non-technical users | Technical users |
| Best for | Quick, targeted reports | Complex, automated reports |`,
        },
        {
          slug: "expansions",
          title: "Expansions",
          content: `Expansions control what metadata fields are loaded. Columns, filters, and charts all depend on the expansions you select.

## What Are Expansions?

Expansions are metadata groups that load additional field data for each content item in your report. Without loading the right expansion, a column or filter using that field will return empty values.

  <img 
    src="/images/global/reports-charts-confluence/features/img_2.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Expansion Categories

| **Category** | **Fields Available** |
| --- | --- |
| Structure | ancestors, children, descendants, container |
| Body & Metadata | body, metadata, operations, restrictions, version |
| History | contributors, lastUpdated, previousVersion, nextVersion, ownedBy |

## How to Use Expansions

1. Open the macro editor - the Left Panel shows expansion groups.
2. Use the Search box to find a specific field by name.
3. Check the checkbox next to any group to load its fields.
4. Fields immediately become available for column, filter, and chart configuration.
5. Star (pin) frequently used fields to keep them at the top.

## Best Practices

* Load only what you need - each additional expansion adds fields but also increases data load time
* Use the Search box in the expansions panel to find fields quickly
* Use Favorites to pin commonly used expansions for faster access
* Remove unused expansions before saving to optimize report performance
* Use Explore (center panel) to discover what fields are available after loading expansions

**Blank column values?** If a column shows empty values, the required expansion is probably not loaded. Use Raw View to confirm the field path, then load the matching expansion.`,
        },
        {
          slug: "report-views",
          title: "Report Views",
          content: `Reports, Charts, Templates, CQL & Export for Confluence supports five display formats. Choose the view that best matches how you want to present your data.

| **View** | **Description** | **Best For** | **Pagination** |
| --- | --- | --- | --- |
| Table | Rows and columns - spreadsheet-style layout | Audits, governance, structured data | Yes |
| List | One card/row per record - simple vertical list | Page indexes, quick inventories | Yes |
| Paragraph | Flowing prose - each record becomes a text block | Weekly digests, executive summaries | No |
| Grid | Card layout in a responsive grid | Team directories, visual dashboards | Yes |
| Charts | Bar, pie, or line charts | Trend analysis, distribution insights | No |

  <img 
    src="/images/global/reports-charts-confluence/features/img_3.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Table View

The default and most versatile view. Displays data in rows and columns. Best for comparing values across multiple fields.

### Key Features

* Column headers defined by your Columns tab configuration
* Sortable columns - click header to sort ascending/descending
* Pagination - control result limit and navigate pages
* CSV and JSON export available

## List View

Shows results as a simple vertical list - one item per row, minimal layout. Ideal for readable, human-friendly output.

### Key Features

* Card-based layout - each record occupies its own row
* Field labels shown inline for readability
* Supports Image block - great for profile pictures or thumbnails
* Link block creates clickable items directly in the list
* Pagination supported

## Paragraph View

Renders output as flowing prose. Each record generates a paragraph using your column template. Ideal for status updates, summaries, and narrative reports.

### Key Features

* Prose output - reads as natural text, not a table
* Columns act as text segments that are concatenated
* Prefix and suffix settings (Text block type) add connective words
* No pagination - all records rendered sequentially

## Grid View

Displays records as a responsive card grid - like a gallery. Ideal for visual content, team directories with photos, or dashboard-style pages.

### Key Features

* Responsive multi-column grid layout
* Image block renders prominently in each card
* Link block makes card titles or images clickable
* Pagination supported

## Charts View

Visualizes data with bar, pie, or line charts. Configured separately via the Charts section. Use when you want analytics and trends rather than raw records.

## Switching Between Views

Change the Report Type from the dropdown in the header. The Live Preview updates instantly - no data reload needed.

**Note:** Column configuration is shared across Table, List, Paragraph, and Grid views. Charts use a separate axis/series configuration.`,
        },
        {
          slug: "columns-filters",
          title: "Columns & Filters",
          content: `Columns define what data appears in your report. Filters refine which records are shown.

  <img 
    src="/images/global/reports-charts-confluence/features/img_4.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Configuring Columns

Each column has three required settings: Column Label, Block Type, and Data Value (JSON path from loaded expansions).

## Block Types

| **Block Type** | **Description** | **Use Cases** |
| --- | --- | --- |
| Basic | Standard text/numeric display | Names, IDs, dates, simple metadata |
| Image | Displays images from URLs. Size adjustable with slider (shows px dimensions) | Profile pictures, thumbnails, logos |
| Link | Creates clickable hyperlinks. Combines link text + URL from different fields | Page titles linking to pages, URLs |
| Collection | Handles array/list data. Custom joiners: comma, pipe, newline, etc. | Labels, contributors, tags |
| Regex | Applies regex patterns to extract or transform data | Extracting patterns, data cleanup |
| Text | Enhanced display with prefix/suffix, truncation, case, fallback values | Formatted output, truncated titles |

  <img 
    src="/images/global/reports-charts-confluence/features/img_5.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Column Actions

| **Action** | **Description** |
| --- | --- |
| Add Column | Click '+ Add New Column' to create a new column |
| Edit Column | Modify label, block type, source field, or formatting inline |
| Delete Column | Remove a column using the trash icon |
| Drag & Drop Reorder | Drag the handle icon to change column display order |
| Duplicate Column | Copy an existing column configuration - saves setup time for similar columns |
| Hide Column | Temporarily remove from display without deleting - configuration is preserved |

## Applying Filters

Filters refine which records appear in the preview. They run top-to-bottom with AND logic - each row further narrows results.

  <img 
    src="/images/global/reports-charts-confluence/features/img_6.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

### Each Filter Row Has 3 Parts

| **Part** | **Description** | **Examples** |
| --- | --- | --- |
| Operator | How to compare the value | Contains, Equals, >, <, >=, <=, Starts With, Ends With, Regex, Is Empty, Advanced |
| Property | The field to filter on | Title, Space, Created Date, Last Modified, Created By, Content Type |
| Value / Query | What to compare against | "Release Notes", "DEV", currentUser() |

### How to Fill a Filter Row

1. Pick Operator
2. Choose the Property
3. Enter the Value / Query

Preview updates using the full stack of filters, top to bottom.

## Full Operator Reference

| **Operator** | **Description** | **Example** |
| --- | --- | --- |
| Contains | Field includes the value | Title contains 'Project' |
| Not Contains | Field excludes the value | Title not contains 'Draft' |
| Equals | Exact match | Type equals 'page' |
| Not Equals | Any value except this | Status not equals 'archived' |
| Starts With | Field begins with value | Title starts with 'Release' |
| Ends With | Field ends with value | Title ends with '2024' |
| Greater Than (>) | Numeric/date comparison | Version > 5 |
| Less Than (<) | Numeric/date comparison | Like count < 10 |
| Greater or Equal (>=) | Numeric/date comparison | Created >= 2024-01-01 |
| Less or Equal (<=) | Numeric/date comparison | Like count <= 100 |
| Is Empty | Field has no value | Labels is empty |
| Is Not Empty | Field has a value | Last modified is not empty |
| Regex | Pattern matching | Title matches /Release/ |
| Advanced | Custom expression | Complex multi-field expressions |`,
        },
        {
          slug: "templates-import-export",
          title: "Templates & Import/Export",
          content: `Use pre-built templates for instant setup, or share report configurations as JSON recipes across your team.

## Pre-built Templates Overview

Reports, Charts, Templates, CQL & Export for Confluence includes 35 tabular templates and 17 chart templates - ready-to-use configurations for the most common reporting scenarios. Templates save time and ensure consistent reporting patterns.

  <img 
    src="/images/global/reports-charts-confluence/features/img_7.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

### How to Use Templates

1. Open the macro editor.
2. Navigate to the **Templates** tab in the right panel.
3. Search or browse to find a template.
4. Select a template - it auto-configures source, expansions, columns, filters, and view.
5. Customize as needed.
6. Review in Live Preview.
7. Save to your Confluence page.

### Benefits

* Quick start - ready-to-use configurations with zero setup
* Best practices - proven report structures for common use cases
* Consistency - standardized reporting across teams
* Customizable - use as starting points and modify as needed

## Import - Recreate from JSON Recipe

Use Import to recreate any report from a JSON configuration recipe - instantly rebuilds the full setup including source, expansions, columns, filters, and view.

  <img 
    src="/images/global/reports-charts-confluence/features/img_8.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

### How to Import

1. Navigate to the **Import** tab in the right panel.
2. Paste the JSON recipe into the text area.
3. The app automatically rebuilds the entire report configuration.
4. Review in Live Preview and save.

### Recommended for

* Standardizing reports across spaces
* Sharing configurations across teams
* Quickly replicating dashboards on multiple pages

## Export Options

| **Export Type** | **Format** | **How to Access** | **What's Included** |
| --- | --- | --- | --- |
| Report Data | CSV | Center panel Export button (Table view) | All visible columns and filtered data |
| Report Data | JSON | Center panel Export button (all views) | Full data structure from Confluence |
| Report Config | JSON Recipe | Copy JSON button in Import tab | Full configuration to recreate the report |

**Tip:** Store JSON recipes on a shared Confluence 'Report Library' page - document each recipe's purpose and use case so your team can find and reuse them.`,
        },
        {
          slug: "macro-editor-ui-tour",
          title: "Macro Editor UI Tour",
          content: `A complete visual walkthrough of the macro editor - where everything is and what it does.

  <img 
    src="/images/global/reports-charts-confluence/features/img_9.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Header Section

The top bar contains the primary controls for your report configuration.

  <img 
    src="/images/global/reports-charts-confluence/features/img_10.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

  <img 
    src="/images/global/reports-charts-confluence/features/img_11.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

| **Header Element** | **Description** | **Notes** |
| --- | --- | --- |
| Data Source | Toggle between Spaces and Custom CQL | Changes the Source Value field behavior below it |
| Source Value | The actual query or space/page selection | CQL text for CQL mode; visual selector for Spaces mode |
| Result Limit | Max records to return | Default 50. Can be set to any number (e.g. 100, 500) |
| Report Type | Display format selector | Table, List, Paragraph, Grid, Charts |
| Save | Publish the report to Confluence page | Closes editor after saving |
| Close | Exit without saving | Prompts if unsaved changes exist |

## Left Panel - Data Expansions

Load metadata fields required for columns, filters, and charts.

  <img 
    src="/images/global/reports-charts-confluence/features/img_12.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

* Search box - real-time filtering of expansion fields by name
* Checkbox selection - check any group to load its fields
* Favorites / Pinned - click the star icon to pin frequently used fields to the top
* Hierarchical groups - organized by Structure, Body & Metadata, History

| **Expansion Category** | **Key Fields** |
| --- | --- |
| Structure | ancestors, children, descendants, container |
| Body & Metadata | body, metadata, operations, restrictions, version |
| History | contributors, lastUpdated, previousVersion, nextVersion, ownedBy |

## Center Panel - Live Preview & Tools

The center panel is your main workspace - it shows results and provides all preview and debug tools.

  <img 
    src="/images/global/reports-charts-confluence/features/img_13.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

| **Element** | **What It Does** |
| --- | --- |
| Live Preview | Displays report results in real-time. Updates automatically as configuration changes. |
| Filter Panel | Apply filter rows (Operator + Property + Value). AND logic, top-to-bottom execution. |
| Explore | Switch to Explore mode - lists all available fields with types and sample values. |
| Export | Download data as CSV (Table view) or JSON (all views). Includes copy-to-clipboard. |
| Edit (Lock/Unlock) | Templates are locked after applying. Click Edit to unlock and modify. |
| Pagination | Previous/Next buttons, page numbers, results-per-page selector. |

## Right Panel - Configuration Tabs

Four tabs for configuring your report structure, applying templates, importing recipes, and inspecting raw data.

  <img 
    src="/images/global/reports-charts-confluence/features/img_14.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

| **Tab** | **Purpose** | **Key Actions** |
| --- | --- | --- |
| Columns | Define what data appears and how it is formatted | Add, Edit, Delete, Reorder, Duplicate, Hide columns |
| Templates | Browse and apply 35 tabular + 17 chart templates | Search, select, apply - auto-configures everything |
| Import | Import JSON recipes to recreate report configurations | Paste JSON, validate, search, copy config |
| Raw | Inspect raw JSON returned from Confluence | View, search, expand/collapse, copy field paths |

## Saved Report on Confluence Page

After clicking Save, the macro editor closes and your live report appears directly on the Confluence page.

  <img 
    src="/images/global/reports-charts-confluence/features/img_15.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />


| **Element** | **Where It Appears** | **What It Does** |
| --- | --- | --- |
| Report Title / Header | Top of the macro | Shows the report name or description (if configured) |
| Table with Columns & Rows | Main body | Displays live Confluence data - updates automatically as content changes |
| Search Box | Top of report | Filters visible rows by keyword - does not change the data source |
| Export Button (CSV/JSON) | Top toolbar | Downloads current report data - CSV for spreadsheets, JSON for integrations |
| Pagination Controls (Prev/Next) | Bottom of report | Navigate between pages of results - shows current page and total count |
| Edit Button (pencil icon) | Top right of macro | Reopens the macro editor - only visible to users with edit permission on the page |

## Complete Workflow Summary

1. Set Data Source (Header) - choose Spaces or Custom CQL and enter source value
2. Load Expansions (Left Panel) - select metadata groups needed for your columns
3. Check Live Preview (Center) - confirm data is returning correctly
4. Use Explore (Center) - discover available field paths and types
5. Configure Columns (Right → Columns) - define what to display and how
6. Apply Filters (Center) - refine which records appear
7. Set Report Type + Result Limit (Header) - choose format and data size
8. Inspect Raw View if needed (Right → Raw) - verify JSON paths
9. Click Save (Header) - publish the live report to your Confluence page`,
        },
        {
          slug: "live-preview",
          title: "Live Preview",
          content: `Live Preview allows you to see report results instantly as you configure your report. The preview updates in real-time without needing to save or refresh the page.

## Overview

Live Preview is the center panel of the macro editor. Every change you make - data source, expansions, columns, filters, or view type - is reflected in the preview immediately. This lets you validate your configuration before saving.

<img 
    src="/images/global/reports-charts-confluence/features/img_16.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## When Live Preview Updates

### Data Source Changes

* Switch between Spaces drill-down and Custom CQL
* Modify space or page selections
* Update CQL queries

### Expansion Changes

* Add or remove expansion groups
* Load additional metadata fields

### Column Changes

* Create new columns
* Edit existing column configurations
* Drag and drop to reorder columns
* Change date formats, text transformations (uppercase/lowercase)
* Set truncation, prefix, suffix, or fallback values

### Filter Changes

* Add global filters
* Modify filter criteria (operator, property, value)
* Remove filters

### View & Template Changes

* Change between Table, List, Grid, Paragraph, or Charts
* Select and apply templates from the Templates tab
* Paste JSON recipes in the Import tab

## Benefits of Live Preview

| **Benefit** | **What It Means** |
| --- | --- |
| Immediate feedback | See changes without saving - no page reload needed |
| Faster configuration | Test settings in real-time and adjust instantly |
| Error detection | Identify issues (blank columns, wrong filters) before finalizing |
| Safe experimentation | Try different configurations without affecting the published report |

**Tip:** Check Live Preview frequently as you build - after adding each column and each filter. This catches issues early before they compound.`,
        },
        {
          slug: "raw-view",
          title: "Raw View",
          content: `Raw View displays the raw JSON data returned by Confluence for the content in your report. It shows the actual data structure so you can discover field paths, inspect metadata, and debug configuration issues.

<img 
    src="/images/global/reports-charts-confluence/features/img_17.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## What Raw View Helps You Do

| **Purpose** | **Detail** |
| --- | --- |
| Discover available fields | Browse all fields returned by your data source and loaded expansions |
| Find exact JSON paths | Get the precise field path to use in column Data Value settings |
| Inspect data structure | Understand how Confluence returns nested objects and arrays |
| Debug blank columns | Verify whether a field exists and has a value for your content |
| Debug filter issues | Confirm field values match what your filter is comparing against |

## When to Use Raw View

* A column shows empty or unexpected values - check if the field path is correct
* A filter is not behaving as expected - confirm the field name and value format
* You need the exact JSON path for a field - copy it directly from Raw View
* You want to discover what fields are available after loading an expansion

## How to Access Raw View

1. Open the macro editor.
2. Navigate to the **Raw** tab in the right panel configuration tabs.
3. Raw View displays the JSON data from your current Live Preview results.
4. Use the search box to find a specific field name quickly.
5. Copy exact field paths to use in columns or filters.

## Tips for Using Raw View

* Load the required expansion first - fields only appear in Raw View after their expansion group is loaded
* Use the search box to find field names faster instead of scrolling through large JSON
* Copy the exact path - even small differences (uppercase/lowercase) cause blank columns
* Check nested fields - some values are nested inside objects (e.g., version.by.displayName)

**Note:** Raw View shows data for the current Live Preview results only. If your data source returns no results, Raw View will be empty.`,
        },
        {
          slug: "explore",
          title: "Explore",
          content: `Explore lists all available metadata fields returned by your data source and loaded expansions. It helps you identify the correct fields to use for columns and filters, and shows field types and sample values.

<img 
    src="/images/global/reports-charts-confluence/features/img_18.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Purpose

| **Purpose** | **Detail** |
| --- | --- |
| Discover available fields | View all metadata fields returned by your current data source |
| Field selection assistance | Identify the correct field path for columns and filters |
| Data type information | See field types (string, number, date, array, object) for each field |
| Sample values | View real sample data to confirm a field contains what you expect |
| Reduce trial and error | Find the right field path without guessing or checking Raw View manually |

## How to Use Explore

1. Open the macro editor and set your data source.
2. Load the required expansions in the left panel.
3. Click the **Explore** button in the center panel.
4. Browse through the list of available metadata fields.
5. Check the field type and sample value to confirm it's the right field.
6. Use the field path in your column Data Value or filter Property settings.

## Explore vs Raw View

| **Feature** | **Explore** | **Raw View** |
| --- | --- | --- |
| Shows fields as | Clean list - one field per row | Full JSON structure of a record |
| Field types shown | Yes - clearly labeled | Inferred from JSON value format |
| Sample values | Yes - one sample value per field | Full record data for all fields |
| Best for | Discovering and picking the right field | Verifying exact paths and nested data |
| Ease of use | Beginner-friendly | More detailed - for advanced debugging |

**Tip:** Use Explore first to discover the right field, then use Raw View to verify the exact JSON path if needed.`,
        },
        {
          slug: "export",
          title: "Export",
          content: `Export allows you to download your report data in CSV or JSON format directly from the macro editor or the published report view. Use it to save results for offline analysis, share filtered data with others, or back up report output.

<img 
    src="/images/global/reports-charts-confluence/features/img_19.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Export Formats

| **Format** | **Best For** | **How to Open** |
| --- | --- | --- |
| CSV | Sharing with stakeholders, Excel/Google Sheets analysis, offline filtering | Excel, Google Sheets, Numbers, any spreadsheet tool |
| JSON | Developer use, API integrations, data backup, programmatic processing | Code editor, JSON viewer, developer tools |

## Purpose

* Save report results for offline use and analysis
* Share filtered or formatted data with stakeholders who don't have Confluence access
* Import data into Excel, Google Sheets, or BI tools
* Back up report output at a point in time
* Use data in scripts, automations, or integrations

## How to Export

1. Open the macro editor (or view the published report on a Confluence page).
2. Click the **Export** button in the center panel toolbar.
3. Choose the desired format - CSV or JSON.
4. The file downloads automatically to your local system.

## What Gets Exported

* All visible columns as configured in the Columns tab
* All filtered data - only records matching your current filters
* Data as shown in Live Preview - what you see is what you export
* CSV is available from Table view; JSON is available from all views

## Export vs Import (JSON Recipe)

| **Action** | **What It Does** | **Found In** |
| --- | --- | --- |
| Export (CSV/JSON) | Downloads report DATA - the actual Confluence content records | Center panel Export button |
| Copy JSON (Recipe) | Copies report CONFIGURATION - the setup to recreate the report | Import tab → Copy JSON button |`,
        },
        {
          slug: "edit-lock-unlock",
          title: "Edit (Lock/Unlock)",
          content: `Templates in Reports, Charts, Templates, CQL & Export for Confluence are initially locked to prevent accidental changes. The Edit button in the center panel allows authorized users to unlock a template and modify its configuration.

## Overview

| **State** | **What It Means** | **What You Can Do** |
| --- | --- | --- |
| Locked (default) | Template is protected - configuration is read-only | View, preview, and export data - cannot edit columns or settings |
| Unlocked (after Edit) | Configuration is open for editing | Add, remove, reorder columns, change filters, data source, view type |

<img 
    src="/images/global/reports-charts-confluence/features/img_20.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

  <img 
    src="/images/global/reports-charts-confluence/features/img_21.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Purpose

* Protect templates from unintended edits - locked by default after applying
* Allow authorized changes when customization is required
* Prevent accidental column deletion or configuration changes while browsing

## How to Use

1. Apply a pre-built template from the **Templates** tab - it loads in locked state.
2. Review the results in Live Preview.
3. To customize, click the **Edit** button in the center panel toolbar.
4. The configuration unlocks - columns, filters, and settings become editable.
5. Make your changes to fields, columns, filters, or data source.
6. Click **Save** to apply updates and publish to the Confluence page.

**Note:** The Edit lock applies to templates applied from the Templates tab. Reports built from scratch in the Columns tab are always editable.`,
        },
        {
          slug: "result-limit",
          title: "Result Limit",
          content: `Result Limit specifies the maximum number of records to be returned in a Reports, Charts, Templates, CQL & Export for Confluence report. It controls dataset size, report performance, and how many rows appear in the published view.

<img 
    src="/images/global/reports-charts-confluence/features/img_22.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Purpose

| **Purpose** | **Detail** |
| --- | --- |
| Control dataset size | Limit the number of results displayed in the report |
| Improve performance | Smaller result sets load faster - both in editor and on the published page |
| Manage large datasets | Prevent overwhelming displays when a data source returns thousands of records |
| Pagination-ready | Works together with Pagination to let users navigate large result sets efficiently |

## How to Set Result Limit

1. Open the macro editor.
2. Locate the **Result Limit** field in the header bar or right panel.
3. Enter the desired limit (e.g., 50, 100, 500).
4. Live Preview updates immediately to show the limited result set.
5. Save when satisfied - the limit applies to the published report.

## Best Practices

| **Scenario** | **Recommended Limit** |
| --- | --- |
| First-time setup / testing | 50 - fast preview, easy to verify |
| Standard operational reports | 100–200 - good balance of data and performance |
| Comprehensive audits / governance | 500+ - use with Pagination for navigation |
| Daily or weekly digest reports | 25–50 - keeps the report focused and readable |
| Export to CSV for full data | Set high (e.g., 1000) then export - don't rely on paginated view |

* Start with smaller limits (50–100) for faster testing
* Increase as needed for comprehensive reports
* Always combine high limits with Pagination for user-friendly navigation
* Consider performance when setting very high limits with many expansions loaded

**Tip:** For full data exports, set a high Result Limit, verify in Live Preview, then use the Export button to download as CSV or JSON rather than presenting all rows on the page.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 7. INTEGRATIONS & MIGRATION
    // ═══════════════════════════════════════════════════════════════
    {
      id: "integrations-migration",
      title: "Integrations & Migration",
      articles: [
        {
          slug: "supported-integrations",
          title: "Supported Integrations",
          content: `
Reports, Charts, Templates, CQL & Export for Confluence integrates natively with Confluence Cloud and supports Jira data where the two products are connected.

## Native Confluence Integration

The app is built as a Confluence Cloud macro and uses the Confluence REST API and CQL to access content. All report data is fetched live from your Confluence instance - no external connectors, no third-party services.

### What CQL Can Target

CQL (Confluence Query Language) gives you precise, rules-based access to all Confluence content types and metadata fields.

| **Content Type** | **CQL \`type\` Value** | **Description** |
| --- | --- | --- |
| Pages | \`type = page\` | Standard Confluence pages |
| Blog Posts | \`type = blogpost\` | Blog entries in any space |
| Attachments | \`type = attachment\` | Files attached to pages |
| Comments | \`type = comment\` | Inline and page-level comments |
| Space | Accessed via \`space\` field | Filter by one or more space keys |

### Confluence Spaces & Pages

* **Spaces** - query content from any space you have access to; filter by space key (\`space = "ENG"\`)
* **Pages** - filter by page ID, title, label, creator, last modifier, status, or date range
* **Blogs** - access blog posts the same way as pages, using \`type = blogpost\`
* **Attachments** - list and inspect file attachments, including file name, size, and parent page
* **Labels** - filter content by one or more labels (\`label = "decision"\`)
* **Ancestors / Descendants** - use the \`ancestor\` field in CQL or the Include Children toggle to scope reports to a page tree

### Confluence Permissions Respected

The app fully respects Confluence's native permission model. Reports show only content the **viewing user** is authorized to access.

| **Scenario** | **Result** |
| --- | --- |
| Viewer has access to all queried spaces | Full results displayed |
| Viewer has access to only some spaces | Only permitted content appears |
| Viewer has no access to a space | That space's content is excluded entirely |
| Page has content restrictions | Restricted pages are excluded from results |

> **Note:** Two users viewing the same report on the same page may see different results - each viewer sees only the content they are permitted to access.

## Jira Integration

If your Confluence Cloud site is connected to Jira Cloud, some Jira-related metadata fields may be available through Confluence's linked content features.

| **Integration Scenario** | **What's Available** |
| --- | --- |
| Jira issues linked to Confluence pages | Linked Jira issue references may appear in page metadata |
| Confluence pages in Jira-connected spaces | Standard Confluence fields (space, type, creator, labels, dates) are fully available |
| Jira-specific fields (e.g., issue status, assignee) | Not directly available - these live in Jira, not Confluence |

> **Important:** The app queries Confluence content, not Jira directly. Jira issue data (status, priority, assignee) is not available as report fields unless it has been explicitly surfaced in Confluence page metadata.

## What Confluence Data CQL Can Target - Full Reference

| **CQL Field** | **Description** | **Example** |
| --- | --- | --- |
| \`type\` | Content type | \`type = page\` |
| \`space\` | Space key | \`space = "ENG"\` |
| \`title\` | Page or blog title | \`title ~ "Release Notes"\` |
| \`label\` | Assigned labels | \`label = "urgent"\` |
| \`creator\` | Original author | \`creator = currentUser()\` |
| \`contributor\` | Any contributor | \`contributor = "jsmith"\` |
| \`lastModifier\` | Most recent editor | \`lastModifier = currentUser()\` |
| \`created\` | Creation date | \`created >= "2026-01-01"\` |
| \`lastModified\` | Last update date | \`lastModified >= now("-30d")\` |
| \`ancestor\` | Parent page ID | \`ancestor = 12345\` |
| \`status\` | Content status | \`status = "current"\` |`,
        },
        {
          slug: "data-migration",
          title: "Data Migration",
          content: `
How to import and export report configurations, migrate between Confluence spaces, and understand what happens when the app is uninstalled.

## Importing Report Configurations via JSON Recipe

A JSON recipe is a complete export of a report's configuration - data source, expansions, columns, filters, and view type. Use it to recreate any report on a new page or in a new space without manual re-configuration.

### How to Import a JSON Recipe

1. Open a Confluence page in edit mode and insert the macro.
2. In the macro editor, navigate to the **Import** tab in the right panel.
3. Paste the JSON recipe into the text area.
4. The app automatically rebuilds the full report configuration - data source, expansions, columns, filters, and view.
5. Review results in Live Preview to confirm the report is working correctly.
6. Click **Save** to publish the report to the page.

### What a JSON Recipe Contains

| **Element** | **Included in Recipe?** |
| --- | --- |
| Data Source (Spaces or CQL) | Yes |
| CQL query or space/page selection | Yes |
| Loaded expansion groups | Yes |
| Column definitions (label, block type, field path, formatting) | Yes |
| Filter rows (operator, property, value) | Yes |
| Report Type (Table, List, Grid, Paragraph, Charts) | Yes |
| Result Limit | Yes |
| Actual report data (Confluence content) | No - data is always fetched live |

## Exporting Reports for Backup

There are two types of exports - **data export** and **configuration export**. Use both for a complete backup strategy.

### Export Report Data

1. Open the published report on a Confluence page (or in the macro editor).
2. Click the **Export** button in the center panel.
3. Choose **CSV** (for spreadsheet tools) or **JSON** (for developer use).
4. The file downloads automatically - store it locally or in a shared drive.

### Export Report Configuration (JSON Recipe)

1. Open the macro editor for the report.
2. Navigate to the **Import** tab in the right panel.
3. Click the **Copy JSON** button - copies the full configuration to your clipboard.
4. Paste into a text file, a shared Confluence page, or a version-controlled document.

> **Best Practice:** Store JSON recipes on a dedicated "Report Library" Confluence page. Document each recipe's name, purpose, target spaces, and use case so your team can find and reuse them.

## Migrating Between Confluence Spaces

When you need to move a report from one Confluence space or page to another, use the JSON recipe workflow.

### Step-by-Step Migration

1. Open the source report in the macro editor.
2. Navigate to the **Import** tab → click **Copy JSON** to export the configuration.
3. Open the destination Confluence page (in the target space) and insert a new macro.
4. In the new macro editor, navigate to the **Import** tab and paste the JSON recipe.
5. Update the Data Source if the target space is different:
   - If using **Spaces mode**: re-select the target space(s) in the source picker.
   - If using **Custom CQL**: update the \`space\` value in the CQL query (e.g., change \`space = "OLD"\` to \`space = "NEW"\`).
6. Review in Live Preview - confirm results are correct for the new space.
7. Click **Save**.

### Cross-Space Migration Checklist

| **Step** | **Action** |
| --- | --- |
| Export config | Copy JSON recipe from Import tab |
| Create new macro | Insert macro on destination page |
| Import config | Paste JSON recipe in Import tab |
| Update data source | Change space selection or CQL space filter |
| Verify permissions | Confirm viewer has access to target space |
| Verify columns | Check that all fields are still available (same expansions needed) |
| Save and publish | Save macro, then publish the Confluence page |

## What Happens If the App Is Uninstalled

If Reports, Charts, Templates, CQL & Export for Confluence is uninstalled from your Confluence Cloud site:

| **Element** | **What Happens** |
| --- | --- |
| Report macros on pages | Remain on pages as **placeholder blocks** - they do not disappear |
| Report data displayed | No longer rendered - placeholders show a "macro unavailable" message |
| JSON recipes stored on pages | Remain intact - text content is unaffected by uninstall |
| Confluence page content | Unchanged - uninstalling the app does not delete or modify page content |
| Re-installing the app | Restores full macro functionality - reports become live again automatically |

> **Important:** Your Confluence pages and their content (including any JSON recipes stored as text) are never deleted when the app is uninstalled. Re-installing the app restores all reports to their previously configured state.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 8. DEMO DOC
    // ═══════════════════════════════════════════════════════════════
    {
      id: "demo-doc",
      title: "Demo Doc",
      articles: [
        {
          slug: "demo-doc",
          title: "Demo Doc",
          content: `
## 1. Overview

When your Confluence spaces get large, it gets hard to see what's happening. Pages pile up, content goes stale, and there's no easy way to get a clear picture of your data.

This app solves that. It lets you build reports, view charts, and export data - all inside Confluence, without writing any code.

**What you can do with this app:**

- Build live reports directly inside Confluence pages.
- See your data visually with tables, charts, and flexible layouts.
- Filter content using simple search or advanced query tools.
- Reuse report setups across teams and pages.
- Export data to CSV or JSON for use outside Confluence.
- No technical skills needed - fully visual, point-and-click.

This is designed for teams who want data visibility, reporting, and insights inside Confluence - without coding or external tools.

## 2. What's Included

### Data Sources - Spaces & CQL

Pull Confluence data in two flexible ways depending on your use case.

- **Spaces Mode:** visually pick one or more Confluence spaces.
- **Page Selection:** narrow down to specific pages.
- **Custom CQL Mode:** write advanced queries to get exactly the data you need.
- **Auto-fetch Results:** data loads automatically. No manual refresh.
- **Real-time Query Validation:** if your query has an error, you see it instantly.

### Report Builder - Columns & Expansions

Turn raw Confluence data into a structured, readable report:

- **Column Builder:** choose what data fields appear as columns.
- **Explore Fields:** browse all available data to find what you need.
- **Expansions Panel:** unlock extra details like edit history, contributors, and page properties.
- **Drag-and-Drop Reordering:** rearrange columns however you like.
- **Dynamic Field Mapping:** connect live data straight to your report columns.

### Block Types - Data Rendering

Control how each column looks on screen:

| **Block Type** | **Description** |
| --- | --- |
| Basic | Plain text. Simple and clean. |
| Text | Styled text with custom formatting and fallback values. |
| Link | Turn URLs into clickable links. |
| Image | Show profile photos, logos, or thumbnails. |
| Collection | Handle lists of values like labels or contributors. |
| Regex | Extract or reformat data using custom patterns. |

### Filters & Search

Show only the data that matters:

- **Quick Search:** type to filter results instantly.
- **Advanced Filters:** combine field, operator, and value rules.
- **12 Operators:** equals, contains, greater than, regex, and more.
- **AND Logic Filtering:** stack multiple filters together.
- **Scope Control:** filter a single column or the full dataset.

### Layouts & Charts

Display your data in the format that works best for your audience:

| **Layouts** | **Charts** |
| --- | --- |
| **Table** - structured grid, sortable by column | **Bar Chart** - compare values across categories |
| **List** - vertical card layout for easy reading | **Line Chart** - track trends over time |
| **Grid** - visual tile-based view | **Pie Chart** - show how parts add up to a whole |
| **Paragraph** - narrative style, like a written summary | |

### Templates

Start reporting immediately with ready-made setups:

- **Pre-built templates** for audits, activity tracking, and content analytics.
- **One-click** to apply - the full configuration loads automatically.
- **Auto-lock** protects the template structure from accidental changes.
- **Editable mode** - unlock and customize whenever you need to.

### Raw View - Debugging

Need to check what's actually in your data? Raw View lets you inspect it directly:

- **Full JSON viewer** - see the complete data response.
- **Field search and highlight** - find specific fields fast.
- **Record-by-record navigation** - step through results one at a time.
- **Copy JSON** - grab the data for debugging or reuse elsewhere.

### Import, Export & Sharing

Share reports and collaborate across teams:

- **JSON Import/Export:** share full report configurations between pages or teams.
- **CSV Export:** download data in a format any spreadsheet app can read.
- **JSON Data Export:** for developers and API integrations.
- **Reusable Report Recipes:** standardize how your teams report across the organization.

### Live Reports & Publishing

Embed live, always-current reports directly inside any Confluence page:

- **Live data:** reports refresh automatically. Always up to date.
- **Permission-aware:** users only see data they are allowed to access.
- **Pagination:** handles large result sets cleanly.
- **Configurable limits:** control how many results appear.

## 3. Use Cases

| **Use Case** | **What You Can Do** |
| --- | --- |
| **Content Audits** | Find pages not updated in a long time. See who last edited each page and when. Export a list for cleanup campaigns. |
| **Team Directories** | Show team members with profile photos. Build a visual team grid inside Confluence. Link directly to each person's pages and contributions. |
| **Activity Dashboards** | Track how much content is being created over time. See which spaces are most active. Visualize team engagement with charts. |
| **Compliance & Governance** | Monitor who owns which pages and when they were last reviewed. Generate audit-ready reports on demand. Export structured datasets for compliance review. |
| **Knowledge Insights** | Understand how content is distributed across your spaces. Spot gaps - topics with little or no documentation. Analyze which pages and spaces are actually being used. |

## 4. Quick Start

**Step 1 - Add the Report Macro**
Open any Confluence page. Click Edit, type \`/\` and search for **Reports**. Insert the app.

**Step 2 - Select a Data Source**
Choose Spaces to pick visually, or use Custom CQL to write an advanced query. Check the live preview to confirm results.

**Step 3 - Build Your Report**
Add columns using field labels and paths. Use Explore to discover available fields. Enable expansions for extra data like history and contributors.

**Step 4 - Filter & Customize**
Add filters to narrow your results. Pick a layout - Table, Grid, List, and so on. Switch to a chart if needed.

**Step 5 - Save & Publish**
Set your result limit. Click Save. The live report appears on the page immediately.

## 5. Recommended Starter Setup

Not sure where to begin? This setup works for most teams and takes just a few minutes.

| **Setting** | **Value** |
| --- | --- |
| Data Source | Spaces mode, or CQL: \`type=page AND lastmodified < now("-40d") ORDER BY lastmodified ASC\` |
| Layout | Table (or Grid for a visual tile view) |
| Columns | Title, Space, Created Date, Last Modified |
| Optional Columns | Created By, Page Link |
| Expansions to enable | space, history, version |
| Verify | Make sure all columns load correctly with no blank values |
| Export | Download as CSV if you need the data in a spreadsheet |
| Save | Save the configuration - your report is now live |

## 6. Key Benefits

- **Always up to date:** reports pull live data from Confluence every time the page loads. No manual refresh needed.
- **No coding required:** everything is point-and-click. Build reports without any technical knowledge.
- **Flexible data access:** use Spaces mode for quick setup, or write CQL queries for advanced control.
- **Multiple ways to view data:** switch between tables, grids, lists, and charts depending on what you need.
- **Share configurations easily:** export a report setup and share it with other teams in seconds.
- **Secure and permission-aware:** users only see content they have access to.
- **All-in-one place:** reporting, analytics, and export without needing any external tools.

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Demo Doc - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Reports_Charts_Templates_CQL_and_Export_for_Confluence_Demo_Doc_9100e1a7de.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 9. SALES DOC
    // ═══════════════════════════════════════════════════════════════
    {
      id: "sales-doc",
      title: "Sales Doc",
      articles: [
        {
          slug: "sales-doc",
          title: "Sales Doc",
          content: `
*Know your Confluence. Report with confidence.*

## What This App Delivers

| | |
| --- | --- |
| **Deep Content Audits** | Audit your Confluence spaces - stale pages, contributors, attachments, labels, and restrictions in one live report. |
| **Pre-built Templates** | 35 tabular + 17 chart templates ready to use. Apply in one click, customize as needed. |
| **Visual Insights** | Bar, line, and pie charts built directly from Confluence metadata - no external BI tools required. |
| **Seamless Data Exports** | Download any report as CSV or JSON for offline analysis, stakeholder sharing, or integrations. |

## Key Differentiators

### Five Versatile Display Views
View your Confluence data as a table, chart, grid, list, or paragraph - whatever works best for your team.

### Real-Time Live Preview
See results instantly as you build. Live Confluence data, no waiting.

### Spaces or Custom CQL Queries
Pick an entire space in a few clicks or write a precise query to get exactly what you need.

### Intelligent Debugging & Discovery
Explore your data structure and fix issues on the spot - no technical help needed.

### Deep JSON Inspection
Look directly at the data behind your reports. Find the fields you need and build with confidence.

## Security You Can Trust

| | |
| --- | --- |
| **Runs natively on Atlassian Cloud** | No external servers, no data leaving your Atlassian infrastructure. |
| **AGC Compatible** | Fully compatible with Atlassian Government Cloud. |
| **ISO 27001 Certified** | Clovity is an ISO 27001 certified company. |

## Why Enterprise Teams Prefer Clovity

- 24/7 support with direct access to Atlassian experts.
- Seamless native UX that works like Atlassian tools.
- Cloud infrastructure ensuring high availability for global teams.

## Try Our Other Apps In The Suite

Extend Jira & Confluence with dashboards, reporting, planning, and technical documentation tools.

| **App** | **Description** |
| --- | --- |
| [LaTeX Math Formulas & UML Diagrams](/apps/latex-diagrams-confluence) | ERD & Flowcharts for Confluence |
| [Content Formatting Macros](/apps/content-formatting-confluence) | Tabs, Navigation, Visibility & CSS for Confluence |
| [Dashboard Templates, Charts, Graphs & Reports](/apps/dashboard-charts-jira) | For Jira |
| [Time Tracking, Resource Planning & Project Management](/apps/time-tracking-jira) | For Jira |

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Sales Doc - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Reports_Charts_Templates_CQL_and_Export_for_Confluence_Sales_Doc_f69acf6f47.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 9. COMPETITOR COMPARISON
    // ═══════════════════════════════════════════════════════════════
    {
      id: "competitor-comparison",
      title: "Competitor Comparison",
      articles: [
        {
          slug: "competitor-comparison",
          title: "Competitor Comparison",
          content: `
This comparison covers the core reporting capabilities of Reports, Charts, Templates, CQL & Export for Confluence across 19 feature areas - benchmarked against Reporting for Confluence by Appfire.

## Feature Coverage

| **Feature** | **Reports, Charts, Templates, CQL & Export for Confluence** |
| --- | --- |
| CQL Query Support (Full Syntax) | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Data Sources (Spaces, Filters, Custom CQL) | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Templates and Recipes | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Save as a Macro | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Live Auto-Updating Reports | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Confluence API Integration with Expansions | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Raw JSON Debug View | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Explore Fields Inspector | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Structured Pagination & Large Dataset Handling | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| UI Result Limit Controls | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| JMESPath Filtering | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Column Types (Basic, Collections, Image, Link, Regex, Text) | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Drag & Drop Column Reordering | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Automatic Column Population | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Layouts (Table, List, Paragraph, Grid) | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Lock Mode / Edit Mode | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Charts (Bar, Line, Pie) | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Interactive Zoom Controls & Smart Tooltips | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |
| Export Options (CSV, JSON) | <div style="display:flex;justify-content:center;align-items:center;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;background:#16a34a;border-radius:50%;flex-shrink:0;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div> |

## Coverage Summary

**19 / 19 core reporting capabilities supported - 100% coverage.**

Our app delivers complete coverage of enterprise reporting foundations: CQL-based querying, deep metadata access, flexible layouts, interactive visualizations, and robust export & reusability - packaged into a cohesive, user-friendly experience.

| **Category** | **What We Cover** |
| --- | --- |
| Reporting Engine | CQL querying, multiple data sources, live updates, Confluence API with expansions |
| Configuration | Templates & recipes, macro save, lock/edit mode, automatic column population |
| Data Architecture | Raw JSON debug, Explore fields inspector, pagination, result limit controls, JMESPath filtering |
| Column & Layout | 6 column types, drag & drop reordering, 4 layout views (Table, List, Paragraph, Grid) |
| Visualization | Bar, Line, and Pie charts with interactive zoom controls and smart tooltips |
| Export | CSV and JSON export from any report view |

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Competitor Comparison - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Reports_Charts_Templates_CQL_and_Export_for_Confluence_Competitor_Document_4f4d4bf68e.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
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
          slug: "app-pricing",
          title: "App Pricing",
          content: `
## Advanced Reporting, Charts & Deep Data Insights

**Plan smarter. Deliver faster. All in Confluence.**

Reports, Charts, Templates, CQL & Export for Confluence is priced annually per Confluence Cloud instance based on your total user count. Teams of up to 10 users get full access at no cost.

## Cloud Annual Pricing

| **Team Size** | **Annual Price (USD)** |
| --- | --- |
| Up to 10 | $0.00 |
| 11 – 15 | $97.50 |
| 16 – 25 | $162.50 |
| 26 – 50 | $325.00 |
| 51 – 100 | $650.00 |
| 101 – 200 | $1,100.00 |
| 201 – 300 | $1,400.00 |
| 301 – 400 | $1,550.00 |
| 401 – 500 | $1,700.00 |
| 501 – 600 | $1,850.00 |
| 601 – 800 | $2,150.00 |
| 801 – 1,000 | $2,450.00 |
| 1,001 – 1,200 | $2,550.00 |
| 1,201 – 1,400 | $2,650.00 |
| 1,401 – 1,600 | $2,750.00 |
| 1,601 – 1,800 | $2,850.00 |
| 1,801 – 2,000 | $2,950.00 |
| 2,001 – 2,250 | $3,075.00 |
| 2,251 – 2,500 | $3,200.00 |
| 2,501 – 2,750 | $3,325.00 |
| 2,751 – 3,000 | $3,450.00 |
| 3,001 – 3,250 | $3,575.00 |
| 3,251 – 3,500 | $3,700.00 |
| 3,501 – 3,750 | $3,825.00 |
| 3,751 – 4,000 | $3,950.00 |
| 4,001 – 4,250 | $4,075.00 |
| 4,251 – 4,500 | $4,200.00 |
| 4,501 – 4,750 | $4,325.00 |
| 4,751 – 5,000 | $4,450.00 |

## Pricing Notes

- **Free for small teams** - Full feature access for up to 10 users at $0.00.
- **Annual billing** - Prices shown are per year, billed through Atlassian.
- **Cloud only** - Pricing applies to Confluence Cloud instances.
- **All features included** - Every pricing tier includes the full reporting suite: CQL Reports, Charts, Templates, Recipes, JSON Export, and the Explore Fields inspector.
- **Paid via Atlassian** - Transactions are handled directly through the Atlassian Marketplace. No separate vendor billing.

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">App Pricing - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Reports_Charts_Templates_CQL_and_Export_for_Confluence_689e7f3872.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },

  ],
};
