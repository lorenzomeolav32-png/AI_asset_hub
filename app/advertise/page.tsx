import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Advertise",
  description:
    "Sponsor AI Assets Directory and reach developers building with Claude Skills, MCP servers and AI agents. Newsletter, directory placements and more.",
  path: "/advertise",
  eyebrow: "sponsorship",
});

const options = [
  {
    name: "Directory placement",
    desc: "A clearly labelled sponsored slot on high-traffic category and browse pages.",
  },
  {
    name: "Newsletter sponsorship",
    desc: "A dedicated slot in the weekly email that goes to developers who opted in for new assets.",
  },
  {
    name: "Featured listing",
    desc: "A curated, honest write-up of your open-source tool, marked as sponsored.",
  },
];

export default function AdvertisePage() {
  return (
    <PageShell
      label="Advertise"
      command="~/advertise --reach-builders"
      title="Reach AI builders"
      lead="Put your tool in front of developers who are actively shipping with AI assets."
    >
      <div className="prose">
        <h2>Who reads this</h2>
        <p>
          Developers and teams looking for Claude Skills, MCP servers, Copilot
          agents, AI workflows and Cursor rules. They arrive with intent: they
          are here to copy, install and ship.
        </p>
        <h2>Ways to sponsor</h2>
      </div>

      <div className="mt-6 grid gap-3">
        {options.map((o) => (
          <div key={o.name} className="card-surface rounded-xl p-5">
            <h3 className="font-medium text-fg">{o.name}</h3>
            <p className="mt-1 text-sm text-muted">{o.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose mt-10">
        <h2>Our promise</h2>
        <p>
          Every paid placement is labelled <strong>Sponsored</strong>. We never
          disguise ads as editorial and we never sell rankings in the main
          directory. Read the full <Link href="/disclosure">disclosure</Link>.
        </p>
      </div>

      <a
        href={`mailto:${SITE_EMAIL}?subject=Sponsorship%20enquiry`}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink shadow-[0_0_24px_var(--accent-glow)] transition-transform hover:scale-[1.03]"
      >
        <Mail className="h-4 w-4" />
        Request the media kit
      </a>
    </PageShell>
  );
}
