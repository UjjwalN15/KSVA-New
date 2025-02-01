"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

const FALLBACK_IMAGE = "/placeholder.svg?height=48&width=48";

const businesses = [
  {
    title: "Permanent Talent",
    description: "Expert guidance for your IT strategy",
    image: "/IT.svg",
  },
  {
    title: "Contract Talent",
    description: "Custom solutions for your business needs",
    image: "/software.svg",
  },
]

const services = [
  {
    title: "IT Consulting",
    description: "Expert guidance for your IT strategy",
    image: "/IT.svg",
  },
  {
    title: "Software Development",
    description: "Custom solutions for your business needs",
    image: "/software.svg",
  },
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud solutions",
    image: "/cloud.svg",
  },
  {
    title: "Cyber Security",
    description: "Protect your digital assets",
    image: "/cyber.svg",
  },
  {
    title: "UGC Creator",
    description: "Create user-generated content for brands",
    image: "/c.svg",
  },
  {
    title: "Influencer Marketing",
    description: "Connect with influencers to promote your brand",
    image: "/mar.svg",
  },
  {
    title: "Business Challenges",
    description: "Get in touch with a consulting solutions professional",
    image: "/mar.svg",
  },
];

const resources = [
  {
    title: "Blog",
    href: "/dropdown/blog",
    description: "Stay updated with our latest insights",
    image: "/blog.svg",
  },
  {
    title: "Case Studies",
    href: "/dropdown/case-studies",
    description: "Real-world examples of our success",
    image: "/case.svg",
  },
  {
    title: "Whitepapers",
    href: "/dropdown/whitepapers",
    description: "In-depth analysis and research",
    image: "/paper.svg",
  },
  {
    title: "FAQ",
    href: "/dropdown/faq",
    description: "Answers to common questions",
    image: "/faq.svg",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-gray-200 bg-white ${inter.className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-64 h-20 flex items-center justify-center">
              <Image
                src="/ksvn.png"
                alt="Logo"
                width={192}
                height={192}
                className=" object-contain"
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="text-base font-medium hover:text-sky-600 transition-colors">
                      Home
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="text-base font-medium hover:text-sky-600 transition-colors">
                      About Us
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="text-base font-medium hover:text-sky-600 transition-colors">
                    Services
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={`/dropdown/${service.title
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <div className="flex items-center">
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={48}
                            height={48}
                            className="mr-3 rounded-md object-cover"
                            onError={(e) => {
                              e.target.src = FALLBACK_IMAGE;
                              e.target.alt = `${service.title} Placeholder`;
                            }}
                          />
                          <span className="text-sm">{service.description}</span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="text-base font-medium hover:text-sky-600 transition-colors">
                    Hire Talent
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {businesses.map((business) => (
                      <ListItem
                        key={business.title}
                        title={business.title}
                        href={`/dropdown/${business.title
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <div className="flex items-center">
                          <Image
                            src={business.image}
                            alt={business.title}
                            width={48}
                            height={48}
                            className="mr-3 rounded-md object-cover"
                            onError={(e) => {
                              e.target.src = FALLBACK_IMAGE;
                              e.target.alt = `${business.title} Placeholder`;
                            }}
                          />
                          <span className="text-sm">{business.description}</span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/hire-talent" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="text-base font-medium hover:text-sky-600 transition-colors">
                      Hire Talent
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/career" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="text-base font-medium hover:text-sky-600 transition-colors">
                      Career
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className="text-base font-medium hover:text-sky-600 transition-colors">
                    Resources
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        <div className="flex items-center">
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            width={48}
                            height={48}
                            className="mr-3 rounded-md object-cover"
                            onError={(e) => {
                              e.target.src = FALLBACK_IMAGE;
                              e.target.alt = `${resource.title} Placeholder`;
                            }}
                          />
                          <span className="text-sm">
                            {resource.description}
                          </span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="/business" passHref>
            <Button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white hover:from-sky-600 hover:to-sky-800 transition-all duration-300 transform hover:scale-105 text-base font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl">
              For Business
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              variant="outline"
              className="text-sky-600 hover:text-sky-700 border-sky-600 hover:border-sky-700 transition-colors text-base font-semibold px-6 py-2 rounded-full"
            >
              Login
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <div>
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
                onClick={() => toggleDropdown("services")}
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="pl-6 space-y-2 mt-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={`/dropdown/${service.title
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/career"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Career
            </Link>
            <div>
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "resources" && (
                <div className="pl-6 space-y-2 mt-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-sky-600 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="space-y-2 mt-4">
              <Link href="/business" passHref>
                <Button className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white hover:from-sky-600 hover:to-sky-800 transition-all duration-300 transform hover:scale-105 text-base font-semibold py-2 rounded-full shadow-lg hover:shadow-xl">
                  For Business
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  variant="outline"
                  className="w-full text-sky-600 hover:text-sky-700 border-sky-600 hover:border-sky-700 transition-colors text-base font-semibold py-2 rounded-full"
                >
                  Login
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-sky-600 hover:text-sky-700 border-sky-600 hover:border-sky-700 transition-colors text-base font-semibold py-2 rounded-full"
                >
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
