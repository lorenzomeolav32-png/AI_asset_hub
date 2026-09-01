"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyBlock({
  code,
  lang = "bash",
  label,
}: {
  code: string;
  lang?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg-2">
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="font-mono text-[11px] text-muted">
          {label ?? lang}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:text-fg"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-accent" /> copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-fg/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
