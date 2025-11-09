"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import { about } from "@/data/content";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: about.highlights[0],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: about.highlights[1],
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: about.highlights[2],
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="text-primary-black">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-black mx-auto rounded-full"></div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-6 text-center max-w-3xl mx-auto">
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-primary-gray leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white border border-accent-medium rounded-xl p-6 hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center text-primary-black">
                    {highlight.icon}
                  </div>
                  <p className="text-primary-dark leading-relaxed pt-2">
                    {highlight.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
