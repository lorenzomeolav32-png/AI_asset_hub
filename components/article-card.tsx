import Link from "next/link";
import { Clock } from "lucide-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ArticleCard({
  href,
  title,
  summary,
  date,
  readingTime,
  tags,
  kind,
}: {
  href: string;
  title: string;
  summary: string;
  date: string;
  readingTime: number;
  tags: string[];
  kind?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
    >
      <div className="mb-3 flex items-center gap-3 font-mono text-[11px] text-muted">
        {kind && (
          <span className="rounded border border-line px-1.5 py-0.5 text-accent">
            {kind}
          </span>
        )}
        <span>{formatDate(date)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {readingTime} min
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold leading-snug text-fg">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{summary}</p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
