/** Shared Upstash Redis (Vercel KV) REST client. Depending on how the
 *  integration is added, Vercel injects either KV_REST_API_* or
 *  UPSTASH_REDIS_REST_* env vars — we accept both. No SDK dependency: a
 *  single command is POSTed as a JSON array, mirroring redis-cli syntax. */

import { devRedisCommand } from "@/lib/kv-dev";

export type KvResult =
  | { configured: false }
  | { configured: true; result: unknown };

function kvCreds(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export async function redisCommand(
  command: (string | number)[],
): Promise<KvResult> {
  const creds = kvCreds();
  if (!creds) {
    // Local dev without Upstash: fall back to an in-memory store so features
    // that depend on KV are still testable. Production always needs real KV.
    if (process.env.NODE_ENV !== "production") {
      return { configured: true, result: devRedisCommand(command) };
    }
    return { configured: false };
  }

  const res = await fetch(creds.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${creds.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`KV responded ${res.status}`);
  }
  const data = (await res.json()) as { result: unknown };
  return { configured: true, result: data.result };
}
