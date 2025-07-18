import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SOCIAL_ICONS } from "@/utils/data";
import { DownloadIcon, ArrowRightIcon, SparklesIcon } from "lucide-react";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv, MotionImage, MotionButton } from "@/utils/motionTags";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-violet-500 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-64 left-32 w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-pink-500 rounded-full animate-bounce delay-700"></div>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveUp}
              transition={transition.moveUp}
              className="space-y-8 relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-4 border-violet-200 rounded-full opacity-30"></div>
              <div className="absolute top-20 -right-5 w-16 h-16 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg rotate-45 opacity-40"></div>

              <div className="space-y-4">
                <MotionDiv
                  variants={variants.moveUp}
                  transition={{ ...transition.moveUp, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <SparklesIcon className="w-4 h-4 animate-spin" />
                  <span>Available for new projects</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </MotionDiv>

                <MotionDiv
                  variants={variants.moveUp}
                  transition={{ ...transition.moveUp, delay: 0.3 }}
                  className="relative"
                >
                  <h1 className="font-display relative">
                    Hi, I'm{" "}
                    <span className="gradient-text relative">
                      Biruktawit
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-bold text-neutral-700 mt-4 relative">
                    Full Stack Developer &{" "}
                    <span className="relative">
                      UI/UX Designer
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                    </span>
                  </h2>
                </MotionDiv>

                <MotionDiv
                  variants={variants.moveUp}
                  transition={{ ...transition.moveUp, delay: 0.4 }}
                  className="text-lg text-neutral-600 leading-relaxed max-w-lg relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-500 rounded-full"></div>
                  I create beautiful, functional, and user-centered digital
                  experiences that solve real-world problems with clean code and
                  thoughtful design.
                </MotionDiv>
              </div>

              {/* Enhanced Buttons */}
              <MotionDiv
                variants={variants.moveUp}
                transition={{ ...transition.moveUp, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <MotionButton
                  className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    View My Work
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </MotionButton>

                <MotionButton
                  className="relative bg-white/80 backdrop-blur-sm border-2 border-violet-200 hover:border-violet-400 text-violet-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <DownloadIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </span>
                </MotionButton>
              </MotionDiv>

              {/* Enhanced Social Links */}
              <MotionDiv
                variants={variants.moveUp}
                transition={{ ...transition.moveUp, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <span className="text-sm text-neutral-500 font-medium">
                  Follow me:
                </span>
                <div className="flex space-x-3">
                  {SOCIAL_ICONS?.map((social, i) => (
                    <MotionDiv
                      key={social.id}
                      variants={variants.scale}
                      transition={{ ...transition.scale, delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-neutral-600 hover:text-violet-600 border border-violet-100 hover:border-violet-300"
                      >
                        <Image
                          src={social.icon}
                          alt={social.name}
                          width={24}
                          height={24}
                          className="opacity-70 group-hover:opacity-100 transition-opacity filter group-hover:brightness-110"
                        />
                      </a>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>

            {/* Right Content - Enhanced Profile Image */}
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveUp}
              transition={{ ...transition.moveUp, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl scale-110"></div>

              {/* Floating Rings */}
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-violet-300/30 rounded-full animate-spin"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-cyan-300/30 rounded-full animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <MotionImage
                  src="/profil.png"
                  alt="Biruktawit Shiferaw"
                  width={400}
                  height={400}
                  className="relative rounded-full shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Skills Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  React
                </div>
                <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  Node.js
                </div>
                <div className="absolute -bottom-4 left-1/4 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-500">
                  UI/UX
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "3+", label: "Years Experience", icon: "⭐" },
              { number: "100%", label: "Client Satisfaction", icon: "❤️" },
              { number: "24/7", label: "Support Available", icon: "🔧" },
            ].map((stat, i) => (
              <MotionDiv
                key={i}
                variants={variants.scale}
                transition={{ ...transition.scale, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-violet-100 group-hover:border-violet-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
