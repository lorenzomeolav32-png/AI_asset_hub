import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Disclosure",
  description:
    "How AI Assets Directory handles sponsorships, affiliate links and editorial independence. Paid placements are always labelled and never buy rankings.",
  path: "/disclosure",
  eyebrow: "how we stay honest",
});

export default function DisclosurePage() {
  return (
    <PageShell
      label="Disclosure"
      command="~/legal/disclosure"
      title="Disclosure"
      lead="How we handle money, sponsorships and editorial independence."
      updated={LEGAL_LAST_UPDATED}
      prose
    >
      <h2>Editorial independence</h2>
      <p>
        What gets listed in the directory, and how it is described, is our
        editorial decision. Nobody can pay to be added to the main directory, to
        rank higher in it, or to receive a &ldquo;verified&rdquo; mark. Those
        signals are earned, not bought.
      </p>

      <h2>Sponsored placements</h2>
      <p>
        We keep the lights on partly through sponsorships. When a placement is
        paid — a directory slot, a newsletter mention, or a featured write-up —
        it is clearly labelled <strong>Sponsored</strong>. If you cannot see that
        label, it is not paid.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Some outbound links may be affiliate links, meaning we could earn a small
        commission if you sign up or buy — at no extra cost to you. This never
        changes our opinion of a tool or its place in the directory. Where a link
        is affiliate or sponsored, it carries the appropriate{" "}
        <code>rel</code> attribute.
      </p>

      <h2>No vendor affiliation</h2>
      <p>
        AI Assets Directory is independent. It is not affiliated with, endorsed
        by, or sponsored by Anthropic, GitHub, OpenAI or any other vendor whose
        products are mentioned. All trademarks belong to their respective owners.
      </p>

      <h2>Accuracy &amp; no warranty</h2>
      <p>
        We test what we can and try to keep listings accurate, but assets are
        maintained by third parties and can change or break. We provide the
        directory &ldquo;as is&rdquo;, without warranties, and are not liable for
        what a listed asset does. Always review an asset&rsquo;s code and license
        before using it. Licensing terms are covered in our{" "}
        <Link href="/license-policy">license policy</Link>.
      </p>

      <p>
        Questions about any of this? Email{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
      </p>
    </PageShell>
  );
}
