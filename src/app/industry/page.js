"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const industries = [
  { name: "Fintech", icon: "💳" },
  { name: "Banking", icon: "🏦" },
  { name: "Insurance", icon: "🛡️" },
  { name: "Government", icon: "🏛️" },
  { name: "Non-Profit", icon: "🤝" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Healthcare", icon: "🏥" },
];

const IndustryCard = ({ name, icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
        hidden: { opacity: 0, y: 50 },
      }}
      className="group relative bg-white overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6 flex flex-col items-center">
        <span className="text-4xl mb-4">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

export default function IndustriesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
            hidden: { opacity: 0, y: -50 },
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transforming Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver innovative IT solutions across diverse sectors, driving
            digital transformation and growth.
          </p>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
            hidden: { opacity: 0 },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <IndustryCard key={industry.name} {...industry} index={index} />
          ))}
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.6, ease: "easeOut" },
            },
            hidden: { opacity: 0, y: 50 },
          }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Explore All Industries
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
