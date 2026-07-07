import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featured = {
  title: "TalentBridge",
  tagline: "Internship management & career development platform",
  description:
    "A centralized platform that streamlines internship management, progress tracking, supervision, and evaluation for students, advisors, and companies in one place.",
  image: "/projects/dashboard TB.PNG",
  tech: ["Next.js", "TypeScript", "ShadCN", "PostgreSQL"],
  features: [
    "Role-based access",
    "Internship posting & applications",
    "Progress tracking & weekly reports",
    "Integrated messaging",
    "Advisor assignment & supervision",
    "Evaluation, reports & analytics",
  ],
  code: "https://github.com/abate-Agegnehu/talent_bridge",
  live: "",
};

const others = [
  {
    title: "Job Board Platform",
    tagline: "Company hiring & job listing platform",
    image: "/projects/jobs in company.png",
    tech: ["Next.js", "TypeScript"],
    note: "A comprehensive finance management platform with real-time analytics and budget tracking.A web-based job board system that allows companies to post job listings and job seekers to browse, search, and apply for jobs.",
  },
  {
    title: "Local Language Translator",
    tagline: "Translation tool for local languages",
    image: "/projects/language.png",
    tech: ["React", "Node.js"],
    note: "An intelligent translation platform supporting Ethiopian local languages with AI integration.",
  },
  {
    title: "Tatari Hub",
    tagline: "A platform that connect clients with service providers",
    image: "/projects/tatari.png",
    tech: ["Next.js", "NestJS"],
    note: "Ethiopian skills marketplace connecting clients with service providers.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl">
          <p className="font-mono text-sm text-accent">03 · projects</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end products — from schema design to the last pixel.
          </p>
        </div>

        <Card className="mt-14 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative flex aspect-[16/10] items-center bg-[#0b0f1a] p-4 md:aspect-auto md:h-full md:min-h-[420px]">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-white/10 shadow-lg">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <CardContent className="flex flex-col justify-center p-8 md:p-10">
              <Badge variant="accent" className="w-fit">
                featured
              </Badge>
              <h3 className="mt-4 font-display text-2xl font-medium sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {featured.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
                {featured.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="outline">
                  <a href={featured.code} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> View code
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-medium">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.tagline}
                </p>
                <p className="mt-3 flex-1 font-mono text-xs text-muted-foreground/70">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  // {project.note}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-accent"
                >
                  ask me about this <ArrowUpRight className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
