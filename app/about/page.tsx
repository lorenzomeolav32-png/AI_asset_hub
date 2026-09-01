import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "AI Assets Directory is a curated, tested and well-explained directory of open-source AI assets for developers — Claude Skills, MCP servers, Copilot agents, AI workflows and Cursor rules.",
  path: "/about",
  eyebrow: "who we are",
});

export default function AboutPage() {
  return (
    <PageShell
      label="About"
      command="~/about --whoami"
      title="About AI Assets Directory"
      lead="A curated, tested and well-explained directory of open-source AI assets for developers."
      prose
    >
      <h2>Why this exists</h2>
      <p>
        There are already crawlers that list tens of thousands of AI assets. The
        problem is not quantity, it is trust. When you find a Claude Skill or an
        MCP server, you want to know that it works, what it does, and how to
        install it without reading the whole repo.
      </p>
      <p>
        AI Assets Directory takes the opposite bet: fewer entries, each one
        checked and documented. Every asset here is open-source, has a permissive
        license, and comes with a clear explanation and copy-paste install
        instructions.
      </p>

      <h2>What we cover</h2>
      <ul>
        <li>
          <strong>Claude Skills</strong> — reusable capabilities for Claude.
        </li>
        <li>
          <strong>MCP Servers</strong> — Model Context Protocol integrations.
        </li>
        <li>
          <strong>Copilot Agents</strong> — custom agents and instructions.
        </li>
        <li>
          <strong>AI Workflows</strong> — end-to-end automations.
        </li>
        <li>
          <strong>Cursor Rules</strong> — editor rules and configs.
        </li>
      </ul>
      <p>
        We also publish <Link href="/learn">guides</Link> and a{" "}
        <Link href="/blog">blog</Link> to explain the ideas behind the tools.
      </p>

      <h2>How we choose what to list</h2>
      <p>
        We prioritise assets that are open-source, permissively licensed, and
        genuinely useful. We test what we can, credit the original authors, and
        link back to the source. Read the{" "}
        <Link href="/license-policy">license policy</Link> for the details, and
        the <Link href="/disclosure">disclosure</Link> for how we handle
        sponsorships.
      </p>

      <h2>Independent</h2>
      <p>
        AI Assets Directory is an independent project. It is not affiliated with,
        endorsed by, or sponsored by Anthropic, GitHub, OpenAI or any other
        vendor mentioned on the site. Product names and logos belong to their
        respective owners.
      </p>

      <h2>Get in touch</h2>
      <p>
        Want to suggest an asset, fix a listing, or talk sponsorship?{" "}
        <Link href="/submit">Submit an asset</Link>, visit{" "}
        <Link href="/contact">contact</Link>, or email{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
      </p>
    </PageShell>
  );
}
