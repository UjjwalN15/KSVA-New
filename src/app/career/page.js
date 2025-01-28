"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Search, CheckCircle, Paintbrush, Globe, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Sacramento",
      type: "Full-time",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Kathmandu",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Sacramento",
      type: "Full-time",
    },
    {
      title: "Technical Writer",
      department: "Documentation",
      location: "Kathmandu",
      type: "Part-time",
    },
  ];

  const reasons = [
    "Cutting-edge technology stack",
    "Professional growth opportunities",
    "Collaborative work environment",
    "Competitive compensation and benefits",
    "Work-life balance",
    "Global client exposure",
  ];

  const testimonials = [
    {
      name: "Prasanna Wagle",
      role: "Senior Software Engineer",
      quote:
        "Working here has been an incredible journey of growth and innovation. The collaborative environment and challenging projects have helped me become a better engineer.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sofiya Pandey",
      role: "UX Designer",
      quote:
        "Our company values creativity and user-centric design. I've had the opportunity to work on diverse projects and make a real impact on our clients' products.",
      image: "/sofiya.jpg?height=100&width=100",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section with simplified design */}
        <motion.section
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
                variants={fadeInUp}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Build Your <span className="text-yellow-400">Career</span> in
                  Tech with Us
                </h1>
                <p className="text-xl mb-8 text-blue-100 max-w-lg mx-auto md:mx-0">
                  Join our innovative team and shape the future of technology
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-50"
                >
                  Explore Opportunities
                </Button>
              </motion.div>
              <motion.div className="md:w-1/2" variants={fadeInUp}>
                <Image
                  src="/career.avif?height=400&width=600"
                  alt="Team collaboration"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Job Listings Section */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Open Positions
            </motion.h2>
            <motion.div
              className="mb-8 flex justify-center px-4 md:px-0"
              variants={fadeInUp}
            >
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={fadeInUp}
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-blue-700">
                        {job.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-2">
                        <Paintbrush className="h-4 w-4 mr-2 text-gray-500" />
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      <div className="flex items-center mb-2">
                        <Globe className="h-4 w-4 mr-2 text-gray-500" />
                        <p className="text-gray-600">{job.location}</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <p className="text-gray-600">{job.type}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Join Us Section */}
        <motion.section
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Why Join Our Team?
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={fadeInUp}
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Culture Section */}
        <motion.section
          className="py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Our Culture
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={fadeInUp}>
                <p className="text-lg text-gray-700">
                  At our company, we foster a culture of innovation,
                  collaboration, and continuous learning. We believe in
                  empowering our employees to take ownership of their work and
                  make a real impact.
                </p>
                <p className="text-lg text-gray-700">
                  Our diverse and inclusive environment encourages creativity
                  and out-of-the-box thinking. We celebrate our successes
                  together and learn from our challenges as a team.
                </p>
                <p className="text-lg text-gray-700">
                  Join us in creating cutting-edge solutions that shape the
                  future of technology while growing both personally and
                  professionally.
                </p>
              </motion.div>
              <motion.div
                className="relative h-96 rounded-lg overflow-hidden"
                variants={fadeInUp}
              >
                <Image
                  src="/culture.jpg?height=600&width=800"
                  alt="Our team collaborating"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-20 bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              What Our Team Says
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              variants={fadeInUp}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-md"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full mb-4 md:mb-0 md:mr-4"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-center md:text-left">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
