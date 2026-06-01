import { apps } from "@/data/apps";
import { dashboardChartsDocs } from "@/data/dashboard-charts-docs";
import { timeTrackingDocs } from "@/data/time-tracking-docs";
import { reportsChartsConfluenceDocs } from "@/data/reports-charts-confluence-docs";
import { latexDiagramsConfluenceDocs } from "@/data/latex-diagrams-confluence-docs";
import { jqlaiDocs } from "@/data/jql-ai";
import { contentFormattingConfluenceDocs } from "@/data/content-formatting-confluence-docs";
import { backlogAuditorDocs } from "@/data/backlog-auditor-docs";
import { pulseAiJiraDocs } from "@/data/pulse-ai-jira-docs";
import { additionalResourcesDocs } from "@/data/additional-resources-docs";

const docsMap = {
  "dashboard-charts-jira": dashboardChartsDocs,
  "time-tracking-jira": timeTrackingDocs,
  "reports-charts-confluence": reportsChartsConfluenceDocs,
  "latex-diagrams-confluence": latexDiagramsConfluenceDocs,
  "content-formatting-confluence": contentFormattingConfluenceDocs,
  "backlog-auditor-jira": backlogAuditorDocs,
  "jql-ai-jira": jqlaiDocs,
  "pulse-ai-jira": pulseAiJiraDocs,
};

export function buildSearchIndex() {
  const index = [];
  const seenAdditionalSlugs = new Set();

  for (const [appSlug, docs] of Object.entries(docsMap)) {
    if (!docs?.categories) continue;
    const app = apps.find((a) => a.slug === appSlug);

    const allCategories = [
      ...docs.categories,
      ...additionalResourcesDocs.categories,
    ];

    for (const category of allCategories) {
      for (const article of category.articles) {
        const isAdditional = additionalResourcesDocs.categories.some(
          (c) => c.id === category.id
        );

        if (isAdditional) {
          if (seenAdditionalSlugs.has(article.slug)) continue;
          seenAdditionalSlugs.add(article.slug);
        }

        index.push({
          appSlug,
          appName: app?.shortName || appSlug,
          appIcon: app?.icon || null,
          categoryTitle: category.title,
          articleSlug: article.slug,
          articleTitle: article.title,
          url: `/apps/${appSlug}/${article.slug}`,
        });
      }
    }
  }
  return index;
}
