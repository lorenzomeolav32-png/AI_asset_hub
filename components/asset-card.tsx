import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  ScrollText,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import type { CardAsset } from "@/lib/content";
import { toolLabel, typeLabels } from "@/lib/data";
import type { AssetType } from "@/lib/data";

const typeIcon: Record<AssetType, React.ComponentType<{ className?: string }>> = {
  "claude-skill": Sparkles,
  "mcp-server": Server,
  copilot: Bot,
  "ai-workflow": Workflow,
  "cursor-rule": ScrollText,
};

export function AssetCard({ asset }: { asset: CardAsset }) {
  const Icon = typeIcon[asset.type];

  return (
    <Link
      href={asset.url}
      className="group relative flex flex-col overflow-hidden rounded-xl card-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
    >
      {/* corner glow on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(closest-side, var(--accent-glow), transparent)" }}
      />

      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-[11px] font-medium text-muted">
          <Icon className="h-3.5 w-3.5 text-accent" />
          {typeLabels[asset.type]}
        </span>
        <div className="flex items-center gap-3">
          {typeof asset.stars === "number" && (
            <span
              className="inline-flex items-center gap-1 font-mono text-[11px] text-muted"
              title={asset.starsNote ? `Stars for the ${asset.starsNote}` : undefined}
            >
              <Star className="h-3.5 w-3.5" />
              {asset.stars >= 1000
                ? `${(asset.stars / 1000).toFixed(1)}k`
                : asset.stars}
            </span>
          )}
          {asset.verified ? (
            <span
              className="inline-flex items-center gap-1 font-mono text-[10px] text-accent"
              title="Tested by us"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              verified
            </span>
          ) : (
            <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
          )}
        </div>
      </div>

      <div className="mb-1.5 font-mono text-[12px] text-accent-strong">
        {asset.fileName}
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug text-fg">
        {asset.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {asset.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {asset.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            #{t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {asset.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded border border-line px-1.5 py-0.5 text-[10px] text-muted"
            >
              {toolLabel(tool)}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] text-muted">{asset.license}</span>
      </div>
    </Link>
  );
}
