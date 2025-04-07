"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Smartphone,
  Cpu,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "Flutter",
      "Dart",
      "Swift",
      "Objective-C",
      "Kotlin",
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "UI/UX Design Patterns",
      "Push Notifications",
      "Biometric Authentication",
      "State Management",
      "App Performance Optimization",
    ],
  },
  {
    title: "State Management",
    icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ["Bloc", "Provider", "GetX", "Riverpod", "Redux"],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "Firebase (Firestore, FCM, Auth)",
      "RESTful APIs",
      "GraphQL",
      "SQL",
      "MongoDB",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "Azure DevOps",
      "GitLab CI/CD",
      "Fastlane",
      "Xcode",
      "Android Studio",
    ],
  },
  {
    title: "Other Technologies",
    icon: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "JWT",
      "TensorFlow",
      "Machine Learning",
      "React Native",
      "Cloud Services",
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and tools I'm
            proficient in.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
