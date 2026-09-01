import { Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TableOfContents } from "@/components/table-of-contents";
import type { Toc } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ArticleLayout({
  breadcrumb,
  kind,
  title,
  summary,
  date,
  updated,
  author,
  readingTime,
  toc,
  body,
  tags,
}: {
  breadcrumb: { label: string; href?: string }[];
  kind?: string;
  title: string;
  summary: string;
  date: string;
  updated?: string;
  author: string;
  readingTime: number;
  toc: Toc;
  body: string;
  tags: string[];
}) {
  return (
    <article className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6">
      <Breadcrumbs items={breadcrumb} />

      <header className="mt-8 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          {kind && (
            <span className="rounded border border-line px-2 py-0.5 text-accent">
              {kind}
            </span>
          )}
          <span>{formatDate(date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readingTime} min read
          </span>
          <span>· by {author}</span>
        </div>

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-fg sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{summary}</p>
        {updated && (
          <p className="mt-3 font-mono text-[11px] text-muted">
            updated {formatDate(updated)}
          </p>
        )}
      </header>

      <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_220px]">
        <div className="min-w-0">
          <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />

          {tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents toc={toc} />
          </div>
        </aside>
      </div>
    </article>
  );
}
