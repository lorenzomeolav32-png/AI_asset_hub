"use client";

import { useEffect, useState } from "react";
import { Command, Terminal } from "lucide-react";
import { useCommandMenu } from "@/components/command-menu-context";

const EXAMPLES = [
  "mcp server for postgres",
  "claude skill for pdf extraction",
  "cursor rule for next.js",
  "copilot agent for code review",
];

export function HeroSearchBar() {
  const { setOpen } = useCommandMenu();
  const [mounted, setMounted] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    setMounted(true);
    setIsMac(/mac|iphone|ipad|ipod/i.test(navigator.userAgent));
  }, []);

  // Typewriter loop: types out an example query, pauses, deletes, moves to the next.
  useEffect(() => {
    const full = EXAMPLES[exampleIndex];
    let i = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += deleting ? -1 : 1;
      setText(full.slice(0, i));

      if (!deleting && i === full.length) {
        deleting = true;
        timeout = setTimeout(tick, 1600);
        return;
      }
      if (deleting && i === 0) {
        setExampleIndex((idx) => (idx + 1) % EXAMPLES.length);
        return;
      }
      timeout = setTimeout(tick, deleting ? 26 : 46);
    };

    timeout = setTimeout(tick, 46);
    return () => clearTimeout(timeout);
  }, [exampleIndex]);

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Open search (⌘K)"
      className="flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 text-left shadow-[0_0_40px_-12px_var(--accent-glow)] transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
    >
      <Terminal className="h-4 w-4 shrink-0 text-accent" />
      <span className="shrink-0 font-mono text-sm text-muted">$ search</span>
      <span className="min-w-0 flex-1 truncate font-mono text-sm text-fg/80">
        {text}
        <span className="caret" />
      </span>
      <kbd className="ml-auto hidden shrink-0 items-center gap-1 rounded border border-line bg-bg px-2 py-1 font-mono text-[11px] text-muted sm:inline-flex">
        {mounted && isMac ? (
          <>
            <Command className="h-3 w-3" />K
          </>
        ) : (
          "Ctrl K"
        )}
      </kbd>
    </button>
  );
}
