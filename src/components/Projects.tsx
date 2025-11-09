"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";
import { projects } from "@/data/content";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              <span className="text-primary-black">精選專案</span>
            </h2>
            <div className="w-20 h-1 bg-primary-black mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-primary-gray max-w-2xl mx-auto">
              從概念到實現，這些是我參與設計與打造的代表性 Web3 產品
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-accent-medium rounded-xl overflow-hidden hover:shadow-soft-lg transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-accent-light flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Project Name & Link */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-primary-dark group-hover:text-primary-black transition-colors">
                      {project.name}
                    </h3>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-light hover:bg-accent-medium flex items-center justify-center text-primary-black transition-colors"
                        aria-label="Visit project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-primary-gray leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-primary-dark">
                        <CheckCircle className="w-4 h-4 text-primary-black flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-accent-light text-primary-black rounded-full border border-accent-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
