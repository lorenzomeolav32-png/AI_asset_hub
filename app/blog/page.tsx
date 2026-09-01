import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const base = pageMeta({
  title: "Blog",
  description:
    "Notes, roundups and opinions on the developer AI ecosystem from AI Assets Directory.",
  path: "/blog",
  eyebrow: "notes & roundups",
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6">
      <Breadcrumbs items={[{ label: "~", href: "/" }, { label: "Blog" }]} />

      <div className="mt-8 border-b border-line pb-8">
        <div className="font-mono text-xs text-muted">~/blog</div>
        <h1 className="mt-1 font-display text-3xl font-bold text-fg sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          What we are learning while building the directory, plus notes on new
          AI assets worth your time.
        </p>
      </div>

      <div className="pt-10">
        {blogPosts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((d) => (
              <ArticleCard
                key={d.slug}
                href={d.url}
                title={d.title}
                summary={d.summary}
                date={d.date}
                readingTime={d.metadata.readingTime}
                tags={d.tags}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-line p-10 text-center font-mono text-sm text-muted">
            posts coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
