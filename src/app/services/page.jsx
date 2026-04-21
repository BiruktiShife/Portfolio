import { MotionDiv } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framer_variants";
import { SERVICES } from "@/utils/data";
import { CheckIcon, PaletteIcon, CodeIcon, ServerIcon } from "lucide-react";

const serviceTheme = {
  1: {
    iconBg: "from-violet-500 to-purple-500",
    chip: "bg-violet-100 text-violet-700 border border-violet-200 dark:bg-violet-500/20 dark:text-violet-200 dark:border-violet-400/30",
    bar: "from-violet-500 to-purple-500",
    button:
      "from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600",
    border: "group-hover:border-violet-400/60",
    title: "group-hover:text-violet-700 dark:group-hover:text-violet-200",
    tags: ["Figma", "Design Systems", "Prototypes"],
  },
  2: {
    iconBg: "from-cyan-500 to-blue-500",
    chip: "bg-cyan-100 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-200 dark:border-cyan-400/30",
    bar: "from-cyan-500 to-blue-500",
    button: "from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
    border: "group-hover:border-cyan-400/60",
    title: "group-hover:text-cyan-700 dark:group-hover:text-cyan-200",
    tags: ["React", "Next.js", "Tailwind"],
  },
  3: {
    iconBg: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-200 dark:border-emerald-400/30",
    bar: "from-emerald-500 to-teal-500",
    button:
      "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600",
    border: "group-hover:border-emerald-400/60",
    title: "group-hover:text-emerald-700 dark:group-hover:text-emerald-200",
    tags: ["Node.js", "APIs", "Database"],
  },
};

const getServiceIcon = (serviceId) => {
  switch (serviceId) {
    case 1:
      return <PaletteIcon className="w-8 h-8 text-white" />;
    case 2:
      return <CodeIcon className="w-8 h-8 text-white" />;
    case 3:
      return <ServerIcon className="w-8 h-8 text-white" />;
    default:
      return <CodeIcon className="w-8 h-8 text-white" />;
  }
};

export default function page() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-x-0 top-0 mx-auto h-56 w-56 rounded-full bg-violet-500/25 blur-3xl"></div>
        <div className="absolute right-12 top-36 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center max-w-4xl mx-auto mb-20 relative"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-3 sm:mb-4 lg:mb-6">
            Services <span className="gradient-text">Built For Growth</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            I design, build, and scale digital products with a strong focus on
            usability, performance, and long-term maintainability.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 relative">
          {SERVICES.map((service, i) => (
            <MotionDiv
              key={service.id}
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={{ ...transition.scale, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className={`relative h-full p-8 rounded-3xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900/70 backdrop-blur-sm shadow-lg dark:shadow-slate-950/40 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 ${serviceTheme[service.id]?.border}`}
              >
                <div className="relative mb-6 z-10">
                  <div className="relative inline-flex">
                    <div
                      className={`relative w-20 h-20 bg-gradient-to-r ${serviceTheme[service.id]?.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                    >
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  <div className="absolute -top-1 left-16 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>

                  <div className="absolute -bottom-4 left-0 right-0">
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${serviceTheme[service.id]?.bar} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <h3
                      className={`text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors mb-3 ${serviceTheme[service.id]?.title}`}
                    >
                      {service.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(serviceTheme[service.id]?.tags ?? []).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${serviceTheme[service.id]?.chip}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <button
                      className={`w-full bg-gradient-to-r ${serviceTheme[service.id]?.button} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
