import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col project-card hover:shadow-lg hover:scale-105 transition-all"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-disc pl-4 text-left">
                    {project.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Button className="mt-8">
        <Link href="/projects">View All Projects</Link>
      </Button>
    </div>
  );
}
