"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DownloadIcon,
  MapPinIcon,
  CalendarIcon,
  BriefcaseIcon,
} from "lucide-react";
import { MotionDiv, MotionImage, MotionButton } from "@/utils/motionTags";
const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  tools: ["Git", "Docker", "Figma", "VS Code", "Postman"],
};

const experience = [
  {
    title: "Full Stack Developer",
    company: "Ethiotelecom",
    period: "2023 - Present",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed a Virtual Internship Platform serving 1000+ users with modern web technologies.",
    achievements: [
      "Built scalable web applications using React and Node.js",
      "Implemented responsive designs with 95% mobile compatibility",
      "Optimized application performance by 40%",
    ],
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-10 sm:pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between w-full">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl font-bold text-violet-600">
                    <MotionImage
                      src="/profil.png"
                      alt="Biruktawit Shiferaw"
                      width={400}
                      height={400}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl object-cover"
                    />
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-1 sm:mb-2">
                  Biruktawit Shiferaw
                </h1>
                <p className="text-base sm:text-lg text-violet-600 font-medium mb-2 sm:mb-3">
                  Full Stack Developer
                </p>
                <p className="text-sm sm:text-base text-neutral-600 max-w-md">
                  Passionate about creating beautiful, functional digital
                  experiences
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="group text-sm sm:text-base"
              >
                <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button size="lg" className="text-sm sm:text-base">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="about" className="space-y-6 sm:space-y-8">
          <TabsList className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl shadow-lg p-1 sm:p-2 w-full sm:w-auto grid grid-cols-3 sm:flex">
            <TabsTrigger value="about" className="text-xs sm:text-sm">
              About
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-xs sm:text-sm">
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="text-xs sm:text-sm">
              Experience
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4 sm:space-y-6">
            <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-4 sm:mb-6">
                About Me
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  I'm Biruktawit Shiferaw, a passionate Full-Stack Web Developer
                  with expertise in creating dynamic, user-friendly digital
                  solutions. With experience developing platforms like a Virtual
                  Internship Platform at Ethiotelecom, I specialize in modern
                  web technologies.
                </p>
                <p>
                  My technical expertise spans ReactJS, Next.js, Node.js, and
                  MongoDB, allowing me to build comprehensive web applications
                  from concept to deployment.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4 sm:space-y-6">
            <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-4 sm:mb-6">
                Technical Skills
              </h3>
              <div className="grid gap-4 sm:gap-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "HTML5",
                      "CSS3",
                    ],
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    category: "Backend",
                    skills: [
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "PostgreSQL",
                      "REST APIs",
                    ],
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    category: "Tools & Others",
                    skills: [
                      "Git",
                      "Docker",
                      "AWS",
                      "Figma",
                      "Adobe XD",
                      "Vercel",
                    ],
                    color: "from-purple-500 to-violet-500",
                  },
                ].map((skillGroup, index) => (
                  <div key={index} className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-neutral-800">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skillGroup.skills.map((skill, i) => (
                        <div
                          key={i}
                          className={`px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${skillGroup.color} text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <BriefcaseIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-neutral-800">
                          {exp.title}
                        </h4>
                        <p className="text-violet-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-neutral-500">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-neutral-600"
                        >
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
