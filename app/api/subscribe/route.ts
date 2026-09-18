import { NextResponse } from "next/server";
import { redisCommand } from "@/lib/kv";

export const runtime = "nodejs";

// Basic, pragmatic email validation (RFC-ish, good enough for a signup box).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Store the email in Redis. Dedupes automatically (SADD). Returns false if
 *  KV is unconfigured (e.g. local/preview). */
async function storeInKv(email: string): Promise<boolean> {
  const r = await redisCommand(["SADD", "subscribers", email]);
  return r.configured;
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
