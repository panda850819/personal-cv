"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/content";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-primary-black p-1">
              <div className="w-full h-full rounded-full bg-accent-light flex items-center justify-center text-6xl sm:text-7xl">
                🐼
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold font-grotesk"
          >
            我是{" "}
            <span className="text-primary-black">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl text-primary-gray font-medium"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-16 flex items-center justify-center"
          >
            <p className="text-xl sm:text-2xl text-primary-dark font-grotesk">
              {typedText}
              {!isTypingComplete && (
                <span className="inline-block w-0.5 h-6 bg-primary-black ml-1 animate-pulse"></span>
              )}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary-black text-white font-bold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg"
            >
              探索我的作品
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-black text-primary-black font-bold rounded-lg hover:bg-primary-black hover:text-white transition-all duration-300"
            >
              聯絡我
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-primary-gray hover:text-primary-black transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
