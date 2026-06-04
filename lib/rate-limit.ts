// Best-effort, in-memory fixed-window rate limiter.
//
// NOTE: serverless functions are ephemeral and per-instance, so this map is NOT
// shared across regions/instances and resets on cold start. It stops casual
// abuse and form spam bursts, but for hard guarantees move this to a shared
// store (Vercel KV / Upstash Redis). It is intentionally zero-dependency.

type Window = { count: number; resetAt: number };

const store = new Map<string, Window>();

export type RateLimitResult =
  | { ok: true; remaining: number }
  | { ok: false; remaining: 0; retryAfter: number };

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 60_000 }: { limit?: number; windowMs?: number } = {}
): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, retryAfter: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { ok: true, remaining: limit - existing.count };
}
