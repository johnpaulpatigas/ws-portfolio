import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
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
  );
}
