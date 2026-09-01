import Link from "next/link";
import { ArrowRight, Bot, ScrollText, Server, Sparkles, Workflow } from "lucide-react";
import type { Category } from "@/lib/data";
import { countBySegment } from "@/lib/content";

const iconMap = {
  sparkles: Sparkles,
  server: Server,
  bot: Bot,
  workflow: Workflow,
  scroll: ScrollText,
} as const;

export function CategoryTile({ category }: { category: Category }) {
  const Icon = iconMap[category.icon];
  const count = countBySegment(category.slug);

  return (
    <Link
      href={category.href}
      className="group relative flex flex-col overflow-hidden rounded-xl card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-40 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(50% 60% at 50% 100%, var(--accent-glow), transparent)" }}
      />

      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-accent transition-shadow duration-300 group-hover:shadow-[0_0_24px_var(--accent-glow)]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs text-muted">
          {count > 0 ? `${count} assets` : "coming soon"}
        </span>
      </div>

      <div className="mb-1 font-mono text-[11px] text-muted">
        {category.command}
      </div>
      <h3 className="font-display text-xl font-semibold text-fg">
        {category.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {category.blurb}
      </p>

      <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-accent">
        browse
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
