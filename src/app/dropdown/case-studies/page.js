"use client";

import React from "react";
import CaseStudySwiper from '../../../components/ui/CaseStudySwiper'
import Image from "next/image"; // Import Image from next/image
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom hook for scroll reveal animation
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

// const caseStudies = [
//   {
//     id: 1,
//     title: "Cloud Migration for Fortune 500 Company",
//     description:
//       "Successfully migrated a Fortune 500 company's entire infrastructure to the cloud, resulting in 40% cost savings and improved scalability.",
//     category: "Cloud Computing",
//     slug: "cloud-migration-fortune-500",
//   },
//   {
//     id: 2,
//     title: "AI-Powered Customer Service Solution",
//     description:
//       "Implemented an AI chatbot that reduced customer service response times by 60% and increased customer satisfaction scores by 25%.",
//     category: "Artificial Intelligence",
//     slug: "ai-customer-service-solution",
//   },
//   {
//     id: 3,
//     title: "Cybersecurity Overhaul for Financial Institution",
//     description:
//       "Strengthened a major bank's security infrastructure, preventing potential breaches and ensuring compliance with international regulations.",
//     category: "Cybersecurity",
//     slug: "cybersecurity-overhaul-finance",
//   },
//   {
//     id: 4,
//     title: "IoT Solution for Smart Manufacturing",
//     description:
//       "Developed an IoT system that increased production efficiency by 30% and reduced downtime by 50% for a leading manufacturer.",
//     category: "Internet of Things",
//     slug: "iot-smart-manufacturing",
//   },
// ];

// const CaseStudyCard = ({ study, index }) => {
//   const { ref, controls } = useScrollReveal();

//   return (
//     <motion.div
//       key={study.id}
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={revealVariants}
//       custom={index}
//     >
//       <Card className="flex flex-col h-full">
//         <CardHeader>
//           <CardTitle className="text-primary">{study.title}</CardTitle>
//           <CardDescription>{study.category}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <p>{study.description}</p>
//         </CardContent>
//         <CardFooter className="mt-auto">
//           <Button variant="outline" className="w-full group" asChild>
//             <Link
//               href={`/case-study/${study.slug}`}
//               className="flex items-center justify-center"
//             >
//               Read More
//               <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
//             </Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };

// export default function CaseStudies() {
//   const { ref: headerRef, controls: headerControls } = useScrollReveal();
//   const { ref: ctaRef, controls: ctaControls } = useScrollReveal();

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header Section */}
//       <header className="bg-primary text-primary-foreground py-12 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             ref={headerRef}
//             initial="hidden"
//             animate={headerControls}
//             variants={revealVariants}
//           >
//             <h1 className="text-3xl md:text-5xl font-bold mb-4">
//               Case Studies
//             </h1>
//             <p className="text-xl md:text-2xl max-w-2xl">
//               Discover how we&apos;ve helped businesses transform their IT
//               infrastructure and achieve remarkable results.
//             </p>
//           </motion.div>
//         </div>
//       </header>

//       {/* Case Studies Grid */}
//       <section className="py-12 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {caseStudies.map((study, index) => (
//               <CaseStudyCard key={study.id} study={study} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="bg-secondary py-12 md:py-24">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             ref={ctaRef}
//             initial="hidden"
//             animate={ctaControls}
//             variants={revealVariants}
//           >
//             <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
//               Let&apos;s discuss how our IT solutions can drive your business
//               forward. Our experts are ready to create a tailored strategy for
//               your unique needs.
//             </p>
//             <Button
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground"
//               asChild
//             >
//               <Link href="/contact">Contact Us Today</Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

const CaseStudies = () => {
  const Percentage = [
    {
      image: "/42 1.png",
      description: "increase in website engagement with our strategic web development.",
    },
    {
      image: "/68 1.png",
      description: "of our clients see improved ad performance within the first three months.",
    },
    {
      image: "/75 1.png",
      description: "of businesses experience higher retention rates with our tailored branding and marketing strategies.",
    },
  ];
  return (
    <>
      <div className="w-[95%] pb-20 mx-auto">
        <section className="w-[100%] lg:h-[60vh] bg-[#81C0F4]">
          <div className="relative text-white py-20">
            <div className="flex flex-col gap-10 w-[60%] text-center mx-auto">
              <h2 className="text-[32px] md:text-[64px] font-bold leading-tight">Case Studies</h2>
              <p className="text-[18px] md:text-[24px] font-[600]">
                Businesses worldwide trust KSVA to elevate their brand, enhance their digital presence, and drive real growth.
                Let’s take your business to the next level. Discover how.
              </p>
              <a
                className="text-[20px] md:text-[24px] w-max mx-auto rounded-[10px] py-2 px-5 cursor-pointer bg-gradient-to-r from-[#275071] to-[#4A98D7] text-white font-semibold transition-transform hover:scale-105"
              >
                See all case studies
              </a>
            </div>

            {/* Background SVG Wave */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full left-0 bottom-[-22vh] lg:bottom-[-35vh]"
              height="320"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#81C0F4"
                fillOpacity="1"
                d="M0,256L30,224C60,192,120,128,180,122.7C240,117,300,171,360,197.3C420,224,480,224,540,240C600,256,660,288,720,261.3C780,235,840,149,900,101.3C960,53,1020,43,1080,80C1140,117,1200,203,1260,218.7C1320,235,1380,181,1410,154.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
          </div>
        </section>
        <section className="mt-[10vh] lg:mt-[35vh]">
          <h2 className="text-[32px] lg:text-[64px] font-[600] text-center">Featured <span className="text-blue-400">Case Studies</span></h2>
          <CaseStudySwiper />
        </section>
        <section>
          <div className="w-[80%] mx-auto lg:py-[10vh]">
            <h2 className="text-[24px] lg:text-[48px] font-[700] lg:text-center">Attract more leads, convert more customers, and scale your business with KSVA.</h2>
            <p className="text-[18px] lg:text-[24px] text-center mt-10">Our expert-driven digital solutions help e-commerce brands enhance their online presence, optimize conversions, and drive sustainable growth.</p>
          </div>
          <div className="flex flex-wrap gap-5 justify-between">
            {Percentage.map((percentage, index) => (
              <div key={index} className="lg:w-[calc(100%/3.3)] p-5 rounded-lg">
                <Image
                  src={percentage.image}
                  width={128}
                  height={128}
                  alt="Image"
                  className="w-full h-[300px] object-contain"
                />
                <p className="text-[18px] lg:text-[24px] py-5">{percentage.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default CaseStudies

// {tagArray.map((tag, index) => (
//   <a key={index} className="px-2 py-3 bg-[#D9D9D9] rounded-[20px]">{tag}</a>
// ))}