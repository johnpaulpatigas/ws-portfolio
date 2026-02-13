import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, skills } from "@/lib/data";

export default function About() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Early-career IT professional with hands-on experience in web
            development and embedded systems, and a strong foundation in
            programming fundamentals. Seeking development or instructional roles
            focused on building and explaining real-world systems.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary-foreground pb-8 last:pb-0"
              >
                <div className="absolute -left-2.5 top-1.5 -translate-y-1/2 w-4 h-4 bg-primary rounded-full" />
                <h3 className="text-lg font-bold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} | {exp.date}
                </p>
                <ul className="mt-2 list-disc pl-4 text-left">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
