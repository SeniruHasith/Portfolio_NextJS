"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Brain,
  BotIcon as Robot,
  Film,
  ArrowRight,
  Home,
  Dumbbell,
  Stethoscope,
  Ticket,
  Sparkles,
  Filter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ReactNode;
  github: string;
  demo: string;
  featured: boolean;
  screenshots: {
    url: string;
    caption: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "Cinemoascope",
    description:
      "Advanced movie success prediction platform using machine learning to analyze and forecast box office performance based on various factors including cast, budget, release timing, and market trends.",
    image: "/images/ss/cinemoascope/3.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "React",
      "Node.js",
    ],
    icon: <Film className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    screenshots: [
      {
        url: "/images/ss/cinemoascope/1.png",
        caption: "Dashboard Overview",
      },
      {
        url: "/images/ss/cinemoascope/2.png",
        caption: "Prediction Analysis",
      },
      {
        url: "/images/ss/cinemoascope/3.png",
        caption: "Data Visualization",
      },
      {
        url: "/images/ss/cinemoascope/4.png",
        caption: "Feature Analysis",
      },
      {
        url: "/images/ss/cinemoascope/5.png",
        caption: "Model Performance",
      },
      {
        url: "/images/ss/cinemoascope/6.png",
        caption: "Detailed Statistics",
      },
      {
        url: "/images/ss/cinemoascope/7.png",
        caption: "Advanced Analytics",
      },
      {
        url: "/images/ss/cinemoascope/8.png",
        caption: "Historical Data",
      },
      {
        url: "/images/ss/cinemoascope/9.png",
        caption: "Prediction Results",
      },
    ],
  },
  {
    title: "Emergency Call Stress Analysis",
    description:
      "Mobile application that utilizes AI to analyze stress levels in emergency calls, helping prioritize response times and improve emergency service efficiency.",
    image: "/images/ss/stressapp/1.png",
    technologies: ["Flutter", "Firebase", "TensorFlow", "Dart"],
    icon: <Brain className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    screenshots: [
      {
        url: "/images/ss/stressapp/1.png",
        caption: "Main Dashboard",
      },
      {
        url: "/images/ss/stressapp/2.png",
        caption: "Stress Analysis Interface",
      },
      {
        url: "/images/ss/stressapp/3.png",
        caption: "Call Management",
      },
      {
        url: "/images/ss/stressapp/4.png",
        caption: "Analytics Dashboard",
      },
    ],
  },
  {
    title: "Helafix",
    description:
      "Comprehensive home service application connecting users with professional service providers for various household needs and maintenance services.",
    image: "/images/ss/helafix/1.png",
    technologies: ["React Native", "Node.js", "MongoDB", "Express"],
    icon: <Home className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    screenshots: [
      {
        url: "/images/ss/helafix/1.png",
        caption: "Home Screen",
      },
      {
        url: "/images/ss/helafix/2.png",
        caption: "Service Categories",
      },
      {
        url: "/images/ss/helafix/3.png",
        caption: "Service Provider Profile",
      },
      {
        url: "/images/ss/helafix/4.png",
        caption: "Booking Interface",
      },
      {
        url: "/images/ss/helafix/5.png",
        caption: "Service History",
      },
    ],
  },
  {
    title: "MartialMind",
    description:
      "Smart fitness application that creates personalized meal and exercise plans based on user inputs, helping achieve fitness goals through tailored macro-nutrient recommendations.",
    image: "/images/ss/excesice/3.jpeg",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "Node.js"],
    icon: <Dumbbell className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    screenshots: [
      {
        url: "/images/ss/excesice/1.jpeg",
        caption: "Dashboard",
      },
      {
        url: "/images/ss/excesice/2.jpeg",
        caption: "Meal Planning",
      },
      {
        url: "/images/ss/excesice/3.jpeg",
        caption: "Exercise Plans",
      },
      {
        url: "/images/ss/excesice/4.jpeg",
        caption: "Macro Calculator",
      },
      {
        url: "/images/ss/excesice/5.jpeg",
        caption: "Progress Tracking",
      },
      {
        url: "/images/ss/excesice/6.jpeg",
        caption: "Workout Library",
      },
      {
        url: "/images/ss/excesice/7.jpeg",
        caption: "Nutrition Guide",
      },
    ],
  },
  {
    title: "Limdent",
    description:
      "Modern web application for a dental surgical practice, providing comprehensive information about services, team members, and enabling online appointment booking.",
    image: "/images/ss/dental/1.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    icon: <Stethoscope className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    screenshots: [
      {
        url: "/images/ss/dental/1.png",
        caption: "Homepage",
      },
      {
        url: "/images/ss/dental/2.png",
        caption: "About Us",
      },
      {
        url: "/images/ss/dental/3.png",
        caption: "Our Services",
      },
      {
        url: "/images/ss/dental/4.png",
        caption: "Our Team",
      },
      {
        url: "/images/ss/dental/5.png",
        caption: "Clinic Gallery",
      },
      {
        url: "/images/ss/dental/6.png",
        caption: "Smile Gallery",
      },
      {
        url: "/images/ss/dental/7.png",
        caption: "Contact Us",
      },
    ],
  },
  {
    title: "Tixy",
    description:
      "Versatile ticket booking platform for events, movies, and reservations, providing a seamless booking experience with multiple payment options and digital ticket management.",
    image: "/images/ss/tixy/1.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    icon: <Ticket className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    screenshots: [
      {
        url: "/images/ss/tixy/1.png",
        caption: "Homepage",
      },
      {
        url: "/images/ss/tixy/2.png",
        caption: "Event Listings",
      },
      {
        url: "/images/ss/tixy/3.png",
        caption: "Booking Interface",
      },
      {
        url: "/images/ss/tixy/4.png",
        caption: "Seat Selection",
      },
      {
        url: "/images/ss/tixy/5.png",
        caption: "Payment Process",
      },
      {
        url: "/images/ss/tixy/6.png",
        caption: "Ticket Management",
      },
      {
        url: "/images/ss/tixy/7.png",
        caption: "User Dashboard",
      },
      {
        url: "/images/ss/tixy/8.png",
        caption: "Event Details",
      },
    ],
  },
  {
    title: "Dreamcatcher",
    description:
      "Interactive web application showcasing creative content and digital experiences with a modern, responsive design.",
    image: "/images/ss/clientsite/1.png",
    technologies: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    icon: <Sparkles className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    screenshots: [
      {
        url: "/images/ss/clientsite/1.png",
        caption: "Landing Page",
      },
      {
        url: "/images/ss/clientsite/2.png",
        caption: "Portfolio Gallery",
      },
      {
        url: "/images/ss/clientsite/3.png",
        caption: "Interactive Experience",
      },
      {
        url: "/images/ss/clientsite/4.png",
        caption: "Project Showcase",
      },
      {
        url: "/images/ss/clientsite/5.png",
        caption: "About Section",
      },
      {
        url: "/images/ss/clientsite/6.png",
        caption: "Contact Page",
      },
    ],
  },
];

// Add categories based on technologies
const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Machine Learning",
  "Healthcare",
  "Fitness",
  "Entertainment",
];

const getProjectCategory = (technologies: string[]) => {
  if (technologies.includes("Flutter") || technologies.includes("React Native"))
    return "Mobile Development";
  if (
    technologies.includes("Machine Learning") ||
    technologies.includes("TensorFlow")
  )
    return "Machine Learning";
  if (technologies.includes("Next.js") || technologies.includes("React"))
    return "Web Development";
  // Add more category logic based on technologies
  return "Other";
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => {
            const category = getProjectCategory(project.technologies);
            return category === selectedCategory;
          });
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold mb-2 block">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated selection of my recent work and personal projects,
            showcasing my passion for innovation and problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Filter by Category:
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`rounded-full ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "hover:bg-blue-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded ${
                isGridView
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded ${
                !isGridView
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + (isGridView ? "grid" : "list")}
            className={`grid gap-8 ${
              isGridView
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={isGridView ? "" : "col-span-full"}
              >
                <Card className="group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div
                    className={`relative ${
                      isGridView ? "h-72" : "h-96"
                    } overflow-hidden`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes={isGridView ? "33vw" : "100vw"}
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundColor: "rgb(17 24 39)" }}
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          {project.github && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                              >
                                <Github className="w-4 h-4" />
                                <span>View Code</span>
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button
                              size="sm"
                              className="bg-blue-600/90 hover:bg-blue-700/90 backdrop-blur-sm text-white"
                              asChild
                            >
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent
                    className={`p-6 ${
                      !isGridView && "md:flex md:items-start md:space-x-6"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center shrink-0 ${
                        !isGridView ? "mb-0" : "mb-4"
                      }`}
                    >
                      {project.icon}
                    </div>
                    <div className={!isGridView ? "flex-1" : ""}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p
                        className={`text-gray-600 dark:text-gray-400 mt-2 ${
                          isGridView ? "line-clamp-3" : ""
                        }`}
                      >
                        {project.description}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto font-medium"
                        asChild
                      >
                        <Link
                          href={`/project/${project.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="flex items-center"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects match the selected category. Try selecting a different
              category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
