import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Biruktawit Shiferaw - Full Stack Developer",
  description:
    "Professional Portfolio - Creating Beautiful Digital Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable}`} suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background text-foreground", inter.className)}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var n=t||(d?'dark':'light');document.documentElement.classList.toggle('dark',n==='dark');}catch(e){}})();`}
        </Script>
        <div className="relative">
          <div className="fixed inset-0 -z-10">
            <div className="absolute -top-10 left-1/4 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-500/20"></div>
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20"></div>
          </div>

          <Menu />
          <main className="relative">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
