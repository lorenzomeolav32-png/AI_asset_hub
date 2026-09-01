import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AssetDetail } from "@/components/asset-detail";
import { assetsBySegment, getAsset } from "@/lib/content";
import { typeLabels } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

const SEGMENT = "ai-workflows";

export function generateStaticParams() {
  return assetsBySegment(SEGMENT).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const asset = getAsset(SEGMENT, slug);
  if (!asset) return {};
  return pageMeta({
    title: asset.title,
    description: asset.summary,
    path: asset.url,
    eyebrow: typeLabels[asset.type],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const asset = getAsset(SEGMENT, slug);
  if (!asset) notFound();
  return <AssetDetail asset={asset} />;
}
