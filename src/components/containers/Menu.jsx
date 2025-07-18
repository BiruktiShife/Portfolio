"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { MobMenu } from "./MobMenu";
import { motion } from "framer-motion";
import { transition, variants } from "@/utils/framer_variants";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed z-50 left-0 right-0 top-0 h-16 sm:h-20">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-soft"></div>

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
                <h4 className="font-bold text-neutral-800 text-xl sm:text-2xl lg:text-3xl">
                  Biruktawit
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 hidden sm:block">
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
                    "hover:bg-violet-50 hover:text-violet-700",
                    pathname === item.path
                      ? "text-violet-700 bg-violet-50"
                      : "text-neutral-600 hover:text-violet-700"
                  )}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg -z-10"
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
            className="hidden md:block"
          >
            <Button className="btn-primary text-base">Get In Touch</Button>
          </motion.div>

          <div className="md:hidden">
            <MobMenu pathname={pathname} />
          </div>
        </nav>
      </header>
    </>
  );
}
