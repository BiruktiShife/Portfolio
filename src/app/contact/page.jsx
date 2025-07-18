import { MotionDiv } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framer_variants";
import ContactForm from "@/components/ContactForm";
import { MapPinIcon, MailIcon, PhoneIcon, ClockIcon } from "lucide-react";

export default function page() {
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      details: "Addis Ababa, Ethiopia",
      subtext: "Available for remote work worldwide",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email",
      details: "biruktawitshiferaw522@gmail.com",
      subtext: "I'll respond within 24 hours",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      details: "+251 933 031 633",
      subtext: "Available Mon-Fri, 9AM-6PM EAT",
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      subtext: "Usually much faster!",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="font-display mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your
            project and discuss how we can create something amazing together.
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={{ ...transition.moveUp, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-6 lg:mb-8">
                Get in Touch
              </h3>

              <div className="grid gap-4 lg:gap-6">
                {contactInfo.map((info, i) => (
                  <MotionDiv
                    key={i}
                    variants={variants.scale}
                    transition={{ ...transition.scale, delay: 0.3 + i * 0.1 }}
                    className="glass-card p-4 lg:p-6 hover:shadow-medium transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg lg:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-neutral-800 mb-1 text-sm lg:text-base">
                          {info.title}
                        </h4>
                        <p className="text-neutral-600 font-medium mb-1 text-sm lg:text-base">
                          {info.details}
                        </p>
                        <p className="text-xs lg:text-sm text-neutral-500">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>

            {/* Map placeholder with better design */}
            <MotionDiv
              variants={variants.scale}
              transition={{ ...transition.scale, delay: 0.7 }}
              className="glass-card p-6 h-64 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-100 opacity-50"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-neutral-800 mb-2">
                    Addis Ababa, Ethiopia
                  </h4>
                  <p className="text-neutral-600">
                    Available for remote collaboration worldwide
                  </p>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Contact Form */}
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={{ ...transition.moveUp, delay: 0.4 }}
            className="w-full"
          >
            <ContactForm />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
