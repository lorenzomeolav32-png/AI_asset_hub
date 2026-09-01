import {
  assets,
  learn,
  blog,
  type Asset,
  type LearnDoc,
  type BlogPost,
} from "#site/content";
import type { AssetType } from "@/lib/data";

export type { Asset, LearnDoc, BlogPost };

export type Toc = LearnDoc["toc"];

// verified first, then by stars — used across listings
export const allAssets: Asset[] = [...assets].sort(
  (a, b) =>
    Number(b.verified) - Number(a.verified) || (b.stars ?? 0) - (a.stars ?? 0),
);

/** Lightweight card shape — safe to serialize into client components
 * (no markdown body / testimonials / install). */
export type CardAsset = {
  slug: string;
  type: AssetType;
  segment: string;
  url: string;
  title: string;
  fileName: string;
  summary: string;
  tags: string[];
  tools: string[];
  license: string;
  stars?: number;
  starsNote?: string;
  verified: boolean;
};

function toCard(a: Asset): CardAsset {
  return {
    slug: a.slug,
    type: a.type,
    segment: a.segment,
    url: a.url,
    title: a.title,
    fileName: a.fileName,
    summary: a.summary,
    tags: a.tags,
    tools: a.tools,
    license: a.license,
    stars: a.stars,
    starsNote: a.starsNote,
    verified: a.verified,
  };
}

export const cards: CardAsset[] = allAssets.map(toCard);

export function cardsBySegment(segment: string): CardAsset[] {
  return cards.filter((c) => c.segment === segment);
}

export function featuredCards(n = 6): CardAsset[] {
  return cards.slice(0, n);
}

export function assetsBySegment(segment: string): Asset[] {
  return allAssets.filter((a) => a.segment === segment);
}

export function countBySegment(segment: string): number {
  return allAssets.filter((a) => a.segment === segment).length;
}

export function getAsset(segment: string, slug: string): Asset | undefined {
  return allAssets.find((a) => a.segment === segment && a.slug === slug);
}

export function featured(n = 6): Asset[] {
  return allAssets.slice(0, n);
}

export function related(asset: Asset, n = 3): CardAsset[] {
  return cards
    .filter(
      (a) =>
        a.slug !== asset.slug &&
        (a.segment === asset.segment ||
          a.tags.some((t) => asset.tags.includes(t))),
    )
    .slice(0, n);
}

// ── Editorial (learn + blog) ───────────────────────────────────────────────
const byDateDesc = (a: { date: string }, b: { date: string }) =>
  +new Date(b.date) - +new Date(a.date);

export const learnDocs: LearnDoc[] = [...learn].sort(byDateDesc);
export const blogPosts: BlogPost[] = [...blog].sort(byDateDesc);

export function getLearn(slug: string): LearnDoc | undefined {
  return learnDocs.find((d) => d.slug === slug);
}

export function getBlog(slug: string): BlogPost | undefined {
  return blogPosts.find((d) => d.slug === slug);
}
