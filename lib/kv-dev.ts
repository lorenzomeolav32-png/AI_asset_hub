/** In-memory stand-in for the Redis commands we use, so the voting feature is
 *  testable in local dev without Upstash credentials. Never used in production:
 *  state is per-process and lost on restart. */

type Entry = { value: unknown; expiresAt?: number };

// Survives Next.js dev hot-reloads, which re-evaluate modules.
const globalStore = globalThis as unknown as {
  __devKv?: Map<string, Entry>;
};
const store = (globalStore.__devKv ??= new Map<string, Entry>());

function read(key: string): unknown {
  const entry = store.get(key);
  if (!entry) return undefined;
  if (entry.expiresAt && Date.now() > entry.expiresAt) {
    store.delete(key);
    return undefined;
  }
  return entry.value;
}

function write(key: string, value: unknown, ttlSec?: number) {
  const prev = store.get(key);
  store.set(key, {
    value,
    expiresAt: ttlSec ? Date.now() + ttlSec * 1000 : prev?.expiresAt,
  });
}

export function devRedisCommand(command: (string | number)[]): unknown {
  const op = String(command[0]).toUpperCase();
  const key = String(command[1]);

  switch (op) {
    case "SADD": {
      const set = (read(key) as Set<string>) ?? new Set<string>();
      const member = String(command[2]);
      const added = set.has(member) ? 0 : 1;
      set.add(member);
      write(key, set);
      return added;
    }

    case "INCR": {
      const next = Number(read(key) ?? 0) + 1;
      write(key, next);
      return next;
    }

    case "EXPIRE": {
      const entry = store.get(key);
      if (!entry) return 0;
      entry.expiresAt = Date.now() + Number(command[2]) * 1000;
      return 1;
    }

    case "SET": {
      const rest = command.slice(3).map((a) => String(a).toUpperCase());
      const nx = rest.includes("NX");
      if (nx && read(key) !== undefined) return null;
      const exIndex = rest.indexOf("EX");
      const ttl = exIndex >= 0 ? Number(command[3 + exIndex + 1]) : undefined;
      write(key, command[2], ttl);
      return "OK";
    }

    case "ZSCORE": {
      const zset = read(key) as Map<string, number> | undefined;
      const score = zset?.get(String(command[2]));
      return score === undefined ? null : String(score);
    }

    case "ZINCRBY": {
      const zset = (read(key) as Map<string, number>) ?? new Map();
      const member = String(command[3]);
      const next = (zset.get(member) ?? 0) + Number(command[2]);
      zset.set(member, next);
      write(key, zset);
      return String(next);
    }

    case "ZREVRANGE": {
      const zset = (read(key) as Map<string, number>) ?? new Map();
      const sorted = [...zset.entries()].sort((a, b) => b[1] - a[1]);
      const start = Number(command[2]);
      const stop = Number(command[3]);
      const slice = sorted.slice(start, stop === -1 ? undefined : stop + 1);
      return slice.flatMap(([member, score]) => [member, String(score)]);
    }

    default:
      throw new Error(`[dev-kv] unsupported command: ${op}`);
  }
}
