"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const KEY = "aad-cookie-notice";

/** Informational, non-blocking cookie notice. This site sets no advertising or
 *  cross-site tracking cookies; it only uses essential/functional local storage
 *  (e.g. your theme choice). The notice simply links to the Cookie Policy and
 *  remembers dismissal in localStorage. */
export function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "dismissed") setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(KEY, "dismissed");
    } catch {
      /* ignore (private mode) */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-xl border border-line bg-bg-2/95 p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 font-mono text-xs text-accent">$</span>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          We use only essential, functional storage (like remembering your
          theme). No advertising or cross-site tracking cookies. See our{" "}
          <Link href="/cookies" className="text-accent hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-ink transition-transform hover:scale-[1.03]"
        >
          Got it
        </button>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded-md p-1 text-muted transition-colors hover:text-fg"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
