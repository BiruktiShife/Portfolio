"use client";

import * as React from "react";
import Image from "next/image";
import { Github, Linkedin, ArrowUpRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ROLES = [
  "Full Stack Developer",
  "Product-Minded Engineer",
  "React & Next.js Builder",
];

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32"
    >
      <div className="container grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-accent">$ whoami</p>
          <h1 className="mt-2 text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Biruktawit
            <br />
            Shiferaw
          </h1>

          <div className="mt-5 h-8 font-mono text-lg text-muted-foreground sm:text-xl">
            {typed}
            <span className="caret h-5" />
          </div>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build fast, accessible web products end to end — from Figma file
            to production database. Recently shipped TalentBridge, an internship
            management platform, and I&apos;m looking for a team to grow with as
            a full-time developer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">
                View projects <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://drive.google.com/file/d/1iRfhSWd1r9ZmyGlsl2jSWcKez_cUBeno/view?usp=sharing"
                download
              >
                Download resume <FileDown className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/biruktawit-shiferaw/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/BiruktiShife"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-moss/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/profile.jpg"
                alt="Portrait of Biruktawit Shiferaw"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-xs text-muted-foreground">
              <span>profile.jpg</span>
              <span className="text-moss">● online</span>
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden rotate-[-6deg] sm:block">
            <Badge variant="accent" className="shadow-lg">
              React
            </Badge>
          </div>
          <div className="absolute -right-4 top-1/2 hidden rotate-[4deg] sm:block">
            <Badge variant="moss" className="shadow-lg">
              Next.js
            </Badge>
          </div>
          <div className="absolute -left-4 bottom-8 hidden rotate-[3deg] sm:block">
            <Badge className="shadow-lg">Node.js</Badge>
          </div>
        </div>
      </div>

      <div className="container mt-24">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {[
            { value: "20+", label: "projects delivered" },
            { value: "3+", label: "years building" },
            { value: "100%", label: "client satisfaction" },
            { value: "24/7", label: "reliable support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-background px-6 py-6 text-center sm:text-left"
            >
              <dt className="font-display text-3xl font-medium text-foreground">
                {stat.value}
              </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
