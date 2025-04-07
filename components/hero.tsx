"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const typedRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Only initialize Typed.js if the element exists
    if (typedRef.current) {
      // Import Typed.js dynamically to avoid SSR issues
      import("typed.js").then(({ default: Typed }) => {
        const typed = new Typed(typedRef.current, {
          strings: [
            "Flutter Developer",
            "Mobile App Engineer",
            "UI/UX Enthusiast",
            "Problem Solver",
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1500,
          loop: true,
        });

        // Clean up the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      });
    }
  }, [isLoaded]); // Re-run when isLoaded changes

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // Fixed floating animation - using proper type for repeatType
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const, // Fixed: Use 'as const' to specify the literal type
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-32 left-10 w-8 h-8 rounded-full border-2 border-blue-400 dark:border-blue-600 hidden md:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-6 h-6 rounded-full bg-cyan-400 dark:bg-cyan-600 hidden md:block"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-32 w-4 h-4 rounded-sm bg-blue-500 dark:bg-blue-400 hidden md:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content Column */}
              <div className="order-2 lg:order-1">
                <motion.div variants={itemVariants} className="mb-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <Code className="w-4 h-4 mr-2" />
                    Flutter Developer
                  </div>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
                >
                  Seniru{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Hasith
                  </span>
                </motion.h1>

                <motion.div variants={itemVariants} className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                    I'm a{" "}
                    <span
                      className="text-blue-600 dark:text-blue-400 ml-2 inline-block min-h-[40px] min-w-[200px]"
                      ref={typedRef}
                    ></span>
                  </h2>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
                >
                  Motivated Computer Science graduate with 1.5 years of
                  experience building scalable iOS and Android apps using
                  Flutter and Firebase. Passionate about creating intuitive and
                  performant mobile experiences.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <a
                    href="/CV/Resume Seniru Hasith.pdf"
                    download="Seniru Hasith CV.pdf"
                  >
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl group transition-all duration-300 transform hover:translate-y-[-3px]"
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Download CV
                    </Button>
                  </a>
                  <a href="#projects">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 rounded-xl group transition-all duration-300 transform hover:translate-y-[-3px]"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      View Projects
                    </Button>
                  </a>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-5"
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:seniruhasith@gmail.com"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-3px]"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>

              {/* Image Column */}
              <div className="order-1 lg:order-2 flex justify-center">
                <motion.div
                  variants={imageVariants}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Main profile image with creative border */}
                  <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-spin-slow"></div>

                    {/* Inner white border */}
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-900"></div>

                    {/* Profile image */}
                    <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                      <img
                        src="/images/balcony.jpeg"
                        alt="Seniru Hasith"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Decorative elements around the profile */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-smartphone"
                    >
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-2 -left-4 w-14 h-14 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Scroll Down
          </span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
