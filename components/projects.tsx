"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Brain,
  BotIcon as Robot,
  Film,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Next.js Image component

const projects = [
  {
    title: "Movie Success Prediction Model",
    description:
      "Developed a machine learning model to predict movie success based on various factors like budget, cast, genre, and release timing.",
    image: "/placeholder.svg?height=200&width=350",
    technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    icon: <Film className="w-5 h-5" />,
    github: "https://github.com",
    demo: "",
  },
  {
    title: "Emergency Call Stress Analysis App",
    description:
      "Created a Flutter application that analyzes stress levels in emergency calls to prioritize response times.",
    image: "/images/projects/stressmobileapp.jpg",
    technologies: ["Flutter", "Firebase", "TensorFlow", "Dart"],
    icon: <Brain className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "CT to MRI Image Translation",
    description:
      "Implemented a deep learning model that translates CT scan images to MRI images using conditional GANs.",
    image: "/images/projects/mrict.png",
    technologies: ["Python", "PyTorch", "CNNs", "GANs"],
    icon: <Brain className="w-5 h-5" />,
    github: "https://github.com",
    demo: "",
  },
  {
    title: "4-DOF Robotic Arm Simulation",
    description:
      "Designed and implemented a simulation of a 4-DOF robotic arm with inverse kinematics for precise movement control.",
    image: "/images/projects/robot.png",
    technologies: ["Python", "NumPy", "Matplotlib", "ROS"],
    icon: <Robot className="w-5 h-5" />,
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 2} // Prioritize loading the first two images
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
