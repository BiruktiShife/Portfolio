import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";

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
    <html lang="en" className={`${playfair.variable}`}>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30",
          inter.className
        )}
      >
        <div className="relative">
          {/* Background decoration */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
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
