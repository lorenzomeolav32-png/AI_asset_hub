"use client";

import { useMemo, useState } from "react";
import { AssetCard } from "@/components/asset-card";
import type { CardAsset } from "@/lib/content";
import { toolLabel } from "@/lib/data";

export function AssetBrowser({ assets }: { assets: CardAsset[] }) {
  const [tool, setTool] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

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
      (!tool || a.tools.includes(tool)) && (!tag || a.tags.includes(tag)),
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3">
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
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              tag:
            </span>
            <Chip active={tag === null} onClick={() => setTag(null)}>
              all
            </Chip>
            {tags.map((t) => (
              <Chip key={t} active={tag === t} onClick={() => setTag(t)}>
                #{t}
              </Chip>
            ))}
          </div>
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
