export const jqlaiDocs = {
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-jql-ai",
          title: "What is JQL AI?",
          sideVideo: {
            src: "https://www.youtube.com/embed/dqBC4GuOFWg",
            title: "JQL AI for Jira - Product Overview",
          },
          content: `
JQL AI is a Jira Cloud app that converts plain English questions into accurate Jira Query Language (JQL) queries - instantly. You describe what you want to find, and the AI writes the query for you.

## Core Value Proposition

- **No JQL knowledge required** - type what you want in plain English and get a ready-to-use JQL query
- **Works globally and per-project** - use it for system-wide searches or narrow it to a single project
- **Quick Actions for common searches** - one-click queries for Open, Closed, and In-Progress issues
- **Copy or search directly** - paste the JQL elsewhere or apply it in Jira Issue Navigator immediately
- **Admin controls** - enable or disable the app at the global or individual project level

All of this runs natively inside Jira Cloud using your existing projects, issues, and permissions - no external accounts or data exports needed.

<!--VIDEO_BREAK-->

## Who Is It For?

- **Team members** who want to search for issues without memorizing JQL syntax
- **Project managers** who need to quickly surface overdue, unassigned, or sprint-specific issues
- **Jira newcomers** who are not yet familiar with JQL operators and functions
- **Power users** who want to generate complex JQL as a starting point and refine it further
- **Jira admins** who want to control access and keep query usage safe per project

## How It Works

JQL AI uses AI to interpret your natural language input and map it to the correct JQL fields, operators, and values for your Jira instance. It auto-discovers your project's custom fields and includes them in query generation - so the output is accurate for your specific configuration, not just generic JQL.

## Platform

Jira Cloud only. No external server setup required.`,
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
4. Your organization has a valid **OpenAI API key** (required for AI query generation)

## Installation Steps

1. Log in to your Jira Cloud site as an administrator
2. Click the **gear icon** (Settings) in the top-right corner → select **Apps**
3. Click **Find new apps** in the left sidebar
4. Search for **"JQL AI"**
5. Click the app in the search results
6. Click **Try it free** or **Buy now**
7. Review and accept the requested permissions
8. Click **Accept** - the app installs immediately, no restart required

## Verify Installation

After installation:

1. Click **Apps** in the Jira top navigation bar
2. Look for **"JQL AI"** in the dropdown
3. Navigate to any Jira project - you should see the JQL AI option available in the Issue Navigator

## First Admin Steps

Once installed, complete these setup tasks before rolling out to your team:

| Step | Where | What to Do |
|---|---|---|
| 1. Configure OpenAI API key | App Admin Settings | Enter your OpenAI API key to enable AI query generation |
| 2. Set global access | Admin → Global Settings | Enable JQL AI across all projects or limit to specific ones |
| 3. Configure project-level access | Admin → Project Settings | Enable or disable JQL AI per project as needed |
| 4. Review security filters | Admin → Security Settings | Confirm content filtering is enabled for your use case |

## Jira Permissions Required

The app requests the following permissions during Marketplace install:

| Permission | Why It's Needed |
|---|---|
| Read Jira issues and projects | Load project context and custom fields for accurate query generation |
| Read Jira configuration | Detect issue types, statuses, priorities, and custom fields for your instance |
| Read users | Show assignee-related query suggestions |

## Uninstalling

To uninstall: Jira Settings → Apps → Manage apps → find JQL AI → click **Uninstall**. All app configurations will be permanently deleted.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
Get your first AI-generated JQL query in under 2 minutes.

## Step 1 - Open JQL AI

**Option A - From the Issue Navigator:**
1. Click **Issues** in the Jira top navigation
2. Select **Search for Issues**
3. Look for the **AI** button added by JQL AI in the search bar area
4. Click it to open the natural language input panel

**Option B - From a Project:**
1. Open any Jira project
2. Go to the project's Issue Navigator or Backlog
3. Look for the **JQL AI** option in the toolbar

## Step 2 - Type Your Query

In the text box, type what you want to find in plain English. Examples:

- \`Show all open bugs in this project\`
- \`Find issues assigned to me that are overdue\`
- \`List all stories with no story points\`
- \`Bugs created in the last 7 days that are still open\`

Press **Enter** or click **Convert**.

## Step 3 - Use the Result

JQL AI displays the generated query. You have two options:

- **Copy** - copies the JQL to your clipboard to paste wherever you need it
- **Search in Jira** - applies the JQL directly in the Issue Navigator and shows results immediately

## Step 4 - Try a Quick Action

Below the input box you'll see pre-built Quick Actions:

- **Open Issues** - instantly generates JQL for all open issues
- **Closed Issues** - all resolved/closed issues
- **In-Progress Issues** - issues currently in an active workflow status

Click any Quick Action to generate and apply the query without typing anything.`,
        },
        {
          slug: "system-requirements",
          title: "System Requirements",
          content: `
## Jira Requirements

| Requirement | Details |
|---|---|
| Jira edition | Jira Cloud only |
| Jira products | Jira Software, Jira Service Management |
| Jira Server / Data Center | Not supported |
| Jira version | Current Jira Cloud (continuously updated) |

## Browser Requirements

| Browser | Supported |
|---|---|
| Google Chrome (latest) | Yes - recommended |
| Mozilla Firefox (latest) | Yes |
| Microsoft Edge (latest) | Yes |
| Safari (latest) | Yes |
| Internet Explorer | Not supported |

## Network Requirements

JQL AI communicates with the OpenAI API to generate queries. Ensure your network allows outbound HTTPS connections. No inbound connections or firewall exceptions are required on your Jira instance.

## API Key Requirements

A valid **OpenAI API key** must be configured by a Jira admin in the app's admin settings. The key is used to power AI query conversion. Without a valid key, the app will display a "Something went wrong" error when attempting to generate queries.

## Permissions

- **Site Administrators** - required to install and configure the app, set the API key, and manage global/project-level access
- **Project Administrators** - can enable or disable JQL AI for their specific project
- **All Jira users** - can use JQL AI to generate and run queries (subject to admin-configured access settings)`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## Permission Levels

JQL AI uses two levels of access control:

### 1. Global Level
A Jira site administrator can enable or disable JQL AI across all projects in the instance. When disabled globally, no user in any project can access JQL AI features.

### 2. Project Level
A project administrator can enable or disable JQL AI for their specific project, independent of other projects. This allows fine-grained control - for example, enabling JQL AI only for certain teams or projects.

## Who Can Do What

| Role | Capabilities |
|---|---|
| Jira Site Admin | Install app, configure OpenAI API key, set global access, enable/disable per project |
| Project Admin | Enable or disable JQL AI for their project |
| Jira User | Use JQL AI to generate and apply JQL queries (if enabled for their project) |

## Access Denied Scenarios

| Scenario | What the User Sees | Resolution |
|---|---|---|
| JQL AI disabled globally | App option not visible | Contact Jira admin to enable it |
| JQL AI disabled for a project | AI button not visible in that project | Contact project admin or Jira admin |
| No OpenAI API key configured | "Something went wrong" error | Admin must configure a valid API key |
| Invalid or expired API key | "Something went wrong" error | Admin must update the API key in admin settings |

## Data Access

JQL AI reads your Jira project configuration (issue types, statuses, custom fields) to generate accurate queries. It does not read the content of your issues (summaries, descriptions, comments). Query input text is sent to OpenAI for processing - review your organization's data handling policies before enabling for sensitive projects.`,
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
          title: "Overview & Where to Find JQL AI",
          content: `
## Three Entry Points

Once installed, JQL AI is accessible from three locations in Jira:

### 1. Global Search (Issue Navigator)
Available in the Jira navigation menu for system-wide searches across all projects you have access to.

**How to access:**
1. Click **Issues** in the top Jira navigation
2. Select **Search for Issues**
3. Click the **AI** button in the search bar

Use Global Search when you want to find issues across multiple projects, or when you don't know which project an issue belongs to.

### 2. Project Page
Available inside individual Jira projects for project-specific searches.

**How to access:**
1. Open a Jira project
2. Go to the project's Issue Navigator or Backlog
3. Look for the **JQL AI** option in the toolbar or filter area

Use Project Search when you want to limit results to a single project and generate queries that are scoped to that project's configuration (including its custom fields).

### 3. Admin Page
Accessible only to Jira administrators. Used to configure API keys, enable/disable access, and manage security settings.

**How to access:**
1. Go to **Jira Settings** (gear icon)
2. Click **Apps**
3. Find and click **JQL AI** in your installed apps list

## Interface Layout

The JQL AI panel contains:
- **Natural language input box** - where you type your query in plain English
- **Convert / Enter button** - triggers AI query generation
- **Generated JQL display** - shows the converted JQL query
- **Copy button** - copies the JQL to clipboard
- **Search in Jira button** - applies the query and opens issue results
- **Quick Actions** - pre-built buttons for common searches`,
        },
        {
          slug: "key-features",
          title: "Key Features",
          content: `
## AI-Powered JQL Conversion

The core feature of JQL AI. Type any question or description in plain English and receive an accurate, ready-to-use JQL query.

**What makes it accurate:**
- Auto-discovers your Jira project's custom fields and includes them in query generation
- Understands Jira-specific concepts like sprints, story points, epics, and worklogs
- Handles relative dates ("last week", "this sprint", "past 30 days") correctly
- Produces syntactically valid JQL that runs without errors in Jira

## Global and Project-Specific Search

**Global Search mode:** Generates JQL that searches across all projects. Use it for cross-project queries or when you don't want to scope to a single project.

**Project-Specific mode:** Generates JQL scoped to the current project. Results are limited to that project. Queries reference the project's specific custom fields, issue types, and statuses.

> Note: If you're inside a project and your query references multiple projects, JQL AI will return a "Project-specific queries only" error. Switch to Global Search for multi-project queries.

## Quick Actions

Three pre-configured one-click query generators:

| Quick Action | What It Generates |
|---|---|
| Open Issues | All issues in an open/active status |
| Closed Issues | All resolved or closed issues |
| In-Progress Issues | All issues in an active in-progress status |

Quick Actions apply instantly - no typing required.

## Copy and Search in Jira

After generating a query, you have two options:

- **Copy** - copies the raw JQL string to your clipboard. Use it in saved filters, automation rules, dashboards, or external tools.
- **Search in Jira** - opens the Jira Issue Navigator with the query pre-applied and results loaded immediately.

## Custom Field Discovery

JQL AI automatically detects the custom fields configured in your Jira instance and project. When you mention a concept that maps to a custom field (e.g., "story points", "team", "sprint"), the app uses the correct field name and schema for your configuration - not a generic guess.

## Dark Mode Support

JQL AI's interface fully supports Jira's dark mode. The query input panel, generated JQL display, Quick Action buttons, and all UI elements automatically adapt to your Jira theme setting - no extra configuration needed.`,
        },
        {
          slug: "how-to-tutorials",
          title: "How-To Tutorials",
          content: `
## Tutorial 1 - Find All Open Bugs in a Project

**Goal:** Get a list of all unresolved bugs in a specific project.

1. Open the project in Jira
2. Click the **JQL AI** button in the Issue Navigator toolbar
3. Type: \`Show all open bugs\`
4. Click **Convert**
5. JQL AI generates: \`issuetype = Bug AND status != Done AND project = "YOUR_PROJECT"\`
6. Click **Search in Jira** to see the results

---

## Tutorial 2 - Find Overdue Issues Assigned to You

**Goal:** Surface issues past their due date that you are responsible for.

1. Open JQL AI from the global search or project page
2. Type: \`Find overdue issues assigned to me\`
3. Click **Convert**
4. JQL AI generates: \`assignee = currentUser() AND due < now() AND status not in (Done, Closed)\`
5. Click **Copy** to save the query as a Jira saved filter for daily use

---

## Tutorial 3 - Use a Quick Action

**Goal:** Instantly see all in-progress work without typing anything.

1. Open JQL AI
2. In the Quick Actions section, click **In-Progress Issues**
3. JQL AI generates and applies the query immediately
4. The Jira Issue Navigator opens with all in-progress issues listed

---

## Tutorial 4 - Multi-Project Search via Global Search

**Goal:** Find high-priority bugs across all projects.

1. Click **Issues** in the Jira top navigation → **Search for Issues**
2. Click the **AI** button to open JQL AI in Global Search mode
3. Type: \`High priority bugs not yet resolved across all projects\`
4. Click **Convert**
5. JQL AI generates: \`issuetype = Bug AND priority in (High, Highest) AND status not in (Done, Resolved, Closed)\`
6. Click **Search in Jira**

---

## Tutorial 5 - Copy JQL for a Saved Filter

**Goal:** Create a reusable filter you can share with your team.

1. Open JQL AI and type your query (e.g., \`Stories with no story points in the backlog\`)
2. Click **Convert**
3. Click **Copy** to copy the generated JQL
4. In Jira, go to **Issues → Search for Issues**
5. Paste the JQL into the JQL editor
6. Click **Save as** → name your filter → click **Submit**
7. Share the filter with your team via Jira's filter permissions`,
        },
        {
          slug: "entering-queries",
          title: "Entering Natural Language Queries",
          content: `
## How to Write Good Queries

JQL AI works best when your query is specific and describes what you want to find. You don't need to use Jira terminology - plain English is fine.

## Good Query Examples

| What You Want | What to Type |
|---|---|
| All open bugs | \`Show all open bugs\` |
| Overdue issues | \`Find issues past their due date that are still open\` |
| My assigned work | \`Issues assigned to me that are in progress\` |
| Sprint issues | \`All stories in the current sprint\` |
| Unestimated backlog | \`Stories with no story points\` |
| Recent activity | \`Issues updated in the last 7 days\` |
| Unassigned issues | \`Open issues with no assignee\` |
| Issues by person | \`All tasks assigned to John Doe\` |
| High priority items | \`High and critical priority bugs not yet fixed\` |
| Stale issues | \`Issues that haven't been updated in 30 days\` |

## Tips for Best Results

1. **Be specific about status** - say "open", "closed", "in progress", "done", "unresolved" rather than vague terms
2. **Name the issue type** - say "bug", "story", "task", "epic", "sub-task"
3. **Use relative time** - "last week", "this sprint", "last 30 days", "this quarter" all work
4. **Name your project** - if doing a global search, you can say "in Project X"
5. **Reference people by name** - "assigned to Jane" or "assigned to me"

## What JQL AI Does Not Support

- Queries about issue content (e.g., "find issues mentioning API errors in comments") - JQL cannot search issue comment text natively
- Queries requiring real-time external data (e.g., "issues where the linked PR is failing CI")
- Queries that reference Jira configurations not accessible via JQL (e.g., certain read-only field values)

If your query cannot be converted, JQL AI will indicate the limitation and suggest a reformulation.`,
        },
        {
          slug: "reviewing-results",
          title: "Reviewing & Using JQL Results",
          content: `
## Understanding the Generated JQL

After clicking Convert, JQL AI displays the generated query in a read-only text area. Review it before applying:

- **Field names** - check that the fields used (e.g., \`issuetype\`, \`assignee\`, \`status\`) match what you intended
- **Operators** - \`=\`, \`!=\`, \`in\`, \`not in\`, \`is\`, \`is EMPTY\` should match your intent
- **Values** - status values and issue type names are taken from your Jira configuration
- **Functions** - \`currentUser()\`, \`now()\`, \`startOfWeek()\`, \`openSprints()\` are used where appropriate

## Two Ways to Use the Result

### Option 1 - Search in Jira

Click **Search in Jira** to immediately apply the query and load results in the Jira Issue Navigator. This is the fastest way to see your results.

From the Issue Navigator you can:
- Sort and filter the results further
- Switch between list and board views
- Bulk-edit issues
- Export to CSV
- Save as a Jira filter

### Option 2 - Copy

Click **Copy** to copy the raw JQL string to your clipboard. Use it to:
- Paste into Jira's JQL editor manually
- Save as a Jira saved filter (Issues → Search → Save as)
- Use in Jira automation rules as a trigger condition
- Use in dashboard gadgets that accept JQL input
- Share with teammates or include in documentation

## Refining the Query

If the generated JQL is close but not quite right:

1. Copy it to the Jira JQL editor
2. Make manual edits (e.g., add a project filter, change a date range, add an \`ORDER BY\`)
3. Run the refined query

JQL AI is a starting point - for complex queries, using the generated JQL as a base and editing it in Jira is the recommended workflow.`,
        },
        {
          slug: "quick-actions",
          title: "Quick Actions",
          content: `
## What Are Quick Actions?

Quick Actions are pre-configured query shortcuts built into JQL AI. Click them to generate and apply a JQL query instantly - no typing required.

## Available Quick Actions

### Open Issues
Generates a query for all issues currently in an open or active workflow status.

**Typical output:**
\`\`\`
status not in (Done, Closed, Resolved)
\`\`\`

Use this to get a fast overview of all active work in the current project or across Jira.

---

### Closed Issues
Generates a query for all issues that have been resolved or closed.

**Typical output:**
\`\`\`
status in (Done, Closed, Resolved)
\`\`\`

Use this to review completed work, audit resolved items, or generate retrospective reports.

---

### In-Progress Issues
Generates a query for all issues currently in an active in-progress status.

**Typical output:**
\`\`\`
status in ("In Progress", "In Review", "In Development")
\`\`\`

Use this to check what the team is actively working on right now.

## How Quick Actions Adapt to Your Project

Quick Actions use the status values configured in your Jira project's workflow. If your project uses custom status names (e.g., "Doing" instead of "In Progress"), JQL AI maps the Quick Action to the correct statuses for your specific workflow.

## When to Use Quick Actions vs. Typing a Query

| Use Quick Actions When | Type a Query When |
|---|---|
| You want a fast snapshot of work | You need to filter by assignee, date, or issue type |
| You're demonstrating Jira to someone | Your search involves multiple conditions |
| You need a generic status-based filter | You need custom field filters |`,
        },
        {
          slug: "global-vs-project-search",
          title: "Global Search vs. Project Search",
          content: `
## Global Search

**What it is:** JQL AI accessed from the Jira Issue Navigator (Issues → Search for Issues). Generates queries that search across all Jira projects you have permission to view.

**When to use:**
- Searching for issues across multiple projects
- You don't know which project an issue belongs to
- Creating cross-project saved filters or dashboard gadgets
- Reporting on work across teams or programs

**How to access:**
1. Click **Issues** in the Jira top navigation
2. Select **Search for Issues**
3. Click the **AI** button in the JQL AI panel

**Behavior:** Generated JQL does not include a project filter unless you explicitly mention one in your query. Results can span all accessible projects.

---

## Project-Specific Search

**What it is:** JQL AI accessed from within a Jira project. Generates queries scoped to that project only.

**When to use:**
- You want to search within a single project
- Your query references project-specific custom fields
- You want results limited to your current project's context

**How to access:**
1. Open any Jira project
2. Navigate to the Issue Navigator or Backlog
3. Click the **JQL AI** option in the toolbar

**Behavior:** Generated JQL includes a \`project = "PROJECT_KEY"\` filter automatically. Custom field names are resolved based on the current project's field configuration.

---

## Common Error: Multi-Project Query in Project Mode

If you're inside a project and type a query that references multiple projects (e.g., "Find all bugs across all projects"), JQL AI will return:

> **"Project-specific queries only"**

**Solution:** Switch to Global Search mode (Issues → Search for Issues → AI button) to run multi-project queries.`,
        },
        {
          slug: "query-examples",
          title: "Query Examples",
          content: `
## Basic Queries

| Natural Language | Generated JQL |
|---|---|
| All open issues | \`status not in (Done, Closed, Resolved)\` |
| All bugs | \`issuetype = Bug\` |
| Issues assigned to me | \`assignee = currentUser()\` |
| Unassigned issues | \`assignee is EMPTY\` |
| High priority issues | \`priority in (High, Highest)\` |

---

## Date-Based Queries

| Natural Language | Generated JQL |
|---|---|
| Issues created this week | \`created >= startOfWeek()\` |
| Issues updated in the last 7 days | \`updated >= -7d\` |
| Overdue issues | \`due < now() AND status not in (Done, Closed)\` |
| Issues due this month | \`due >= startOfMonth() AND due <= endOfMonth()\` |
| Issues created last sprint | \`created >= startOfSprint(-1) AND created <= endOfSprint(-1)\` |

---

## Sprint and Backlog Queries

| Natural Language | Generated JQL |
|---|---|
| Current sprint issues | \`sprint in openSprints()\` |
| Backlog stories with no points | \`issuetype = Story AND "Story Points" is EMPTY AND sprint is EMPTY\` |
| Stories in closed sprints not done | \`issuetype = Story AND sprint in closedSprints() AND status != Done\` |
| Issues with no epic | \`"Epic Link" is EMPTY AND issuetype = Story\` |

---

## Combined Condition Queries

| Natural Language | Generated JQL |
|---|---|
| Open high-priority bugs assigned to me | \`issuetype = Bug AND priority in (High, Highest) AND assignee = currentUser() AND status not in (Done, Closed)\` |
| Stories with no story points in the current sprint | \`issuetype = Story AND sprint in openSprints() AND "Story Points" is EMPTY\` |
| Bugs created last sprint not yet fixed | \`issuetype = Bug AND sprint in closedSprints() AND status != Done\` |
| In-progress issues with no due date | \`status = "In Progress" AND due is EMPTY\` |

---

## Reporter and Assignee Queries

| Natural Language | Generated JQL |
|---|---|
| Issues I reported | \`reporter = currentUser()\` |
| Issues reported by Jane | \`reporter = "jane.doe"\` |
| Issues assigned to the QA team | \`assignee in membersOf("qa-team")\` |
| Issues with no reporter | \`reporter is EMPTY\` |`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
## Writing Better Queries

1. **Be specific about what you want** - "open high-priority bugs" is better than "important issues"
2. **Use Jira terminology when you know it** - terms like "story points", "epic", "sprint", "assignee" are understood directly
3. **Mention time frames explicitly** - "last week", "this month", "past 30 days" produce accurate date filters
4. **Specify the issue type** - Bug, Story, Task, Epic, Sub-task generate more precise queries
5. **Use "assigned to me"** - JQL AI maps this to \`currentUser()\` so the filter works for every user who runs it

## Saving and Reusing Queries

- After generating a useful query, **save it as a Jira filter** (Issues → Search → Save as). Name it clearly so teammates can find and use it.
- Add saved filters to **Jira dashboard gadgets** for always-on visibility without re-typing queries.
- Use copied JQL in **Jira automation rules** to trigger on specific issue states.

## Using JQL AI as a Learning Tool

Even if you eventually want to write JQL yourself, JQL AI is an effective way to learn:
- Generate a query in plain English
- Study the output to see how Jira fields and operators work
- Modify the generated JQL in the editor to understand what each part does

## Quick Action Shortcuts

For daily use, Quick Actions (Open Issues, Closed Issues, In-Progress Issues) are the fastest way to get a status snapshot. Use them at the start of standup or a sprint check-in to quickly surface what needs attention.

## When to Use Global vs. Project Search

- Use **Project Search** for day-to-day work within your project - it's faster and auto-scopes results
- Use **Global Search** for cross-team reporting, portfolio views, or when you're not sure which project an issue is in`,
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
## Accessing Admin Settings

1. Log in to Jira as a **site administrator**
2. Click the **gear icon** → **Apps**
3. Find and click **JQL AI** in the installed apps list
4. The Admin Settings page opens

## Available Settings

| Setting | Description | Default |
|---|---|---|
| OpenAI API Key | The API key used to power AI query generation | Not set (required) |
| Global Access | Enable or disable JQL AI for the entire Jira instance | Enabled after install |
| Project-Level Access | Enable or disable per individual project | Inherited from global |
| Security Filters | Automatically filter inappropriate content in query inputs | Enabled |

## OpenAI API Key Configuration

The API key is required for AI query generation. Without it, users will see a "Something went wrong" error.

**Steps to configure:**
1. Obtain an API key from your organization's OpenAI account
2. In Admin Settings, paste the key into the **OpenAI API Key** field
3. Click **Save**
4. Test by generating a query from any project

**Note:** Keep this key confidential. It is stored securely within the app and is never exposed to end users.

## Global vs. Project-Level Access Control

You can control JQL AI access at two levels:

- **Global Level:** One toggle to enable or disable JQL AI across the entire Jira instance. Disabling globally overrides all project-level settings.
- **Project Level:** Enable or disable JQL AI for individual projects. Useful when you want to roll out JQL AI incrementally or restrict it to specific teams.`,
        },
        {
          slug: "enable-disable-access",
          title: "Enabling & Disabling JQL AI",
          content: `
## Disabling JQL AI Globally

1. Go to **Jira Settings → Apps → JQL AI**
2. Under **Global Access**, toggle the switch to **Disabled**
3. Click **Save**

Effect: The AI button is hidden from the Issue Navigator and all project pages for all users. No JQL AI features are accessible until re-enabled.

---

## Enabling JQL AI for Specific Projects Only

1. Go to **Jira Settings → Apps → JQL AI**
2. Under **Global Access**, keep it **Enabled**
3. Scroll to **Project-Level Access**
4. Find the project(s) you want to disable and toggle them to **Disabled**

Effect: JQL AI is available in all projects except the ones you've explicitly disabled.

---

## Enabling JQL AI for a Single Project (Project Admin)

Project administrators can manage JQL AI access for their own project without needing Jira site admin rights:

1. Go to **Project Settings** for your project
2. Find the **JQL AI** section under Apps or Add-ons
3. Toggle to **Enabled** or **Disabled** as needed
4. Click **Save**

---

## Effect on End Users

| Status | What Users See |
|---|---|
| Globally enabled, project enabled | AI button visible and functional |
| Globally enabled, project disabled | AI button hidden in that project only |
| Globally disabled | AI button hidden everywhere |
| Enabled but no API key | AI button visible but returns "Something went wrong" |`,
        },
        {
          slug: "security-filters",
          title: "Security Filters",
          content: `
## What Are Security Filters?

JQL AI includes a built-in content filtering layer that checks natural language input before sending it to the AI for query generation. This prevents inappropriate, harmful, or off-topic content from being processed.

## How It Works

1. User types a query in the JQL AI input box
2. Before the query is sent to OpenAI, the security filter scans the input
3. If the input contains flagged content, it is blocked and the user receives a message asking them to rephrase
4. Clean inputs pass through and are converted to JQL normally

## What Is Filtered

- Profane, offensive, or inappropriate language
- Prompts attempting to misuse the AI (prompt injection, jailbreak attempts)
- Non-Jira-related requests (the app is designed specifically for JQL query generation)

## Managing Security Filters

Security filters are enabled by default and are recommended to remain on for all deployments. To review or adjust filter settings:

1. Go to **Jira Settings → Apps → JQL AI → Security Settings**
2. Review the current filter level
3. Adjust if needed (contact Clovity support if you need custom filter configurations for enterprise deployments)

## User Experience When Filtered

If a query is blocked, the user sees an inline message:
> "Your query could not be processed. Please rephrase it or contact your Jira admin."

The user can rephrase and try again. Blocked queries are not logged or stored.`,
        },
        {
          slug: "api-key-management",
          title: "OpenAI API Key Management",
          content: `
## Why an API Key Is Required

JQL AI uses OpenAI's language models to understand natural language and generate accurate JQL. Your organization's OpenAI API key authenticates these requests and is billed to your OpenAI account based on usage.

## Setting Up the API Key

1. Log in to your organization's **OpenAI account** at platform.openai.com
2. Navigate to **API Keys** and create a new secret key
3. Copy the key immediately (it is only shown once)
4. In Jira, go to **Settings → Apps → JQL AI → Admin Settings**
5. Paste the key into the **OpenAI API Key** field
6. Click **Save**

## Usage and Billing

- Each JQL AI query generation request consumes a small number of OpenAI API tokens
- Token consumption varies with query complexity - simple queries use fewer tokens than complex multi-condition ones
- Monitor your OpenAI usage dashboard to track costs
- Consider setting a **usage limit** on your OpenAI account to cap monthly spend

## Rotating the API Key

If your key is compromised or you rotate it per your security policy:

1. Generate a new key in your OpenAI account and disable the old one
2. In Jira Admin Settings → JQL AI, update the **OpenAI API Key** field with the new key
3. Click **Save**
4. The new key takes effect immediately for all subsequent queries

## Troubleshooting API Key Issues

| Error | Likely Cause | Resolution |
|---|---|---|
| "Something went wrong" | Key not set or invalid | Set or update the API key in admin settings |
| Queries fail after working previously | Key expired or revoked | Generate a new key in OpenAI and update it in admin settings |
| Slow query generation | OpenAI API rate limits | Check OpenAI rate limit tier and upgrade if needed |`,
        },
        {
          slug: "permissions-admin",
          title: "Permissions (Admin)",
          content: `
## Admin Permission Requirements

| Action | Required Jira Permission |
|---|---|
| Install or uninstall JQL AI | Jira Site Administrator |
| Configure OpenAI API key | Jira Site Administrator |
| Enable/disable globally | Jira Site Administrator |
| Enable/disable per project | Jira Site Administrator or Project Administrator |
| Use JQL AI to generate queries | Any Jira user with project access (when enabled) |

## Project Administrator Controls

Project administrators can manage JQL AI access for their own project without full site admin rights. They can:
- Enable or disable JQL AI for their project
- View whether global access is enabled or disabled (read-only)

Project admins cannot:
- Set or modify the OpenAI API key
- Change global access settings
- Enable JQL AI for other projects

## Jira User Access

Any Jira user with access to a project can use JQL AI in that project, provided:
1. JQL AI is enabled globally
2. JQL AI is not disabled for that specific project
3. A valid OpenAI API key is configured

No special Jira roles or permissions are needed at the user level beyond normal project access.`,
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
