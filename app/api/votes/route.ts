import { NextResponse } from "next/server";
import { redisCommand } from "@/lib/kv";
import { cards } from "@/lib/content";

export const runtime = "nodejs";

const LEADERBOARD_SIZE = 50; // fetched once, category filtering + limit happens client-side

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      const r = await redisCommand(["ZSCORE", "leaderboard", slug]);
      const votes = r.configured ? Number(r.result ?? 0) : 0;
      return NextResponse.json({ configured: r.configured, votes });
    }

    const r = await redisCommand([
      "ZREVRANGE",
      "leaderboard",
      "0",
      LEADERBOARD_SIZE - 1,
      "WITHSCORES",
    ]);
    if (!r.configured) {
      return NextResponse.json({ configured: false, items: [] });
    }

    const flat = (r.result as (string | number)[] | null) ?? [];
    const bySlug = new Map(cards.map((c) => [c.slug, c]));
    const items = [];
    for (let i = 0; i < flat.length; i += 2) {
      const card = bySlug.get(String(flat[i]));
      if (!card) continue; // asset was removed from content since it was voted on
      items.push({
        slug: card.slug,
        title: card.title,
        url: card.url,
        category: card.category,
        type: card.type,
        votes: Number(flat[i + 1]),
      });
    }

    return NextResponse.json({ configured: true, items });
  } catch (err) {
    console.error("[votes] failed:", err);
    return NextResponse.json(
      { message: "Could not load votes." },
      { status: 500 },
    );
  }
}
