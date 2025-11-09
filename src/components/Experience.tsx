"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/content";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="text-primary-black">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary-black mx-auto rounded-full"></div>
          </motion.div>

          {/* Experience Table */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-accent-medium overflow-hidden">
            <div className="divide-y divide-accent-medium">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 sm:p-8 hover:bg-accent-light/50 transition-colors duration-200"
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-black mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-primary-dark font-semibold">
                        {exp.position}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-primary-gray">
                      <span className="font-medium">{exp.period}</span>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-primary-gray mb-4">{exp.description}</p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-primary-dark flex items-start gap-2 text-sm"
                        >
                          <span className="text-primary-black mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-accent-light text-primary-black rounded-full border border-accent-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
