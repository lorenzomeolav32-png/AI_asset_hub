import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { JsonLd } from "@/components/json-ld";
import { getLearn, learnDocs } from "@/lib/content";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return learnDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLearn(slug);
  if (!doc) return {};
  return pageMeta({
    title: doc.title,
    description: doc.summary,
    path: doc.url,
    ogType: "article",
    eyebrow: doc.kind,
    publishedTime: doc.date,
    modifiedTime: doc.updated ?? doc.date,
  });
}

export default async function LearnArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getLearn(slug);
  if (!doc) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema(doc, doc.url),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Learn", path: "/learn" },
            { name: doc.title },
          ]),
        ]}
      />
      <ArticleLayout
        breadcrumb={[
          { label: "~", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: doc.title },
        ]}
        kind={doc.kind}
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
