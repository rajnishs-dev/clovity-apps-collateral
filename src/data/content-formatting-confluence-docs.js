import { getAllArticles, findArticle } from "./time-tracking-docs";
export { getAllArticles, findArticle };

export const contentFormattingConfluenceDocs = {
  categories: [
    // ═══════════════════════════════════════════════════════════════
    // 1. GETTING STARTED
    // ═══════════════════════════════════════════════════════════════
    {
      id: "getting-started",
      title: "Getting Started",
      id: "getting-started",
      title: "Getting Started",
      articles: [
        {
          slug: "what-is-content-formatting",
          title: "What is Content Formatting Macros?",
          sideVideo: {
            src: "https://www.youtube.com/embed/9kxsvSFa2-w",
            title:
              "Content Formatting Macros: Tabs, Navigation, Visibility & CSS - Product Overview",
          },
          content: `
Content Formatting Macros is a Confluence Cloud app that gives teams four powerful capabilities in one install.

<!--VIDEO_BREAK-->

## Four Core Capabilities

**1. Advanced Content Navigation (Tabs)**
Create multi-tab layouts inside any Confluence page. Organize complex documentation, runbooks, or knowledge bases into clean, clickable tab interfaces without leaving the page editor.

**2. 18 Rich Content Formatting Macros**
Buttons, Alerts, Backgrounds, Tooltips, Progress Bars, Footnotes, Pop-up Dialogs, Advanced Expand, Advanced Cards, Interactive Banners, Numbered Headings, Dividers, Countdown Timers, User Profiles, Status indicators, JSON Viewer, and more.

**3. Conditional Visibility (Show / Hide)**
Control which content users see based on Confluence groups, space roles, or login status. Show internal notes only to admins; hide drafts from guests.

**4. Attachment Management & Audit**
Bulk-view, label, and manage file attachments across your Confluence space from a single panel. Identify orphaned files, filter by type, and keep your space tidy.

## Supported Macros at a Glance

| Macro | Purpose |
|---|---|
| Tab Navigation | Multi-tab page layout |
| Tab Parent Content Mapper | Tabs pulling from child pages |
| Tab Label Content Mapper | Tabs filtered by label |
| Tab Page Mapper | Tabs from specific pages |
| Custom Tabs | Manual rich-content tabs |
| Conditional Show | Show content to specific groups |
| Conditional Hide | Hide content from specific groups |
| Buttons | Styled CTA buttons |
| Background | Section background color/image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal definitions |
| Progress Bar | Visual completion indicator |
| Footnotes | Inline reference notes |
| Pop-up Dialog | Modal overlays |
| Advanced Expand | Styled collapsible sections |
| Advanced Cards | Rich content cards with layout |
| Interactive Banner | Full-width announcement banners |
| Numbered Headings | Auto-numbered heading hierarchy |
| Divider | Styled horizontal rules |
| Countdown Timer | Live event countdown |
| User Profile | Confluence user info cards |
| Status Macro | Color-coded status badges |
| JSON Viewer | Formatted JSON display |

## Platform Compatibility

- **Confluence Cloud**: Fully supported
- **Confluence Data Center / Server**: Not supported
- **Confluence Mobile**: Read-only rendering; editing not available on mobile

## What's New
The app is actively updated. Check the Atlassian Marketplace listing for the latest release notes and version history.`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `15 step-by-step tutorials covering every macro - click any video to start watching, or use the arrows to go through them in order. New to the app? Start with the [Product Introduction](/apps/content-formatting-confluence/what-is-content-formatting) first.`,
          videoGallery: {
            playlistUrl:
              "https://www.youtube.com/watch?v=xAWexa-8kIw&list=PLACoCS_WiVwRpkORYCho-5uakGUo7sNYp",
            videos: [
              {
                id: "xAWexa-8kIw",
                title: "Content Formatting Macros - Complete App Overview",
              },
              {
                id: "RJ3KxIhZOH0",
                title:
                  "Tab Parent Content Mapper - Auto-Build Tabbed Hubs from Confluence Parent Pages",
              },
              {
                id: "Ed8HAHZ4-XE",
                title:
                  "Tab Label Content Mapper - Create Dynamic Tabs Using Confluence Labels & CQL",
              },
              {
                id: "qWw33Oe8LsQ",
                title:
                  "Tab Confluence Page Mapper - Hand-Pick & Curate Pages into a Custom Tab Hub",
              },
              {
                id: "h6iHtIbzod0",
                title:
                  "Background Macro - Add Color, Gradient & Image Backgrounds to Confluence Page Sections",
              },
              {
                id: "9uxCaIocQIQ",
                title:
                  "Progress Bar Macro - Guide Readers Through Multi-Step Flows Across Confluence Pages",
              },
              {
                id: "L1SyYwTNBjI",
                title:
                  "Advanced Expand Macro - Add Collapsible Sections with Icons & Rich Content in Confluence",
              },
              {
                id: "C9v6bGNkvlU",
                title:
                  "Interactive Banner Macro - Build Hero Banners & Rotating Slideshows in Confluence",
              },
              {
                id: "-JXKdkpVhcs",
                title:
                  "Advanced Cards Macro - Create Visual Card Grids with Images, Titles & Buttons in Confluence",
              },
              {
                id: "QggCrNc3dug",
                title:
                  "Conditional Show Macro - Show Content Only to Specific Users or Groups in Confluence",
              },
              {
                id: "GCgM4xqOmrE",
                title:
                  "Conditional Hide Macro - Hide Content from Specific Users or Groups in Confluence",
              },
              {
                id: "6nx6L0elOS8",
                title:
                  "Attachment Control Center - Search, Manage & Audit Every Attachment Across Confluence",
              },
              {
                id: "sP4w94ZxONE",
                title:
                  "Buttons Macro - Create Styled Call-to-Action Buttons & Navigation Panels in Confluence",
              },
              {
                id: "IH1eZreounY",
                title:
                  "Alert Macro - Add Color-Coded Warning, Info, Tip & Error Blocks to Confluence Pages",
              },
              {
                id: "HRrhSA11AUo",
                title:
                  "Tooltip Macro - Add Hover-Activated Inline Definitions to Any Confluence Page",
              },
            ],
          },
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `

<img src="/images/content-formatting-assets/installation-setup.JPG" alt="Installation & Setup screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## Prerequisites

Before installing, confirm:

1. You are a **Confluence Cloud site administrator** (required to install Marketplace apps)
2. Your Confluence instance is **Confluence Cloud** - this app does not support Data Center or Server
3. You have access to the **Atlassian Marketplace** from your Confluence instance

## Installation Steps

| Step | Action |
|---|---|
| 1 | Go to **Confluence Settings** → **Find new apps** (requires Confluence Admin role) |
| 2 | Search for **"Content Formatting Macros: Tabs Navigation Visibility CSS"** |
| 3 | Click **Try it free** (30-day trial) or **Buy now** |
| 4 | Accept the requested permissions |
| 5 | The app activates immediately - no restart required |

## Permission Scopes Requested

The app requests the following scopes during installation:

| Permission | Reason |
|---|---|
| Read Confluence content | Tab mappers need to read child/labeled pages |
| Read space and page permissions | Conditional visibility evaluation |
| Read user profile | User Profile macro |
| Manage attachments | Attachment Management Center |

## Post-Install Verification

After installation:

1. Open any Confluence page in edit mode
2. Click the **+** (Insert) button in the editor toolbar
3. Search for "Tab Navigation" or "Alert" - the macros should appear in the results
4. If macros don't appear, go to **Confluence Settings** → **Manage apps** → Confirm Content Formatting Macros: Tabs Navigation Visibility CSS shows "Active"

## Admin Checklist

- [ ] App installed from Marketplace
- [ ] All permissions accepted
- [ ] Post-install verification passed (macros appear in editor)

## Uninstalling

To uninstall: **Confluence Settings** → **Manage apps** → find Content Formatting Macros → click **Uninstall**. Macro placeholders will remain on pages but will no longer render until the app is re-installed.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
## Who This App Is For

- **Confluence Space Admins** who want to improve page structure and navigation across their space
- **Page Authors** who want richer, more engaging content without custom code
- **Team Leads** who want to consolidate scattered documentation into organized, tabbed hubs
- **IT and HR teams** who need to show different content to different audiences on the same page

## Quick-Start Checklist

1. Install the app from the Atlassian Marketplace (admin required)
2. Grant required permissions during install
3. Open any Confluence page in edit mode
4. Click the **+** (Insert) button in the editor toolbar
5. Search for any macro name (e.g., "Alert", "Buttons")
6. Configure the macro settings in the panel that appears
7. Publish the page

## Four-Step Path to Your First Tabbed Page

### Step 1 - Plan Your Structure
Decide how many tabs you need and what content belongs in each. The most common pattern: one tab per topic, environment, team, or audience.

### Step 2 - Choose Your Tab Mapper
- **Tab Parent Content Mapper**: Use when tabs should mirror child pages (auto-updating)
- **Tab Label Content Mapper**: Use when you tag pages with labels and want tabs to reflect that grouping
- **Tab Page Mapper**: Use when you want to hand-pick exactly which pages appear as tabs
- **Custom Tabs**: Use when content lives directly on the page, not in separate child pages

### Step 3 - Insert and Configure
Insert the Tab Navigation macro. Configure the mapper settings (parent page, label name, or page list).

### Step 4 - Enrich with Formatting Macros
Add Alert macros for warnings, Buttons for CTAs, Background for section separation, and Status badges for current state. Publish when ready.`,
        },
        {
          slug: "system-requirements",
          title: "System Requirements",
          content: `
## Platform Requirements

| Requirement | Details |
|---|---|
| **Confluence Edition** | Confluence Cloud only |
| **Confluence Data Center** | Not supported |
| **Confluence Server** | Not supported |
| **Atlassian Platform** | Atlassian Connect / Forge |

Content Formatting Macros is built exclusively for **Confluence Cloud**. There is no Data Center or Server version, and no plans to release one.

## Browser Requirements

All modern browsers are supported:

| Browser | Minimum Version |
|---|---|
| Google Chrome | Latest 2 versions |
| Mozilla Firefox | Latest 2 versions |
| Microsoft Edge | Latest 2 versions |
| Apple Safari | Latest 2 versions |

Internet Explorer is not supported.

## Confluence Mobile Limitations

| Feature | Mobile Status |
|---|---|
| Tab macros (read) | Renders as static content - tabs are visible |
| Tab macros (edit) | Not supported on mobile |
| Conditional visibility | Honored at render time |
| Countdown Timer | Limited real-time updates |
| Pop-up Dialog | May not open on touch devices |
| Attachment Center | Accessible via browser, not native mobile app |

For the full interactive experience, use a desktop browser.

## Attachment Center Requirements

The Attachment Management Center requires:
- Confluence Space Admin role to enable and configure per-space
- The app to be installed and active on the Confluence site
- Attachment Center feature to be toggled on in Space Settings per-space`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## Who Can Do What

| Role | Can Do |
|---|---|
| **Space Admin** | Install the app (site admin required) |
| **Page Author (edit permission)** | Insert, configure, and publish any macro on pages they can edit |
| **Page Viewer (read permission)** | View rendered macros; conditional visibility is evaluated per viewer's groups |

## Installing the App

Only a **Confluence site administrator** can install apps from the Atlassian Marketplace. Space admins without site admin rights cannot install the app themselves - they must request installation from a site admin.

## Inserting Macros

All Confluence users with **page edit permission** can insert and configure any Content Formatting macro. There is no per-macro permission control - access is governed by standard Confluence page edit permissions.

## Conditional Show / Hide

For conditional visibility macros to work correctly:
- The Confluence group names used in the macro config must exactly match existing group names in **Confluence Admin → Groups**
- Group membership is managed by Confluence administrators in the standard Confluence user management interface
- The app does not create, manage, or sync groups - it reads existing Confluence group membership at render time

## Attachment Center

The Attachment Management Center requires:
- **Space Admin** role to enable the feature per-space (Space Settings → Content Formatting Macros → Attachment Center)
- **Space Admin** role to perform bulk delete operations
- Standard Confluence attachment permissions apply to all operations

## Important: Conditional Visibility Is Not a Security Boundary

Conditional Show and Conditional Hide macros change what is **displayed** in the browser. They do not restrict access to the underlying page content.

Users with page-read permission can still access all content via the Confluence REST API, page exports, or the Confluence mobile app - regardless of conditional macro settings.

**For truly sensitive content, use Confluence Page Restrictions to limit read access at the page level.**`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 8. USER GUIDE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `
Content Formatting Macros adds 20+ macros to the Confluence Cloud editor - no separate dashboard, no separate app to open. Everything happens inside a Confluence page in edit mode. Use this guide to find the fastest path for your role.

## Content Author / Technical Writer

You write pages and want richer formatting.

**Start with:**
1. [Quick Start Guide](/apps/content-formatting-confluence/quick-start) - insert your first macro in under 2 minutes
2. [Tab Navigation Overview](/apps/content-formatting-confluence/tab-navigation) - create tabbed layouts from child pages or labels
3. [Alert Macro](/apps/content-formatting-confluence/alert-macro) - highlight important notes, warnings, and tips
4. [How to: Build a Tabbed Knowledge Base Page](/apps/content-formatting-confluence/how-to-tabbed-knowledge-base) - full page workflow

**Best macros to learn first:** Alert · Background · Tab Navigation · Buttons · Advanced Expand

---

## Space Administrator

You manage space structure and want consistent, well-organised content.

**Start with:**
1. [Tab Parent Content Mapper](/apps/content-formatting-confluence/tab-parent-mapper) - auto-generate tabs from child pages (updates automatically as pages are added)
2. [Page Templates](/apps/content-formatting-confluence/page-templates) - apply consistent layouts across a space
3. [Attachment Center Dashboard](/apps/content-formatting-confluence/attachment-center-dashboard) - audit attachments space-wide, find orphans, manage bulk actions
4. [How to: Build a Tabbed Knowledge Base Page](/apps/content-formatting-confluence/how-to-tabbed-knowledge-base) - reference architecture for space-level hubs

---

## IT / Security Team

You need to restrict what different audiences can see on the same page.

**Start with:**
1. [Conditional Show Guide](/apps/content-formatting-confluence/conditional-show) - show content only to a specific Confluence group
2. [Conditional Hide Guide](/apps/content-formatting-confluence/conditional-hide) - hide content from specific groups or anonymous users
3. [Privacy & Access Notes](/apps/content-formatting-confluence/privacy-access) - how macros interact with Confluence permissions
4. [How to: Create Role-Based Content Visibility](/apps/content-formatting-confluence/how-to-role-based-content) - full workflow

---

## Confluence Administrator

You install apps and need to understand what this app accesses.

**Start with:**
1. [Installation & Setup](/apps/content-formatting-confluence/installation-setup) - install from Atlassian Marketplace
2. [Permissions & Access](/apps/content-formatting-confluence/permissions-access) - what the app can and cannot access
3. [Privacy & Access Notes](/apps/content-formatting-confluence/privacy-access) - data residency and scope
4. [Attachment Management & Audit](/apps/content-formatting-confluence/attachment-management) - storage and audit features
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `
A single-page reference for all macros, insertion methods, and key rules.

## How to Insert Any Macro

| Method | Steps |
|---|---|
| **Slash command** | Type \`/\` in the page body → type the macro name → click it |
| **Toolbar insert (+)** | Click **+** in the editor toolbar → search or browse → click the macro |
| **Macro browser** | Click **+** → **Other macros** → browse by category |

## All Macros at a Glance

### Navigation (Tabs)
| Macro | What It Does | Full Reference |
|---|---|---|
| Tab Navigation | Container for tabbed page layouts | [Tab Navigation](/apps/content-formatting-confluence/tab-navigation) |
| Tab Parent Content Mapper | Auto-tabs from child pages | [Parent Mapper](/apps/content-formatting-confluence/tab-parent-mapper) |
| Tab Label Content Mapper | Auto-tabs from pages sharing a label | [Label Mapper](/apps/content-formatting-confluence/tab-label-mapper) |
| Tab Confluence Page Mapper | Manual tab list from selected pages | [Page Mapper](/apps/content-formatting-confluence/tab-page-mapper) |
| Create Custom Tabs | Manual custom tab content | [Custom Tabs](/apps/content-formatting-confluence/create-custom-tabs) |

### Visibility
| Macro | What It Does | Full Reference |
|---|---|---|
| Conditional Show | Show content only to a group / role | [Conditional Show](/apps/content-formatting-confluence/conditional-show) |
| Conditional Hide | Hide content from a group / role | [Conditional Hide](/apps/content-formatting-confluence/conditional-hide) |

### Rich Content
| Macro | What It Does | Full Reference |
|---|---|---|
| Alert | Coloured info / warning / error / success callout | [Alert](/apps/content-formatting-confluence/alert-macro) |
| Background | Coloured or image background section | [Background](/apps/content-formatting-confluence/background-macro) |
| Buttons | Styled CTA link buttons | [Buttons](/apps/content-formatting-confluence/buttons-macro) |
| Advanced Cards | Card-layout content blocks | [Advanced Cards](/apps/content-formatting-confluence/advanced-card-macro) |
| Interactive Banner | Full-width announcement banner | [Interactive Banner](/apps/content-formatting-confluence/interactive-banner-macro) |
| Advanced Expand | Collapsible content sections | [Advanced Expand](/apps/content-formatting-confluence/advanced-expand-macro) |
| Pop-up Dialog | Modal overlay content | [Pop-up Dialog](/apps/content-formatting-confluence/popup-dialog-macro) |
| Progress Bar | Visual completion indicator | [Progress Bar](/apps/content-formatting-confluence/progressbar-macro) |
| Countdown Timer | Deadline or event countdown | [Countdown](/apps/content-formatting-confluence/countdown-macro) |
| Status | Inline coloured status badge | [Status](/apps/content-formatting-confluence/status-macro) |
| Tooltip | Hover-reveal tooltip text | [Tooltip](/apps/content-formatting-confluence/tooltip-macro) |
| User Profile | Display a user's avatar and name | [User Profile](/apps/content-formatting-confluence/user-profile-macro) |
| Numbered Headings | Auto-numbered heading hierarchy | [Numbered Headings](/apps/content-formatting-confluence/numbered-headings-macro) |
| Divider | Styled horizontal divider line | [Divider](/apps/content-formatting-confluence/divider-macro) |
| Footnotes | Numbered footnote references | [Footnotes](/apps/content-formatting-confluence/footnotes-macro) |
| JSON Viewer | Formatted, collapsible JSON display | [JSON Viewer](/apps/content-formatting-confluence/json-viewer-macro) |

### Attachment Management
| Feature | What It Does | Full Reference |
|---|---|---|
| Attachment Center Dashboard | Space-wide attachment audit and inventory | [Dashboard](/apps/content-formatting-confluence/attachment-center-dashboard) |
| Bulk Actions | Delete or move attachments in bulk | [Bulk Actions](/apps/content-formatting-confluence/attachment-bulk-actions) |
| Audit Logs | History of attachment changes | [Audit Logs](/apps/content-formatting-confluence/attachment-audit-logs) |

## Key Rules

- **Tab Navigation cannot be nested inside another Tab Navigation** - use Advanced Expand for secondary grouping within a tab
- **Conditional macros check group names at render time** - group names are case-sensitive and must match exactly as they appear in Confluence Admin → Groups
- **Macro settings save when you click outside the panel** - you still need to Publish the page to make changes visible to others
`,
        },
        {
          slug: "how-to-tabbed-knowledge-base",
          title: "How to: Build a Tabbed Knowledge Base Page",
          content: `
A step-by-step workflow for building a tabbed hub page that organises content across multiple sections - the most common pattern for IT runbooks, product docs, and team wikis.

## Design: Three-Layer Structure

A well-built tabbed page combines three macro layers:

| Layer | Macro | Purpose |
|---|---|---|
| Navigation | Tab Navigation + mapper | Tabs across the top, each tab = one content section |
| Visibility | Conditional Show / Hide | Different content per audience within the same tab |
| Formatting | Alert, Background, Buttons, Cards | Visual richness and callouts within each section |

## Step 1 - Prepare Your Child Pages (for Auto-Tab Approach)

1. Create a parent page in Confluence (this will be your hub)
2. Create child pages under it - one per tab section (e.g., Overview, Setup Guide, Troubleshooting, Reference)
3. Name each child page clearly - the page title becomes the tab label

→ [Tab Parent Content Mapper](/apps/content-formatting-confluence/tab-parent-mapper)

## Step 2 - Insert Tab Navigation + Parent Mapper

1. Open the hub page in edit mode
2. Type \`/\` → search **Tab Navigation** → insert it
3. Inside the Tab Navigation body, type \`/\` → search **Tab Parent Content Mapper** → insert it
4. In the config panel, confirm the parent page (defaults to current page)
5. Set Sort Order to **Manual** (page tree order) or **Alphabetical**
6. Preview - each child page appears as a tab automatically

> Tabs update automatically when child pages are added, renamed, or reordered in the page tree.

→ [Tab Navigation Overview](/apps/content-formatting-confluence/tab-navigation)

## Step 3 - Add Formatting Inside Tabs

Edit each child page and add rich formatting macros:

- Use **Alert** for warnings, notes, and important callouts
- Use **Background** to visually distinguish different sections within a tab
- Use **Buttons** to link to related Jira boards, external tools, or other pages
- Use **Advanced Expand** to collapse long reference tables or optional details

→ [Alert Macro](/apps/content-formatting-confluence/alert-macro) · [Background Macro](/apps/content-formatting-confluence/background-macro)

## Step 4 - Add Audience Visibility (Optional)

If different teams need to see different content within the same tab:

1. On the child page (in edit mode), select the content meant for a specific group
2. Type \`/\` → **Conditional Show** → insert it around the selected content
3. In the config panel: Condition Type = **Group**, Group Name = exact group name from Confluence Admin
4. Test in View mode with a group member and a non-member

→ [How to: Create Role-Based Content Visibility](/apps/content-formatting-confluence/how-to-role-based-content)

## Step 5 - Publish and Verify

1. Publish each child page
2. Publish the hub page
3. Verify tabs appear correctly in view mode
4. Test tab navigation - each tab should load the corresponding child page content inline

## Maintaining the Hub

- **Add a new tab:** Create a new child page under the parent - it appears automatically
- **Remove a tab:** Delete or move the child page out of the parent
- **Reorder tabs:** Drag child pages in the Confluence page tree to reorder them
`,
        },
        {
          slug: "how-to-role-based-content",
          title: "How to: Create Role-Based Content Visibility",
          content: `
A workflow for showing or hiding specific content sections based on who is viewing the page - without creating separate pages for each audience.

→ [Conditional Show Guide](/apps/content-formatting-confluence/conditional-show) · [Conditional Hide Guide](/apps/content-formatting-confluence/conditional-hide)

## When to Use This

| Scenario | Macro |
|---|---|
| Show admin-only notes inside a public runbook | Conditional Show (group = confluence-admins) |
| Hide internal pricing from external users | Conditional Hide (group = external-users) |
| Show different onboarding steps per team | Conditional Show (two blocks, different groups) |
| Hide draft content from anonymous / logged-out users | Conditional Hide (Login Status = Anonymous) |

## Step 1 - Identify Your Groups

1. Go to **Confluence Admin → Groups** (or **Site Admin → Groups** for cloud)
2. Note the **exact group name** - Conditional macros are case-sensitive
3. If a group doesn't exist, create it in Confluence Admin and assign the right users

## Step 2 - Wrap Content with Conditional Show

To show content **only** to a specific group:

1. Open the page in edit mode
2. Select the content block you want to restrict
3. Type \`/\` → **Conditional Show** → insert it (wraps the selected content)
4. In the config panel:
   - **Condition Type:** Group
   - **Group Name:** Paste the exact group name
5. Save the macro and Publish the page
6. Test: log in as a group member (visible) and a non-member (hidden)

## Step 3 - Wrap Content with Conditional Hide

To hide content **from** a specific group:

1. Select the content to hide
2. Type \`/\` → **Conditional Hide** → insert it
3. Config: Condition Type = **Group**, Group Name = the group to hide from
4. Publish and test

## Step 4 - Stack Multiple Conditions on the Same Page

You can place multiple Conditional Show macros side by side to show different content to different audiences on the same page:

\`\`\`
[Conditional Show - Group: engineering-team]
  → Engineering-specific setup steps
[Conditional Show - Group: product-team]
  → Product team workflow steps
[Content with no conditional macro]
  → Visible to everyone
\`\`\`

Each block is independent - users in multiple groups see all content that matches any of their groups.

## Step 5 - Use Login Status for Public Pages

For pages accessible to anonymous (logged-out) users:

- **Condition Type: Login Status**
  - **Authenticated:** Only logged-in users see this
  - **Anonymous:** Only logged-out visitors see this (e.g., a "Please log in" message)

## Verification Checklist

- [ ] Group name matches exactly (copy-paste from Confluence Admin)
- [ ] Tested with a user IN the target group (content shows correctly)
- [ ] Tested with a user NOT in the target group (content is hidden)
- [ ] Page published after saving macros
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
Non-obvious tips that save time and prevent common mistakes.

## Tab Navigation

- **Use the Parent Mapper for living hubs.** Tabs generated from child pages update automatically - add or rename a child page and the tab appears without editing the hub page. Custom Tabs require manual updates every time.
- **Tab Navigation cannot be nested.** If you need collapsible subsections inside a tab, use Advanced Expand - it's designed for secondary grouping within a tab body.
- **Reorder tabs by reordering child pages** in the Confluence page tree (drag and drop). The tab order follows the page tree order when using Manual sort.

## Conditional Visibility

- **Group names are case-sensitive.** Copy the group name directly from Confluence Admin → Groups. A single character difference causes the condition to silently fail - content becomes visible to everyone (Conditional Show fails open, not closed).
- **Test with two browser sessions.** Open an incognito window logged in as a non-group member. Don't rely on memory of who can see what - verify every condition.
- **Conditional macros enforce visibility, not access.** They hide content from the rendered view. The underlying page is still accessible to anyone with page view permission. For true access control, use Confluence page restrictions.

## Rich Content Macros

- **Alert types map to meaning, not just colour.** Use Info (blue) for context, Warning (yellow) for caution, Error (red) for blockers, Success (green) for completed steps. Consistent usage helps readers scan quickly.
- **Background + Alert creates a highlighted section.** Wrap an Alert inside a Background macro to create a visually distinct callout area - useful for critical procedures or step-by-step guides.
- **Use Buttons for all external links in runbooks.** Plain hyperlinks are easy to miss in dense documentation. Buttons with clear labels (e.g., "Open Jira Board", "View Monitoring Dashboard") reduce navigation friction.

## Attachments

- **Run the Attachment Center audit before space migrations.** Orphaned attachments that aren't referenced in any page content are the most common source of unexpected storage bloat during migration.
- **Bulk delete only after reviewing the orphan list.** Orphan detection flags attachments not referenced in page body content - but some may be linked from external systems or emails. Review before bulk-deleting.

## General

- **Macro settings save when you click outside the panel, but only Publish makes them live.** Draft changes are visible in your edit session but not to other users until you Publish.
- **Use the Page Templates feature to enforce consistency.** Create a template for each content type (runbook, decision record, meeting notes) with your standard macro layout pre-built - space members apply the template instead of recreating the structure.
`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 2. ADVANCED CONTENT NAVIGATION (TABS)
    // ═══════════════════════════════════════════════════════════════
    {
      id: "tab-navigation",
      title: "Advanced Content Navigation (Tabs)",
      articles: [
        {
          slug: "tab-navigation",
          title: "Tab Navigation Overview",
          content: `# Advanced Content Navigation

<img src="/images/content-formatting-assets/tab-navigation.png" alt="Tab Navigation screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Tab Macros?

Tab macros let you display multiple sections of content inside a single Confluence page using a familiar tabbed interface. Readers click a tab label to switch views - no page navigation required.

## Two Ways to Create Tabs

### Method 1 - Content Mapper Tabs (Recommended for Existing Pages)

Insert **Tab Navigation** and pair it with one of three mapper macros:

| Mapper | Use When |
|---|---|
| Tab Parent Content Mapper | Tabs should auto-populate from child pages of a parent |
| Tab Label Content Mapper | Tabs should auto-populate from pages sharing a label |
| Tab Page Mapper | You want to hand-pick specific pages as tabs |

Mapper tabs are dynamic - they update automatically when child pages, labels, or page lists change.

### Method 2 - Custom Tabs (Manual Content)

Insert **Tab Navigation** without a mapper, and add **Custom Tab** containers inside it. Write content directly in each tab. Use this when content doesn't already exist as separate pages.

## Common Controls (All Tab Types)

| Setting | Options | Default |
|---|---|---|
| Tab style | Underline, Pill, Box | Underline |
| Tab position | Top, Left | Top |
| Default open tab | First | First |

## Behavior Notes

- The active tab state is not persisted in the URL - refreshing the page always opens the default tab
- All tab content is rendered in the DOM - Confluence search will find text inside any tab
- Tab macros are fully nestable with other formatting macros (Alert, Background, Cards, etc.) inside each tab's content area`,
        },
        {
          slug: "tab-parent-mapper",
          title: "Tab Parent Content Mapper",
          content: `# Tab Parent Content Mapper Guide

<img src="/images/content-formatting-assets/tab-parent-mapper.png" alt="Tab Parent Content Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Parent Content Mapper automatically creates one tab for each **child page** of a specified Confluence parent page. When child pages are added, renamed, or removed, the tabs update automatically - no manual editing required.

## When to Use It

- You already have (or plan to create) separate child pages for each topic
- You want tabs to stay in sync with your page hierarchy automatically
- Teams maintain individual pages and a hub page should aggregate them as tabs

## How to Set It Up

1. Insert the **Tab Navigation** macro on your hub page
2. Inside it, insert the **Tab Parent Content Mapper** macro
3. In the config panel, set the **Parent Page** - either the current page or another page in the space
4. Choose sort order and any filtering options
5. Preview and publish

## Settings Reference

| Setting | Description | Default |
|---|---|---|
| Parent Page | The page whose children become tabs. You can type a page name. | Current page |
| Sort Order | Alphabetical, Created Date, Modified Date | Manual (page tree order) |
| Max Tabs | Maximum number of child pages to show as tabs | All |

## Important Behaviors

- **Access control respected**: If a viewer doesn't have read access to a child page, that tab does not appear for them
- **Draft pages are excluded**: Only published child pages appear as tabs`,
        },
        {
          slug: "tab-label-mapper",
          title: "Tab Label Content Mapper",
          content: `# Tab Label Content Mapper Guide

<img src="/images/content-formatting-assets/tab-label-mapper.png" alt="Tab Label Content Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Label Content Mapper creates tabs based on **Confluence page labels**. Each unique label value (or a set of label values you configure) becomes a tab, and all pages with that label appear as the tab's content.

## When to Use It

- Pages are already organized by label
- You want a cross-hierarchy tab view that spans multiple parent pages
- You want to let page authors control which tab their page appears in by adding/removing a label

## How to Set It Up

1. Apply consistent labels to the pages you want to group (e.g., \`v1\`, \`v2\`, \`v3\` for release notes)
2. Insert **Tab Navigation** on your index page
3. Inside it, insert **Tab Label Content Mapper**
4. In the config panel, enter the label(s) 

## Two Configuration Modes

### Mode 1 - One Label Per Tab
Enter each label separately. Pages tagged with that label appear in that tab.

### Mode 2 - CQL Filter
Enter a CQL query to define which pages are eligible, then group by a specific label.

Example CQL: \`space = "TEAM" AND label in ("release") ORDER BY created DESC\`

## Settings Reference

| Setting | Description |
|---|---|
| Labels | Comma-separated list of labels; each becomes one tab |
| Space | Restrict pages to a specific space (default: current space) |
| Sort | How pages within each tab are sorted |
| Max Pages Per Tab | Limit pages shown per tab |

## Behaviors

- Pages with multiple matching labels appear in each matching tab
- Removing a label from a page removes it from that tab automatically
- Labels are case-insensitive in tab matching`,
        },
        {
          slug: "tab-page-mapper",
          title: "Tab Confluence Page Mapper",
          content: `# Tab Confluence Page Mapper Guide

<img src="/images/content-formatting-assets/tab-page-mapper.png" alt="Tab Confluence Page Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Page Mapper lets you **hand-pick specific pages** from anywhere in the Confluence space to appear as tabs. Unlike the Parent or Label mappers, this one does not auto-update - you control exactly which pages are included and in what order.

## When to Use It

- You want precise control over which pages appear as tabs
- The pages you're grouping don't share a parent or a label
- You need tabs that pull from multiple different spaces
- The auto-updating behavior of other mappers would include pages you don't want

## How to Set It Up

1. Insert **Tab Navigation** on your page
2. Inside it, insert **Tab Page Mapper**
3. In the config panel, add pages one by one - search by title or paste page URLs
4. Drag to reorder the page list
5. Preview and publish

## Known Behavior

If a page in the list is deleted, the tab for that page disappears silently. Check your page list periodically if content is maintained by others.`,
        },
        {
          slug: "create-custom-tabs",
          title: "Create Custom Tabs",
          content: `# Create Custom Tabs Guide

<img src="/images/content-formatting-assets/create-custom-tabs.png" alt="Create Custom Tabs screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Custom Tabs?

Custom Tabs let you write content **directly inside each tab** instead of pulling from other pages. Use this when the content you want to tab doesn't exist as separate Confluence pages, or when you want full control over tab content without creating child pages.

## When to Use Custom Tabs

- New content being written for the first time
- Content that doesn't make sense as standalone pages
- Small amounts of tabbed content where separate pages would be overkill

## How to Create Custom Tabs

1. Insert the **Tab Navigation** macro on your page
2. Inside it, do NOT insert a mapper - instead, write a element name in the macro body
3. Each element name adds a new tab container
4. Click on a tab to select it, then type or insert content inside it
5. Drag tabs up/down to reorder
6. Publish the page

## Three Content Types Supported in Custom Tabs

### Type 1 - Rich Text
Type directly inside the tab. Use all standard Confluence formatting: headings, tables, lists, code blocks, inline images.

### Type 2 - Included Pages
Use the Confluence "Include Page" macro inside a tab to pull in another page's content. This is a middle ground between Custom Tabs and mapper tabs - you pick the pages but include their content inline.

## Tab Limits

- No enforced maximum number of tabs, but more than 10 tabs becomes difficult to navigate on narrow screens
- Tab labels should be kept short (under 20 characters) to avoid wrapping
- All custom tab content is stored on the current page - it is not accessible via direct URL`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 3. DYNAMIC VISIBILITY
    // ═══════════════════════════════════════════════════════════════
    {
      id: "dynamic-visibility",
      title: "Dynamic Visibility",
      articles: [
        {
          slug: "dynamic-visibility",
          title: "Dynamic Visibility Overview",
          content: `
## What Is Conditional Visibility?

Conditional visibility macros let you show or hide sections of content based on **who is viewing the page**. A single page can display different content to different audiences - admins see internal notes, guests see the public version, and managers see the compensation table.

## Two Macros

| Macro | Behavior |
|---|---|
| **Conditional Show** | Content is hidden by default; shown only to users who match the condition |
| **Conditional Hide** | Content is visible by default; hidden only for users who match the condition |

## Condition Types

| Condition | Description |
|---|---|
| Confluence Group | Show/hide based on Confluence group membership (e.g., \`confluence-admins\`) |
| Space Role | Show/hide based on space role: Space Admin or Space User |
| Login Status | Show to logged-in users only |

## Common Patterns

**Pattern 1 - Admin-only notes**: Conditional Show, condition: Space Admin.

**Pattern 2 - Manager-only HR content**: Conditional Show, condition: group = \`hr-managers\`.

## Important Warning

> **Conditional visibility is a UI control, not a security boundary.**
>
> Users with page-read permission can still access all page content via the Confluence REST API, regardless of Conditional Show/Hide settings. These macros change what is *displayed* in the browser - they do not change who has *access* to the underlying content.
>
> For truly sensitive content, use **Confluence Page Restrictions** to limit read access at the page level.`,
        },
        {
          slug: "conditional-hide",
          title: "Conditional Hide Guide",
          content: `# Conditional Hide Guide

<img src="/images/content-formatting-assets/conditional-hide.png" alt="Conditional Hide screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Conditional Hide macro wraps content that should be **visible to most users but hidden from a specific group or condition**. Think of it as "hide this from X."

## Step-by-Step Setup

1. Click on edit button.
2. Click **+** (Insert) → search for **Conditional Hide**.
3. Write the content inside the macro body.
4. In the config panel on the right, configure the condition.
5. Click on Save button.
6. In View mode, log in as a user who matches the condition - the content should be hidden for them


## Multiple Conditions

You can stack multiple Conditional Hide macros to hide content from multiple groups. Each macro is evaluated independently.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| Content still visible when it shouldn't be | Group name typo | Check exact group name in Confluence People & Groups settings |
| Content hidden from everyone | Condition set to a group all users belong to | Narrow the group condition |
| Content visible in Confluence API response | Expected - conditional macros are UI-only | Use page restrictions for access control |
| No effect in edit preview | Preview in edit mode shows all content regardless of conditions | Switch to View mode to test |`,
        },
        {
          slug: "conditional-show",
          title: "Conditional Show Guide",
          content: `# Conditional Show Guide

<img src="/images/content-formatting-assets/conditional-show.png" alt="Conditional Show screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Conditional Show macro wraps content that should be **hidden by default and shown only to a specific group or condition**. Think of it as "show this only to X."

## Step-by-Step Setup

1. Click on Edit button
2. Click **+** (Insert) → search for **Conditional Show**
3. Write the content inside the macro body.
4. In the config panel on the right, configure the condition.
5. Click on Save button.
5. Preview in View mode - sign in as a user in the target group to confirm visibility


## Multiple Conditions

You can stack multiple Conditional Hide macros to hide content from multiple groups. Each macro is evaluated independently.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| Content not showing for target group | Group name does not exactly match Confluence group | Verify group name in Confluence Admin → Groups |
| Content showing to everyone | Condition set to a group everyone belongs to | Use a more specific group |
| Edit mode always shows content | Expected behavior - edit mode bypasses visibility conditions | Test in View mode |`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 4. RICH CONTENT FORMATTING
    // ═══════════════════════════════════════════════════════════════
    {
      id: "rich-content",
      title: "Rich Content Formatting",
      articles: [
        {
          slug: "rich-content-formatting",
          title: "Rich Content Formatting Overview",
          content: `
## Overview

Content Formatting Macros includes 18 macros for enhancing the visual quality, interactivity, and clarity of Confluence pages. These macros require no custom CSS or developer skills - everything is configured through the macro's settings panel in the Confluence editor.

## Full Macro List

| Macro | What It Does |
|---|---|
| Buttons | Styled link buttons |
| Background | Section background color or image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal text |
| Progress Bar | Visual percentage indicator |
| Footnotes | Inline numbered footnotes |
| Pop-up Dialog | Modal overlay triggered by a link or button |
| Advanced Expand | Styled collapsible section |
| Advanced Cards | Structured content cards |
| Interactive Banner | Full-width hero/announcement banner |
| Numbered Headings | Auto-number heading levels |
| Divider | Styled horizontal separator |
| Countdown Timer | Live countdown to a target date |
| User Profile | Confluence user info card |
| Status Macro | Color-coded status badge |
| JSON Viewer | Formatted JSON display |

## General Usage Tips

- All macros are available in the Confluence editor via the **+** (Insert) button or the **/command** inline menu
- Most macros have a **Preview** mode in the editor - click the macro to see a live preview
- Macros can be nested inside each other and inside tab containers
- Configuration is done through the settings panel that opens when you click the macro in the editor`,
        },
        {
          slug: "buttons-macro",
          title: "Buttons Macro",
          content: `# Buttons Macro

<img src="/images/content-formatting-assets/buttons-macro.png" alt="Buttons Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Buttons macro creates styled call-to-action buttons on any Confluence page. Buttons can link to internal Confluence pages, external URLs, email addresses, or anchors on the same page.

## Configuration Options

| Setting | Options |
|---|---|
| Label | Button text (required) |
| URL / Link | Internal page, external URL, \`mailto:\` link, or \`#anchor-id\` |
| Style | Primary (filled), Secondary (outlined), Danger (red), Success (green), Ghost (transparent) |
| Size | Small, Medium, Large |
| Icon | Optional icon from the built-in icon set (left or right of label) |
| Open in new tab | Yes / No |

## Adding Multiple Buttons

Insert multiple Button macros side by side. They will flow inline with automatic spacing.

## Common Use Cases

- **"Download" or "Get Started" CTA** at the top of a documentation page
- **Links to related systems** (Jira board, Confluence space, external tool) at the bottom of a runbook
- **Navigation buttons** replacing manually written "see also" links
- **Step-navigation** in onboarding pages: "Previous Step" and "Next Step"

## Best Practices

- Keep button labels short (2–5 words)
- Use Primary style for the main action, Secondary for alternatives
- Don't use Danger style for navigation - reserve it for genuinely destructive or critical actions`,
        },
        {
          slug: "background-macro",
          title: "Background Macro",
          content: `# Background Macro

<img src="/images/content-formatting-assets/background-macro.png" alt="Background Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Background macro applies a background color, gradient, or image to any section of a Confluence page. Use it to visually separate content zones, highlight important sections, or create a branded look.

## Configuration Options

| Setting | Options | Notes |
|---|---|---|
| Background Type | Color, Gradient, Image | |
| Color | Color picker or hex value | For Color type |
| Gradient | Start color, end color, direction | For Gradient type |
| Image URL | Publicly accessible URL | For Image type; Confluence attachment URLs may not work |
| Border Radius | in Pixel | Rounded corners |
| Text Color | Color picker or hex value | Ensures text readability on dark backgrounds |
| Min Height | Pixel value | Optional minimum height |

## Usage Notes

- Content inside the Background macro is fully editable - insert any Confluence content or other macros inside it
- The Image background type requires a publicly accessible URL - images hosted on Confluence as attachments may not render reliably due to auth requirements
- On mobile, background images fall back to the configured fallback color

## Common Patterns

**Section separator**: Use alternating white and light-gray Background macros to visually separate major page sections without borders.

**Announcement zone**: Blue background macro at the top of a space home page for team announcements.

**Warning zone**: Light-yellow background wrapping a critical process step that requires extra attention.`,
        },
        {
          slug: "alert-macro",
          title: "Alert Macro",
          content: `# Alert Macro

<img src="/images/content-formatting-assets/alert-macro.png" alt="Alert Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Alert macro creates a styled banner for informational messages, warnings, errors, or success confirmations. Alerts have a colored left border and icon that immediately signals the message type to the reader.

## Alert Types

| Type | Use For |
|---|---|
| Info | General information, notes, tips |
| Warning | Caution, important considerations |
| Error | Errors, failures, destructive actions |
| Success | Confirmations, completed steps |
| Note | Secondary notes, editorial commentary |

## Configuration Options

| Setting | Options |
|---|---|
| Type | Info, Warning, Error, Success, Note |
| Title | Optional bold heading for the alert |
| Body | Rich text content (supports inline formatting, links, lists) |
| Dismissible | Yes / No - if Yes, reader can close the alert |
| Icon | Show or hide the type icon |

## Known Limitations

- The Dismissible option persists the dismissed state in the browser's local storage - it resets if the user clears browser data or switches devices
- Alerts cannot contain block-level macros (tables, code blocks) in the title field - only the body supports rich content

## Best Practices

- Use Info for routine tips and asides
- Reserve Error (red) for genuine error states or dangerous actions
- Keep alert body text concise - if you need more than 3 sentences, consider an Advanced Expand section instead`,
        },
        {
          slug: "tooltip-macro",
          title: "Tooltip Macro",
          content: `# Tooltip Macro

<img src="/images/content-formatting-assets/tooltip-macro.png" alt="Tooltip Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Tooltip macro wraps a word or phrase with a hover tooltip that reveals additional context - a definition, explanation, or note. The tooltip appears on mouse hover and disappears when the cursor moves away.

## Configuration

| Setting | Description |
|---|---|
| Trigger Text | The word or phrase that is underlined/highlighted as the tooltip trigger |
| Tooltip Content | The text that appears on hover (plain text only) |
| Position | Top, Bottom, Left, Right (default: Top) |
| Style | Default (dotted underline), Bold, or Italic trigger styling |

## When to Use Tooltips

- **Acronym definitions**: Wrap "JQL" with a tooltip explaining "Jira Query Language"
- **Technical term glossary**: Inline definitions without disrupting reading flow
- **Contextual hints**: Indicate why a field is mandatory

## Limitations

- Tooltip content is plain text only - no links, formatting, or macros inside a tooltip
- Tooltips are not visible on mobile (touch devices have no hover state) - provide an alternative explanation in the body text for mobile readers
- Screen readers may not announce tooltip content - use tooltips to supplement, not replace, visible text

## Best Practice

Use tooltips sparingly. If the definition is important enough that most readers need it, put it in the main text. Tooltips are best for optional context that would interrupt reading if always visible.`,
        },
        {
          slug: "progressbar-macro",
          title: "Progress Bar Macro",
          content: `# Progress Bar Macro

<img src="/images/content-formatting-assets/progressbar-macro.png" alt="Progress Bar Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Progress Bar macro creates a **multi-step, cross-page progress bar** in Confluence. Each step macro is placed on a separate page. Together they render a unified visual bar that shows readers where they are in a multi-page process - like an onboarding flow, a tutorial series, or a multi-phase procedure.

The bar is automatically scoped to a parent page: all step macros that share the same parent page belong to the same progress bar, with no manual ID configuration required.

## How It Works

1. Add a **Progress Bar** macro to each page that is part of the flow.
2. Configure each macro with its step title, step number, and destination (the Confluence page this step links to).
3. When a reader views any page in the flow, the macro with the **lowest step number** renders the full progress bar above the content.
4. The active step (highlighted in the bar) is determined by matching the current page to a step's destination.
5. Readers can click any step in the bar to navigate directly to that page.

## Configuration Options

| Setting | Description | Required |
|---|---|---|
| Current step | Mark this step as the active position in the bar | No |
| Step title | Label shown in the bar for this step (max 50 characters) | Yes |
| Destination | The Confluence page this step navigates to on click | Yes |
| Step number | Position of this step in the sequence (1–100) | Yes |

## Visual Behavior

- **Blue dot** - shown on the current (active) step and the first step when no step is active yet
- **Gray dot** - shown on steps that come after the active step (not yet completed)
- **No dot** - completed steps (before the active step) show no dot; the blue line covers them
- **Blue line** - drawn from the first step to the active step to show progress
- **Step color** - defaults to \`#0052cc\`; inherits from the color set when saving a step

## Scope & Bar Identity

The macro automatically groups steps by shared parent page. You do not need to assign a bar ID manually. Steps on pages that share the same parent are treated as one progress bar. This means you can run independent progress bars across different sections of your space without any naming conflicts.

## Setup Example

To build a 3-step onboarding flow:

1. Create pages: **Step 1 – Welcome**, **Step 2 – Setup**, **Step 3 – Complete** - all as children of an **Onboarding** parent page.
2. On **Step 1 – Welcome**: add a Progress Bar macro, set Step title = "Welcome", Step number = 1, Destination = the Welcome page.
3. On **Step 2 – Setup**: add a Progress Bar macro, set Step title = "Setup", Step number = 2, Destination = the Setup page.
4. On **Step 3 – Complete**: add a Progress Bar macro, set Step title = "Complete", Step number = 3, Destination = the Complete page.
5. When any of these pages is viewed, the bar appears above the content showing all three steps with the current page highlighted.

## Common Use Cases

- Multi-page onboarding or employee orientation flows
- Step-by-step tutorial series spread across Confluence pages
- Multi-phase project procedures with one page per phase
- Training paths where each module lives on its own page`,
        },
        {
          slug: "footnotes-macro",
          title: "Footnotes Macro",
          content: `# Footnotes Macro

<img src="/images/content-formatting-assets/footnotes-macro.png" alt="Footnotes Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Footnotes macro inserts superscript reference numbers inline with text, and collects the corresponding footnote definitions at the bottom of the section (or page). Think of it as academic citation style for Confluence pages.

## Setup (Two-Part)

### Part 1 - Inline Footnote Reference
Insert **Footnote** macro at the point in the text where the reference number should appear. Type the footnote definition inside the macro.

### Part 2 - Footnote List
Insert **Footnote List** macro at the bottom of the section or page. This renders the numbered list of all footnote definitions.

## Scope Rules

- Footnote numbers reset to 1 at each Footnote List macro
- If you use tabs, footnotes inside a tab share numbering with the current page scope
- For multi-tab pages, place one Footnote List macro at the bottom of each tab if you want tab-scoped numbering, or one Footnote List at the bottom of the page for page-wide numbering

## Limitations

- Footnote content is plain text only - no links or macros inside footnote definitions
- Footnotes are not auto-sorted - they appear in the order they are inserted on the page

## Use Cases

- Legal and compliance documents with citation requirements
- Research summaries referencing source material
- Technical docs with versioning notes
- Policy pages with exception notes`,
        },
        {
          slug: "popup-dialog-macro",
          title: "Pop-up Dialog Macro",
          content: `# Pop-up Dialog Macro

<img src="/images/content-formatting-assets/popup-dialog-macro.png" alt="Pop-up Dialog Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Pop-up Dialog macro creates a modal overlay that opens when a reader clicks a trigger (a link, button, or image on the page). The dialog can contain any rich content - text, images, tables, other macros.

## Setup

1. Insert the **Pop-up Dialog** macro
2. The macro has two zones:
   - **Trigger zone**: What the reader sees and clicks (a text link, an image, or a Button macro)
   - **Dialog content zone**: What appears inside the modal when triggered
3. Place your trigger element in the Trigger zone
4. Write or insert your dialog content in the Dialog Content zone
5. Configure dialog size and heading in the settings panel

## Configuration Options

| Setting | Options |
|---|---|
| Dialog Title | Text that appears in the modal header |
| Size | Small, Medium, Large, Full-screen |
| Close on backdrop click | Yes / No |
| Show close button | Yes / No |

## Common Use Cases

- **Definitions**: A "What is this?" link beside a complex term opens a definition modal
- **Quick reference**: A "Show accepted values" link opens a reference table without leaving the page
- **Image preview**: Click a thumbnail to open a full-size image in a modal
- **Step detail**: "Learn more" link beside a summary opens a detailed step breakdown

## Limitation
Pop-up dialogs do not work well as navigation - avoid using them for primary content. If the content is important enough that most readers need it, put it in the page body or a tab, not a dialog.`,
        },
        {
          slug: "advanced-expand-macro",
          title: "Advanced Expand Macro",
          content: `# Advanced Expand Macro

<img src="/images/content-formatting-assets/advanced-expand-macro.png" alt="Advanced Expand Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Advanced Expand macro creates a collapsible content section with a styled header. Unlike the standard Confluence Expand macro, Advanced Expand offers styling options for the header (color, icon, size) and supports rich content inside the body.

## Configuration Options

| Setting | Options |
|---|---|
| Header Text | The clickable title of the expand section |
| Header Style | Default, Bold, H2, H3, H4 |
| Header Color | Color picker or hex value |
| Left Icon | Optional icon before the header text |
| Right Icon | Expand/collapse arrow style |
| Default State | Collapsed or Expanded |
| Body Background | Optional background color for the expanded body |
| Border | None, Subtle, Visible |

## Expand Styles

**Default**: Plain text header with standard expand arrow.

**Styled Header (Bold, H2–H4)**: Use when the expand section should look like a heading in the page hierarchy.

**Colored Header**: Use to color-code expand sections by category (e.g., blue for setup steps, green for verification, red for rollback steps).

## Common Use Cases

- **FAQ pages**: Each question is an expand header; answers collapse until clicked
- **Long runbooks**: Collapse less-common paths by default
- **Step-by-step guides**: Show one step at a time to reduce cognitive load
- **Reference tables**: Collapse large reference tables that most readers don't need on every visit`,
        },
        {
          slug: "advanced-card-macro",
          title: "Advanced Cards Macro",
          content: `# Advanced Cards Macro

<img src="/images/content-formatting-assets/advanced-card-macro.png" alt="Advanced Cards Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Advanced Cards macro creates structured content cards - rectangular panels with optional header, body text, image, and link. Cards can be arranged in grid layouts to create visual hub pages.

## Card Layout Options

| Layout | Description |
|---|---|
| Single column | Full-width card |
| 2-column grid | Two cards side by side |
| 3-column grid | Three cards per row |
| Auto-flow | Cards wrap automatically based on container width |

## Card Configuration Options

| Setting | Description |
|---|---|
| Title | Card header text |
| Body | Rich text body content |
| Image | URL or Confluence attachment for a card image (top, left, or background) |
| Image Position | Top, Left, Right |
| Link | Optional URL - makes the entire card clickable |
| Footer Text | Optional small text at the card bottom |
| Background Color | Card background |
| Border | None, Subtle, Visible, Accent (colored left border) |
| Shadow | None, Small, Medium, Large |
| Badge | Optional badge label in the card corner |

## Common Use Cases

- **Space home page**: Cards for each team, product, or topic area - each card links to a sub-space or page
- **Product catalog**: One card per product with logo, description, and "Learn More" button
- **Team directory**: Cards for each team member with photo, name, and role
- **Resources hub**: Cards linking to key documents, forms, or systems`,
        },
        {
          slug: "interactive-banner-macro",
          title: "Interactive Banner Macro",
          content: `# Interactive Banner Macro

<img src="/images/content-formatting-assets/interactive-banner-macro.png" alt="Interactive Banner Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Interactive Banner macro creates a full-width announcement or hero banner at the top (or anywhere) of a Confluence page. Banners support background images or colors, a headline, subtitle, and call-to-action buttons.

## Configuration Options

| Setting | Options / Description |
|---|---|
| Headline | Main bold text |
| Subtitle | Secondary text below headline |
| Background Type | Color, Gradient, or Image URL |
| Background Color | Color picker / hex |
| Text Color | Light or Dark (ensure contrast) |
| Height | Small (80px), Medium (160px), Large (240px), Hero (360px) |
| Alignment | Left, Center, Right |
| CTA Button 1 | Label + URL + style |
| CTA Button 2 | Label + URL + style (optional second button) |
| Overlay Opacity | 0–80% dark overlay on image backgrounds for text readability |

## Common Use Cases

- **Space home announcements**: "Q3 Planning starts this week - see the schedule"
- **Event banners**: Conference, all-hands, or product launch announcements
- **Onboarding welcome**: Welcome message at the top of a new-hire onboarding space
- **Status banners**: "This space is archived" or "Documentation is being updated"

## Combining with Countdown Timer
Place a Countdown Timer macro inside the banner subtitle area for a live event countdown embedded in the announcement.

## Mobile Rendering
On mobile, the banner height is automatically reduced and text size adjusts. Background images scale to cover the banner area.`,
        },
        {
          slug: "numbered-headings-macro",
          title: "Numbered Headings Macro",
          content: `# Numbered Headings Macro

<img src="/images/content-formatting-assets/numbered-headings-macro.png" alt="Numbered Headings Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Numbered Headings macro automatically adds hierarchical numbers to all headings on a page (1, 1.1, 1.1.1, etc.) without manually typing them. If you add or remove a heading, numbering updates automatically on next page view.

## When to Use

- Legal or compliance documents where section references must be precise (e.g., "see section 3.2.1")
- Long technical specifications with deeply nested sections
- Project plans or proposals with numbered deliverables
- Any document where "refer to section X" needs to be unambiguous

## How to Use

1. Insert the **Numbered Headings** macro anywhere on the page (typically at the top of the content area)
2. The macro applies numbering to all headings on the page from that point forward
3. No other configuration is required - heading levels (H1, H2, H3) map to 1, 1.1, 1.1.1

## Configuration Options

| Setting | Description |
|---|---|
| Start Level | Which heading level to begin numbering (default: H2) |
| Max Depth | How many heading levels deep to number (default: all) |
| Separator | Character between number segments (default: .) |
| Prefix | Optional text before the first number (e.g., "Section ") |

## Behavior Notes

- Numbering is applied at view time - the heading text in the editor is unchanged
- The macro affects headings across the entire page, including content inside tabs and expand sections
- If multiple Numbered Headings macros are inserted on one page, only the first takes effect`,
        },
        {
          slug: "divider-macro",
          title: "Divider Macro",
          content: `# Divider Macro

<img src="/images/content-formatting-assets/divider-macro.png" alt="Divider Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Divider macro inserts a styled horizontal separator between page sections. It goes beyond the standard Confluence horizontal rule with multiple visual styles and spacing options.

## Three Divider Types

### Type 1 - Line
A simple horizontal line. Configurable color, thickness (1–8px), and width (25%, 50%, 75%, 100%).

### Type 2 - Dots
A row of evenly spaced dots. Configurable dot size, color, and spacing.

### Type 3 - Gradient
A line that fades from a color to transparent at both ends. Configurable color and width.

## Configuration Options

| Setting | Options |
|---|---|
| Type | Line, Dots, Gradient |
| Color | Color picker or hex |
| Thickness | 1–8px (Line type only) |
| Width | 25%, 50%, 75%, 100% |
| Alignment | Left, Center, Right |
| Top Spacing | None, Small, Medium, Large |
| Bottom Spacing | None, Small, Medium, Large |

## When to Use

- Between major sections of a long page where a heading alone isn't enough visual separation
- In cards or background sections to separate a header from body content
- As a footer separator before contact information or navigation buttons`,
        },
        {
          slug: "countdown-macro",
          title: "Countdown Timer Macro",
          content: `# Countdown Timer Macro

<img src="/images/content-formatting-assets/countdown-macro.png" alt="Countdown Timer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Countdown Timer macro displays a live countdown to a specific date and time. The timer updates in real time as the page is viewed.

## Three Display Styles

### Style 1 - Compact
Shows "X days, X hours, X minutes, X seconds" in a single line. Suitable for embedding in banners or cards.

### Style 2 - Block (Flip Clock)
Large block-style display with separate panels for days, hours, minutes, seconds. Best as a hero element.

### Style 3 - Text Only
Renders as inline text: "3 days remaining" or "Event starts in 2 hours 15 minutes". Integrates naturally into paragraph text.

## Configuration Options

| Setting | Description |
|---|---|
| Target Date & Time | The date and time to count down to |
| Timezone | Target event timezone (important for global teams) |
| Display Style | Compact, Block, or Text Only |
| Label | Optional text above the timer ("Registration closes in:") |
| Expired Message | Text to show after the countdown reaches zero |
| Show seconds | Yes / No |

## Timezone Note
The timer displays the countdown based on the **viewer's local timezone** relative to the target event time. Set the target timezone to the event's local timezone - the macro handles the conversion for each viewer.

## Common Use Cases

- Conference registration deadlines
- Product launch dates
- Sprint end countdowns on a team home page
- Promotion or discount expiry dates on internal sale pages`,
        },
        {
          slug: "user-profile-macro",
          title: "User Profile Macro",
          content: `# User Profile Macro

<img src="/images/content-formatting-assets/user-profile-macro.png" alt="User Profile Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The User Profile macro displays a Confluence user's profile information - name, avatar, title, department, and contact links - as a styled card. Use it to display team members, point-of-contact information, or page owners.

## Five Card Styles

| Style | What It Shows |
|---|---|
| Compact | Avatar + Name + Job Title inline |
| Standard | Avatar + Name + Title + Department + Email |
| Detailed | All standard fields + Location + Phone + Confluence profile link |
| Avatar Only | Just the profile picture with hover tooltip of name |
| Card | Full card layout with background, all fields, and contact buttons |

## Configuration Options

| Setting | Description |
|---|---|
| User | Confluence username or email to display |
| Card Style | Compact, Standard, Detailed, Avatar Only, Card |
| Show Email | Yes / No |
| Show Location | Yes / No |
| Show Department | Yes / No |
| Custom Label | Override the job title displayed |
| Link to Profile | Make the card clickable to the user's Confluence profile |

## Requirements

- The displayed user must have a Confluence Cloud account in the same site
- Profile fields (title, department, location) must be filled in by the user in their Confluence profile settings

## Common Use Cases

- **Page owner block**: "Questions about this page? Contact:" + User Profile macro
- **Team directory**: Grid of Card-style User Profile macros for each team member
- **On-call roster**: Weekly rotation page showing the current on-call person
- **Escalation path**: Runbook section showing L1, L2, L3 escalation contacts`,
        },
        {
          slug: "status-macro",
          title: "Status Macro",
          content: `# Status Macro

<img src="/images/content-formatting-assets/status-macro.png" alt="Status Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Status macro creates a color-coded badge that communicates a state, phase, or classification at a glance. Unlike the standard Confluence Status lozenge, this macro offers 13 preset status sets covering common workflows, plus a custom color mode.

## 13 Preset Status Sets

| Set Name | Example Values |
|---|---|
| General | To Do, In Progress, Done, Blocked |
| Approval | Pending, Approved, Rejected |
| Priority | Low, Medium, High, Critical |
| Health | Healthy, At Risk, Critical |
| Release | Planning, Development, Testing, Released |
| Environment | Development, Staging, Production |
| Ticket | Open, In Review, Closed, Reopened |
| Risk | Low, Medium, High, Very High |
| Compliance | Compliant, Non-Compliant, Under Review |
| Verification | Verified, Unverified, Failed |
| Access | Public, Internal, Restricted, Confidential |
| Budget | On Track, Over Budget, Under Budget |
| Custom | Any text + any color |

## Configuration

| Setting | Description |
|---|---|
| Status Set | Choose from 13 presets or Custom |
| Status Value | Select from the preset values or enter custom text |
| Color (Custom mode) | Color picker for badge background |
| Size | Small, Medium, Large |
| Style | Filled, Outlined, Subtle |

## Use Cases

- Project status table with a Status badge per row
- Runbook steps with a status column showing which steps are complete
- Risk register with a Risk level badge per item
- Release notes with Environment badges showing where each feature is deployed`,
        },
        {
          slug: "json-viewer-macro",
          title: "JSON Viewer Macro",
          content: `# JSON Viewer Macro

<img src="/images/content-formatting-assets/json-viewer-macro.png" alt="JSON Viewer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The JSON Viewer macro renders a block of JSON data in a formatted, syntax-highlighted, collapsible tree view. Use it to display API responses, configuration examples, or data samples without requiring readers to parse raw JSON.

## How It Works

1. Insert the **JSON Viewer** macro
2. Paste your JSON into the macro body
3. The macro validates the JSON and renders it as a collapsible tree
4. Readers can expand/collapse objects and arrays interactively
5. Syntax highlighting distinguishes keys, strings, numbers, booleans, and null values

## Viewer Features

- **Collapsible nodes**: Click any object or array to collapse/expand it
- **Syntax highlighting**: Color-coded by value type
- **Line numbers**: Optional line number display
- **Copy button**: Copies the raw JSON to clipboard

## Configuration Options

| Setting | Description |
|---|---|
| Theme | Light or Dark |
| Default collapsed depth | How many levels are expanded on load (0 = all collapsed, default: 2) |
| Show line numbers | Yes / No |
| Show copy button | Yes / No |
| Max height | Scroll container height (default: 400px) |

## Limitations

- JSON must be valid - the macro displays an error if the JSON is malformed
- Large JSON payloads (>500KB) may affect page load performance
- JSON is stored as page content - do not paste JSON containing sensitive data (API keys, passwords)

## Common Use Cases

- API documentation showing request/response examples
- Configuration file documentation
- Data schema examples for developer documentation
- Webhook payload examples`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 5. ATTACHMENT MANAGEMENT & AUDIT
    // ═══════════════════════════════════════════════════════════════
    {
      id: "attachment-management",
      title: "Attachment Management & Audit",
      articles: [
        {
          slug: "attachment-management",
          title: "Attachment Management & Audit",
          content: `
## What Is the Attachment Management Center?

The Attachment Management Center is a dedicated panel built into Content Formatting Macros that gives Confluence space admins a single place to:

- **View all attachments** across a space (or filtered to a specific page)
- **Filter by**: file type, uploader, upload date, file size, or linked/unlinked status
- **Bulk label** attachments for categorization
- **Bulk delete** unused or orphaned attachments
- **Identify orphaned files** - attachments uploaded to a page but not referenced in any page content

## How to Access

- **From Space Settings**: Go to **Space Settings** → **Apps** → **Attachment Management Center**
- **From the Confluence sidebar**: If the admin has pinned the Attachment Center shortcut, it appears in the left sidebar

## Admin Configuration

Before using the Attachment Center, enable it per-space:

1. Go to **Space Settings** → **Content Formatting Macros** → **Attachment Center**
2. Toggle **Enable Attachment Center** to On
3. Optionally configure:
   - **Storage warning threshold**: Get a visual indicator when total attachment storage exceeds a set amount
   - **Orphan detection**: Automatically flag attachments not referenced in page content

## Key Features

### File Filtering
Filter the attachment list by:
- File type (PDF, PNG, XLSX, DOCX, etc.)
- Upload date range
- Uploader (Confluence user)
- Page (see all attachments on a specific page)
- Linked status (Linked to page content vs. Orphaned)
- File size (find large files consuming storage)

### Bulk Operations
Select multiple attachments and apply:
- **Add Label**: Tag attachments for organization
- **Remove Label**: Remove an existing label
- **Delete**: Permanently delete (with confirmation prompt)

### Orphan Detection
Attachments flagged as orphaned are uploaded to a page but not referenced in any content on that page. These are safe candidates for deletion - but verify before bulk-deleting, as some attachments may be referenced from other pages or spaces.

## Best Practices

1. **Run a quarterly audit** using the Attachment Center to identify and remove stale files
2. **Label important attachments** (e.g., \`approved\`, \`final\`, \`archived\`) to distinguish them from drafts
3. **Set a storage threshold** to get early warning before Confluence storage limits are reached
4. **Review orphaned files** before deleting - check if they are referenced from external sources
5. **Train page authors** to delete old attachment versions when uploading new versions

## Important Note

Deletions via the Attachment Center are permanent. Confluence does not have a recycle bin for attachments. Always verify the file list before confirming a bulk delete.`,
        },
        {
          slug: "attachment-center-dashboard",
          title: "Attachment Center Dashboard",
          content: `# Attachment Center Dashboard

<img src="/images/content-formatting-assets/attachment-center-dashboard.png" alt="Attachment Center Dashboard screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What You See on the Dashboard

The Attachment Center Dashboard is the main overview screen that gives Confluence space administrators an at-a-glance picture of their space's attachment health.

## Dashboard Metrics

| Metric | Description |
|---|---|
| **Total Attachments** | Count of all attachments uploaded to the space |
| **Total Storage Used** | Aggregate size of all attachments in MB/GB |
| **Orphaned Attachments** | Attachments not referenced in any page content |
| **Large Files** | Attachments exceeding the configured size threshold |
| **Attachments This Month** | Number of new uploads in the current calendar month |

## Storage Health Indicator

The storage health bar at the top of the dashboard provides a visual representation:

- **Green**: Storage usage is below 75% of the configured warning threshold
- **Yellow**: Storage usage is between 75% and 100% of the warning threshold
- **Red**: Storage usage has exceeded the warning threshold - action recommended

> To configure the warning threshold, go to **Space Settings → Content Formatting Macros → Attachment Center → Storage warning threshold**.

## Quick Action Cards

The dashboard surface displays three quick action cards:

1. **Review Orphaned Files** - Opens the attachment list pre-filtered to show only orphaned attachments
2. **Find Large Files** - Opens the attachment list sorted by file size (largest first)
3. **Recent Uploads** - Shows attachments uploaded in the last 7 days

## Attachment Activity Chart

The activity chart plots attachment uploads over the selected time period (7 days, 30 days, or 90 days). Use it to:

- Identify spikes in upload activity
- Spot the dates when large batches of files were uploaded
- Understand storage growth trends over time

## Navigating from the Dashboard

- Click any **metric card** to go to the attachment list filtered by that metric
- Click **View All Attachments** to see the unfiltered list
- Click **Audit Log** to switch to the audit trail view
- Use the **Space Picker** (top right) to switch between spaces if you have admin access to multiple spaces`,
        },
        {
          slug: "attachment-bulk-actions",
          title: "Bulk Actions",
          content: `# Bulk Actions

<img src="/images/content-formatting-assets/attachment-bulk-actions.png" alt="Bulk Actions screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Bulk Actions?

Bulk Actions let you select multiple attachments and apply an operation to all of them at once - saving time compared to performing the same action individually on each file.

## Selecting Attachments

### Select Individual Files
Click the checkbox at the left edge of any attachment row to select it. Selected rows are highlighted.

### Select All on Page
Click the checkbox in the table header row to select all attachments currently visible on the page. This selects only the current page of results (not all pages).

### Select Across Pages
To work with attachments across multiple pages of results:
1. Apply filters to narrow results to the specific set you need
2. Use **Select All** to select the current page
3. An option to **Select all {N} results** appears - click it to extend the selection to all filtered results

## Available Bulk Operations

| Operation | What It Does | Reversible? |
|---|---|---|
| **Add Label** | Tags all selected attachments with one or more Confluence labels | Yes - remove label to undo |
| **Remove Label** | Removes a specific label from all selected attachments | Yes - re-add the label |
| **Delete** | Permanently deletes all selected attachments from Confluence | **No - permanent** |

## How to Delete Attachments in Bulk

1. Filter the attachment list to narrow down to the files you want to remove
2. Select the attachments using the checkboxes
3. Click the **Bulk Actions** button above the attachment table
4. Select **Delete** from the dropdown
5. A confirmation dialog appears showing the count of files to be deleted and their total size
6. Click **View Files** to expand and review each file name before confirming
7. Type **DELETE** in the confirmation field
8. Click **Confirm Delete**

> **Warning:** Attachment deletion is permanent. Confluence does not have a recycle bin. Deleted attachments cannot be recovered. Always verify the selection before confirming.

## How to Bulk Label Attachments

1. Select the attachments you want to label
2. Click **Bulk Actions → Add Label**
3. Type or search for a label in the label picker (e.g., \`approved\`, \`archived\`, \`review\`)
4. Click **Apply**
5. All selected attachments receive the label immediately

## Safety Recommendations

- **Always filter first** before selecting all - avoid accidentally selecting attachments you want to keep
- **Preview the selection** by expanding the confirmation dialog before deleting
- **Use labels** to mark attachments for review before deleting - this gives others a chance to flag files that should not be deleted
- **Work in batches** when deleting large numbers of files - 50–100 at a time is a manageable batch size for verifying results`,
        },
        {
          slug: "attachment-filters-sorting",
          title: "Filters & Sorting",
          content: `# Filters & Sorting

<img src="/images/content-formatting-assets/attachment-filters-sorting.png" alt="Filters & Sorting screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## Overview

The Filters & Sorting panel lets you narrow the attachment list to exactly the files you are looking for. You can filter by file type, upload date, uploader, file size, page, and link status - and combine any number of these filters together.

## Available Filters

| Filter | Options | Use Case |
|---|---|---|
| **File Type** | PDF, Image (PNG/JPG/GIF), Spreadsheet (XLSX/CSV), Document (DOCX), Video, Other | Find all PDFs in a space for a compliance review |
| **Upload Date** | Custom date range picker | Identify attachments uploaded during a specific project or sprint |
| **Uploaded By** | Confluence user picker | Find all files uploaded by a specific user |
| **Page** | Page title search / picker | See all attachments on a specific page |
| **File Size** | Greater than / Less than (KB or MB input) | Find files over 10 MB to identify large storage consumers |
| **Link Status** | Linked / Orphaned / All | Show only orphaned attachments not referenced in any page content |
| **Label** | Label picker | Find attachments with a specific label (e.g., \`approved\`) |

## Applying Filters

1. Click the **Filters** button above the attachment table
2. The filter panel expands below the table header
3. Select your desired filter values - the table updates live as you make each selection
4. Active filters appear as chips above the table; click the **×** on a chip to remove that filter
5. Click **Clear All** to remove all active filters at once

## Combining Filters

Filters work with AND logic - all active filters must match for an attachment to appear in results. Examples:

- **File Type = PDF** AND **Upload Date = Jan–Mar 2024** → only PDFs uploaded in Q1 2024
- **Link Status = Orphaned** AND **File Size > 5 MB** → large orphaned files (prime delete candidates)
- **Uploaded By = [user]** AND **Label = draft** → draft files from a specific team member

## Sorting

Click any column header to sort the attachment list by that column:

| Column | Sort Options |
|---|---|
| **File Name** | A→Z or Z→A alphabetically |
| **Page** | A→Z by page title |
| **Uploaded By** | A→Z by user display name |
| **Upload Date** | Newest first or Oldest first |
| **File Size** | Largest first or Smallest first |

The current sort column is indicated by an up/down arrow in the column header. Click the header again to reverse the sort direction.

## Saving Filter Presets

Frequently used filter combinations can be saved as presets for faster access in future sessions:

1. Apply the filters you want to save
2. Click **Save as Preset** (below the active filter chips)
3. Give the preset a name (e.g., "Large Orphaned PDFs")
4. Click **Save**

Saved presets appear in the **Presets** dropdown at the top of the filter panel. Presets are saved per-user and per-space.`,
        },
        {
          slug: "attachment-audit-logs",
          title: "Audit Logs",
          content: `# Audit Logs

<img src="/images/content-formatting-assets/attachment-audit-logs.png" alt="Audit Logs screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Are Audit Logs?

The Audit Logs section records all attachment-related actions performed via the Attachment Management Center. Use it to track who deleted files, when labels were applied, and which bulk operations have been run - and by whom.

## What Gets Logged

| Action | Logged Details |
|---|---|
| **Attachment Deleted** | File name, page, file size, deleted by, timestamp |
| **Bulk Delete** | Count of files, total size, deleted by, timestamp, list of file names |
| **Label Added** | File name, label applied, added by, timestamp |
| **Label Removed** | File name, label removed, removed by, timestamp |
| **Bulk Label** | Count of files affected, label applied, performed by, timestamp |
| **Settings Changed** | Setting name, old value, new value, changed by, timestamp |

## Accessing Audit Logs

1. Go to **Space Settings → Apps → Attachment Management Center**
2. Click the **Audit Log** tab at the top of the Attachment Center panel
3. The log loads showing the most recent 100 events, newest first

## Filtering the Audit Log

| Filter | Purpose |
|---|---|
| **Date Range** | View events within a specific date window |
| **Action Type** | Show only Deletes, Label changes, or Settings changes |
| **Performed By** | Filter to events from a specific Confluence user |
| **File Name** | Search for events related to a specific file name |

## Reading a Log Entry

Each log entry shows:

- **Timestamp**: Date and time of the action (Confluence site timezone)
- **Action**: What was done (e.g., "Bulk Delete", "Label Added")
- **Performed By**: The Confluence user who triggered the action
- **Details**: Summary of what was affected (e.g., "12 files, 45.3 MB total")
- **Expand icon**: Click to see the full list of affected files for bulk operations

## Exporting Audit Logs

1. Apply date range and any other filters to scope the data
2. Click **Export** (top right of the Audit Log tab)
3. Choose **CSV** for spreadsheet analysis or **PDF** for a formatted report
4. The file downloads automatically

> **Tip:** Export monthly audit logs as part of a regular compliance or governance review process.

## Retention Policy

Audit log entries are retained for **90 days** by default. Entries older than 90 days are automatically purged. Contact your Confluence site administrator if you need to extend the retention period for compliance requirements.

## Common Audit Use Cases

| Scenario | How to Use the Audit Log |
|---|---|
| Someone deleted important files | Filter by Action = Deleted, find the event, expand to see file names |
| Verify a cleanup was completed | Filter by date range of the cleanup, confirm bulk delete events appear |
| Find out who bulk-labeled files | Filter by Action = Label, identify the bulk label events |
| Investigate unexpected storage drop | Filter by Action = Deleted, sort by date to find large delete events |
| Generate a compliance report | Export filtered logs to CSV and attach to your audit documentation |`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 6. PAGE TEMPLATES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "page-templates",
      title: "Page Templates",
      articles: [
        {
          slug: "page-templates",
          title: "Page Templates",
          content: `# Page Templates

<img src="/images/content-formatting-assets/page-templates.png" alt="Page Templates screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What Templates Are Included?

Content Formatting Macros includes two ready-to-use Confluence page templates that demonstrate the app's capabilities in realistic, production-ready page designs.

---

## Template 1 - Employee Onboarding Hub

A structured onboarding experience for new hires, built with tabs, cards, and conditional visibility.

### Page Structure

| Tab | Content |
|---|---|
| Week 1 | First-day checklist, system access steps, buddy program info |
| Week 2 | Team introductions, process docs, first project overview |
| Week 3 | Role-specific training, first check-in prep |
| Resources | Buttons linking to HR systems, benefits portal, IT helpdesk |
| Manager View (Conditional) | Manager-only tab with onboarding completion tracking |

### Macros Used
- Tab Navigation + Custom Tabs (for the weekly structure)
- Conditional Show (for the Manager View tab)
- Buttons (system links in Resources tab)
- Alert (Info type - welcome message)
- User Profile (buddy/manager contact cards)
- Progress Bar (overall onboarding completion percentage)
- Interactive Banner (welcome header)

---

## Template 2 - Team Hub

A team home page with announcements, key links, member directory, and rotating status indicators.

### Page Structure

| Section | Content |
|---|---|
| Announcement Banner | Interactive Banner macro with latest team news |
| Quick Links | Button macros linking to Jira board, Confluence space, Slack channel |
| Team Members | Grid of User Profile macros (Card style) |
| Current Sprint Status | Status Macro badges per active project |
| Upcoming Events | Countdown Timer macros for key dates |
| Resources | Advanced Cards linking to key documents |

### Macros Used
- Interactive Banner
- Buttons
- User Profile (Card style, 3-column grid)
- Status Macro
- Countdown Timer
- Advanced Cards
- Background (alternating section backgrounds)
- Divider (between sections)

---

## How to Access Templates

1. In Confluence, navigate to the space where you want to create the page
2. Click **Create** → **From Template**
3. Search for **"Content Formatting"** or browse the template gallery
4. Select **Employee Onboarding Hub** or **Team Hub**
5. Click **Use Template** - the page opens in edit mode with all macros pre-configured
6. Replace placeholder text and configure macros with your actual content

---

## Troubleshooting Templates

| Issue | Fix |
|---|---|
| Templates not showing in the gallery | Confirm the app is installed and activated for the space |
| Macros showing placeholder content | Edit each macro and configure it with real data |
| Conditional Show section always hidden | Confirm the target Confluence group exists and the current user is in it |
| User Profile cards showing blank | Ensure the referenced users have completed their Confluence profile fields |`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 7. PRIVACY & ACCESS NOTES
    // ═══════════════════════════════════════════════════════════════
    {
      id: "privacy-access",
      title: "Privacy & Access Notes",
      articles: [
        {
          slug: "privacy-access",
          title: "Privacy & Access Notes",
          content: `
## How Content Formatting Macros Handles Data

### Principle 1 - Content Stays in Confluence

Content Formatting Macros does not transmit page content, attachment data, or user information to external servers. All macro rendering is performed within the Atlassian Confluence Cloud environment using Atlassian's Forge or Connect app runtime.

The only external communication is:
- License verification with the Atlassian Marketplace
- Optional background image URLs you configure in the Background or Banner macros (the browser fetches these directly)

### Principle 2 - Visibility Macros Are UI Controls, Not Security Boundaries

Conditional Show and Conditional Hide macros change what is **displayed** in the browser. They do not change Confluence's underlying access control.

A user with page-read permission can still access all page content via:
- The Confluence REST API
- The page export (PDF, Word)
- The Confluence mobile app

**Do not use Conditional Show/Hide to protect sensitive data.** Use **Confluence Page Restrictions** for true access control.

Conditional macros are appropriate for:
- Audience targeting (showing relevant content to relevant users)
- Reducing visual clutter (hiding admin notes from general readers)
- Progressive disclosure (revealing advanced content to expert users)

### Principle 3 - Attachment Deletion Is Permanent

The Attachment Management Center's delete function permanently removes files from Confluence. There is no recycle bin or undo. Always confirm the file list carefully before executing a bulk delete.

## User Data in Macros

The User Profile macro reads user data from Confluence's user directory. Only data that users have voluntarily entered in their Confluence profile is displayed. The macro does not access email systems, HR systems, or external directories.

## Questions About Data Processing

For questions about how Clovity processes data as the app vendor, contact **developers@clovity.com** or review the app's privacy policy on the Atlassian Marketplace listing.`,
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // 10. INTEGRATIONS & MIGRATION
    // ═══════════════════════════════════════════════════════════════
    {
      id: "integrations-migration",
      title: "Integrations & Migration",
      articles: [
        {
          slug: "supported-integrations",
          title: "Supported Integrations",
          content: `
## Native Confluence Integration

Content Formatting Macros is built as a native Confluence Cloud app and integrates deeply with Confluence's built-in data model. It does not require any external service connections, API keys, or third-party accounts.

---

## Confluence Features Used by Each Macro

### Page Hierarchy (Child Pages)

**Used by**: Tab Parent Content Mapper

The Tab Parent Content Mapper reads the Confluence page hierarchy to auto-populate tabs from child pages. It uses the Confluence Content API to:
- Retrieve all child pages of a specified parent page
- Read each child page's title (used as the tab label)
- Fetch and render each child page's body content inside the tab
- Respect the page tree sort order configured in Confluence

**Confluence permission model**: If a viewer does not have read permission on a child page, that tab is not rendered for them. The mapper respects all standard Confluence page restrictions.

---

### Labels & CQL

**Used by**: Tab Label Content Mapper

The Tab Label Content Mapper uses Confluence's **CQL (Confluence Query Language)** to find pages matching specified labels. It integrates with:
- Confluence's label system (labels applied to pages via the page footer or editor)
- Confluence's search API (CQL queries)
- Space-scoped filtering (restricts results to a specific space or all accessible spaces)

**Confluence permission model**: Only pages the current viewer can read are returned in label-based queries.

---

### Spaces

**Used by**: Tab Label Content Mapper, Tab Page Mapper, Attachment Management Center

Macros can be scoped to specific Confluence spaces. The Attachment Management Center operates on a per-space basis and requires Space Admin access to enable.

---

### Users & Groups (Conditional Visibility)

**Used by**: Conditional Show, Conditional Hide

The conditional visibility macros integrate with Confluence's user and group system:

| Data Used | Source | How Used |
|---|---|---|
| Current viewer's username | Confluence session | Evaluate login status condition |
| Confluence group membership | Confluence Groups API | Evaluate group-based conditions |
| Space role (Space Admin / Space User) | Confluence space permissions | Evaluate space role conditions |

**What the app does NOT do**:
- The app does not sync, create, or modify Confluence groups
- The app does not access Atlassian Access, external identity providers, or SSO directory data
- Group membership is read at render time from Confluence's built-in groups - no caching between page loads

**Confluence permission model**: Group names in the macro configuration must exactly match existing Confluence groups. The app reads group membership via Confluence's standard permissions model.

---

### User Profiles

**Used by**: User Profile Macro

The User Profile macro reads Confluence user profile data:

| Field | Source |
|---|---|
| Display name | Confluence user profile |
| Avatar / profile photo | Confluence user profile |
| Job title | Confluence user profile (optional field) |
| Department | Confluence user profile (optional field) |
| Location | Confluence user profile (optional field) |
| Email address | Confluence user profile (shown only if configured to display) |

Profile fields are populated by each user in their own **Confluence profile settings**. Fields not filled in by the user will be blank in the macro display. The app does not pull data from external HR systems or directories.

---

### Attachments

**Used by**: Attachment Management Center

The Attachment Management Center integrates with Confluence's attachment storage system:

| Capability | Confluence API Used |
|---|---|
| List all attachments in a space | Confluence Content API (attachments endpoint) |
| Filter by file type, date, uploader | Client-side filtering of API results |
| Apply labels to attachments | Confluence Labels API |
| Delete attachments | Confluence Attachments API (delete) |
| Detect orphaned files | Compare attachment list against page content references |

**Permissions required**: Space Admin role to enable the Attachment Center per-space; standard Confluence attachment permissions apply to all read and delete operations.

---

## Confluence Permission Model Integration

Content Formatting Macros fully respects Confluence's permission model at every layer:

| Permission Layer | How the App Honors It |
|---|---|
| Page restrictions | Tab mapper macros only show tabs for pages the viewer can read |
| Space permissions | Attachment Center requires Space Admin role; conditional macros read space roles from Confluence |
| Site administration | App installation requires Confluence site admin role |
| Group membership | Conditional Show/Hide reads group membership from Confluence at render time |
| Anonymous access | Conditional visibility evaluates login status correctly for anonymous (not-logged-in) viewers |

---

## What Content Formatting Macros Does NOT Integrate With

| System | Status |
|---|---|
| Jira (issues, boards, sprints) | No direct integration - use Confluence's built-in Jira macros for Jira data |
| External databases | No |
| External identity providers (Okta, Azure AD) | No - reads Confluence group membership only |
| Confluence Data Center | Not supported |
| Confluence Server | Not supported |
| Third-party storage (S3, GDrive) | No |`,
        },
        {
          slug: "data-migration",
          title: "Data Migration",
          content: `
## Migrating from Other Tab or Formatting Apps to Content Formatting Macros

If your Confluence space currently uses another tab or formatting app (e.g., Comala, Scroll Viewport, Brikit Theme Press, or other tab macro apps), this guide covers what to expect when switching to Content Formatting Macros.

---

## Before You Migrate

### Step 1 - Audit Your Current Usage

Before installing Content Formatting Macros, take stock of what you're replacing:

1. Identify all pages that use the old tab/formatting macros
2. Note the tab structures in use - how many tabs, what content type, mapper vs. manual
3. List any conditional visibility or CSS customization features you rely on
4. Check if any page templates reference the old macros

### Step 2 - Install Content Formatting Macros First

Install Content Formatting Macros **before** uninstalling your old app. This allows you to:
- Test the new macros side by side on a copy of a key page
- Validate rendering and feature parity before committing
- Train page authors on the new workflow before removing the familiar interface

### Step 3 - Map Old Macros to New Macros

| Old Pattern | Content Formatting Equivalent |
|---|---|
| Manual tab macro (other app) | Custom Tabs |
| Dynamic tabs from child pages | Tab Parent Content Mapper |
| Tabs by label/tag | Tab Label Content Mapper |
| Hand-picked page list as tabs | Tab Page Mapper |
| Show/hide section (role-based) | Conditional Show / Conditional Hide |
| Custom CSS background | Background Macro |
| Styled button link | Buttons Macro |
| Styled expand/collapse | Advanced Expand Macro |

---

## Migration Process (Per Page)

### For Pages with Manual Tabs

1. Open the page in edit mode
2. Note the content in each tab of the old macro
3. Insert a **Tab Navigation** macro below the old tab macro
4. Add Custom Tab containers and copy the content from each old tab into the corresponding new tab
5. Once the new tabs are verified, delete the old tab macro
6. Publish

### For Pages with Dynamic Tabs (Child-Page Based)

If your old app auto-populated tabs from child pages, the **Tab Parent Content Mapper** is the direct equivalent:

1. Insert **Tab Navigation** + **Tab Parent Content Mapper** on the page
2. Configure the Parent Page in the mapper
3. Compare the tab output against the old macro's output
4. If the output matches, delete the old tab macro
5. Publish

### For Pages with Conditional Visibility

1. Identify the condition used in the old macro (group name, role, or login status)
2. Insert the equivalent **Conditional Show** or **Conditional Hide** macro
3. Configure with the same condition
4. Test with users in the target group
5. Delete the old macro and publish

---

## What to Expect When Uninstalling the Old App

When you uninstall your previous tab or formatting app:

| What Happens | Details |
|---|---|
| **Old macros stop rendering** | Macro placeholders appear in their place - \`{old-macro-name:...}\` - visible in edit mode; in view mode they typically show as empty space or a "Macro not found" message |
| **Page content is NOT deleted** | All page text, images, and Confluence content remain intact - only the macro rendering is affected |
| **Macro storage is retained** | The macro parameter data is stored in the page's storage format and remains in the page even after uninstall - it's just not rendered |
| **Re-install restores rendering** | Re-installing the old app restores rendering of the old macros |

---

## Macro Content Persistence on Pages

Confluence stores macro parameters (the macro's configuration settings) as part of the page's storage-format XML. This means:

- When an app is uninstalled, the macro parameters remain stored in the page - they are not deleted
- The macro body content (content you typed inside a macro) is also preserved
- If you re-install the old app, all macros return to their fully rendered state

**Important implication for migration**: If you migrate pages to Content Formatting Macros and then delete the old macro instances, the old macro data is permanently removed from the page. This is typically the desired outcome, but make sure you have verified the migration before deleting.

---

## Rollback Plan

If you need to roll back after starting a migration:

1. Do NOT uninstall Content Formatting Macros - uninstall would leave its macros unrendered
2. Re-install the old app if you uninstalled it - this restores old macro rendering
3. Pages where you have already replaced old macros with Content Formatting macros cannot be automatically reverted - those pages must be manually updated or restored from Confluence's page history

**Recommendation**: Use Confluence's **Page History** feature before migrating important pages. This gives you a point-in-time restore option if a migration goes wrong.

---

## Getting Help with Migration

If you are migrating a large Confluence space (100+ pages with tab macros) and need assistance, contact the Clovity support team:

- **Email**: developers@clovity.com
- **Subject**: Migration Assistance: [your Confluence site URL]

Include the number of pages involved, the app you are migrating from, and your timeline. The support team can provide migration guidance and tooling recommendations.`,
        },
      ],
    },
  ],
};
