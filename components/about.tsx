"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Code, Heart, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, skills, and passions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a passionate Flutter Developer with hands-on experience
              designing and deploying mobile applications. I specialize in state
              management, API integration, and modern CI/CD pipelines,
              delivering high-performance solutions for iOS and Android.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Currently in my final year of BSc in Computer Science, I combine
              academic knowledge with practical experience to create innovative
              mobile solutions. I&apos;m enthusiastic about collaboration and
              building customer-focused apps that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  Seniru Hasith
                </span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  BSc Computer Science
                </span>
              </div>
              <div className="flex items-center">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  Flutter Developer
                </span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  AI & Robotics Enthusiast
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  1.5+ years of professional experience in mobile app
                  development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Projects
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Worked on multiple production-level mobile applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  BSc in Computer Science (Final Year) with top academic
                  achievements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Achievements
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  9th place in Open Hack 2.0 and multiple academic scholarships.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
