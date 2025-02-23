"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail } from "lucide-react";

const RevealAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function BlogLanding() {
  const blogs = [
    {
      id: 1,
      title: "How to Plan a Digital Marketing Budget",
      description: "Marketing budgets have fallen in recent years, but expectations continue to rise.",
      date: "15 Jan, 2025",
      image: "/blog-image-1.png",
      link: "/dropdown/blog/DigitalMarketing"
    },
    {
      id: 2,
      title: "The Future of Content Marketing: Emerging Trends to Watch",
      description: "Over the years, content marketing has gone through several transformations due to advancements in technology, changes in the ways people behave and the emergence of different types of digital platforms. ",
      date: "15 Jan,2025",
      image: "/cm-2.png",
      link: "/dropdown/blog/ContentMarketing"
    },
    {
      id: 3,
      title: "How AI is Revolutionizing Website Development: Trends and Tools for 2025",
      description: " From design automation to personalized content, AI-driven tools are making websites smarter, faster, and more engaging.",
      date: "15 Jan,2025",
      image: "/ai-1.png",
      link: "/dropdown/blog/Ai"
    },
    {
      id: 4,
      title: "How Search Algorithms Are Changing and What It Means for Your Website",
      description: "Search engines have evolved from simple keyword-matching systems to sophisticated platforms capable of understanding context, intent, and semantics.",
      date: "15 Jan,2025",
      image: "/sai-1.png",
      link: "/dropdown/blog/searchAI"
    },
    {
      id: 5,
      title: "Why Every Business Needs a Website: The Role of UX, SEO & AI in Digital Success",
      description: "In today's digital era, establishing a robust online presence is essential for businesses of all sizes. A well-designed website serves as the cornerstone of this presence, acting as a virtual storefront that operates 24/7, providing information, facilitating transactions, and engaging customers.",
      date: "15 Jan,2025",
      image: "/ds-1.png",
      link: "/dropdown/blog/DigitalSuccess"
    },
    {
      id: 6,
      title: "When is AI going to replace us?",
      description: "Artificial Intelligence is a subfield of computer science that focuses on creating intelligent agents capable of performing tasks that would typically require human levels of intelligence.",
      date: "15 Jan,2025",
      image: "/aireplace-1.png",
      link: "/dropdown/blog/AiReplace"
    },
  ];
  const BlogCard = ({ title, description, date, image }) => {
    return (
      <div className="flex flex-col gap-5 w-full p-5">
        <Image
          src={image}
          alt="Blog Image"
          width={500}
          height={100}
          className="h-[200px] lg:h-[400px] w-full rounded-[30px]"
        />
        <h2 className="text-[18px] lg:text-[20px] font-[700]">{title}</h2>
        <p className="text-[18px] lg:text-[20px]">{description}</p>
        <ul className="list-disc">
          <li className="text-[18px] lg:text-[20px] text-left list-inside font-[900]">{date}</li>
        </ul>
      </div>
    );
  };
  return (
    // <div className="flex min-h-screen flex-col">
    //   <main className="flex-1">
    //     <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
    //       <div className="container px-4 md:px-6">
    //         <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
    //           <RevealAnimation>
    //             <div className="flex flex-col justify-center space-y-4">
    //               <div className="space-y-2">
    //                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    //                   Insights for the Tech World
    //                 </h1>
    //                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
    //                   Explore the latest trends, innovations, and insights in
    //                   technology and software development.
    //                 </p>
    //               </div>
    //               <div className="flex flex-col gap-2 min-[400px]:flex-row">
    //                 <Button size="lg">
    //                   Read Latest Post
    //                   <ArrowRight className="ml-2 h-4 w-4" />
    //                 </Button>
    //                 <Button size="lg" variant="outline">
    //                   Browse Categories
    //                 </Button>
    //               </div>
    //             </div>
    //           </RevealAnimation>
    //           <RevealAnimation>
    //             <Card className="w-full max-w-lg">
    //               <CardHeader>
    //                 <Badge className="w-fit">Featured</Badge>
    //                 <CardTitle className="line-clamp-2 text-2xl font-bold">
    //                   The Future of AI in Software Development
    //                 </CardTitle>
    //               </CardHeader>
    //               <CardContent>
    //                 <p className="line-clamp-3">
    //                   Explore how artificial intelligence is revolutionizing the
    //                   way we build and maintain software, from automated testing
    //                   to intelligent code completion.
    //                 </p>
    //               </CardContent>
    //               <CardFooter>
    //                 <Button variant="link">Read More</Button>
    //               </CardFooter>
    //             </Card>
    //           </RevealAnimation>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="w-full py-12 md:py-24 lg:py-32">
    //       <div className="container px-4 md:px-6">
    //         <RevealAnimation>
    //           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
    //             Recent Posts
    //           </h2>
    //         </RevealAnimation>
    //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //           {[1, 2, 3, 4, 5, 6].map((i) => (
    //             <RevealAnimation key={i}>
    //               <Card>
    //                 <CardHeader>
    //                   <Badge className="w-fit">
    //                     {
    //                       [
    //                         "Tech",
    //                         "AI",
    //                         "Development",
    //                         "Cloud",
    //                         "Security",
    //                         "Data",
    //                       ][i - 1]
    //                     }
    //                   </Badge>
    //                   <CardTitle className="line-clamp-2">
    //                     Blog Post Title {i}
    //                   </CardTitle>
    //                 </CardHeader>
    //                 <CardContent>
    //                   <p className="line-clamp-3">
    //                     This is a brief description of the blog post content. It
    //                     gives readers an idea of what the article is about.
    //                   </p>
    //                 </CardContent>
    //                 <CardFooter>
    //                   <Button variant="link">Read More</Button>
    //                 </CardFooter>
    //               </Card>
    //             </RevealAnimation>
    //           ))}
    //         </div>
    //         <RevealAnimation>
    //           <div className="mt-10 flex justify-center">
    //             <Button size="lg" variant="outline">
    //               View All Posts
    //               <ArrowRight className="ml-2 h-4 w-4" />
    //             </Button>
    //           </div>
    //         </RevealAnimation>
    //       </div>
    //     </section>
    //     <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    //       <div className="container px-4 md:px-6">
    //         <RevealAnimation>
    //           <div className="flex flex-col items-center justify-center space-y-4 text-center">
    //             <div className="space-y-2">
    //               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //                 Explore Topics
    //               </h2>
    //               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //                 Dive into our diverse range of technology topics
    //               </p>
    //             </div>
    //             <div className="flex flex-wrap justify-center gap-2">
    //               {[
    //                 "Artificial Intelligence",
    //                 "Cloud Computing",
    //                 "Cybersecurity",
    //                 "Data Science",
    //                 "DevOps",
    //                 "Mobile Development",
    //               ].map((topic) => (
    //                 <Badge
    //                   key={topic}
    //                   variant="secondary"
    //                   className="text-sm px-3 py-1"
    //                 >
    //                   {topic}
    //                 </Badge>
    //               ))}
    //             </div>
    //           </div>
    //         </RevealAnimation>
    //       </div>
    //     </section>
    //     <section className="w-full py-12 md:py-24 lg:py-32">
    //       <div className="container px-4 md:px-6">
    //         <RevealAnimation>
    //           <div className="flex flex-col items-center justify-center space-y-4 text-center">
    //             <div className="space-y-2">
    //               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //                 Stay Updated
    //               </h2>
    //               <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //                 Subscribe to our newsletter for the latest tech insights and
    //                 updates
    //               </p>
    //             </div>
    //             <div className="w-full max-w-sm space-y-2">
    //               <form className="flex space-x-2">
    //                 <Input
    //                   className="max-w-lg flex-1"
    //                   placeholder="Enter your email"
    //                   type="email"
    //                 />
    //                 <Button type="submit">
    //                   Subscribe
    //                   <Mail className="ml-2 h-4 w-4" />
    //                 </Button>
    //               </form>
    //             </div>
    //           </div>
    //         </RevealAnimation>
    //       </div>
    //     </section>
    //   </main>
    // </div>

    <>
      <div className="pb-5 max-w-7xl mx-auto">
        <div className="flex p-10 h-[70vh] lg:h-[90vh] mx-auto w-[95%] lg:w-full bg-[url(/blog-bg.png)] rounded-[50px] lg:bg-cover bg-center bg-no-repeat bg-[#aaaaee] bg-blend-multiply">
          <div className="flex flex-col gap-5 self-end text-left text-white">
            <h3 className="text[20px] lg:text-[24px] font-[900] ">Featured</h3>
            <h3 className="text-[18px] lg:text-[36px] font-[900]">When is AI going to <br /> replace us?</h3>
            <p className="text-[18px] lg:text-[24px] font-[900]">Artificial Intelligence cannot generate novelty. To date, it draws on preexisting data and re-arranges it to produce something that appears new. To some, this is comforting. They say it will prevent us from being replaced. </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-[32px] font-[600] pl-10">Recent Blog Posts</h2>
          <div className="flex flex-wrap gap-10 justify-center">
            {blogs.map((blog) => (
              <a href={blog.link} key={blog.id} className="w-[400px]">
                <BlogCard
                  title={blog.title}
                  description={blog.description}
                  date={blog.date}
                  image={blog.image}
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
