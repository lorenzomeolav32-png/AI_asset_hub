"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

/** Newsletter capture. Posts to /api/subscribe (Vercel KV on the server).
 *  Progressive enhancement: still renders and validates without JS handlers. */
export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
      };
      if (res.ok) {
        setStatus("ok");
        setMessage(data.message ?? "You're on the list.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  const done = status === "ok";

  return (
    <form className="mt-6 max-w-sm" onSubmit={onSubmit} noValidate>
      <label
        htmlFor="subscribe-email"
        className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted"
      >
        $ subscribe --new-assets
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface p-1 pl-3 focus-within:border-line-strong">
        <span className="font-mono text-sm text-accent">&gt;</span>
        <input
          id="subscribe-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={done}
          placeholder="you@dev.to"
          className="min-w-0 flex-1 bg-transparent py-1.5 text-sm text-fg outline-none placeholder:text-muted disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || done}
          className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-ink transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "..." : done ? "Joined" : "Join"}
        </button>
      </div>
      <p
        className="mt-2 font-mono text-[11px]"
        style={{
          color:
            status === "error"
              ? "var(--accent-strong)"
              : status === "ok"
                ? "var(--accent)"
                : "var(--muted)",
        }}
        role={status === "error" ? "alert" : undefined}
        aria-live="polite"
      >
        {message
          ? `// ${message}`
          : "// new skills & MCP servers, weekly. No spam."}
      </p>
    </form>
  );
}
