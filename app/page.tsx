import { FeaturedProjects } from "@/components/featured-projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hey, I&apos;m <span className="text-primary">John Paul</span>
        </h1>
        <p className="max-w-2xl text-xl text-muted-foreground">
          Early-career IT professional with hands-on experience in web
          development and embedded systems. I build functional and visually
          captivating web and mobile applications.
        </p>
        <div className="flex gap-4">
          <Button size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            What I Do
          </h2>
          <p className="text-muted-foreground">
            Specializing in full-stack development and hardware integration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Creating responsive and performant web applications using modern
                frameworks like Next.js and React.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Embedded Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Integrating hardware and software with ESP32, Arduino, and RFID
                technology for IoT solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technical Instruction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Explaining complex systems and mentoring students in programming
                and technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects Section */}
      <div className="text-center">
        <FeaturedProjects />
      </div>
    </div>
  );
}
