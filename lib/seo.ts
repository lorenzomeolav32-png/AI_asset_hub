import type { Metadata } from "next";
import type { Asset, LearnDoc, BlogPost } from "@/lib/content";
import { SITE_NAME, SITE_URL, SITE_TAGLINE, abs } from "@/lib/site";

// ── OG image ────────────────────────────────────────────────────────────────
export function ogImagePath(opts: {
  title: string;
  eyebrow?: string;
  type?: string;
}): string {
  const p = new URLSearchParams({ title: opts.title });
  if (opts.eyebrow) p.set("eyebrow", opts.eyebrow);
  if (opts.type) p.set("type", opts.type);
  return `/og?${p.toString()}`;
}

// ── Per-page metadata (canonical + OpenGraph + Twitter) ──────────────────────
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  eyebrow?: string;
  ogTitle?: string;
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const img = ogImagePath({ title: opts.ogTitle ?? opts.title, eyebrow: opts.eyebrow });
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.ogType ?? "website",
      url: opts.path,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      images: [{ url: img, width: 1200, height: 630, alt: opts.title }],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [img],
    },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────────────────────
type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    logo: abs(ogImagePath({ title: SITE_NAME, eyebrow: "verified AI assets" })),
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/browse?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: abs(it.path) } : {}),
    })),
  };
}

export function itemListSchema(urls: string[], name?: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    numberOfItems: urls.length,
    itemListElement: urls.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(u),
    })),
  };
}

export function softwareAppSchema(asset: Asset): Json {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: asset.title,
    description: asset.summary,
    url: abs(asset.url),
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
    author: { "@type": "Person", name: asset.author },
    keywords: asset.tags.join(", "),
    ...(asset.source ? { downloadUrl: asset.source, codeRepository: asset.source } : {}),
    license: asset.license,
  };
}

export function howToSchema(asset: Asset): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Install ${asset.title}`,
    description: `How to install ${asset.title}.`,
    step: [
      {
        "@type": "HowToStep",
        name: "Install",
        text: asset.install ?? "",
      },
    ],
  };
}

export function articleSchema(doc: LearnDoc | BlogPost, path: string): Json {
  const isLearn = "kind" in doc;
  return {
    "@context": "https://schema.org",
    "@type": isLearn ? "TechArticle" : "Article",
    headline: doc.title,
    description: doc.summary,
    url: abs(path),
    mainEntityOfPage: abs(path),
    datePublished: doc.date,
    dateModified: doc.updated ?? doc.date,
    author: { "@type": "Person", name: doc.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(doc.tags.length ? { keywords: doc.tags.join(", ") } : {}),
  };
}
