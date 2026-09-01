import Link from "next/link";
import { Megaphone, ArrowUpRight } from "lucide-react";

/** Sponsor placement. Renders a live sponsor when configured via env
 *  (NEXT_PUBLIC_SPONSOR_*), otherwise an "available" slot linking to /advertise.
 *  Clearly labelled "Sponsored" so it never masquerades as editorial. */
export function SponsorSlot() {
  const name = process.env.NEXT_PUBLIC_SPONSOR_NAME;
  const url = process.env.NEXT_PUBLIC_SPONSOR_URL;
  const tagline = process.env.NEXT_PUBLIC_SPONSOR_TAGLINE;

  const live = Boolean(name && url);

  return (
    <aside
      aria-label={live ? "Sponsored" : "Advertise here"}
      className="card-surface relative overflow-hidden rounded-xl p-5"
    >
      <span className="absolute right-3 top-3 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
        {live ? "Sponsored" : "Ad slot"}
      </span>

      {live ? (
        <a
          href={url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group flex items-start gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent">
            <Megaphone className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-1 font-medium text-fg">
              {name}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {tagline && (
              <span className="mt-1 block text-sm text-muted">{tagline}</span>
            )}
          </span>
        </a>
      ) : (
        <Link href="/advertise" className="group flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent">
            <Megaphone className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="flex items-center gap-1 font-medium text-fg">
              Reach AI builders here
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            <span className="mt-1 block text-sm text-muted">
              Sponsor the directory and put your tool in front of developers
              shipping with AI. See advertising options.
            </span>
          </span>
        </Link>
      )}
    </aside>
  );
}
