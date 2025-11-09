"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "@/data/content";
import { Award, ExternalLink } from "lucide-react";

const Achievements = () => {
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
    <section id="achievements" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              <span className="text-primary-black">競賽成就</span>
            </h2>
            <div className="w-20 h-1 bg-primary-black mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-primary-gray max-w-2xl mx-auto">
              iOS 開發與區塊鏈領域的競賽獎項與榮譽
            </p>
          </motion.div>

          {/* Achievements by Category */}
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-4"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary-black" />
                <h3 className="text-2xl font-bold text-primary-black">
                  {category.category}
                </h3>
              </div>

              {/* Awards Table */}
              <div className="bg-white rounded-xl border border-accent-medium overflow-hidden">
                <div className="divide-y divide-accent-medium">
                  {category.awards.map((award, awardIndex) => (
                    <motion.div
                      key={awardIndex}
                      variants={itemVariants}
                      className="p-6 sm:p-8 hover:bg-accent-light/50 transition-colors duration-200"
                    >
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 text-sm font-bold bg-primary-black text-white rounded-full">
                              {award.title}
                            </span>
                            <span className="text-sm text-primary-gray">
                              {award.year}
                            </span>
                          </div>
                          <h4 className="text-xl font-semibold text-primary-dark">
                            {award.competition}
                          </h4>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-primary-gray">
                            {award.location}
                          </span>
                          {award.link && (
                            <a
                              href={award.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-black hover:text-primary-dark transition-colors"
                              aria-label="View details"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
