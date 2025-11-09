"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";

const Skills = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
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
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-accent-gray max-w-2xl mx-auto">
              多年累積的專業技能，橫跨產品管理、Web3 技術與商業運營
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="bg-background/80 backdrop-blur-sm border border-primary-cyan/20 rounded-xl p-6 hover:border-primary-cyan/50 transition-all duration-300"
              >
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-primary-cyan mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-cyber"></span>
                  {category.category}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      {/* Skill Name & Level */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-accent-silver font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-cyan font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-0 h-full bg-gradient-cyber rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
