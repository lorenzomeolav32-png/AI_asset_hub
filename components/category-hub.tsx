import { Bot, ScrollText, Server, Sparkles, Workflow } from "lucide-react";
import { AssetBrowser } from "@/components/asset-browser";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { Category } from "@/lib/data";
import { cardsBySegment } from "@/lib/content";

const iconMap = {
  sparkles: Sparkles,
  server: Server,
  bot: Bot,
  workflow: Workflow,
  scroll: ScrollText,
} as const;

export function CategoryHub({ category }: { category: Category }) {
  const Icon = iconMap[category.icon];
  const assets = cardsBySegment(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6">
      <Breadcrumbs
        items={[{ label: "~", href: "/" }, { label: category.name }]}
      />

      <div className="mt-8 flex items-start gap-4 border-b border-line pb-10">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent shadow-[0_0_30px_var(--accent-glow)]">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <div className="font-mono text-xs text-muted">{category.command}</div>
          <h1 className="mt-1 font-display text-3xl font-bold text-fg sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">{category.blurb}</p>
          <p className="mt-3 font-mono text-xs text-muted">
            {assets.length} {assets.length === 1 ? "asset" : "assets"} · curated
            &amp; open-source
          </p>
        </div>
      </div>

      <div className="pt-10">
        {assets.length > 0 ? (
          <AssetBrowser assets={assets} />
        ) : (
          <div className="rounded-2xl border border-dashed border-line p-12 text-center">
            <p className="font-display text-xl text-fg">Coming soon</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              We are curating the best {category.name.toLowerCase()}. Want to see
              yours here?{" "}
              <a href="/submit" className="text-accent hover:underline">
                Submit an asset
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
