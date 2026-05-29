export const backlogAuditorDocs = {
  appSlug: "backlog-auditor-jira",
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-backlog-auditor",
          title: "What is Backlog Auditor & Export?",
          sideVideo: {
            src: "https://www.youtube.com/embed/ahot7joi_sE",
            title:
              "Time Tracking, Resource Planning & Project Management - Product Introduction",
          },
          content: `
Backlog Auditor & Export is a Forge-powered Jira Cloud application designed to help project administrators and teams **systematically monitor and improve backlog quality**.

## The Problem It Solves

Backlogs often grow messy - with missing fields, outdated issues, or inconsistent data. Manually checking hundreds (or thousands) of issues is both time-consuming and error-prone.

Backlog Auditor & Export solves this by:

- Allowing administrators to **define rule-based checks** for fields across issues
- Automatically detecting **violations** that deviate from agreed standards
- Presenting **actionable reports** that highlight trends, bottlenecks, and recurring issues

Instead of asking "Why is our backlog full of unclear or outdated issues?", Backlog Auditor & Export provides a **clear, visual, and repeatable way to enforce standards** and drive backlog discipline.

<!--VIDEO_BREAK-->

## Who Is It For?

- **Project Administrators** who need to define and enforce backlog standards across the team
- **Team Leads & Scrum Masters** who run regular backlog grooming and want data-driven insight
- **Team Members** who need guidance on what's missing in their assigned issues
- **Engineering Managers** who need to demonstrate backlog health improvement over time

## Platform

Jira Cloud only. Built on Atlassian Forge - no external servers, no data exports, no infrastructure to maintain.
`,
        },
        {
          slug: "prerequisites",
          title: "Prerequisites",
          content: `
Before installing or using Backlog Auditor & Export, ensure the following are in place.

## Jira Environment

Only supported on **Jira Cloud**. Jira Data Center and Server are not supported yet.

## Installation

Install via the **Atlassian Marketplace** or deploy through **Forge**.

## Browser

Use an up-to-date browser:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

## Permissions

| Role | What They Can Do |
|---|---|
| **Project Administrator** | Configure rulesets, add and delete rules |
| **Team Member** | View audit reports if they have project access |

## Access to Fields & Workflows

For meaningful audits, you must have visibility of **project fields** (system and custom) and **workflows**.

> **Important:** Ensure all fields you want to audit are visible and not restricted by field configurations or screen schemes before running an audit.
`,
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
## Installation Steps

1. Log in to your Jira Cloud site as a **site administrator**
2. Click the **gear icon** (Settings) in the top-right corner → select **Apps**
3. Click **Find new apps** in the left sidebar
4. Search for **"Backlog Auditor & Export"**
5. Click the app in the search results
6. Click **Try it free** or **Buy now**
7. Review and accept the requested permissions
8. Click **Accept** - the app installs immediately, no restart required

## Verify Installation

After installation:

1. Open any Jira project
2. Click **Project settings** in the left sidebar
3. Look for **Backlog Auditor & Export** under the Apps section
4. The app is ready when you can see both the **Admin Page** and the **Project (Audit) Page**

## Application Structure

The app consists of two key areas:

| Area | Purpose |
|---|---|
| **Admin Page** | Design and manage rulesets - think of it as setting the "audit checklist" for a project |
| **Project Page (Auditing)** | Execute audits and view results in an easy-to-read format |

This separation ensures that **rule creation and audit execution are distinct**, reducing errors and keeping responsibilities clear.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. BUILDING RULESETS (ADMIN PAGE)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "building-rulesets",
      title: "Building Rulesets",
      articles: [
        {
          slug: "admin-page-overview",
          title: "Admin Page Overview",
          content: `
The **Admin Page** is where administrators design and manage rulesets. Think of it as setting the "audit checklist" for a project. Once created, these rules can be reused and refined over time.

## Accessing the Admin Page

Navigate to your Jira project → **Project settings** → **Backlog Auditor & Export** → **Admin**.

## What You Can Do Here

- Select a project and issue types to scope your rules
- Fetch the fields available for auditing
- Create new rulesets or load existing ones
- Add, edit, and delete individual rules
- Save rulesets for use in future audits
- View a summary of all rulesets for a project

## Field Discovery

When you select a project and issue type, the app loads only the fields that apply to that combination:

- **First use:** Performs a live discovery from Jira (may take a moment)
- **Subsequent uses:** Serves results from a cached snapshot shown with a **Last scanned** timestamp
- **Rescan:** Click **Rescan** to bypass the cache and fetch a fresh set of fields directly from Jira

> Use Rescan whenever you add new custom fields to a project or modify screen schemes.
`,
        },
        {
          slug: "creating-a-ruleset",
          title: "Creating Your First Ruleset",
          content: `
Follow these steps to build your first audit ruleset from scratch.

## Step 1 - Select a Project

On the Admin Page, use the **Project** dropdown to narrow scope to one project at a time.

## Step 2 - Select Issue Types

Use the **Issue Types** dropdown to decide whether audits apply to Stories, Bugs, Epics, Tasks, Subtasks, or all issue types at once.

## Step 3 - Fetch Relevant Fields

Click **Fetch Fields** (or wait for the app to auto-load them). A progress bar shows the scan is running. Once complete, the **Last scanned** timestamp confirms the fields are ready.

  <img 
    src="/images/backlog-auditor-expert/Asset1.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Step 4 - Choose or Create a Ruleset

In the **Select Or Create Rule Set** panel:

- **Select Existing** - pick a previously saved ruleset from the dropdown to reuse or extend it
- **Or Create New** - type a name in the **Enter Ruleset Name** field to start fresh

## Step 5 - Add Rules

In the **+ Add Rule** panel, configure each rule:

| Field | What to Do |
|---|---|
| **Select Field** | Pick the Jira field to audit (e.g., Assignee, Description, Story Points) |
| **Condition** | Choose the condition based on the field type (e.g., Is Empty, Greater Than) |
| **Error Message** | Write a clear, actionable violation message for team members |

Click **Add Rule** to add it to the ruleset. Repeat for every rule you need.

## Step 6 - Save the Ruleset

Once all rules are configured, click **Save Ruleset** to store it. Saved rulesets are immediately available for use on the Project (Audit) Page.

<img 
    src="/images/backlog-auditor-expert/Asset2.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

  <img 
    src="/images/backlog-auditor-expert/Asset17.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

> **Tip:** Start small - begin with 3–5 high-value rules before expanding.
`,
        },
        {
          slug: "managing-rules",
          title: "Managing & Editing Rules",
          content: `
## Viewing Defined Rules

All rules in the current ruleset are listed in the **Defined Rules** panel. You can search by field name, condition, or violation message using the search box.

Rules are grouped by field for easy scanning. Each rule shows:

- **Field name** (e.g., Summary, Assignee)
- **Condition** applied (e.g., Must NOT Contain Text)
- **Violation message** shown to team members
- **Applies to** issue types
- **Created** by and date

## Editing a Rule

Click the **edit icon** (pencil) next to any rule. The rule loads back into the Add Rule panel where you can change the field, condition, or message. Save when done.

## Deleting a Rule

Click the **delete icon** (trash) next to any rule. A confirmation prompt appears to prevent accidental deletion. Confirm to remove the rule permanently from the ruleset.

## Unsaved Changes Protection

Whenever you edit, add, or delete a rule and then try to navigate away - switch projects/issue types, leave the Admin page, refresh, or close the tab - the app surfaces an **Unsaved Changes** dialog:
<img 
    src="/images/backlog-auditor-expert/Asset14.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

| Button | Result |
|---|---|
| **Cancel** | Closes the prompt; keeps you on the current screen so you can continue editing |
| **Discard** | Proceeds with your action without saving the pending edits |
| **Save Changes** | Saves the pending edits to the ruleset and then continues with your action |

## View All Rulesets

Click **View All Rulesets** at the top of the Admin Page to see a summary of all rulesets for the selected project. Each card shows:

- Ruleset name and associated issue types
- Total number of rules and unique fields covered
- **Rules by Field** - how many rules exist per field
- **Top Conditions** - the most-used conditions in that ruleset

Use this view to review, compare, or decide which ruleset to apply in your next audit.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. RUNNING AUDITS (PROJECT PAGE)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "running-audits",
      title: "Running Audits",
      articles: [
        {
          slug: "how-to-run-an-audit",
          title: "How to Run an Audit",
          content: `
The **Project Page** is where audits are executed and results are displayed. Any team member with project access can run an audit using a saved ruleset.

## Accessing the Project Page

Navigate to your Jira project → **Apps** → **Backlog Auditor & Export** (or via the project sidebar).

## Step 1 - Select a Ruleset

Use the **Select Rule Set to Audit** dropdown to choose from the rulesets saved for this project. Click **Refresh List** if a recently created ruleset is not visible.

## Step 2 - Run the Audit

Click **Run Audit**. The app automatically checks every issue in the backlog against each rule in the selected ruleset.

A progress bar shows how many issues have been audited (e.g., "Audited 200 of 472 issues - 42%"). Large backlogs may take a moment.

<img 
    src="/images/backlog-auditor-expert/Asset6.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Step 3 - Review the Results

Once complete, the page displays:

- **Summary Cards** - at-a-glance violation statistics
- **Charts** - visual breakdowns by assignee, field, issue type, and condition
- **Defects Trend Chart** - violation count over the last 20 audit runs
- **Defective Issues Table** - a row-by-row list of every failed rule with export capability

> Run audits every sprint or month to ensure continuous improvement and catch regressions early.
`,
        },
        {
          slug: "understanding-audit-report",
          title: "Understanding the Audit Report",
          content: `
Backlog Auditor & Export's reporting is designed to be both **executive-friendly and action-oriented**.

## Summary Cards

At-a-glance metrics shown at the top of every report:

| Card | What It Shows |
|---|---|
| **Total Audited** | How many issues were checked in this run |
| **Defects Found** | Total number of individual rule violations |
| **Defect Rate** | Defects Found ÷ Total Audited × 100 |
| **Top Violated Rule** | The condition that failed most often |
| **Top Assignee** | The user with the most defects |
| **Top Field** | The field with the most violations |

<img 
    src="/images/backlog-auditor-expert/Asset7.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Charts

### Violations Distribution (By Condition)
A pie chart showing how violations are spread across conditions (e.g., isEmtpy, requiresText, olderThan). Helps identify which rule types fail most often.

### Top 5 Assignees with Defects
A bar chart ranking team members by total defect count. Use this to detect who may need more guidance or support around backlog hygiene.

<div class="grid grid-cols-2 gap-4">
<img 
    src="/images/backlog-auditor-expert/Asset16.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

  <img 
    src="/images/backlog-auditor-expert/Asset15.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
  </div>

### Defects by Issue Type
A bar chart comparing violation counts across Stories, Tasks, Bugs, Epics, and Subtasks. Understand where problems cluster most.

### Top 5 Fields with Defects
A bar chart ranking Jira fields by total violations (e.g., Assignee, Reporter, Due date). Spot which fields are consistently incomplete or incorrect.

<div class="grid grid-cols-2 gap-4">
<img 
    src="/images/backlog-auditor-expert/Asset10.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

  <img 
    src="/images/backlog-auditor-expert/Asset11.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />
  </div>

## Defects Trend Chart

One of the most powerful features. Shows how total violations evolve over the **last 20 audit runs**:

- **Violations decreasing** → Backlog health is improving
- **Violations increasing** → Standards are not being followed; corrective action is required

Use this chart to demonstrate measurable progress to stakeholders during sprint reviews.

<img 
    src="/images/backlog-auditor-expert/Asset12.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

## Defects Table

The table provides detailed, row-level evidence of every violation:

| Column | Description |
|---|---|
| **Issue Key** | Clickable link directly to the Jira issue |
| **Field Name** | The field that triggered the violation |
| **Summary** | The issue summary for quick context |
| **Condition** | The rule condition that failed |
| **Message** | The violation message configured by the admin |

Use the **Search issues** box to filter rows, or use the **All Rules** dropdown to filter by a specific rule. Click **Export CSV** to download the full table for offline analysis or sharing.

<img 
    src="/images/backlog-auditor-expert/Asset13.png"
    alt="Configure Report"
    style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:0 auto;"
  />

> This table acts as the "to-do list" for teams. Every row highlights exactly what to fix to clean up the backlog.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. SUPPORTED RULE CONDITIONS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "rule-conditions",
      title: "Rule Conditions",
      articles: [
        {
          slug: "conditions-by-field-type",
          title: "Conditions by Field Type",
          content: `
Backlog Auditor & Export offers a wide variety of conditions tailored to field types, making rules precise and relevant.

## String Fields
*Applies to: Summary, Description, and custom text fields*

| Condition | What It Checks |
|---|---|
| **Is Empty** | The field has no value |
| **Is Not Empty** | The field has any value |
| **Contains Text** | The field value includes a specific word or phrase |
| **Must NOT Contain Text** | The field value must not include a specific word or phrase |
| **Equals** | The field value matches exactly |
| **Does Not Equal** | The field value does not match |

## Number Fields
*Applies to: Story Points, Estimates, and custom number fields*

| Condition | What It Checks |
|---|---|
| **Is Empty** | No numeric value has been set |
| **Is Not Empty** | A numeric value exists |
| **Equals** | Exact numeric match |
| **Does Not Equal** | Value is not a specific number |
| **Greater Than** | Value exceeds a threshold |
| **Less Than** | Value is below a threshold |
| **Greater Than or Equal To** | Value meets or exceeds a threshold |
| **Less Than or Equal To** | Value is at or below a threshold |

## Date / DateTime Fields
*Applies to: Due Date, Created, Updated, and custom date fields*

| Condition | What It Checks |
|---|---|
| **Is Empty** | No date has been set |
| **Is Not Empty** | A date value exists |
| **Older Than (days)** | The date is more than N days in the past |
| **Newer Than (days)** | The date is fewer than N days in the past |
| **Is Before** | The date falls before a specific date |
| **Is After** | The date falls after a specific date |

## User Fields
*Applies to: Assignee, Reporter, and custom user fields*

| Condition | What It Checks |
|---|---|
| **Is Empty** | No user is assigned |
| **Is Not Empty** | A user is assigned |
| **Is Assigned To** | The field matches a specific user |
| **Is Not Assigned To** | The field does not match a specific user |
| **Is Inactive** | The assigned user account is inactive in Jira |

## Priority, Status, Issue Type Fields

| Condition | What It Checks |
|---|---|
| **Equals** | Exact match to a specific value (e.g., Priority = High) |
| **Does Not Equal** | Value is not a specific option |

## Default (Fallback)

For any field type not explicitly categorized above:

| Condition | What It Checks |
|---|---|
| **Is Empty** | The field has no value |
| **Is Not Empty** | The field has any value |
`,
        },
        {
          slug: "example-rule-scenarios",
          title: "Example Rule Scenarios",
          content: `
These real-world examples show how to configure common audit rules. Use them as a starting point and adapt to your team's standards.

## Ensure Descriptions Exist

| Setting | Value |
|---|---|
| **Field** | Description |
| **Condition** | Is Empty |
| **Violation Message** | Please add a description so the team has context. |

## Catch Old Bugs

| Setting | Value |
|---|---|
| **Field** | Created Date |
| **Condition** | Older Than (days) → 90 |
| **Violation Message** | This bug is over 90 days old. Reassess its relevance. |

## Enforce Assignments

| Setting | Value |
|---|---|
| **Field** | Assignee |
| **Condition** | Is Empty |
| **Violation Message** | This issue is unassigned. Assign it to a responsible person. |

## Validate Story Point Estimates

| Setting | Value |
|---|---|
| **Field** | Story Points |
| **Condition** | Greater Than → 13 |
| **Violation Message** | Story points exceed recommended range (max 13). Please break this issue down. |

## Block Placeholder Summaries

| Setting | Value |
|---|---|
| **Field** | Summary |
| **Condition** | Contains Text → "TODO" |
| **Violation Message** | Summary contains a placeholder. Replace it with a meaningful title. |

## Require Due Dates on Bugs

| Setting | Value |
|---|---|
| **Field** | Due Date |
| **Condition** | Is Empty |
| **Applies to** | Bug (issue type only) |
| **Violation Message** | All bugs must have a due date set. |

---

> These conditions make rules extremely flexible. For instance, you can enforce that "Stories must always have story points" or "Bugs older than 60 days must be reviewed."
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 6. SAFETY NETS & BEST PRACTICES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "safety-and-best-practices",
      title: "Safety Nets & Best Practices",
      articles: [
        {
          slug: "friendly-fallbacks",
          title: "Friendly Fallbacks & Safety Nets",
          content: `
Backlog Auditor & Export is designed to be forgiving and user-friendly. Across the app you'll find protective fallbacks that prevent accidental data loss and guide you to the next best step.

## Unsaved Changes Protection

Whenever you edit, add, or delete a rule and then try to:

- Navigate away from the Admin Page
- Switch the selected project or issue type
- Refresh or close the browser tab

...the app surfaces an **Unsaved Changes** dialog before any action is taken.

### When It Appears

- Editing a rule's field, condition, or message
- Adding or deleting a rule in a ruleset
- Switching the selected project or issue type while there are edits
- Leaving the Admin page, refreshing, or closing the tab with pending edits

### What the Buttons Do

| Button | Result |
|---|---|
| **Cancel** | Closes the prompt and keeps you on the current screen so you can continue editing. No changes are saved. |
| **Discard** | Proceeds with your action without saving the pending edits in the current ruleset. |
| **Save Changes** | Saves the pending edits to the ruleset and then continues with your action. |

## Delete Confirmations

Removing a rule or an entire ruleset always asks for **explicit confirmation** to prevent accidental deletions.

## Helpful Empty States

If a selection (e.g., fields for a chosen issue type) returns nothing, the UI **explains why** and provides guidance on how to proceed - no silent failures.

## Permission-Aware Messaging

If you lack access to a project, field, or workflow element, you'll see a **clear message** instead of a generic error.

## Graceful Loading & Retries

Data fetches (field discovery, backlog scans, audit runs) show **progress indicators**. If something takes longer than expected, the UI provides guidance and retry options rather than leaving you with a blank screen.
`,
        },
        {
          slug: "best-practices",
          title: "Best Practices",
          content: `
## Start Small

Begin with a handful of **high-value rules** before expanding your ruleset. A focused ruleset of 3–5 rules is more actionable than one with 30 rules that overwhelm the team.

Good starting rules for most teams:
- Assignee Is Empty
- Description Is Empty
- Story Points Is Empty (for Stories)
- Due Date Is Empty (for Bugs)

## Write Actionable Violation Messages

Instead of a generic message like "Invalid", guide team members with specific instructions:

| Instead of... | Write... |
|---|---|
| "Invalid" | "Story points must be ≤ 13. Break this issue down." |
| "Missing field" | "Please add a description so the team has context." |
| "Check assignee" | "This issue is unassigned. Assign it before the sprint starts." |

## Audit Regularly

Run audits **every sprint or every month** to ensure continuous improvement. Ad-hoc one-time audits are less effective than a regular cadence.

## Monitor Trends

Use the **Defect Trend Chart** to demonstrate backlog health improvements to stakeholders. A downward trend is a clear, data-driven story of progress.

## Collaborate With Teams

Share audit reports during **sprint reviews or backlog grooming sessions**. When violations are visible to the whole team, accountability improves naturally.

## Scope Rules to Issue Types

Not all rules apply to all issue types. Use the **Applies to** filter when adding rules to avoid false positives - for example, Story Points rules typically only apply to Stories, not Epics or Bugs.

## Use Rescan When Fields Change

If your project gains new custom fields or screen scheme changes are made, click **Rescan** on the Admin Page to refresh the cached field list before building new rules.
`,
        },
        {
          slug: "troubleshooting",
          title: "Troubleshooting",
          content: `
## Audit Does Not Start

**Symptoms:** Clicking Run Audit shows an error or nothing happens.

**Steps to resolve:**
1. Confirm you have project access (at least Browse Projects permission)
2. Confirm a ruleset exists for this project - go to the Admin Page and check
3. Try clicking **Refresh List** on the Project Page to reload available rulesets
4. If the problem persists, contact your Jira administrator to check app permissions

## Ruleset Missing from Dropdown

**Symptoms:** A ruleset you created is not showing in the Project Page dropdown.

**Steps to resolve:**
1. Go to the Admin Page and confirm the ruleset was saved (not just built)
2. Confirm it was saved under the **correct project** - rulesets are project-scoped
3. Click **Refresh List** on the Project Page
4. Try logging out and back in to clear any stale session state

## Empty Charts After Running Audit

**Symptoms:** The audit completes but charts show no data.

**Steps to resolve:**
1. Confirm that the issues in this project actually fail the conditions in your ruleset
2. Check that the field being audited is populated on at least some issues
3. Verify the issue types in the ruleset match the issue types in the backlog

## Unexpected or Incorrect Results

**Symptoms:** Issues are flagged that shouldn't be, or violations you expect are not showing.

**Steps to resolve:**
1. Open a flagged issue in Jira and inspect the field value directly
2. Validate that the field is visible on the issue's screen scheme
3. For custom fields, confirm they are **indexed** in Jira (Settings → Issues → Custom fields)
4. Use **Rescan** on the Admin Page to refresh field metadata and try again

## Fields Not Showing in Admin Page

**Symptoms:** Expected fields are missing from the field dropdown.

**Steps to resolve:**
1. Confirm the field is included in the **screen scheme** for the selected project and issue type
2. Click **Rescan** to bypass the cache and perform a fresh field discovery
3. Check that you selected the correct issue type - fields are scoped per issue type

---

**Need more help?**

- Email: developers@Clovity.com
- Website: clovity.com
`,
        },
      ],
    },
  ],
};
