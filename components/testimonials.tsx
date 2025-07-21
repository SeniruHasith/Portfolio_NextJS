"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

function Testimonials() {
  const testimonials = [
    {
      name: "Hirantha Keerthisena",
      title: "Senior Software Engineer (UI/UX Focus)",
      text: "I have had the pleasure of working closely with Seniru Goonathilake for 1 year. He is an exceptionally talented Software Engineer, whose technical expertise and dedication consistently impressed me.",
      image: "/images/testimonials/hirantha.jpg",
      date: "April 18, 2024",
      relationship: "Worked with Seniru on the same team",
      linkedInProfile: "https://www.linkedin.com/in/hirantha-keerthisena/",
    },
    {
      name: "Vinodya Wickramarathna",
      title: "QA Engineer | Certified Tester (ISTQB® CTFL)",
      text: "I have had the pleasure of working closely with Seniru on a recent project at Hitachi, and I can confidently say that he is an exceptional individual with outstanding skills and qualities. He is dedicated to his work, easy to work with, a good listener, and always works hard to complete tasks in the best possible way.\n\nOn a personal level, he is approachable, collaborative, and possesses excellent interpersonal skills. His ability to build strong relationships, foster a positive work environment, and be a dedicated person made the project a success.",
      image: "/images/testimonials/vinodya.jpg",
      date: "April 6, 2024",
      relationship: "Worked with Seniru on the same team",
      linkedInProfile: "https://www.linkedin.com/in/vinodya-wickramarathna/",
    },
    {
      name: "Praneeth Seneviratne",
      title: "Student at Informatics Institute of Technology",
      text: "Seniru is an excellent Software Engineer. He has very good interpersonal skills and is a good listener, quickly absorbing new development concepts. He takes responsibility and ensures timely delivery, even working extra hours to meet deadlines.\n\nHe quickly aligns with project leads and consistently stays on the right path. He is hardworking and more mature in terms of development skills compared to his peers. Seniru works well with the team and is highly recommended by all our project managers and technical leads.",
      image: "/images/testimonials/praneeth.jpg",
      date: "April 5, 2024",
      relationship: "Managed Seniru directly",
      linkedInProfile: "https://www.linkedin.com/in/praneeth-seneviratne/",
    },
    {
      name: "Udara Muthunayaka",
      title:
        "Senior Digital Project Manager | Agile Program Leader | Fintech & SaaS Delivery",
      text: "I highly recommend Seniru Goonathilake for his outstanding contributions as a Trainee Software Developer at Hitachi Digital Payment Solutions Ltd. He has demonstrated exceptional skills in Fintech mobile app development and Retail internet banking projects.\n\nSeniru is a dedicated team player, delivering high-quality work and consistently meeting deadlines. His strong technical abilities and collaborative nature make him an invaluable asset to any organization.",
      image: "/images/testimonials/udara.jpg",
      date: "April 5, 2024",
      relationship: "Managed Seniru directly",
      linkedInProfile: "https://www.linkedin.com/in/udara-muthunayaka/",
    },
    {
      name: "Ranushka Sankalpa",
      title: "Software Engineer",
      text: "I had the pleasure of working with Seniru Goonathilake at Hitachi-DPS, where he excelled as a Mobile Development Trainee. Seniru combines a passion for technology with a strong work ethic, quickly learning new skills and applying them to create high-quality mobile applications.\n\nHe's not just technically proficient; he's a team player who enhances projects with his innovative thinking and positive attitude. Seniru is undoubtedly an asset to any team, and I highly recommend him for any mobile development role.",
      image: "/images/testimonials/ranushka.jpg",
      date: "April 5, 2024",
      relationship: "Worked with Seniru on the same team",
      linkedInProfile: "https://www.linkedin.com/in/ranushka-sankalpa/",
    },
  ];

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

  // Fallback for any images not explicitly mapped or if array runs out
  const anonymousFallbackImage =
    "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold mb-2 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            LinkedIn Recommendations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What my colleagues say about me on LinkedIn
          </p>
        </motion.div>

        <motion.div
          className="columns-1 md:columns-2 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 break-inside-avoid-column mb-6"
            >
              <div className="flex items-start mb-6">
                <div className="relative">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden ring-2 ring-[#0A66C2]/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = anonymousFallbackImage;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#0A66C2] rounded-full p-1.5">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div>
                    <a
                      href={testimonial.linkedInProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 dark:text-white hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors"
                    >
                      {testimonial.name}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {testimonial.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.date}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.relationship}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                {/* <Quote className="w-8 h-8 text-gray-200 dark:text-gray-800 absolute -left-1 -top-1" /> */}
                <div className="relative pl-2">
                  {testimonial.text.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
