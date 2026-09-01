import type { MetadataRoute } from "next";
import { allAssets, learnDocs, blogPosts } from "@/lib/content";
import { categories } from "@/lib/data";
import { abs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: abs("/browse"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: abs("/learn"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/submit"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/advertise"), lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: abs("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: abs("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: abs("/cookies"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: abs("/disclosure"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: abs("/license-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: abs(c.href),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const assetRoutes: MetadataRoute.Sitemap = allAssets.map((a) => ({
    url: abs(a.url),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const learnRoutes: MetadataRoute.Sitemap = learnDocs.map((d) => ({
    url: abs(d.url),
    lastModified: new Date(d.updated ?? d.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((d) => ({
    url: abs(d.url),
    lastModified: new Date(d.updated ?? d.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...assetRoutes,
    ...learnRoutes,
    ...blogRoutes,
  ];
}
