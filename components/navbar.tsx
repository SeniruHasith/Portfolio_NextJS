"use client";

import { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  FolderKanban,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { title: "Home", href: "#home", icon: Home },
  { title: "About", href: "#about", icon: User },
  { title: "Skills", href: "#skills", icon: Code },
  { title: "Experience", href: "#experience", icon: Briefcase },
  { title: "Projects", href: "#projects", icon: FolderKanban },
  { title: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { title: "Contact", href: "#contact", icon: Mail },
];

// Animation variants for the text expansion
const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "auto",
    opacity: 1,
    transition: { delay: 0.05, duration: 0.2, ease: "easeOut" },
  },
  exit: { width: 0, opacity: 0, transition: { duration: 0.1, ease: "easeIn" } },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicks outside to deselect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Prevent hydration mismatch by not rendering theme-dependent elements until mounted
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          >
            Seniru.dev
          </a>
          <div className="opacity-0">Loading...</div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Seniru.dev
        </a>

        {/* Desktop Navigation */}
        <div
          ref={containerRef}
          className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 dark:bg-black/70 dark:border-slate-700 p-1 shadow-md backdrop-blur-sm"
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selected === index;

            return (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(index);
                  setTimeout(() => {
                    window.location.href = item.href;
                  }, 200);
                }}
                className={`relative z-10 flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none 
                  ${
                    isSelected
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
                  }
                `}
              >
                {/* The animated pill background */}
                {isSelected && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 z-0 rounded-full bg-white dark:bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 shadow-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}

                {/* Icon and Text */}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.span
                        variants={spanVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="overflow-hidden whitespace-nowrap"
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </a>
            );
          })}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-900 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-950 shadow-lg md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.title}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5 text-yellow-400 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 text-blue-600 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
