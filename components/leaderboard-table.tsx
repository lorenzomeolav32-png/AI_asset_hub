"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowBigUp } from "lucide-react";
import { categoryLabel, typeLabels } from "@/lib/data";
import type { AssetType } from "@/lib/data";

type VoteItem = {
  slug: string;
  title: string;
  url: string;
  category: string;
  type: AssetType;
  votes: number;
};

const POLL_MS = 20_000;
const DISPLAY_LIMIT = 8;

/** "Most voted" table for the home page. Polls /api/votes so the ranking
 *  updates without a page refresh; category filtering happens client-side
 *  against the already-fetched list (small dataset, avoids extra requests). */
export function LeaderboardTable() {
  const [items, setItems] = useState<VoteItem[]>([]);
  const [configured, setConfigured] = useState(true);
  const [category, setCategory] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/votes", { cache: "no-store" });
      const data = (await res.json()) as {
        configured: boolean;
        items: VoteItem[];
      };
      setConfigured(data.configured);
      setItems(data.items ?? []);
    } catch {
      // keep the last known state on a transient network error
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, POLL_MS);
    return () => clearInterval(id);
  }, [load]);

  if (!configured) {
    return (
      <p className="rounded-xl border border-dashed border-line p-8 text-center font-mono text-sm text-muted">
        // voting isn&apos;t configured on this environment yet
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line p-8 text-center font-mono text-sm text-muted">
        No votes yet. Be the first to vote on an asset.
      </p>
    );
  }

  const categories = Array.from(new Set(items.map((i) => i.category))).sort();
  const filtered = (
    category ? items.filter((i) => i.category === category) : items
  ).slice(0, DISPLAY_LIMIT);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        <CategoryPill
          active={category === null}
          onClick={() => setCategory(null)}
        >
          All
        </CategoryPill>
        {categories.map((c) => (
          <CategoryPill
            key={c}
            active={category === c}
            onClick={() => setCategory(c)}
          >
            {categoryLabel(c)}
          </CategoryPill>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-line">
        {filtered.map((item, i) => (
          <Link
            key={item.slug}
            href={item.url}
            className="flex items-center justify-between gap-4 border-b border-line bg-surface px-4 py-3 transition-colors last:border-b-0 hover:bg-bg"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="w-5 shrink-0 font-mono text-xs text-muted">
                {i + 1}
              </span>
              <div className="min-w-0">
                <div className="truncate font-display text-sm font-medium text-fg">
                  {item.title}
                </div>
                <div className="font-mono text-[11px] text-muted">
                  {typeLabels[item.type]} · {categoryLabel(item.category)}
                </div>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 font-mono text-sm text-accent">
              <ArrowBigUp className="h-4 w-4" />
              {item.votes}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CategoryPill({
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
      className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
        active
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg"
      }`}
    >
      {children}
    </button>
  );
}
