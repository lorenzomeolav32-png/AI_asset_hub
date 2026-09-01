import type { Toc } from "@/lib/content";

export function TableOfContents({ toc }: { toc: Toc }) {
  if (!toc?.length) return null;

  return (
    <nav aria-label="On this page">
      <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
        on this page
      </div>
      <ul className="space-y-2 border-l border-line text-sm">
        {toc.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              className="-ml-px block border-l border-transparent py-0.5 pl-4 text-muted transition-colors hover:border-accent hover:text-fg"
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <ul className="space-y-2 py-1">
                {item.items.map((sub) => (
                  <li key={sub.url}>
                    <a
                      href={sub.url}
                      className="-ml-px block border-l border-transparent py-0.5 pl-8 text-muted/80 transition-colors hover:border-accent hover:text-fg"
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
