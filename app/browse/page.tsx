import type { Metadata } from "next";
import { BrowseExplorer } from "@/components/browse-explorer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SponsorSlot } from "@/components/sponsor-slot";
import { cards } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Browse all AI assets",
  description:
    "Search and filter every curated AI asset — Claude Skills, MCP servers, Copilot agents, AI workflows and Cursor rules.",
  path: "/browse",
  eyebrow: "search & filter",
});

export default function BrowsePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6">
      <Breadcrumbs items={[{ label: "~", href: "/" }, { label: "Browse" }]} />

      <div className="mt-8 border-b border-line pb-8">
        <div className="font-mono text-xs text-muted">~/browse --all</div>
        <h1 className="mt-1 font-display text-3xl font-bold text-fg sm:text-4xl">
          Browse all assets
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          Every curated, tested and open-source AI asset in one place. Search or
          filter by type and tool.
        </p>
      </div>

      <div className="pt-8">
        <div className="mb-6">
          <SponsorSlot />
        </div>
        <BrowseExplorer items={cards} />
      </div>
    </div>
  );
}
