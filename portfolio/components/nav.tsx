"use client";

import * as React from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "log" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-mono text-sm font-medium">
            BS
          </span>
          <span className="hidden sm:inline text-foreground/90">Biruktawit Shiferaw</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              ./{link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-accent"
              >
                ./{link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-4 py-3 text-center font-medium text-accent-foreground"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
