import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="space-y-16 py-8">
      <section className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have a project in mind or just want to say hi? Send me a message!
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-37.5"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Connect with Me</h2>
          <p className="text-muted-foreground">
            Or reach out through these platforms.
          </p>
        </div>
        <div className="flex justify-center gap-8">
          <a
            href="#"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            Twitter/X
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
