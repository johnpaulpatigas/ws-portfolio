import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BlogSection({ slug }: { slug: string }) {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="capitalize">
            Blog Post: {slug.replace(/-/g, " ")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a dynamic blog post for the slug: <strong>{slug}</strong>.
          </p>
          <div className="mt-4 prose dark:prose-invert max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
