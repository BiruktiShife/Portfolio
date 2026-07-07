import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Palette } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Nest.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-sm text-accent">01 · about</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Fresh eyes, production-ready code.
            </h2>
            <p className="mt-6 max-w-md text-balance leading-relaxed text-muted-foreground">
              I&apos;m a full-stack developer who recently shipped{" "}
              <span className="text-foreground">TalentBridge</span>, a
              centralized internship-management platform, and built a
              virtual internship platform during my time at Ethiotelecom.
              I care about clean architecture as much as clean UI — a
              product should feel effortless to use and be genuinely
              maintainable underneath.
            </p>
            <p className="mt-4 max-w-md text-balance leading-relaxed text-muted-foreground">
              I&apos;m graduating into the field now and looking for a team
              where I can keep learning fast while contributing from day one.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.title} className="noise-card">
                <CardContent className="p-6">
                  <group.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-medium">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="noise-card sm:col-span-2">
              <CardContent className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-lg font-medium">What I build</h3>
                  <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    UI/UX design, responsive frontends, and scalable backend
                    APIs — end-to-end product delivery, not just one layer.
                  </p>
                </div>
                <div className="flex gap-2 font-mono text-xs text-muted-foreground">
                  <span className="rounded-md border border-border px-2 py-1">design</span>
                  <span className="rounded-md border border-border px-2 py-1">build</span>
                  <span className="rounded-md border border-border px-2 py-1">ship</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
