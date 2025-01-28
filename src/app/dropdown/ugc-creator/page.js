// "use client";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Video,
//   Users,
//   TrendingUp,
//   ArrowRight,
//   Star,
//   CheckCircle,
//   Zap,
//   Shield,
// } from "lucide-react";
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

// export default function UGCCreatorLanding() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <main className="flex-1">
//         <AnimatedSection>
//           <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//             <div className="container px-4 md:px-6 mx-auto">
//               <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//                 <div className="flex flex-col justify-center space-y-4">
//                   <div className="space-y-2">
//                     <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
//                       Unleash the Power of User-Generated Content
//                     </h1>
//                     <p className="max-w-[600px] text-blue-800 md:text-xl dark:text-blue-200">
//                       Transform your brand with authentic stories. UGC Creator
//                       helps you harness, manage, and amplify user content.
//                     </p>
//                   </div>
//                   <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                     <Button className="bg-blue-600 text-white hover:bg-blue-700">
//                       Start Free Trial
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="text-blue-600 border-blue-600 hover:bg-blue-100"
//                     >
//                       How It Works <ArrowRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <Image
//                     src="/ugc.jpg?height=400&width=400"
//                     alt="UGC Creator Dashboard"
//                     width={400}
//                     height={400}
//                     className="rounded-2xl shadow-2xl"
//                   />
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
//             <div className="container px-4 md:px-6 mx-auto">
//               <AnimatedSection delay={200}>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-blue-900">
//                   Empower Your Brand
//                 </h2>
//               </AnimatedSection>
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   {
//                     icon: Video,
//                     title: "Content Curation",
//                     description:
//                       "Easily collect and curate the best user-generated content from across platforms.",
//                   },
//                   {
//                     icon: Users,
//                     title: "Community Building",
//                     description:
//                       "Foster a vibrant community of creators and brand advocates.",
//                   },
//                   {
//                     icon: TrendingUp,
//                     title: "Performance Tracking",
//                     description:
//                       "Measure the impact of UGC on your brand with advanced analytics.",
//                   },
//                 ].map((feature, index) => (
//                   <AnimatedSection key={index} delay={400 + index * 100}>
//                     <Card className="bg-blue-50 border-none shadow-lg">
//                       <CardContent className="flex flex-col items-center space-y-4 p-6">
//                         <feature.icon className="w-12 h-12 text-blue-600" />
//                         <h3 className="text-xl font-bold text-blue-900">
//                           {feature.title}
//                         </h3>
//                         <p className="text-blue-700 text-center">
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
//             className="w-full py-12 md:py-24 lg:py-32 bg-blue-100"
//           >
//             <div className="container px-4 md:px-6 mx-auto">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-blue-900">
//                 How UGC Creator Works
//               </h2>
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                 {[
//                   {
//                     title: "Collect",
//                     description: "Gather content from various social platforms",
//                   },
//                   {
//                     title: "Curate",
//                     description:
//                       "Select the best content that aligns with your brand",
//                   },
//                   {
//                     title: "Collaborate",
//                     description: "Engage with creators and obtain permissions",
//                   },
//                   {
//                     title: "Amplify",
//                     description:
//                       "Share curated UGC across your marketing channels",
//                   },
//                 ].map((step, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center space-y-2 text-center"
//                   >
//                     <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
//                       {index + 1}
//                     </div>
//                     <h3 className="text-xl font-bold text-blue-900">
//                       {step.title}
//                     </h3>
//                     <p className="text-blue-700">{step.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="benefits"
//             className="w-full py-12 md:py-24 lg:py-32 bg-white"
//           >
//             <div className="container px-4 md:px-6 mx-auto">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-blue-900">
//                 Why Choose UGC Creator?
//               </h2>
//               <div className="grid gap-8 md:grid-cols-2">
//                 {[
//                   {
//                     icon: Zap,
//                     title: "Boost Engagement",
//                     description:
//                       "Increase your social media engagement by up to 50% with authentic user content.",
//                   },
//                   {
//                     icon: Shield,
//                     title: "Build Trust",
//                     description:
//                       "90% of consumers trust UGC more than traditional advertising. Build credibility with real user experiences.",
//                   },
//                   {
//                     icon: Users,
//                     title: "Grow Community",
//                     description:
//                       "Foster a loyal community of brand advocates who create content on your behalf.",
//                   },
//                   {
//                     icon: TrendingUp,
//                     title: "Increase Conversions",
//                     description:
//                       "UGC can lead to a 29% increase in web conversions when included in marketing campaigns.",
//                   },
//                 ].map((benefit, index) => (
//                   <Card
//                     key={index}
//                     className="bg-blue-50 border-none shadow-lg"
//                   >
//                     <CardContent className="flex items-start space-x-4 p-6">
//                       <benefit.icon className="w-8 h-8 text-blue-600 mt-1" />
//                       <div>
//                         <h3 className="text-xl font-bold text-blue-900">
//                           {benefit.title}
//                         </h3>
//                         <p className="text-blue-700">{benefit.description}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="testimonials"
//             className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
//           >
//             <div className="container px-4 md:px-6 mx-auto">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-blue-900">
//                 What Our Clients Say
//               </h2>
//               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                 {[
//                   {
//                     name: "Emily Chen",
//                     role: "Director of Social Media, TrendSetters Inc.",
//                     quote:
//                       "UGC Creator has revolutionized our content strategy. We've seen a 300% increase in engagement and our community has never been stronger.",
//                   },
//                   {
//                     name: "Alex Rodriguez",
//                     role: "CMO, FashionForward",
//                     quote:
//                       "The ROI we've seen since implementing UGC Creator is incredible. Our user-generated content campaigns are outperforming traditional ads by 5x.",
//                   },
//                   {
//                     name: "Sarah Thompson",
//                     role: "Head of Digital Marketing, EcoLife",
//                     quote:
//                       "UGC Creator made it easy for us to find and share authentic customer stories. It's been a game-changer for our brand's online presence.",
//                   },
//                 ].map((testimonial, index) => (
//                   <Card key={index} className="bg-white border-none shadow-lg">
//                     <CardContent className="flex flex-col space-y-4 p-6">
//                       <div className="flex items-center space-x-1">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className="w-5 h-5 fill-current text-yellow-500"
//                           />
//                         ))}
//                       </div>
//                       <p className="text-blue-700 italic">
//                         "{testimonial.quote}"
//                       </p>
//                       <div>
//                         <p className="font-semibold text-blue-900">
//                           {testimonial.name}
//                         </p>
//                         <p className="text-sm text-blue-600">
//                           {testimonial.role}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="pricing"
//             className="w-full py-12 md:py-24 lg:py-32 bg-white"
//           >
//             <div className="container px-4 md:px-6 mx-auto">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-blue-900">
//                 Simple, Transparent Pricing
//               </h2>
//               <div className="grid gap-8 md:grid-cols-3">
//                 {[
//                   {
//                     name: "Starter",
//                     price: "$99",
//                     features: [
//                       "Up to 1,000 UGC posts/month",
//                       "Basic analytics",
//                       "Email support",
//                       "1 user account",
//                     ],
//                   },
//                   {
//                     name: "Pro",
//                     price: "$299",
//                     features: [
//                       "Up to 10,000 UGC posts/month",
//                       "Advanced analytics",
//                       "Priority support",
//                       "5 user accounts",
//                       "Custom branding",
//                     ],
//                   },
//                   {
//                     name: "Enterprise",
//                     price: "Custom",
//                     features: [
//                       "Unlimited UGC posts",
//                       "Real-time analytics",
//                       "24/7 dedicated support",
//                       "Unlimited user accounts",
//                       "API access",
//                       "Custom integrations",
//                     ],
//                   },
//                 ].map((plan, index) => (
//                   <Card
//                     key={index}
//                     className={`bg-blue-50 border-none shadow-lg ${
//                       index === 1 ? "ring-2 ring-blue-600" : ""
//                     }`}
//                   >
//                     <CardContent className="flex flex-col space-y-4 p-6">
//                       <h3 className="text-2xl font-bold text-blue-900">
//                         {plan.name}
//                       </h3>
//                       <p className="text-4xl font-bold text-blue-600">
//                         {plan.price}
//                         <span className="text-lg font-normal">
//                           {plan.name !== "Enterprise" ? "/month" : ""}
//                         </span>
//                       </p>
//                       <ul className="space-y-2">
//                         {plan.features.map((feature, i) => (
//                           <li
//                             key={i}
//                             className="flex items-center text-blue-700"
//                           >
//                             <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                       <Button
//                         className={
//                           index === 1
//                             ? "bg-blue-600 text-white hover:bg-blue-700"
//                             : "bg-blue-100 text-blue-600 hover:bg-blue-200"
//                         }
//                       >
//                         {plan.name === "Enterprise"
//                           ? "Contact Sales"
//                           : "Get Started"}
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </AnimatedSection>

//         <AnimatedSection>
//           <section
//             id="cta"
//             className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white"
//           >
//             <div className="container px-4 md:px-6 mx-auto">
//               <div className="flex flex-col items-center space-y-4 text-center">
//                 <div className="space-y-2">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                     Ready to Amplify Your Brand's Voice?
//                   </h2>
//                   <p className="mx-auto max-w-[600px] text-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                     Join thousands of brands leveraging the power of
//                     user-generated content. Start your journey today.
//                   </p>
//                 </div>
//                 <div className="w-full max-w-sm space-y-2">
//                   <form className="flex space-x-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border border-blue-300 bg-white/80 px-3 py-2 text-sm placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       placeholder="Enter your email"
//                       type="email"
//                     />
//                     <Button
//                       type="submit"
//                       className="bg-white text-blue-600 hover:bg-blue-100"
//                     >
//                       Get Started
//                     </Button>
//                   </form>
//                   <p className="text-xs text-blue-300">
//                     By signing up, you agree to our Terms of Service and Privacy
//                     Policy.
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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";
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
    config: { mass: 1, tension: 200, friction: 20 }, // Add spring config for smoother animation
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
}

export default function UGCCreatorLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        <AnimatedSection>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900">
                      Unleash the Power of User-Generated Content
                    </h1>
                    <p className="max-w-[600px] text-blue-800 md:text-xl dark:text-blue-200">
                      Transform your brand with authentic stories. UGC Creator
                      helps you harness, manage, and amplify user content.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                      Start Free Trial
                    </Button>
                    <Button
                      variant="outline"
                      className="text-blue-600 border-blue-600 hover:bg-blue-100"
                    >
                      How It Works <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/ugc.jpg?height=400&width=400"
                    alt="UGC Creator Dashboard"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ... rest of the sections ... */}
      </main>
    </div>
  );
}
