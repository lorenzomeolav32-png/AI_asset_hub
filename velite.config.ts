import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";

const segmentByType: Record<string, string> = {
  "claude-skill": "claude-skills",
  "mcp-server": "mcp-servers",
  copilot: "copilot-agents",
  "ai-workflow": "ai-workflows",
  "cursor-rule": "cursor-rules",
};

const assets = defineCollection({
  name: "Asset",
  pattern: "assets/**/*.md",
  schema: s
    .object({
      slug: s.string(),
      type: s.enum([
        "claude-skill",
        "mcp-server",
        "copilot",
        "ai-workflow",
        "cursor-rule",
      ]),
      title: s.string(),
      fileName: s.string(),
      summary: s.string(),
      tags: s.array(s.string()).default([]),
      tools: s.array(s.string()).default([]),
      license: s.string(),
      author: s.string(),
      source: s.string().optional(),
      stars: s.number().optional(),
      verified: s.boolean().default(false),
      video: s.string().optional(),
      install: s.string().optional(),
      installLang: s.string().default("bash"),
      testimonials: s
        .array(
          s.object({
            author: s.string(),
            role: s.string().optional(),
            quote: s.string(),
          }),
        )
        .default([]),
      body: s.markdown(),
    })
    .transform((data) => ({
      ...data,
      segment: segmentByType[data.type],
      url: `/${segmentByType[data.type]}/${data.slug}`,
    })),
});

const learn = defineCollection({
  name: "LearnDoc",
  pattern: "learn/**/*.md",
  schema: s
    .object({
      slug: s.string(),
      title: s.string(),
      summary: s.string(),
      kind: s.enum(["tutorial", "explainer", "comparison"]).default("explainer"),
      tags: s.array(s.string()).default([]),
      date: s.isodate(),
      updated: s.isodate().optional(),
      author: s.string().default("AI Assets Directory"),
      metadata: s.metadata(),
      toc: s.toc(),
      body: s.markdown(),
    })
    .transform((data) => ({ ...data, url: `/learn/${data.slug}` })),
});

const blog = defineCollection({
  name: "BlogPost",
  pattern: "blog/**/*.md",
  schema: s
    .object({
      slug: s.string(),
      title: s.string(),
      summary: s.string(),
      tags: s.array(s.string()).default([]),
      date: s.isodate(),
      updated: s.isodate().optional(),
      author: s.string().default("AI Assets Directory"),
      metadata: s.metadata(),
      toc: s.toc(),
      body: s.markdown(),
    })
    .transform((data) => ({ ...data, url: `/blog/${data.slug}` })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { assets, learn, blog },
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
