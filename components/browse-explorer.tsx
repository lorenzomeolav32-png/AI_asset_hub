"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { AssetCard } from "@/components/asset-card";
import type { CardAsset } from "@/lib/content";
import { toolLabel, typeLabels } from "@/lib/data";
import type { AssetType } from "@/lib/data";

const TYPES: AssetType[] = [
  "claude-skill",
  "mcp-server",
  "copilot",
  "ai-workflow",
  "cursor-rule",
];

export function BrowseExplorer({ items }: { items: CardAsset[] }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState<AssetType | null>(null);
  const [tool, setTool] = useState<string | null>(null);

  const tools = useMemo(
    () => Array.from(new Set(items.flatMap((a) => a.tools))).sort(),
    [items],
  );

  const query = q.trim().toLowerCase();
  const filtered = items.filter((a) => {
    if (type && a.type !== type) return false;
    if (tool && !a.tools.includes(tool)) return false;
    if (!query) return true;
    const hay = `${a.title} ${a.summary} ${a.fileName} ${a.tags.join(" ")} ${a.tools.join(" ")}`.toLowerCase();
    return hay.includes(query);
  });

  return (
    <div>
      {/* search */}
      <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 focus-within:border-line-strong">
        <Search className="h-4 w-4 shrink-0 text-accent" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search all assets…"
          className="min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-muted"
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ("")}
            aria-label="Clear"
            className="text-muted transition-colors hover:text-fg"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* filters */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            type:
          </span>
          <Chip active={type === null} onClick={() => setType(null)}>
            all
          </Chip>
          {TYPES.map((t) => (
            <Chip key={t} active={type === t} onClick={() => setType(t)}>
              {typeLabels[t]}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            tool:
          </span>
          <Chip active={tool === null} onClick={() => setTool(null)}>
            all
          </Chip>
          {tools.map((t) => (
            <Chip key={t} active={tool === t} onClick={() => setTool(t)}>
              {toolLabel(t)}
            </Chip>
          ))}
        </div>
      </div>

      <p className="mt-6 font-mono text-xs text-muted">
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AssetCard key={a.slug} asset={a} />
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-xl border border-dashed border-line p-10 text-center font-mono text-sm text-muted">
          no assets match — try a different search or filter.
        </p>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1 font-mono text-xs transition-colors " +
        (active
          ? "border-transparent bg-accent text-accent-ink"
          : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg")
      }
    >
      {children}
    </button>
  );
}
