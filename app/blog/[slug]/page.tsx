import { BlogSection } from "@/components/features/blog/blog-section";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="py-8">
      <BlogSection slug={slug} />
    </div>
  );
}
