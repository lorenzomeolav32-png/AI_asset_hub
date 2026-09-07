"use client";

import { useMemo, useState } from "react";
import { AssetCard } from "@/components/asset-card";
import { FilterMenu } from "@/components/filter-menu";
import type { CardAsset } from "@/lib/content";
import { categoryLabel, toolLabel } from "@/lib/data";

export function AssetBrowser({ assets }: { assets: CardAsset[] }) {
  const [category, setCategory] = useState<string | null>(null);
  const [tool, setTool] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(assets.map((a) => a.category))).sort(),
    [assets],
  );
  const tools = useMemo(
    () => Array.from(new Set(assets.flatMap((a) => a.tools))).sort(),
    [assets],
  );
  const tags = useMemo(
    () => Array.from(new Set(assets.flatMap((a) => a.tags))).sort(),
    [assets],
  );

  const filtered = assets.filter(
    (a) =>
      (!category || a.category === category) &&
      (!tool || a.tools.includes(tool)) &&
      (!tag || a.tags.includes(tag)),
  );

  const activeCount = [category, tool, tag].filter(Boolean).length;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-2.5">
        {categories.length > 1 && (
          <FilterMenu
            label="Category"
            value={category}
            onChange={setCategory}
            options={categories.map((c) => ({
              value: c,
              label: categoryLabel(c),
            }))}
          />
        )}
        <FilterMenu
          label="Tool"
          value={tool}
          onChange={setTool}
          options={tools.map((t) => ({ value: t, label: toolLabel(t) }))}
        />
        {tags.length > 0 && (
          <FilterMenu
            label="Tag"
            value={tag}
            onChange={setTag}
            options={tags.map((t) => ({ value: t, label: `#${t}` }))}
            searchPlaceholder="Search tags…"
          />
        )}
        {activeCount > 0 && (
          <button
            type="button"
            onClick={() => {
              setCategory(null);
              setTool(null);
              setTag(null);
            }}
            className="font-mono text-[11px] text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AssetCard key={a.slug} asset={a} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-line p-10 text-center font-mono text-sm text-muted">
          no assets match this filter yet.
        </p>
      )}
    </div>
  );
}
