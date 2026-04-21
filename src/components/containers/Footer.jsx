"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Footer component that displays the website's logo, slogan, and copyright information.
 * Renders only on pages other than the home page.
 *
 * @return {JSX.Element|null} The rendered Footer component or null if on the home page.
 */
export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return pathname !== "/" ? (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 py-5 justify-between container">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        <h3 className="sm:text-2xl text-xl text-slate-800 dark:text-slate-200">
          Discover a <span className="text-violet-300">gateway</span> to
          unparalleled <br />{" "}
          <span className="text-violet-300">design</span> creativity.
        </h3>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 text-center py-8 text-slate-500 dark:text-slate-400">
        <p>Copyright © {year} - All Right Reserved</p>
      </div>
    </footer>
  ) : null;
}
