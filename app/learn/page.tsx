import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { learnDocs } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Learn",
  description:
    "Guides, tutorials and explainers on Claude Skills, MCP servers, Copilot agents and building with AI.",
  path: "/learn",
  eyebrow: "guides & tutorials",
});

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6">
      <Breadcrumbs items={[{ label: "~", href: "/" }, { label: "Learn" }]} />

      <div className="mt-8 border-b border-line pb-8">
        <div className="font-mono text-xs text-muted">~/learn</div>
        <h1 className="mt-1 font-display text-3xl font-bold text-fg sm:text-4xl">
          Learn to build with AI
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Short, practical guides on Claude Skills, MCP servers and the rest of
          the developer AI stack. No fluff.
        </p>
      </div>

      <div className="pt-10">
        {learnDocs.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learnDocs.map((d) => (
              <ArticleCard
                key={d.slug}
                href={d.url}
                title={d.title}
                summary={d.summary}
                date={d.date}
                readingTime={d.metadata.readingTime}
                tags={d.tags}
                kind={d.kind}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-line p-10 text-center font-mono text-sm text-muted">
            guides coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
