"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {
  Home,
  Info,
  Briefcase,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("idle");

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "/about-us", icon: Info },
    { name: "Our Services", href: "/services", icon: Briefcase },
    { name: "Blogs", href: "/dropdown/blog/", icon: BookOpen },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Sacramento, California" },
    { icon: Mail, text: "contactus@ksvatechsolutions.com" },
    { icon: Phone, text: "+1 (562) 310-1189" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/ksva-tech-solutions/posts/?feedView=all",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/ksvatechsolutions/",
      icon: Instagram,
      label: "Instagram",
    },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscriptionStatus("loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      console.log("Subscription successful:", response.data);
      setSubscriptionStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscriptionStatus("error");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/ksvn.png"
              alt="WebNova AI Logo"
              width={160}
              height={150}
              className="bg-white rounded-lg p-2"
            />
            <p className="mt-4 text-sm text-blue-200 text-center md:text-left">
              Empowering Business Growth
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center hover:text-blue-300 transition duration-300"
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Contact Us
            </h3>
            {contactInfo.map((item, index) => (
              <p key={index} className="flex items-center mb-2">
                <item.icon className="w-5 h-5 mr-2 text-blue-300" />
                <span>{item.text}</span>
              </p>
            ))}
          </div>

          {/* Social Links and Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <form className="w-full max-w-sm" onSubmit={handleSubscribe}>
              <div className="flex items-center border-b border-blue-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded disabled:opacity-50"
                  type="submit"
                  disabled={subscriptionStatus === "loading"}
                >
                  {subscriptionStatus === "loading"
                    ? "Subscribing..."
                    : "Subscribe"}
                </button>
              </div>
              {subscriptionStatus === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  Subscription successful!
                </p>
              )}
              {subscriptionStatus === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  Subscription failed. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Divider Line and Copyright */}
        <hr className="my-8 border-blue-800" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-blue-200 text-sm">
            © 2024 KSVA Tech AI @ California. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm text-blue-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-blue-200 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
