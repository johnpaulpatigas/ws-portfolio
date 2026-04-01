import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CategorySection({ slug }: { slug: string[] }) {
  const currentCategory = slug[slug.length - 1];
  const breadcrumb = slug.join(" / ");

  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Categories: {breadcrumb}
          </p>
          <CardTitle className="capitalize">
            Category: {currentCategory.replace(/-/g, " ")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Showing items for the category: <strong>{currentCategory}</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-muted/50 border-none">
                <CardHeader>
                  <CardTitle className="text-lg">Project {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A sample project for the {currentCategory} category.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
