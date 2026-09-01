import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <div className="font-mono text-xs text-muted">~/404 --not-found</div>
      <p className="mt-4 font-display text-6xl font-bold text-fg text-glow sm:text-7xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold text-fg">
        This path doesn&rsquo;t exist
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you were looking for moved, never existed, or the command was
        mistyped. Let&rsquo;s get you back on track.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink shadow-[0_0_24px_var(--accent-glow)] transition-transform hover:scale-[1.03]"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
        <Link
          href="/browse"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-line-strong"
        >
          <Compass className="h-4 w-4" />
          Browse all assets
        </Link>
      </div>
    </div>
  );
}
