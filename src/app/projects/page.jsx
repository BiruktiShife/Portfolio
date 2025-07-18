"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import {
  ExternalLinkIcon,
  GithubIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeIcon,
  EyeIcon,
} from "lucide-react";

const projects = [
  {
    title: "Finance Management",
    category: "fullstack",
    image: "/finance.png",
    stack: ["React", "TypeScript", "Chakra UI", "MongoDB", "NodeJs"],
    github: "https://github.com/BiruktiShife/-Finance-Management",
    description:
      "A comprehensive finance management platform with real-time analytics and budget tracking.",
    features: [
      "Real-time Analytics",
      "Budget Tracking",
      "Expense Management",
      "Financial Reports",
    ],
  },
  {
    title: "Local Language Translator",
    category: "fullstack",
    image: "/language.png",
    stack: ["Nextjs", "TailwindCSS", "Built in API"],
    github: "https://github.com/BiruktiShife/ethiotirgum",
    description:
      "An intelligent translation platform supporting Ethiopian local languages with AI integration.",
    features: [
      "Multi-language Support",
      "AI Translation",
      "Voice Recognition",
      "Cultural Context",
    ],
  },
  {
    title: "Study Planner",
    category: "fullstack",
    image: "/study.png",
    stack: ["Nextjs", "MongoDB", "ShadCN"],
    github: "https://github.com/BiruktiShife/Study-Planning",
    description:
      "Smart study planning application with progress tracking and personalized recommendations.",
    features: [
      "Progress Tracking",
      "Smart Scheduling",
      "Goal Setting",
      "Performance Analytics",
    ],
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);

  const onSlideChange = (item) => {
    setCurrentProject(projects[item?.activeIndex]);
  };

  const index =
    projects.findIndex((item) => item.title === currentProject?.title) + 1;

  const nexto = () => swiper?.slideNext();
  const prev = () => swiper?.slidePrev();

  return (
    <div className="min-h-screen pt-16 sm:pt-24 lg:pt-32 pb-10 sm:pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        {/* Enhanced Header - responsive */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 lg:mb-6">
            <CodeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Featured Work</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto px-4">
            Explore my latest work showcasing modern web development, innovative
            solutions, and cutting-edge technologies.
          </p>
        </MotionDiv>

        {/* Enhanced Project Display - responsive */}
        <div className="max-w-6xl mx-auto">
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={{ ...transition.moveUp, delay: 0.2 }}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center"
          >
            {/* Enhanced Project Info - responsive */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 lg:order-1 order-2 w-full">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text">
                    {index < 10 ? `0${index}` : index}
                  </div>
                  <div className="hidden sm:block h-10 lg:h-12 xl:h-16 w-0.5 lg:w-1 bg-gradient-to-b from-violet-600 to-purple-600 rounded-full"></div>
                  <div className="flex-1">
                    <Badge
                      variant="outline"
                      className="text-violet-600 border-violet-200 mb-1 sm:mb-2 text-xs sm:text-sm"
                    >
                      {currentProject?.category}
                    </Badge>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-800 leading-tight">
                      {currentProject?.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed">
                  {currentProject?.description}
                </p>

                {/* Features List - responsive */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-neutral-800 text-sm sm:text-base">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {currentProject?.features?.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-sm sm:text-base text-neutral-600"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-violet-500 rounded-full flex-shrink-0"></div>
                        <span className="break-words">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack - responsive */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <h4 className="font-semibold text-neutral-800 text-sm sm:text-base">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {currentProject?.stack?.map((tech, i) => (
                      <TooltipProvider key={i}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 hover:from-violet-200 hover:to-purple-200 transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs sm:text-sm">
                              Built with {tech}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - responsive */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
                  <Button
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group flex-1 sm:flex-none text-sm sm:text-base py-2 sm:py-3 w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={currentProject?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      View Code
                      <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 shadow-lg hover:shadow-xl transition-all duration-300 group flex-1 sm:flex-none text-sm sm:text-base py-2 sm:py-3 w-full sm:w-auto"
                  >
                    <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Live Demo
                    <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Project Carousel - responsive */}
            <div className="lg:order-2 order-1 w-full">
              <div className="relative">
                {/* Background decoration - responsive */}
                <div className="absolute -top-2 sm:-top-4 lg:-top-8 -left-2 sm:-left-4 lg:-left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-violet-200/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-8 -right-2 sm:-right-4 lg:-right-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-purple-200/30 rounded-full blur-2xl"></div>

                <div className="relative glass-card p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                  <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
                    onSlideChange={onSlideChange}
                    onSwiper={(s) => setSwiper(s)}
                  >
                    {projects.map((project, i) => (
                      <SwiperSlide
                        key={project.title}
                        className={cn(
                          "!w-48 sm:!w-64 lg:!w-72 xl:!w-80 transition-all duration-500",
                          index - 1 !== i && "opacity-60"
                        )}
                      >
                        <div className="relative group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="object-cover rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 w-full h-32 sm:h-40 lg:h-48 xl:h-56"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Enhanced Navigation - responsive */}
                  <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 gap-2 sm:gap-3 lg:gap-4">
                    <Button
                      onClick={prev}
                      disabled={index === 1}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-violet-50 hover:border-violet-200 disabled:opacity-30 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                    >
                      <ArrowLeftIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Button>

                    <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-white/80 rounded-full">
                      {projects.map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300",
                            index - 1 === i
                              ? "bg-violet-600 w-3 sm:w-4 lg:w-6"
                              : "bg-neutral-300 hover:bg-neutral-400"
                          )}
                        />
                      ))}
                    </div>

                    <Button
                      onClick={nexto}
                      disabled={index === projects.length}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-violet-50 hover:border-violet-200 disabled:opacity-30 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
                    >
                      <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
