export const latexDiagramsConfluenceDocs = {
  appSlug: "latex-diagrams-confluence",
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
          slug: "what-is-latex-diagrams",
          title: "What is LaTeX Formulas & Diagrams?",
          sideVideo: {
            src: "https://www.youtube.com/embed/K7oRMlvbnJ0",
            title:
              "LaTeX Formulas & Diagrams for Confluence - Product Overview",
          },
          content: `
LaTeX Formulas & Diagrams (Gantt Charts, ERDs & Flowcharts) is a Confluence Cloud app that lets your team embed technical visuals and mathematical formulas directly on Confluence pages - no external tools, no image uploads, no copy-paste workarounds.

## Core Value Proposition

- **Render Mermaid diagrams** including flowcharts, sequence diagrams, ERDs, Gantt charts, mindmaps, and more
- **Display beautiful LaTeX math** for equations, matrices, aligned derivations, and technical formulas
- **Embed inline math** inside normal paragraph text without breaking the reading flow
- **Edit in a live split-view editor** - source on the left, rendered preview on the right

All of this runs natively inside Confluence Cloud using macros - no external servers, no data exports, no infrastructure to maintain.

<!--VIDEO_BREAK-->

## Three Macros, One App

| Macro | Best For |
|---|---|
| **UML Diagrams** | Flowcharts, sequences, ERDs, Gantt, mindmaps |
| **LaTeX Block** | Display equations, matrices, multi-line aligned math |
| **LaTeX Inline** | Math embedded inside paragraph text |

## Who Is It For?

- **Engineers and architects** who need diagrams in their technical specs and ADRs
- **Data scientists and analysts** who document models, metrics, and formulas
- **Product and project managers** who track timelines with Gantt charts
- **Technical writers** who need math-rich documentation alongside prose

## Macro Summary

### Diagrams Macro

**Best for:** architecture, workflows, sequences, ER diagrams, timelines.

**Editor features**

* Split Source/Preview editor (live rendering)
* Samples dropdown for quick starting examples

**Viewer features (on the page)**

* Edit (opens modal)
* Copy source (copies Mermaid text)
* Zoom in/out + Reset
* Pan by dragging
* Fullscreen mode
* Clear error panel for invalid syntax

---

### LaTeX Block Equations

**Best for:** equations, aligned multi-line math, matrices, cases.

**Editor features**

* Split Source/Preview editor (live rendering)
* Samples dropdown for quick starting examples

**Viewer features (on the page)**

* Edit (opens modal)
* Copy source (copies LaTeX)
* Zoom in/out + Reset
* Pan by dragging
* Fullscreen mode
* Clear error panel for invalid syntax

---

### LaTeX Inline Equations

**Best for:** paragraphs with math in-line.

**Editor features**

* Split Source/Preview editor (live rendering)
* Write normal text plus formulas

**Viewer features (on the page)**

* Minimal display for readability
* Hover edit icon to reopen editor
* Inline error highlighting if a specific formula fails`,
        },
        {
          slug: "demo-video",
          title: "Demo Videos & Walkthroughs",
          content: `2 step-by-step tutorials covering LaTeX equations and UML diagrams - click any video to start watching. New to the app? Start with [What is LaTeX Formulas & Diagrams?](/apps/latex-diagrams-confluence/what-is-latex-diagrams) first.`,
          videoGallery: {
            playlistUrl:
              "https://www.youtube.com/watch?v=B-GmmX_FqXc&list=PLACoCS_WiVwR83iIlxm8mX8XwxNjNCjUK",
            videos: [
              {
                id: "B-GmmX_FqXc",
                title: "Write Perfect LaTeX Equations Easily",
              },
              { id: "55dSYhCHEBQ", title: "Create UML Diagrams Fast and Easy" },
            ],
          },
        },
        {
          slug: "installation-setup",
          title: "Installation & Setup",
          content: `
## Prerequisites

Before installing, confirm:

1. You are a **Confluence Cloud space admin or site administrator** (required to install Marketplace apps)
2. Your instance is **Confluence Cloud** - this app does not support Confluence Server or Data Center
3. You have access to the **Atlassian Marketplace** from within Confluence

## Installation Steps

| Step | Action |
|---|---|
| 1 | Log in to your Confluence Cloud site as an administrator |
| 2 | Click the **gear icon** (Settings) → select **Apps** |
| 3 | Click **Find new apps** in the left sidebar |
| 4 | Search for **"UML Diagrams Math LaTeX"** |
| 5 | Click the app in the search results |
| 6 | Click **Try it free** (30-day trial) or **Buy now** |
| 7 | Review the requested permissions |
| 8 | Click **Accept** - the app installs immediately, no restart required |

## Verify Installation

After installation, open any Confluence page in edit mode:

1. Click inside the page body and type \`/\`
2. In the macro search, type **Diagrams** - you should see **UML Diagrams**
3. Search **LaTeX Block** - you should see **LaTeX Block Equations**
4. Search **LaTeX Inline** - you should see **LaTeX Inline Equations**

If all three macros appear, installation is complete and working.

![LaTeX Block Equations and LaTeX Inline Equations macros in Confluence macro search](/images/latex-diagram-confluence/Screenshot%202026-03-10%20171523.png)

![Easy UML Diagrams macro in Confluence macro search](/images/latex-diagram-confluence/Screenshot%202026-03-10%20171651.png)

## Permissions Requested During Install

| Permission | Why It's Needed |
|---|---|
| Read Confluence pages and spaces | Render macros when pages are viewed |
| Store macro body content | Persist your Mermaid/LaTeX source between edits |
| Read user information | Associate macros with page authors |
| Access Confluence storage format | Read and write macro markup within page content |

## First Steps After Install

Once installed, share the following with your team:

1. Point editors to the **Quick Start Guide** for first-use instructions
2. Confirm page editors can see the macros via the \`/\` menu
3. Insert a test diagram or equation to confirm rendering works end-to-end

## Uninstalling

To uninstall: Confluence Settings → Apps → Manage apps → find the app → click **Uninstall**. Macro content already saved on pages will no longer render after uninstallation.`,
        },
        {
          slug: "quick-start",
          title: "Quick Start Guide",
          content: `
Get up and running with your first diagram or equation in under 5 minutes.

## Who This Guide Is For

* **Admins:** install and validate the app - see [Installation & Setup](/apps/latex-diagrams-confluence/installation-setup)
* **All page editors:** insert macros, write content, edit later

## Quick Checklist

| Step | Action |
|---|---|
| 1 | Admin installs the app from the Atlassian Marketplace |
| 2 | Open a Confluence page in edit mode |
| 3 | Type \`/\` and search for the macro you want |
| 4 | Click the macro - the editor opens automatically |
| 5 | Write or paste your content in the Source panel |
| 6 | Check the Preview panel to confirm rendering |
| 7 | Click **Save** in the editor, then **Publish** the page |

## Inserting Your First Diagram

1. Edit a Confluence page and type \`/Diagrams\`
2. Click **UML Diagrams** in the macro list

![Easy UML Diagrams macro selection in Confluence](/images/latex-diagram-confluence/Screenshot%202026-03-10%20171651.png)

3. The split-view editor opens - the Source panel is on the left
4. Paste a sample diagram or type your own Mermaid code, for example:

\`\`\`
flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Do it]
    B -->|No| D[Skip it]
    C --> E[End]
    D --> E
\`\`\`

5. The Preview panel on the right renders the diagram live

![Clovity UML Editor showing flowchart with Source panel on left and rendered Preview on right](/images/latex-diagram-confluence/Screenshot%202026-03-10%20173235.png)

6. Click **Save** - the diagram appears on the page

## Inserting Your First Equation

1. Edit a page and type \`/LaTeX Block\`
2. Click **LaTeX Block Equations**

![LaTeX Block Equations and LaTeX Inline Equations macro options in Confluence](/images/latex-diagram-confluence/Screenshot%202026-03-10%20171523.png)

3. In the Source panel, type raw LaTeX - for example: \`\\frac{a}{b}\`
4. Preview renders the equation on the right
5. Click **Save** - the display equation appears on the page

## Inserting Inline Math

1. Edit a page and type \`/LaTeX Inline\`
2. Click **LaTeX Inline Equations**
3. In the Source panel, write normal text and LaTeX equations, for example:

\`The area of a circle is A = \\pi r^2 where r is the radius.\`

4. Click **Save** - the paragraph renders with embedded math

## Editing Existing Content

### Edit a Diagram or LaTeX Block

1. View the published page
2. Hover over the rendered macro
3. Click the **Edit** (pencil) icon in the hover toolbar
4. The modal editor reopens with your saved source
5. Update the content and click **Save/Publish**

### Edit Inline Equations

1. Hover over the inline content block
2. Click the **Edit icon**
3. Update the paragraph and formulas
4. Click **Save changes**

## Pro Tip: Safe Editing Workflow

When making large changes:

1. Copy your current source into a temporary note before editing
2. Make edits incrementally
3. Save and verify rendering at each step
4. If something breaks, paste back from your note

## Common Paths

* **Admin setup** → [Installation & Setup](/apps/latex-diagrams-confluence/installation-setup)
* **Diagram reference** → [Diagrams Macro](/apps/latex-diagrams-confluence/diagrams-macro)
* **LaTeX reference** → [LaTeX Block Equations](/apps/latex-diagrams-confluence/latex-block-equations)
* **Inline math** → [LaTeX Inline Equations](/apps/latex-diagrams-confluence/latex-inline-equations)
* **Code examples** → [Examples Library](/apps/latex-diagrams-confluence/examples-library)`,
        },
        {
          slug: "system-requirements",
          title: "System Requirements",
          content: `
## Platform Requirements

| Requirement | Details |
|---|---|
| **Confluence Edition** | Confluence Cloud and AGC |
| **Confluence Server** | Not supported |
| **Confluence Data Center** | Not supported |
| **Atlassian Platform** | Confluence Cloud Forge / Connect app |

This app is exclusively designed for Confluence Cloud. There is no Server or Data Center version.

### Mermaid Coverage

Supported diagram types include:

| Type | Header |
|---|---|
| Flowchart | \`flowchart TD\` / \`graph TD\` |
| Sequence | \`sequenceDiagram\` |
| Class | \`classDiagram\` |
| Entity Relationship | \`erDiagram\` |
| Gantt | \`gantt\` |
| Pie | \`pie\` |
| Mindmap | \`mindmap\` |
| State | \`stateDiagram-v2\` |

## Browser Requirements

All modern browsers are supported:

| Browser | Support |
|---|---|
| Google Chrome | Latest 2 versions |
| Mozilla Firefox | Latest 2 versions |
| Microsoft Edge | Latest 2 versions |
| Apple Safari | Latest 2 versions |

Internet Explorer is not supported.

## Network & Infrastructure

* **No external servers:** all rendering happens client-side in the browser
* **No data exports:** macro source content stays within your Confluence environment
* **No special network configuration** beyond standard access to \`*.atlassian.net\` and \`*.atlassian.com\`

## Known Limitations

- **Cloud only** - no Server or Data Center support
- **No real-time collaboration** - simultaneous edits use last-save-wins storage
- **No bulk import** - content must be entered via the macro editor`,
        },
        {
          slug: "permissions-access",
          title: "Permissions & Access",
          content: `
## How Access Works

LaTeX Formulas & Diagrams does not introduce its own user roles or permission system. It relies entirely on standard Confluence permissions:

| Role | How It's Determined | What They Can Do |
|---|---|---|
| **Space Admin / Site Admin** | Confluence space or site administrator | Install and manage the app from the Marketplace |
| **Page Editor** | Any Confluence user with Edit permission on a page | Insert, edit, and save macros on that page |
| **Page Viewer** | Any Confluence user with View permission on a page | View rendered diagrams and equations |

There are no special per-user roles to configure inside the app.

## Installing the App (Admins Only)

Only a **Confluence site administrator** (or a user with Confluence administrator privileges) can install apps from the Atlassian Marketplace. Regular page editors cannot install the app.

Steps:
1. Log in as a site administrator
2. Go to **Settings → Apps → Find new apps**
3. Search for and install **UML Diagrams Math LaTeX**
4. Accept the requested permissions

Once installed, the macros are immediately available to all page editors across the entire Confluence site.

## Using Macros (Page Editors)

Any Confluence user who has **Edit** permission on a page can:

* Insert the Diagrams, LaTeX Block, or LaTeX Inline macro via the \`/\` macro menu
* Open the split-view editor and write or paste content
* Save and publish the macro to the page

No additional setup, role assignment, or approval is required for editors.

## Viewing Rendered Content (All Users)

Any Confluence user who has **View** permission on a page can see:

* Rendered Mermaid diagrams
* Rendered LaTeX equations
* Rendered inline math within paragraphs

Viewers do not need any special permissions beyond standard page access.

## Space-Level Considerations

| Scenario | What Happens |
|---|---|
| User has Edit on the page | Can insert and edit macros |
| User has View only | Can see rendered content but cannot edit macros |
| User has no page access | Cannot see macros or rendered content |
| Admin restricts a space | App macros respect Confluence space restrictions |

## Checking App Permissions

To review what permissions the app has requested:

1. Go to **Confluence Settings → Apps → Manage apps**
2. Find **LaTeX Formulas & Diagrams**
3. Click **Details** to see the permission list

## Requesting Access to Edit Pages

If you cannot insert macros, the issue is likely a Confluence page permission rather than an app setting. Contact your **Confluence Space Admin** to request Edit access to the relevant space or page.`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3. USER GUIDE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "user-guide",
      title: "User Guide",
      articles: [
        {
          slug: "start-here-by-role",
          title: "Start Here - Guide by Role",
          content: `
LaTeX Formulas & Diagrams adds three macros to the Confluence editor: **UML Diagrams** (Mermaid), **LaTeX Block Equations**, and **LaTeX Inline Equations**. All three open the same split-view editor. Use this guide to find the right starting point for your role.

## Technical Writer / Documentation Lead

You write technical documentation and need diagrams and formatted equations embedded in pages.

**Start with:**
1. [Quick Start Guide](/apps/latex-diagrams-confluence/quick-start) - insert your first diagram in under 3 minutes
2. [Diagrams Macro](/apps/latex-diagrams-confluence/diagrams-macro) - full Mermaid diagram reference (flowcharts, sequence diagrams, ERDs, Gantt charts)
3. [How to: Document a System Architecture](/apps/latex-diagrams-confluence/how-to-architecture-docs) - end-to-end workflow
4. [Examples Library](/apps/latex-diagrams-confluence/examples-library) - copy-paste ready examples for every diagram type

---

## Developer / Software Engineer

You need architecture diagrams, sequence diagrams, and ERDs directly in Confluence.

**Start with:**
1. [Diagrams Macro](/apps/latex-diagrams-confluence/diagrams-macro) - Mermaid syntax reference
2. [Diagram Types Reference](/apps/latex-diagrams-confluence/diagram-types-reference) - all supported diagram types with examples
3. [How to: Document a System Architecture](/apps/latex-diagrams-confluence/how-to-architecture-docs) - flowchart + sequence + ERD in one page

---

## Data Scientist / Researcher / Analyst

You need mathematical formulas and equations in documentation or reports.

**Start with:**
1. [LaTeX Block Equations](/apps/latex-diagrams-confluence/latex-block-equations) - standalone centred equations
2. [LaTeX Inline Equations](/apps/latex-diagrams-confluence/latex-inline-equations) - math embedded inside paragraph text
3. [Formula Library Reference](/apps/latex-diagrams-confluence/formula-library-reference) - ready-to-use LaTeX for common formulas
4. [How to: Create Technical Docs with Math](/apps/latex-diagrams-confluence/how-to-technical-math) - full workflow

---

## Documentation Manager / Confluence Admin

You install apps and want to understand what this adds to your instance.

**Start with:**
1. [Installation & Setup](/apps/latex-diagrams-confluence/installation-setup) - install from Atlassian Marketplace
2. [System Requirements](/apps/latex-diagrams-confluence/system-requirements) - Confluence Cloud only; browser-side rendering
3. [Permissions & Access](/apps/latex-diagrams-confluence/permissions-access) - what the app accesses and how content is stored
`,
        },
        {
          slug: "quick-reference",
          title: "Quick Reference Card",
          content: `
A single-page reference for all three macros, supported diagram types, and common LaTeX patterns.

## Three Macros at a Glance

| Macro | Language | Best For | Reference |
|---|---|---|---|
| **UML Diagrams** | Mermaid | Flowcharts, sequence diagrams, ERDs, Gantt charts, mindmaps | [Diagrams Macro](/apps/latex-diagrams-confluence/diagrams-macro) |
| **LaTeX Block** | LaTeX | Standalone centred equations, matrices, multi-line derivations | [LaTeX Block](/apps/latex-diagrams-confluence/latex-block-equations) |
| **LaTeX Inline** | LaTeX | Math embedded inline within paragraph text | [LaTeX Inline](/apps/latex-diagrams-confluence/latex-inline-equations) |

## Supported Mermaid Diagram Types

| Type | Opening Keyword | Best For |
|---|---|---|
| Flowchart | \`flowchart TD\` or \`flowchart LR\` | Process flows, decision trees |
| Sequence Diagram | \`sequenceDiagram\` | API calls, system interactions |
| Entity Relationship | \`erDiagram\` | Database schemas, data models |
| Gantt Chart | \`gantt\` | Project timelines, sprint planning |
| Mindmap | \`mindmap\` | Topic breakdown, brainstorming |
| Class Diagram | \`classDiagram\` | OOP class structures |
| State Diagram | \`stateDiagram-v2\` | State machine flows |
| Pie Chart | \`pie\` | Simple proportional data |

→ [Diagram Types Reference](/apps/latex-diagrams-confluence/diagram-types-reference)

## Common LaTeX Patterns

| Formula | LaTeX |
|---|---|
| Fraction | \`\\frac{a}{b}\` |
| Square root | \`\\sqrt{x}\` |
| Power / subscript | \`x^{2}\`, \`x_{i}\` |
| Greek letters | \`\\alpha\`, \`\\beta\`, \`\\pi\` |
| Summation | \`\\sum_{i=1}^{n} x_i\` |
| Integral | \`\\int_{a}^{b} f(x)\\,dx\` |
| Matrix (2×2) | \`\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\` |
| Aligned equations | \`\\begin{aligned} ... \\end{aligned}\` |

→ [Formula Library Reference](/apps/latex-diagrams-confluence/formula-library-reference)

## Editor Workflow (All Three Macros)

1. Insert macro via \`/\` command
2. Write or paste source in the **left (Source) panel**
3. Preview renders live in the **right (Preview) panel**
4. Use **Samples** dropdown for ready-to-use examples
5. Click **Save** in the editor - then **Publish** the Confluence page

## Hover Toolbar (Published Pages)

When viewing a published page, hover over any rendered macro to access: **Edit · Copy Source · Zoom In/Out · Reset Zoom · Pan · Fullscreen**
`,
        },
        {
          slug: "how-to-architecture-docs",
          title: "How to: Document a System Architecture",
          content: `
A workflow for documenting a software system using three diagram types on a single Confluence page - flowchart for the high-level overview, sequence diagram for interactions, and ERD for the data model.

## Page Structure

\`\`\`
Architecture Page
├── Section 1: System Overview (Flowchart)
├── Section 2: Request Flow (Sequence Diagram)
└── Section 3: Data Model (ERD)
\`\`\`

## Step 1 - System Overview Flowchart

1. Edit the Confluence page, type \`/\` → **UML Diagrams** → insert
2. In the Source panel, write a top-down flowchart:

\`\`\`
flowchart TD
    Client([Web / Mobile Client])
    API[API Gateway]
    Auth[Auth Service]
    DB[(Primary Database)]
    Cache[(Redis Cache)]

    Client --> API
    API --> Auth
    Auth -->|valid| API
    API --> Cache
    Cache -->|miss| DB
    DB --> Cache
    Cache --> API
    API --> Client
\`\`\`

3. Verify preview, click **Save**, then add a heading above it: **"System Overview"**

→ [Diagrams Macro](/apps/latex-diagrams-confluence/diagrams-macro)

## Step 2 - Request Sequence Diagram

1. Below the flowchart section, insert another **UML Diagrams** macro
2. Write the sequence diagram:

\`\`\`
sequenceDiagram
    participant Client
    participant Gateway as API Gateway
    participant Auth as Auth Service
    participant DB as Database

    Client->>Gateway: POST /api/resource
    activate Gateway
    Gateway->>Auth: Validate token
    Auth-->>Gateway: 200 OK
    Gateway->>DB: INSERT resource
    DB-->>Gateway: resource_id
    Gateway-->>Client: 201 Created {id}
    deactivate Gateway
\`\`\`

3. Save, add heading: **"Request Flow"**

## Step 3 - Data Model ERD

1. Insert another **UML Diagrams** macro
2. Write the ERD:

\`\`\`
erDiagram
    USER {
        int id PK
        string email
        string name
        datetime created_at
    }
    PROJECT {
        int id PK
        string name
        int owner_id FK
    }
    RESOURCE {
        int id PK
        string title
        int project_id FK
        int created_by FK
    }

    USER ||--o{ PROJECT : "owns"
    PROJECT ||--o{ RESOURCE : "contains"
    USER ||--o{ RESOURCE : "creates"
\`\`\`

3. Save, add heading: **"Data Model"**

## Step 4 - Publish and Maintain

1. Publish the page
2. To update a diagram: hover over it in view mode → click **Edit** in the hover toolbar
3. Source is preserved - edit and re-save

→ [Diagram Types Reference](/apps/latex-diagrams-confluence/diagram-types-reference) · [Examples Library](/apps/latex-diagrams-confluence/examples-library)
`,
        },
        {
          slug: "how-to-technical-math",
          title: "How to: Create Technical Docs with Math",
          content: `
A workflow for embedding mathematical notation in Confluence pages - both standalone display equations and inline math within paragraphs. Common for data science, engineering, and research documentation.

→ [LaTeX Block Equations](/apps/latex-diagrams-confluence/latex-block-equations) · [LaTeX Inline Equations](/apps/latex-diagrams-confluence/latex-inline-equations)

## When to Use Block vs Inline

| Scenario | Use |
|---|---|
| A key formula that needs to stand alone and be read clearly | LaTeX Block |
| A formula referenced inside a sentence | LaTeX Inline |
| A derivation with multiple aligned steps | LaTeX Block (with \`aligned\`) |
| A variable defined within a sentence like "where x is ..." | LaTeX Inline |

## Step 1 - Insert a Display Equation (LaTeX Block)

1. Edit the Confluence page, type \`/\` → **LaTeX Block Equations** → insert
2. In the Source panel, write raw LaTeX:
\`\`\`
\\hat{y} = \\sigma\\left(\\sum_{i=1}^{n} w_i x_i + b\\right)
\`\`\`
3. Preview shows the rendered equation centred on the page
4. Click **Save**

## Step 2 - Embed Inline Math in a Paragraph

1. Type \`/\` → **LaTeX Inline Equations** → insert
2. In the Source panel, write normal paragraph text with math:
\`\`\`
The mean squared error is defined as \\text{MSE} = \\frac{1}{n}\\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2, where n is the number of observations.
\`\`\`
3. Preview shows the paragraph with rendered inline formulas
4. Click **Save**

## Step 3 - Build a Multi-Step Derivation

For aligned multi-line equations, use the LaTeX Block macro with the \`aligned\` environment:

\`\`\`
\\begin{aligned}
L(\\theta) &= \\prod_{i=1}^{n} p(y_i | x_i; \\theta) \\\\
\\log L(\\theta) &= \\sum_{i=1}^{n} \\log p(y_i | x_i; \\theta) \\\\
\\hat{\\theta} &= \\arg\\max_{\\theta} \\log L(\\theta)
\\end{aligned}
\`\`\`

## Step 4 - Combine with Standard Confluence Formatting

Mix LaTeX macros with standard Confluence elements:
- Use **headings** to label equation sections (Definition, Derivation, Result)
- Use **tables** to summarise variable definitions alongside inline equations
- Use **code blocks** for algorithmic pseudocode adjacent to math

## Common Debugging Tips

| Problem | Likely Cause | Fix |
|---|---|---|
| Red error panel | Syntax error in LaTeX | Check for unmatched \`{}\`, missing \`\\\\\` in aligned, typos in command names |
| Blank preview | Empty source panel | Type or paste LaTeX into Source panel |

→ [Formula Library Reference](/apps/latex-diagrams-confluence/formula-library-reference)
`,
        },
        {
          slug: "tips-best-practices",
          title: "Tips & Best Practices",
          content: `
Non-obvious tips that save time and prevent common rendering issues.

## General Editor

- **Save in the macro editor ≠ Publish the page.** Clicking Save in the split-view editor stores the macro content and closes the editor. You still need to click Publish on the Confluence page for other users to see the update.
- **Use the Samples dropdown before writing from scratch.** Every macro has pre-built examples for common diagram types and formula patterns. Load a sample, customise it - much faster than writing Mermaid syntax cold.
- **Copy Source from the hover toolbar to reuse diagrams.** Hover over a published diagram → click **Copy Source** → paste into a new macro on another page. No need to rewrite.

## Mermaid Diagrams

- **The opening keyword determines the diagram type.** \`flowchart TD\` creates a top-down flowchart; \`sequenceDiagram\` creates a sequence diagram. If the diagram renders incorrectly, check that the first line matches the intended type.
- **Use quotes around node labels with special characters.** Node labels containing parentheses, commas, or colons should be wrapped in quotes: \`A["Result (final)"]\`.
- **Pan and zoom on published diagrams.** Large architecture diagrams are hard to read at default size. Hover → use Zoom In / Pan controls, or click Fullscreen for a full-screen overlay.

## LaTeX Equations

- **Use \`\\\\\` (double backslash) for line breaks in \`aligned\` environments.** A single \`\\\` is a LaTeX escape character. To break a line in a multi-step derivation, use \`\\\\\`.
- **Use the Formula Library for standard formulas.** Before writing a complex formula from scratch, check [Formula Library Reference](/apps/latex-diagrams-confluence/formula-library-reference) - most standard statistical, calculus, and linear algebra formulas are already there.

## Performance

- **Very large Gantt charts render slowly.** If a Gantt chart has 50+ tasks, consider splitting it into multiple macros grouped by phase, or use a separate Confluence table for the full task list.
- **ERDs with 20+ entities become hard to read.** Use separate ERD macros for logical groupings (e.g., one for user/auth entities, one for content entities) rather than one giant diagram.
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
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/La_Te_X_Math_Formulas_and_UML_Diagrams_ERD_and_Flowcharts_User_Guide_0d463f08ef.pdf" download style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2. MACRO REFERENCE
    // ═══════════════════════════════════════════════════════════════
    {
      id: "macro-reference",
      title: "Macro Reference",
      articles: [
        {
          slug: "macro-reference-intro",
          title: "Macro Reference",
          content: `This section provides detailed instructions for each macro, including:

* When to use it
* How to write content
* Viewer controls
* Examples library
* Troubleshooting guides

## Choose the Right Macro

| Macro | Use When |
|---|---|
| **UML Diagrams** | You need a visual diagram - flowchart, sequence, ERD, Gantt, mindmap |
| **LaTeX Block** | You need a standalone display equation centered on its own line |
| **LaTeX Inline** | You need math embedded inside a paragraph of normal text |

## Editor Overview (All Macros)

All three macros share the same split-view editor pattern:

* **Source panel (left):** type or paste your content here
* **Preview panel (right):** live rendering updates as you type
* **Samples dropdown:** pre-built examples to get started quickly
* **Save button:** saves and closes the editor; renders on the page

## Article Index

* [Diagrams Macro](/apps/latex-diagrams-confluence/diagrams-macro) - Mermaid diagram types, editor guide, viewer controls, troubleshooting
* [LaTeX Block Equations](/apps/latex-diagrams-confluence/latex-block-equations) - display math, formatting best practices, viewer controls
* [LaTeX Inline Equations](/apps/latex-diagrams-confluence/latex-inline-equations) - inline and block math rules, editor guide
* [Examples Library](/apps/latex-diagrams-confluence/examples-library) - ready-to-use code examples for formulas and diagrams`,
        },
        {
          slug: "diagrams-macro",
          title: "Diagrams Macro",
          content: `
Clovity UML renders **Mermaid** diagrams in Confluence.

## Best for

* Architecture diagrams and workflows
* Sequence diagrams for APIs
* Entity relationships and schemas
* Timelines, mindmaps, and planning visuals

## How it works

* You write Mermaid code in the editor
* Preview renders live
* Saving publishes the diagram into the page
* Viewer toolbar appears on hover for navigation and actions

---

## UML Editor Guide

### Editor layout

* **Source (left):** Mermaid code
* **Preview (right):** rendered diagram


### Using Samples

The editor includes a Samples menu. Use it to:

* Insert a working diagram instantly
* Modify nodes/edges to fit your use case

### Saving

Click **Save/Publish** to store the source and render on the page.

### Writing Mermaid that renders reliably

* Always start with a valid diagram type header, for example:
    * \`flowchart TD\`
    * \`sequenceDiagram\`
    * \`erDiagram\`
* Keep indentation consistent
* Prefer simple IDs (letters/numbers/underscores) for fewer parsing issues
* Build complex diagrams gradually (save often)

---

## Supported Diagram Types

Use these headers as "known good" starting points:

### Flowchart

\`\`\`
flowchart TD
    Start([Start]) --> Input[/Input Data/]
    Input --> Process{Valid Data?}
    Process -->|Yes| Calculate[Calculate Result]
    Process -->|No| Error[Show Error]
    Calculate --> Output[/Display Output/]
    Error --> Input
    Output --> End([End])

    style Start fill:#E3FCEF
    style End fill:#E3FCEF
    style Error fill:#FFEBE6
\`\`\`

![Clovity UML Editor - Source panel on left, rendered diagram Preview on right, Samples button at top](/images/latex-diagram-confluence/Screenshot%202026-03-10%20173235.png)

### Sequence Diagram

\`\`\`
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database

    User->>Frontend: Click Login
    Frontend->>API: POST /auth/login
    activate API
    API->>Database: Query User
    activate Database
    Database-->>API: User Data
    deactivate Database
    API-->>Frontend: JWT Token
    deactivate API
    Frontend->>User: Redirect to Dashboard

    Note over User,Database: Authentication Flow
\`\`\`

![Sequence diagram rendered in Clovity UML Editor - authentication flow example](/images/latex-diagram-confluence/Screenshot%202026-03-10%20173425.png)

### Class Diagram

\`\`\`
classDiagram
class Customer {
  +placeOrder()
}

class Order {
  +String orderId
  +calculateTotal()
}

class OrderItem {
  +int quantity
  +float price
  +getSubtotal()
}
\`\`\`

![Class diagram rendered in Clovity UML Editor - Customer, Order, OrderItem example](/images/latex-diagram-confluence/Screenshot%202026-03-10%20173621.png)

### Gantt

\`\`\`
gantt
    title Project Development Timeline
    dateFormat YYYY-MM-DD
    section Planning
    Requirements Gathering    :done, req, 2024-01-01, 2024-01-15
    Design Phase              :done, design, 2024-01-16, 2024-02-01
    section Development
    Backend Development       :active, backend, 2024-02-01, 2024-03-15
    Frontend Development      :frontend, 2024-02-15, 2024-03-30
    section Testing
    Unit Testing             :testing, 2024-03-15, 2024-04-01
    Integration Testing      :integration, 2024-03-25, 2024-04-10
    section Deployment
    Staging Deployment       :staging, 2024-04-10, 2024-04-15
    Production Deployment    :prod, 2024-04-15, 2024-04-20
\`\`\`

![Gantt chart rendered in Clovity UML Editor - Project Development Timeline example](/images/latex-diagram-confluence/Screenshot%202026-03-10%20193917.png)

### Pie

\`\`\`
pie title Technology Stack Distribution
    "React" : 35
    "Node.js" : 25
    "PostgreSQL" : 20
    "Redis" : 10
    "Docker" : 10
\`\`\`

![Pie chart rendered in Clovity UML Editor - Technology Stack Distribution example](/images/latex-diagram-confluence/Screenshot%202026-03-10%20194009.png)

### Mindmap

\`\`\`
mindmap
  root((Web Application))
    Frontend
      React
      Redux
      CSS Modules
      Webpack
    Backend
      Node.js
      Express
      GraphQL
      REST API
    Database
      PostgreSQL
      Redis
      MongoDB
    DevOps
      Docker
      Kubernetes
      CI/CD
      Monitoring
\`\`\`

![Mindmap rendered in Clovity UML Editor - Web Application architecture example](/images/latex-diagram-confluence/Screenshot%202026-03-10%20194105.png)

---

## UML Viewer Controls

These controls appear when you **hover** over a UML diagram on the page.

### Edit

Opens the modal editor so you can update Mermaid source.

### Copy Source

Copies the Mermaid source text to clipboard (useful for reuse across pages).

### Zoom In / Zoom Out / Reset

* **Zoom In (+)** - enlarges the diagram for easier reading
* **Zoom Out (−)** - reduces the diagram size
* **Reset** - returns the diagram to its default zoom level

### Pan

Click and drag on the rendered diagram to pan around large or complex diagrams.

### Fullscreen

Click the Fullscreen button to open the diagram in a fullscreen overlay - useful for large Gantt charts, ERDs, or complex flowcharts.

### Error Panel

If the Mermaid source contains invalid syntax, a red error panel appears below the diagram with details about what failed. Fix the syntax and the diagram re-renders automatically.

### Comments & Reactions

* **View comments** - see any comments left on the diagram block
* **Add a comment** - leave feedback or notes directly on the diagram
* **Add a reaction** - add an emoji reaction to the diagram block

---

## UML Troubleshooting

### "Invalid Diagram Syntax"

**Likely causes**

* Missing diagram header line (e.g., \`flowchart TD\`)
* Typos in arrows/keywords
* Unsupported syntax for the selected diagram type

**Fast recovery**

1. Replace your content with a known-good example
2. Confirm it renders
3. Rebuild your diagram step-by-step (save often)

### Diagram looks cropped or hard to navigate

* Use **Fullscreen** for more space
* Zoom in slightly, then pan to explore
* Consider splitting one large diagram into multiple diagrams

### Copy Source didn't work

Some browsers restrict clipboard access in certain embedded contexts.

Workaround:

* Open editor → select text manually → copy`,
        },
        {
          slug: "latex-block-equations",
          title: "LaTeX Block Equations (Display Math)",
          content: `
LaTeX Block renders **display math** (centered equations).

## Best for

* Complex formulas
* Multi-line aligned equations
* Matrices and cases
* Technical specs and analytics docs

## Key input rule

Enter **raw LaTeX only**.

---

## LaTeX Block Editor Guide

### Editor layout

* **Source (left):** raw LaTeX
* **Preview (right):** rendered display equation

### What to type (examples)

Good:

* \`\\\\frac{a}{b}\`
* \`\\\\int_0^1 x\\\\,dx\`
* \`\\\\begin{aligned} ... \\\\end{aligned}\`

### Saving

Click **Save/Publish** to render on the page.

### Quick checklist for successful rendering

* Check braces \`{}\` are balanced
* Ensure every \`\\\\begin{...}\` has a matching \`\\\\end{...}\`
* Test simple → then add complexity

---

## Formatting & Best Practices

### Prefer aligned for multi-step math

\`\`\`
\\begin{aligned}
f(x) &= x^2 + 3x + 2 \\\\
f'(x) &= 2x + 3
\\end{aligned}
\`\`\`

### Use spacing for readability

\`\`\`
\\int_0^1 x \\, dx
\`\`\`

### Label expressions using \\text{...}

\`\`\`
\\begin{aligned}
\\text{Precision} &= \\frac{TP}{TP+FP} \\\\
\\text{Recall} &= \\frac{TP}{TP+FN}
\\end{aligned}
\`\`\`

### Keep long derivations readable

* Split across multiple lines
* Use multiple macros if the derivation becomes too dense
* Add a short caption above the macro explaining what the equation represents

---

## Block Viewer Controls

Controls appear when hovering over the rendered equation.

### Edit

Open the modal editor to update LaTeX source.

### Copy Source

Copies raw LaTeX to clipboard (useful for reuse across docs).

### Comments & Reactions

* **View comments** - see any comments left on the equation block
* **Add a comment** - leave feedback or context directly on the block
* **Add a reaction** - add an emoji reaction to the equation block`,
        },
        {
          slug: "latex-inline-equations",
          title: "LaTeX Inline Equations",
          content: `
LaTeX Inline renders math inside normal text.

## Best for

* Specs and docs where math supports the text
* Definitions of metrics inside sentences
* Short formulas and occasional standalone equations

---

## Inline Editor Guide

### Editor layout

* **Source (left):** normal paragraph text
* **Preview (right):** rendered text with math

![LaTeX Inline Editor - Source and Preview panels with formula category tabs (Basic, Algebra, Calculus, etc.)](/images/latex-diagram-confluence/Screenshot%202026-03-10%20192137.png)

### Writing content

Write like this:

* Normal text: \`The area is ...\`
* Inline math: \`A=\\\\pi r^2\`
* Block math: \`L=\\\\sum (y-\\\\hat{y})^2\`

![LaTeX Inline Editor showing Calculus tab with Derivative, Chain Rule, and Product Rule formula templates](/images/latex-diagram-confluence/Screenshot%202026-03-10%20192423.png)

### Saving

Click **Save changes** to render inline content on the page.

### When to choose Block macro instead

Use **LaTeX Block** when you need:

* multi-line aligned equations
* matrices or cases environments
* longer derivations with multiple steps

---

## Inline Math Rules

### Inline math

Use for short formulas within a sentence.

Example:

\`\`\`
We define accuracy as Acc=\\frac{TP+TN}{TP+TN+FP+FN}.
\`\`\`

**Best practices**

* Keep inline formulas short`,
        },
        {
          slug: "examples-library",
          title: "Examples Library",
          content: `
Ready-to-use code examples for LaTeX formulas and Mermaid diagrams. Copy any example into the macro editor and customize it for your use case.

---

## LaTeX Formula Examples

### 1. Quadratic Formula

The solution to ax^2 + bx + c = 0:

**LaTeX source (paste into LaTeX Block macro):**

\`\`\`
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
\`\`\`

**Result:** renders the quadratic formula centered on the page.

---

### 2. Definite Integral

A common calculus example - the integral of x from 0 to 1:

**LaTeX source:**

\`\`\`
\\int_0^1 x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3}
\`\`\`

**Tips:**
* Use \`\\,\` for thin space before \`dx\`
* Use \`\\left[\` and \`\\right]\` for auto-sized brackets

---

### 3. Matrix

A 3×3 identity matrix:

**LaTeX source:**

\`\`\`
\\begin{pmatrix}
1 & 0 & 0 \\\\
0 & 1 & 0 \\\\
0 & 0 & 1
\\end{pmatrix}
\`\`\`

**Variants:**
* \`\\begin{pmatrix}\` - parentheses
* \`\\begin{bmatrix}\` - square brackets
* \`\\begin{vmatrix}\` - vertical bars (determinant)

---

### 4. Multi-line Aligned Derivation

Show step-by-step algebra with aligned equals signs:

**LaTeX source:**

\`\`\`
\\begin{aligned}
(a + b)^2 &= (a + b)(a + b) \\\\
          &= a^2 + ab + ba + b^2 \\\\
          &= a^2 + 2ab + b^2
\\end{aligned}
\`\`\`

**Tips:**
* Use \`&=\` to align at the equals sign
* Use \`\\\\\\\\\` for line breaks inside \`aligned\`

---

### 5. Machine Learning - Precision & Recall

Document ML metrics with labeled equations:

**LaTeX source:**

\`\`\`
\\begin{aligned}
\\text{Precision} &= \\frac{TP}{TP + FP} \\\\[6pt]
\\text{Recall}    &= \\frac{TP}{TP + FN} \\\\[6pt]
F_1               &= 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}
\\end{aligned}
\`\`\`

**Tip:** \`\\\\[6pt]\` adds extra vertical space between lines.

---

## Mermaid Diagram Examples

### 6. Flowchart - Decision Process

A simple decision flowchart with styled nodes:

**Mermaid source (paste into Diagrams macro):**

\`\`\`
flowchart TD
    Start([Start]) --> Input[/Receive Request/]
    Input --> Valid{Valid Input?}
    Valid -->|Yes| Process[Process Request]
    Valid -->|No| Reject[Return Error]
    Process --> DB[(Save to DB)]
    DB --> Respond[/Send Response/]
    Reject --> Respond
    Respond --> End([End])

    style Start fill:#E3FCEF,stroke:#00875A
    style End fill:#E3FCEF,stroke:#00875A
    style Reject fill:#FFEBE6,stroke:#DE350B
\`\`\`

---

### 7. Sequence Diagram - API Authentication

Show a login flow across frontend, API, and database:

**Mermaid source:**

\`\`\`
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API
    participant D as Database

    U->>F: Submit credentials
    F->>A: POST /auth/login
    activate A
    A->>D: SELECT user WHERE email=?
    activate D
    D-->>A: User record
    deactivate D
    A->>A: Verify password hash
    A-->>F: JWT token
    deactivate A
    F->>U: Redirect to dashboard

    Note over U,D: Full authentication flow
\`\`\`

---

### 8. Entity Relationship Diagram

Model a simple order management schema:

**Mermaid source:**

\`\`\`
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    PRODUCT ||--o{ ORDER_ITEM : "included in"

    CUSTOMER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        int customer_id FK
        date order_date
        string status
    }
    ORDER_ITEM {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        float unit_price
    }
    PRODUCT {
        int id PK
        string name
        float price
        int stock
    }
\`\`\`

---

### 9. Gantt Chart - Project Timeline

Track phases and milestones across a project:

**Mermaid source:**

\`\`\`
gantt
    title Q1 Product Launch Timeline
    dateFormat YYYY-MM-DD
    section Discovery
    Requirements       :done, req, 2024-01-01, 2024-01-10
    Design Review      :done, design, 2024-01-10, 2024-01-20
    section Development
    Backend API        :active, api, 2024-01-20, 2024-02-15
    Frontend UI        :ui, 2024-01-28, 2024-02-20
    section QA
    Testing            :test, 2024-02-15, 2024-03-01
    Bug Fixes          :fix, 2024-03-01, 2024-03-10
    section Launch
    Staging Deploy     :staging, 2024-03-10, 2024-03-15
    Production Release :milestone, prod, 2024-03-15, 1d
\`\`\`

---

## Tips for Using Examples

| Tip | Detail |
|---|---|
| Start with a sample | Use the Samples dropdown in the editor to load a base example |
| Copy from this library | Paste any source above into the editor Source panel |
| Customize incrementally | Change one thing at a time and save to verify rendering |
| Use the error panel | If something breaks, the red error panel shows what failed |
| Fullscreen for large diagrams | Use the fullscreen viewer control for complex Mermaid charts |`,
        },
        {
          slug: "formula-library-reference",
          title: "Formula Library Reference",
          content: `
## Overview

The Formula Library is a curated collection of ready-to-use LaTeX formulas organized into 11 subject categories. Use it as a quick reference when writing technical documentation - copy any formula into the LaTeX Block or LaTeX Inline macro and customize as needed.

## How to Use This Library

1. Find the formula category that matches your domain
2. Copy the LaTeX source code shown
3. Open a **LaTeX Block** macro on your Confluence page
4. Paste the formula into the Source panel
5. The Preview panel renders it immediately - adjust as needed and Save

---

## Category 1: Algebra & Arithmetic

### Quadratic Formula
\`\`\`
x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
\`\`\`

### Binomial Theorem
\`\`\`
(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k
\`\`\`

### Geometric Series (Finite)
\`\`\`
S_n = a \\cdot \\frac{1 - r^n}{1 - r}
\`\`\`

---

## Category 2: Calculus

### Definite Integral
\`\`\`
\\int_a^b f(x) \\, dx = F(b) - F(a)
\`\`\`

### Chain Rule (Derivative)
\`\`\`
\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)
\`\`\`

### Taylor Series Expansion
\`\`\`
f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n
\`\`\`

### Fundamental Theorem of Calculus
\`\`\`
\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x)
\`\`\`

---

## Category 3: Linear Algebra

### Matrix Multiplication
\`\`\`
(AB)_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}
\`\`\`

### Determinant (2×2)
\`\`\`
\\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc
\`\`\`

### Identity Matrix (3×3)
\`\`\`
I = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}
\`\`\`

### Eigenvalue Equation
\`\`\`
A\\mathbf{v} = \\lambda \\mathbf{v}
\`\`\`

---

## Category 4: Statistics & Probability

### Mean (Arithmetic Average)
\`\`\`
\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i
\`\`\`

### Standard Deviation
\`\`\`
\\sigma = \\sqrt{\\frac{1}{N} \\sum_{i=1}^{N} (x_i - \\mu)^2}
\`\`\`

### Normal Distribution PDF
\`\`\`
f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}
\`\`\`

### Bayes' Theorem
\`\`\`
P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}
\`\`\`

---

## Category 5: Machine Learning & Data Science

### Mean Squared Error (MSE)
\`\`\`
\\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2
\`\`\`

### Cross-Entropy Loss
\`\`\`
L = -\\sum_{i} y_i \\log(\\hat{y}_i)
\`\`\`

### Softmax Function
\`\`\`
\\sigma(z)_j = \\frac{e^{z_j}}{\\sum_{k=1}^{K} e^{z_k}}
\`\`\`

### Sigmoid Function
\`\`\`
\\sigma(x) = \\frac{1}{1 + e^{-x}}
\`\`\`

### Accuracy
\`\`\`
\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}
\`\`\`

---

## Category 6: Physics & Engineering

### Newton's Second Law
\`\`\`
F = ma
\`\`\`

### Kinetic Energy
\`\`\`
E_k = \\frac{1}{2} m v^2
\`\`\`

### Einstein's Energy-Mass Equivalence
\`\`\`
E = mc^2
\`\`\`

### Ohm's Law
\`\`\`
V = IR
\`\`\`

### Wave Equation
\`\`\`
v = f \\lambda
\`\`\`

---

## Category 7: SLA & Operations Metrics

### Availability (SLA)
\`\`\`
\\text{Availability} = \\frac{\\text{MTBF}}{\\text{MTBF} + \\text{MTTR}} \\times 100\\%
\`\`\`

### Mean Time Between Failures (MTBF)
\`\`\`
\\text{MTBF} = \\frac{\\text{Total Uptime}}{\\text{Number of Failures}}
\`\`\`

### Mean Time to Recovery (MTTR)
\`\`\`
\\text{MTTR} = \\frac{\\text{Total Downtime}}{\\text{Number of Incidents}}
\`\`\`

### Error Rate
\`\`\`
\\text{Error Rate} = \\frac{\\text{Failed Requests}}{\\text{Total Requests}} \\times 100
\`\`\`

---

## Category 8: Financial Mathematics

### Compound Interest
\`\`\`
A = P\\left(1 + \\frac{r}{n}\\right)^{nt}
\`\`\`

### Net Present Value (NPV)
\`\`\`
\\text{NPV} = \\sum_{t=0}^{T} \\frac{C_t}{(1+r)^t}
\`\`\`

### Return on Investment (ROI)
\`\`\`
\\text{ROI} = \\frac{\\text{Net Profit}}{\\text{Cost of Investment}} \\times 100
\`\`\`

---

## Category 9: Information Theory

### Shannon Entropy
\`\`\`
H(X) = -\\sum_{i} p(x_i) \\log_2 p(x_i)
\`\`\`

### Kullback-Leibler Divergence
\`\`\`
D_{KL}(P \\| Q) = \\sum_{x} P(x) \\log \\frac{P(x)}{Q(x)}
\`\`\`

---

## Category 10: Greek Letters & Symbols Reference

| Symbol | LaTeX | Symbol | LaTeX |
|---|---|---|---|
| α (alpha) | \`\\alpha\` | Σ (Sigma) | \`\\Sigma\` |
| β (beta) | \`\\beta\` | π (pi) | \`\\pi\` |
| γ (gamma) | \`\\gamma\` | θ (theta) | \`\\theta\` |
| δ (delta) | \`\\delta\` | λ (lambda) | \`\\lambda\` |
| μ (mu) | \`\\mu\` | ∞ (infinity) | \`\\infty\` |
| σ (sigma) | \`\\sigma\` | ± (plus-minus) | \`\\pm\` |

---

## Category 11: Aligned Derivations & Multi-Line Formulas

### Aligned Equations (use aligned environment)
\`\`\`
\\begin{aligned}
  f(x) &= x^2 + 2x + 1 \\\\
       &= (x + 1)^2
\\end{aligned}
\`\`\`

### Cases (Piecewise Functions)
\`\`\`
f(x) = \\begin{cases}
  x^2 & \\text{if } x \\geq 0 \\\\
  -x   & \\text{if } x < 0
\\end{cases}
\`\`\`

### System of Equations
\`\`\`
\\begin{cases}
  2x + 3y = 12 \\\\
  x - y = 1
\\end{cases}
\`\`\``,
        },
        {
          slug: "diagram-types-reference",
          title: "Diagram Types Reference",
          content: `
## Overview

The UML Diagrams macro supports **12 Mermaid diagram types**. This reference covers the syntax header, best use cases, and a minimal working example for each type - so you can choose the right diagram for your documentation and start writing immediately.

---

## 1. Flowchart

**Header:** \`flowchart TD\` (top-down) or \`flowchart LR\` (left-right)

**Best for:** Process flows, decision trees, approval workflows, CI/CD pipelines

**Example:**
\`\`\`
flowchart TD
  A[Start] --> B{Is approved?}
  B -- Yes --> C[Deploy to Production]
  B -- No --> D[Return for Review]
  C --> E[End]
  D --> B
\`\`\`

**Direction options:** \`TD\` (top-down), \`LR\` (left-right), \`BT\` (bottom-top), \`RL\` (right-left)

---

## 2. Sequence Diagram

**Header:** \`sequenceDiagram\`

**Best for:** API interactions, system integrations, authentication flows, service-to-service communication

**Example:**
\`\`\`
sequenceDiagram
  participant User
  participant API
  participant DB
  User->>API: POST /login
  API->>DB: SELECT user WHERE email=?
  DB-->>API: User record
  API-->>User: 200 OK + JWT token
\`\`\`

---

## 3. Entity Relationship Diagram (ERD)

**Header:** \`erDiagram\`

**Best for:** Database schemas, data models, domain modeling, API data structures

**Example:**
\`\`\`
erDiagram
  USER {
    int id PK
    string email
    string name
  }
  ORDER {
    int id PK
    int user_id FK
    date created_at
  }
  USER ||--o{ ORDER : places
\`\`\`

---

## 4. Gantt Chart

**Header:** \`gantt\`

**Best for:** Project timelines, sprint planning, release schedules, roadmaps

**Example:**
\`\`\`
gantt
  title Q1 Release Plan
  dateFormat YYYY-MM-DD
  section Design
  Wireframes    :done, 2024-01-01, 2024-01-14
  section Development
  Backend API   :active, 2024-01-15, 2024-02-15
  Frontend      :2024-01-22, 2024-02-20
  section QA
  Testing       :2024-02-15, 2024-03-01
  section Launch
  Release       :milestone, 2024-03-01, 1d
\`\`\`

---

## 5. Class Diagram

**Header:** \`classDiagram\`

**Best for:** Object-oriented design, software architecture, API contracts, inheritance hierarchies

**Example:**
\`\`\`
classDiagram
  class Animal {
    +String name
    +int age
    +makeSound()
  }
  class Dog {
    +String breed
    +fetch()
  }
  Animal <|-- Dog
\`\`\`

---

## 6. State Diagram

**Header:** \`stateDiagram-v2\`

**Best for:** Finite state machines, order lifecycle, ticket status flows, feature flag states

**Example:**
\`\`\`
stateDiagram-v2
  [*] --> Open
  Open --> InProgress : Assign
  InProgress --> Review : Submit PR
  Review --> Done : Approve
  Review --> InProgress : Request Changes
  Done --> [*]
\`\`\`

---

## 7. Pie Chart

**Header:** \`pie\`

**Best for:** Distribution breakdowns, budget allocation, team composition, technology stack ratios

**Example:**
\`\`\`
pie title Tech Stack Distribution
  "React" : 35
  "Node.js" : 25
  "PostgreSQL" : 20
  "Redis" : 10
  "Docker" : 10
\`\`\`

---

## 8. Mindmap

**Header:** \`mindmap\`

**Best for:** Brainstorming, topic hierarchies, feature breakdowns, onboarding guides

**Example:**
\`\`\`
mindmap
  root((Product)
    Frontend
      React
      TypeScript
      Tailwind
    Backend
      Node.js
      REST API
      GraphQL
    Infrastructure
      AWS
      Docker
      CI/CD
\`\`\`

---

## 9. Timeline

**Header:** \`timeline\`

**Best for:** Historical milestones, product history, incident timelines, project retrospectives

**Example:**
\`\`\`
timeline
  title Company Milestones
  2020 : Founded
  2021 : First Product Launch
       : Series A Funding
  2022 : Reached 10,000 Users
  2023 : Expanded to 3 Countries
  2024 : IPO
\`\`\`

---

## 10. Git Graph

**Header:** \`gitGraph\`

**Best for:** Branching strategies, Git workflows, release branching models, feature branch documentation

**Example:**
\`\`\`
gitGraph
  commit
  branch feature/login
  checkout feature/login
  commit
  commit
  checkout main
  merge feature/login
  commit
  branch release/v1.0
  checkout release/v1.0
  commit
\`\`\`

---

## 11. Block Diagram

**Header:** \`block-beta\`

**Best for:** System architecture overviews, cloud infrastructure layouts, component maps

**Example:**
\`\`\`
block-beta
  columns 3
  Frontend:1
  API["API Gateway"]:1
  Backend:1
  DB[("Database")]:1
  Cache["Redis Cache"]:1
  Queue["Message Queue"]:1
\`\`\`

---

## 12. Quadrant Chart

**Header:** \`quadrantChart\`

**Best for:** Feature prioritization, risk-impact matrices, technology evaluation, 2×2 analysis

**Example:**
\`\`\`
quadrantChart
  title Feature Prioritization
  x-axis Low Effort --> High Effort
  y-axis Low Impact --> High Impact
  quadrant-1 Quick Wins
  quadrant-2 Strategic Bets
  quadrant-3 Fill-ins
  quadrant-4 Avoid
  Feature A: [0.3, 0.8]
  Feature B: [0.7, 0.9]
  Feature C: [0.2, 0.2]
  Feature D: [0.8, 0.3]
\`\`\`

---

## Choosing the Right Diagram Type

| Goal | Recommended Type |
|---|---|
| Show a process with decisions | Flowchart |
| Show how systems communicate | Sequence Diagram |
| Document a database schema | ERD |
| Show a project timeline | Gantt Chart |
| Document class relationships | Class Diagram |
| Show status transitions | State Diagram |
| Show distribution / composition | Pie Chart |
| Brainstorm or map topics | Mindmap |
| Document milestones over time | Timeline |
| Document a Git branching model | Git Graph |
| Map system components | Block Diagram |
| Prioritize features or risks | Quadrant Chart |`,
        },
        {
          slug: "engineering-use-cases",
          title: "Engineering Use Cases",
          content: `
## Overview

This page shows real-world documentation scenarios where LaTeX Formulas & Diagrams adds the most value for engineering and technical teams. Each use case includes the relevant diagram or formula type, the scenario context, and a ready-to-use example.

---

## Use Case 1: SLA Documentation with Formulas

**Scenario:** Your team documents service-level agreements and needs to show the availability and MTTR formulas alongside target values.

**Macro:** LaTeX Block

**Example - Three Nines SLA:**

\`\`\`
\\text{Availability} = \\frac{\\text{MTBF}}{\\text{MTBF} + \\text{MTTR}} = 99.9\\%
\`\`\`

\`\`\`
\\text{Monthly downtime allowance} = 0.001 \\times 30 \\times 24 \\times 60 \\approx 43.2 \\text{ minutes}
\`\`\`

**How to structure the page:**
1. Use a Confluence table for target vs. actual SLA values
2. Embed LaTeX Block macros inline to show the mathematical definitions
3. Use a UML Diagrams (Flowchart) macro to show the incident escalation path

---

## Use Case 2: Database Schema with ERD

**Scenario:** Your team is documenting the data model for a new microservice and wants an always-current ERD directly on the Confluence spec page.

**Macro:** UML Diagrams → erDiagram

**Example - E-commerce Order Service:**

\`\`\`
erDiagram
  CUSTOMER {
    int id PK
    string email
    string name
    date created_at
  }
  ORDER {
    int id PK
    int customer_id FK
    decimal total
    string status
    date placed_at
  }
  ORDER_ITEM {
    int id PK
    int order_id FK
    int product_id FK
    int quantity
    decimal unit_price
  }
  PRODUCT {
    int id PK
    string sku
    string name
    decimal price
  }
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ ORDER_ITEM : contains
  PRODUCT ||--o{ ORDER_ITEM : "is in"
\`\`\`

**Why this beats a screenshot:** The Mermaid source is editable directly on the Confluence page - no need to update an image file when the schema changes.

---

## Use Case 3: API Sequence Diagram in Technical Specs

**Scenario:** Documenting an OAuth 2.0 authorization code flow for a new integration in an Architecture Decision Record (ADR).

**Macro:** UML Diagrams → sequenceDiagram

**Example:**

\`\`\`
sequenceDiagram
  participant User as Browser
  participant App as Application
  participant Auth as Auth Server
  participant API as Resource API

  User->>App: Click "Login with OAuth"
  App->>Auth: Redirect with client_id + scope
  User->>Auth: Enter credentials + consent
  Auth-->>App: Authorization code (redirect)
  App->>Auth: POST /token with code + secret
  Auth-->>App: Access token + refresh token
  App->>API: GET /data with Bearer token
  API-->>App: Protected resource
  App-->>User: Render data
\`\`\`

---

## Use Case 4: Machine Learning Model Documentation

**Scenario:** A data science team documents a model's loss function and accuracy metrics in a model card on Confluence.

**Macro:** LaTeX Block (for formulas) + LaTeX Inline (for in-text references)

**Block formulas:**

\`\`\`
\\mathcal{L} = -\\frac{1}{N}\\sum_{i=1}^{N} \\left[ y_i \\log(\\hat{y}_i) + (1-y_i) \\log(1-\\hat{y}_i) \\right]
\`\`\`

\`\`\`
\\text{F1} = 2 \\cdot \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}
\`\`\`

**Inline formula example (inside a sentence):**

Write this in a paragraph macro:

> "The model achieves \\text{Accuracy} = \\frac{TP+TN}{TP+TN+FP+FN} = 94.3\\% on the held-out test set."

---

## Use Case 5: CI/CD Pipeline Flowchart

**Scenario:** Documenting your deployment pipeline in the engineering runbook so new team members can understand the end-to-end flow.

**Macro:** UML Diagrams → flowchart LR

**Example:**

\`\`\`
flowchart LR
  A[Developer Push] --> B[GitHub Actions Trigger]
  B --> C[Lint & Unit Tests]
  C --> D{Tests Pass?}
  D -- No --> E[Notify Developer]
  D -- Yes --> F[Build Docker Image]
  F --> G[Push to ECR]
  G --> H[Deploy to Staging]
  H --> I[Smoke Tests]
  I --> J{Smoke Tests Pass?}
  J -- No --> K[Rollback Staging]
  J -- Yes --> L[Manual Approval]
  L --> M[Deploy to Production]
  M --> N[Post-Deploy Monitoring]
\`\`\`

---

## Use Case 6: Sprint Gantt Chart in Retrospective Pages

**Scenario:** Embedding a Gantt chart in a sprint planning or retrospective page to visualize task breakdown and timeline.

**Macro:** UML Diagrams → gantt

**Example:**

\`\`\`
gantt
  title Sprint 42 - Feature: Payments Module
  dateFormat YYYY-MM-DD
  section Backend
  Payment API design     :done, 2024-03-01, 2024-03-04
  Stripe integration     :active, 2024-03-04, 2024-03-11
  Webhook handler        :2024-03-11, 2024-03-15
  section Frontend
  Payment form UI        :2024-03-06, 2024-03-12
  3DS confirmation modal :2024-03-12, 2024-03-15
  section QA
  Integration tests      :2024-03-15, 2024-03-20
  Staging validation     :milestone, 2024-03-20, 1d
\`\`\`

---

## Tips for Engineering Teams

| Tip | Detail |
|---|---|
| **Embed diagrams in ADRs** | Sequence and ERD diagrams belong directly in the spec - no separate diagram files to maintain |
| **Use LaTeX for formal definitions** | When defining metrics or algorithms, use LaTeX Block to show the formula alongside the prose |
| **Inline math for quick references** | Use LaTeX Inline to reference formula variables inside a sentence without breaking reading flow |
| **Version diagrams with the page** | Since diagram source lives in the page, Confluence page history tracks diagram changes automatically |
| **Use Gantt for sprint artifacts** | Gantt charts in sprint pages give stakeholders a visual timeline without needing a separate tool |`,
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
LaTeX Formulas & Diagrams integrates natively with Confluence Cloud and leverages two open-source rendering libraries. This article describes what the app integrates with and - importantly - what it does not access.

---

## Native Confluence Integration

The app is built as a native Confluence Cloud macro. This means:

### Macros Stored in Confluence Page Content

- Your Mermaid code and LaTeX source are stored directly in the **Confluence page content** (Confluence storage format)
- There is no separate database or external storage - the macro body is part of the page
- This means your content travels with the page: copy a page and the macro content copies with it

### Fully Versioned with Page History

| Feature | Detail |
|---|---|
| **Page version history** | Every time you publish a page, Confluence saves a new version - including your macro source |
| **Restore previous versions** | You can restore any previous version of a page via Confluence's built-in page history, which also restores the macro source from that version |
| **Version comparison** | Confluence's page diff view shows changes to macro source between versions |

### Accessible via Confluence API

Because macro content is stored in the Confluence page storage format, it is accessible via the standard Confluence REST API:

- **GET /wiki/rest/api/content/{id}?expand=body.storage** returns the full page content including macro bodies
- Macro source (Mermaid code or LaTeX) appears inside the \`<ac:plain-text-body>\` element of the macro markup
- This allows programmatic extraction, migration, or backup of macro content using standard Confluence API tooling

---

## Mermaid Rendering

The Diagrams macro renders visual diagrams using **Mermaid**, a JavaScript-based diagramming library.

### Supported Diagram Types

| Diagram Type | Mermaid Header | Use Case |
|---|---|---|
| Flowchart | \`flowchart TD\` / \`graph TD\` | Process flows, decision trees |
| Sequence | \`sequenceDiagram\` | API flows, system interactions |
| Class | \`classDiagram\` | Object-oriented design |
| Entity Relationship | \`erDiagram\` | Database schemas |
| Gantt | \`gantt\` | Project timelines |
| Pie Chart | \`pie\` | Proportional data |
| Mindmap | \`mindmap\` | Topic hierarchies |
| State Machine | \`stateDiagram-v2\` | State transitions |
| Timeline | \`timeline\` | Chronological events |
| Block Diagram | \`block-beta\` | System architecture blocks |

---

## What Data the App Does NOT Access

It is important to understand the scope of data access:

| Data Source | Accessed? | Notes |
|---|---|---|
| **Jira issues or projects** | No | The app has no Jira integration and does not read or write Jira data |
| **External APIs or services** | No | All rendering runs entirely client-side in the browser |
| **Other Confluence spaces** | No | The app only processes content on the page being viewed or edited |
| **User data beyond page authorship** | No | The app does not read user profiles, email addresses, or account data |
| **Confluence analytics or audit logs** | No | The app does not access Confluence analytics or site-level logs |
| **External storage or databases** | No | Macro content is stored in Confluence page storage only |

All rendering is performed locally in the user's browser. No macro content, user data, or page content is transmitted to external servers.`,
        },
        {
          slug: "data-migration",
          title: "Data Migration",
          content: `
This article covers how to move macro content between pages, export diagrams and equations as images, what happens when the app is uninstalled, and how to migrate from other diagram tools.

---

## Copying Macro Content Between Pages

### Using the Copy Source Button

The easiest way to reuse macro content on another page:

1. View the published page containing the macro you want to copy
2. Hover over the rendered macro to reveal the hover toolbar
3. Click **Copy Source** - the raw Mermaid code or LaTeX is copied to your clipboard
4. Navigate to the destination page and open it in edit mode
5. Insert the appropriate macro type (Diagrams, LaTeX Block, or LaTeX Inline)
6. Paste the copied source into the Source panel
7. Confirm it renders correctly in the Preview panel
8. Click **Save**, then **Publish** the page

### Copying an Entire Page

Because macro content is stored in the Confluence page storage format:

- Using Confluence's **Copy page** feature copies all macros and their content along with the page
- The copied page will have the same diagrams and equations as the original
- Each macro can then be independently edited on the copied page

---

## Exporting Diagrams as PNG or SVG

### From the Fullscreen Viewer

1. View the published page
2. Hover over a Diagrams macro and click **Fullscreen**
3. In the fullscreen overlay, right-click on the rendered diagram
4. Select **Save image as...** (PNG) or **Copy image** to use it elsewhere

### For LaTeX Equations

1. View the published page
2. Hover over a LaTeX Block macro and click **Fullscreen**
3. Right-click the rendered equation and save as image

> **Tip:** For higher-quality exports, zoom in before capturing the image. The rendered output is vector-based (SVG internally) so it scales cleanly.

---

## What Happens When the App Is Uninstalled

When a Confluence administrator uninstalls LaTeX Formulas & Diagrams:

| Scenario | What Happens |
|---|---|
| **Macro content on pages** | The raw Mermaid/LaTeX source remains in the page storage format - it is not deleted |
| **Rendering** | Macros will no longer render - the macro body will appear as an unrecognized macro placeholder |
| **Re-installing the app** | If the app is reinstalled, all macros resume rendering from the saved source content |
| **Content recovery** | The source can be recovered via Confluence's page history or via the Confluence REST API |

**Key point:** Uninstalling the app does not destroy your content. Your Mermaid and LaTeX source remains in the page. Reinstalling the app restores full rendering.

---

## Migrating from Other Diagram Tools

### Migrating from PlantUML

PlantUML and Mermaid are different diagramming languages. Direct syntax conversion is not automatic.

| PlantUML Diagram | Mermaid Equivalent | Migration Notes |
|---|---|---|
| \`@startuml ... @enduml\` sequence | \`sequenceDiagram\` | Arrow syntax differs: \`->\` vs \`->>\`; participant declaration is optional in Mermaid |
| \`@startuml ... @enduml\` class | \`classDiagram\` | Attribute and method syntax differs |
| \`@startuml ... @enduml\` activity | \`flowchart TD\` | PlantUML activity maps to Mermaid flowchart with decision nodes |
| \`@startuml ... @enduml\` component | \`block-beta\` or \`flowchart\` | No direct equivalent - use flowchart nodes for components |

**Migration approach for PlantUML:**
1. Export or copy the PlantUML source from your existing tool
2. Identify the diagram type
3. Rewrite using the equivalent Mermaid syntax (use the Samples dropdown for starting templates)
4. Test in the Diagrams macro editor Preview panel before saving

### Comparison with draw.io (diagrams.net)

| Feature | LaTeX Formulas & Diagrams | draw.io for Confluence |
|---|---|---|
| **Diagram input method** | Code-based (Mermaid text) | GUI drag-and-drop |
| **Math/formula support** | Native | Limited (via text boxes) |
| **Version history** | Via Confluence page history | Via Confluence page history |
| **Export** | PNG via browser save | PNG, SVG, PDF |
| **Best for** | Code-defined precise diagrams, math-heavy docs | Visual freeform diagrams |

**When to choose LaTeX Formulas & Diagrams over draw.io:**
- Your team is comfortable writing Mermaid or LaTeX
- You need exact, reproducible diagrams from code (version-controlled source)
- You need mathematical formulas alongside diagrams
- You prefer text-based authoring that can be diffed in page history`,
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

As teams scale on Confluence, documentation becomes harder to maintain - diagrams live in external tools, mathematical notation gets pasted as images and keeping technical docs up to date requires constant context switching.

This app solves that by bringing three professional visualization macros directly into Confluence:

- Create UML diagrams, flowcharts, sequence diagrams, ER diagrams, Gantt charts, and more - written as plain text, rendered instantly.
- Render display-style mathematical equations using LaTeX - centered, publication-quality, with a live preview as you type.
- Embed inline formulas inside paragraphs - formulas flow naturally within sentences, just like a LaTeX document.
- Access a built-in library of 80+ formula templates across 11 subject categories, from Basic Algebra to Maxwell's equations.
- Use all three macros on the same Confluence page - no external tools, no copy-paste, no lost context.

**Designed for:** Engineering teams, technical writers, data scientists, educators, and researchers who need professional diagrams and mathematical notation inside Confluence - without leaving their documentation workflow.

## 2. What's Included

### Easy UML Diagrams

Create any diagram type directly inside a Confluence page - write plain-text diagram syntax and see a live rendered preview as you type.

**Includes:**

- Flowchart, Sequence Diagram, Class Diagram, State Diagram, ER Diagram, Gantt Chart, Pie Chart, Git Graph, User Journey, Mind Map, Timeline, and Quadrant Chart — all powered by Mermaid.
- Code editor on the left, rendered diagram preview on the right - updates in real time as you type.
- One-click access to ready-made examples for all 12 diagram types - load any sample into the editor instantly.
- Click and drag to navigate across large diagrams directly on the Confluence page.
- Copy the Mermaid syntax to clipboard directly from the editor.
- Clear syntax error display with expandable details so you can fix issues without guessing.

### LaTeX Block Equations

Render display-style mathematical equations centered and full-width on your Confluence page - publication-quality output for technical and scientific documentation.

**Includes:**

- Formulas appear within flowing text rather than as centered blocks - the macro uses Confluence's inline layout so content wraps naturally around rendered math.
- Full formula library, live split-pane preview, multi-format input detection, and the three-engine rendering pipeline - identical to the block macro.
- All 11 subject categories and 80+ formulas available for inline use.
- Font size, theme, and color controls apply to inline output as well.

## 3. Use Cases

### Diagrams & Technical Documentation

- System architecture diagrams - flowcharts and sequence diagrams embedded directly in architecture decision records.
- Database schema documentation - ER diagrams kept up to date inside the same Confluence page as the schema description.
- Project planning - Gantt charts created and edited in Confluence without exporting from external tools.
- Process documentation - state diagrams and user journey maps embedded in team runbooks and onboarding guides.
- Dependency mapping - Git graphs and relationship diagrams showing branch strategy or service dependencies.

### Mathematical & Scientific Documentation

- Engineering specs - block equations for formulas, tolerances, and derived values embedded in design documents.
- Research notes - publication-quality LaTeX equations in Confluence wikis for academic or R&D teams.
- Data science documentation - statistical formulas, probability distributions, and model descriptions rendered inline.
- Physics and chemistry - Maxwell's equations, Schrödinger equation, chemical reaction notation via \\ce{} support.
- Finance and analytics - mathematical formulas for scoring models, risk calculations, and metric definitions.

### Mixed Content Documentation

- Technical tutorials - diagrams and inline math in the same page for courses, training materials, or knowledge bases.
- API and algorithm documentation - pseudocode flowcharts alongside formula definitions for algorithmic complexity.
- Sprint and delivery planning - Gantt charts and sequence diagrams embedded in planning pages updated each sprint.
- Stakeholder reports - professional diagram output and clean equation rendering that can be shared without screenshots.

## 4. Quick Start

**Step 1: Add a Diagram**
1. Open a Confluence page in edit mode.
2. Type / and search for Easy UML Diagrams → insert the macro.
3. In the editor, click Samples → pick a diagram type → the code loads automatically.
4. Edit the code as needed - the preview updates in real time.
5. Click Save & Publish. Use zoom, pan, and fullscreen controls on the published page.

**Step 2: Add a Block Equation**
1. Type / and search for LaTeX Block Equations → insert the macro.
2. Browse the formula library at the bottom - click a category tab, then click a formula card to load it.
3. Or type your own LaTeX, AsciiMath, or MathJS expression directly - the format is detected automatically.
4. Adjust font size and theme in the settings panel if needed.
5. Click Save - the equation renders centered and display-style on the page.

**Step 3: Add Inline Math**
1. Type / and search for LaTeX Inline Equations → insert the macro.
2. Write your paragraph text and LaTeX formulas inline.
3. The preview shows the formula rendering inside the sentence in real time.
4. Click Save - the formula appears inline within the paragraph on the Confluence page.

## 5. Recommended Starter Setup

### Easy UML Diagrams
- Start with the Flowchart or Sequence Diagram samples - these cover the majority of technical documentation needs.
- Use the ER Diagram sample for database schema documentation; keep it on the same page as your schema description.
- Use the Gantt Chart for sprint or project planning pages - update the code directly in Confluence each sprint.
- For large diagrams, use the fullscreen and zoom controls in the published view rather than shrinking the diagram.

### LaTeX Block Equations
- Start with the Physics or Algebra category in the formula library to get familiar with the editor.
- Use the Paper theme for documentation intended to be screenshot or shared - it produces clean parchment-style output.
- Turn on equation numbering for technical specs where equations are referenced later in the document.
- Use the PNG export if you need to include a formula in a presentation or external document.

### LaTeX Inline Equations
- Use inline equations for definition paragraphs where a formula is part of the explanation, not a standalone element.
- Keep inline formulas short - single variables, simple expressions, or symbol definitions work best inline.
- Use block equations for anything complex - multi-line, fractions, matrices, or anything that needs visual prominence.

## 6. Key Benefits

| **Benefit** | **Description** |
| --- | --- |
| **Everything in Confluence** | Diagrams, block equations, and inline math all live inside Confluence pages - no external tools, no tab switching, no stale screenshots. |
| **Live preview as you type** | Every keystroke updates the preview in real time across all three macros - what you see in the editor is exactly what renders on the page. |
| **12 diagram types in one macro** | Flowcharts, sequence diagrams, ER diagrams, Gantt charts, mindmaps, & seven more - all from the same Easy UML Diagrams macro with one-click samples. |
| **Professional math notation** | LaTeX formulas rendered at publication quality - the same notation used by academic publishers and research platforms. |
| **80+ built-in formula templates** | Formula library covers Basic, Algebra, Calculus, Statistics, Physics, Chemistry, and five more categories - each with live rendered previews. |
| **Inline and block math** | Block equations for display-style standalone formulas; inline equations for math embedded within paragraphs - both on the same page. |
| **Interactive diagram controls** | Fullscreen controls on every published diagram - no need to open a separate tool to review large or complex diagrams. |
| **Zero infrastructure** | Runs entirely on Atlassian Forge - no servers, no external databases, no data leaving your Atlassian environment. |

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Demo Doc - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/La_Te_X_Formulas_and_Diagrams_Gantt_Charts_ER_Ds_and_Flowcharts_Demo_Doc_966641d833.pdf" download style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
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
*Standardize Documentation. Visualize Architecture.*

## What This App Delivers

- **Visual Workflows** — Make complex docs easy with workflows.
- **Consistent Formatting** — Standardize how teams document specs, architecture and metrics.
- **Code-Driven Configuration** — Write code and preview UML diagrams.
- **Single Source of Truth** — Always up-to-date diagrams and equations.

## App Core Modules

| **Module** | **Description** |
| --- | --- |
| **Code-Driven UML Integration** | Write code and preview UML diagrams. |
| **Inline Math & Equations** | Embed complex formulas using LaTeX. |
| **Living Documentation** | Always up-to-date diagrams and equations. |
| **Visual Alignment** | Make complex docs easy with workflows. |

## Security You Can Trust

- **Run on Atlassian** — Runs 100% inside Atlassian Cloud. No external servers, no third-party storage.
- **AGC Compatible** — Fully compatible with Atlassian Government Cloud.
- **ISO Certified** — Clovity is an ISO 27001 certified company.

## Key Differentiators

**Two-in-one technical documentation:**
UML diagrams + LaTeX equations in a single Confluence install.

**Editable, not screenshot-based:**
Keep diagrams and formulas maintainable and version-friendly.

**Consistent rendering across pages:**
Standardize how teams document specs, architecture and metrics.

**Forge-native (Runs on Atlassian):**
Cloud-ready approach aligned with enterprise admin expectations.

## Build For

- Engineers & Architects.
- Data / ML / Analytics.
- IT & Confluence Admins.
- Tech Leads & Architects.
- Product & Program Teams.

## Why Enterprise Teams Prefer Clovity

- 24/7 support with direct access to Atlassian experts.
- Seamless native UX that works like Atlassian tools.
- Cloud infrastructure ensuring high availability for global teams.

## Try Our Other Apps In The Suite

Extend Jira & Confluence with dashboards, reporting, planning, and technical documentation tools.

| **App** |
| --- |
| [Content Formatting Macros: Tabs Navigation Visibility CSS](/apps/content-formatting-confluence) |
| [Reports, Charts, Templates, CQL & Export for Confluence](/apps/reports-charts-confluence) |
| [Dashboard Templates, Charts, Graphs & Reports for Jira](/apps/dashboard-charts-jira) |
| [Time Tracking, Resource Planning & Project Management](/apps/time-tracking-jira) |

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Sales Doc - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/La_Te_X_Math_Formulas_and_UML_Diagrams_ERD_and_Flowcharts_Sales_Doc_b21e95bf4d.pdf" download style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
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
This comparison shows how our Confluence app (Clovity LaTeX + UML macros) matches the competitor apps' key capabilities across LaTeX and UML/Diagrams.

## Narva — LaTeX Math for Confluence vs Our App

| **Narva - LaTeX Math for Confluence** | **Our App** |
| --- | --- |
| Inline LaTeX macro | ✓ |
| Block LaTeX macro | ✓ |
| Export to PDF | ✗ |
| Runs on Atlassian | ✓ |
| Chemical equation support | ✓ (added feature) |

## Stratus — PlantUML Diagrams for Confluence vs Our App

| **Stratus - PlantUML Diagrams for Confluence** | **Our App** |
| --- | --- |
| Mermaid diagrams | ✓ |
| PlantUML diagrams | ✗ |
| Graphviz diagrams | ✓ |
| Write diagram text like Markdown | ✓ |
| GitHub Integration | ✗ |
| GitLab Integration | ✗ |
| Diagram change history | ✗ |

## Coverage Summary (Overall)

| **Metric** | **Value** |
| --- | --- |
| Total parent features listed | 12 |
| Covered by our solution | 7 |
| Not covered | 5 |
| Overall coverage | ~60% (7/12) |

**Not covered items (remaining gaps):**
- Export to PDF (Narva LaTeX Math)
- Graphviz diagrams (Stratus PlantUML Diagrams)
- GitHub Integration (Stratus PlantUML Diagrams)
- GitLab Integration (Stratus PlantUML Diagrams)
- Diagram change history (Stratus PlantUML Diagrams)

**Overall summary:** Our app covers the core essentials for LaTeX authoring (inline + block) and basic diagram authoring (text-based + Mermaid), and we also support advanced chemical equations. The gaps are niche integrations (GitHub/GitLab source sync, Graphviz-specific renderer, PDF export from macro) that most Confluence documentation teams do not require.

<div style="border:1px solid #e2e8f0;border-radius:10px;padding:24px;margin-top:32px;text-align:center;background:#f8fafc;">
  <div style="font-size:15px;font-weight:700;color:#111827;margin-bottom:6px;">Competitor Comparison - Full PDF</div>
  <div style="font-size:13px;color:#6b7280;margin-bottom:18px;">Download or open in your browser.</div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
    <a href="https://clovity-website.s3.ap-south-1.amazonaws.com/La_Te_X_Math_Formulas_and_UML_Diagrams_ERD_and_Flowcharts_Competitor_Doc_f02f44b754.pdf" download style="background:#0052CC;color:white;padding:10px 22px;border-radius:7px;text-decoration:none;font-size:13px;font-weight:600;display:inline-block;">Download PDF</a>
  </div>
</div>
`,
        },
      ],
    },

  ],
};
