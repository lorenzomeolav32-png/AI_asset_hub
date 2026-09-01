import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryHub } from "@/components/category-hub";
import { JsonLd } from "@/components/json-ld";
import { categoryBySlug } from "@/lib/data";
import { cardsBySegment } from "@/lib/content";
import { breadcrumbSchema, itemListSchema, pageMeta } from "@/lib/seo";

const SEGMENT = "cursor-rules";

export const metadata: Metadata = pageMeta({
  title: "Cursor Rules — curated & tested",
  description:
    "Opinionated .mdc rules that keep Cursor on-style for your stack. Hand-picked and open-source.",
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
