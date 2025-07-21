"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MasonryGallery } from "@/components/ui/masonry-gallery";
import Image from "next/image";
import Link from "next/link";

// Import projects data
import { projects } from "@/components/projects";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project not found
          </h1>
          <Button asChild>
            <Link href="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" className="mb-8" asChild>
            <Link
              href="/#projects"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                  {project.icon}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {project.description}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Main Objective
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        The primary goal was to{" "}
                        {project.description.toLowerCase()}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Target Users
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        This project was designed for researchers, developers,
                        and industry professionals working in the field of{" "}
                        {project.technologies.join(" and ")}.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Development Timeline
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        The project was developed over several months, focusing
                        on robust implementation and thorough testing.
                      </p>
                    </div>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  Project Screenshots
                </h2>
                <div className="mt-6">
                  <MasonryGallery screenshots={project.screenshots} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.github && (
                      <Button className="w-full" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button className="w-full" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
