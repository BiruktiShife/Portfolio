import { MotionDiv } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framer_variants";
import { SERVICES } from "@/utils/data";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  PaletteIcon,
  CodeIcon,
  ServerIcon,
} from "lucide-react";

// Create icon mapping
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4" />
            <span>Premium Development Services</span>
          </div>

          <h1 className="font-display mb-6">
            Services <span className="gradient-text">I Offer</span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            I provide comprehensive web development services, creating
            responsive and dynamic digital experiences tailored to your unique
            needs and goals with cutting-edge technologies.
          </p>
        </MotionDiv>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {SERVICES.map((service, i) => (
            <MotionDiv
              key={service.id}
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={{ ...transition.scale, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

              <div className="relative glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-6 border-2 border-transparent group-hover:border-violet-200 rounded-3xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100/50 to-purple-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Enhanced Icon */}
                <div className="relative mb-6 z-10">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>

                  {/* Skill Level Bar */}
                  <div className="absolute -bottom-4 left-0 right-0">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800 group-hover:text-violet-700 transition-colors mb-3 relative">
                      {service.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-base group-hover:text-neutral-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.id === 1 &&
                      ["Figma", "Adobe XD", "Prototyping"].map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    {service.id === 2 &&
                      ["React", "Next.js", "Tailwind"].map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    {service.id === 3 &&
                      ["Node.js", "MongoDB", "APIs"].map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {/* Action Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={{ ...transition.moveUp, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative glass-card p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-violet-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckIcon className="w-4 h-4" />
                <span>Ready to get started?</span>
              </div>

              <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-neutral-600 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with
                modern, scalable solutions that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary group">
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  View Portfolio
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
