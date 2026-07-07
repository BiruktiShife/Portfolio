import { GitCommitHorizontal } from "lucide-react";

const commits = [
  {
    hash: "f81c9e2",
    date: "2026",
    title: "TalentBridge — Internship Management Platform",
    message:
      "feat: launch centralized platform for internship posting, progress tracking, and evaluation",
    tags: ["Next.js", "TypeScript", "ShadCN", "PostgreSQL"],
  },
  {
    hash: "b3a04d7",
    date: "2025",
    title: "Virtual Internship Platform — Ethiotelecom",
    message:
      "feat: build virtual internship platform used to onboard and evaluate interns remotely",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    hash: "9e2f61a",
    date: "2024",
    title: "Full-Stack Web Development",
    message:
      "learn: complete core coursework in ReactJS, Next.js, Node.js, Nest.js, and MongoDB",
    tags: ["React", "Nest.js", "MongoDB"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-surface/40 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl">
          <p className="font-mono text-sm text-accent">02 · log</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            git log --oneline
          </h2>
          <p className="mt-4 text-muted-foreground">
            A short history of what I&apos;ve shipped and learned so far.
          </p>
        </div>

        <div className="mt-14 max-w-2xl">
          {commits.map((commit) => (
            <div key={commit.hash} className="commit-line relative pb-10 pl-9 last:pb-0">
              <span className="absolute left-0 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-background">
                <GitCommitHorizontal className="sr-only" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                <span className="text-accent">{commit.hash}</span>
                <span>{commit.date}</span>
              </div>

              <h3 className="mt-2 font-display text-xl font-medium text-foreground">
                {commit.title}
              </h3>
              <p className="mt-1.5 font-mono text-sm leading-relaxed text-muted-foreground">
                {commit.message}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {commit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
