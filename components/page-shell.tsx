import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";

/** Shared layout for static company / legal pages. Renders the terminal-style
 *  header (breadcrumb + eyebrow + h1 + lead) and a content area. Pass
 *  `prose` to wrap children in the article typography styles. */
export function PageShell({
  label,
  command,
  title,
  lead,
  updated,
  prose = false,
  children,
}: {
  label: string;
  command: string;
  title: string;
  lead?: string;
  updated?: string;
  prose?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6">
      <Breadcrumbs items={[{ label: "~", href: "/" }, { label }]} />

      <header className="mt-8 border-b border-line pb-8">
        <div className="font-mono text-xs text-muted">{command}</div>
        <h1 className="mt-1 font-display text-3xl font-bold text-fg sm:text-4xl">
          {title}
        </h1>
        {lead && <p className="mt-3 text-lg text-muted">{lead}</p>}
        {updated && (
          <p className="mt-4 font-mono text-[11px] text-muted">
            last updated {updated}
          </p>
        )}
      </header>

      <div className="pt-8">
        {prose ? <div className="prose">{children}</div> : children}
      </div>
    </div>
  );
}
