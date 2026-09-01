import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMeta } from "@/lib/seo";
import { SITE_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description:
    "AI Assets Directory uses only essential and functional storage — no advertising or cross-site tracking cookies. Here is exactly what we store and why.",
  path: "/cookies",
  eyebrow: "cookies & storage",
});

export default function CookiesPage() {
  return (
    <PageShell
      label="Cookies"
      command="~/legal/cookies"
      title="Cookie Policy"
      lead="We use only essential and functional storage. No advertising or cross-site tracking cookies."
      updated={LEGAL_LAST_UPDATED}
      prose
    >
      <p>
        This page explains the cookies and browser storage this website uses.
        Cookies are small files a site can store in your browser; some sites also
        use <em>local storage</em>, which keeps small values on your device
        without ever sending them to the server.
      </p>

      <h2>The short version</h2>
      <p>
        We do <strong>not</strong> use advertising cookies, and we do{" "}
        <strong>not</strong> use cross-site or third-party tracking. There are no
        marketing pixels on this site. Because we set no non-essential cookies,
        there is nothing to opt in or out of today.
      </p>

      <h2>What we actually store</h2>
      <ul>
        <li>
          <strong>Theme preference (functional).</strong> When you switch between
          dark and light mode, we remember your choice in your browser&rsquo;s
          local storage so the site looks right on your next visit. It stays on
          your device.
        </li>
        <li>
          <strong>Cookie-notice dismissal (functional).</strong> When you dismiss
          the cookie notice, we store a small flag in local storage so we do not
          show it again. It stays on your device.
        </li>
        <li>
          <strong>Essential hosting.</strong> Our host (Vercel) may set minimal,
          strictly necessary cookies for security and to serve the site
          correctly. These are not used to track you across sites.
        </li>
      </ul>

      <h2>What we do not use</h2>
      <ul>
        <li>Advertising or retargeting cookies.</li>
        <li>Cross-site or social-media tracking pixels.</li>
        <li>Analytics that profiles individual visitors.</li>
      </ul>

      <h2>If this changes</h2>
      <p>
        If we later add analytics or advertising, we will update this page first
        and, where the law requires it, ask for your consent before any
        non-essential cookies are set.
      </p>

      <h2>Managing storage yourself</h2>
      <p>
        You can clear or block cookies and local storage at any time from your
        browser settings. Clearing them simply resets your theme choice and the
        cookie notice. It will not break the site.
      </p>

      <p>
        See also our <Link href="/privacy">Privacy Policy</Link>. Questions?
        Email <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
      </p>
    </PageShell>
  );
}
