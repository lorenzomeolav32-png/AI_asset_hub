import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { GithubIcon } from "@/components/icons";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL, SITE_GITHUB } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with AI Assets Directory — suggest an asset, correct a listing, request removal, or talk about sponsorship.",
  path: "/contact",
  eyebrow: "say hello",
});

const rows: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Open an issue or PR",
    href: SITE_GITHUB,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      label="Contact"
      command="~/contact --reach-out"
      title="Contact"
      lead="Suggest an asset, correct a listing, request a removal, or talk sponsorship."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {rows.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="card-surface group flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-line-strong"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent">
              <Icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">
                {label}
              </span>
              <span className="block truncate text-sm text-fg group-hover:text-accent">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="prose mt-10">
        <h2>What to reach out about</h2>
        <ul>
          <li>
            <strong>Submit an asset</strong> — use the{" "}
            <Link href="/submit">submit page</Link> for the fastest route.
          </li>
          <li>
            <strong>Fix or update a listing</strong> — tell us what is wrong and
            link the source.
          </li>
          <li>
            <strong>Removal requests</strong> — if you own an asset and want it
            delisted, email us and we will remove it promptly.
          </li>
          <li>
            <strong>Sponsorship</strong> — see{" "}
            <Link href="/advertise">advertising options</Link>.
          </li>
          <li>
            <strong>Privacy</strong> — data requests are covered in the{" "}
            <Link href="/privacy">privacy policy</Link>.
          </li>
        </ul>
        <p>
          We are a small, independent team and read every message. Expect a
          reply within a few business days.
        </p>
      </div>
    </PageShell>
  );
}
