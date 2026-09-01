import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "License Policy",
  description:
    "AI Assets Directory only lists open-source assets under permissive licenses, always credits the author, and removes anything on a valid owner request.",
  path: "/license-policy",
  eyebrow: "licensing & attribution",
});

export default function LicensePolicyPage() {
  return (
    <PageShell
      label="License policy"
      command="~/legal/license-policy"
      title="License Policy"
      lead="We only list permissively licensed open-source assets, we credit their authors, and we remove anything on a valid request."
      updated={LEGAL_LAST_UPDATED}
      prose
    >
      <h2>What we list</h2>
      <p>
        Every asset in the directory is open-source with a public repository and
        a permissive license. We do not host or redistribute the code itself — we
        describe each asset and link back to its original source.
      </p>

      <h2>Accepted licenses</h2>
      <ul>
        <li>MIT</li>
        <li>Apache-2.0</li>
        <li>BSD (2- and 3-Clause)</li>
        <li>CC0 / public domain</li>
        <li>CC-BY (with attribution)</li>
      </ul>
      <p>
        We generally avoid assets under copyleft or non-commercial licenses for
        listing, and we do not list assets with no license (which are, by
        default, all-rights-reserved).
      </p>

      <h2>Attribution</h2>
      <p>
        Each listing credits the original author and links to the source
        repository and its license. The asset stays under its own license — we do
        not relicense anything. If you reuse an asset, follow the terms in its
        repository, not this directory.
      </p>

      <h2>Our own content</h2>
      <p>
        The write-ups, guides and design of this site are our own work. Please do
        not republish them wholesale without permission; short quotes with a link
        back are welcome.
      </p>

      <h2>Removal &amp; corrections</h2>
      <p>
        If you are the owner or maintainer of a listed asset and want it removed,
        corrected, or attributed differently, email{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> with a link to the
        asset. We honour valid requests promptly. The same address handles
        copyright or trademark concerns; include the material in question and
        your relationship to it.
      </p>

      <h2>Trademarks</h2>
      <p>
        Product names, logos and trademarks (such as Claude, GitHub Copilot and
        others) belong to their respective owners and are used for identification
        only. See our <Link href="/disclosure">disclosure</Link> for our
        independence statement.
      </p>
    </PageShell>
  );
}
