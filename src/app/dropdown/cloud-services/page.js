"use client";
import React from "react";
import { Shield, Cloud, Lock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function CloudSecurity() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 w-full h-auto"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L60,90.7C120,117,240,171,360,176C480,181,600,139,720,122.7C840,107,960,117,1080,138.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2 ml-10 ">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Cloud Security Consulting Services
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Planning, Evaluating and Improving Cloud Cyber Defense
                  </p>
                </div>
                <div className="text-primary-foreground/80 max-w-[600px] md:text-lg ml-10">
                  With over 20 years of experience in cybersecurity and cloud
                  services, we help businesses ensure solid protection of their
                  cloud data, apps, and infrastructure.
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-500 ml-10"
                  >
                    Protect your cloud
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex items-center justify-center"
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute right-0 top-0">
                    <div className="relative h-[300px] w-[300px] rounded-lg bg-blue-500/30 p-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="absolute -right-4 -top-4 h-24 w-24"
                      >
                        <Lock className="h-12 w-12 text-yellow-400" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="absolute bottom-4 right-4"
                      >
                        <Shield className="h-16 w-16 text-yellow-400" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute left-4 top-4"
                      >
                        <Cloud className="h-20 w-20 text-white/20" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                className="flex flex-col gap-4"
              >
                <div className="font-semibold text-lg">Table of Contents</div>
                <nav className="flex flex-col gap-2">
                  <a className="text-sm hover:text-primary" href="#controls">
                    Controls we handle
                  </a>
                  <a className="text-sm hover:text-primary" href="#strengths">
                    Our strengths
                  </a>
                  <a className="text-sm hover:text-primary" href="#scope">
                    Service scope
                  </a>
                  <a className="text-sm hover:text-primary" href="#customers">
                    Satisfied customers
                  </a>
                  <a className="text-sm hover:text-primary" href="#benefits">
                    Benefits we offer
                  </a>
                  <a className="text-sm hover:text-primary" href="#stories">
                    Success stories
                  </a>
                </nav>
              </motion.div>
              <div className="space-y-8">
                <motion.h2
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  className="text-3xl font-bold tracking-tighter"
                >
                  Cloud Security Consulting You Can Trust
                </motion.h2>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  className="text-muted-foreground md:text-lg"
                >
                  Our cloud security consulting helps prevent unauthorized
                  access to your cloud resources. Whether you&#39;re building a
                  secure cloud environment or enhancing the protection of your
                  existing cloud assets, our expert consultants will guide you
                  every step of the way.
                </motion.p>
                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={revealVariants}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-bold">Expert Guidance</h3>
                    <p className="text-muted-foreground">
                      Our cloud security experts will help you apply the
                      security techniques and tools that best suit your cloud
                      environment specifics.
                    </p>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={revealVariants}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-bold">
                      Comprehensive Protection
                    </h3>
                    <p className="text-muted-foreground">
                      We ensure complete security coverage across your entire
                      cloud infrastructure, applications, and data.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
