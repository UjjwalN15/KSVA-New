// "use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Users, TrendingUp, DollarSign } from "lucide-react";
// import { useInView, animated, useSpring } from "@react-spring/web";

// function AnimatedSection({ children, delay = 0 }) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: "-20% 0px",
//   });

//   const props = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? "translateY(0px)" : "translateY(50px)",
//     delay,
//   });

//   return (
//     <animated.div ref={ref} style={props}>
//       {children}
//     </animated.div>
//   );
// }

// export default function LandingPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <main className="flex-1">
//         <AnimatedSection>
//           <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
//             <div className="absolute inset-0 opacity-30">
//               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
//             </div>
//             <div className="container px-4 md:px-6 relative z-10">
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <div className="space-y-2">
//                   <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-md">
//                     Amplify Your Brand with inFluence
//                   </h1>
//                   <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl font-light">
//                     Connect with top influencers, track campaigns, and boost
//                     your ROI with our AI-powered platform.
//                   </p>
//                 </div>
//                 <div className="mt-6">
//                   <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
//                     Get Started
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="features"
//             className="w-full py-12 md:py-24 lg:py-32 bg-white"
//           >
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 relative inline-block">
//                 Why Choose inFluence?
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {[
//                   {
//                     icon: Users,
//                     title: "Vast Influencer Network",
//                     description:
//                       "Access thousands of verified influencers across various niches and platforms.",
//                   },
//                   {
//                     icon: TrendingUp,
//                     title: "Advanced Analytics",
//                     description:
//                       "Track your campaigns in real-time with our AI-powered analytics dashboard.",
//                   },
//                   {
//                     icon: DollarSign,
//                     title: "Maximize ROI",
//                     description:
//                       "Our smart matching algorithm ensures you get the best influencers for your budget.",
//                   },
//                 ].map((feature, index) => (
//                   <AnimatedSection key={index} delay={index * 100}>
//                     <Card className="border-blue-200 group hover:shadow-lg transition-shadow duration-300">
//                       <CardContent className="flex flex-col items-center p-6 space-y-4">
//                         <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
//                         <h3 className="text-2xl font-bold text-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
//                           {feature.title}
//                         </h3>
//                         <p className="text-center text-blue-800">
//                           {feature.description}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </AnimatedSection>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="how-it-works"
//             className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
//           >
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">
//                 How It Works
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {[
//                   {
//                     step: 1,
//                     title: "Create Your Campaign",
//                     description:
//                       "Define your goals, target audience, and budget.",
//                   },
//                   {
//                     step: 2,
//                     title: "Match with Influencers",
//                     description:
//                       "Our AI finds the perfect influencers for your brand.",
//                   },
//                   {
//                     step: 3,
//                     title: "Launch Your Campaign",
//                     description:
//                       "Collaborate with influencers and publish content.",
//                   },
//                   {
//                     step: 4,
//                     title: "Track & Optimize",
//                     description: "Monitor performance and adjust in real-time.",
//                   },
//                 ].map((item, index) => (
//                   <AnimatedSection key={item.step} delay={index * 100}>
//                     <div className="flex flex-col items-center space-y-2 text-center group">
//                       <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold transition-all duration-300 group-hover:scale-110">
//                         {item.step}
//                       </div>
//                       <h3 className="text-xl font-bold text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
//                         {item.title}
//                       </h3>
//                       <p className="text-blue-800">{item.description}</p>
//                     </div>
//                   </AnimatedSection>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="testimonials"
//             className="w-full py-12 md:py-24 lg:py-32 bg-white"
//           >
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">
//                 What Our Clients Say
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {[
//                   {
//                     name: "Sarah Johnson",
//                     company: "TechGrow Inc.",
//                     quote:
//                       "inFluence has revolutionized our influencer marketing strategy. We've seen a 300% increase in ROI since we started using the platform.",
//                   },
//                   {
//                     name: "Mark Thompson",
//                     company: "FitLife Brands",
//                     quote:
//                       "The AI-powered matching is a game-changer. We're connecting with influencers who truly resonate with our brand values.",
//                   },
//                 ].map((testimonial, index) => (
//                   <AnimatedSection key={index} delay={index * 100}>
//                     <Card className="border-blue-200 hover:shadow-lg transition-shadow duration-300">
//                       <CardContent className="p-6">
//                         <p className="text-lg mb-4 text-blue-800 italic">
//                           "{testimonial.quote}"
//                         </p>
//                         <div className="flex items-center space-x-4">
//                           <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
//                             {testimonial.name[0]}
//                           </div>
//                           <div>
//                             <p className="font-semibold text-blue-600">
//                               {testimonial.name}
//                             </p>
//                             <p className="text-sm text-blue-800">
//                               {testimonial.company}
//                             </p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </AnimatedSection>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
//             <div className="absolute inset-0 opacity-30">
//               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
//             </div>
//             <div className="container px-4 md:px-6 relative z-10">
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <div className="space-y-2">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
//                     Ready to Amplify Your Brand?
//                   </h2>
//                   <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                     Join thousands of brands leveraging the power of influencer
//                     marketing with inFluence.
//                   </p>
//                 </div>
//                 <div className="w-full max-w-sm space-y-2">
//                   <form className="flex space-x-2">
//                     <Input
//                       className="flex-1 bg-white"
//                       placeholder="Enter your email"
//                       type="email"
//                       required
//                     />
//                     <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 rounded-full transition-all duration-300 transform hover:scale-105">
//                       Get Started
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </form>
//                   <p className="text-xs text-blue-100">
//                     By signing up, you agree to our{" "}
//                     <Link
//                       className="underline underline-offset-2 hover:text-white"
//                       href="#"
//                     >
//                       Terms & Conditions
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>
//       </main>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, DollarSign } from "lucide-react";
import { useInView, animated, useSpring } from "@react-spring/web";

function AnimatedSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-20% 0px",
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
            </div>
            <div className="container px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-md">
                    Amplify Your Brand with inFluence
                  </h1>
                  <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl font-light">
                    Connect with top influencers, track campaigns, and boost
                    your ROI with our AI-powered platform.
                  </p>
                </div>
                <div className="mt-6">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 relative inline-block">
                Why Choose inFluence?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-50 transition-transform duration-300 group-hover:scale-x-100"></span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Vast Influencer Network",
                    description:
                      "Access thousands of verified influencers across various niches and platforms.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Advanced Analytics",
                    description:
                      "Track your campaigns in real-time with our AI-powered analytics dashboard.",
                  },
                  {
                    icon: DollarSign,
                    title: "Maximize ROI",
                    description:
                      "Our smart matching algorithm ensures you get the best influencers for your budget.",
                  },
                ].map((feature, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <Card className="border-blue-200 group hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="flex flex-col items-center p-6 space-y-4">
                        <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" />
                        <h3 className="text-2xl font-bold text-center text-blue-600 group-hover:text-blue-800 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-center text-blue-800">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}
