import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryHub } from "@/components/category-hub";
import { JsonLd } from "@/components/json-ld";
import { categoryBySlug } from "@/lib/data";
import { cardsBySegment } from "@/lib/content";
import { breadcrumbSchema, itemListSchema, pageMeta } from "@/lib/seo";

const SEGMENT = "ai-workflows";

export const metadata: Metadata = pageMeta({
  title: "AI Workflows — curated & tested",
  description:
    "Importable n8n and Make automations wired to LLMs. Hand-picked, open-source, ready to run.",
  path: `/${SEGMENT}`,
  eyebrow: "curated & tested",
});

export default function Page() {
  const category = categoryBySlug(SEGMENT);
  if (!category) notFound();
  const items = cardsBySegment(SEGMENT);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: category.name, path: `/${SEGMENT}` },
          ]),
          itemListSchema(
            items.map((i) => i.url),
            category.name,
          ),
        ]}
      />
      <CategoryHub category={category} />
    </>
  );
}
