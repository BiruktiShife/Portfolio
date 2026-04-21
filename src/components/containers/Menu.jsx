"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MobMenu } from "./MobMenu";
import { motion } from "framer-motion";
import { transition, variants } from "@/utils/framer_variants";
import ThemeToggle from "@/components/ThemeToggle";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed z-50 left-0 right-0 top-0 h-16 sm:h-20">
        <div className="absolute inset-0 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/75"></div>

        <nav className="relative container flex justify-between items-center h-full">
          <Link href="/" className="relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              className="flex items-center space-x-3"
            >
              <div className="block">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xl sm:text-2xl lg:text-3xl">
                  Biruktawit
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
                  Full Stack Developer
                </p>
              </div>
            </motion.div>
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {ROUTES.map((item, i) => (
              <motion.li
                key={item.id}
                initial="initial"
                animate="animate"
                variants={variants.moveDown}
                transition={{
                  ...transition.moveDown,
                  delay: 0.1 * i,
                }}
              >
                <Link
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 text-base lg:text-lg",
                    "hover:bg-violet-100 hover:text-violet-700 dark:hover:bg-violet-500/15 dark:hover:text-violet-200",
                    pathname === item.path
                      ? "text-violet-700 bg-violet-100 dark:text-violet-200 dark:bg-violet-500/15"
                      : "text-slate-700 dark:text-slate-300"
                  )}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-violet-200/70 to-fuchsia-200/70 dark:from-violet-500/20 dark:to-fuchsia-500/20 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial="initial"
            animate="animate"
            variants={variants.scale}
            transition={{ ...transition.scale, delay: 0.4 }}
            className="hidden md:flex items-center gap-3"
          >
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-base">
              Get In Touch
            </Button>
          </motion.div>

          <div className="md:hidden">
            <MobMenu pathname={pathname} />
          </div>
        </nav>
      </header>
    </>
  );
}
