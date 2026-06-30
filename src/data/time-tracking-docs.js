export const timeTrackingDocs = {
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-time-tracking",
          title: "What is Time Tracking & PPM?",
          sideVideo: {
            src: "https://www.youtube.com/embed/Gydd-4lBKY4",
            title:
              "Time Tracking, Resource Planning & Project Management - Product Introduction",
          },
          content: `
Time Tracking, Resource Planning & Project Management is a Jira Cloud app that gives your team full visibility into workload, delivery health, and priorities - all inside Jira.

## Core Value Proposition

- **Track and approve time** against Jira issues with a full timesheet and calendar experience
- **Analyze team capacity** and spot delivery risks before they escalate
- **Score and rank your backlog** using a configurable prioritization model (ICE, RICE, WSJF, and custom)
- **Monitor portfolio health** across all your active projects and initiatives with 6 visualization modes including Gantt

All of this runs natively inside Jira Cloud, using your existing projects, issues, and Jira user management - no external tools, no data exports, no setup overhead.

<!--VIDEO_BREAK-->

## Four Integrated Modules

| **Module** | What It Does |
|---|---|
| **Capacity Planner & Insight** | Analyze team workload, deadlines, and risks across projects |
| **Time Tracking & Reporting** | Log work, build timesheet reports, manage billing accounts and categories |
| **Portfolio Management (PPM)** | Cross-project roadmaps, Gantt charts, and portfolio health dashboards |
| **Backlog Prioritization** | Score and rank backlog items with structured frameworks |

## Who Is It For?

- **Team members** who need to log time without leaving Jira
- **Team leads and project managers** who need workload visibility and risk detection
- **Engineering managers and directors** who need portfolio-level health and honest capacity data
- **Jira admins** who need lightweight role management without a separate system

## Benefits & Outcomes

### For Team Members
- Log time without context switching - time entry happens directly on the Jira issue
- See your own logged time at a glance - the personal calendar highlights days with missing entries
- Know exactly what you're allowed to do - My Permissions shows your role and accessible features

### For Team Leads & Project Managers
- Catch delivery risks before sprint reviews - the Deadlines & Risks tab surfaces overdue issues in a single view
- Spot bottlenecks in minutes - Status Aging Monitor highlights issues stuck in a status too long
- Make sprint planning data-driven - Assignee Capacity shows real commitments before adding more

### For Engineering Managers & Directors
- One portfolio view across all projects - Treemap and Pie Chart views show delivery health at a glance
- Honest capacity data - actual logged hours vs. estimates reveal where planning assumptions are wrong
- Consistent backlog prioritization - scoring templates enforce a repeatable, defensible ranking process

### For Jira Admins
- Zero infrastructure - runs on Atlassian Forge; nothing to host, provision, or maintain
- No separate user directory - role management uses existing Jira users
- Clean data residency - all app data stays within the Atlassian platform

## Platform

Jira Cloud only. Built on Atlassian Forge - no external servers, no data exports, no infrastructure to maintain.`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `13 step-by-step tutorials covering every module - click any video to start watching, or use the arrows to go through them in order. New to the app? Start with the [Product Introduction](/apps/time-tracking-jira/what-is-time-tracking) first.`,
          videoGallery: {
            playlistUrl:
              "https://www.youtube.com/playlist?list=PLACoCS_WiVwR45unjH2D5MwcBjMFFflCL",
            videos: [
              {
                id: "3_jtLcWe8JM",
                title: "Welcome to the Suite - App Overview",
              },
              { id: "FNQrFDWmSWg", title: "Creating Your First Capacity Plan" },
              { id: "rn1iYq2OdW4", title: "Analytics - Team Allocation Tab" },
              {
                id: "-T8tRi2dxGw",
                title:
                  "Analytics - Assignee Capacity, Deadlines & Status Aging",
              },
              {
                id: "5FrzzZapPkQ",
                title: "Reports & Team Management",
              },
              {
                id: "uYVd9Qf3PTQ",
                title: "Calendar View, Accounts & Settings",
              },
              {
                id: "EdtdvQge8TM",
                title: "Logging Time - Timesheet & Reports",
              },
              {
                id: "p-MJSCvgB-k",
                title: "Scoring Your Backlog - RICE, ICE & WSJF",
              },
              {
                id: "9p7Qjhk9wDU",
                title: "Custom Templates, Priority Matrix & Saved Reports",
              },
              { id: "B0lITfI-jVc", title: "Building a Portfolio Roadmap" },
              { id: "lKrmLBe6Fs4", title: "Saved Portfolios" },
              { id: "6Z5rG1Wo2AQ", title: "Exploring Portfolio Views & Gantt Chart" },
              { id: "Oi1DcoTk9ac", title: "Permissions, Roles & App Settings" },
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
4. Search for **"Time Tracking Resource Planning Clovity"**
5. Click the app in the search results
6. Click **Try it free** (30-day trial) or **Buy now**
7. Review and accept the requested permissions
8. Click **Accept** - the app installs immediately, no restart required

## Verify Installation

After installation:

1. Click **Apps** in the Jira top navigation bar
2. Look for **"Time Tracking, Resource Planning & Project Management"** in the dropdown
3. Click it - the app opens to the Time Tracking module

## First Admin Steps

Once installed, complete these setup tasks before rolling out to your team:

| **Step** | Where | What to Do |
|---|---|---|
| **1. Configure general settings** | App → Settings → General | Set time display unit, timezone, first day of week, working hours |
| **2. Set up time categories** | App → Settings → Time Categories | Create categories like Development, QA, Meetings |
| **3. Configure billing accounts** | App → Time Tracking → Accounts | Create accounts for client billing codes (optional) |
| **4. Set up holiday calendar** | App → Settings → Manage Staff → Holiday Calendar | Add company holidays for accurate capacity calculations |
| **5. Assign Member roles** | App → Settings → RBAC → User Roles | Give team members access to log time and use the app |

## Jira Permissions Required for Installation

The app requests the following permissions during Marketplace install:

| **Permission** | Why It's Needed |
|---|---|
| **Read Jira issues and projects** | Load issues for capacity analysis, backlog scoring, and portfolio views |
| **Read and write worklogs** | Log, edit, and approve time entries |
| **Read users and groups** | Display assignees; RBAC role management |
| **Read Jira configuration** | Detect issue types, statuses, priorities, and custom fields |

## Uninstalling

To uninstall: Jira Settings → Apps → Manage apps → find the app → click **Uninstall**. All app-stored configurations (reports, templates, portfolios) will be permanently deleted.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
Get up and running in under 5 minutes.

## Step 1 - Open the App

Click **Apps** in the Jira top navigation → select **Time Tracking, Resource Planning & Project Management**.

You'll land on the **Time Tracking** module by default.

## Step 2 - Check Your Access

Click **Settings → My Permissions** to confirm your role:

- **Global Admin**: Full access to all features and settings
- **Member**: Can log time, run capacity analysis, score backlogs, view portfolios
- **No role**: Read-only - ask your admin to assign you the Member role

## Step 3 - Log Your First Time Entry

1. In Time Tracking, open any report or click **Log Time**
2. Search for the Jira issue you worked on
3. Enter hours worked and select the date
4. Optionally select a Time Category (e.g., Development)
5. Click **Save**

## Step 4 - Run a Capacity Check

1. Click **Capacity Planner & Insight** in the module switcher
2. Click **Analytics Dashboard** in the sidebar
3. Select a project from the dropdown and set a date range
4. Review the **Team Allocation** and **Assignee Capacity** tabs

## Step 5 - Score Your Backlog

1. Click **Backlog Prioritization** in the module switcher
2. Select your Jira project
3. Choose a scoring template (ICE, RICE, WSJF, or Value vs Effort)
4. Click any metric cell to enter values - the Score column updates automatically

## Step 6 - Create a Portfolio View

1. Click **Portfolio (PPM)** in the module switcher
2. Click **New Portfolio**
3. Set a filter (select projects or enter a JQL query)
4. Click **Save** → switch to **Gantt Chart** view for timeline visualization

## What's Next?

- Set up your team in **Teams Management** for better capacity reporting
- Configure **Backlog Prioritization** templates for your scoring framework
- Invite your team by assigning Member roles via **Settings → RBAC → User Roles**`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## Role Model Overview

The app uses a two-role model that integrates directly with Jira's existing user management:

| **Role** | How Assigned | What They Can Do |
|---|---|---|
| **Global Admin** | Automatic - inherited from Jira site administrator status | Full access to all modules, settings, RBAC management, approve/reject time entries |
| **Member** | Manually assigned by a Global Admin inside the app | Log time, run capacity analysis, score backlogs, view portfolio data |
| **No Role (default)** | Automatic - all Jira users without an assigned role | Read-only access only; cannot log time, approve, or modify data |

## Access Levels by Feature

| **Feature** | Global Admin | Member | No Role |
|---|---|---|---|
| **Log time against issues** | Yes | Yes | No |
| **Edit own time entries** | Yes | Yes | No |
| **Approve / reject time entries** | Yes | No | No |
| **View capacity analytics** | Yes | Yes | Read-only |
| **Score backlog items** | Yes | Yes | No |
| **View portfolio data** | Yes | Yes | Read-only |
| **Access Settings** | Yes | No | No |
| **Assign / revoke Member roles** | Yes | No | No |
| **Create billing accounts** | Yes | No | No |
| **Create scoring templates** | Yes | Member (own) | No |
| **Create and save portfolios** | Yes | Yes | No |

## How to Open the App

1. Log in to your Jira Cloud site
2. Click **Apps** in the top navigation bar
3. Select **"Time Tracking, Resource Planning & Project Management"**

## How to Check Your Own Permissions

Go to **Settings → My Permissions**. This tab shows:
- Your assigned role (Global Admin, Member, or None)
- Your total permission count
- Which modules you can access
- Which actions are restricted for your role

## How Global Admin Works

Global Admin is **automatically detected** - not assigned inside the app. Anyone with the Jira site-level ADMINISTER permission is automatically a Global Admin.

- **To grant Global Admin**: Add the user to the Jira administrator group in Jira user management
- **To revoke Global Admin**: Remove the user from the Jira administrator group
- The app detects changes automatically on the user's next action - no manual sync needed

## How to Request Access

If features are greyed out or unavailable:
1. Open **Settings → My Permissions** to confirm your current role
2. If you have no role, contact your Jira Admin or app manager
3. Ask them to assign you the **Member** role from **Settings → RBAC → User Roles**

There is no self-service role request form - access is granted by a Global Admin.`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. USER GUIDE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "overview-dashboard",
          title: "Overview & Dashboard",
          content: `
## App Layout

The app uses a consistent layout across all modules:

| **Area** | Location | Purpose |
|---|---|---|
| **Module Switcher** | Top of sidebar dropdown | Switch between the 4 modules |
| **Sidebar Navigation** | Left panel | Navigate between sections within the active module |
| **Content Area** | Main right panel | Displays the active section's content |
| **Settings Link** | Bottom of sidebar | Access global app configuration |

## Module Navigation

Use the dropdown at the top of the sidebar to switch modules:

| **Module** | What It Opens |
|---|---|
| **Capacity Planner & Insight** | Analyze team workload, capacity, and delivery risks |
| **Time Tracking** | Log, review, and approve time entries; build timesheet reports |
| **Portfolio (PPM)** | Cross-project timeline, Gantt, and portfolio health views |
| **Backlog Prioritization** | Score and rank backlog items using scoring frameworks |

## Common UI Patterns

### Scope / Filter Button
Most views have a **Scope** or **Filter** button in the top-right. Click it to open a modal where you select Projects and Date Ranges before loading data. Always set a scope before expecting data to load.

### Save / Saved Items
Reports, plans, portfolios, and scoring views can all be saved. Look for a **Save** button in the top-right of any configurable view. Saved items appear in the sidebar for quick access.

### Export Button
Time Tracking reports and Backlog tables have an **Export** button. Options: CSV (all views) and PDF (Time Tracking reports).

### Log Time
Available in all Time Tracking views. Click **Log Time** to open a quick-log form - search for an issue, enter hours, select date, pick category.

## Settings - Interface Walk-through

| **Tab** | Purpose |
|---|---|
| **General** | App-wide preferences (time unit, timezone, working days) |
| **Time Tracking** | Time tracking module settings |
| **Capacity** | Capacity module display settings |
| **Backlog** | Scoring model configuration |
| **Worklog Fields** | Custom fields that appear in the Log Time form |
| **Time Categories** | Categories for classifying worklogs |
| **Manage Staff** | Holiday calendars, workload schemes, staff assignments |
| **RBAC → User Roles** | Assign/revoke Member role for users |
| **My Permissions** | View your own role and what you can and cannot do |

## Tips for New Users

- **Check My Permissions first** if features seem unavailable - most restrictions are role-based
- **Always set a date range** before loading capacity or time reports - the app requires scope to load data
- **Refresh manually** to see changes made by other users - the app does not push live updates
- **Narrow your filters** for large projects - loading 10,000+ issues takes time`,
        },
        {
          slug: "key-features",
          title: "Key Features",
          content: `
## Capacity Planner & Insight

| **Feature** | Description |
|---|---|
| **Capacity Planner** | Timesheet-style capacity view showing who is working on what and how much; group by User, Team, Group |
| **Saved Plans** | Save and reuse planning configurations for recurring sprint/cycle reviews |
| **Capacity Report** | Multi-dimensional tabular report combining available hours, estimated work, and logged hours |
| **Analytics Dashboard** | Four-tab dashboard covering team allocation, per-person capacity, deadline risks, and status aging |
| **Team Allocation Tab** | Issue distribution by status, type, and priority across the team |
| **Assignee Capacity Tab** | Per-person breakdown of issue count, estimates, and logged hours vs. available hours |
| **Deadlines & Risks Tab** | Issues near or past their due date, sorted by risk level |
| **Status Aging Monitor Tab** | Issues stuck in the same status for longer than a configured threshold |

## Time Tracking & Reporting

| **Feature** | Description |
|---|---|
| **My Calendar** | Personal daily calendar showing hours logged per day; highlights days with missing entries |
| **My Timesheet** | Personal tabular view of logged time with filters, grouping, and export |
| **Report Builder** | Full-team timesheet reports with advanced nested filtering, grouping, chart visualization, and CSV/PDF export |
| **Billing Accounts** | Categorize worklogs by client or engagement for account-based billing reports |
| **Time Categories** | Classify time entries by work type (Development, Code Review, Meetings, QA, etc.) |
| **Worklog Fields** | Custom fields that capture extra context when logging time (text, number, select, checkbox) |
| **Log Time** | Log time directly against any Jira issue from any Time Tracking view |
| **Approve / Reject** | Global Admins can approve or reject time entries submitted by team members |

## Portfolio Management (PPM)

| **Feature** | Description |
|---|---|
| **Table View** | Flat sortable/filterable issue table with inline editing |
| **Gantt Chart** | Interactive timeline with drag-to-update dates, dependencies (FS/SS/FF/SF), baseline, critical path |
| **Graph View** | Tree/node diagram showing epic-story-subtask hierarchy |
| **Treemap View** | Space-filling grid sized by effort metric, colored by status or priority |
| **Pie Chart View** | Distribution charts showing issue breakdown by any dimension |
| **Board View** | Kanban-style column layout organized by Jira status |
| **Dashboard Gadget** | Portfolio metrics widget embedded on any Jira dashboard |
| **JQL Filtering** | Define portfolio scope dynamically using Jira Query Language |
| **Saved Portfolios** | Persist portfolio name, filter scope, and settings for recurring reviews |

## Backlog Prioritization

| **Feature** | Description |
|---|---|
| **Backlog Table** | Sortable, filterable table of Jira issues with inline-editable scoring metric columns |
| **Scoring Templates** | Built-in frameworks: ICE, RICE, WSJF, Value vs Effort; fully custom templates also supported |
| **Priority Matrix** | Scatter plot placing each issue on two axes (e.g., Value vs. Effort) with quadrant labels |
| **Views & Filters** | Filter by issue type, status, assignee, label, sprint; sort by any column including Score |
| **Saved Views & Reports** | Save scored backlog snapshots with all metric values and filter/sort configuration |

## Teams Management

| **Feature** | Description |
|---|---|
| **Teams** | Create named groups of Jira users; source from Manual selection or Jira Group sync |
| **Programs** | Group multiple teams into higher-level organizational structures (e.g., Departments, PI teams) |
| **Cross-Module Reuse** | Teams available for filtering and grouping across Capacity, Time Tracking, and Portfolio |`,
        },
        {
          slug: "how-to-tutorials",
          title: "How-To Tutorials",
          content: `
## Capacity Planning

### How to Run a Capacity Check

1. Go to **Capacity Planner & Insight → Analytics Dashboard**
2. Click **Scope** → select a Project and Date Range → click **Apply**
3. Review:
   - **Team Allocation** tab - who has what and how much
   - **Assignee Capacity** tab - per-person load vs. estimates
   - **Deadlines & Risks** tab - overdue and at-risk issues
   - **Status Aging** tab - issues stuck in a status too long

---

### How to Create and Save a Capacity Plan

1. Go to **Capacity Planner & Insight → Capacity Planner**
2. Click **Create New Planner**
3. Select users or teams to include, set date range and view mode
4. Review the capacity distribution
5. Click **Save** and give the plan a name
6. Reload it anytime from **Saved Plans** in the sidebar

---

## Time Tracking

### How to Log Time

1. Open the app → **Time Tracking** module
2. Click **Log Time** button (top-right of any report or calendar)
3. Search for the Jira issue you worked on
4. Enter hours (e.g., \`2h 30m\`)
5. Select the date
6. Optionally select an **Account** and **Time Category**
7. Click **Save**

**Tip:** Use **My Calendar** to see which days have no logged time and fill in gaps quickly.

---

### How to Review Your Daily Time (My Calendar)

1. Open **Time Tracking → My Calendar**
2. Each day cell shows total hours logged
3. Click any day cell to see the breakdown of issues logged that day
4. Click a cell to add, edit, or delete worklogs for that date

---

### How to Build a Timesheet Report

1. Go to **Time Tracking → Timesheet**
2. Click **Create Report**
3. Click **Add Filter** to set: Projects, Users, Accounts, Date Range
4. Add **Group By** dimensions (e.g., Project → Issue → Date)
5. Choose **View Mode**: Days, Weeks, or Months
6. Click **Save** to preserve the report configuration
7. Click **Export** to download as CSV or PDF

---

### How to Create a Billing Account

1. Open **Time Tracking → Accounts**
2. Click **Create Account**
3. Enter Account Name and optional Account Key
4. Click **Save**
5. Select this account from the Log Time form when logging time for that client

---

## Portfolio Management

### How to Create a Portfolio

1. Go to **Portfolio (PPM)** in the module switcher
![Step 1](/time-tracking-imgs/portfolio/step1.png)

2. Click **Filter** → choose Manual Filter or Saved Filter or JQL
![Step 2](/time-tracking-imgs/portfolio/step2.png)
3. Set your scope (projects, issue types, date range)
![Step 3](/time-tracking-imgs/portfolio/step3.png)
4. Click **Apply** to preview matching issues
![Step 4](/time-tracking-imgs/portfolio/step4.png)

5. Click **Save**

---

### How to Switch Portfolio Views

With a portfolio open, use the **view mode selector** (top-right) to switch between:
Table → Gantt Chart → Graph View → Treemap → Pie Chart → Board View

![Views](/time-tracking-imgs/portfolio/views.png)
---

### How to Edit Dates in the Gantt Chart

1. Open a portfolio → switch to **Gantt Chart** view
2. Drag the **left edge** of a bar to change the start date
3. Drag the **right edge** to change the due date
4. Changes save directly to the Jira issue's Start Date and Due Date fields

![Gantt1](/time-tracking-imgs/portfolio/gantt1.png)
---

### How to Create a Gantt Dependency

1. Open portfolio in **Gantt Chart** view
2. Hover over a task bar's end point until the connector dot appears
3. Drag to the start of the dependent task
4. Dependency types: Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF)

![Gantt2](/time-tracking-imgs/portfolio/gantt2.png)
---

## Backlog Prioritization

### How to Score a Backlog

1. Go to **Backlog Prioritization → Backlog Table**
2. Select your Jira project
3. Choose a scoring template (e.g., ICE, RICE, WSJF)
4. Click any metric cell to enter values inline
5. The Score column calculates automatically
6. Click **Save Report** to preserve the scored snapshot

---

### How to Use the Priority Matrix

1. Score your backlog using the steps above
2. Click the **Matrix** view button (top-right view switcher)
3. Each dot represents one issue
4. Hover on a dot to see issue details
5. Click **Matrix Settings** to change the X and Y axes

---

### How to Create a Custom Scoring Template

1. Open the template selector → **Manage Templates** → **Create New Template**
2. Enter Template Name
3. Add each metric (name, input type, range)
4. Enter the formula referencing your metric names (e.g., \`Impact * Confidence * Ease\`)
5. Click **Save** - the template appears in the template selector

---

## Admin Tasks

### How to Assign a Member Role

1. Go to **Settings → RBAC → User Roles**
2. Search for the user by name or email
3. Click the **Edit** (pencil) icon
4. Check the **Member** checkbox
5. Click **Save** - takes effect immediately

![RBAC](/time-tracking-imgs/portfolio/rbac.png)

---

### How to Create a Team

1. Open **Time Tracking** or **Capacity Planner** module
2. Click **Teams** in the sidebar
3. Click **Create Team**
4. Enter Team Name and select Source (Manual or Jira Group)
5. Add members and click **Save**

![RBAC](/time-tracking-imgs/portfolio/teams.png)`,
        },
        {
          slug: "working-with-modules",
          title: "Working with Core Modules",
          content: `
This guide is a complete reference for all five major functional areas of the app.

---

## Module 1 - Capacity Planner & Insight

### Capacity Planner

The Capacity Planner is a timesheet-style view showing team workload distribution.

**Creating a Plan:**
1. Capacity Planner & Insight → Capacity Planner → Create New Planner
2. Select Users / Groups / Teams to include
3. Choose date range and view mode (Days, Weeks, Months)
4. The planner generates a capacity distribution view

**Planner Layout:**

| **Column** | Description |
|---|---|
| **User / Group / Team** | Left column - people/groups in the plan |
| **Issue rows** | Each row shows an issue with estimated and remaining hours |
| **Date columns** | Hours for each specific date/week/month |
| **Total row** | Aggregates hours across all rows |

**Grouping Options:** User → Issue | Team → User → Issue | Issue Type → User

**Saving a Plan:** click Save → enter name → Confirm. Reload from Saved Plans in the sidebar.

### Analytics Dashboard

The Analytics Dashboard provides a four-tab view of team workload health.

**Setup:** Capacity Planner & Insight → Analytics Dashboard → click Scope → select Project + Date Range → Apply

**Tab 1 - Team Allocation:**
- Issue distribution by status, type, and priority across the team
- Total issue count and estimated hours per group
- Spot over-loaded statuses or issue types at a glance

**Tab 2 - Assignee Capacity:**
- Issue count, original estimates, and logged time per assignee
- Compare estimated remaining work vs. available capacity
- Identify over- or under-allocated team members before sprint commitments

**Tab 3 - Upcoming Deadlines & Risks:**
- Issues near or past their due date, sorted by risk level (overdue first)
- Shows remaining estimate alongside the due date
- Use for weekly stakeholder updates

**Tab 4 - Status Aging Monitor:**
- Issues stuck in the same status for an unusually long time
- Configurable threshold (e.g., flag "In Review" issues older than 5 days)
- Reveals review bottlenecks and blocked handoffs

### Saved Plans

- After configuring the Capacity Planner, click **Save**
- Saved plans appear in the **Saved Plans** sidebar section
- Click any saved plan name to reload its configuration
- **Manage:** rename (edit icon), delete (trash icon), or duplicate (open → modify → save new name)

### Capacity Report

The Capacity Report provides a tabular breakdown of available hours, estimated work, and logged hours.

**Configuration:**
- **Filters:** Project, Users, Teams, Date Range, Issue Type
- **Group By:** Assignee, Team, Project
- **View Modes:** Days, Weeks, Months

**Reading the Report:**

| **Column** | Meaning |
|---|---|
| **Available** | Total available working hours (based on working days and hours/day settings) |
| **Estimated** | Sum of remaining estimates on assigned issues |
| **Logged** | Actual hours logged in Jira worklogs |
| **Allocation %** | Estimated hours as a percentage of available hours |

**Export:** Export → CSV

---

## Module 2 - Time Tracking & Reporting

### My Calendar

My Calendar is a personal daily view of your logged time.

- Each day cell shows total hours logged for that date
- Hover on a day cell to see a summary of worklogs
- Click a day cell to see the detailed list of issues logged that day
- **Logging time from the calendar:** click the day cell → Log Time → search issue → enter hours → select category → Save
- **Editing a worklog:** click the day cell → find the worklog → click the Edit (pencil) icon
- **Deleting a worklog:** click the day cell → find the worklog → click the Delete (trash) icon
- Use the **< >** arrows to navigate months; click **Today** to return to current date

### My Timesheet

My Timesheet is a personal tabular view of your logged time.

| **Component** | Description |
|---|---|
| **Filter Bar** | Set project, date range, account, and category filters |
| **Group By** | Add grouping dimensions (Project, Issue, Date, Account, etc.) |
| **Date Columns** | Each column shows hours for a specific date/week/month |
| **View Mode Toggle** | Switch between Days, Weeks, and Months |

**Recommended Group-By Combinations:**

| **Goal** | Group By Setting |
|---|---|
| **Project breakdown** | Project → Issue |
| **Day-by-day view** | Issue → Date |
| **Billing view** | Account → Project → Issue |

### Timesheet Report Builder

The Report Builder shows time logged by the entire team with full filtering and grouping.

| **Component** | Description |
|---|---|
| **Report Name** | Click the title to rename; auto-saves on blur |
| **Add Filter** | Set Project, Users, Accounts, Date Range, Time Category |
| **Group By** | Stack multiple grouping levels for nested reports |
| **View Mode** | Days, Weeks, or Months column display |
| **Log Time** | Quick-log button available within the report |
| **Chart Section** | Bar or pie chart of logged time (included in PDF exports) |
| **Export** | CSV (data) or PDF (formatted report with charts) |

### Filters and Grouping

**Available Filters:**

| **Filter** | Description |
|---|---|
| **Project** | Limit results to one or more Jira projects |
| **Users / Assignee** | Filter to specific team members |
| **Date Range** | From and To date picker |
| **Account** | Filter by billing account |
| **Time Category** | Filter by category type |
| **Issue Type** | Filter by Jira issue type |
| **Sprint** | Filter by active or past sprints |

**Grouping Dimensions:**
Project, Assignee, Issue, Issue Type, Priority, Status, Reporter, Label, Sprint, Parent, Account, Time Category, Date

### Billing Accounts

Billing Accounts categorize worklogs by client or engagement.

- **Create:** Time Tracking → Accounts → Create Account → Name + Key → Save
- **Use when logging:** select from the Account dropdown in the Log Time form
- **Filter reports:** Add Filter → Account in the Report Builder
- **Group reports:** Group By → Account → Project → Issue for billing breakdown
- **Export:** CSV from filtered report for upload to billing/invoicing systems

### Time-Tracking Settings

Access from Settings → Time Tracking tab:

| **Setting** | Options | Default |
|---|---|---|
| **Time Display Unit** | Jira default, Hours/Minutes, Hours, Days | Jira default |
| **Default Time Range** | Current month/quarter/year/week/day | Current month |
| **Timezone Mode** | Jira timezone / User's timezone / My timezone | Jira timezone |
| **First Day of Week** | Sunday–Saturday | Monday |
| **Working Days** | Mon–Fri checkboxes | Mon–Fri |
| **Hours Per Day** | Number input | 8 |

---

## Module 3 - Portfolio Management (PPM)

### Creating a Portfolio

1. Portfolio (PPM) → New Portfolio → enter name
2. Click Filter → choose Manual Filter (dropdowns) or JQL
3. Click Apply to preview matching issues
4. Click Save - appears in sidebar Portfolios section

**Example JQL Scopes:**
- All active epics: \`issuetype = Epic AND status != Done ORDER BY priority DESC\`
- High-priority due this quarter: \`priority in (Highest, High) AND due >= startOfQuarter()\`

**Important:** Save immediately after creating - unsaved portfolios are lost on navigation.

### View Types

| **View** | Best For |
|---|---|
| **Table** | Detailed review, bulk editing, data export |
| **Gantt Chart** | Roadmap presentations, dependency visualization, timeline planning |
| **Graph View** | Epic-story-subtask hierarchy visualization |
| **Treemap** | Visual health check; issue size proportional to effort metric |
| **Pie Chart** | Status/priority distribution for stakeholder reports |
| **Board View** | Kanban-style workflow tracking, fast triage |

**Switching Views:** use the view mode selector in the top-right of the portfolio.

### Gantt Chart - Detailed Reference

- **Render requirement:** Issues must have Start Date and Due Date fields mapped in Portfolio Settings
- **Drag bar edges** to update Jira start/due dates directly
- **Create dependencies:** hover bar end → drag connector dot → drop on dependent bar start
- **Dependency types:** FS (Finish-to-Start), SS (Start-to-Start), FF (Finish-to-Finish), SF (Start-to-Finish)
- **Baseline mode:** compare current plan against a saved baseline
- **Critical path:** highlighted automatically based on dependency chain

### Saved Portfolios

- All users with Member+ role can see saved portfolios
- **Rename:** click the portfolio name → type new name → press Enter
- **Edit scope:** open portfolio → Settings → modify filter → Save
- **Delete:** Settings → Delete (confirmation required)
- **Tip:** coordinate edits to shared portfolios - last save wins

### Dashboard Gadget

Adds portfolio metrics to any Jira dashboard.

**Adding:**
1. Jira dashboard → Add Gadget → search "Project Portfolio Management" → Add
2. Configure gadget: select portfolio/scope → Save

**Troubleshooting:**
- No data: verify portfolio scope still returns issues and you have read access
- Blank after setup: remove and re-add the gadget with fresh configuration

![Gadget](/time-tracking-imgs/portfolio/gadget.png)

### Portfolio Settings

Access: Portfolio → Settings gear icon → Portfolio Settings tab, or global Settings → Portfolio tab

| **Setting** | Description |
|---|---|
| **Time Display Unit** | How hours display in portfolio table |
| **Bookings start date** | Which Jira field maps to the Gantt bar start (e.g., Start date) |
| **Bookings end date** | Which Jira field maps to the Gantt bar end (e.g., Due date) |
| **Hours per day** | Converts story points/day estimates to hours |
| **Working days** | Days counted as working days in capacity calculations |

![Setting](/time-tracking-imgs/portfolio/setting.png)
---

## Module 4 - Backlog Prioritization

### Backlog Table

The Backlog Table is a sortable, filterable table with inline-editable scoring metrics.

**Setup:** Backlog Prioritization → Backlog Table → select Project → choose Scoring Template

**Scoring Issues:**
- Click any metric cell to edit inline
- Input types: Number field, Dropdown, Star rating (1–5), Effort scale (XS/S/M/L/XL)
- The Score column recalculates automatically - changes save instantly

**Sorting:** click any column header (Score ↓ = highest priority first)

**Filtering:** Issue Type, Status, Assignee, Label, Sprint, Priority

### Scoring Templates

**Built-in Templates:**

| **Template** | Formula | Best For |
|---|---|---|
| **ICE** | Impact × Confidence × Ease | Feature requests and bugs |
| **RICE** | (Reach × Impact × Confidence) / Effort | Product features with reach |
| **WSJF** | (Business Value + Time Criticality + Risk Reduction) / Job Size | SAFe/ART prioritization |
| **Value vs. Effort** | Value / Effort | Simple two-dimension ranking |

**Creating a Custom Template:**
1. Template selector → Manage Templates → Create New Template
2. Enter name, add metrics (name, input type, range)
3. Enter formula referencing metric names
4. Click Save

### Priority Matrix

The Priority Matrix is a scatter plot placing each issue on two axes.

- **Open:** Backlog Table → Matrix view button (top-right)
- Each dot = one issue; hover to see details
- **Quadrants:** Quick Wins (high value, low effort), Big Bets, Fill-ins, Avoid
- **Customize axes:** click Matrix Settings → choose any numeric metric for X and Y
- **Drag** quadrant divider lines to reposition boundaries

### Views, Filters & Sorting

- **View toggle:** Table ↔ Matrix (top-right view switcher)
- **Saved Views:** Save → enter name → reload from Saved Views in sidebar
- **Clear Filters:** resets all active filters to full unfiltered list

### Saved Prioritized Reports

Saves a snapshot of the backlog scoring at a specific point in time.

**Saving:** Backlog Table → score issues → Save Report → enter name → Confirm

**What a Saved Report Preserves:** project selection, scoring template, metric values per issue, sort and filter configuration

**What It Does Not Preserve:** current Jira issue statuses, new issues added after save, template changes

---

## Module 5 - Teams Management

### Teams

Teams are named groups of Jira users reused across Capacity, Time Tracking, and Portfolio.

**Creating a Team:**

| **Field** | Required | Description |
|---|---|---|
| **Team Name** | Yes | Display name (e.g., "Platform Team") |
| **Description** | No | Brief description |
| **Color** | No | Color tag for visual identification |
| **Source** | Yes | Manual (add members individually) or Jira Group (auto-sync) |
| **Members** | Yes | Add by user search or Jira Group selection |

**Source Types:**
- **Manual:** members stay fixed until you edit the team
- **Jira Group:** members auto-sync from the Jira group - changes to the group reflect in the team

**Using Teams in Other Modules:**
- Capacity Planner: Group By → Team
- Capacity Report: Filter by Team
- Time Tracking Report: Filter or Group by Team

### Programs

Programs group multiple Teams into higher-level organizational structures.

**Creating a Program:**
1. Teams → Programs tab → Create Program
2. Enter Program Name, select Teams to include → Save

**Hierarchy:** Program → Team A (Members) → Team B (Members)

**Best use cases:**
- Model departmental structure (Engineering → Platform, Frontend, Backend teams)
- Program Increment planning (PI-2025-Q2 → Sprint Teams)
- Leadership capacity rollups (Program → Team → User in Capacity Planner)`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
## Capacity Planning

- **Run a capacity check before every sprint planning session** - the Assignee Capacity tab shows carryover load in real time.
- **Use the Assignee Capacity tab** before sprint planning to spot over-allocated team members before commitments are made.
- **Save your plans** for recurring planning cycles - don't reconfigure from scratch each sprint.
- **Monitor Status Aging** weekly - issues stuck in "In Review" for 5+ days are a reliable bottleneck indicator.
- **Use Teams in the Capacity Planner** - team-level grouping gives leadership a rolled-up view without reviewing each individual.

## Time Tracking

- **Log daily, not weekly.** End-of-week logging is less accurate and harder to reconcile with actual Jira issue work.
- **Use Time Categories** to split time between Development, Meetings, Code Review, and QA - this makes reports much more useful for analysis.
- **Use My Calendar** to identify days with no logged time before the weekly approval window closes.
- **Create Billing Accounts** only if you have client billing needs - skip this feature if billing categorization isn't required.
- **Set Date Range first** before loading any report - the app requires a project and date range to load data.

## Portfolio Management

- **Configure date field mappings first** (Portfolio Settings → Calendar & working days) before expecting Gantt to render correctly.
- **Save portfolios immediately** after creating them - unsaved portfolios are lost on navigation.
- **Use JQL for complex portfolios** - manual filters are easier to set up but JQL is more powerful for cross-project scenarios.
- **Coordinate edits to shared portfolios** - the app uses last-write-wins; simultaneous edits can overwrite each other.
- **Use the Treemap and Pie Chart views** for executive stakeholder reporting - they convey health at a glance without detail overload.

## Backlog Prioritization

- **Use one scoring template consistently** within a team or planning cycle - changing templates mid-cycle makes comparison impossible.
- **Keep metric definitions clear** in the template description so all team members score with the same interpretation.
- **Save commonly used views** for recurring backlog reviews - views preserve column layout, filters, and sorting.
- **Use the Priority Matrix alongside the table** - the visual quadrant view often reveals patterns that aren't obvious in a sorted list.
- **Save a report before each sprint planning session** to create a historical record of how you prioritized.

## Teams Management

- **Use Jira Group as the team source** if team membership is already managed in Jira - this keeps the team in sync automatically.
- **Create Programs** for leadership capacity reviews - rolling up Teams → Program gives directors aggregate data without per-person detail.
- **A team can belong to only one program** - restructure programs if teams move between departments.

## General

- **Check My Permissions** before contacting support about missing features - most "missing" features are role-based.
- **Narrow your date ranges** for large projects - loading 10,000+ issues takes time; use filters to keep datasets focused.
- **Refresh manually** to see changes made by other users - the app does not push live updates.`,
        },

        // ── Capacity Planner & Insight sub-pages ──
        {
          slug: "capacity-planner",
          title: "Capacity Planner",
          content: `
The Capacity Planner is a timesheet-style view that shows how team workload is distributed across users, groups, and teams over time.

## Opening the Capacity Planner

Capacity Planner & Insight → **Capacity Planner** → click **Create New Planner** or open a saved plan from the sidebar

![Step 1](/time-tracking-imgs/capacity/planner/capacityResourceFilter-update.png)
## Creating a New Plan

1. Click **Create New Planner**
2. Select who to include:
   - **Users** - individual Jira users
   - **Groups** - Jira groups
   - **Teams** - teams defined in the Teams Management module
3. Set **Date Range** and **View Mode** (Days, Weeks, Months)
4. Click **Apply** - the planner loads the capacity view

## Planner Layout

| **Column** | Description |
|---|---|
| **User / Group / Team** | Left column - the people or groups in the plan |
| **Issue rows** | Each row under a user shows an assigned Jira issue |
| **Estimate columns** | Hours per date period (original estimate and remaining) |
| **Date columns** | One column per day/week/month based on view mode |
| **Total row** | Aggregates hours across all rows |

![Step 2](/time-tracking-imgs/capacity/planner/capacityPlannerTable.png)


## Grouping Options

| **Grouping** | When to Use |
|---|---|
| **User → Issue** | Individual workload drill-down |
| **Team → User → Issue** | Team-level rollup with individual breakdown |
| **Issue Type → User** | Understand how issue types distribute across people |

## Reading the Planner

- **Green cells** - within normal capacity range
- **Red / amber cells** - over-allocated for that period
- Hover on any cell to see issue details and hour breakdown

## Saving a Plan

1. Configure the planner (users, date range, grouping)
2. Click **Save**
3. Enter a plan name (e.g., "Sprint 42 Capacity")
4. Click **Confirm**
5. The plan appears in **Saved Plans** in the sidebar

## Tips

- Run a capacity check before every sprint planning session
- Use Team grouping to give leadership a rolled-up view
- Save plans per sprint to build a historical capacity record`,
        },
        {
          slug: "analytics-dashboard",
          title: "Analytics Dashboard",
          content: `
The Analytics Dashboard provides a four-tab view of team workload health, giving project managers and team leads real-time insight into allocation, risks, and bottlenecks.

## Opening the Dashboard

Capacity Planner & Insight → **Analytics Dashboard**

![Step 3](/time-tracking-imgs/capacity/analytics/analyticsScope.png)

## Setting Scope

Before data loads, you must configure the scope:
1. Click **Scope** (top-right)
2. Select **Project(s)** and **Date Range**
3. Optionally add **Users** or **Teams** filters
4. Click **Apply**

![Step 4](/time-tracking-imgs/capacity/analytics/analyticsTable.png)


## Tab 1 - Team Allocation

Provides an overview of how issues are distributed across the team.

- Total issue count and estimated hours per group
- Breakdown by issue status, issue type, and priority
- Use to spot uneven distribution or overloaded issue types at a glance

## Tab 2 - Assignee Capacity

Shows per-person workload metrics to identify over- or under-allocation.

| **Column** | Meaning |
|---|---|
| **Assignee** | Team member name |
| **Issues** | Number of assigned open issues |
| **Original Estimate** | Total originally estimated hours |
| **Remaining Estimate** | Hours of work remaining |
| **Logged** | Hours already logged |
| **Allocation** | Remaining estimate as % of available hours |

**Use before sprint planning** to confirm no team member is already over-committed.

## Tab 3 - Upcoming Deadlines & Risks

Lists issues near or past their due date, sorted by risk level.

| **Column** | Meaning |
|---|---|
| **Issue** | Jira issue key and summary |
| **Assignee** | Who is responsible |
| **Due Date** | Jira due date |
| **Remaining** | Remaining estimate |
| **Risk Level** | Overdue / At Risk / On Track |

**Use for weekly stakeholder updates** to communicate delivery risks proactively.

## Tab 4 - Status Aging Monitor

Identifies issues that have been stuck in the same status for too long.

- Configurable threshold (e.g., flag issues in "In Review" for 5+ days)
- Ordered by days stuck (longest first)
- Reveals review bottlenecks and blocked handoffs

**Configuring the threshold:** click **Settings** icon → enter the number of days per status → **Save**

## Tips

- Check Tab 2 (Assignee Capacity) before every sprint commitment meeting
- Use Tab 3 (Deadlines & Risks) for weekly stakeholder status reports
- Set realistic aging thresholds in Tab 4 - too low creates noise, too high misses real blockers`,
        },
        {
          slug: "saved-plans",
          title: "Saved Plans",
          content: `
Saved Plans let you preserve capacity planner configurations for reuse across sprints, quarters, or recurring planning cycles.

## What Gets Saved

When you save a Capacity Planner configuration, the following is preserved:

| **Saved** | Not Saved |
|---|---|
| **Selected users / groups / teams** | Live Jira worklog data |
| **Date range** | Current issue statuses |
| **View mode (Days/Weeks/Months)** | Hours that have changed since last save |
| **Grouping configuration** | New issues assigned after save |

Opening a saved plan re-runs the query against current Jira data - it always shows live data within the saved scope.

## Saving a Plan

1. Configure the Capacity Planner (users, date range, grouping, view mode)
2. Click **Save** in the top-right toolbar
3. Enter a descriptive plan name (e.g., "Q2 Sprint 5 - Platform Team")
4. Click **Confirm**

The plan immediately appears in the **Saved Plans** section of the sidebar.

## Loading a Saved Plan

- In the sidebar, click **Saved Plans**
- Click any plan name to open it
- The planner reloads with the saved configuration and current Jira data

## Managing Saved Plans

| **Action** | How |
|---|---|
| **Rename** | Hover the plan → click the Edit (pencil) icon → type new name → Enter |
| **Delete** | Hover the plan → click the Delete (trash) icon → Confirm |
| **Duplicate** | Open the plan → modify as needed → Save with a new name |

## Naming Convention Tips

Use a consistent naming pattern to keep saved plans organised:

- \`[Team] - [Sprint/Quarter]\` - e.g., "Backend Team - Sprint 10"
- \`[Date] - [Purpose]\` - e.g., "2025-Q3 Capacity Review"
- \`[Program] - [PI Number]\` - e.g., "Engineering - PI-2025-Q2"

## Tips

- Save a plan at the start of each sprint to capture the initial commitment baseline
- Don't reconfigure from scratch each sprint - duplicate the previous plan and adjust the date range`,
        },
        {
          slug: "capacity-report",
          title: "Capacity Report",
          content: `
The Capacity Report provides a structured tabular breakdown of available hours, estimated work, and logged hours - giving managers a precise view of team utilisation.

## Opening the Capacity Report

Capacity Planner & Insight → **Capacity Report**

![Step 5](/time-tracking-imgs/capacity/Report/ConfigureReport.png)

## Configuring the Report

| **Control** | Options |
|---|---|
| **Project** | One or more Jira projects |
| **Users** | Filter to specific individuals |
| **Teams** | Filter by teams from Teams Management |
| **Date Range** | From and To date picker |
| **Issue Type** | Story, Bug, Task, Sub-task, Epic |
| **Group By** | Assignee · Team · Project |
| **View Mode** | Days · Weeks · Months |

Click **Apply** after setting all controls.

![Step 6](/time-tracking-imgs/capacity/Report/CustomFilter.png)

## Reading the Report

| **Column** | Meaning |
|---|---|
| **Name** | User / Team / Project (based on Group By) |
| **Available** | Total working hours available (working days × hours/day from Settings) |
| **Estimated** | Sum of remaining estimates on assigned open issues |
| **Logged** | Actual hours logged via Jira worklogs |
| **Allocation %** | Estimated ÷ Available × 100 - higher means more committed |

![Step 7](/time-tracking-imgs/capacity/Report/DetailedReport.png)

### Allocation Interpretation

| **Allocation %** | Status |
|---|---|
| **< 70%** | Under-utilised - capacity available |
| **70–100%** | Healthy utilisation |
| **> 100%** | Over-allocated - risk of missed commitments |

## Exporting

Click **Export → CSV** to download the full report as a spreadsheet.

The CSV includes all rows, columns, and grouping levels for import into Excel, Google Sheets, or BI tools.

## Tips

- Run the Capacity Report at the start of sprint planning to validate commitments before finalising
- Group by **Team** for a leadership-level rollup; group by **Assignee** for individual workload detail
- Set **Hours Per Day** and **Working Days** correctly in Settings - inaccurate settings skew the Available column`,
        },

        // ── Time Tracking & Reporting sub-pages ──
        {
          slug: "my-calendar",
          title: "My Calendar",
          content: `
My Calendar is a personal daily view of your logged time in Time Tracking & Reporting.

## Overview

My Calendar shows a monthly grid where each day cell displays the total hours you logged on that date. It is your quickest way to spot days with missing time and to log or edit individual worklogs.

## Navigating the Calendar

| **Control** | Action |
|---|---|
| **< >** arrows | Move to previous / next month |
| **Today** button | Jump back to the current month |
| **Day cell** | Click to open the detailed worklog list for that day |
| **Hover on day cell** | See a quick summary pop-up of worklogs |

## Logging Time from the Calendar

1. Click any day cell
2. Click **Log Time**
3. Search for the Jira issue by key or title
4. Enter hours (e.g., \`2h 30m\`)
5. Select a **Time Category** (optional but recommended)
6. Click **Save**

## Editing a Worklog

1. Click the day cell containing the worklog
2. Locate the entry in the worklog list
3. Click the **Edit (pencil)** icon
4. Modify hours, category, or description
5. Click **Save**

## Deleting a Worklog

1. Click the day cell containing the worklog
2. Locate the entry in the worklog list
3. Click the **Delete (trash)** icon
4. Confirm deletion

## Tips

- Use the calendar at the end of each day to verify all work is logged before submitting your timesheet.
- Days highlighted with a warning colour indicate missing or low-hour entries relative to your configured working hours.
- The calendar only shows **your own** worklogs - use the Timesheet Report Builder to view team worklogs.`,
        },
        {
          slug: "my-timesheet",
          title: "My Timesheet",
          content: `
My Timesheet is your personal tabular view of logged time, with flexible filters and grouping to analyse your own work hours.

## Layout

| **Component** | Description |
|---|---|
| **Filter Bar** | Set Project, Date Range, Billing Account, and Time Category filters |
| **Group By** | Add one or more grouping dimensions to organise rows |
| **Date Columns** | Each column represents a day, week, or month depending on View Mode |
| **View Mode Toggle** | Switch between **Days**, **Weeks**, and **Months** |
| **Export Button** | Download your timesheet as CSV |

## Setting Filters

1. Click **Add Filter** in the toolbar
2. Select filter type: Project, Account, Time Category, Issue Type, Sprint
3. Choose value(s) from the dropdown
4. Click **Apply** - the timesheet reloads with filtered data

## Grouping Time Entries

Use **Group By** to stack grouping levels for nested breakdowns:

| **Goal** | Recommended Group By |
|---|---|
| **See time per project** | Project → Issue |
| **Day-by-day breakdown** | Issue → Date |
| **Billing/client view** | Account → Project → Issue |
| **Team-role view** | Time Category → Issue |

## Switching View Modes

| **Mode** | Best For |
|---|---|
| **Days** | Day-level detail, daily logging verification |
| **Weeks** | Weekly sprint reviews |
| **Months** | Monthly billing or capacity summaries |

## Exporting

Click **Export → CSV** to download a spreadsheet of your filtered, grouped timesheet data.

## Tips

- My Timesheet shows only **your own** worklogs. Use the Report Builder to see team-wide time.
- Save regularly used filter+group combinations by clicking **Save View**.
- Set the date range to match your billing or approval cycle before exporting.`,
        },
        {
          slug: "timesheet-and-reporting",
          title: "Timesheet and Reporting",
          content: `
The Timesheet Report Builder shows time logged by the **entire team** with full filtering, grouping, charting, and export capabilities.

## Opening the Report Builder

Time Tracking & Reporting → **Timesheet and Reporting** → Create New Report (or open a saved report from the sidebar)

## Report Components

| **Component** | Description |
|---|---|
| **Report Name** | Click the title to rename; saves automatically |
| **Add Filter** | Set Project, Users, Accounts, Date Range, Time Category |
| **Group By** | Stack multiple grouping levels for nested reports |
| **View Mode** | Days, Weeks, or Months column display |
| **Log Time** | Quick-log button - add worklogs without leaving the report |
| **Chart Section** | Bar or pie chart of logged time (included in PDF exports) |
| **Export** | CSV (raw data) or PDF (formatted report with charts) |

## Creating a Report

1. Click **Create New Report**
2. Click **Add Filter** → select Project and Date Range (required)
3. Optionally add: Users, Accounts, Time Category, Issue Type, Sprint filters
4. Set **Group By** to define row hierarchy
5. Choose **View Mode** (Days / Weeks / Months)
6. Click **Apply**
7. Click **Save** → enter a report name → **Confirm**

## Group By Combinations

| **Goal** | Group By |
|---|---|
| **Team overview** | User → Project |
| **Issue-level breakdown** | Project → Issue |
| **Billing report** | Account → User → Issue |
| **Category analysis** | Time Category → User |

## Chart Section

- Toggle chart on/off with the chart icon in the toolbar
- **Bar chart** - compares total hours per group side-by-side
- **Pie chart** - shows percentage share of total hours per group
- Charts are embedded in the PDF export

## Exporting

| **Format** | Contents |
|---|---|
| **CSV** | All rows, columns, and grouping levels as a flat spreadsheet |
| **PDF** | Formatted report with header, filters summary, grouped table, and chart |

## Saving and Reusing Reports

- Saved reports appear in the **Saved Reports** section of the sidebar
- Reports save filters, grouping, and view mode - not the data snapshot
- Opening a saved report re-runs the query against current Jira data`,
        },
        {
          slug: "filters-and-grouping",
          title: "Filters and Grouping",
          content: `
Filters and Grouping controls are available across all Time Tracking & Reporting views - My Timesheet, Timesheet Report Builder, and Capacity Report.

## Available Filters

| **Filter** | Description |
|---|---|
| **Project** | Limit results to one or more Jira projects |
| **Users / Assignee** | Filter to specific team members |
| **Date Range** | From and To date picker |
| **Account** | Filter by billing account |
| **Time Category** | Filter by category type (Development, QA, Meetings, etc.) |
| **Issue Type** | Filter by Jira issue type (Story, Bug, Task, etc.) |
| **Sprint** | Filter by active or completed sprint |

## How to Apply Filters

1. Click **Add Filter** in the toolbar
2. Select a filter dimension
3. Choose one or more values
4. Click **Apply** - results reload immediately
5. Active filters appear as chips in the filter bar
6. Click **×** on any chip to remove that filter

## Grouping Dimensions

Group By lets you nest rows into hierarchical breakdowns:

| **Dimension** | Groups Rows By |
|---|---|
| **Project** | Jira project |
| **Assignee** | User who logged time |
| **Issue** | Jira issue key and title |
| **Issue Type** | Story, Bug, Task, etc. |
| **Priority** | Jira priority level |
| **Status** | Current issue status |
| **Reporter** | Issue reporter |
| **Label** | Jira labels |
| **Sprint** | Sprint name |
| **Parent** | Parent issue (for sub-tasks) |
| **Account** | Billing account |
| **Time Category** | Work category |
| **Date** | Calendar date |

## Stacking Group By Levels

You can stack up to 3 Group By dimensions to create nested views:

**Example - Billing breakdown:**
Account → Project → Issue → (date columns show hours per row)

**Example - Team productivity:**
User → Project → Issue Type

## Saving Filter and Grouping Configurations

- Click **Save View** to preserve the current filter + grouping + view mode
- Saved views appear in the sidebar for quick access
- Useful for recurring sprint reports, billing reviews, or standup prep`,
        },
        //         {
        //           slug: "billing-accounts",
        //           title: "Billing Accounts",
        //           content: `
        // Billing Accounts let you categorise worklogs by client engagement, project contract, or internal cost centre.

        // ## What Is a Billing Account?

        // A Billing Account is a named label you attach to a worklog when logging time. It allows the organisation to:
        // - Separate billable from non-billable hours
        // - Filter and group timesheets by client or contract
        // - Export billing data per account for invoicing

        // ## Creating a Billing Account

        // 1. Time Tracking & Reporting → **Accounts** (sidebar)
        // 2. Click **Create Account**
        // 3. Enter:
        //    - **Account Name** (e.g., "Client ABC - Phase 2")
        //    - **Account Key** (short identifier, e.g., \`ABC-P2\`)
        //    - **Status** - Active or Inactive
        // 4. Click **Save**

        // ## Assigning an Account When Logging Time

        // 1. Open the **Log Time** form (from any view)
        // 2. Search for the Jira issue
        // 3. Enter hours and date
        // 4. Click the **Account** dropdown → select the billing account
        // 5. Click **Save**

        // ## Filtering Reports by Account

        // In the Timesheet Report Builder or My Timesheet:
        // - Click **Add Filter** → **Account** → select account(s) → **Apply**

        // ## Grouping Reports by Account

        // In Group By:
        // - Select **Account** as the first group level
        // - Add **Project** and **Issue** below for a full billing breakdown

        // ## Exporting Billing Data

        // - Filter by Account → Export → **CSV**
        // - Use this to import into your billing / invoicing system

        // ## Managing Accounts

        // | Action | How |
        // |---|---|
        // | Edit name or key | Accounts list → click Edit icon |
        // | Deactivate | Edit → set Status to Inactive |
        // | View all worklogs | Filter by account in Report Builder |

        // ## Tips

        // - Use a consistent naming convention: \`ClientName - ProjectPhase\`
        // - Create accounts before logging time to ensure all worklogs are categorised from day one
        // - Inactive accounts no longer appear in the Log Time dropdown but historical data is preserved`,
        //         },
        {
          slug: "time-tracking-setting",
          title: "Time-Tracking Setting",
          content: `
Time-Tracking Settings control how time is displayed, calculated, and defaulted across the entire Time Tracking & Reporting module.

## Accessing Settings

Global sidebar → **Settings** → **Time Tracking** tab

## Available Settings

| **Setting** | Options | Default | Impact |
|---|---|---|---|
| **Time Display Unit** | Jira default · Hours/Minutes · Hours · Days | Jira default | How hours appear in all views (e.g., 2h 30m vs 2.5h) |
| **Default Time Range** | Current day · week · month · quarter · year | Current month | Pre-populates the date picker when opening any view |
| **Timezone Mode** | Jira timezone · User's timezone · My timezone | Jira timezone | Which timezone is used when interpreting worklog timestamps |
| **First Day of Week** | Sunday – Saturday | Monday | Controls week column grouping in weekly view modes |
| **Working Days** | Mon/Tue/Wed/Thu/Fri/Sat/Sun checkboxes | Mon–Fri | Used to calculate available hours in capacity calculations |
| **Hours Per Day** | Number (e.g., 8) | 8 | Used with Working Days to compute daily available capacity |

## Time Display Unit

| **Option** | Example Display |
|---|---|
| **Jira default** | Follows Jira's global time tracking format |
| **Hours/Minutes** | 2h 30m |
| **Hours** | 2.5h |
| **Days** | 0.3d (based on Hours Per Day) |

## Timezone Mode

| **Mode** | Description |
|---|---|
| **Jira timezone** | Uses the Jira instance timezone for all calculations |
| **User's timezone** | Each user sees times in their own Jira profile timezone |
| **My timezone** | Uses the current viewer's browser/system timezone |

## Applying Changes

- Changes apply immediately to all views
- No restart or page reload required
- Users on the same instance see the same settings (settings are global, not per-user, unless noted)

## Tips

- Set **Hours Per Day** to match your organisation's contracted hours (e.g., 7.5 for a 37.5-hour week)
- Set **Working Days** accurately - inaccurate working days skew capacity calculations in the Capacity Report
- Use **Jira timezone** if your team is co-located; use **User's timezone** for distributed teams`,
        },

        // ── Project Portfolio Management sub-pages ──
        {
          slug: "creating-a-portfolio",
          title: "Creating a Portfolio",
          content: `
A Portfolio is a named collection of Jira issues grouped and visualised across multiple views (Table, Gantt, Board, etc.). You define the scope using manual filters or JQL.

## Creating a New Portfolio

1. Portfolio (PPM) → click **New Portfolio**
2. Enter a **Portfolio Name**
3. Click **Filter** to define scope:
   - **Manual Filter** - use dropdowns to select Projects, Issue Types, Statuses, Assignees
   - **JQL Filter** - write a Jira Query Language expression for complex scope
4. Click **Apply** to preview matching issues
5. Click **Save** - the portfolio appears in the sidebar under Portfolios

> **Important:** Save immediately after creating. Unsaved portfolios are lost when you navigate away.

## Manual Filter vs JQL

| **Method** | Best For | Example |
|---|---|---|
| **Manual Filter** | Simple project/status/type scopes | All open Stories in Project A |
| **JQL** | Complex cross-project queries | Epics due this quarter across 3 projects |

## Example JQL Scopes

\`\`\`
-- All active epics across a program
issuetype = Epic AND status != Done ORDER BY priority DESC

-- High-priority items due this quarter
priority in (Highest, High) AND due >= startOfQuarter()

-- All in-progress work across multiple projects
project in (PROJ-A, PROJ-B, PROJ-C) AND status = "In Progress"
\`\`\`

## Editing Portfolio Scope

1. Open the portfolio
2. Click **Settings** (gear icon)
3. Modify the filter or JQL
4. Click **Save**

## Sharing Portfolios

All users with **Member or higher** role on the Jira project can see saved portfolios. Portfolios are shared - coordinate edits to avoid overwriting each other's changes (the app uses last-save-wins).

## Deleting a Portfolio

Settings → **Delete Portfolio** → Confirm

Deletion is permanent and cannot be undone.`,
        },
        {
          slug: "view-types",
          title: "View Types",
          content: `
The Portfolio module offers six view types, each suited to a different planning or reporting scenario. Switch between them using the view mode selector in the top-right of any portfolio.

## Available Views

| **View** | Best For |
|---|---|
| **Table** | Detailed data review, bulk editing, field updates, CSV export |
| **Gantt Chart** | Roadmap presentations, timeline planning, dependency visualisation |
| **Graph View** | Epic → Story → Sub-task hierarchy exploration |
| **Treemap** | Visual health snapshot; issue size proportional to effort or count |
| **Pie Chart** | Status or priority distribution for executive stakeholder reports |
| **Board View** | Kanban-style workflow tracking, fast triage, drag-and-drop status changes |

## Table View

- Sortable and filterable columns
- Inline-edit supported fields (status, priority, assignee, due date)
- Export to CSV for offline analysis
- Column picker to show/hide fields

## Gantt Chart

- Renders start date and due date as bars on a timeline
- **Requirement:** issues must have Start Date and Due Date fields mapped in Portfolio Settings
- Drag bar edges to update Jira dates directly
- Create dependencies by dragging connector dots between bars
- Dependency types: FS (Finish-to-Start), SS (Start-to-Start), FF (Finish-to-Finish), SF (Start-to-Finish)
- Baseline mode: compare current plan vs. a saved baseline
- Critical path highlighted automatically based on dependency chain

## Graph View

- Visualises the parent-child hierarchy of issues
- Expand/collapse nodes to explore Epic → Story → Sub-task relationships
- Colour-coded by status

## Treemap View

- Each issue is a rectangle; size is proportional to a configurable metric (story points, remaining estimate, etc.)
- Colour represents status or priority
- Ideal for spotting large, blocked, or high-priority items at a glance

## Pie Chart View

- Slice by: Status, Priority, Assignee, Issue Type, Sprint, Label
- Click any slice to filter the underlying table
- Useful for executive summaries

## Board View

- Kanban columns representing Jira workflow statuses
- Drag cards between columns to transition issue status
- Filter cards by Assignee, Issue Type, Priority
- Compact and expanded card modes`,
        },
        {
          slug: "saved-portfolios",
          title: "Saved Portfolios",
          content: `
Saved Portfolios are named portfolio configurations that are persisted and shared across your Jira instance.

## What Gets Saved

| **Saved** | Not Saved (always live) |
|---|---|
| **Portfolio name** | Jira issue data |
| **Filter / JQL scope** | Current issue statuses |
| **Default view type** | Worklog or estimate changes |
| **Portfolio Settings (date field mappings)** | New issues matching scope |

Opening a saved portfolio always loads **current Jira data** within the saved scope.

## Accessing Saved Portfolios

All saved portfolios appear in the **Portfolios** section of the left sidebar. Click any portfolio name to open it.

## Managing Saved Portfolios

### Rename a Portfolio

1. Open the portfolio
2. Click the portfolio name in the breadcrumb / header
3. Type the new name
4. Press **Enter** or click away to save

### Edit Scope

1. Open the portfolio
2. Click the **Settings** gear icon
3. Modify the filter or JQL
4. Click **Save**

### Delete a Portfolio

1. Open the portfolio
2. Click **Settings** → **Delete Portfolio**
3. Confirm - deletion is permanent

### Duplicate a Portfolio

There is no one-click duplicate. To copy a portfolio:
1. Open the original
2. Note the filter/JQL settings
3. Create a New Portfolio
4. Apply the same filter/JQL
5. Save with a new name

## Sharing and Collaboration

- All users with access to the Jira project see the same saved portfolios
- The app uses **last-save-wins** - simultaneous edits by two users can overwrite each other
- Communicate with your team before making structural changes to a shared portfolio

## Tips

- Prefix portfolio names with a team or quarter: "Platform - Q3 2025 Roadmap"
- Archive old portfolios by prefixing with "[Archive]" rather than deleting - historical portfolios may be referenced in past reports`,
        },
        {
          slug: "dashboard-gadget",
          title: "Dashboard Gadget",
          content: `
The Portfolio Dashboard Gadget lets you embed portfolio metrics directly onto any Jira dashboard, giving stakeholders a live view without requiring them to open the app manually.

## Adding the Gadget to a Dashboard

1. Open a Jira Dashboard (or create a new one)
2. Click **Add Gadget** (top-right of the dashboard)
3. In the gadget search, type **"Project Portfolio Management"** or **"Clovity"**
4. Click **Add** next to the portfolio gadget
5. Configure the gadget:
   - Select a saved **Portfolio** or define a scope
   - Choose which **metrics** to display
   - Click **Save**

## Gadget Configuration Options

| **Option** | Description |
|---|---|
| **Portfolio** | Select from your saved portfolios |
| **View** | Choose the summary metric type (issue count, status breakdown, etc.) |
| **Date Range** | Optionally restrict data to a date window |

## What the Gadget Displays

- Issue count by status (e.g., To Do / In Progress / Done)
- Total estimated vs. logged hours
- Priority distribution
- At-risk or overdue issue count

## Resizing the Gadget

Jira dashboards support gadget resizing - drag the bottom-right corner of the gadget to resize it on the dashboard.

## Troubleshooting

| **Problem** | Fix |
|---|---|
| **No data in gadget** | Verify the portfolio scope still returns issues and you have read access to those projects |
| **Blank after setup** | Remove and re-add the gadget with fresh configuration |
| **Gadget not found in search** | Ensure the app is installed and activated in Jira (check Manage Apps) |
| **Old data showing** | Jira dashboards cache gadget data - click Refresh or reload the page |

## Tips

- Add the gadget to your team's primary Jira dashboard for an always-visible health check
- Create separate dashboards per project or program and add a portfolio gadget per dashboard
- Combine with Jira's built-in gadgets (Sprint Health, Velocity Chart) for a complete dashboard`,
        },
        {
          slug: "portfolio-settings",
          title: "Portfolio Settings",
          content: `
Portfolio Settings control how the portfolio module displays time, maps Jira date fields to the Gantt chart, and calculates working capacity.

## Accessing Portfolio Settings

**Option 1 - Per Portfolio:** Open a portfolio → click the **Settings** (gear) icon → **Portfolio Settings** tab

**Option 2 - Global:** Global sidebar → **Settings** → **Portfolio** tab

## Settings Reference

| **Setting** | Description | Example |
|---|---|---|
| **Time Display Unit** | How hours appear in portfolio table columns | Hours, Days, Story Points |
| **Bookings Start Date** | Which Jira field maps to the Gantt bar start | "Start date", "Custom field: Planned Start" |
| **Bookings End Date** | Which Jira field maps to the Gantt bar end | "Due date", "Custom field: Planned End" |
| **Hours Per Day** | Converts day estimates to hours for capacity | 8 |
| **Working Days** | Which days count as working days | Mon–Fri |
| **Calendar** | Working calendar used for Gantt scheduling | Default Jira calendar |

## Gantt Chart Date Field Mapping

The Gantt chart requires explicit date field mappings:

1. Go to Portfolio Settings → **Bookings Start Date** → select the Jira field that represents the planned start
2. Set **Bookings End Date** → select the Jira field that represents the planned end
3. Click **Save**

If these are not set, the Gantt chart will not render bars for issues that lack the expected date fields.

## Common Field Mappings

| **Mapping** | Recommended Jira Field |
|---|---|
| **Start Date** | "Start date" (native Jira field) or a custom Date field |
| **End Date** | "Due date" (native Jira field) or a custom Date field |

## Troubleshooting Gantt Issues

| **Problem** | Fix |
|---|---|
| **Gantt bars not rendering** | Verify Start and End date fields are mapped and issues have values in those fields |
| **Wrong timeline dates** | Check field mapping - a mismatched field (e.g., Created vs Start date) produces wrong bars |
| **Bars rendering in wrong position** | Confirm Hours Per Day and Working Days match your team's schedule |

## Tips

- Configure Portfolio Settings before creating your first Gantt-based portfolio - fixing date mappings after bars are created can cause visual shifts
- Use the same date field mappings as your organisation's existing project management process`,
        },

        // ── Backlog Prioritization sub-pages ──
        {
          slug: "backlog-table",
          title: "Backlog Table",
          content: `
The Backlog Table is a sortable, filterable table with inline-editable scoring metrics, giving your team a structured way to quantitatively rank and prioritise Jira backlog items.

## Opening the Backlog Table

Backlog Prioritization → **Backlog Table**

## Initial Setup

1. Click **Select Project** → choose your Jira project
2. Click **Choose Scoring Template** → select a template (ICE, RICE, WSJF, Value vs. Effort, or custom)
3. Click **Apply** - the table loads with all open issues

## Table Layout

| **Column** | Description |
|---|---|
| **Issue** | Jira issue key + summary |
| **Issue Type** | Story, Bug, Task, etc. |
| **Status** | Current Jira status |
| **Priority** | Jira priority (Highest to Lowest) |
| **Scoring Metrics** | One column per metric defined in the template (e.g., Impact, Confidence, Ease) |
| **Score** | Calculated composite score - auto-updates when metrics change |
| **Assignee** | Assigned team member |

## Scoring Issues Inline

1. Click any metric cell (e.g., the "Impact" cell for an issue)
2. Edit inline - input type depends on the metric:
   - **Number field** - type a value
   - **Dropdown** - select from predefined options
   - **Star rating** - click stars (1–5)
   - **Effort scale** - select XS / S / M / L / XL
3. Click away or press **Enter** - the Score column recalculates instantly and saves automatically

## Sorting

- Click any **column header** to sort ascending/descending
- Default sort: Score descending (highest priority first)
- Multi-column sort: hold **Shift** and click a second column

## Filtering

| **Filter** | Options |
|---|---|
| **Issue Type** | Story, Bug, Task, Sub-task, Epic |
| **Status** | Any Jira workflow status |
| **Assignee** | Select team member(s) |
| **Label** | Jira labels |
| **Sprint** | Active or completed sprints |
| **Priority** | Highest, High, Medium, Low, Lowest |

## Exporting

- Click **Export → CSV** to download the full backlog table including scores
- The export includes all visible columns and their current values

## Tips

- Score all issues in one session for consistency - mixing fresh and stale scores skews the ranking
- Use the same scoring template across all sprints for a comparable historical record
- Sort by Score descending just before sprint planning to identify your top candidates`,
        },
        {
          slug: "scoring-template",
          title: "Scoring Template",
          content: `
Scoring Templates define the metrics and formula used to calculate a composite priority score for each Jira issue in the Backlog Table.

## Built-in Templates

### ICE Score
**Formula:** Impact × Confidence × Ease

| **Metric** | Scale | Meaning |
|---|---|---|
| **Impact** | 1–10 | How much value does this deliver? |
| **Confidence** | 1–10 | How confident are we in the estimate? |
| **Ease** | 1–10 | How easy is it to implement? |

**Best for:** Feature requests and bug fixes where effort vs. value trade-offs are primary.

---

### RICE Score
**Formula:** (Reach × Impact × Confidence) / Effort

| **Metric** | Scale | Meaning |
|---|---|---|
| **Reach** | Number | How many users affected per quarter? |
| **Impact** | 1–3 | Massive (3) → Minimal (0.25) |
| **Confidence** | % | Estimate reliability (100% = certain) |
| **Effort** | Person-months | Work required |

**Best for:** Product features where audience reach is a key input.

---

### WSJF - Weighted Shortest Job First
**Formula:** (Business Value + Time Criticality + Risk Reduction) / Job Size

| **Metric** | Scale | Meaning |
|---|---|---|
| **Business Value** | 1–21 (Fibonacci) | Revenue or strategic value |
| **Time Criticality** | 1–21 | How much value is lost by delay? |
| **Risk Reduction** | 1–21 | Risk or opportunity enabled |
| **Job Size** | 1–21 | Relative effort estimate |

**Best for:** SAFe environments and Agile Release Train (ART) prioritisation.

---

### Value vs. Effort
**Formula:** Value / Effort

| **Metric** | Scale | Meaning |
|---|---|---|
| **Value** | 1–10 | Business or user value |
| **Effort** | 1–10 | Implementation complexity |

**Best for:** Simple two-dimension ranking when speed matters over precision.

---

## Creating a Custom Template

1. In the Backlog Table, click the **Template selector** dropdown → **Manage Templates**
2. Click **Create New Template**
3. Enter:
   - **Template Name**
   - **Description** (optional but recommended - explain how scorers should interpret metrics)
4. Add Metrics:
   - **Metric Name** (e.g., "Customer Impact")
   - **Input Type:** Number, Dropdown, Star (1–5), Effort Scale (XS/S/M/L/XL)
   - **Range** (min/max for number inputs)
5. Enter **Formula** - reference metric names using their exact labels (e.g., \`Impact * Confidence / Effort\`)
6. Click **Save**

## Switching Templates

- Template changes apply to all issues in the current view
- Existing metric values for the old template are preserved but not shown
- Switching back restores previous values

## Tips

- Document your metric definitions in the template description - ambiguous metrics lead to inconsistent scoring across team members
- Use one template consistently within a planning cycle - changing mid-sprint makes scores incomparable
- Save custom templates for your team's specific domain (e.g., a support-ticket template with Customer Impact × Frequency × Fix Complexity)`,
        },
        {
          slug: "views-filters-sorting",
          title: "Views, Filters & Sorting",
          content: `
The Backlog Prioritization module provides multiple view types, flexible filtering, multi-column sorting, and saved views to support recurring prioritisation sessions.

## View Types

| **View** | How to Access | Best For |
|---|---|---|
| **Table** | Default view | Inline scoring, sorting, bulk triage |
| **Priority Matrix** | Click the Matrix view button (top-right) | Visual quadrant-based prioritisation |

Toggle between views using the **view switcher** in the top-right of the Backlog Table toolbar.

## Filters

### Available Filters

| **Filter** | Options |
|---|---|
| **Issue Type** | Story, Bug, Task, Sub-task, Epic |
| **Status** | Any Jira workflow status |
| **Assignee** | One or more team members |
| **Label** | Jira labels |
| **Sprint** | Active or past sprints |
| **Priority** | Highest, High, Medium, Low, Lowest |

### Applying Filters

1. Click **Add Filter** in the toolbar
2. Select filter dimension and values
3. Click **Apply** - the table reloads with filtered issues
4. Active filters appear as removable chips in the filter bar
5. Click **×** on a chip to remove that filter
6. Click **Clear Filters** to reset all filters at once

## Sorting

- Click any **column header** to sort by that column
- Click again to reverse sort direction (ascending ↔ descending)
- **Default sort:** Score descending (highest priority first)
- **Multi-column sort:** hold **Shift** and click a second column header

### Recommended Sort Orders

| **Scenario** | Sort |
|---|---|
| **Sprint planning** | Score ↓ |
| **Find unscored issues** | Score ↑ (empty/zero scores first) |
| **Review by assignee** | Assignee A–Z, then Score ↓ |
| **Status-based triage** | Status A–Z, then Score ↓ |

## Saved Views

Saved Views preserve your current filter + sort + grouping configuration for reuse.

### Saving a View

1. Configure filters, sort, and grouping to your preference
2. Click **Save View** in the toolbar
3. Enter a view name (e.g., "Sprint 12 - Backend Bugs Only")
4. Click **Confirm**

### Loading a Saved View

- Saved views appear in the **Saved Views** section of the sidebar
- Click a view name to apply all its filters and settings instantly

### Managing Saved Views

| **Action** | How |
|---|---|
| **Rename** | Hover the view → Edit icon → type new name |
| **Delete** | Hover the view → Trash icon → Confirm |
| **Update** | Apply the view, make changes, click Save View → overwrite |

## Tips

- Create a standard view for each team ceremony (sprint planning view, backlog grooming view, bug triage view)
- Clear all filters before saving a "full backlog" view - ensures the view captures all issues`,
        },
        {
          slug: "priority-matrix",
          title: "Priority Matrix",
          content: `
The Priority Matrix is a scatter plot that positions each Jira issue on two scoring axes, providing a visual quadrant-based view for prioritisation decisions.

## Opening the Priority Matrix

Backlog Prioritization → Backlog Table → click the **Matrix view** button (top-right toolbar)

## Reading the Matrix

Each dot on the scatter plot represents one Jira issue. The position is determined by the two selected scoring metrics:

| **Quadrant** | Position | Label | Action |
|---|---|---|---|
| **Top-right** | High X, High Y | **Quick Wins** or **Big Bets** | Prioritise first |
| **Top-left** | Low X, High Y | **Big Bets** or **Fill-ins** | Evaluate effort vs. value |
| **Bottom-right** | High X, Low Y | **Fill-ins** | Schedule if capacity allows |
| **Bottom-left** | Low X, Low Y | **Avoid** | Deprioritise or remove from backlog |

> Quadrant labels depend on which metrics you assign to each axis.

## Hovering and Inspecting Issues

- Hover over any dot to see a tooltip with issue key, title, and metric values
- Click a dot to open a detail panel with the full issue score breakdown

## Customising the Axes

1. Click **Matrix Settings** (gear icon in the top-right of the matrix)
2. Set **X Axis** - choose any numeric metric from the active scoring template
3. Set **Y Axis** - choose a different metric
4. Click **Apply**

**Common Axis Combinations:**

| **X Axis** | Y Axis | Insight |
|---|---|---|
| **Effort** | Value | Classic value vs. effort quadrant |
| **Confidence** | Impact | Identify high-impact, high-confidence bets |
| **Job Size** | Business Value | WSJF visual breakdown |

## Adjusting Quadrant Boundaries

- The quadrant divider lines are draggable
- Drag the **vertical line** left or right to change the X-axis threshold
- Drag the **horizontal line** up or down to change the Y-axis threshold
- Repositioning boundaries lets you tailor the quadrant split to your team's scoring scale

## Filtering in Matrix View

All filters applied in the Backlog Table carry over to the Matrix view. You can also add filters directly in Matrix view using the filter bar.

## Returning to Table View

Click the **Table view** button (top-right toolbar) to return to the tabular Backlog Table.

## Tips

- Use the Priority Matrix alongside the table - patterns visible in the scatter plot (clusters, outliers) are often invisible in a sorted list
- Reposition quadrant lines to match your team's actual scoring distribution rather than the default 50/50 split
- Save a matrix view configuration via **Save View** for reuse in recurring prioritisation sessions`,
        },
        {
          slug: "saved-prioritized-reports",
          title: "Saved Prioritized Reports",
          content: `
Saved Prioritized Reports capture a snapshot of the backlog scoring at a specific point in time, creating a historical record of how issues were ranked before each sprint or planning cycle.

## What a Saved Report Preserves

| **Preserved** | Not Preserved |
|---|---|
| **Project selection** | Current Jira issue statuses (may have changed) |
| **Scoring template used** | New issues added after the save |
| **Metric values per issue (at save time)** | Template changes made after the save |
| **Sort and filter configuration** | Worklogs or estimate updates |
| **Date/time of save** | |

## Saving a Report

1. Open **Backlog Table**
2. Configure project, scoring template, and filters
3. Score the issues (all or a subset)
4. Click **Save Report** in the toolbar
5. Enter a descriptive report name (e.g., "Sprint 12 Planning - 2025-07-01")
6. Click **Confirm**

The report appears in the **Saved Reports** section of the sidebar.

## Opening a Saved Report

- Click **Saved Reports** in the sidebar
- Click any report name to open the snapshot
- The report displays the metric values and scores as they were at the time of saving
- Current Jira issue data (status, assignee) may differ from the snapshot

## Using Saved Reports for Planning

| **Use Case** | How |
|---|---|
| **Pre-sprint baseline** | Save a report before sprint planning to record what was scored going in |
| **Post-sprint retrospective** | Compare saved reports from consecutive sprints to track score changes |
| **Audit trail** | Share a saved report link with stakeholders as evidence of prioritisation rationale |
| **Template benchmarking** | Save reports using different templates on the same backlog to compare ranking outcomes |

## Managing Saved Reports

| **Action** | How |
|---|---|
| **Rename** | Hover the report → Edit icon → type new name |
| **Delete** | Hover the report → Trash icon → Confirm |

## Tips

- Adopt a consistent naming convention: \`[Sprint/Quarter] - [Date]\` (e.g., "Q3 Sprint 5 - 2025-08-12")
- Save a report before AND after sprint planning to record both the pre-planning ranking and the committed selection
- Saved reports are shared - all team members with access to the project can view them`,
        },

        // ── Teams Management sub-pages ──
        {
          slug: "teams",
          title: "Teams",
          content: `
Teams are named groups of Jira users that can be reused across the Capacity Planner, Time Tracking Reports, and Portfolio module for group-level filtering, grouping, and reporting.

## Opening Teams Management

Global sidebar → **Teams Management** → **Teams**

## Creating a Team

1. Click **Create Team**
2. Fill in the team form:

   | **Field** | Required | Description |
   |---|---|---|
   | **Team Name** | Yes | Display name (e.g., "Platform Team", "QA Squad") |
   | **Description** | No | Brief description of the team's role or scope |
   | **Color** | No | Colour tag for visual identification in views |
   | **Source** | Yes | **Manual** or **Jira Group** |
   | **Members** | Yes | Add individual users or select a Jira Group |

3. Click **Save**

## Team Sources

### Manual Source

- You manually add and remove members
- Members remain fixed until you edit the team
- Best for stable, long-term teams or cross-functional groups not matching a Jira group

### Jira Group Source

- Members are automatically synced from a Jira Group
- Changes made to the Jira Group (add/remove member) reflect in the team automatically
- Best when team membership is already managed in Jira

## Using Teams Across Modules

| **Module** | How Teams Are Used |
|---|---|
| **Capacity Planner** | Group By → Team - shows rolled-up capacity per team |
| **Capacity Report** | Filter by Team - restricts the report to selected team members |
| **Time Tracking Report** | Filter or Group By → Team |
| **Portfolio (PPM)** | Assign portfolio scope filtered to team members |

## Managing Teams

| **Action** | How |
|---|---|
| **Edit team** | Teams list → Edit (pencil) icon → modify → Save |
| **Add member** | Edit team → Members field → search and add user |
| **Remove member** | Edit team → Members list → click × next to user |
| **Delete team** | Teams list → Delete (trash) icon → Confirm |

> Deleting a team does not delete users or their worklogs. It only removes the team grouping.

## Tips

- Create teams to mirror your actual squad structure - this makes capacity and time tracking reports immediately meaningful to team leads
- Use Jira Group as the source if you already manage team membership in Jira - avoid duplicating maintenance effort
- A user can belong to multiple teams (e.g., a shared QA engineer on both the Platform and Frontend teams)`,
        },
        {
          slug: "programs",
          title: "Programs",
          content: `
Programs group multiple Teams into higher-level organisational structures, enabling leadership-level capacity rollups and cross-team reporting.

## What Is a Program?

A Program is a container for multiple Teams. It maps to real-world organisational structures such as:

- A **department** (Engineering) containing teams (Platform, Frontend, Backend)
- A **Program Increment** (PI-2025-Q2) containing the sprint teams involved
- A **Business Unit** (Product) containing squads (Mobile, Web, Data)

## Opening Programs

Global sidebar → **Teams Management** → **Programs** tab

## Creating a Program

1. Click **Create Program**
2. Enter **Program Name** (e.g., "Engineering - Q3 2025")
3. Optionally add a **Description**
4. Click **Select Teams** → add the teams that belong to this program
5. Click **Save**

## Program Hierarchy

Programs do not have their own members - they aggregate the members of their constituent teams:

\`\`\`
Program: Engineering
├── Team: Platform (Alice, Bob, Carol)
├── Team: Frontend (Dave, Eve)
└── Team: Backend (Frank, Grace, Heidi)
\`\`\`

All 7 members are visible in capacity reports when filtered by the Engineering program.

## Constraints

| **Rule** | Detail |
|---|---|
| **A team can belong to only one program** | Restructure programs if teams move between departments |
| **Programs must contain at least one team** | Empty programs cannot be saved |
| **Programs cannot be nested** | Programs are a flat grouping of teams - no program-of-programs |

## Using Programs in Capacity Reports

1. Capacity Planner & Insight → **Capacity Report**
2. Click **Filter → Program** → select the program
3. The report shows aggregated capacity for all teams in the program
4. Use **Group By → Team** to see per-team breakdowns within the program

## Managing Programs

| **Action** | How |
|---|---|
| **Edit / rename** | Programs list → Edit icon → modify → Save |
| **Add a team** | Edit program → Select Teams → add team → Save |
| **Remove a team** | Edit program → Teams list → click × → Save |
| **Delete program** | Programs list → Delete icon → Confirm |

> Deleting a program does not delete its teams or members.

## Tips

- Model programs to mirror your organisational chart - "Engineering", "Product", "Operations"
- Use programs for PI (Program Increment) planning: create a program per PI, assign sprint teams as members
- Programs are ideal for director-level reporting - one filter gives a full department view without listing every individual`,
        },

        // ── Global Setting sub-pages ──
        {
          slug: "general-settings",
          title: "General Settings",
          content: `
General Settings control app-wide preferences that affect all modules - Time Tracking, Capacity Planner, Backlog Prioritization, and Portfolio.

## Accessing General Settings

Global sidebar → **Settings** → **General** tab

## Available Settings

| **Setting** | Options | Default | Effect |
|---|---|---|---|
| **Time Display Unit** | Jira default · Hours/Minutes · Hours · Days | Jira default | How time values appear across all modules |
| **First Day of Week** | Sunday – Saturday | Monday | Sets the start of the week in calendar and week-mode views |
| **Working Days** | Checkboxes: Mon–Sun | Mon–Fri | Days counted as working days in capacity calculations |
| **Hours Per Day** | Number (e.g., 8) | 8 | Working hours per day - used for available capacity calculations |
| **Timezone Mode** | Jira timezone · User's timezone · My timezone | Jira timezone | How timestamps are interpreted across all views |
| **Date Format** | DD/MM/YYYY · MM/DD/YYYY · YYYY-MM-DD | Jira default | Display format for dates across the app |

## Time Display Unit

| **Option** | Example |
|---|---|
| **Jira default** | Follows the Jira instance format |
| **Hours/Minutes** | 2h 30m |
| **Hours** | 2.5h |
| **Days** | 0.3d (based on Hours Per Day setting) |

## Working Days & Hours Per Day

These two settings determine the **Available** column in the Capacity Report and all capacity calculations:

\`\`\`
Available hours per week = Working Days count × Hours Per Day
\`\`\`

**Example:** 5 working days × 7.5 hours/day = 37.5 available hours/week

> Set these accurately - misconfigured values skew all capacity and allocation percentages.

## Timezone Mode

| **Mode** | Best For |
|---|---|
| **Jira timezone** | Co-located teams; single timezone |
| **User's timezone** | Distributed teams; each user sees their local time |
| **My timezone** | Individual override based on browser timezone |

## Applying Changes

Changes apply globally and immediately - no restart or page reload required. All users on the Jira instance share the same settings.

## Tips

- Review General Settings after initial installation before any team members start logging time
- Set **Hours Per Day** to your organisation's contracted work hours, not a generic 8
- Choose **User's timezone** for distributed or remote teams to avoid timestamp confusion`,
        },
        {
          slug: "worklog-fields",
          title: "Worklog Fields",
          content: `
Worklog Fields let you add custom metadata fields to the Log Time form, enabling teams to capture additional context alongside each time entry.

## What Are Worklog Fields?

By default, when a user logs time they fill in:
- Jira Issue
- Time Spent
- Date
- Description (optional)
- Time Category (if configured)
- Billing Account (if configured)

Worklog Fields extend this form with **custom fields** your organisation defines - for example:
- Client name
- Work item type (billable / non-billable)
- Cost centre code
- Project phase

## Accessing Worklog Fields Settings

Global sidebar → **Settings** → **Worklog Fields** tab

## Adding a Custom Worklog Field

1. Click **Add Field**
2. Configure:

   | **Setting** | Options | Description |
   |---|---|---|
   | **Field Name** | Text | Label shown in the Log Time form |
   | **Field Type** | Text · Dropdown · Checkbox · Date | Input type for the field |
   | **Required** | Yes / No | Whether the field must be filled before saving |
   | **Options (for Dropdown)** | Comma-separated list | Dropdown option values |

3. Click **Save**

## Field Types

| **Type** | Use Case | Example |
|---|---|---|
| **Text** | Free-form notes or identifiers | "Cost Centre: CC-1042" |
| **Dropdown** | Controlled vocabulary | "Billable / Non-billable / Internal" |
| **Checkbox** | Boolean flag | "Overtime: Yes/No" |
| **Date** | Date-based metadata | "Delivery Date" |

## Reordering Fields

Drag and drop fields in the Worklog Fields list to change their display order in the Log Time form.

## Editing and Deleting Fields

| **Action** | How |
|---|---|
| **Edit** | Click the Edit (pencil) icon → modify → Save |
| **Delete** | Click the Delete (trash) icon → Confirm |

> Deleting a field removes it from the Log Time form but does not delete historical worklog data that used this field.

## Filtering and Grouping by Worklog Fields

Once configured, custom worklog fields appear as filter and group-by options in:
- My Timesheet
- Timesheet and Reporting (Report Builder)
- Capacity Report

## Tips

- Keep the number of required fields low - too many mandatory fields discourage accurate time logging
- Use Dropdown fields for fields with a controlled vocabulary to ensure clean, filterable data
- Discuss field requirements with your finance and HR teams before creating billing- or HR-related fields`,
        },
        {
          slug: "time-categories",
          title: "Time Categories",
          content: `
Time Categories let users classify their worklogs by type of work - for example, Development, Code Review, Meetings, or QA - enabling richer analysis and reporting beyond issue-level tracking.

## Accessing Time Categories

Global sidebar → **Settings** → **Time Categories** tab

## Default Categories

The app ships with a set of default time categories:

| **Category** | Description |
|---|---|
| **Development** | Feature development, implementation work |
| **Code Review** | Reviewing pull requests and code changes |
| **Testing / QA** | Manual or automated testing |
| **Meetings** | Standups, sprint ceremonies, client calls |
| **Documentation** | Writing specs, runbooks, or user docs |
| **Support** | Bug triage, customer issue investigation |

## Creating a Custom Category

1. Click **Add Category**
2. Enter:
   - **Category Name** (e.g., "Design Review")
   - **Description** (optional)
   - **Color** (optional - used in charts and calendar views)
3. Click **Save**

The category is immediately available in the **Log Time** form's Category dropdown.

## Editing a Category

1. Click the Edit (pencil) icon next to the category
2. Modify name, description, or color
3. Click **Save**

Changes apply to future worklogs. Existing worklogs using the old category name are updated to reflect the new name.

## Deactivating a Category

To remove a category from the Log Time dropdown without deleting historical data:
1. Edit the category
2. Toggle **Active** to Off
3. Click **Save**

Deactivated categories are hidden from the form but their data remains in reports.

## Deleting a Category

- Click the Delete (trash) icon → Confirm
- Historical worklogs using this category will show the category as "Deleted" in reports

## Using Categories in Reports

Once set up, Time Categories appear as:

| **Feature** | Where |
|---|---|
| **Filter** | Add Filter → Time Category in Report Builder, My Timesheet, Capacity Report |
| **Group By** | Group By → Time Category for category-breakdown reports |
| **Chart Slice** | Pie chart sliced by Time Category shows time split across work types |

## Tips

- Keep categories broad and meaningful - 5–8 categories is the sweet spot; too many leads to inconsistent logging
- Align categories with what your reporting stakeholders care about (e.g., Billable vs. Non-billable, Customer vs. Internal)
- Make "Meetings" a category - it typically consumes 10–30% of engineering time and is often invisible without tracking
- Brief your team on category definitions so everyone logs consistently`,
        },
        {
          slug: "manage-staff",
          title: "Manage Staff",
          content: `
Manage Staff lets administrators control which Jira users appear in the app's user-facing dropdowns, filters, and reports - ensuring only active, relevant team members are included in capacity and time data.

## Accessing Manage Staff

Global sidebar → **Settings** → **Manage Staff** tab

## What Manage Staff Controls

Without custom staff configuration, the app lists all Jira users in the instance. For large organisations, this creates noise - inactive accounts, service accounts, and external contractors appear alongside active staff.

Manage Staff lets you:
- **Include** only specific users in app dropdowns and reports
- **Exclude** service accounts, bot users, or inactive team members
- **Group users** into custom organisational units for filtering

## User List

The Manage Staff page displays all Jira users in your instance with:

| **Column** | Description |
|---|---|
| **Name** | Jira display name |
| **Email** | Jira account email |
| **Status** | Active / Inactive |
| **App Access** | Whether this user appears in app dropdowns |

## Enabling / Disabling Users

To remove a user from app dropdowns (without revoking their Jira access):
1. Find the user in the list (use the search bar)
2. Toggle their **App Access** switch to Off

The user's existing worklogs remain visible in historical reports. They simply no longer appear in the Users filter or Log Time user picker.

## Bulk Management

- Use the **Select All** checkbox to apply changes to all visible users
- Filter the list first (e.g., by status = Inactive) then bulk-disable

## Importing Staff from Jira Groups

1. Click **Import from Jira Group**
2. Select a Jira Group
3. All members of the group are added to the managed staff list with App Access enabled

## Working Hours Override (Per User)

In Manage Staff, you can set per-user working hours that override the global Hours Per Day setting:

1. Click the user row to expand it
2. Enter **Hours Per Day** and **Working Days** overrides
3. Click **Save**

This is useful for part-time staff, contractors, or users in different regions with different work schedules.

## Tips

- Disable service accounts and bot users immediately after setup - they pollute the Users filter in every report
- Use the working hours override for part-time employees to ensure their Capacity Report data is accurate
- Revisit Manage Staff when onboarding or offboarding team members to keep the user list current`,
        },
        {
          slug: "user-guide-pdf",
          title: "User Guide PDF",
          content: `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">User Guide - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download the complete User Guide or open it in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/user_guide_time_1_d73c53fcb8.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. ADMIN SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "admin-settings",
      title: "Admin Settings",
      articles: [
        {
          slug: "configuration-options",
          title: "Configuration Options",
          content: `
Access all global settings from any module's sidebar → **Settings** (bottom of sidebar).

---

## General Settings

Controls app-wide preferences that apply across all modules.

| **Setting** | Options | Default | Effect |
|---|---|---|---|
| **Time Display Unit** | Jira default, Hours/Minutes, Hours, Days, Weeks, Months | Jira default | How time is displayed across the entire app |
| **Enable Rough Planning** | Sync with Jira / Manual booking mode | Sync. with Jira | Controls how capacity estimates are derived |
| **Default Time Range** | Current month, quarter, year, week, day, last 7 days | Current month | Pre-selected date range when opening any module |
| **Timezone Mode** | Jira timezone, User's timezone, My timezone | Jira timezone | How worklog timestamps are interpreted |
| **First Day of Week** | Sunday through Saturday | Monday | Day the week starts on in calendar and Day-view columns |
| **Working Days** | Checkboxes for each day | Mon–Fri | Days counted as working days in capacity calculations |
| **Hours Per Day** | Number input | 8 | Working hours per day, used in capacity and display |

**Timezone Mode guidance:**
- Use **Jira timezone** for teams in the same location
- Use **User's timezone** for distributed teams so each person's entries reflect their local time

---

## Time Tracking Settings

Access from Settings → Time Tracking tab:

| **Setting** | Options | Default |
|---|---|---|
| **Time Display Unit** | Jira default, Hours/Minutes, Hours, Days | Jira default |
| **Default Time Range** | Current month, quarter, year, week, day, last 7 days | Current month |
| **Timezone Mode** | Jira timezone, User's timezone, My timezone | Jira timezone |
| **First Day of Week** | Sunday–Saturday | Monday |
| **Working Days** | Checkboxes | Mon–Fri |
| **Hours Per Day** | Number input | 8 |

---

## Worklog Fields

Custom fields that appear in the Log Time form for capturing additional context.

**Creating a Worklog Field:**
1. Settings → Worklog Fields → Add Field
2. Configure:
   - **Field Name** - label shown in the Log Time form
   - **Field Type** - Text, Number, Select, or Checkbox
   - **Required** - Yes/No (must-fill before saving a worklog)
   - **Options** (for Select) - define dropdown values

**Field Types:**

| **Type** | Description | Example Use |
|---|---|---|
| **Text** | Single-line text input | Client PO number, activity description |
| **Number** | Numeric input only | Ticket/reference number |
| **Select** | Dropdown from defined options | Activity type (Development, Testing, Meeting) |
| **Checkbox** | True/False toggle | Billable / Non-billable flag |

**Tips:**
- Limit to 3–5 fields - too many fields slow down the logging experience
- Use Select for structured data; use Text for free-form reference codes

---

## Time Categories

Classify worklogs by work type; appear as a dropdown in the Log Time form.

**Creating a Time Category:**
1. Settings → Time Categories → Add Category
2. Enter Category Name and optional Description → Save

**Recommended Categories:**

| **Category** | Use Case |
|---|---|
| **Development** | Feature work, bug fixes, coding |
| **Code Review** | PR reviews, pair reviews |
| **Meetings** | Stand-ups, retrospectives, planning |
| **QA Testing** | Test execution, test case writing |
| **Documentation** | Writing docs, wikis, runbooks |
| **Support** | Customer support tickets, incidents |
| **Research** | Spike work, investigation |

**Using in Reports:**
- Filter by Time Category in the Report Builder
- Group By → Time Category to see time totals per category
- Add sub-grouping (Time Category → Assignee) for per-person category breakdown

---

## Portfolio Settings

Access from global Settings → Portfolio tab or from inside a portfolio → Settings gear.

| **Tab** | Setting | Description |
|---|---|---|
| **Time & Units** | Time Display Unit | How hours display in portfolio table |
| **Calendar & working days** | Bookings start date | Jira field mapped to Gantt bar start (e.g., Start date) |
| **Calendar & working days** | Bookings end date | Jira field mapped to Gantt bar end (e.g., Due date) |
| **Calendar & working days** | Hours per day | Used to convert story points/estimates to hours |
| **Calendar & working days** | Working days | Days counted as working days |
| **Timezone & defaults** | Timezone | How date/time is interpreted when reading from Jira |

> **Important:** Gantt Chart bars will not render correctly until **Bookings start date** and **Bookings end date** are mapped to Jira fields that have values on your issues.`,
        },
        {
          slug: "user-role-management",
          title: "User & Role Management",
          content: `
## Teams

Teams are named groups of Jira users that the app uses for capacity planning, time tracking filters, and portfolio grouping.

### Creating a Team

1. Open the app → Time Tracking or Capacity Planner module
2. Click **Teams** in the sidebar
3. Click **Create Team**
4. Fill in the form:

   | **Field** | Required | Description |
   |---|---|---|
   | **Team Name** | Yes | Display name (e.g., "Platform Team") |
   | **Description** | No | Brief description of the team's purpose |
   | **Color** | No | Color tag for visual identification |
   | **Source** | Yes | **Manual** (add members individually) or **Jira Group** (sync from group) |
   | **Members** | Yes | Add by user search or Jira Group selection |

5. Click **Save**

### Source: Manual vs. Jira Group

| **Source** | Behavior |
|---|---|
| **Manual** | Members stay fixed until you edit the team manually |
| **Jira Group** | Members auto-sync from the Jira group - changes to the group reflect automatically |

Use **Jira Group** if team membership is already managed in Jira user management.

### Managing Teams

- **View all teams** in the filterable Teams list
- **Edit:** click the team name → Edit → modify → Save
- **Delete:** click the team name → Delete → confirm
  - Deleting a team does not affect Jira users or groups

### Using Teams Across Modules

- **Capacity Planner:** Group By → Team
- **Capacity Report:** Filter by Team
- **Time Tracking Report:** Filter or Group by Team
- **Analytics Dashboard:** Team definitions affect team-level capacity views

---

## Programs

Programs group multiple Teams into higher-level organizational structures.

### Creating a Program

1. Teams → Programs tab
2. Click **Create Program**
3. Enter Program Name and select Teams → Save

### Hierarchy

Programs create a three-level hierarchy:
Program → Team → Members

This hierarchy appears in the Capacity Planner group-by options - select **Program → Team → User** to see capacity aggregated from top down.

### Tips

- One program per department or program increment
- A team can belong to only one program at a time
- Programs are most valuable in the Capacity Planner for leadership capacity rollups

---

## RBAC - Assigning the Member Role

### How to Assign

1. Open the app → click **Settings** → **RBAC** tab → **User Roles**
2. Find the user by name or email in the search bar
3. Click the **Edit** (pencil) icon next to the user's name
4. Check the **Member** checkbox
5. Click **Save** - takes effect immediately, no logout required

### How to Remove the Member Role

1. Follow steps 1–3 above
2. Uncheck the **Member** checkbox
3. Click **Save**

The user returns to read-only state. Existing time entries are not deleted.

### Making Someone a Global Admin

Cannot be done from within the app. Requires Jira site admin access:

1. Go to Jira Settings → User Management → Groups
2. Add the user to the Jira administrator group (\`site-admins\` or \`jira-administrators\`)
3. The user is automatically recognized as Global Admin in the app on next access`,
        },
        {
          slug: "permissions-admin",
          title: "Permissions",
          content: `
## Role Comparison Table

| **Capability** | Global Admin | Member | No Role |
|---|---|---|---|
| **Log time against issues** | Yes | Yes | No |
| **Edit own time entries** | Yes | Yes | No |
| **Approve / reject time entries** | Yes | No | No |
| **View capacity analytics** | Yes | Yes | Read-only |
| **Run backlog prioritization** | Yes | Yes | Read-only |
| **Score backlog items** | Yes | Yes | No |
| **View portfolio data** | Yes | Yes | Read-only |
| **Access Settings** | Yes | No | No |
| **Assign / revoke Member roles** | Yes | No | No |
| **View My Permissions tab** | Yes | Yes | Yes |
| **Create billing accounts** | Yes | No | No |
| **Create scoring templates** | Yes | Member (own) | No |
| **Create and save portfolios** | Yes | Yes | No |
| **Delete portfolios created by others** | Yes | No | No |

## How Global Admin Works

Global Admin is **automatically detected** - not assigned inside the app. Anyone with the Jira site-level ADMINISTER permission is automatically a Global Admin in this app.

- **To grant Global Admin**: add the user to the Jira administrator group in Jira user management
- **To revoke Global Admin**: remove the user from the Jira administrator group
- The app detects changes automatically on the user's next action - no manual sync needed

## Common Permission Scenarios

**A new hire needs to start logging time**
→ Assign them the Member role via RBAC → User Roles.

**A contractor's engagement has ended**
→ Remove the Member role via RBAC → User Roles. Their read-only access remains but they can no longer log time or modify data.

**A team lead was promoted and needs full admin access**
→ Add them to the Jira administrator group in Jira user management. The app automatically recognizes them as Global Admin.

**A user doesn't know why they can't log time**
→ Direct them to Settings → My Permissions. If they have no role, the Restricted Actions section will confirm they need the Member role.

**A user asks why they can see portfolios but not edit them**
→ Portfolio viewing is available to Members. Creating, editing, and saving portfolios requires the Member role; editing portfolios created by others requires Global Admin.`,
        },
        {
          slug: "data-security-settings",
          title: "Data & Security Settings",
          content: `
## Data Storage

The app stores all data using **Atlassian Forge Key-Value Storage (KVS)**:

- All app data (time logs, report configurations, templates, portfolio filters, scoring data) is stored in Forge KVS
- Forge KVS is encrypted at rest and isolated per Jira installation
- No data is exported to or stored on Clovity's servers
- Data processing happens within the Atlassian platform boundary

## What Data the App Accesses

| **Data Type** | Used For | Where Stored |
|---|---|---|
| **Jira issues and projects** | Capacity analysis, backlog scoring, portfolio views | Read from Jira; not copied |
| **Jira worklogs** | Time tracking - read and write | Written to Jira; time log metadata in Forge KVS |
| **Jira users and groups** | Assignee display, RBAC | Read from Jira; not copied |
| **Jira configuration** | Issue types, statuses, priorities, custom fields | Read from Jira; not copied |
| **App configurations** | Report setups, templates, portfolios, scoring | Stored in Forge KVS |

## What the App Does NOT Access

- Confluence data
- Jira attachments and file content
- External services or third-party systems
- Any data outside your Jira Cloud instance

## What the App Does NOT Do

- Does not transmit Jira data to Clovity's servers
- Does not store your data in any database outside the Atlassian platform
- Does not access Confluence, email, or any system outside your Jira Cloud instance
- Does not send data to third-party analytics or advertising platforms

## Atlassian Forge Security

| **Control** | Details |
|---|---|
| **Data Isolation** | Each Jira installation has its own isolated Forge KVS namespace - no data sharing between tenants |
| **Encryption at Rest** | All Forge KVS data is encrypted by Atlassian |
| **Encryption in Transit** | All communication uses TLS 1.2+ |
| **No External Data Egress** | The app does not make outbound calls to Clovity servers |
| **Access Control** | App can only access Jira data permitted by the user's Jira permissions |

## GDPR Compliance

The app processes personal data (Jira usernames, display names, email addresses) only as necessary for the app's functionality:

- Processed on the Atlassian platform within your chosen data residency region
- Not shared with Clovity or any third party
- Subject to Atlassian's GDPR Data Processing Agreement (DPA) as the data processor

To exercise GDPR rights (access, deletion, portability) for data in Jira, contact your Jira site administrator. For data stored in Forge KVS by this app, contact **developers@clovity.com**.

## Compliance

- **SOC 2 Type II** (Atlassian platform level)
- **ISO 27001** (Atlassian platform)
- **GDPR** compliance through Atlassian's data residency program

## Security Contact

Report security vulnerabilities: **developers@clovity.com**
Subject line: **Security: [Brief description]**
Response within 1 business day.`,
        },
        {
          slug: "performance-options",
          title: "Performance Options",
          content: `
## Manage Staff

Manage Staff provides tools for configuring individual working patterns - holiday calendars, workload schemes, and staff assignments - which feed into capacity calculations.

Access from Settings → Manage Staff.

### Holiday Calendar

Define company-wide holidays to accurately reduce available capacity on non-working days.

**Adding a Holiday:**
1. Settings → Manage Staff → Holiday Calendar
2. Click Add Holiday
3. Enter: Name, Date → Save

Holidays reduce available capacity for all users on that date. The Capacity Planner automatically excludes configured holidays from available hours calculations.

### Workload Scheme

Workload Schemes define the number of working hours per day for different working patterns.

**Creating a Workload Scheme:**
1. Settings → Manage Staff → Workload Scheme → Create Scheme
2. Enter Scheme Name (e.g., "Full-Time 8h", "Part-Time 4h", "4-day week")
3. Set hours per day for each weekday independently → Save

**Example Schemes:**

| **Scheme** | Mon | Tue | Wed | Thu | Fri |
|---|---|---|---|---|---|
| **Full-Time 8h** | 8 | 8 | 8 | 8 | 8 |
| **Part-Time 4h** | 4 | 4 | 4 | 4 | 4 |
| **4-day week** | 0 | 8 | 8 | 8 | 8 |
| **Contractor 6h** | 6 | 6 | 6 | 6 | 6 |

### Staff Assignment

Links individual staff members to workload schemes.

**Assigning a Scheme:**
1. Settings → Manage Staff → Staff Assignment
2. Search for the team member
3. Select their Workload Scheme from the dropdown
4. Changes save automatically

**Tips:**
- Default scheme (from General Settings hours/day) applies to all users with no explicit scheme assigned
- Assign part-time schemes to contractors or part-time employees before running capacity reports

---

## Performance Optimization Tips

| **Problem** | Solution |
|---|---|
| **Report loads slowly** | Narrow the date range; reduce group-by dimensions; filter to fewer projects |
| **Capacity analysis takes too long** | Select fewer projects or shorter date range |
| **Gantt chart is sluggish** | Reduce issue count in portfolio using tighter JQL filters |
| **Backlog table is slow** | Filter to a specific issue type or status to reduce the issue count |
| **Dashboard gadget shows no data** | Check that the portfolio scope still contains issues; verify read access |

## Platform Limits

| **Constraint** | Impact |
|---|---|
| **Forge KVS storage** | Very large datasets may approach Forge storage limits |
| **Jira API rate limits** | Automatic backoff/retry is built in - very large issue fetches may be slower |
| **No pre-aggregation** | All reports are generated on-demand from Jira data - no overnight aggregation cache |`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. INTEGRATIONS & MIGRATION
    // ═══════════════════════════════════════════════════════════════
    {
      id: "integrations-migration",
      title: "Integrations & Migration",
      articles: [
        {
          slug: "supported-integrations",
          title: "Supported Integrations",
          content: `
## Native Jira Integration

Time Tracking, Resource Planning & Project Management is a **native Jira Cloud app** - it integrates directly with Jira through the Atlassian Forge platform. No separate connection or API key is needed.

### What Jira Data It Uses

| **Jira Data** | How It's Used |
|---|---|
| **Issues** | Source for time logging, capacity analysis, backlog scoring, and portfolio views |
| **Projects** | Scope selector for all modules |
| **Worklogs** | Read and write time entries |
| **Users and Groups** | Assignee display, RBAC Global Admin detection |
| **Sprints** | Available as a grouping dimension in reports and backlog views |
| **Issue Types, Statuses, Priorities** | Filtering and grouping in all modules |
| **Custom Fields** | Available for filtering in portfolio and report builder |
| **Saved Filters** | Can be used as portfolio scope in Portfolio Management |

## Jira Dashboard Integration

The **Portfolio Dashboard Gadget** adds a portfolio metrics widget to any Jira dashboard:

1. Open a Jira dashboard → click **Add Gadget**
2. Search for **"Project Portfolio Management"**
3. Configure the gadget with a project or saved filter scope
4. The gadget displays portfolio health metrics inline on your dashboard

## Currently Not Supported

| **Integration** | Status |
|---|---|
| **Jira Server / Data Center** | Not supported - Forge platform is Cloud-only |
| **Confluence** | No direct integration |
| **Slack** | Not supported |
| **Microsoft Teams** | Not supported |
| **Google Sheets / Excel** | CSV export available for manual transfer |
| **Tempo Timesheets** | No direct integration |
| **Harvest / Toggl** | No direct integration |
| **SAP / Oracle ERP** | No direct integration |

## Roadmap

Third-party integrations (Slack notifications, calendar sync, external reporting tools) are on the product roadmap. Submit your integration request to **developers@clovity.com**.`,
        },
        {
          slug: "third-party-apps",
          title: "Connect with Third-party Apps",
          content: `
## Current State

Time Tracking, Resource Planning & Project Management currently operates as a **self-contained Jira Cloud app**. It reads from and writes to Jira directly - there are no native connectors to third-party apps at this time.

## Data Export for Third-party Use

For teams that need to get data into external tools, the app provides export options:

### CSV Export
Available in:
- **Time Tracking → Report Builder** → Export button → CSV
- **Backlog Prioritization → Backlog Table** → Export → CSV

CSV exports include all columns visible in the current report/view. Use these to import data into:
- Microsoft Excel / Google Sheets for custom analysis
- Business intelligence tools (Power BI, Tableau, Looker) via file import
- ERP or billing systems that accept CSV uploads

### PDF Export
Available in:
- **Time Tracking → Report Builder** → Export button → PDF
- Exports include the report table and any charts

## Jira Saved Filters as Integration Points

Jira saved filters can be used to create a shared data boundary:

1. Create a Jira saved filter using JQL that defines your portfolio scope
2. Use that saved filter as the portfolio scope in **Portfolio Management**
3. Other teams or tools (dashboards, automation) that also use the same saved filter stay in sync with the portfolio scope

## Feature Request: Integrations

If you need a specific integration, email **developers@clovity.com** with:
- Subject: **Feature Request: [Tool Name] Integration**
- What data you need to transfer
- Which direction (push/pull)
- How frequently you need it

Integration requests are reviewed by the product team and prioritized based on demand.`,
        },
        {
          slug: "cloud-migration",
          title: "Cloud Migration Guide",
          content: `
## Moving from Jira Server/Data Center to Jira Cloud

If your organization is migrating from Jira Server or Data Center to Jira Cloud, this page explains how Time Tracking, Resource Planning & Project Management fits into that process.

## Important: Server/Data Center Not Supported

This app **only runs on Jira Cloud**. There is no Server or Data Center version. You cannot migrate from a Server/Data Center version of this app because no such version exists.

## After Your Jira Cloud Migration is Complete

Once your Jira Cloud migration is done and your team is using Jira Cloud:

1. **Install the app** from the Atlassian Marketplace on your new Jira Cloud instance
2. **Reassign roles** - the RBAC configuration from any previous tool does not carry over; assign Member roles from scratch
3. **Recreate saved reports** - report configurations are stored per Jira installation and don't transfer
4. **Set up time categories and billing accounts** - these are configured fresh after install
5. **Import historical time data** - if you have historical worklogs in Jira from your migration, the app will display them automatically once you set the correct date ranges

## Historical Data Availability

If your Jira Cloud migration included worklog data, the Time Tracking module will display it as soon as you load a report covering that date range. No additional import is needed - the app reads directly from Jira worklogs.

## Planning Your Migration

Jira provides official migration tools. For guidance on migrating Jira itself:
- [Atlassian Cloud Migration Center](https://www.atlassian.com/migration/plan/cloud)
- Contact Atlassian Support for migration assistance

For questions about the app after migration, contact **developers@clovity.com**.`,
        },
        {
          slug: "data-import-export",
          title: "Data Import / Export",
          content: `
## Exporting Data

### Time Tracking Reports - CSV Export
1. Open **Time Tracking → Timesheet**
2. Open any report in the Report Builder
3. Configure filters and grouping as needed
4. Click **Export → CSV**

CSV export includes all visible columns in the current report configuration.

### Time Tracking Reports - PDF Export
1. Same as above but click **Export → PDF**
2. PDF includes the report table and bar/pie charts

### Backlog Prioritization - CSV Export
1. Open **Backlog Prioritization → Backlog Table**
2. Select your project and apply scoring
3. Click **Export → CSV**

Export includes: Issue key, Summary, Assignee, Status, Priority, all metric columns, and calculated Score.

## Importing Data

The app does **not** currently support bulk data import. Time entries must be logged through:
- The app's Log Time interface
- Jira's native worklog API (worklogs created via API are visible in the app automatically)

## Jira Worklog API

For teams that want to programmatically create worklogs that appear in the app:

- Use the Jira Cloud REST API - Add worklog endpoint:

\`POST /rest/api/3/issue/{issueIdOrKey}/worklog\`

**Required fields:**
- \`timeSpentSeconds\`: Time logged in seconds (e.g., 3600 = 1 hour)
- \`started\`: ISO 8601 datetime string

Worklogs created this way appear in the Time Tracking report builder automatically.

## Data Retention

App configuration data (report setups, templates, portfolios, scoring) is stored in Forge KVS and is retained as long as the app is installed. Uninstalling the app permanently deletes all app-stored configurations. Jira worklogs are stored in Jira and are unaffected by app installation/uninstallation.`,
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
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Time_Tracking_Resource_Planning_and_Project_Management_Demo_Doc_911a3646e7.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
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
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Time_Tracking_Resource_Planning_and_Project_Management_Sales_Doc_1_64303cc32a.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
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
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Time_Tracking_Resource_Planning_and_Project_Management_Competitor_Comparision_8b37dbca41.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
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
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Time_Tracking_Resource_Planning_and_Project_Management_8fb258ea64.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
        {
          slug: "agc-app-pricing",
          title: "AGC App Pricing",
          content: `
<iframe src="https://clovity-website.s3.ap-south-1.amazonaws.com/Time_Tracking_Resource_Planning_and_Project_Management_AGC_3c2d7514a5.pdf" width="100%" height="900" style="border:1px solid #e2e8f0;border-radius:10px;display:block;" title="PDF"></iframe>
`,
        },
      ],
    },
  ],
};

export function getAllArticles(docs) {
  return docs.categories.flatMap((cat) =>
    cat.articles.map((article) => ({
      ...article,
      categoryId: cat.id,
      categoryTitle: cat.title,
    })),
  );
}

export function findArticle(docs, articleSlug) {
  for (const cat of docs.categories) {
    const article = cat.articles.find((a) => a.slug === articleSlug);
    if (article) return { article, category: cat };
  }
  return null;
}
