import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ArchiveSection({ date }: { date?: string[] }) {
  const dateStr = date ? date.join("/") : "All Time";

  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Archive: {dateStr}</CardTitle>
        </CardHeader>
        <CardContent>
          {date ? (
            <p className="text-muted-foreground">
              Filtering content for: <strong>{dateStr}</strong>.
            </p>
          ) : (
            <p className="text-muted-foreground">
              Showing all archived content.
            </p>
          )}
          <div className="space-y-4 mt-6">
            {[2024, 2023, 2022].map((year) => (
              <div key={year} className="border-l-2 border-primary/20 pl-4 py-2 hover:border-primary transition-colors cursor-pointer">
                <h3 className="text-lg font-bold">Project Archive {year}</h3>
                <p className="text-sm text-muted-foreground">
                  View all projects and blogs from the year {year}.
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
