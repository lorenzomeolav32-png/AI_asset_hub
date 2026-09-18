"use client";

import { useEffect, useState } from "react";
import { ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";

type VoteResponse = { votes?: number; alreadyVoted?: boolean };

/** Upvote button. Dedup is enforced server-side (cookie + Redis), localStorage
 *  is just so the UI remembers the "voted" state without an extra round trip. */
export function VoteButton({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const [votes, setVotes] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setVoted(window.localStorage.getItem(`voted:${slug}`) === "1");
    fetch(`/api/votes?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data: VoteResponse) => {
        if (typeof data.votes === "number") setVotes(data.votes);
      })
      .catch(() => {});
  }, [slug]);

  async function handleVote(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (voted || pending) return;

    setPending(true);
    setVoted(true);
    setVotes((v) => (v ?? 0) + 1);

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json().catch(() => ({}))) as VoteResponse;

      if (res.ok || res.status === 409) {
        if (typeof data.votes === "number") setVotes(data.votes);
        window.localStorage.setItem(`voted:${slug}`, "1");
      } else {
        setVoted(false);
        setVotes((v) => (v !== null ? Math.max(v - 1, 0) : v));
      }
    } catch {
      setVoted(false);
      setVotes((v) => (v !== null ? Math.max(v - 1, 0) : v));
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleVote}
      disabled={pending}
      aria-pressed={voted}
      title={voted ? "You voted for this asset" : "Vote for this asset"}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border font-mono transition-colors disabled:cursor-not-allowed",
        voted
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg",
        compact
          ? "px-2 py-1 text-[11px]"
          : "w-full justify-center px-4 py-2.5 text-sm",
      )}
    >
      <ArrowBigUp className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {votes ?? "–"}
    </button>
  );
}
