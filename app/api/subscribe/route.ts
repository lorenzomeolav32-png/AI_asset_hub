import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Basic, pragmatic email validation (RFC-ish, good enough for a signup box).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Store the email in Redis (Upstash, via the Vercel Marketplace) using its REST
 *  API, so we don't need an SDK dependency. Depending on how the integration is
 *  added, Vercel injects either KV_REST_API_* or UPSTASH_REDIS_REST_* env vars —
 *  we accept both. Returns false if unconfigured. */
async function storeInKv(email: string): Promise<boolean> {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return false;

  // Single command: SADD subscribers <email> (dedupes automatically).
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["SADD", "subscribers", email]),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`KV responded ${res.status}`);
  }
  return true;
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 },
    );
  }

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { message: "Enter a valid email address." },
      { status: 422 },
    );
  }

  try {
    const stored = await storeInKv(email);
    if (!stored) {
      // No store configured yet (e.g. local/preview). Don't fail the UX.
      console.warn("[subscribe] KV not configured; email not persisted.");
    }
    return NextResponse.json({ message: "You're on the list. Thanks!" });
  } catch (err) {
    console.error("[subscribe] store failed:", err);
    return NextResponse.json(
      { message: "Could not save your email right now. Try again later." },
      { status: 500 },
    );
  }
}
