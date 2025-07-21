import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Seniru Hasith | Flutter Developer & Mobile App Engineer",
  description:
    "Portfolio of Seniru Hasith Goonathialake, Flutter Developer and Mobile App Engineer",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
