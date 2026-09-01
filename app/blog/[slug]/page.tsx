import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getBlog } from "@/lib/content";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getBlog(slug);
  if (!doc) return {};
  return pageMeta({
    title: doc.title,
    description: doc.summary,
    path: doc.url,
    ogType: "article",
    eyebrow: "blog",
    publishedTime: doc.date,
    modifiedTime: doc.updated ?? doc.date,
  });
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getBlog(slug);
  if (!doc) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(doc, doc.url),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: doc.title },
          ]),
        ]}
      />
      <ArticleLayout
        breadcrumb={[
          { label: "~", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: doc.title },
        ]}
        title={doc.title}
        summary={doc.summary}
        date={doc.date}
        updated={doc.updated}
        author={doc.author}
        readingTime={doc.metadata.readingTime}
        toc={doc.toc}
        body={doc.body}
        tags={doc.tags}
      />
    </>
  );
}
