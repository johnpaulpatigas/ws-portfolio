import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatIDoSection() {
  return (
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
  );
}
