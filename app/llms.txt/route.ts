import { allAssets, learnDocs, blogPosts } from "@/lib/content";
import { categories } from "@/lib/data";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, abs } from "@/lib/site";

export const dynamic = "force-static";

// Machine-readable index for LLMs / generative engines (llmstxt.org).
export function GET() {
  const line = (title: string, url: string, note?: string) =>
    `- [${title}](${url})${note ? `: ${note}` : ""}`;

  const sections = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_TAGLINE}`,
    "",
    "## Categories",
    ...categories.map((c) => line(c.name, abs(c.href), c.blurb)),
    "",
    "## Assets",
    ...allAssets.map((a) => line(a.title, abs(a.url), a.summary)),
    "",
    "## Learn",
    ...learnDocs.map((d) => line(d.title, abs(d.url), d.summary)),
    "",
    "## Blog",
    ...blogPosts.map((d) => line(d.title, abs(d.url), d.summary)),
    "",
    "## Meta",
    line("Browse all assets", abs("/browse")),
    line("Sitemap", `${SITE_URL}/sitemap.xml`),
    line("RSS", `${SITE_URL}/rss.xml`),
    "",
  ];

  return new Response(sections.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
