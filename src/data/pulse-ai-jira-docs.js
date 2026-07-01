export const pulseAiJiraDocs = {
  appSlug: "pulse-ai-jira",
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-pulse-ai",
          title: "What is Pulse AI for Jira?",
          sideVideo: {
            src: "https://www.youtube.com/embed/3FalU4tBR88",
            title: "Pulse AI for Jira - Product Overview",
          },
          content: `
Pulse AI for Jira is an AI-powered Jira Cloud app that continuously scans your Jira instance to surface configuration risks, governance gaps, and delivery anomalies through a composite health score, section-level dashboards, and a conversational AI assistant - all without leaving Jira.

Pulse AI is available on the Atlassian Marketplace.

<!--VIDEO_BREAK-->

## Core Capabilities

- **Pulse Score (0–100):** A composite health score computed as an equal-weighted average of five pillar scores, updated on every scan.
- **Automated findings engine:** Hard-coded analytical methods per section produce severity-ranked findings (High → Medium → Low) with business-impact context.
- **Pulse AI Assistant:** A conversational AI chat panel on every section view, powered by MongoDB-backed context retrieval and LangGraph agentic reasoning.
- **22-section coverage:** Sprint & Delivery, Projects, Issue Integrity, Data Accuracy, Users, Permissions, Groups, Workflows, Workflow Schemes, Statuses, Resolutions, Screens, Screen Schemes, Notification Schemes, Work Item Security, Priority Schemes, Fields, Work Types, Work Type Schemes, Priorities, and Filters.
- **Scan & Ingest Pipeline:** Fetches all Jira data via REST API, scores every section using pure-math methods, stores results in MongoDB, and generates LLM summaries stored alongside scan data.

## Who Should Use This Guide

| **Role** | Primary Sections |
|---|---|
| **Jira Administrators** | Full guide. Primary audience. |
| **Jira Project Leads** | Dashboard, Projects, Sprints & Delivery. |
| **Engineering Managers** | Section 7 (Sprints & Delivery), Section 4.1 (Projects). |
| **IT / Security Teams** | Sections 4–6 for governance, workflow, and configuration cleanup. |
| **Executive Stakeholders** | Dashboard Pulse Score and section summaries. |
| **Business Analysts / PMO** | Project Pulse Scores, sprint analytics, backlog and risk indicators. |
| **Consultants** | Full guide. Use Reference sections for client onboarding and health assessments. |

## Platform

Jira Cloud only. Not compatible with Jira Server or Data Center.
`,
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
Only a Jira site administrator can install Pulse AI.

## Installation Steps

1. Go to **[marketplace.atlassian.com](https://marketplace.atlassian.com)** and search for **"Pulse AI for Jira"**
2. On the app listing, confirm **Hosting → Cloud** is supported
3. Click **Try it free** or **Buy now**
4. Select your **Atlassian Cloud site** when prompted
5. Choose **Jira** as the product
6. Review the permissions the app requires and click **Accept** to proceed
7. The app installs automatically - no restart required. Navigate to **Apps → Pulse AI** in the Jira top nav to launch it.

> **Note:** After installation the app appears as Pulse AI under the Apps top-nav item in Jira. If it does not appear within 5 minutes, refresh the page or clear your browser cache.

## Verify Installation

After installation:

1. Click **Apps** in the Jira top navigation bar.
2. Look for **Pulse AI** in the dropdown menu.
3. Click it to open the app - you should see the Welcome / OAuth screen on first launch.

## Jira Permissions Required

| **Permission** | Why It's Needed |
|---|---|
| **Read Jira issues and projects** | Load project context and findings for scoring |
| **Read Jira configuration** | Detect workflows, schemes, custom fields, and issue types |
| **Read users and groups** | Audit access hygiene and permission risk |
| **Administer Jira (admin only)** | Required to install the app |

## Uninstalling

To uninstall: Go to **admin.atlassian.com** → **Apps** → **Manage Apps** → click **Pulse AI** → **Uninstall**.
`,
        },
        {
          slug: "first-launch-oauth",
          title: "First Launch & OAuth Authorization",
          content: `
On first launch you will see the Welcome / OAuth screen. Pulse AI uses **OAuth 2.0 (3-legged)** via Atlassian to authorise access to your site's data.

## OAuth Steps

1. Click **Connect with Atlassian** on the Welcome screen.
2. You will be redirected to an Atlassian authorisation page listing the scopes Pulse AI requires.
3. Review the scopes and click **Accept**.
4. You are redirected back to Pulse AI. Run your first scan using the **Run Scan** button in the top bar.
5. Wait for the scan to complete (progress shown in the top bar).

> **Warning:** OAuth must be completed before any data is visible. If you see an empty Dashboard after OAuth, click **Run Scan** (top bar) to trigger the first full sync manually.

## What OAuth Grants

Pulse AI requests read-only access to your Jira instance data - projects, issues, users, groups, workflows, schemes, and configurations. No data is written to Jira during scans. All findings are stored in the Pulse AI backend (MongoDB).
`,
        },
        {
          slug: "understanding-layout",
          title: "Understanding the Layout",
          content: `
Pulse AI has a consistent three-zone layout across all section views.

## Top Bar

Spans the full width. Contains:
- **Pulse AI logo** and site name (left)
- **Scan status indicator** with the timestamp of the last completed scan
- **Run Scan button** (top-right) to trigger a manual full sync

## Left Sidebar

Primary navigation. Sections are grouped into:

| **Group** | Sections |
|---|---|
| **Overview** | Dashboard |
| **Sprint & Delivery** | Sprints & Delivery |
| **Project & Data Integrity** | Projects, Issue Integrity, Data Accuracy |
| **Governance** | Users, Permissions, Groups |
| **Workflows & Schemes** | Workflows, States & Outcomes, Transition Screens, All Schemes |
| **Configurations** | Fields, Work Types, Global Config |
| **System** | Settings, Help & Support |

Sub-sections expand in-place. The sidebar collapses to an icon-only rail on desktop.

## Main Content Area

Renders the selected view - dashboard, table, or detail view. Most section views follow a 5-row layout:

**Metric cards → AI Insights + data card → Grade/severity distribution → Inventory → Clean signals**

## Pulse AI Assistant FAB

A floating action button (bottom-right corner) on most section views opens the Pulse AI Assistant chat panel scoped to that section. Not shown on Settings or Help views.

> **Tip:** Use **Settings → Scan Schedule** to check your last scan timestamp and trigger a manual scan at any time.
`,
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
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `Find the right starting point based on your role. Each path takes you to the pages most relevant to what you need to do.

## Jira Administrator

You install, configure, and maintain Pulse AI for your organisation. You are the primary audience for this guide.

**Start with:**
1. [Installation & Setup](/apps/pulse-ai-jira/installation-setup) - install the app and complete OAuth
2. [First Launch & OAuth Authorization](/apps/pulse-ai-jira/first-launch-oauth) - connect to your Atlassian site and run the first scan
3. [Understanding the Layout](/apps/pulse-ai-jira/understanding-layout) - learn the navigation, top bar, and FAB

**Then explore:**
- [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - understand the overall Pulse Score and pillar cards
- [Governance → Users](/apps/pulse-ai-jira/users) - audit dormant and over-permissioned accounts
- [Workflows](/apps/pulse-ai-jira/workflows) - find orphaned and dead-end workflows
- [Custom Fields](/apps/pulse-ai-jira/custom-fields) - identify unused fields adding API overhead

---

## Jira Project Leads

You track project health, backlog quality, and delivery across one or more projects.

**Start with:**
1. [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - see the overall Pulse Score and top findings
2. [Projects](/apps/pulse-ai-jira/projects) - review per-project Pulse Scores, stale backlogs, and lead coverage
3. [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-delivery-overview) - monitor active sprint health and carryover trends

**Then explore:**
- [Issue Integrity](/apps/pulse-ai-jira/issue-integrity) - find unassigned issues, resolution mismatches, and orphaned subtasks
- [Sprint Risk Thresholds](/apps/pulse-ai-jira/sprint-risk-thresholds) - understand On Track / Tight / At Risk / Overcommitted bands
- [Pulse AI Assistant](/apps/pulse-ai-jira/pulse-ai-assistant-dashboard) - ask questions about your scan data in plain language

---

## Engineering Managers & Scrum Masters

You need sprint delivery intelligence, blockers, and carryover data across all boards.

**Start with:**
1. [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-delivery-overview) - active sprints, at-risk flags, blockers, carryover rate
2. [Sprint Risk Thresholds](/apps/pulse-ai-jira/sprint-risk-thresholds) - risk bands and recommended actions
3. [Projects](/apps/pulse-ai-jira/projects) - per-project activity, stale backlog, and lead flags

**Then explore:**
- [Issue Integrity](/apps/pulse-ai-jira/issue-integrity) - unestimated sprint issues and scope creep indicators
- [AI Prompt Playbook](/apps/pulse-ai-jira/ai-prompt-playbook) - sprint intelligence prompts for the Pulse AI Assistant

---

## IT / Security Teams

You need access hygiene, permission risk, and configuration governance reports.

**Start with:**
1. [Users](/apps/pulse-ai-jira/users) - dormant accounts, inactive admins, overpermissioned users
2. [Permissions](/apps/pulse-ai-jira/permissions) - orphaned and misconfigured permission schemes
3. [Groups](/apps/pulse-ai-jira/groups) - empty and unreferenced groups

**Then explore:**
- [All Schemes → Work Item Security](/apps/pulse-ai-jira/all-schemes) - security schemes with no levels defined
- [Workflows](/apps/pulse-ai-jira/workflows) - dead-end statuses and orphaned workflows
- [How to: Run a Governance Audit](/apps/pulse-ai-jira/how-to-governance-audit) - full walkthrough

---

## Executive Stakeholders

You need the high-level Jira health summary and top risks without drilling into configuration details.

**Start with:**
1. [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - Pulse Score, five pillar cards, and top findings
2. [Pulse Score & Pillar Cards](/apps/pulse-ai-jira/pulse-score) - understand what each pillar measures and its 20% weight
3. [Top Findings Table](/apps/pulse-ai-jira/top-findings-table) - the highest-severity issues detected

---

## Business Analysts & PMO

You need project data quality, sprint analytics, and backlog risk indicators.

**Start with:**
1. [Projects](/apps/pulse-ai-jira/projects) - per-project Pulse Scores and stale backlog flags
2. [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-delivery-overview) - carryover rates, blockers, and board velocity
3. [Data Accuracy](/apps/pulse-ai-jira/data-accuracy) - mandatory field completion and resolution–status alignment

---

## Consultants

You are onboarding or assessing a client Jira instance. Use the full guide plus reference sections.

**Start with:**
1. [What is Pulse AI for Jira?](/apps/pulse-ai-jira/what-is-pulse-ai) - overview to share with client stakeholders
2. [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) - present the overall Pulse Score to the client
3. [How to: Run a Governance Audit](/apps/pulse-ai-jira/how-to-governance-audit) - structured audit walkthrough

**Reference sections:**
- [Pulse Score Reference](/apps/pulse-ai-jira/pulse-score-reference) - grade bands, pillar deductions, stale thresholds
- [Glossary](/apps/pulse-ai-jira/glossary) - terminology for client communication
- [Permissions Reference](/apps/pulse-ai-jira/permissions-reference) - required permissions per action

---

## Any User - First Time

Never used Pulse AI before?

1. Read [What is Pulse AI for Jira?](/apps/pulse-ai-jira/what-is-pulse-ai) - 2-minute overview
2. Follow [First Launch & OAuth Authorization](/apps/pulse-ai-jira/first-launch-oauth) - connect and run your first scan
3. Use the [Quick Reference Card](/apps/pulse-ai-jira/quick-reference) - bookmark as a cheat sheet
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `A one-page cheat sheet covering every section of Pulse AI for Jira. Bookmark this page.

## Five Pillars at a Glance

| **Pillar** | What It Covers | Weight | Full Docs |
|---|---|---|---|
| **Sprint & Delivery** | Sprint health, carryover, blockers, board velocity | 20% | [Sprints & Delivery →](/apps/pulse-ai-jira/sprints-delivery-overview) |
| **Project & Data Integrity** | Project health, issue quality, field completeness | 20% | [Projects →](/apps/pulse-ai-jira/projects) |
| **Governance** | Users, permissions, groups, access hygiene | 20% | [Users →](/apps/pulse-ai-jira/users) |
| **Workflows & Schemes** | Workflows, statuses, resolutions, screens, security | 20% | [Workflows →](/apps/pulse-ai-jira/workflows) |
| **Configurations** | Custom fields, work types, priorities, filters | 20% | [Custom Fields →](/apps/pulse-ai-jira/custom-fields) |

---

## All 22 Sections at a Glance

| **Section** | What It Monitors | Key Findings | Docs |
|---|---|---|---|
| **Sprints & Delivery** | Sprint utilisation, carryover, blockers across all boards | Overcommitted, At Risk, stale backlog | [→](/apps/pulse-ai-jira/sprints-delivery-overview) |
| **Projects** | Per-project health, lead coverage, backlog staleness | No Lead, Inactive, Stale Backlog | [→](/apps/pulse-ai-jira/projects) |
| **Issue Integrity** | Resolution mismatches, orphaned subtasks, unassigned issues | 7 integrity categories | [→](/apps/pulse-ai-jira/issue-integrity) |
| **Data Accuracy** | Mandatory field completion, status–resolution alignment | Missing fields, issue type gaps | [→](/apps/pulse-ai-jira/data-accuracy) |
| **Users** | Dormant accounts, inactive admins, overpermissioned users | Dormant, Inactive Admin, No Group | [→](/apps/pulse-ai-jira/users) |
| **Permissions** | Permission scheme audit - orphaned, excessive grants | Orphaned Schemes, over-broad grants | [→](/apps/pulse-ai-jira/permissions) |
| **Groups** | Empty groups, unreferenced groups, oversized groups | Empty Groups, Unreferenced | [→](/apps/pulse-ai-jira/groups) |
| **Workflows** | Orphaned, dead-end, duplicate, stale workflows | Dead-End Status, Orphaned | [→](/apps/pulse-ai-jira/workflows) |
| **Workflow Schemes** | Orphaned, draft, missing default schemes | Orphaned, Missing Defaults | [→](/apps/pulse-ai-jira/workflow-schemes) |
| **Statuses** | Orphaned statuses, no category, name conflicts | Orphaned, No Category | [→](/apps/pulse-ai-jira/states-outcomes) |
| **Resolutions** | Unused, overloaded, broken workflow references | No Default, Overloaded | [→](/apps/pulse-ai-jira/states-outcomes) |
| **Screens** | Duplicate, bloated (50+ fields), orphaned screens | Duplicate, Bloated, Orphaned | [→](/apps/pulse-ai-jira/transition-screens) |
| **Screen Schemes** | Orphaned screen schemes | Orphaned Screen Scheme | [→](/apps/pulse-ai-jira/transition-screens) |
| **Notification Schemes** | Orphaned, duplicate notification schemes | Orphaned, Duplicate | [→](/apps/pulse-ai-jira/all-schemes) |
| **Work Item Security** | Zero-level schemes, missing default, orphaned | No Security Levels | [→](/apps/pulse-ai-jira/all-schemes) |
| **Priority Schemes** | Orphaned, duplicate priority schemes | Orphaned, Duplicate | [→](/apps/pulse-ai-jira/all-schemes) |
| **Custom Fields** | Unused fields, duplicates, global context bloat | Unused (High), Risky Deletion | [→](/apps/pulse-ai-jira/custom-fields) |
| **Work Types** | Unused issue types, duplicates | Unused, Duplicate | [→](/apps/pulse-ai-jira/work-types-schemes) |
| **Work Type Schemes** | Orphaned schemes, missing default issue type | Orphaned, Missing Default | [→](/apps/pulse-ai-jira/work-types-schemes) |
| **Priorities** | Unused priorities, naming drift | Unused, Overloaded | [→](/apps/pulse-ai-jira/global-config) |
| **Filters** | Invalid JQL, dead owners, publicly shared, unused | Dead Owner, Invalid JQL | [→](/apps/pulse-ai-jira/global-config) |

---

## Grade & Score Reference

| **Grade** | Score | Label | Colour |
|---|---|---|---|
| **A** | 90–100 | Excellent | Green |
| **B** | 80–89 | Good | Blue |
| **C** | 70–79 | Needs Attention | Yellow |
| **D** | 55–69 | Poor | Orange |
| **F** | 0–54 | Critical | Red |

Full reference: [Pulse Score Reference →](/apps/pulse-ai-jira/pulse-score-reference)

---

## Severity Levels

| **Severity** | Meaning |
|---|---|
| **High** | Affects governance, delivery, security, or causes cleanup risk. Act promptly. |
| **Medium** | Should be reviewed and cleaned up when possible. |
| **Low** | Minor hygiene or improvement opportunity. |
| **None / Clean Signal** | No active risk detected for this check. |

---

## Stale Thresholds Quick Reference

| **Entity** | Threshold |
|---|---|
| **Project activity** | Last issue update ≥ 90 days |
| **User - Dormant** | Last activity > 90 days |
| **User - Inactive Admin** | No activity ≥ 60 days |
| **Workflow** | Zero projects + last modified ≥ 90 days |
| **Stale Backlog** | Stale issues ÷ total issues > 30% |
| **Screen (Bloated)** | > 50 available fields |
| **Custom Field (unused)** | Zero issues with a value |
| **Filter (dead owner)** | Owner account deactivated in Atlassian |

Full reference: [Stale / Threshold Reference →](/apps/pulse-ai-jira/pulse-score-reference)

---

## Settings Tabs Quick Reference

| **Tab** | What It Does | Docs |
|---|---|---|
| **General Settings** | Connected instance URL and logged-in account | [Settings →](/apps/pulse-ai-jira/settings-overview) |
| **Chat History** | Last 10 Pulse AI Assistant queries for current user | [Settings →](/apps/pulse-ai-jira/settings-overview) |
| **Scan Schedule** | Scan frequency, last timestamp, Run Now button | [Settings →](/apps/pulse-ai-jira/settings-overview) |
| **Scan History** | Last 10 scan runs - status, duration, trigger type | [Settings →](/apps/pulse-ai-jira/settings-overview) |

---

## All Docs - Page Index

### Getting Started
- [What is Pulse AI for Jira?](/apps/pulse-ai-jira/what-is-pulse-ai) · [Installation & Setup](/apps/pulse-ai-jira/installation-setup) · [First Launch & OAuth](/apps/pulse-ai-jira/first-launch-oauth) · [Understanding the Layout](/apps/pulse-ai-jira/understanding-layout)

### Dashboard
- [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview) · [Pulse Score & Pillar Cards](/apps/pulse-ai-jira/pulse-score) · [Top Findings Table](/apps/pulse-ai-jira/top-findings-table) · [Pulse AI Assistant](/apps/pulse-ai-jira/pulse-ai-assistant-dashboard)

### Project & Data Integrity
- [Projects](/apps/pulse-ai-jira/projects) · [Issue Integrity](/apps/pulse-ai-jira/issue-integrity) · [Data Accuracy](/apps/pulse-ai-jira/data-accuracy)

### Governance
- [Users](/apps/pulse-ai-jira/users) · [Permissions](/apps/pulse-ai-jira/permissions) · [Groups](/apps/pulse-ai-jira/groups)

### Workflows & Schemes
- [Workflows](/apps/pulse-ai-jira/workflows) · [Workflow Schemes](/apps/pulse-ai-jira/workflow-schemes) · [States & Outcomes](/apps/pulse-ai-jira/states-outcomes) · [Transition Screens](/apps/pulse-ai-jira/transition-screens) · [All Schemes](/apps/pulse-ai-jira/all-schemes)

### Sprints & Delivery
- [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-delivery-overview) · [Sprint Risk Thresholds](/apps/pulse-ai-jira/sprint-risk-thresholds)

### Configurations
- [Custom Fields](/apps/pulse-ai-jira/custom-fields) · [Work Types & Schemes](/apps/pulse-ai-jira/work-types-schemes) · [Global Config](/apps/pulse-ai-jira/global-config)

### Settings
- [Settings Overview](/apps/pulse-ai-jira/settings-overview)

### Reference
- [Pulse Score Reference](/apps/pulse-ai-jira/pulse-score-reference) · [Glossary](/apps/pulse-ai-jira/glossary) · [Permissions Reference](/apps/pulse-ai-jira/permissions-reference)

### Help & Support
- [Help & Support](/apps/pulse-ai-jira/help-support-overview) · [Troubleshooting](/apps/pulse-ai-jira/troubleshooting)
`,
        },
        {
          slug: "how-to-improve-pulse-score",
          title: "How to: Improve Your Pulse Score",
          content: `A structured walkthrough for raising your Pulse Score. Work through each pillar in order - start with the lowest-scoring pillar for the fastest impact.

## Before You Start

Make sure:
- The app is installed and OAuth is complete ([Installation & Setup](/apps/pulse-ai-jira/installation-setup))
- At least one scan has completed ([First Launch & OAuth](/apps/pulse-ai-jira/first-launch-oauth))
- You have **Jira Administrator** access to action findings

---

## Step 1: Read the Dashboard

1. Open [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview)
2. Note your overall Pulse Score and grade (A–F)
3. Identify the **lowest-scoring pillar card** - that pillar drives the most improvement
4. Review the **Top Findings Table** for the highest-severity issues across all pillars

> The five pillars each contribute 20%. Fixing the lowest pillar moves the overall score the most.

---

## Step 2: Fix Governance Issues

Navigate to **Governance** - even one overpermissioned account or empty permission scheme is a High finding.

| **Finding** | Where to Fix | Docs |
|---|---|---|
| **Dormant / Inactive Admin users** | Atlassian Admin Console (admin.atlassian.com) | [Users →](/apps/pulse-ai-jira/users) |
| **Empty groups** | Jira Settings → User Management → Groups | [Groups →](/apps/pulse-ai-jira/groups) |
| **Orphaned permission schemes** | Jira Settings → Issues → Permission Schemes | [Permissions →](/apps/pulse-ai-jira/permissions) |

---

## Step 3: Fix Workflow & Scheme Issues

Navigate to **Workflows & Schemes** - orphaned workflows and dead-end statuses are common High findings.

| **Finding** | Action |
|---|---|
| **Orphaned workflow** | Assign to a project or delete via Jira Settings → Workflows |
| **Dead-End Status** | Add an outgoing transition in the workflow editor |
| **Orphaned Screen** | Assign to a screen scheme or delete |
| **No Security Levels** | Add at least one level in the Work Item Security scheme |

See [Workflows →](/apps/pulse-ai-jira/workflows) and [All Schemes →](/apps/pulse-ai-jira/all-schemes).

---

## Step 4: Fix Configuration Issues

Navigate to **Configurations** - unused custom fields are common High findings.

| **Finding** | Action | Docs |
|---|---|---|
| **Unused custom field** | Remove from all screens, then delete in Jira Settings → Custom Fields | [Custom Fields →](/apps/pulse-ai-jira/custom-fields) |
| **Risky Deletion field** | Remove from screens first before deleting | [Custom Fields →](/apps/pulse-ai-jira/custom-fields) |
| **Orphaned work type scheme** | Assign to a project or delete | [Work Types & Schemes →](/apps/pulse-ai-jira/work-types-schemes) |
| **Filter with dead owner** | Transfer ownership before deleting the user account | [Global Config →](/apps/pulse-ai-jira/global-config) |

---

## Step 5: Fix Project & Data Integrity Issues

Navigate to **Project & Data Integrity**.

| **Finding** | Action | Docs |
|---|---|---|
| **Project with no lead** | Assign a lead in the project settings | [Projects →](/apps/pulse-ai-jira/projects) |
| **Done issues with no resolution** | Bulk update resolutions via Jira Admin | [Issue Integrity →](/apps/pulse-ai-jira/issue-integrity) |
| **Missing mandatory fields** | Update field configuration schemes | [Data Accuracy →](/apps/pulse-ai-jira/data-accuracy) |

---

## Step 6: Fix Sprint & Delivery Issues

Navigate to **Sprints & Delivery**.

| **Finding** | Action | Docs |
|---|---|---|
| **Overcommitted sprint (≥150%)** | Defer lower-priority items to the next sprint | [Sprint Risk Thresholds →](/apps/pulse-ai-jira/sprint-risk-thresholds) |
| **High carryover rate (>20%)** | Reduce sprint commitment; review estimation practices | [Sprints & Delivery →](/apps/pulse-ai-jira/sprints-delivery-overview) |
| **Active blockers** | Resolve or de-link blocker issues | [Sprints & Delivery →](/apps/pulse-ai-jira/sprints-delivery-overview) |

---

## Step 7: Re-run the Scan

After fixing issues:
1. Go to **Settings → Scan Schedule**
2. Click **Run Now**
3. Wait for the scan to complete
4. Return to the [Dashboard](/apps/pulse-ai-jira/dashboard-overview) - your Pulse Score will update

> Score updates only after a new scan. Manual fixes in Jira are not reflected until the next sync.
`,
        },
        {
          slug: "how-to-governance-audit",
          title: "How to: Run a Governance Audit",
          content: `A complete walkthrough for auditing people, access, and configuration health using Pulse AI. Suited for Jira admins and consultants.

## What a Governance Audit Covers

A full governance audit in Pulse AI spans three areas:

| **Area** | Sections | Primary Concern |
|---|---|---|
| **People & Access** | Users, Permissions, Groups | Who has access and whether it's appropriate |
| **Workflow & Config** | Workflows, Schemes, Configurations | Configuration debt and cleanup risk |
| **Data Integrity** | Projects, Issue Integrity, Data Accuracy | Whether Jira data reflects real work |

---

## Step 1: Start with the Dashboard

1. Open [Dashboard Overview](/apps/pulse-ai-jira/dashboard-overview)
2. Note the **Governance pillar score** - this covers Users, Permissions, and Groups
3. Note the **Workflows & Schemes pillar score** - covers configuration health
4. Open the **Top Findings Table** and filter by severity = **High**

---

## Step 2: Audit Users

Navigate to [Governance → Users](/apps/pulse-ai-jira/users).

Check each risk category:

| **Risk** | Condition | Recommended Action |
|---|---|---|
| **Dormant** | Active account, last activity > 90 days | Deactivate in Atlassian Admin Console |
| **Inactive Admin** | Admin, no activity ≥ 60 days | Remove from admin group |
| **Overpermissioned** | Admin on 15+ projects | Review and reduce project admin grants |
| **No Group** | No group membership | Assign to appropriate group or investigate direct grants |

> User deactivation is done at [admin.atlassian.com](https://admin.atlassian.com) - not inside Jira.

---

## Step 3: Audit Permissions

Navigate to [Governance → Permissions](/apps/pulse-ai-jira/permissions).

Check for:
- **Orphaned schemes** - zero projects assigned. Safe to delete after confirming they are not needed.
- **SD Customer Grants / App Role Grants** - review whether these are intentional.

> The Default Permission Scheme and Default Software Scheme are Guard objects - Pulse AI will not flag these.

---

## Step 4: Audit Groups

Navigate to [Governance → Groups](/apps/pulse-ai-jira/groups).

Check for:
- **Empty Groups** - zero members. Delete if no longer needed.
- **Unreferenced Groups** - not used in any scheme. Review before deleting.
- **Oversized Groups** - unusually large membership. Confirm whether all members are still active.

---

## Step 5: Audit Workflows & Schemes

Navigate to [Workflows & Schemes](/apps/pulse-ai-jira/workflows).

| **Section** | What to Look For | Docs |
|---|---|---|
| **Workflows** | Orphaned, dead-end, duplicate workflows | [Workflows →](/apps/pulse-ai-jira/workflows) |
| **Workflow Schemes** | Orphaned, draft, missing default | [Workflow Schemes →](/apps/pulse-ai-jira/workflow-schemes) |
| **Statuses** | Orphaned statuses, missing category | [States & Outcomes →](/apps/pulse-ai-jira/states-outcomes) |
| **Resolutions** | No default set, overloaded resolutions | [States & Outcomes →](/apps/pulse-ai-jira/states-outcomes) |
| **Screens** | Bloated (50+ fields), duplicate, orphaned | [Transition Screens →](/apps/pulse-ai-jira/transition-screens) |
| **Work Item Security** | No security levels defined | [All Schemes →](/apps/pulse-ai-jira/all-schemes) |

---

## Step 6: Audit Configurations

Navigate to [Configurations](/apps/pulse-ai-jira/custom-fields).

| **Section** | What to Look For | Docs |
|---|---|---|
| **Custom Fields** | Unused (High), Risky Deletion (High), Global Bloat (Low) | [Custom Fields →](/apps/pulse-ai-jira/custom-fields) |
| **Work Types** | Unused issue types, duplicates | [Work Types & Schemes →](/apps/pulse-ai-jira/work-types-schemes) |
| **Filters** | Dead owner, invalid JQL, publicly shared | [Global Config →](/apps/pulse-ai-jira/global-config) |

---

## Step 7: Document and Re-scan

1. Export or note all High findings
2. Assign remediation tasks to the relevant Jira admin(s)
3. After fixes are applied, go to **Settings → Scan Schedule → Run Now**
4. Review the updated [Dashboard](/apps/pulse-ai-jira/dashboard-overview) and compare Pulse Scores
`,
        },
        {
          slug: "how-to-monitor-sprint-health",
          title: "How to: Monitor Sprint Health",
          content: `A step-by-step guide for engineering managers and Scrum masters to use Pulse AI for daily sprint monitoring.

## What Pulse AI Tracks for Sprints

Navigate to [Sprints & Delivery Overview](/apps/pulse-ai-jira/sprints-delivery-overview) for a full view of all active Scrum boards.

| **Metric** | What It Means |
|---|---|
| **Active Sprints** | All currently running sprints across the org |
| **At Risk** | Sprints at 115–149% utilisation - scope reduction recommended |
| **Avg Carryover Rate** | % of incomplete issues carried from the previous sprint. > 20% = chronic overcommitment |
| **Active Blockers** | Unresolved blocker-priority issues across all sprints |

---

## Step 1: Check Utilisation on the Sprint View

1. Navigate to **Sprint & Delivery → Sprints & Delivery**
2. Look at the **At Risk** summary card - any number > 0 needs attention
3. Click into the sprint table to see per-sprint utilisation badges

**Risk badges:**

| **Badge** | Utilisation | Action |
|---|---|---|
| **On Track** | < 100% | No action needed |
| **Tight** | 100–114% | Monitor daily, defer low-priority items |
| **At Risk** | 115–149% | Reduce scope, review blockers |
| **Overcommitted** | ≥ 150% | Immediate scope reduction required |

See [Sprint Risk Thresholds →](/apps/pulse-ai-jira/sprint-risk-thresholds) for the full reference.

---

## Step 2: Check the Carryover Rate

The **Avg Carryover Rate** card shows the percentage of incomplete issues carried from the previous sprint.

- **< 10%:** Healthy - team is planning well
- **10–20%:** Monitor - may indicate estimation drift
- **> 20%:** Act - review sprint planning process and story sizing

Ask the Pulse AI Assistant: *"What is the average carryover rate across all boards over the last 3 sprints?"*

---

## Step 3: Check Active Blockers

High blocker counts depress the Sprint & Delivery Pulse Score.

1. Note the **Active Blockers** card count
2. Ask the Pulse AI Assistant: *"Which issues in the current sprint are blocked and by what?"*
3. Escalate or resolve blockers before they spill into the next sprint

---

## Step 4: Use the Boards Sub-View

1. Toggle to the **Boards** sub-tab (top of the Sprint & Delivery section)
2. Review **board name**, **associated project**, **sprint count**, and **average velocity**
3. Low velocity boards may indicate under-resourced teams or poor sprint hygiene

---

## Step 5: Ask the Pulse AI Assistant

Use these prompts on the Sprint & Delivery section:

- *"Which stories in this sprint are at risk of not completing?"*
- *"What is the average carryover rate across all boards over the last 3 sprints?"*
- *"Show me the top 5 stories to defer from the overcommitted sprint."*
- *"Generate a JQL filter for all overdue items in the current sprint."*

See [AI Prompt Playbook →](/apps/pulse-ai-jira/ai-prompt-playbook) for more prompts.

---

## Step 6: Re-scan Before Standups

1. Go to **Settings → Scan Schedule → Run Now** before your daily standup
2. This ensures sprint data reflects the latest Jira state
3. After the scan, the Sprint Pulse Score and all cards will reflect current data
`,
        },
        {
          slug: "ai-prompt-playbook",
          title: "AI Prompt Playbook",
          content: `Ready-to-use prompts for the Pulse AI Assistant on each section. Open the relevant section in Pulse AI, click the floating **Ask Pulse AI** button (bottom-right), and paste any prompt below.

> **Note:** The Pulse AI Assistant reads and reasons about scan data. It does not autonomously execute changes in Jira. All remediation actions must be performed manually by an admin.

---

## Dashboard Prompts

Ask from the [Dashboard](/apps/pulse-ai-jira/dashboard-overview):

- *"Why is our Pulse Score low this week?"*
- *"Which pillar is dragging our score down the most?"*
- *"Summarise the top 5 High findings from the last scan."*
- *"What are the most impactful things we can fix to raise our Pulse Score?"*

---

## Governance - Users

Ask from [Governance → Users](/apps/pulse-ai-jira/users):

- *"How many dormant users do we have and when was their last activity?"*
- *"List all admin accounts that have been inactive for more than 60 days."*
- *"Which users have no group membership?"*
- *"Who is over-permissioned - admin on more than 15 projects?"*

---

## Governance - Permissions & Groups

Ask from [Permissions](/apps/pulse-ai-jira/permissions) or [Groups](/apps/pulse-ai-jira/groups):

- *"Which permission schemes are orphaned - not assigned to any project?"*
- *"How many empty groups do we have?"*
- *"Which groups are not referenced in any permission or notification scheme?"*

---

## Project & Data Integrity

Ask from [Projects](/apps/pulse-ai-jira/projects), [Issue Integrity](/apps/pulse-ai-jira/issue-integrity), or [Data Accuracy](/apps/pulse-ai-jira/data-accuracy):

- *"Which projects have no lead assigned?"*
- *"Which projects have a stale backlog - more than 30% stale issues?"*
- *"How many Done issues have no resolution set?"*
- *"What is the total count of unassigned issues in active sprints?"*
- *"Which projects have had no activity in the last 90 days?"*
- *"How many issues are missing mandatory field values?"*

---

## Workflows & Schemes

Ask from [Workflows](/apps/pulse-ai-jira/workflows) or [States & Outcomes](/apps/pulse-ai-jira/states-outcomes):

- *"Show me all workflows with dead-end statuses."*
- *"Which workflows are orphaned - not assigned to any project?"*
- *"How many screens have more than 50 fields - are they bloated?"*
- *"Which resolutions have no default set?"*
- *"Are there any duplicate screen configurations?"*

---

## Configurations

Ask from [Custom Fields](/apps/pulse-ai-jira/custom-fields) or [Global Config](/apps/pulse-ai-jira/global-config):

- *"List all custom fields that are safe to delete - zero usage."*
- *"Which custom fields are risky to delete because they still appear on screens?"*
- *"How many filters have a dead owner - owned by a deactivated user?"*
- *"Which filters are publicly shared?"*
- *"Are there orphaned work type schemes with no projects assigned?"*

---

## Sprints & Delivery

Ask from [Sprints & Delivery](/apps/pulse-ai-jira/sprints-delivery-overview):

- *"Which stories in this sprint are at risk of not completing?"*
- *"What is the average carryover rate across all boards over the last 3 sprints?"*
- *"Show me the top 5 stories to defer from the overcommitted sprint."*
- *"Generate a JQL filter for all overdue items in the current sprint."*
- *"Which sprint has the highest blocker count?"*
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `Practical advice for getting the most out of Pulse AI for Jira.

---

## Scanning

**Run a scan before important meetings.**
Pulse Score and findings only update after a scan. Trigger a manual scan via **Settings → Scan Schedule → Run Now** before governance reviews, sprint retrospectives, or executive reporting sessions.

**Use Scan History to verify data freshness.**
If findings look stale, check **Settings → Scan History** to confirm the last scan completed successfully. A failed scan leaves the previous scan's data in place.

**Automate with the daily schedule.**
Pulse AI runs an automated daily scan. For most teams this is sufficient. Only trigger manual scans when you need real-time data for a specific meeting or audit.

---

## Reading Findings

**Start with High findings.**
High findings have the most impact on your Pulse Score and carry real governance or delivery risk. Fix these before addressing Medium or Low findings.

**Use Clean Signals as confirmation.**
Clean Signals (green) at the bottom of each section confirm that Pulse AI checked for a specific risk and found none. They are not just absence of findings - they are affirmative passing checks.

**Don't over-index on Low findings.**
Low findings are hygiene improvements, not urgent risks. Fixing a Low finding moves your score marginally. Prioritise High and Medium findings first.

---

## Using the Pulse AI Assistant

**Always scope to the current section.**
The FAB assistant on each section page is scoped to that section's data. If you ask a sprint question from the Governance section, the answer may be less precise. Navigate to the relevant section first.

**Ask follow-up questions.**
The assistant maintains context within a session. If it gives a partial answer, ask *"Can you show me the specific items?"* or *"Give me the JQL filter for those issues."*

**Use the [AI Prompt Playbook](/apps/pulse-ai-jira/ai-prompt-playbook)** for ready-to-use prompts tested against each section.

---

## Governance Cleanup

**Fix Dead Owner filters before deleting user accounts.**
Deleting a Jira user account whose filters power dashboards or boards will break those views. Always transfer filter ownership first. See [Global Config →](/apps/pulse-ai-jira/global-config).

**Do not delete Guard objects.**
The Default Permission Scheme, Default Software Scheme, and system groups (jira-administrators, jira-software-users) are Guard objects. Pulse AI will not flag these for deletion. Do not attempt to delete them manually.

**Deactivate users in Atlassian Admin, not Jira.**
User deactivation must be performed at [admin.atlassian.com](https://admin.atlassian.com). The Jira REST API does not support direct deactivation on Jira Cloud.

---

## Custom Fields

**Remove a field from all screens before deleting it.**
A custom field marked **Risky Deletion** is unused but still appears on screens. Deleting it will break those screens. Remove it from each screen first, then delete the field.

**Global context fields with < 2 projects are Low-risk bloat.**
These fields appear on every Jira issue payload even though very few projects use them. Narrowing their context to specific projects improves API performance.

---

## Sprints

**Carryover > 20% is a planning signal, not a team failure.**
Chronic high carryover usually means sprint scope is too large relative to team velocity. Use the Pulse AI Assistant to analyse trends across multiple sprints before drawing conclusions.

**Utilisation badges are forward-looking.**
The At Risk and Overcommitted badges are calculated from the current state of the sprint (remaining story points vs. capacity). They reflect what is likely to happen at the end of the sprint if nothing changes.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. DASHBOARD
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dashboard",
      title: "Dashboard",
      articles: [
        {
          slug: "dashboard-overview",
          title: "Dashboard Overview",
          content: `
The Dashboard is the default landing page after login and scan. It shows the overall Pulse Score, five pillar cards, an instance summary, top risks, section score breakdown, and governance and configuration highlights.

<img
  src="/images/pulse-ai/dashboardL.png"
  alt="Pulse AI Dashboard Overview"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## What You See on the Dashboard

| **Element** | Description |
|---|---|
| **Pulse Score ring** | Composite 0–100 score with grade (A–F) and colour |
| **Five pillar cards** | Individual scores for Sprint & Delivery, Project & Data Integrity, Governance, Workflows & Schemes, and Configurations |
| **Instance summary** | Summary of scanned projects and sections |
| **Top Findings** | Highest-severity findings from the last scan |
| **Ask Pulse AI button** | Opens the full-instance AI assistant (bottom-right) |
`,
        },
        {
          slug: "pulse-score",
          title: "Pulse Score & Pillar Cards",
          content: `
## Pulse Score Hero

The Pulse Score ring displays the overall composite score (0–100) computed as an equal-weighted average of the five pillar scores below it. The grade (A–F) and colour update with the score.

## Five Pillar Cards

| **Pillar** | Sub-Sections Averaged | Weight |
|---|---|---|
| **Sprint & Delivery** | Sprints, Boards | 20% |
| **Project & Data Integrity** | Projects, Issue Integrity, Data Accuracy | 20% |
| **Governance** | Users, Permissions, Groups | 20% |
| **Workflows & Schemes** | Workflows, Workflow Schemes, Statuses, Resolutions, Screens, Screen Schemes, Notification Schemes, Work Item Security, Priority Schemes | 20% |
| **Configurations** | Custom Fields, Work Types, Work Type Schemes, Priorities, Filters | 20% |

> **Note:** Each pillar contributes 20% to the overall score. Within each pillar, sub-sections contribute equally. This prevents pillars with more sub-sections from disproportionately dominating the hero score.

## Grade & Score Reference

| **Grade** | Score Range | Label | Colour |
|---|---|---|---|
| **A** | 90 – 100 | Excellent | Green |
| **B** | 80 – 89 | Good | Blue |
| **C** | 70 – 79 | Needs Attention | Yellow |
| **D** | 55 – 69 | Poor | Orange |
| **F** | 0 – 54 | Critical | Red |
`,
        },
        {
          slug: "top-findings-table",
          title: "Top Findings Table",
          content: `
The Top Findings Table lists the highest-severity findings detected in the last scan, ordered by severity. Use the section filter to narrow by pillar.

## Columns

| **Column** | Description |
|---|---|
| **Pulse Summary** | Short description of the finding. |
| **Report** | Which section produced this finding. |
| **Severity** | High (red), Medium (amber), Low (blue). |
| **Detected** | Date the finding was first recorded. |

## Severity Levels

| **Severity** | Meaning |
|---|---|
| **High** | Important risks that can affect governance, delivery, security, or cleanup decisions. |
| **Medium** | Issues that should be reviewed and cleaned up when possible. |
| **Low** | Minor hygiene or improvement opportunities. |
| **None** | No active risk was detected for that item or check. |
`,
        },
        {
          slug: "pulse-ai-assistant-dashboard",
          title: "Pulse AI Assistant",
          content: `
The Pulse AI Assistant FAB (bottom-right) opens a chat panel with context from your current scan. The assistant loads the relevant domain summary from MongoDB and uses LangGraph tool-calling to answer questions grounded in your actual scan data.

## How It Works

On each query, the backend:
1. Loads the relevant domain's MongoDB summary as context
2. Uses LangGraph agentic reasoning with domain-specific tools
3. Composes a grounded answer based on your actual scan data

No external vector retrieval is involved.

## Example Prompts

- "Why is our Pulse Score low this week?"
- "Which projects have no lead assigned?"
- "List all custom fields that are safe to delete."
- "Show me all workflows with dead-end statuses."
- "Give me a sprint-by-sprint carryover trend for the last 3 sprints."

> **Note:** The Pulse AI Assistant reads and reasons about scan data. It does not autonomously execute changes in Jira. All remediation actions must be performed manually by an admin.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. PROJECT & DATA INTEGRITY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "project-data-integrity",
      title: "Project & Data Integrity",
      articles: [
        {
          slug: "projects",
          title: "Projects",
          content: `
Navigate to **Project & Data Integrity → Projects**. This pillar validates that Jira data accurately reflects actual work. Misconfigured or incomplete data corrupts reporting and misleads delivery tracking.

Provides a Pulse Score per project with stale backlog, lead coverage, and activity flags. Supports both a **dashboard card view** and a **tabular view** (toggle in the section topbar) with search, sort, and pagination.

<img
  src="/images/pulse-ai/projectL.png"
  alt="Pulse AI Projects View"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Project Table Columns

| **Column** | Description |
|---|---|
| **Project** | Project display name. |
| **Key** | Jira project key (e.g., AD, PO). |
| **Type** | Software, Service Desk, Business, etc. |
| **Last Activity** | Time since last issue update. ≥ 90 days = stale. |
| **Lead** | Project lead. Empty = no lead - a scoring deduction. |
| **Issues** | Total open issue count. |
| **Pulse Score** | Per-project health score (0–100). |
| **Pulse Summary** | Stale Backlog, Inactive, No Lead, Empty, or Clean. |

## Key Terms

| **Term** | Definition |
|---|---|
| **Stale Backlog** | Stale issues ÷ total issues > 30%. |
| **Inactive** | Project with no issue activity for ≥ 90 days. |
| **No Lead** | Project has no lead user assigned. |
| **Empty** | Project has zero issues. |
| **Clean** | No active findings detected. |
`,
        },
        {
          slug: "issue-integrity",
          title: "Issue Integrity",
          content: `
Navigate to **Project & Data Integrity → Issue Integrity**. Monitors instance-wide issue data integrity across seven categories. All counts are all-time totals - no date window is applied.

<img
  src="/images/pulse-ai/issueIntegrity.png"
  alt="Pulse AI Issue Integrity"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Issue Integrity Categories

| **Category** | What It Monitors |
|---|---|
| **Resolution & Status Mismatches** | Done issues with no resolution set; open issues with a resolution already set. |
| **Reopen Patterns** | Issues transitioned back to open after being resolved - indicating quality gaps. |
| **Assignee & Ownership Gaps** | Unassigned issues in active sprints; issues with no owner across the instance. |
| **Blocker & Dependency Issues** | Active blocker-priority issues and unresolved linked dependencies. |
| **Subtask & Hierarchy Integrity** | Orphaned subtasks; subtasks with no parent issue. |
| **Staleness & Time Anomalies** | Issues untouched for extended periods; overdue in-progress items. |
| **Estimation & Sprint Discipline** | Issues in sprints with no story points; sprint scope creep indicators. |
`,
        },
        {
          slug: "data-accuracy",
          title: "Data Accuracy",
          content: `
Navigate to **Project & Data Integrity → Data Accuracy**. Monitors mandatory field completion, resolution–status alignment, and issue type consistency.

<img
  src="/images/pulse-ai/dataAccL.png"
  alt="Pulse AI Data Accuracy"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Data Accuracy Checks

| **Check** | What It Flags |
|---|---|
| **Mandatory field completion** | Issues missing required fields - breaks downstream reporting. |
| **Resolution–status alignment** | Mismatches between the resolution value set and the workflow status category. |
| **Issue type gaps** | Projects using issue types not aligned with their work type scheme. |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 4. GOVERNANCE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "governance",
      title: "Governance",
      articles: [
        {
          slug: "users",
          title: "Users",
          content: `
Navigate to **Governance → Users** for a security and access risk audit of every user licensed in the org. The Governance pillar audits people, access, and directory health. A single over-provisioned account or misconfigured permission scheme can expose data across the entire instance.

<img
  src="/images/pulse-ai/userL.png"
  alt="Pulse AI Users Governance"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Risk Categories

| **Risk Category** | Condition | Notes |
|---|---|---|
| **Dormant** | Active account with last activity older than 90 days. | Active = true but not recently used. |
| **Inactive Admin** | Admin with no activity for ≥ 60 days. | Review and remove from admin group. |
| **Overpermissioned** | Admin on 15+ projects simultaneously. | Review project-level permissions. |
| **No Group** | User with no group membership. | May have direct permission grants. |

> **Note:** User deactivation must be performed in the Atlassian Admin Console (admin.atlassian.com) - the Jira REST API does not support direct deactivation on Jira Cloud.
`,
        },
        {
          slug: "permissions",
          title: "Permissions",
          content: `
Navigate to **Governance → Permissions** for a permission scheme audit. Key metrics: total schemes, orphaned schemes (zero projects assigned), and schemes with conflicting or excessive permission entries.

<img
  src="/images/pulse-ai/permissionL.png"
  alt="Pulse AI Permission Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Key Metrics

| **Metric** | Description |
|---|---|
| **Total Schemes** | All permission schemes in the instance. |
| **Healthy Schemes** | Schemes with no findings. |
| **SD Customer Grants** | Schemes using Service Desk Customer role grants. |
| **App Role Grants** | Schemes using application-role-based grants. |
| **Orphaned Schemes** | Schemes with zero projects assigned - candidates for deletion. |

> **Note:** The Default Permission Scheme and Default Software Scheme are protected (Guard) objects. Pulse AI will not flag these for deletion.
`,
        },
        {
          slug: "groups",
          title: "Groups",
          content: `
Navigate to **Governance → Groups** for Jira group directory hygiene.

<img
  src="/images/pulse-ai/groupsL.png"
  alt="Pulse AI Groups"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Summary Cards

| **Summary Card** | Description |
|---|---|
| **Total Groups** | All Jira groups synced, including system groups. |
| **Empty Groups** | Groups with zero members. Candidates for cleanup. |
| **Unreferenced** | Groups not referenced in any permission, notification, or work item security scheme. |
| **Oversized Groups** | Groups with unusually large membership. |
| **Healthy Groups** | Groups that pass all health checks. |

> **Note:** Jira system groups (e.g., jira-administrators, jira-software-users) are Guard objects and will not be flagged for deletion.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 5. WORKFLOWS & SCHEMES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "workflows-schemes",
      title: "Workflows & Schemes",
      articles: [
        {
          slug: "workflows",
          title: "Workflows",
          content: `
Navigate to **Workflows & Schemes → Workflows**. Jira's workflow and scheme layer is one of the most common sources of configuration debt. The Workflows sub-section and Workflow Schemes sub-section are accessible from the expandable Workflows nav item.

<img
  src="/images/pulse-ai/workflowsL.png"
  alt="Pulse AI Workflows"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Workflow Findings

| **Finding** | Description |
|---|---|
| **Unused / Orphaned** | Workflows not assigned to any project via a scheme. Primary cleanup target. |
| **Dead-End Status** | Workflow has at least one status with no outgoing transitions - tickets in that status can never move forward. |
| **Duplicate** | Two or more workflows with an identical transition/status signature. |
| **Stale** | Zero project assignments AND last edited ≥ 90 days ago. |
`,
        },
        {
          slug: "workflow-schemes",
          title: "Workflow Schemes",
          content: `
Navigate to **Workflows & Schemes → Workflows → Workflow Schemes**. Workflow schemes map workflows to work types within a project.

<img
  src="/images/pulse-ai/workflowSchemsL.png"
  alt="Pulse AI Workflow Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Key Metrics

| **Metric** | Description |
|---|---|
| **Total Schemes** | All workflow schemes in the instance. |
| **Orphaned Schemes** | Schemes with zero projects assigned. |
| **State Drafts** | Schemes with abandoned draft workflows. |
| **Missing Defaults** | Schemes with no default workflow configured. |
| **Widely Shared** | Schemes used across many projects - high blast radius if changed. |
`,
        },
        {
          slug: "states-outcomes",
          title: "States & Outcomes (Statuses & Resolutions)",
          content: `
Navigate to **Workflows & Schemes → States & Outcomes**. The States & Outcomes group expands to **Statuses** and **Resolutions** sub-items.

## Statuses

<img
  src="/images/pulse-ai/statusL.png"
  alt="Pulse AI Statuses"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| **Finding** | Description |
|---|---|
| **Orphaned** | Status not used in any workflow. |
| **No Category** | Status has no valid category (To Do / In Progress / Done). |
| **Name Conflicts** | Same name, different category. |

## Resolutions

<img
  src="/images/pulse-ai/resolutionL.png"
  alt="Pulse AI Resolutions"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| **Finding** | Severity | Description |
|---|---|---|
| **Unused** | Medium | Resolution not applied to any issue. |
| **Overloaded** | High | Too many issues mapping to one resolution. |
| **Broken Workflow references** | High | Resolution referenced in a workflow transition that no longer exists. |
| **No Default Set** | High | Required for auto-resolve workflow transitions. |
`,
        },
        {
          slug: "transition-screens",
          title: "Transition Screens",
          content: `
Navigate to **Workflows & Schemes → Transition Screens**. The group expands to **Screens** and **Screen Schemes** sub-items.

## Screens

<img
  src="/images/pulse-ai/screenL.png"
  alt="Pulse AI Screens"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| **Finding** | Severity | Condition |
|---|---|---|
| **Duplicate Screen** | High | Two or more screens with identical field configurations. |
| **Bloated Screen** | Medium | Screen has more than 50 available fields. |
| **Orphaned Screen** | Medium | Screen not referenced by any screen scheme. |

## Screen Schemes

<img
  src="/images/pulse-ai/screenSchemesL.png"
  alt="Pulse AI Screen Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| **Finding** | Severity | Condition |
|---|---|---|
| **Orphaned Screen Scheme** | Medium | Screen scheme not referenced by any issue type screen scheme. |
`,
        },
        {
          slug: "all-schemes",
          title: "All Schemes",
          content: `
Navigate to **Workflows & Schemes → All Schemes**. Expands to **Notification Schemes**, **Work Item Security**, and **Priority Schemes**.

## Notification Schemes

<img
  src="/images/pulse-ai/NotificationsSchemesL.png"
  alt="Pulse AI Notification Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

**Key Metrics:** Total · Orphaned · Duplicates (same event-rule signature across 16 events).

## Work Item Security

<img
  src="/images/pulse-ai/workSecurity.png"
  alt="Pulse AI Work Item Security"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

**Key Metrics:** Total · Orphaned (zero projects) · No Security Levels (scheme has zero levels defined) · Missing Default level.

## Priority Schemes

<img
  src="/images/pulse-ai/priorityScheme.png"
  alt="Pulse AI Priority Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

**Key Metrics:** Total · Orphaned · Duplicates.

## Scheme Type Summary

| **Scheme Type** | Key Metrics |
|---|---|
| **Notification Schemes** | Total · Orphaned · Duplicates (same event-rule signature across 16 events). |
| **Work Item Security** | Total · Orphaned (zero projects) · No Security Levels · Missing Default level. |
| **Priority Schemes** | Total · Orphaned · Duplicates. |
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 6. SPRINTS & DELIVERY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "sprints-delivery",
      title: "Sprints & Delivery",
      articles: [
        {
          slug: "sprints-delivery-overview",
          title: "Sprints & Delivery Overview",
          content: `
Navigate to **Sprint & Delivery → Sprints & Delivery**. Surfaces sprint intelligence across all Scrum boards in the org. Primary tool for engineering managers and Scrum masters. Includes a table view toggle (Sprints sub-tab + Boards sub-tab) accessible from the section topbar.

<img
  src="/images/pulse-ai/sprintL.png"
  alt="Pulse AI Sprints & Delivery"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Sprint Summary Cards

| **Card** | Description |
|---|---|
| **Active Sprints** | Total number of currently active sprints across all Scrum boards. |
| **At Risk** | Sprints flagged as at-risk or overcommitted based on utilisation thresholds. |
| **Avg Carryover Rate** | Average percentage of incomplete issues carried from the previous sprint. > 20% indicates chronic overcommitment. |
| **Active Blockers** | Blocker-priority issues that are unresolved across all sprints. |
`,
        },
        {
          slug: "sprint-risk-thresholds",
          title: "Sprint Risk Thresholds",
          content: `
Pulse AI applies risk thresholds based on sprint utilisation percentage to flag delivery risk before it becomes a problem.

## Risk Threshold Bands

| **Badge** | Utilisation % | Colour | Recommended Action |
|---|---|---|---|
| **On Track** | < 100% | Teal / Green | No action needed. |
| **Tight** | 100–114% | Amber | Monitor daily. Consider deferring lower-priority items. |
| **At Risk** | 115–149% | Amber / Orange | Scope reduction recommended. Review blockers. |
| **Overcommitted** | ≥ 150% | Red | Immediate scope reduction required. |

## Boards Sub-View

The Boards sub-tab (accessible from the table view toggle in the topbar) shows all Scrum boards: board name, associated project, sprint count, and average velocity per board.

## Pulse AI Assistant for Sprint Data

Example prompts for sprint intelligence:

- "Which stories in this sprint are at risk of not completing?"
- "What is the average carryover rate across all boards over the last 3 sprints?"
- "Show me the top 5 stories to defer from the overcommitted sprint."
- "Generate a JQL filter for all overdue items in the current sprint."

> **Note:** The Pulse AI Assistant can read and reason about sprint data. It does not move issues between sprints - those decisions require business context and must be executed by an admin.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 7. CONFIGURATIONS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "configurations",
      title: "Configurations",
      articles: [
        {
          slug: "custom-fields",
          title: "Fields (Custom Fields)",
          content: `
Navigate to **Configurations → Fields**. The Configurations pillar audits the system metadata layer. Every unused global-context custom field adds overhead to every Jira issue screen and API payload. Configuration clutter degrades Jira search performance and makes administration harder over time.

<img
  src="/images/pulse-ai/fieldsL.png"
  alt="Pulse AI Custom Fields"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Custom Field Findings

| **Finding** | Severity | Condition |
|---|---|---|
| **Unused** | High | Zero issues have a value in this field. |
| **Duplicate** | Medium | Same name and type pattern as another field. |
| **Global Context Bloat** | Low | Global context but used in fewer than 2 projects. |
| **Risky Deletion** | High | Unused or stale but still appears on screens - cleanup may break users. |
`,
        },
        {
          slug: "work-types-schemes",
          title: "Work Types & Work Type Schemes",
          content: `
Navigate to **Configurations → Work Types**. The Work Types group expands to **Work Types** (issue types) and **Work Type Schemes** (issue type schemes) sub-items.

## Work Types

<img
  src="/images/pulse-ai/WorktypesL.png"
  alt="Pulse AI Work Types"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

**Key Metrics:** Total issue types · Unused (not in any project scheme) · Duplicates (same name).

## Work Type Schemes

<img
  src="/images/pulse-ai/worktypeSchemesL.png"
  alt="Pulse AI Work Type Schemes"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

**Key Metrics:** Total schemes · Orphaned (zero projects) · Duplicates (identical issue type signatures) · Missing Default issue type.

## Summary

| **Sub-View** | Key Metrics |
|---|---|
| **Work Types** | Total issue types · Unused (not in any project scheme) · Duplicates (same name). |
| **Work Type Schemes** | Total schemes · Orphaned (zero projects) · Duplicates (identical issue type signatures) · Missing Default issue type. |
`,
        },
        {
          slug: "global-config",
          title: "Global Config (Priorities & Filters)",
          content: `
Navigate to **Configurations → Global Config**. The group expands to **Priorities** and **Filters** sub-items.

## Priorities

<img
  src="/images/pulse-ai/priorities.png"
  alt="Pulse AI Priorities"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

**Key Findings:** Unused priorities (note: Jira prevents deletion of any priority ever used on an issue). Naming drift across priority names.

## Filters

<img
  src="/images/pulse-ai/filtersL.png"
  alt="Pulse AI Filters"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

| **Finding** | Description |
|---|---|
| **Invalid JQL** | Silently failing filters. |
| **Dead Owner** | Filter owned by a deactivated user. |
| **Publicly Shared** | Filter has global share permissions. |
| **Unused** | No boards, dashboards, or subscriptions referencing this filter. |

> **Tip:** Transfer ownership of filters with a dead owner before deleting the owner account. Deleting a filter that powers a board will break that board's backlog view.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. SETTINGS
    // ═══════════════════════════════════════════════════════════════
    {
      id: "settings",
      title: "Settings",
      articles: [
        {
          slug: "settings-overview",
          title: "Settings Overview",
          content: `
Navigate to **Settings** in the sidebar. Settings uses a vertical tab navigation with four tabs.

<img
  src="/images/pulse-ai/settingsL.png"
  alt="Pulse AI Settings"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Settings Tabs

| **Tab** | Description |
|---|---|
| **General Settings** | Displays the connected Jira instance URL and the currently logged-in Atlassian account (read-only). |
| **Chat History** | Last 10 successful Pulse AI Assistant queries for the current user. Includes query text, user avatar, and timestamp. A **Clear History** button removes all stored entries. |
| **Scan Schedule** | Current scan frequency (Daily - automated), last scan timestamp, scan duration, live sync status, and a **Run Now** button to trigger a manual full scan. |
| **Scan History** | Last 10 scan runs for the organisation. Shows status (Completed), duration, trigger type (Manual or System Scheduler), and actor (user avatar or scheduler icon). |

> **Note:** Scan frequency is managed by the Pulse backend service and is not configurable from within the app. Use **Run Now** in the Scan Schedule tab to trigger an on-demand scan at any time.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 9. REFERENCE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "reference",
      title: "Reference",
      articles: [
        {
          slug: "pulse-score-reference",
          title: "Pulse Score Reference",
          content: `
## Grade & Score Reference

| **Grade** | Score Range | Label | Colour |
|---|---|---|---|
| **A** | 90 – 100 | Excellent | Green |
| **B** | 80 – 89 | Good | Blue |
| **C** | 70 – 79 | Needs Attention | Yellow |
| **D** | 55 – 69 | Poor | Orange |
| **F** | 0 – 54 | Critical | Red |

## Pillar Deduction Signals

| **Pillar** | Key Deduction Signals |
|---|---|
| **Sprint & Delivery** | Overcommitment > 115% · Carryover rate > 15% · Active blocker issues · Stale backlog |
| **Project & Data Integrity** | Projects with no lead · Inactive projects (90+ days) · Done issues with no resolution · Missing mandatory fields |
| **Governance** | Dormant accounts (90+ days) · Inactive admins (60+ days) · Overpermissioned users (admin on 15+ projects) · Empty groups |
| **Workflows & Schemes** | Orphaned workflows · Dead-end statuses · Duplicate schemes · Orphaned screens · No security levels |
| **Configurations** | Unused custom fields · Global context bloat · Orphaned work type schemes · Stale filters with dead owners · Risky deletions |

## Stale / Threshold Reference

| **Entity** | Stale Threshold |
|---|---|
| **Workflow** | Zero projects + last modified ≥ 90 days |
| **Project activity** | Last issue update ≥ 90 days |
| **User - Dormant** | Active account, last activity > 90 days |
| **User - Inactive Admin** | Admin account, no activity ≥ 60 days |
| **Group (empty)** | Zero members |
| **Custom field (unused)** | Zero issues with a value in this field |
| **Custom field (global bloat)** | Global context + used in < 2 projects |
| **Filter (dead owner)** | Owner account is deactivated in Atlassian |
| **Stale backlog (project)** | Stale issues / total issues > 30% |
| **Screen (bloated)** | More than 50 available fields |
`,
        },
        {
          slug: "glossary",
          title: "Glossary",
          content: `
| **Term** | Definition |
|---|---|
| **Pulse Score** | A health score from 0 to 100 summarising the condition of a section, item, or overall Jira environment. |
| **Grade** | A letter rating (A–F) based on the Pulse Score. |
| **Finding** | A detected issue, risk, or cleanup opportunity. |
| **Clean Signal** | A passed check showing that Pulse AI did not detect a specific risk. |
| **Orphaned** | Object has no active usage or reference - no projects assigned, no schemes referencing it, or no workflow usage. |
| **Unused** | Object has zero usage - unused priorities, resolutions, fields, or config objects with no assigned usage. |
| **Stale** | Object or issue has not been used or updated recently. Common thresholds: 90+ days for backlog/projects/fields/filters; 14+ days for stalled in-progress issues. |
| **Stale Backlog** | For projects: stale issues ÷ total issues > 30%. |
| **Dormant** | User: active account with last activity older than 90 days. |
| **Inactive** | User: active === false. Project: activity older than threshold or all issues inactive. |
| **Bloated** | Screen: available field count exceeds 50. |
| **Duplicate** | Same name or same signature exists more than once. |
| **Widely Shared** | Object used across many projects or schemes beyond a threshold, increasing blast radius if changed. |
| **Missing Default** | Scheme has no default issue type, security level, or workflow depending on section. |
| **No Category** | Status has no valid category assigned. |
| **No Security Levels** | Issue security scheme has zero levels defined. |
| **Publicly Shared** | Filter share permissions include public or global access. |
| **Risky Deletion** | Custom field is stale or unused but still appears on screens - cleanup may break users. |
| **Guard** | Protected or system-managed object; should not be treated as a normal cleanup target (e.g., Default Permission Scheme, system groups). |
`,
        },
        {
          slug: "permissions-reference",
          title: "Permissions Reference",
          content: `
## Required Permissions by Action

| **Action** | Required Permission |
|---|---|
| **View all reports** | Any Jira user |
| **Run a scan** | Any Jira user |
| **Confirm write actions (where available)** | Administer Jira (org admin) |
| **Install the app** | Jira site administrator |

## Notes

- Any Jira user with access to the app can view dashboards, findings, and section reports.
- Running a scan fetches data via the Atlassian API using the OAuth token of the user who authorised the app - no elevated permissions are required for read-only scans.
- Write-back actions (where available) require the **Administer Jira** global permission.
- App installation requires **Jira site administrator** access.
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 10. HELP & SUPPORT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "help-support",
      title: "Help & Support",
      articles: [
        {
          slug: "help-support-overview",
          title: "Help & Support",
          content: `
Navigate to **Help & Support** in the sidebar. The page provides three quick-action cards and a built-in Pulse AI Guide accordion.

<img
  src="/images/pulse-ai/HelpSupport.png"
  alt="Pulse AI Help & Support"
  style="border-radius:12px; width:100%; max-width:800px; height:auto; display:block; margin:24px auto;"
/>

## Support Resources

| **Resource** | Description |
|---|---|
| **Documentation** | Full feature guides, API reference, and setup walkthroughs. |
| **Contact Support** | Raise a support ticket at [support@clovity.com](mailto:support@clovity.com). Enterprise SLA: 4-hour initial response. |
| **Video Tutorials** | Step-by-step setup, first scan, and feature walkthrough videos. |

## Built-in Pulse AI Guide

The in-app accordion provides five reference sections without leaving Jira:

- **Pulse Score Calculation** - Scoring flow diagram and the five parent pillar areas with 20% influence each.
- **Grade Guide** - A–F grade reference with score ranges and colour coding.
- **Severity Guide** - High / Medium / Low / None definitions.
- **Common Pulse AI Terms** - Full glossary including Pulse Score, Grade, Finding, Clean Signal, Orphaned, Unused, Stale, Dormant, Bloated, Widely Shared, Guard, and more.
- **Clean Signals** - Explanation of what passed checks mean.

## Enterprise SLA

For Enterprise plan customers, Clovity provides:

- **4-hour initial response** for all support tickets
- Dedicated Slack channel (upon request)
- Named technical account manager for onboarding and ongoing governance reviews
`,
        },
        {
          slug: "troubleshooting",
          title: "Troubleshooting",
          content: `
## Common Issues & Resolutions

| **Issue** | Resolution |
|---|---|
| **Dashboard shows no data after OAuth** | Click Run Scan. Verify OAuth status indicator shows 'Connected'. |
| **Pulse Score not updated after fixing findings** | Score updates after the next scan. Click Run Scan to trigger immediately. |
| **Pulse AI Assistant panel not opening** | FAB is not shown on Settings or Help views. Navigate to any section view. |
| **Assistant gives a generic answer** | Ensure a scan has completed. The assistant loads MongoDB summaries from the last scan - stale data gives stale answers. |
| **Section shows "No data" after scan** | The sync step for this domain may have failed. Click Run Scan again and check Scan History in Settings for partial failures. |
| **Scan History shows "Never"** | No completed scan has been recorded yet. Click Run Now in Settings → Scan Schedule. |
| **Chat History is empty** | Stores the last 10 successful assistant queries per user. Empty if no queries have been submitted yet. |
| **Scan is stuck on "Running" for > 2 hours** | Pulse AI automatically marks stale running jobs as failed after 2 hours. Re-trigger via Run Scan. |

## Getting Further Help

| **Resource** | Description |
|---|---|
| **Documentation** | Full feature guides, API reference, Forge storage model, and setup walkthroughs - available in this Help Center |
| **Contact Support** | Raise a ticket at [support.clovity.com](https://support.clovity.com). Enterprise SLA: 4-hour initial response. |
| **Email** | [support@clovity.com](mailto:support@clovity.com) |
| **Video Tutorials** | Step-by-step setup, first scan, and feature walkthrough videos available on the Clovity YouTube channel |

## About Clovity

Pulse AI is a Forge-native Jira Cloud app available on the Atlassian Marketplace.
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
    }))
  );
}

export function findArticle(docs, articleSlug) {
  for (const cat of docs.categories) {
    const article = cat.articles.find((a) => a.slug === articleSlug);
    if (article) return { article, category: cat };
  }
  return null;
}
