"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ExternalLink,
  Code,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Trainee Software Engineer (Flutter Developer)",
    company: "Hitachi Digital Payment Solution",
    period: "2023–2024",
    description:
      "Developed and maintained mobile applications using Flutter, focusing on state management, API integration, and modern CI/CD pipelines.",
    achievements: [
      "Implemented CI/CD pipeline reducing deployment time by 40%",
      "Integrated Firebase services across multiple applications",
      "Optimized app performance improving load time by 30%",
    ],
    projects: [
      "WePay Mobile Application - Implemented new features and optimized performance",
      "CenteMobile - Integrated Firebase services and implemented push notifications",
      "Retail Banking Application - Developed UI components and implemented biometric authentication",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "GitLab CI/CD", "Fastlane"],
    color: "blue",
  },
  {
    title: "Software Engineer Intern",
    company: "Hitachi Digital Payment Solution",
    period: "2023",
    description:
      "Assisted in the development of mobile applications, focusing on UI implementation and bug fixing.",
    achievements: [
      "Contributed to 15+ UI components for the company component library",
      "Fixed 30+ bugs improving app stability",
      "Participated in code reviews and team meetings",
    ],
    projects: [
      "WePay - Contributed to UI development and implemented minor features",
      "CenteMobile - Assisted in testing and debugging",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Git"],
    color: "cyan",
  },
  {
    title: "Freelance Mobile Developer",
    company: "Upwork & Fiverr",
    period: "2022",
    description:
      "Developed custom mobile applications for clients worldwide, specializing in Flutter development for iOS and Android platforms.",
    achievements: [
      "Maintained 5-star rating across 15+ projects",
      "Delivered projects for clients in 8+ countries",
      "Specialized in e-commerce and social media applications",
    ],
    projects: [
      "E-commerce mobile app with payment integration",
      "Social media application with real-time messaging",
      "Fitness tracking application with health metrics",
    ],
    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
      "REST APIs",
      "Payment Gateways",
    ],
    color: "green",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and responsibilities in the tech industry.
          </p>
        </motion.div>

        <motion.div style={{ opacity, y }} className="relative">
          {/* Timeline tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-2 md:space-x-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeTab === index
                      ? `bg-${exp.color}-600 text-white shadow-lg shadow-${exp.color}-200 dark:shadow-${exp.color}-900/20 scale-105`
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="flex items-center">
                    <Briefcase
                      className={`w-4 h-4 ${
                        activeTab === index
                          ? "text-white"
                          : `text-${exp.color}-500`
                      } mr-2`}
                    />
                    {exp.company}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline visualization */}
          <div className="relative flex justify-center mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between w-full max-w-3xl">
              {experiences.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`relative z-10 ${
                    index === activeTab ? "scale-125" : ""
                  } transition-transform duration-300`}
                >
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-6 h-6 rounded-full border-2 ${
                      index === activeTab
                        ? `bg-${experiences[index].color}-600 border-${experiences[index].color}-600`
                        : index < activeTab
                        ? `bg-${experiences[index].color}-600 border-${experiences[index].color}-600`
                        : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {index < activeTab && (
                      <CheckCircle2 className="w-full h-full text-white p-0.5" />
                    )}
                  </button>
                  {index === activeTab && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
                      {experiences[index].period}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience details */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left column - Job details */}
            <motion.div
              key={`details-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-t-4 border-blue-600 dark:border-blue-500 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${experiences[activeTab].color}-500/10 rounded-full -mr-16 -mt-16 z-0`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-24 h-24 bg-${experiences[activeTab].color}-500/10 rounded-full -ml-12 -mb-12 z-0`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${experiences[activeTab].color}-100 dark:bg-${experiences[activeTab].color}-900/30 flex items-center justify-center mr-4`}
                  >
                    <Briefcase
                      className={`w-6 h-6 text-${experiences[activeTab].color}-600 dark:text-${experiences[activeTab].color}-400`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experiences[activeTab].title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="font-medium">
                        {experiences[activeTab].company}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experiences[activeTab].period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {experiences[activeTab].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Award
                      className={`w-5 h-5 text-${experiences[activeTab].color}-600 dark:text-${experiences[activeTab].color}-400 mr-2`}
                    />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experiences[activeTab].achievements.map(
                      (achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight
                            className={`w-4 h-4 text-${experiences[activeTab].color}-600 dark:text-${experiences[activeTab].color}-400 mt-1 mr-2 flex-shrink-0`}
                          />
                          <span className="text-gray-700 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experiences[activeTab].technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={`text-${experiences[activeTab].color}-700 dark:text-${experiences[activeTab].color}-300 border-${experiences[activeTab].color}-200 dark:border-${experiences[activeTab].color}-800`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right column - Projects */}
            <motion.div
              key={`projects-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-t-4 border-cyan-500 dark:border-cyan-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code
                    className={`w-5 h-5 text-${experiences[activeTab].color}-600 dark:text-${experiences[activeTab].color}-400 mr-2`}
                  />
                  Projects
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {experiences[activeTab].projects.map((project, i) => {
                    const [title, description] = project.split(" - ");
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className={`bg-${experiences[activeTab].color}-50 dark:bg-gray-700/50 p-5 rounded-xl border border-${experiences[activeTab].color}-100 dark:border-gray-800/25 hover:shadow-md transition-shadow`}
                      >
                        <h5
                          className={`font-semibold text-${experiences[activeTab].color}-700 dark:text-${experiences[activeTab].color}-300 mb-2`}
                        >
                          {title}
                        </h5>
                        {description && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {description}
                          </p>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <ExternalLink className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                    Want to work together?
                  </h4>
                  <button
                    className={`px-4 py-2 rounded-full bg-${experiences[activeTab].color}-600 hover:bg-${experiences[activeTab].color}-700 text-white text-sm font-medium transition-colors`}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
