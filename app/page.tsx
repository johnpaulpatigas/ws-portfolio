import { FeaturedProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center flex-grow text-center p-4 justify-center">
      <h1 className="text-5xl font-bold">John Paul Patigas</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Early-career IT professional with hands-on experience in web
        development and embedded systems.
      </p>
      <p className="mt-4 max-w-xl text-center">
        Seeking development or instructional roles focused on building and
        explaining real-world systems.
      </p>
      <FeaturedProjects />
    </div>
  );
}