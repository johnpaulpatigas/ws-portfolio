import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col project-card hover:shadow-lg hover:scale-105 transition-all"
        >
          <CardHeader>
            <div className="w-full h-40 bg-muted rounded-lg mb-4" />
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>
              <ul className="list-disc pl-4 text-left">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <Badge className="mt-4">{project.status}</Badge>
          </CardContent>
          <CardFooter className="gap-2">
            <Button asChild>
              <Link href={project.link}>View Project</Link>
            </Button>
            <Button asChild size="default" variant="secondary">
              <Link
                href={project.sourceCode}
                className="inline-flex items-center gap-2"
              >
                <HugeiconsIcon icon={GithubIcon} />
                Source
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
