import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
              className="flex flex-col project-card hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <ul className="list-disc pl-4 text-left space-y-1 mt-2">
                    {project.description.slice(0, 2).map((item, index) => (
                      <li key={index} className="line-clamp-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                {/* Space for consistency with ProjectList if needed */}
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1" size="sm">
                  <Link href={project.link}>View Details</Link>
                </Button>
                <Button size="icon" variant="secondary">
                  <Link
                    href={project.sourceCode}
                    target="_blank"
                    title="Source Code"
                  >
                    <HugeiconsIcon icon={GithubIcon} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Button className="mt-8" variant="outline">
        <Link href="/projects">View All Projects</Link>
      </Button>
    </div>
  );
}
