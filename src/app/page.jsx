import { Button } from "@/components/ui/button";
import { SOCIAL_ICONS } from "@/utils/data";
import {
  ArrowRightIcon,
  SparklesIcon,
  BriefcaseBusinessIcon,
  Layers3Icon,
  TrophyIcon,
  ShieldCheckIcon,
  Clock3Icon,
} from "lucide-react";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import Link from "next/link";
import Image from "next/image";

const STATS = [
  { number: "50+", label: "Projects Delivered", icon: BriefcaseBusinessIcon },
  { number: "3+", label: "Years Experience", icon: TrophyIcon },
  { number: "100%", label: "Client Satisfaction", icon: ShieldCheckIcon },
  { number: "24/7", label: "Reliable Support", icon: Clock3Icon },
];

const FOCUS = [
  {
    title: "Modern UI/UX",
    description:
      "Interfaces that feel premium, clear, and easy to use across devices.",
    icon: SparklesIcon,
  },
  {
    title: "Scalable Frontend",
    description:
      "Fast, maintainable applications built with React and Next.js best practices.",
    icon: Layers3Icon,
  },
  {
    title: "Business Results",
    description:
      "Design and development decisions guided by conversion and user trust.",
    icon: BriefcaseBusinessIcon,
  },
];

export default function page() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-12 left-0 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <section className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveUp}
              transition={transition.moveUp}
              className="space-y-8"
            >
              <MotionDiv
                variants={variants.moveUp}
                transition={{ ...transition.moveUp, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-300/60 bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-300/40 dark:bg-violet-500/15 dark:text-violet-100"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for new projects
              </MotionDiv>

              <MotionDiv
                variants={variants.moveUp}
                transition={{ ...transition.moveUp, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="font-display leading-tight text-slate-900 dark:text-white">
                  Biruktawit Shiferaw
                </h1>
                <h2 className="text-2xl font-semibold md:text-4xl">
                  Full Stack Developer &{" "}
                  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                    Product Designer
                  </span>
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  I build professional digital products that are fast,
                  accessible, and thoughtfully designed to solve real business
                  problems.
                </p>
              </MotionDiv>

              <MotionDiv
                variants={variants.moveUp}
                transition={{ ...transition.moveUp, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-900/40"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MotionDiv>

              <MotionDiv
                variants={variants.moveUp}
                transition={{ ...transition.moveUp, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm font-medium text-slate-500 dark:text-slate-500">
                  Connect:
                </span>
                <div className="flex flex-wrap gap-3">
                  {SOCIAL_ICONS?.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:bg-slate-900"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={22}
                        height={22}
                        className="opacity-90"
                      />
                    </a>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>

            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveUp}
              transition={{ ...transition.moveUp, delay: 0.25 }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-400/30 to-cyan-400/30 blur-xl" />
              <div className="relative rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900/80">
                <MotionImage
                  src="/profil.png"
                  alt="Biruktawit Shiferaw"
                  width={500}
                  height={500}
                  className="w-full rounded-3xl object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                />
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Building modern, scalable web experiences.
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    React, Next.js, Node.js, and user-focused UI/UX.
                  </p>
                </div>
                <div className="absolute -top-5 -left-6 rounded-xl border border-violet-300/40 bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-100 backdrop-blur">
                  UI/UX
                </div>
                <div className="absolute -bottom-5 -right-6 rounded-xl border border-cyan-300/40 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
                  Full Stack
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            className="grid gap-5 md:grid-cols-3"
          >
            {FOCUS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <MotionDiv
                  key={item.title}
                  variants={variants.scale}
                  transition={{ ...transition.scale, delay: idx * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <MotionDiv
                  key={stat.label}
                  variants={variants.scale}
                  transition={{ ...transition.scale, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-lg transition hover:-translate-y-1 hover:border-violet-400/50 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.number}
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </p>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
