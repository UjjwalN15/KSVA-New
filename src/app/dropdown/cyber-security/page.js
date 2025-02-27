"use client";
import React from "react";
import {
  Shield,
  Lock,
  Server,
  Globe,
  Database,
  Cloud,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom hook for scroll reveal animation
const useScrollReveal = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Animation variants
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Network Security",
    description:
      "Protect your network infrastructure with advanced threat detection and prevention",
  },
  {
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: "Cloud Security",
    description:
      "Secure cloud environments and applications with comprehensive protection",
  },
  {
    icon: <Database className="h-12 w-12 text-primary" />,
    title: "Data Protection",
    description: "Safeguard sensitive data with encryption and access control",
  },
];

const features = [
  {
    title: "24/7 Monitoring",
    description: "Continuous threat detection and response",
  },
  {
    title: "Expert Team",
    description: "Certified security professionals",
  },
  {
    title: "Compliance",
    description: "Meet industry regulations",
  },
  {
    title: "Advanced Tools",
    description: "Latest security technologies",
  },
];

export default function CyberSecurityLanding() {
  const servicesReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex flex-col justify-center space-y-3 sm:space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Protect Your Digital Assets with Advanced Cybersecurity
                  </h1>
                  <p className="text-primary-foreground/80 text-sm sm:text-base md:text-xl">
                    Comprehensive security solutions to defend your business
                    against evolving cyber threats
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-500"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex items-center justify-center mt-8 lg:mt-0"
              >
                <div className="relative h-[200px] w-full max-w-[200px] sm:h-[300px] sm:max-w-[300px] md:h-[400px] md:max-w-[400px]">
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full rounded-lg bg-blue-900/80 p-4 backdrop-blur-sm">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Shield className="absolute right-4 top-4 h-20 w-20 text-yellow-400" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Lock className="absolute left-4 bottom-4 h-16 w-16 text-white/20" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <Server className="absolute right-4 bottom-4 h-12 w-12 text-yellow-400/60" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold">20+ Years</h3>
                <p className="text-muted-foreground">
                  in cybersecurity excellence
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold">ISO 27001</h3>
                <p className="text-muted-foreground">
                  certified security practices
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="text-muted-foreground">
                  successful security projects
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-8"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Security Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
                  Comprehensive cybersecurity solutions to protect your business
                  at every level
                </p>
              </div>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  ref={servicesReveal.ref}
                  initial="hidden"
                  animate={servicesReveal.controls}
                  variants={revealVariants}
                >
                  <Card>
                    <CardContent className="p-4 sm:p-6 space-y-2">
                      {service.icon}
                      <h3 className="text-lg sm:text-xl font-bold">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex flex-col justify-center space-y-3 sm:space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">
                    Why Choose Our Cybersecurity Services?
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-xl">
                    We provide comprehensive security solutions backed by years
                    of experience and expertise
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      ref={featuresReveal.ref}
                      initial="hidden"
                      animate={featuresReveal.controls}
                      variants={revealVariants}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-bold text-sm sm:text-base">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex items-center justify-center mt-8 lg:mt-0"
              >
                <div className="relative h-[200px] w-full max-w-[200px] sm:h-[300px] sm:max-w-[300px] md:h-[400px] md:max-w-[400px]">
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full rounded-lg bg-gradient-to-br from-primary/80 to-primary p-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Shield className="absolute right-4 top-4 h-20 w-20 text-white/20" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Lock className="absolute left-4 bottom-4 h-16 w-16 text-white/10" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter  md:text-5xl">
                  Ready to Secure Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-sm sm:text-base md:text-xl">
                  Get started with our comprehensive cybersecurity solutions
                  today
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Contact Us Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
