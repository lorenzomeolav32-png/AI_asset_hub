"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { AssetCard } from "@/components/asset-card";
import { FilterMenu } from "@/components/filter-menu";
import type { CardAsset } from "@/lib/content";
import { categoryLabel, toolLabel, typeLabels } from "@/lib/data";
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
  const [category, setCategory] = useState<string | null>(null);
  const [tool, setTool] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(items.map((a) => a.category))).sort(),
    [items],
  );
  const tools = useMemo(
    () => Array.from(new Set(items.flatMap((a) => a.tools))).sort(),
    [items],
  );

  const query = q.trim().toLowerCase();
  const filtered = items.filter((a) => {
    if (type && a.type !== type) return false;
    if (category && a.category !== category) return false;
    if (tool && !a.tools.includes(tool)) return false;
    if (!query) return true;
    const hay = `${a.title} ${a.summary} ${a.fileName} ${a.tags.join(" ")} ${a.tools.join(" ")}`.toLowerCase();
    return hay.includes(query);
  });

  const activeCount = [type, category, tool].filter(Boolean).length;

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
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <FilterMenu
          label="Type"
          value={type}
          onChange={(v) => setType(v as AssetType | null)}
          options={TYPES.map((t) => ({ value: t, label: typeLabels[t] }))}
        />
        <FilterMenu
          label="Category"
          value={category}
          onChange={setCategory}
          options={categories.map((c) => ({
            value: c,
            label: categoryLabel(c),
          }))}
        />
        <FilterMenu
          label="Tool"
          value={tool}
          onChange={setTool}
          options={tools.map((t) => ({ value: t, label: toolLabel(t) }))}
        />
        {activeCount > 0 && (
          <button
            type="button"
            onClick={() => {
              setType(null);
              setCategory(null);
              setTool(null);
            }}
            className="font-mono text-[11px] text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            clear filters
          </button>
        )}
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
          no assets match. Try a different search or filter.
        </p>
      )}
    </div>
  );
}
