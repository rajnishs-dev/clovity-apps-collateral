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

## Five Core Capabilities

**1. Advanced Content Navigation (Tabs)**
Create multi-tab layouts inside any Confluence page. Organize complex documentation, runbooks, or knowledge bases into clean, clickable tab interfaces without leaving the page editor.

**2. Rich Content Formatting Macros**
Buttons, Alerts, Background, Tooltip, Progress Bar, Footnotes, Footnote Summary, Pop-up Dialog, Advanced Expand, Advanced Card, Interactive Banner, Numbered Heading, Divider, Countdown Timer, User Profile, Status, JSON Viewer, Custom Fonts, News, Page Tree, Activity Stream, Number List, Form Macro, Markdown Renderer, HTML Renderer, and more.

**3. Conditional Visibility (Show / Hide)**
Control which content users see based on Confluence groups, space roles, or login status. Show internal notes only to admins; hide drafts from guests.

**4. Attachment Management & Audit**
Bulk-view, label, and manage file attachments across your Confluence space from a single panel. Identify orphaned files, filter by type, and keep your space tidy.

**5. Templates**
It help users get started quickly with a pre-designed structure tailored to their needs. Instead of creating everything from scratch, users can simply choose a template, customize the content, and save valuable time.

## Supported Macros at a Glance

| Macro | Purpose |
|---|---|
| Tab Parent Content Mapper | Tabs pulling from child pages |
| Tab Label Content Mapper | Each page with your entered label becomes a tab |
| Tab Confluence Page Mapper | Tabs from specific pages |
| Custom Tabs | Manual rich-content tabs |
| Conditional Show | Show content to specific groups |
| Conditional Hide | Hide content from specific groups |
| Buttons | Styled CTA buttons |
| Background | Section background color/image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal definitions |
| Progress Bar | Multi-step page workflow tracker |
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
| Footnotes Summary | Consolidated list of all footnotes used on a page |
| Custom Fonts | Apply custom typography and font styling |
| News | Display latest announcements of confluence blogs |
| Page Tree | Hierarchical navigation of Confluence pages |
| Activity Stream | Show recent page and user activities |
| Number List | Styled numbered lists with advanced formatting |
| Form Macro | Collect structured user input through forms |
| Markdown Renderer | Render Markdown content inside Confluence |
| HTML Renderer | Render custom HTML content inside Confluence |

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
3. Search for "Alert" or "Tab Parent Content Mapper" - the macros should appear in the results
4. If macros don't appear, go to **Confluence Settings** → **Manage apps** → Confirm Content Formatting Macros: Tabs Navigation Visibility CSS shows "Active"

## Admin Checklist

- App installed from Marketplace
- All permissions accepted
- Post-install verification passed (macros appear in editor)

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
- **Tab Parent Content Mapper**: Use when tabs should mirror child pages
- **Tab Label Content Mapper**: Use when you enter a label and want every page tagged with that label to appear as its own separate tab
- **Tab Confluence Page Mapper**: Use when you want to hand-pick exactly which pages appear as tabs
- **Create Custom Tabs**: Use when content lives directly on the page, not in separate child pages

### Step 3 - Insert and Configure
Insert the tab mapper macro directly on the page (type "/" → search the macro name). Configure the mapper settings (parent page, label name, or page list) in the config panel.

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
| **Confluence Edition** | Confluence Cloud and AGC |
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
Content Formatting Macros adds 30+ macros to the Confluence Cloud editor - no separate dashboard, no separate app to open. Everything happens inside a Confluence page in edit mode. Use this guide to find the fastest path for your role.

## Content Author / Technical Writer

You write pages and want richer formatting.

**Start with:**
1. [Quick Start Guide](/apps/content-formatting-confluence/quick-start) - insert your first macro in under 2 minutes
2. [Tab Navigation Overview](/apps/content-formatting-confluence/tab-navigation) - create tabbed layouts from child pages or labels
3. [Alert Macro](/apps/content-formatting-confluence/alert-macro) - highlight important notes, warnings, and tips
4. [How to: Build a Tabbed Knowledge Base Page](/apps/content-formatting-confluence/how-to-tabbed-knowledge-base) - full page workflow

**Best macros to learn first:** Alert · Background · Tab Parent Content Mapper · Buttons · Advanced Expand

---

## Space Administrator

You manage space structure and want consistent, well-organised content.

**Start with:**
1. [Tab Parent Content Mapper](/apps/content-formatting-confluence/tab-parent-mapper) - generate tabs from child pages
2. [Page Templates](/apps/content-formatting-confluence/page-templates) - apply consistent layouts across a space
3. [Attachment Center Dashboard](/apps/content-formatting-confluence/attachment-center-dashboard) - audit attachments space-wide, find orphans, manage bulk actions
4. [How to: Build a Tabbed Knowledge Base Page](/apps/content-formatting-confluence/how-to-tabbed-knowledge-base) - reference architecture for space-level hubs

---

## IT / Security Team

You need to restrict what different audiences can see on the same page.

**Start with:**
1. [Conditional Show Guide](/apps/content-formatting-confluence/conditional-show) - show content only to a specific Confluence user or group
2. [Conditional Hide Guide](/apps/content-formatting-confluence/conditional-hide) - hide content from specific Confluence user or group
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
| Tab Parent Content Mapper | Auto-tabs from child pages | [Parent Mapper](/apps/content-formatting-confluence/tab-parent-mapper) |
| Tab Label Content Mapper | Each page tagged with your entered label becomes a tab | [Label Mapper](/apps/content-formatting-confluence/tab-label-mapper) |
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
| Progress Bar | Multi-step page workflow tracker | [Progress Bar](/apps/content-formatting-confluence/progressbar-macro) |
| Countdown Timer | Deadline or event countdown | [Countdown](/apps/content-formatting-confluence/countdown-macro) |
| Status | Inline coloured status badge | [Status](/apps/content-formatting-confluence/status-macro) |
| Tooltip | Hover-reveal tooltip text | [Tooltip](/apps/content-formatting-confluence/tooltip-macro) |
| User Profile | Display a user's avatar and name | [User Profile](/apps/content-formatting-confluence/user-profile-macro) |
| Numbered Heading | Auto-numbered heading hierarchy | [Numbered Headings](/apps/content-formatting-confluence/numbered-headings-macro) |
| Divider | Styled horizontal divider line | [Divider](/apps/content-formatting-confluence/divider-macro) |
| Footnotes | Numbered footnote references | [Footnotes](/apps/content-formatting-confluence/footnotes-macro) |
| Footnotes Summary | Consolidated list of all footnotes on a page | [Footnotes Summary](/apps/content-formatting-confluence/footnotes-summary-macro) |
| JSON Viewer | Formatted, collapsible JSON display | [JSON Viewer](/apps/content-formatting-confluence/json-viewer-macro) |
| Custom Fonts | Apply custom typography and font styling | [Custom Fonts](/apps/content-formatting-confluence/custom-fonts-macro) |
| News | Display latest announcements of confluence blogs | [News](/apps/content-formatting-confluence/news-macro) |
| Page Tree | Hierarchical navigation of Confluence pages | [Page Tree](/apps/content-formatting-confluence/page-tree-macro) |
| Activity Stream | Show recent page and user activities | [Activity Stream](/apps/content-formatting-confluence/activity-stream-macro) |
| Number List | Styled numbered lists with advanced formatting | [Number List](/apps/content-formatting-confluence/number-list-macro) |
| Form Macro | Collect structured user input through forms | [Form Macro](/apps/content-formatting-confluence/form-macro) |
| Markdown Renderer | Render Markdown content inside Confluence | [Markdown Renderer](/apps/content-formatting-confluence/markdown-renderer-macro) |
| HTML Renderer | Render custom HTML content inside Confluence | [HTML Renderer](/apps/content-formatting-confluence/html-renderer-macro) |

### Attachment Management
| Feature | What It Does | Full Reference |
|---|---|---|
| Attachment Center Dashboard | Space-wide attachment audit and inventory | [Dashboard](/apps/content-formatting-confluence/attachment-center-dashboard) |
| Bulk Actions | Delete or move attachments in bulk | [Bulk Actions](/apps/content-formatting-confluence/attachment-bulk-actions) |
| Audit Logs | History of attachment changes | [Audit Logs](/apps/content-formatting-confluence/attachment-audit-logs) |

## Key Rules

- **Tab macros cannot be nested inside another tab macro** - use Advanced Expand for secondary grouping within a tab
- **Conditional macros check group names at render time** - group names are case-sensitive and must match exactly as they appear in Confluence Admin → Groups
- **Macro settings save when you click Save on the panel** - you still need to Publish the page to make changes visible to others
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
| Navigation | Tab Parent Content Mapper | Tabs across the top, each tab = one content section |
| Visibility | Conditional Show / Hide | Different content per audience within the same tab |
| Formatting | Alert, Background, Buttons, Cards | Visual richness and callouts within each section |

## Step 1 - Prepare Your Child Pages (for Auto-Tab Approach)

1. Create a parent page in Confluence (this will be your hub)
2. Create child pages under it - one per tab section (e.g., Overview, Setup Guide, Troubleshooting, Reference)
3. Name each child page clearly - the page title becomes the tab label

→ [Tab Parent Content Mapper](/apps/content-formatting-confluence/tab-parent-mapper)

## Step 2 - Insert Tab Parent Content Mapper

1. Open the hub page in edit mode
2. Type \`/\` → search **Tab Parent Content Mapper** → insert it directly on the page
3. In the config panel, confirm the parent page (defaults to current page)
4. Set Sort Order to page tree order or **Alphabetical**
5. Preview - each child page appears as a tab

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
3. In the config panel, search for and select the specific **users** or **groups** who should see this content
4. Test in View mode with a matching user and a non-matching user

→ [How to: Create Role-Based Content Visibility](/apps/content-formatting-confluence/how-to-role-based-content)

## Step 5 - Publish and Verify

1. Publish each child page
2. Publish the hub page
3. Verify tabs appear correctly in view mode
4. Test tab navigation - each tab should load the corresponding child page content inline

## Maintaining the Hub

- **Add a new tab:** Create a new child page under the parent
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
   - Under **Groups**, search and select the Confluence group who should see this content
   - Optionally add individual users under **Users**
   - Set **Match using** to **Any** or **All** as needed
5. Save the macro and Publish the page
6. Test: log in as a group member (visible) and a non-member (hidden)

## Step 3 - Wrap Content with Conditional Hide

To hide content **from** a specific group:

1. Select the content to hide
2. Type \`/\` → **Conditional Hide** → insert it
3. In the config panel, under **Groups**, search and select the group to hide from
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

- **Use the Parent Mapper for living hubs.** Tabs generated from child pages reflect the current child page list - add or rename a child page and the tab changes without editing the hub page. Custom Tabs require manual updates every time.
- **Tab Navigation cannot be nested.** If you need collapsible subsections inside a tab, use Advanced Expand - it's designed for secondary grouping within a tab body.
- **Reorder tabs by reordering child pages** in the Confluence page tree (drag and drop). The tab order follows the page tree by default.

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
          {
          slug: "user-guide-pdf",
          title: "User Guide PDF",
          content: `
<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">User Guide - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download the complete User Guide or open it in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Content_Formatting_Macros_Tabs_Navigation_Visibility_CSS_User_Guide_Final_0d048b0587.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
   
  </div>
</div>
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

Insert one of the three mapper macros directly on your page - each macro is standalone and renders the full tab interface by itself.

| Macro | Use When |
|---|---|
| Tab Parent Content Mapper | Tabs load from child pages of a parent |
| Tab Label Content Mapper | You enter a label; every page with that label becomes its own tab |
| Tab Confluence Page Mapper | You want to hand-pick specific pages as tabs |

Mapper tabs are dynamic - tabs reflect the current state of child pages, labeled pages, or the hand-picked page list.

### Method 2 - Custom Tabs (Manual Content)

Insert the **Create Custom Tabs** macro directly on your page. Write content inside each tab in the config panel. Use this when content doesn't already exist as separate pages.

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

The Tab Parent Content Mapper creates one tab for each **child page** of a specified Confluence parent page. When child pages are added, renamed, or removed, the tabs reflect those changes - no manual editing of the hub page required.

## When to Use It

- You already have (or plan to create) separate child pages for each topic
- You want tabs to stay in sync with your page hierarchy automatically
- Teams maintain individual pages and a hub page should aggregate them as tabs

## How to Set It Up

1. Insert **Tab Parent Content Mapper** directly on the page
2. In the config panel, set the **Parent Page** - either the current page or another page in the space
3. Choose sort order and any filtering options
4. Preview and publish

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

The Tab Label Content Mapper creates tabs based on a **label you enter in the macro configuration**. You type one label name - every Confluence page that has been tagged with that label becomes its own separate tab. If three pages share the same label, three tabs are created, one per page, with each tab's title taken from the page title and its content pulled from that page.

## When to Use It

- Multiple pages are already tagged with the same label and you want each of them as its own tab on a hub page
- You want tabs to reflect pages as they are tagged with or un-tagged from the label
- You want a cross-hierarchy view - pages from different parts of the space grouped by a shared label

## How to Set It Up

1. Tag each Confluence page you want as a tab with the same label (e.g., add the label \`release-notes\` to every release-notes page)
2. Insert **Tab Label Content Mapper** directly on the page
3. In the config panel, type the label name (e.g., \`release-notes\`)
4. Every page with that label appears as a separate tab - preview and publish

## Settings Reference

| Setting | Description |
|---|---|
| Label | The label name to match - each page tagged with this label becomes one tab |
| Space | Restrict matching to a specific space (default: current space) |
| Sort | How tabs are ordered: Alphabetical, Created Date, Modified Date |
| Max Pages | Maximum number of pages (tabs) to display |

## Behaviors

- One label input → one tab per page that carries that label
- If 3 pages share the label, 3 tabs are created; if 5 pages share it, 5 tabs are created
- Adding the label to a page adds it to the tab list
- Removing the label from a page removes it from the tab list
- Labels are case-insensitive in matching
- Only published pages the viewer has read permission to access appear as tabs`,
        },
        {
          slug: "tab-page-mapper",
          title: "Tab Confluence Page Mapper",
          content: `# Tab Confluence Page Mapper Guide

<img src="/images/content-formatting-assets/tab-page-mapper.png" alt="Tab Confluence Page Mapper screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does

The Tab Page Mapper lets you **hand-pick specific pages** from anywhere in the Confluence space to appear as tabs. Unlike the Parent or Label mappers, this one requires manual updates - you control exactly which pages are included and in what order.

## When to Use It

- You want precise control over which pages appear as tabs
- The pages you're grouping don't share a parent or a label
- You need tabs that pull from multiple different spaces
- The dynamic behavior of other mappers would include pages you don't want

## How to Set It Up

1. Insert **Tab Confluence Page Mapper** directly on the page
2. In the config panel, add pages one by one - search by title or paste page URLs
3. Drag to reorder the page list
4. Preview and publish

## Known Behavior

If a page in the list is deleted, the corresponding tab is removed automatically when the macro is edited or refreshed. Check your page list periodically if content is maintained by others.`,
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

1. Open your page in edit mode
2. Type "/" → search **Create Custom Tabs** → insert it directly on the page
3. In the config panel, add a label for each tab you want
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
| Confluence User | Show/hide for specific individual Confluence users |
| Confluence Group | Show/hide based on Confluence group membership (e.g., \`confluence-admins\`) |

You can select multiple users and/or groups in one macro. Use the **Match using** setting to control whether the viewer must match **Any** (at least one) or **All** of the selected conditions.

## Common Patterns

**Pattern 1 - Admin-only notes**: Conditional Show, group = \`confluence-admins\`.

**Pattern 2 - Manager-only HR content**: Conditional Show, group = \`hr-managers\`.

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
4. In the config panel:
   - Set **Match using** to **Any** (hide if viewer matches any condition) or **All** (hide only if viewer matches all)
   - Under **Users**, search and select specific Confluence users to hide from (optional)
   - Under **Groups**, search and select Confluence groups to hide from (at least one user or group required)
5. Click Save.
6. In View mode, log in as a user who matches the condition - the content should be hidden for them

## Multiple Conditions

You can stack multiple Conditional Hide macros to hide content from multiple groups. Each macro is evaluated independently.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| Content still visible when it shouldn't be | Wrong user or group selected | Re-open the macro config and verify the correct user/group is selected |
| Content hidden from everyone | Selected group includes all users | Use a more specific group or switch to individual user selection |
| Content visible in Confluence API response | Expected - conditional macros are UI-only | Use page restrictions for access control |
| No effect in edit preview | Edit mode shows all content regardless of conditions | Switch to View mode to test |`,
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
4. In the config panel:
   - Set **Match using** to **Any** (show if viewer matches any condition) or **All** (show only if viewer matches all)
   - Under **Users**, search and select specific Confluence users who should see this content (optional)
   - Under **Groups**, search and select Confluence groups who should see this content (at least one user or group required)
5. Click Save.
6. Preview in View mode - sign in as a user in the target group to confirm visibility

## Multiple Conditions

You can stack multiple Conditional Show macros to show different content to different groups. Each macro is evaluated independently.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| Content not showing for target group | Wrong user or group selected | Re-open the macro config and verify the correct user/group is selected |
| Content showing to everyone | Selected group includes all users | Use a more specific group or switch to individual user selection |
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

Content Formatting Macros includes 25 macros for enhancing the visual quality, interactivity, and clarity of Confluence pages. These macros require no custom CSS or developer skills - everything is configured through the macro's settings panel in the Confluence editor.

## Full Macro List

| Macro | What It Does |
|---|---|
| Buttons | Styled link buttons |
| Background | Section background color or image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal text |
| Progress Bar | Multi-step page workflow tracker |
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
| Footnotes Summary | Consolidated list of all footnotes used on a page |
| Custom Fonts | Apply custom typography and font styling |
| News | Display latest announcements of confluence blogs |
| Page Tree | Hierarchical navigation of Confluence pages |
| Activity Stream | Show recent page and user activities |
| Number List | Styled numbered lists with advanced formatting |
| Form Macro | Collect structured user input through forms |
| Markdown Renderer | Render Markdown content inside Confluence |
| HTML Renderer | Render custom HTML content inside Confluence |

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

Each button in the macro has these settings:

| Setting | Options |
|---|---|
| Button text | Label shown on the button (max 50 characters, required) |
| Icon | Optional icon from the built-in Lucide icon library |
| Icon position | Before, After, or Only (icon-only button) |
| Style | Filled, Outlined, Subtle, Link |
| Shape | Square, Rounded, Pill |
| Size | S, M, L |
| Font family | Arial, Calibri, Georgia, Verdana, Trebuchet MS, Times New Roman, Palatino, Tahoma, Courier New, Impact |
| Font weight | Regular, Semi-Bold, Bold |
| Hover effect | None, Elevated (lifts up), Shrink |
| Background color | Color picker (Filled style only) |
| Text color | Color picker |
| Alignment | Left, Center, Right |
| Destination | Search Confluence page or Add link (external URL) |
| Open in new tab | Yes / No |

The macro also includes a **Presets** tab with 30+ pre-designed button styles.

## Adding Multiple Buttons

All buttons live inside **one macro instance**. Use the **+ Add Button** control to add more buttons. When multiple buttons exist, **Group Settings** appear:

| Group Setting | Options |
|---|---|
| Orientation | Horizontal, Vertical |
| Group Alignment | Left, Center, Right, Space Between, Space Around |

## Common Use Cases

- **"Download" or "Get Started" CTA** at the top of a documentation page
- **Links to related systems** (Jira board, Confluence space, external tool) at the bottom of a runbook
- **Navigation buttons** replacing manually written "see also" links
- **Step-navigation** in onboarding pages: "Previous Step" and "Next Step"

## Best Practices

- Keep button labels short (2–5 words)
- Use Filled style for the main action, Outlined for alternatives
- Use icon-only buttons (Icon position: Only) for compact toolbars or social media links`,
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
| Opacity | Slider | For Color type |
| Gradient | Start color, end color, direction | For Gradient type |
| Image | Upload Confluence attachment or stock image | For Image type |
| Image size | Cover, Contain, Auto | For Image type |
| Image position | Top, Center, Bottom etc. | For Image type |
| Image opacity | Slider | For Image type |
| Overlay color + opacity | Color picker + slider | Semi-transparent overlay over background image |
| Content padding | Slider | Inner padding around content |
| Min height | Preset or custom pixel value | Optional minimum height |
| Border radius | Slider (pixels) | Rounded corners |
| Alignment (X / Y) | Left/Center/Right, Top/Center/Bottom | Content alignment inside the container |
| Text color | Color picker or hex value | Ensures text readability on dark backgrounds |

## Usage Notes

- Content inside the Background macro is fully editable - insert any Confluence content or other macros inside it
- Images can be uploaded directly as Confluence attachments from the macro config panel - no external hosting required
- Use the overlay feature to add a dark or colored semi-transparent layer over background images for better text contrast

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
| Work in progress | Page being actively edited or drafted |
| Info | General information, notes, tips |
| Warning | Caution, important considerations |
| Error | Errors, failures, destructive actions |
| Success | Confirmations, completed steps |
| Sensitive | Sensitive or restricted information |
| Outdated | Content that may be stale or superseded |

## Configuration Options

| Setting | Options |
|---|---|
| Alert type | Work in progress, Success, Error, Info, Sensitive, Warning, Outdated |
| Style | Image Alert (with icon image) or Simple Alert (text only) |
| Title | Bold heading for the alert (max 50 characters, required) |
| Body | Alert message text (max 500 characters, required) |
| Image | Custom image upload - only visible when Style is Image Alert |
| Permanently dismiss | Checkbox - adds a dismiss option so readers can hide the alert permanently (stored in browser local storage) |
| Background color | Color picker or custom hex |
| Text color | Color picker or custom hex |

## Known Limitations

- The Permanently Dismiss option stores the dismissed state in the browser's local storage - it resets if the user clears browser data or switches devices

## Best Practices

- Use Info for routine tips and asides
- Reserve Error for genuine error states or dangerous actions
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
| Tooltip text | The text that appears when the user hovers over the macro (max 250 characters, plain text only) |

The tooltip trigger is the content placed inside the macro body in the editor - any text or inline content you type inside the macro becomes the hoverable trigger.

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

### Part 2 - Footnote Summary
Insert **Footnote Summary** macro at the bottom of the section or page. This renders the numbered list of all footnote definitions.

## Scope Rules

- Footnote numbers reset to 1 at each Footnote Summary macro
- If you use tabs, footnotes inside a tab share numbering with the current page scope
- For multi-tab pages, place one Footnote Summary macro at the bottom of each tab if you want tab-scoped numbering, or one Footnote List at the bottom of the page for page-wide numbering

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
The Pop-up Dialog macro creates a modal overlay that opens when a reader clicks a trigger (button).

## Setup

1. Insert the **Pop-up Dialog** macro on your page
2. In the settings panel, enter a **Title** and **Body** for the dialog content
3. A trigger button is automatically added - click the edit icon next to "Pop-up Trigger Added" to customise the button label and alignment
4. Readers click the trigger button to open the dialog

## Configuration Options

| Setting | Options |
|---|---|
| Title | Text shown as the dialog heading (max 50 characters, required) |
| Body | Message content shown inside the dialog (max 500 characters, required) |
| Text Alignment | Left, Center, Right |
| Text color | Color picker or custom hex |
| Trigger button text | Label on the trigger button (default: "Open Pop-up") |
| Trigger alignment | Left, Center, Right |

## Common Use Cases

- **Definitions**: A "What is this?" link beside a complex term opens a definition modal
- **Quick reference**: A "Show accepted values" link opens a reference table without leaving the page
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
| Style | Style A (minimal with arrow), Style B (card with expand button), Style C (bordered/accented) |
| Icon | Optional icon shown beside the header - choose from the built-in icon library or upload an emoji |
| Header size | Normal text, H1, H2, H3, H4, H5, H6 |
| Accent color | Color picker - controls header text and icon color |
| Header background color | Color picker (Style A only) |

## Expand Styles

**Style A**: Minimal header with a left-side arrow indicator. Supports a custom header background color.

**Style B**: Card-style panel with an expand/collapse button on the right. No background color option.

**Style C**: Bordered style with a top and bottom accent line. No background color option.

Use the **Accent color** picker to color-code expand sections by category (e.g., blue for setup steps, green for verification, red for rollback steps).

## Common Use Cases

- **FAQ pages**: Each question is an expand header; answers collapse until clicked
- **Long runbooks**: Collapse less-common paths by default
- **Step-by-step guides**: Show one step at a time to reduce cognitive load`,
        },
        {
          slug: "advanced-card-macro",
          title: "Advanced Cards Macro",
          content: `# Advanced Cards Macro

<img src="/images/content-formatting-assets/advanced-card-macro.png" alt="Advanced Cards Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Advanced Cards macro creates structured content cards - rectangular panels with optional header, body text, image, and link. Cards can be arranged in grid layouts to create visual hub pages.

## Card Layout Options

| Columns | Description |
|---|---|
| 1 | Full-width single card per row |
| 2 | Two cards per row |
| 3 | Three cards per row |
| 4 | Four cards per row |
| 5 | Five cards per row |

## Per-Card Configuration

| Setting | Description |
|---|---|
| Title | Card header text (required) |
| Content | Body text content |
| Image | Upload a Confluence attachment image |
| Destination | Link to a Confluence page (search) or external URL |
| Open in new tab | Yes / No |
| Background color | Color picker |
| Text color | Color picker |

## Layout and Design Options

| Setting | Options |
|---|---|
| Image position | Left, Top, Bottom, Right, None |
| Image fit | Cover, Contain, Fill |
| Custom card height | Toggle + height input (100–800px) |
| Text alignment | Left, Center, Right |
| Hide card border | Toggle |
| Title size | 8–72px |
| Content size | 8–48px |
| Card spacing | Slider |

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

The banner supports multiple slides, each configured independently:

| Setting | Description |
|---|---|
| Slide components | Toggle which elements appear: Title, Body, Button |
| Title | Main heading text for this slide (max 50 characters) |
| Title text color | Color picker for the title text |
| Body | Secondary text below the title (max 250 characters) |
| Body text color | Color picker for the body text |
| Background image | Upload a Confluence attachment or use a stock image |
| Overlay mode / opacity | Dark overlay on the background image for text readability |
| Button text | Label for the call-to-action button |
| Button destination | Link to a Confluence page (search) or external URL |
| Open in new tab | Yes / No |
| Button background color | Color picker for the button |
| Button text color | Color picker for the button label |

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

Numbered Headings is a **page-level byline button**, not an inline macro. It appears in the page byline area (the metadata strip below the page title).

1. Open the page in **view mode**
2. Click the **Numbered Heading | Clovity** button in the page byline
3. A settings panel opens - enable numbering and configure the format
4. Click Save - the page headings update immediately

## Configuration Options

| Setting | Options |
|---|---|
| Enable / Disable | Toggle numbered headings on or off for this page |
| Number format | Decimal (1, 1.1, 1.1.1), Latin lower (a,b,c), Latin upper (A,B,C), Roman lower (i,ii,iii), Roman upper (I,II,III) |
| Skip headings | Multi-select - choose which heading levels (H1–H6) to exclude from numbering |

## Behavior Notes

- Numbering is applied to the live page HTML - heading text in the editor is not modified
- Settings are stored per-page - each page has its own enable/format configuration
- It is not inserted via "/" in the editor - it is a separate byline action button`,
        },
        {
          slug: "divider-macro",
          title: "Divider Macro",
          content: `# Divider Macro

<img src="/images/content-formatting-assets/divider-macro.png" alt="Divider Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Divider macro inserts a styled horizontal separator between page sections. It goes beyond the standard Confluence horizontal rule with multiple visual styles and spacing options.

## Three Divider Types

### Line
A styled horizontal rule. Choose a line style (Solid, Dashed, Dotted, Double, or Gradient), set the color, thickness, and width.

### Text
A divider with a centered or aligned text label. Configure the label text (max 30 characters), label style (Plain, Badge, Uppercase), text color, font size, and font weight. A line appears on either side of the label.

### Icon
A divider with an icon from the built-in icon library. Choose the icon, size (S/M/L), and the accompanying line style and width.

## Configuration Options

All three types share these base settings:

| Setting | Options |
|---|---|
| Type | Line, Text, Icon |
| Line style | Solid, Dashed, Dotted, Double, Gradient |
| Color | Color picker or custom hex |
| Thickness | Slider |
| Width | Full width toggle; or percentage slider when not full width |
| Alignment | Left, Center, Right |

Additional settings for **Text** type:

| Setting | Options |
|---|---|
| Label text | Free text (max 30 characters, required) |
| Label style | Plain, Badge, Uppercase |
| Text color | Color picker |
| Font size | Slider |
| Font weight | Light, Regular, Bold |

Additional settings for **Icon** type:

| Setting | Options |
|---|---|
| Icon | From built-in Lucide icon library |
| Icon size | S, M, L |

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

## Configuration Options

| Setting | Description |
|---|---|
| Date | Target expiry date (required, must be today or future) |
| Time | Target expiry time (optional) |
| Style | Boxes, Circles, or Gauges |
| Color | Color picker for the timer elements |
| Font size | Slider from 25–60px |
| Show labels | Toggle to show or hide "Days", "Hours", "Minutes", "Seconds" labels |
| Label text | Customizable label text for each unit (when Show labels is on) |

## Display Styles

### Boxes
Countdown units displayed in individual rectangular boxes for days, hours, minutes, and seconds.

### Circles
Countdown units displayed with circular progress rings for each time unit.

### Gauges
Countdown units shown as arc gauge indicators for each time unit.

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
The User Profile macro lets you add up to 30 profile cards on a single Macro. Each card displays a user's name and a custom details field (such as job title), along with an optional image and background color. Card Style controls only the visual appearance of the cards - it does not add or remove information fields.

## How to Set It Up

1. Insert the **User Profile** macro on your page
2. In the **General** tab, use the **Add Users** field to search for and add Confluence users (up to 30)
3. Choose a **Card Style**, **Card Size**, and set your preferred colors
4. Select a **Hover Effect** if desired
5. Switch to the **Content** tab to fill in details for each individual card
6. Publish the page

## General Tab Settings

| Setting | Description |
|---|---|
| Add Users | Search and add Confluence users to display - up to 30 users per macro |
| Card Style | 5 visual layout options that change the card's appearance only - no extra fields are added or removed by changing style |
| Card Size | Small, Medium, or Large |
| Name Color | Color of the user's display name on the card |
| User Details Color | Color of the details text (e.g. job title) on the card |
| Shape Color | Color of the avatar shape/background |
| Hover Effect | Visual effect applied when a viewer hovers over a card (e.g. No effect, shadow, lift) |

## Content Tab Settings (Per Card)

Each user card has its own Content tab with individual settings:

| Setting | Description |
|---|---|
| User Details | Free-text field (up to 50 characters) - enter the information to show on the card, such as job title, team, or role |
| Background Color | Optional background color for that individual card |
| Image | Optional custom image to display on the card |
| Move backwards / Move forwards | Reorder the card's position within the macro |
| Remove Profile Card | Delete this card from the macro |

## Card Style Note

Card Style selects between 5 visual appearances for how the card is laid out. It only affects how the card looks - it does not pull in additional data from Confluence profiles or show/hide extra fields. The information displayed on each card is only what you enter in the User Details field and the user's name.

## Common Use Cases

- **Team directory**: Add all team members, enter each person's role in the User Details field
- **Point-of-contact block**: Add the relevant person, enter their role or responsibility in User Details
- **On-call roster**: Add the current on-call person and update the User Details field each rotation
- **Escalation path**: Add L1, L2, L3 contacts with their escalation level in User Details`,
        },
        {
          slug: "status-macro",
          title: "Status Macro",
          content: `# Status Macro

<img src="/images/content-formatting-assets/status-macro.png" alt="Status Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Status macro creates color-coded status badges from 13 preset sets covering workflows, estimations, and other classifications. Select a preset set to display a badge group on your page.

## 13 Preset Status Sets

### Status Sets
| Set | Values |
|---|---|
| Workflow | TO DO, IN PROGRESS, REVIEW, BLOCKED, DONE |
| Approval | DRAFT, REVIEW, REJECTED, APPROVED |
| Quality | EXCELLENT, AVERAGE, POOR |
| Priority | VERY LOW, LOW, MEDIUM, HIGH, VERY HIGH |
| MoSCoW | MUST HAVE, SHOULD HAVE, COULD HAVE |

### Values & Estimations
| Set | Values |
|---|---|
| Linear scale | ?, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| Fibonacci | ?, 1, 2, 3, 5, 8, 13, 20, 40, 100 |
| T-shirt sizes | ?, XS, S, M, L, XL |
| Completion | 0%, 25%, 50%, 75%, 100% |

### Miscellaneous
| Set | Values |
|---|---|
| Tier | PLATINUM, GOLD, SILVER, BRONZE |
| Rarity | Common, Magical, Set, Rare, Legendary, Mythic |
| Star rating | ★, ★★, ★★★, ★★★★, ★★★★★ |
| Color dots | green, yellow, orange, gray |

## Configuration

Select a preset set from the visual card picker in the settings panel. Each card previews the status badges in that set. The selected set is then displayed on the page.

## Use Cases

- Project status table with a workflow status badge per row
- Backlog items with story point estimates (Fibonacci)
- Risk register with a priority badge per item
- Release notes with completion percentage badges`,
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
        {
          slug: "custom-fonts-macro",
          title: "Custom Fonts Macro",
          content: `# Custom Fonts Macro

<img src="/images/content-formatting-assets/custom-fonts-macro.png" alt="Custom Fonts Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Custom Fonts macro lets you add a styled text block to any Confluence page. You type the text directly into the macro and control its font family, weight, size, color, alignment, and line height - all from the config panel. Use it to create visually distinct headings, section titles, or callout text that goes beyond Confluence's standard heading styles.

## How to Set It Up

1. Insert the **Custom Fonts** macro on your page
2. In the **Text** field, type the text you want to display (required)
3. Set the **Alignment** - Left, Center, or Right
4. Under **Typography**, choose the **Font Family**, **Font Weight**, and drag the **Font Size** slider to the size you need
5. Pick a **Text Color** from the preset swatches or use the custom color picker
6. Optionally enable **Set line height manually** to control vertical spacing
7. Publish the page

## Configuration Options

| Setting | Options | Notes |
|---|---|---|
| Text | Free text input | Required - this is the text that will be displayed |
| Alignment | Left, Center, Right | Controls horizontal alignment of the text block |
| Font Family | Dropdown (e.g. Arial, and other available fonts) | Selects the typeface for the text |
| Font Weight | Regular, Bold, and other available weights | Controls how thick or thin the text strokes appear |
| Font Size | Slider (px) | Drag to set the exact size; displays the current value in px |
| Text Color | Preset color swatches + custom color picker | Sets the text color |
| Set Line Height Manually | Toggle on / off | When on, lets you enter a specific line height value |

## Common Use Cases

- **Custom page title**: Add a large, styled heading at the top of a space home page or landing page
- **Section labels**: Use a distinct font and color to mark major sections within a long page
- **Announcement text**: Display a bold, center-aligned message at the top of an announcement page
- **Visual emphasis**: Highlight a key statistic, quote, or call-to-action with a larger font size and a brand color`,
        },
        {
          slug: "news-macro",
          title: "News Macro",
          content: `# News Macro

<img src="/images/content-formatting-assets/news-macro.png" alt="News Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The News macro displays Confluence blog posts from your space as a styled feed on any Confluence page. You give the feed a title, set how many posts to show, and choose the feed type - the macro then renders the matching blog posts in that layout.

## How to Set It Up

1. Insert the **News** macro on your page
2. Enter a **Title** for the feed (required)
3. Enter a **Limit** - the number of blog posts to display
4. Select a **Feed Type** from the dropdown (e.g. Image Feed)
5. Publish the page

## Configuration Options

| Setting | Description |
|---|---|
| Title | Required - the heading displayed above the blog post feed |
| Limit | Number of blog posts to show in the feed |
| Feed Type | Controls the layout of the feed (e.g. Image Feed displays posts with their associated images) |

## Common Use Cases

- **Space home page**: Show the latest blog posts from your space so visitors always see recent updates
- **Team hub**: Surface team announcements written as Confluence blog posts
- **Project space**: Display project updates and news posts in a visual feed layout
- **Knowledge base**: Highlight recently published blog articles for readers

## Behavior Notes

- The macro pulls blog posts from the current Confluence space
- Only published blog posts are shown - drafts are not included
- Posts the viewer does not have read permission to access are not displayed`,
        },
        {
          slug: "page-tree-macro",
          title: "Page Tree Macro",
          content: `# Page Tree Macro

<img src="/images/content-formatting-assets/page-tree-macro.png" alt="Page Tree Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Page Tree macro displays all pages of the current Confluence space in a list when inserted on a page. Readers can see every page in the space and click any page title to navigate to it. The currently selected or active page is highlighted in the list.

## How to Set It Up

1. Insert the **Page Tree** macro on your page
2. The macro immediately renders a list of all pages in the current space - no additional configuration required
3. Publish the page

## Common Use Cases

- **Space home page**: Give readers a complete overview of all pages in the space from a single location
- **Navigation panel**: Embed the macro on a hub or landing page so team members can quickly find and jump to any page
- **Documentation index**: Let readers browse the full list of pages in a documentation space without using the sidebar
- **Onboarding pages**: Help new team members discover all available pages in the space

## Behavior Notes

- Only pages the viewer has read permission to access are shown
- Draft pages are not included in the list
- The active/selected page is visually highlighted in the list`,
        },
        {
          slug: "activity-stream-macro",
          title: "Activity Stream Macro",
          content: `# Activity Stream Macro

<img src="/images/content-formatting-assets/activity-stream-macro.png" alt="Activity Stream Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Activity Stream macro shows recent page activity from a selected Confluence space. Each entry displays the page name, the user who last modified it, and how long ago the change was made - grouped by user avatar. You set a title, choose the space, and set a limit on how many items to show.

## How to Set It Up

1. Insert the **Activity Stream** macro on your page
2. Enter a **Title** - this appears as the heading above the activity list (e.g. "Recent Activity")
3. Select the **Space** from the dropdown - the macro shows activity from that space
4. Enter a **Limit** - the number of recent page entries to display
5. Publish the page

## Configuration Options

| Setting | Description |
|---|---|
| Title | Heading displayed above the activity list - leave blank and "Your title will appear here" is shown as a placeholder |
| Space | The Confluence space to pull recent page activity from (selected from a dropdown of available spaces) |
| Limit | Number of recent page activity entries to display |

## What It Shows

The macro renders a list of recently modified pages from the selected space. Each entry shows:

- **Page name** - clickable link to the page
- **User name** - the person who last modified the page
- **Time ago** - how long ago the page was last changed (e.g. 14 days ago, 58 days ago)

Entries are grouped under the user's avatar, so you can see at a glance which user was responsible for which recent changes.

## Common Use Cases

- **Space home page**: Show the team which pages have been updated recently in the space
- **Team hub**: Display recent page changes from the team's space so members can follow what's being worked on
- **Project space**: Surface the most recently edited pages in a project space
- **Manager view**: Choose a specific space to monitor recent documentation activity

## Behavior Notes

- Only pages the current viewer has read permission to access are shown
- The activity is pulled from the space selected in the Space dropdown
- Draft pages are not included`,
        },
        {
          slug: "number-list-macro",
          title: "Number List Macro",
          content: `# Number List Macro

<img src="/images/content-formatting-assets/number-list-macro.png" alt="Number List Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Number List macro creates a styled numbered list on a Confluence page. You add each list item individually using the **Add a List item** button, choose a numbering style, set a color, pick a variation, and toggle rounded corners - all from the config panel.

## How to Set It Up

1. Insert the **Number List** macro on your page
2. Click **Add a List item** to add your first item - a text input appears for that item
3. Type the item text, then click **Add a List item** again to add more
4. Choose a **Numbering** style
5. Under **Appearance**, select a **Color**, **Variation**, and toggle **Fully rounded corners** if desired
6. Publish the page

## Configuration Options

### Numbering

| Option | Description |
|---|---|
| 1, 2, 3… | Standard decimal numbering |
| A, B, C… | Alphabetical numbering |
| I, II, III… | Roman numeral numbering |

### Appearance

| Setting | Options | Description |
|---|---|---|
| Color | Preset swatches (dark, white, blue, green, orange, red, purple, black) + custom picker | Sets the color of the number markers |
| Variation | Filled, Outlined, Plain | Controls the visual style of the number badge - Filled shows a solid colored badge, Outlined shows a border only, Plain shows the number without a badge |
| Fully rounded corners | Toggle on / off | When on, the number badge uses fully circular/pill-shaped corners |

## Common Use Cases

- **Step-by-step guides**: Add each step as a list item with a color that matches your page theme
- **Ranked lists**: Use A, B, C… or I, II, III… numbering to show priority or ranking
- **Procedures**: Use Filled variation with a bold color to make each step number visually stand out
- **Structured content**: Use Plain variation for a clean, minimal numbered list with custom color`,
        },
        {
          slug: "form-macro",
          title: "Form Macro",
          content: `# Form Macro

<img src="/images/content-formatting-assets/form-macro.png" alt="Form Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Form macro embeds a structured input form directly on any Confluence page. You give the form a title, then build it by adding fields from a list of available field types. The form preview updates as you add fields, so you can see how it will look before publishing.

## How to Set It Up

1. Insert the **Form** macro on your page
2. Enter a **Form Title** - this appears as the dark header bar at the top of the form (e.g. "My Form")
3. Under **Add a Field**, click any field type to add it to the form
4. The added field appears under **Form Fields** - you can reorder fields using the up/down arrows and remove them with the delete button
5. Continue adding fields until the form is complete
6. Publish the page

## Form Title

| Setting | Description |
|---|---|
| Form Title | Required - displayed as a bold header at the top of the rendered form |

## Available Field Types

Click any of the following from the **Add a Field** section to add it to your form:

| Field Type | Description |
|---|---|
| Short text | Single-line text input - for names, short answers, IDs |
| Paragraph | Multi-line text input - for descriptions, comments, or longer responses |
| Number | Numeric input field |
| Date field | Calendar date picker |
| Attachment upload | Lets the form submitter upload a file |
| Dropdown list | Single-select dropdown from a list of options |
| Page list | Lets the submitter select from Confluence pages |
| User list | Lets the submitter select a Confluence user |
| Label list | Lets the submitter select from Confluence labels |
| Table field | A table-based input field |

## Managing Form Fields

Once a field is added to the **Form Fields** list:

- **Reorder** - use the up/down arrows on the right of each field to change its position
- **Remove** - click the delete (×) button to remove a field from the form

## Common Use Cases

- **Request intake**: Build an IT or HR request form with short text, dropdown, and attachment upload fields
- **Feedback collection**: Use paragraph and dropdown fields to gather structured post-event feedback
- **Data collection**: Use number, date, and user list fields to capture structured information from team members
- **File submission**: Use the attachment upload field to let users submit files directly through a Confluence page`,
        },
        {
          slug: "markdown-renderer-macro",
          title: "Markdown Renderer Macro",
          content: `# Markdown Renderer Macro

<img src="/images/content-formatting-assets/markdown-renderer-macro.png" alt="Markdown Renderer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The Markdown Renderer macro takes raw Markdown text and renders it as formatted Confluence content. Paste any standard Markdown - headings, lists, bold/italic, code blocks, tables, links - and it displays as styled, readable output without converting it to Confluence storage format.

## How to Use

1. Insert the **Markdown Renderer** macro
2. Paste your Markdown source text into the macro body
3. The macro renders a preview in edit mode
4. Publish the page - readers see the formatted output, not the raw Markdown

## Supported Markdown Syntax

| Element | Markdown | Rendered As |
|---|---|---|
| Headings | \`# H1\`, \`## H2\`, \`### H3\` | Styled headings |
| Bold | \`**text**\` | Bold text |
| Italic | \`*text*\` | Italic text |
| Code (inline) | \`\\\`code\\\`\` | Monospace inline |
| Code block | \`\\\`\\\`\\\`language\\\`\\\`\\\`\` | Syntax-highlighted code block |
| Table | \`\| col \| col \|\` | Formatted table |
| Ordered list | \`1. item\` | Numbered list |
| Unordered list | \`- item\` | Bulleted list |
| Link | \`[label](url)\` | Hyperlink |
| Blockquote | \`> text\` | Indented quote block |
| Horizontal rule | \`---\` | Divider line |

## Common Use Cases

- **Docs-as-code migration**: Paste README.md or other Markdown files directly into Confluence without reformatting
- **Developer documentation**: Engineers who write in Markdown can contribute Confluence pages without learning the Confluence editor
- **Cross-platform content**: Maintain content in Markdown in a Git repo and mirror it to Confluence by pasting into this macro
- **API reference**: Paste OpenAPI or README-style Markdown descriptions into Confluence pages alongside other content

## Limitations

- Markdown is stored verbatim inside the macro - Confluence search indexes the rendered text, not the raw Markdown source
- Custom Markdown extensions (GitHub Flavored Markdown task lists, footnotes, definition lists) may not render - standard CommonMark syntax is most reliable
- Images referenced via relative paths in the Markdown will not render; use absolute URLs`,
        },
        {
          slug: "html-renderer-macro",
          title: "HTML Renderer Macro",
          content: `# HTML Renderer Macro

<img src="/images/content-formatting-assets/html-renderer-macro.png" alt="HTML Renderer Macro screenshot" style="width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0 24px;" />

## What It Does
The HTML Renderer macro renders custom HTML markup inside a Confluence page. It supports standard HTML elements, inline CSS, and safe embed codes - giving authors who know HTML direct control over layout and styling on specific sections of a page.

## How to Use

1. Insert the **HTML Renderer** macro
2. Paste or type your HTML into the macro body
3. The macro sanitizes the HTML and renders a preview in edit mode
4. Publish the page - readers see the rendered HTML output

## Supported HTML Elements

| Category | Supported Tags |
|---|---|
| Structure | \`div\`, \`section\`, \`article\`, \`header\`, \`footer\`, \`p\`, \`span\` |
| Headings | \`h1\` – \`h6\` |
| Text formatting | \`strong\`, \`em\`, \`u\`, \`s\`, \`code\`, \`pre\`, \`blockquote\` |
| Lists | \`ul\`, \`ol\`, \`li\`, \`dl\`, \`dt\`, \`dd\` |
| Tables | \`table\`, \`thead\`, \`tbody\`, \`tr\`, \`th\`, \`td\` |
| Media | \`img\` (src must be absolute URL), \`figure\`, \`figcaption\` |
| Links | \`a\` (href with http/https) |
| Inline style | \`style\` attribute on any element |

## Sanitization Rules

For security, the following are stripped before rendering:

- \`<script>\` tags and JavaScript event handlers (\`onclick\`, \`onload\`, etc.)
- \`<iframe>\` tags (use Confluence's native embed for iframes)
- External stylesheet links (\`<link rel="stylesheet">\`)
- \`<form>\` and \`<input>\` elements (use the Form Macro for input collection)
- \`data:\` and \`javascript:\` URIs in \`href\` or \`src\` attributes

## Common Use Cases

- **Custom layouts**: Multi-column HTML layouts using flexbox or grid via inline CSS - useful when Confluence's column macro isn't flexible enough
- **Styled callouts**: Highly customized callout boxes that go beyond what the Alert macro offers
- **Embedded badges or shields**: Static SVG badges (e.g., build status, version number) from external badge services
- **Complex tables**: HTML tables with \`colspan\`, \`rowspan\`, or cell-level background colors not possible in Confluence's native table editor
- **Third-party widget embeds**: Static HTML embed codes from tools that provide non-iframe embeds (e.g., charts, maps with static HTML output)

## Limitations

- JavaScript is not executed - HTML Renderer is for markup and styling only, not interactive widgets
- \`<iframe>\` is blocked; use Confluence's built-in Embed macro for video and external content iframes
- Inline styles apply only within the macro container - they cannot affect elements outside the macro body
- Very large HTML blocks may affect page load time; keep HTML concise`,
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

- **Globally**: The Attachment Management Center is accessible globally - you do not need to go through Space Settings

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

Content Formatting Macros includes three ready-to-use Confluence page templates that demonstrate the app's capabilities in realistic, production-ready page designs.

---

## Template 1 - Team Hub

A team space home page with a welcome header, vision and mission cards, a photo-based member directory, resource cards, and helpful links. Also creates two child pages: Meeting Notes and Ways of Working.

### Page Structure

| Section | Content |
|---|---|
| Welcome Header | Styled title with team name and welcome message |
| Team Culture | Vision and Mission background cards side by side |
| Get in Touch | Button links to Slack channel, team email, support desk, and product wiki |
| Meet the Team | Department label cards + person photo cards in a 4-column grid (Engineering, Marketing, Product) |
| Team Activity | Placeholder section for Jira macros (issues, charts, or timeline) |
| Recently Updated | Placeholder for Confluence Recently Updated macro |
| Team Resources | 3 Advanced Cards linking to Onboarding Resources, Ways of Working, and Meeting Notes |
| Helpful Links | Buttons in 3 columns linking to tools, repos, and dashboards |

### Macros Used
- Background (Vision and Mission cards)
- Buttons (Get in Touch links, Helpful Links columns)
- Advanced Cards (4-column member directory, 3-column resource cards)

### Child Pages Created
| Child Page | Contents |
|---|---|
| Meeting Notes | Sprint planning table, committed tickets table, decisions and action items table |
| Ways of Working | Team ritual cards (Standup, Sprint Planning, Retro), team norms list, definition of done |

---

## Template 2 - Company Hub

A company-wide intranet landing page with a rotating banner, essentials panel, department directory, HR resources, and other resource links.

### Page Structure

| Section | Content |
|---|---|
| Rotating Banner | Interactive Banner with 3 slides (Welcome, Connect & Grow, Knowledge Hub) |
| Essentials | Quick-access buttons: Single Sign-On, Expenses, HR tool |
| Who We Are | Company description paragraph |
| Recent Blogs | Placeholder for a Confluence Blog Posts stream |
| Team in Action | Image background section with company culture description |
| Connect on Socials | Buttons for Twitter, LinkedIn, and YouTube |
| Departments Grid | 10 Advanced Cards in a 5-column grid: Finance, Marketing, People, GTM, Legal, Education, Product, Engineering, Sales, UX/UI |
| HR Help | Image background with HR team description and HR Hub button |
| HR FAQ | 3 collapsible expand sections: New Employees, Referral Program, Career Development |
| Other Resources | 3-column layout: IT Support, Together Resources, Tools & Apps |

### Macros Used
- Interactive Banner (3-slide rotating carousel)
- Background (color and image variants for multiple sections)
- Buttons (vertical and horizontal, for Essentials and social links)
- Advanced Cards (10-card department grid, 5 columns)
- Advanced Expand (HR FAQ collapsible items)

---

## Template 3 - Monthly Project Report

A single-page monthly report covering project summary, KPI targets, key initiatives (tabbed), upcoming focus areas, and team kudos.

### Page Structure

| Section | Content |
|---|---|
| Report Banner | Interactive Banner with report title and monthly summary |
| Project Summary | Table with project name, status date, PM, stakeholders, and links - alongside a Table of Contents |
| Target Check | 3 Background cards, each showing a KPI's current value vs. target and insights |
| Key Initiatives | Custom Tabs - one tab per initiative, each with a metrics table, insights, and project links |
| Next Up | 3 Advanced Cards for upcoming focus areas |
| Kudos | Table recognizing team members with appreciation notes |

### Macros Used
- Interactive Banner
- Background (Target Check KPI cards)
- Tooltip (inline metric definitions, e.g. MAU)
- Custom Tabs (one tab per initiative in the Key Initiatives section)
- Advanced Cards (Next Up section, 3 cards)

---

## How to Access Templates

1. In Confluence, navigate to the space where you want to create the page
2. Click **Create** → **From Template**
3. Search for **"Content Formatting"** or browse the template gallery
4. Select **Team Hub**, **Company Hub**, or **Monthly Project Report**
5. Click **Use Template** - the page opens in edit mode with all macros pre-configured
6. Replace placeholder text and configure macros with your actual content

---

## Troubleshooting Templates

| Issue | Fix |
|---|---|
| Templates not showing in the gallery | Confirm the app is installed and activated for the space |
| Macros showing placeholder content | Edit each macro and configure it with real data |
| Team Hub child pages missing | Child pages (Meeting Notes, Ways of Working) are created automatically when the template is applied |
| Banner images not loading | Confirm the template assets are deployed alongside the app |`,
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
## 1. Overview

As Confluence spaces grow, content becomes harder to navigate, pages become long and inconsistent, and attachments get scattered across spaces and pages. This app solves those problems by giving teams a complete toolkit to:

- Build guided content hubs with tabs or dropdown navigation.
- Make pages more scannable and interactive using formatting macros.
- Tailor what different audiences see using Conditional show / Conditional hide visibility rules.
- Manage attachments at scale using Attachment Control Center.

This app is designed for teams who want better Confluence documentation without manual maintenance or custom CSS.

## 2. What's Included

### Tabs Navigation

Create hubs for browsing multiple sections on one page.

**Includes:**

- **Tab Parent Content Mapper:** generate tabs from a parent page's direct children.
- **Tab Label Content Mapper:** enter a label name - every page tagged with that label becomes its own separate tab.
- **Tab Confluence Page Mapper:** create a hub by selecting pages manually.
- **Create Custom Tabs:** create fully custom tabs with rich content & embeds.

### Content Formatting Macros

Enhance pages with interactive macros (No CSS needed).

**Common formatting capabilities:**

- Highlight critical information.
- Guide users with call-to-actions.
- Organize long pages into collapsible sections.
- Add visual structure with banners, cards, and section backgrounds.
- Show progress across multi-step content.

**32 macros include:** Buttons, Alert, Background, Tooltip, Progress Bar, Footnotes, Footnotes Summary, Pop-up Dialog, Advanced Expand, Advanced Cards, Interactive Banner, Numbered Headings, Divider, Countdown Timer, User Profile, Status Macro, JSON Viewer, Custom Fonts, News, Page Tree, Activity Stream, Number List, Form Macro, Markdown Renderer, HTML Renderer, and more.

### Visibility Rules

Target content to the right audience on the same page.

**Includes:**

- **Conditional Show:** Show content only to selected users or groups.
- **Conditional Hide:** Hide content from selected users or groups.

**Use cases:** internal notes on shared pages, role-based instructions, admin-only sections, staged rollouts.

### Attachment Control Center

A global attachment dashboard - accessible globally - to manage files across your Confluence site.

**Capabilities include:**

- Storage and file-type overview.
- Searchable attachment table across spaces and pages.
- Filtering by space, file type, uploader, version & date range.
- Preview, download, and admin-controlled deletion.
- Bulk actions (download ZIP / bulk delete).
- Deletion audit log for accountability.

### Built-in Page Templates

Create fully structured Confluence pages with a single click - all macros pre-configured, child pages created, and buttons automatically linked.

**Available templates:**

- **Team Hub:** A team space home page with a welcome header, vision & mission cards, photo-based member directory, resource cards, and helpful links. Creates two child pages automatically: Meeting Notes and Ways of Working.
  Macros used: Background · Buttons · Advanced Cards

- **Company Hub:** A company-wide intranet landing page with a 3-slide rotating banner, essentials panel, department directory (10 cards), HR FAQ accordion, team-in-action section, and social links.
  Macros used: Interactive Banner · Background · Buttons · Advanced Cards · Advanced Expand

- **Monthly Project Report:** A single-page monthly report with a report banner, project summary table, KPI target cards, key initiatives (tabbed), upcoming focus areas, and a team kudos section.
  Macros used: Interactive Banner · Background · Tooltip · Custom Tabs · Advanced Cards

**How it works:**

- Access templates from the app's global page.
- Configure the space, parent page, labels, and page title in the modal.
- **Click Create Page:** the main page and any child pages are created instantly with all macros pre-configured and ready to edit.

**Use cases:** new employee onboarding, company intranet homepages, team landing pages, department hubs, and any page that benefits from a consistent, professionally structured starting point.

## 3. Use Cases

**Documentation Hubs:**
- Product documentation hubs.
- Process/playbook hubs.
- Policy hubs.
- "Start Here" onboarding hubs.
- Release and rollout hubs.

**Controlled Visibility:**
- Internal guidance (team-only).
- Hide sensitive sections.
- Admin-only operation blocks.

**Attachment Governance:**
- Find large files fast.
- Bulk download or clean attachments.
- Track deletions via audit log.

**Cleaner and guided pages:**
- **Onboarding:** CTAs & progress.
- **Runbooks:** Collapsible troubleshooting.
- **Resources:** Cards & banners.
- **Pages:** Inline help & references.

## 4. Quick Start

**Step 1: Build a hub with Tabs Navigation**
- Edit a Confluence page.
- Insert a tabs macro (example: Tab Parent Content Mapper).
- Select the content source (parent page / labels / selected pages).
- Publish and test in view mode.

**Step 2: Upgrade the page with Formatting Macros**
- Insert formatting macros where needed.
- Add structure using Background, Banner, and Card macros.
- Add actions using buttons.
- Control long content using Advanced Expand.
- Add a guided flow using a Progress Bar.

**Step 3: Apply Visibility Rules**
- Wrap content with Conditional show or Conditional hide.
- Select users/groups.
- Publish.
- Validate with another user role (recommended).

**Step 4: Manage attachments globally**
- Open Attachment Control Center.
- Use search and filters to find target files.
- Preview/download.
- Use bulk actions if needed.
- Review the deletion audit log. This is for admins.

## 5. Recommended "Starter Setup" (Most Customers)

**For a standard documentation hub**

- Tabs Navigation: Parent Content or Labels.
- Layout: Tabs (switch to Dropdown if large list).
- Add Buttons: Start Here / Setup / FAQ.
- Add Background blocks to create visual sections.
- Add Advanced Expand for FAQs and troubleshooting.
- Add Cards for resource links.
- Add Progress Bar for onboarding or multi-step docs.
- Add Conditional show / Conditional hide to reduce clutter by audience.
- Use Attachment Control Center monthly for cleanup.

## Key Benefits for Customers

- **Less clicking:** guided hubs reduce page-tree hunting.
- **Less maintenance:** hubs update automatically when content changes.
- **Cleaner pages:** structured layouts improve readability and adoption.
- **Interactive experience:** dialogs, expandable sections, banners, cards, and CTAs.
- **Audience targeting:** reduce clutter without duplicating pages.
- **Attachment control:** find, filter, bulk manage, and audit deletion actions.

## Supported Macros at a Glance

| **Macro** | **Purpose** |
| --- | --- |
| Tab Parent Content Mapper | Tabs from a parent page's child pages |
| Tab Label Content Mapper | Each page tagged with your entered label becomes a tab |
| Tab Page Mapper | Tabs from manually selected pages |
| Custom Tabs | Manual rich-content tabs |
| Conditional Show | Show content to specific groups |
| Conditional Hide | Hide content from specific groups |
| Buttons | Styled CTA buttons |
| Background | Section background color/image |
| Alert | Info, Warning, Error, Success banners |
| Tooltip | Hover-to-reveal definitions |
| Progress Bar | Multi-step page workflow tracker |
| Footnotes | Inline reference notes |
| Footnotes Summary | Consolidated list of all footnotes on a page |
| Pop-up Dialog | Modal overlays |
| Advanced Expand | Styled collapsible sections |
| Advanced Cards | Rich content cards with layout |
| Interactive Banner | Full-width announcement banners |
| Numbered Headings | Auto-numbered heading hierarchy |
| Divider | Styled horizontal rules |
| Countdown Timer | Live event countdown |
| User Profile | User profile cards (up to 30 per macro) |
| Status Macro | Color-coded status badges |
| JSON Viewer | Formatted JSON display |
| Custom Fonts | Styled text block with custom typography |
| News | Display latest Confluence blog posts |
| Page Tree | All pages of the current space in a navigable list |
| Activity Stream | Recent page activity from a selected space |
| Number List | Styled numbered lists (1,2,3 / A,B,C / I,II,III) |
| Form Macro | Collect structured user input through forms |
| Markdown Renderer | Render Markdown content inside Confluence |
| HTML Renderer | Render custom HTML content inside Confluence |

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Demo Doc - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Content_Formatting_Macros_Tabs_Navigation_Visibility_CSS_Demo_Doc_7753ffb23f.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
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
*Standardize Content. Reduce Chaos.*

## What This App Delivers

- **Less page clutter**
- **Instant Navigation**
- **Consistent Formatting**
- **Cleaner spaces**

| | |
| --- | --- |
| **32** Powerful Macros in One App | **3** Ready-to-Use Page Templates |
| **1** Install Replaces Multiple Apps | **0** CSS or Coding Skills Needed |

## App Core Capabilities

| **Capability** | **Description** |
| --- | --- |
| **Rich Content Formatting** | 32 easy-to-use macros that make your Confluence pages look professional - alerts, banners, cards, buttons, progress bars, forms, and much more. No design skills needed. |
| **Advanced Content Navigation (Tabs)** | Stop making readers scroll endlessly. Organize your page into clean, clickable tabs - pulled from child pages, labels, or hand-picked pages - in minutes. |
| **Dynamic Visibility** | Show the right content to the right people - on the same page. Show admin notes only to admins, hide sensitive info from guests, without creating separate pages. |
| **Attachment Management & Audit** | Find, filter, bulk-delete, and audit every file attachment across your Confluence site from one global dashboard. Keep storage clean and stay audit-ready. |

## Security You Can Trust

- **Run on Atlassian** - Runs 100% inside Atlassian Cloud. Your data never leaves the platform - no external servers, no third-party storage, ever.
- **AGC Compatible** - Fully compatible with Atlassian Government Cloud.
- **ISO 27001 Certified** - Clovity is an ISO 27001 certified company.
- **Zero External Servers** - No external infrastructure required.

## Key Differentiators

**32 Macros - All in One App**
From simple alerts to full-page layouts, forms, markdown, HTML, activity feeds & more. One subscription. No limits on what you can build.

**One Subscription, Not Many**
One install replaces multiple separate apps, licenses & support channels - saving your team time and your company money.

**Forge-Native Architecture**
Runs 100% inside Atlassian Cloud. Your data never leaves the platform - no external servers, no third-party storage, ever.

**Anyone Can Use It**
No CSS, no coding, no design skills needed. If you can edit a Confluence page, you can use every macro in this app.

**Built for Every Team**
Designed for PMs, HR, IT, DevOps, Scrum Masters, Tech Leads, BAs, Tech Writers, and more - not just Confluence admins.

**3 Ready-to-use Templates**
Team Hub, Company Hub, and Monthly Project Report - create fully structured pages with one click, all macros pre-configured.

## Build For

- Docs & Knowledge Owners.
- Engineering & Delivery Teams.
- IT / Confluence Admins.
- Customer Support & Success.
- Product & Program Managers.
- HR, Finance & Operations Teams.

## Why Enterprise Teams Prefer Clovity

- 24/7 support with direct access to Atlassian experts.
- Seamless native UX that works like Atlassian tools.
- Cloud infrastructure ensuring high availability for global teams.

## Try Our Other Apps In The Suite

Extend Jira & Confluence with dashboards, reporting, planning, and technical documentation tools.

| **App** |
| --- |
| [LaTeX Math Formulas & UML Diagrams (ERD & Flowcharts)](/apps/latex-diagrams-confluence) |
| [Reports, Charts, Templates, CQL & Export for Confluence](/apps/reports-charts-confluence) |
| [Dashboard Templates, Charts, Graphs & Reports for Jira](/apps/dashboard-charts-jira) |
| [Time Tracking, Resource Planning & Project Management](/apps/time-tracking-jira) |

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Sales Doc - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Sales_Doc_83e39f4d46.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
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
This comparison shows how our app covers the core features of 5 competing Confluence apps - Navitabs, Visibility, Mosaic, Advance Attachment Manager, and AURA - in a single install.

## Navitabs vs Our App

| **Navitabs Feature** | **Our App Equivalent** |
| --- | --- |
| Tab wizard | Not included |
| Tab group macro | Covered in Create Custom Tabs |
| Tab wizard - Define label | Tab label content mapper |
| Tab wizard - Create your own | Create Custom Tabs |
| Tab wizard - Define a parent content | Tab Parent Content Mapper |
| Tab wizard - Select existing content | Tab Confluence Page Mapper |

## Visibility vs Our App

| **Visibility Feature** | **Our App Equivalent** |
| --- | --- |
| Visibility Show-if | Conditional show |
| Visibility Hide-if | Conditional hide |

## Mosaic vs Our App

| **Mosaic Feature** | **Our App Equivalent** |
| --- | --- |
| Tabs &#124; Mosaic | Covered in Create Custom Tabs |
| HTML &#124; Mosaic | Covered in Create Custom Tabs |
| Alert &#124; Mosaic | Alert Macro |
| Latex &#124; Mosaic | Not covered |
| Button &#124; Mosaic | Buttons Macro |
| Tooltips &#124; Mosaic | Tooltip Macro |
| Footnotes &#124; Mosaic | Footnotes Macro |
| Background &#124; Mosaic | Background Macro |
| ProgressBar &#124; Mosaic | Progress Bar Macro |
| Button Group &#124; Mosaic | Covered in Buttons |
| Pop-up dialogue &#124; Mosaic | Pop-up Dialog Macro |
| AdvancedCard &#124; Mosaic | Advanced Cards Macro |
| Numbered-Heading &#124; Mosaic | Numbered Headings Macro |
| BibTex Summary &#124; Mosaic | Not covered |
| Advanced Expand &#124; Mosaic | Advanced Expand Macro |
| Footnotes summary &#124; Mosaic | Footnotes Summary Macro |
| InteractiveBanner &#124; Mosaic | Interactive Banner Macro |
| BibTex Referencing &#124; Mosaic | Not covered |
| SmartDesigner &#124; Mosaic | Not covered |

## Advance Attachment Manager vs Our App

| **Advance Attachment Manager Feature** | **Our App Equivalent** |
| --- | --- |
| All attachment management features | Attachment Control Center - full global dashboard with search, filter, bulk delete, preview, download, and audit log |

## AURA vs Our App

| **AURA Feature** | **Our App Equivalent** |
| --- | --- |
| Aura - Tab Group | Create Custom Tabs |
| Aura - Tab (inside Tab Group) | Create Custom Tabs |
| Aura - Child Tabs | Tab Parent Content Mapper |
| Aura - Expand Group | Advanced Expand Macro |
| Aura - Expand (inside Expand Group) | Advanced Expand Macro |
| Aura - Divider | Divider Macro |
| Aura - Title | Custom Fonts Macro |
| Aura - Panel | Not covered |
| Aura - Cards | Advanced Cards Macro |
| Aura - Button | Buttons Macro |
| Aura - Background Color | Background Macro |
| Aura - Status | Status Macro |
| Aura - Progress | Progress Bar Macro |
| Aura - Countdown | Countdown Timer Macro |
| Aura - User Profile | User Profile Macro |
| Aura - Dynamic Content | Advanced Cards Macro |
| Aura - Embed | Not covered |
| Aura - HTML (iframe) | Covered in Create Custom Tabs |
| Aura - LaTeX Reference | Not covered |
| Aura - LaTeX Math | Not covered |

## Scaffolding Forms vs Our App

| **Scaffolding Forms Feature** | **Our App Equivalent** |
| --- | --- |
| Scaffolding Live Templates | Not covered |
| Scaffolding - Field Group | Form Macro |

## Refined Macro Toolkit vs Our App

| **Refined Macro Toolkit Feature** | **Our App Equivalent** |
| --- | --- |
| Refined Banner | Interactive Banner Macro |
| Refined Tab | Tab Navigation + Create Custom Tabs |
| Refined Step | Progress Bar Macro |
| Refined Page Builder | Not covered |
| Refined Button | Buttons Macro |
| Refined News | News Macro |
| Refined Latex | Not covered |
| Refined Panel | Background Macro + Alert Macro |
| Refined Countdown | Countdown Timer Macro |
| Refined Child Pages | Tab Parent Content Mapper |
| Refined Expandable Panel Group | Advanced Expand Macro |
| Refined Number List | Number List Macro |
| Refined Page Tree | Page Tree Macro |
| Refined Activity Stream | Activity Stream Macro |

## Coverage Summary (Overall)

Our app delivers **~83% coverage across all 7 competitors combined (53 out of 64 features)** in a single install, at a single subscription price.

We **fully cover Visibility (2/2) and Advance Attachment Manager (1/1)**, match nearly all Navitabs, Mosaic, AURA, and Refined Macro Toolkit capabilities, and cover the core Scaffolding Forms feature.

**What we don't cover (11 features across all 7 competitors):** LaTeX math & referencing (x4), BibTex Summary & Referencing (x2), SmartDesigner, Panel, Embed, Refined Page Builder, and Scaffolding Live Templates. These are highly specialized academic, niche, or page-builder features. For teams not needing LaTeX formulas or BibTex citations, our app covers everything else - and adds 32 macros the competitors don't have.

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Competitor Comparison - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Competitor_Doc_Content_Formatting_032034c63d.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
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
## Faster to Read. Easier to Govern. Simpler to Maintain.

**Plan smarter. Deliver faster. All in Confluence.**

Content Formatting Macros: Tabs, Navigation, Visibility & CSS is priced annually per Confluence Cloud instance based on your total user count. Teams of up to 10 users get full access at no cost.

## Cloud Annual Pricing

| **Team Size** | **Annual Price (USD)** |
| --- | --- |
| Up to 10 | $0.00 |
| 11 – 15 | $142.50 |
| 16 – 25 | $237.50 |
| 26 – 50 | $475.00 |
| 51 – 100 | $950.00 |
| 101 – 200 | $1,400.00 |
| 201 – 300 | $1,700.00 |
| 301 – 400 | $1,850.00 |
| 401 – 500 | $2,000.00 |
| 501 – 600 | $2,150.00 |
| 601 – 800 | $2,450.00 |
| 801 – 1,000 | $2,750.00 |
| 1,001 – 1,200 | $2,850.00 |
| 1,201 – 1,400 | $2,950.00 |
| 1,401 – 1,600 | $3,050.00 |
| 1,601 – 1,800 | $3,150.00 |
| 1,801 – 2,000 | $3,250.00 |
| 2,001 – 2,250 | $3,375.00 |
| 2,251 – 2,500 | $3,500.00 |
| 2,501 – 2,750 | $3,625.00 |
| 2,751 – 3,000 | $3,750.00 |
| 3,001 – 3,250 | $3,875.00 |
| 3,251 – 3,500 | $4,000.00 |
| 3,501 – 3,750 | $4,125.00 |
| 3,751 – 4,000 | $4,250.00 |
| 4,001 – 4,250 | $4,375.00 |
| 4,251 – 4,500 | $4,500.00 |
| 4,501 – 4,750 | $4,625.00 |
| 4,751 – 5,000 | $4,750.00 |

## Pricing Notes

- **Free for small teams** - Full feature access for up to 10 users at $0.00.
- **Annual billing** - Prices shown are per year, billed through Atlassian.
- **Cloud only** - Pricing applies to Confluence Cloud instances.
- **All features included** - Every pricing tier includes the full macro library: Tabs, Navigation, Visibility, CSS, Conditional Show/Hide, and 30+ formatting macros.
- **Paid via Atlassian** - Transactions are handled directly through the Atlassian Marketplace. No separate vendor billing.


<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">App Pricing - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/Content_Formatting_Macros_Tabs_Navigation_Visibility_CSS_1b69b9efda.pdf" target="_blank" rel="noopener noreferrer" style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },
  ],
};
