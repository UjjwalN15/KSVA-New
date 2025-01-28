// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Code,
//   Cpu,
//   Globe,
//   Rocket,
//   Server,
//   Smartphone,
//   Flame,
//   Sparkles,
//   Zap,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Custom hook for scroll reveal animation
// const useScrollReveal = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return { ref, controls };
// };

// // Animation variants
// const revealVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const ServicesGrid = () => {
//   const { ref, controls } = useScrollReveal();

//   return (
//     <motion.div
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: {
//             staggerChildren: 0.1,
//           },
//         },
//       }}
//     >
//       {[
//         {
//           icon: <Globe className="h-10 w-10 text-blue-600" />,
//           title: "Web Development",
//           description:
//             "Cutting-edge web applications tailored to your business needs.",
//         },
//         {
//           icon: <Smartphone className="h-10 w-10 text-blue-600" />,
//           title: "Mobile Apps",
//           description:
//             "Innovative mobile solutions for iOS and Android platforms.",
//         },
//         {
//           icon: <Server className="h-10 w-10 text-blue-600" />,
//           title: "Backend Systems",
//           description: "Robust and scalable server-side solutions and APIs.",
//         },
//         {
//           icon: <Cpu className="h-10 w-10 text-blue-600" />,
//           title: "AI & Machine Learning",
//           description:
//             "Intelligent systems that adapt and evolve with your business.",
//         },
//         {
//           icon: <Code className="h-10 w-10 text-blue-600" />,
//           title: "Custom Software",
//           description:
//             "Bespoke software solutions designed for your unique challenges.",
//         },
//         {
//           icon: <Rocket className="h-10 w-10 text-blue-600" />,
//           title: "DevOps & Cloud",
//           description:
//             "Efficient cloud infrastructure and streamlined deployments.",
//         },
//       ].map((service, index) => (
//         <motion.div key={index} variants={revealVariants}>
//           <Card className="transition-all duration-300 hover:shadow-lg">
//             <CardContent className="p-6 flex flex-col items-center text-center">
//               {service.icon}
//               <h3 className="text-xl font-semibold mt-4 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-blue-700">{service.description}</p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// const ProcessSteps = () => {
//   const { ref, controls } = useScrollReveal();

//   return (
//     <motion.div
//       className="flex flex-col md:flex-row justify-center items-center md:space-x-8"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: {
//             staggerChildren: 0.1,
//           },
//         },
//       }}
//     >
//       {[
//         {
//           number: "01",
//           title: "Discovery",
//           description: "We analyze your requirements and vision in depth.",
//         },
//         {
//           number: "02",
//           title: "Planning",
//           description: "Detailed project roadmap and architecture design.",
//         },
//         {
//           number: "03",
//           title: "Development",
//           description: "Agile development with regular updates and feedback.",
//         },
//         {
//           number: "04",
//           title: "Testing",
//           description:
//             "Rigorous quality assurance and user acceptance testing.",
//         },
//         {
//           number: "05",
//           title: "Deployment",
//           description: "Smooth launch with ongoing support and maintenance.",
//         },
//       ].map((step, index) => (
//         <motion.div
//           key={`process-step-${index}`}
//           variants={revealVariants}
//           className="flex flex-col items-center text-center mb-8 md:mb-0"
//         >
//           <span
//             className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4"
//             aria-hidden="true"
//           >
//             {step.number}
//           </span>
//           <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//           <p className="text-blue-700 max-w-xs">{step.description}</p>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// const ServicePlans = () => {
//   const { ref, controls } = useScrollReveal();

//   return (
//     <motion.div
//       className="grid md:grid-cols-3 gap-6"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: {
//             staggerChildren: 0.1,
//           },
//         },
//       }}
//     >
//       {[
//         {
//           title: "Spark",
//           icon: Sparkles,
//           items: [
//             "Basic website design and development.",
//             "On-page SEO optimization.",
//             "Social media setup and management (2 platforms).",
//             "Monthly reporting and analytics.",
//           ],
//           footer:
//             "Ideal for small businesses and startups looking to establish their online presence.",
//         },
//         {
//           title: "Ignite",
//           icon: Zap,
//           items: [
//             "Advanced website design and development.",
//             "Comprehensive SEO strategy",
//             "Social media marketing (3 platforms).",
//             "Content marketing (blog posts, articles).",
//             "Email marketing campaigns.",
//           ],
//           footer:
//             "Perfect for growing businesses seeking to increase online visibility and generate leads.",
//         },
//         {
//           title: "Blaze",
//           icon: Flame,
//           items: [
//             "Custom web development.",
//             "In-depth SEO and PPC campaigns.",
//             "Comprehensive social media marketing.",
//             "Content marketing strategy.",
//             "Email marketing automation.",
//             "Advanced analytics and reporting.",
//           ],
//           footer:
//             "Tailored for established businesses looking to dominate their industry and achieve growth.",
//         },
//       ].map((plan, index) => (
//         <motion.div key={index} variants={revealVariants}>
//           <Card className="bg-blue-700 text-white overflow-hidden">
//             <CardContent className="space-y-4 px-6 pb-6">
//               <div className="mt-6 mb-4">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <plan.icon className="w-8 h-8" />
//                   <h3 className="text-4xl font-bold text-center">
//                     {plan.title}
//                   </h3>
//                   <plan.icon className="w-8 h-8" />
//                 </div>
//                 <hr className="border-t border-white opacity-30 w-1/2 mx-auto" />
//               </div>
//               <ul className="space-y-2 min-h-[280px]">
//                 {plan.items.map((item, itemIndex) => (
//                   <li
//                     key={itemIndex}
//                     className="flex items-start gap-2 text-lg mb-2"
//                   >
//                     <span className="text-white text-2xl leading-none mr-2">
//                       •
//                     </span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <p className="text-sm text-center pt-4">{plan.footer}</p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default function KSVATechLanding() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       {/* Hero Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={revealVariants}
//         className="py-20 md:py-32"
//       >
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
//               Innovative Software Solutions by KSVA Tech
//             </h1>
//             <p className="text-xl text-blue-700 mb-8">
//               We transform your ideas into powerful, scalable software that
//               fuels business growth and drives technological advancement.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <Button size="lg" className="w-full sm:w-auto">
//                 Start Your Project
//               </Button>
//               <Button size="lg" variant="outline" className="w-full sm:w-auto">
//                 View Our Portfolio
//               </Button>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <Image
//               src="/software.svg"
//               alt="KSVA Tech Software Development Illustration"
//               width={400}
//               height={400}
//               className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </motion.section>

//       {/* Services Section */}
//       <section id="services" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={revealVariants}
//             className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
//           >
//             Our Expertise
//           </motion.h2>
//           <ServicesGrid />
//         </div>
//       </section>

//       {/* Process Section */}
//       <section id="process" className="py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial="hidden"
//             animate="visible"
//             variants={revealVariants}
//             className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
//           >
//             KSVA Tech Development Process
//           </motion.h2>
//           <ProcessSteps />
//         </div>
//       </section>

//       {/* Service Plans Section */}
//       <section id="service-plans" className="py-20 bg-blue-50">
//         <div className="w-full max-w-7xl mx-auto px-4 py-12 font-sans">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-blue-700 mb-2">
//               KSVA's Service Plans
//             </h2>
//             <p className="text-xl text-blue-700">
//               Elevate Your Online Presence with KSVA
//             </p>
//           </div>
//           <ServicePlans />
//         </div>
//       </section>

//       {/* CTA Section */}
//       <motion.section
//         initial="hidden"
//         animate="visible"
//         variants={revealVariants}
//         id="contact"
//         className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
//       >
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Innovate with KSVA Tech?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Let's collaborate to create cutting-edge software solutions that
//             will propel your business into the future.
//           </p>
//           <Link href="/contact">
//             <Button size="lg" variant="secondary" className="text-blue-900">
//               Schedule a Consultation
//             </Button>
//           </Link>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Cpu,
  Globe,
  Rocket,
  Server,
  Smartphone,
  Flame,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

const ServicesGrid = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {[
        {
          icon: <Globe className="h-10 w-10 text-blue-600" />,
          title: "Web Development",
          description:
            "Cutting-edge web applications tailored to your business needs.",
        },
        {
          icon: <Smartphone className="h-10 w-10 text-blue-600" />,
          title: "Mobile Apps",
          description:
            "Innovative mobile solutions for iOS and Android platforms.",
        },
        {
          icon: <Server className="h-10 w-10 text-blue-600" />,
          title: "Backend Systems",
          description: "Robust and scalable server-side solutions and APIs.",
        },
        {
          icon: <Cpu className="h-10 w-10 text-blue-600" />,
          title: "AI & Machine Learning",
          description:
            "Intelligent systems that adapt and evolve with your business.",
        },
        {
          icon: <Code className="h-10 w-10 text-blue-600" />,
          title: "Custom Software",
          description:
            "Bespoke software solutions designed for your unique challenges.",
        },
        {
          icon: <Rocket className="h-10 w-10 text-blue-600" />,
          title: "DevOps & Cloud",
          description:
            "Efficient cloud infrastructure and streamlined deployments.",
        },
      ].map((service, index) => (
        <motion.div key={index} variants={revealVariants}>
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-700">{service.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function KSVATechLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={revealVariants}
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              Innovative Software Solutions by KSVA Tech
            </h1>
            <p className="text-xl text-blue-700 mb-8">
              We transform your ideas into powerful, scalable software that
              fuels business growth and drives technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Our Portfolio
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/software.svg"
              alt="KSVA Tech Software Development Illustration"
              width={400}
              height={400}
              className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
          >
            Our Expertise
          </motion.h2>
          <ServicesGrid />
        </div>
      </section>
    </div>
  );
}
