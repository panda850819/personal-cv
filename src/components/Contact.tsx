"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Linkedin, Github, Twitter, BookOpen, Copy, Check } from "lucide-react";
import { socialLinks, footer } from "@/data/content";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const socialIcons = [
    { name: "Email", icon: <Mail className="w-6 h-6" />, link: `mailto:${socialLinks.email}`, color: "hover:text-primary-black" },
    { name: "Telegram", icon: <Send className="w-6 h-6" />, link: socialLinks.telegram, color: "hover:text-primary-black" },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" />, link: socialLinks.twitter, color: "hover:text-primary-black" },
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, link: socialLinks.linkedin, color: "hover:text-primary-black" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, link: socialLinks.github, color: "hover:text-primary-black" },
    { name: "Medium", icon: <BookOpen className="w-6 h-6" />, link: socialLinks.medium, color: "hover:text-primary-black" },
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="text-primary-black">Get In Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary-black mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-primary-gray max-w-2xl mx-auto">
              無論是合作機會、產品諮詢，或只是想聊聊 Web3，都歡迎與我聯繫！
            </p>
          </motion.div>

          {/* Email Display */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-4 bg-white border border-accent-medium rounded-xl px-8 py-4 hover:shadow-soft-lg transition-all duration-300">
              <Mail className="w-6 h-6 text-primary-black" />
              <span className="text-xl font-grotesk text-primary-dark">
                {socialLinks.email}
              </span>
              <button
                onClick={copyEmailToClipboard}
                className="ml-2 p-2 rounded-lg bg-accent-light hover:bg-accent-medium text-primary-black transition-colors"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-3 p-6 bg-white border border-accent-medium rounded-xl ${social.color} transition-all duration-300 hover:shadow-soft-lg`}
                >
                  <div className="text-primary-gray transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium text-primary-gray">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-block px-8 py-4 bg-primary-black text-white font-bold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg text-lg"
            >
              Send Me a Message
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="pt-16 border-t border-accent-medium">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-2xl">
                <span>🐼</span>
                <span className="font-bold text-primary-black">Panda Tseng</span>
              </div>
              <p className="text-primary-gray text-sm">
                {footer.copyright}
              </p>
              <p className="text-primary-gray text-xs">
                {footer.builtWith}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
