import { CategorySection } from "@/components/features/category/category-section";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div className="py-8">
      <CategorySection slug={slug} />
    </div>
  );
}
