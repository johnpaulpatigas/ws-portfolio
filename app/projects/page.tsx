import { ProjectHero, ProjectList } from "@/components/features/projects/project-sections";

export default function Projects() {
  return (
    <div className="space-y-12 py-8">
      <ProjectHero />
      <ProjectList />
    </div>
  );
}
