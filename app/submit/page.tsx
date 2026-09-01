import type { Metadata } from "next";
import Link from "next/link";
import { Mail, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { GithubIcon } from "@/components/icons";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL, SITE_GITHUB } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Submit an asset",
  description:
    "Submit a Claude Skill, MCP server, Copilot agent, AI workflow or Cursor rule to AI Assets Directory. Open-source and permissively licensed only.",
  path: "/submit",
  eyebrow: "add your asset",
});

const criteria = [
  "Open-source with a public repository.",
  "Permissive license (MIT, Apache-2.0, BSD, CC-BY or public domain).",
  "Actually works and is reasonably maintained.",
  "A clear description and install instructions.",
  "Fits a category: Claude Skill, MCP server, Copilot agent, AI workflow or Cursor rule.",
];

const mailBody = encodeURIComponent(
  "Asset name:\nRepository URL:\nCategory (skill / mcp / copilot agent / workflow / cursor rule):\nLicense:\nOne-line summary:\nWhy it's useful:\n",
);

export default function SubmitPage() {
  return (
    <PageShell
      label="Submit"
      command="~/submit --new-asset"
      title="Submit an asset"
      lead="Found or built something worth sharing? Send it in. We review every submission by hand."
    >
      <div className="prose">
        <h2>What we accept</h2>
        <ul className="not-prose space-y-2">
          {criteria.map((c) => (
            <li key={c} className="flex items-start gap-2.5 text-sm text-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <a
          href={`${SITE_GITHUB}/issues/new`}
          target="_blank"
          rel="noreferrer"
          className="card-surface group flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-line-strong"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent">
            <GithubIcon className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-fg group-hover:text-accent">
              Open a GitHub issue
            </span>
            <span className="block text-sm text-muted">
              Preferred — public and trackable.
            </span>
          </span>
        </a>

        <a
          href={`mailto:${SITE_EMAIL}?subject=Asset%20submission&body=${mailBody}`}
          className="card-surface group flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-line-strong"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent">
            <Mail className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-fg group-hover:text-accent">
              Email your submission
            </span>
            <span className="block text-sm text-muted">
              We reply within a few business days.
            </span>
          </span>
        </a>
      </div>

      <div className="prose mt-10">
        <h2>What happens next</h2>
        <p>
          We check the license, test the asset where we can, write a short
          explanation, and publish it with credit and a link back to your
          source. If it is not a fit, we will tell you why.
        </p>
        <p>
          By submitting, you confirm you have the right to share the asset and
          that its license permits listing. See our{" "}
          <Link href="/license-policy">license policy</Link> for details.
        </p>
      </div>
    </PageShell>
  );
}
