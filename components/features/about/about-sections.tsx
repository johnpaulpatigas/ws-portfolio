import { experiences, skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutHero() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Passionate about building efficient systems and sharing knowledge.
      </p>
    </section>
  );
}

export function ProfessionalProfile() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Professional Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">
            Early-career IT professional with hands-on experience in web
            development and embedded systems, and a strong foundation in
            programming fundamentals. Seeking development or instructional
            roles focused on building and explaining real-world systems.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export function TechnicalSkills() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
      <div className="space-y-8 mt-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-primary-foreground pb-8 last:pb-0"
          >
            <div className="absolute -left-2.25 top-1.5 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />
            <h3 className="text-lg font-bold">{exp.title}</h3>
            <p className="text-sm font-medium text-primary mb-2">
              {exp.company} | {exp.date}
            </p>
            <ul className="mt-2 list-disc pl-4 text-left text-muted-foreground space-y-1">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutDetails() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Design Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              I believe in &quot;Function first, aesthetics always.&quot; Every
              component should serve a clear purpose while contributing to a
              cohesive visual experience.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Personal Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Outside of coding, I enjoy exploring new hardware, reading about
              educational technology, and mentoring aspiring developers.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
