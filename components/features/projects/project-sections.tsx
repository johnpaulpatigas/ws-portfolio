"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export function ProjectList() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Development", "Embedded Systems", "UI/UX"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="space-y-12">
      <section className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col project-card hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <CardHeader>
              <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center text-muted-foreground italic text-xs">
                [Project Image Placeholder]
              </div>
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
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-4">
                <Badge variant="outline">{project.status}</Badge>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button className="flex-1">
                <Link href={project.link}>View Details</Link>
              </Button>
              <Button size="icon" variant="secondary">
                <Link href={project.sourceCode} title="Source Code">
                  <HugeiconsIcon icon={GithubIcon} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}

export function ProjectHero() {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
      <p className="text-muted-foreground">
        A showcase of my work in tech and design.
      </p>
    </div>
  );
}
