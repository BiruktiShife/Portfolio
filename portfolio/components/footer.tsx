export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Biruktawit Shiferaw. Built with Next.js & shadcn/ui.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Designed &amp; developed in Addis Ababa
        </p>
      </div>
    </footer>
  );
}
