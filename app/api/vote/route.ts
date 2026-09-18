import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redisCommand } from "@/lib/kv";
import { allAssets } from "@/lib/content";

export const runtime = "nodejs";

const VISITOR_COOKIE = "aad_vid";
const VISITOR_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
const DEDUPE_TTL_SEC = 60 * 60 * 24 * 365; // 1 year
const RATE_LIMIT_MAX = 30; // votes per IP per hour, second line of defense behind the dedupe cookie
const RATE_LIMIT_WINDOW_SEC = 60 * 60;

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  return fwd ? fwd.split(",")[0].trim() : "unknown";
}

export async function POST(request: Request) {
  let slug = "";
  try {
    const body = (await request.json()) as { slug?: unknown };
    slug = typeof body.slug === "string" ? body.slug.trim() : "";
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (!slug || !allAssets.some((a) => a.slug === slug)) {
    return NextResponse.json({ message: "Unknown asset." }, { status: 404 });
  }

  const cookieStore = await cookies();
  const existingVisitorId = cookieStore.get(VISITOR_COOKIE)?.value;
  const visitorId = existingVisitorId ?? crypto.randomUUID();

  try {
    const ip = clientIp(request);
    const rl = await redisCommand(["INCR", `rl:vote:${ip}`]);
    if (rl.configured) {
      if (rl.result === 1) {
        await redisCommand(["EXPIRE", `rl:vote:${ip}`, RATE_LIMIT_WINDOW_SEC]);
      }
      if (typeof rl.result === "number" && rl.result > RATE_LIMIT_MAX) {
        return NextResponse.json(
          { message: "Too many votes. Try again later." },
          { status: 429 },
        );
      }
    }

    // One vote per asset per visitor: NX only claims the key if it doesn't exist yet.
    const dedupeKey = `voted:${slug}:${visitorId}`;
    const claim = await redisCommand([
      "SET",
      dedupeKey,
      "1",
      "NX",
      "EX",
      DEDUPE_TTL_SEC,
    ]);

    if (claim.configured && claim.result === null) {
      const score = await redisCommand(["ZSCORE", "leaderboard", slug]);
      const votes = score.configured ? Number(score.result ?? 0) : 0;
      return withVisitorCookie(
        NextResponse.json({ votes, alreadyVoted: true }),
        visitorId,
        !existingVisitorId,
      );
    }

    const incr = await redisCommand(["ZINCRBY", "leaderboard", "1", slug]);
    const votes = incr.configured ? Number(incr.result ?? 0) : 0;

    return withVisitorCookie(
      NextResponse.json({ votes, alreadyVoted: false }),
      visitorId,
      !existingVisitorId,
    );
  } catch (err) {
    console.error("[vote] failed:", err);
    return NextResponse.json(
      { message: "Could not register your vote right now." },
      { status: 500 },
    );
  }
}

function withVisitorCookie(
  res: NextResponse,
  visitorId: string,
  shouldSet: boolean,
): NextResponse {
  if (shouldSet) {
    res.cookies.set(VISITOR_COOKIE, visitorId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: VISITOR_MAX_AGE,
      path: "/",
    });
  }
  return res;
}
