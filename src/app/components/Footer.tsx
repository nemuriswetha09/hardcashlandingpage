"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  // Animation variants for container and items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -2,
      color: "#3b82f6", // Matches Tailwind's accent color (e.g., blue-500)
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const dividerVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="w-full py-12 bg-gradient-to-t from-gray-900/10 dark:from-gray-900/30 to-background backdrop-blur-sm text-foreground relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={sectionVariants}
        >
          {/* Company Info */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-semibold text-accent tracking-tight"
              variants={sectionVariants}
            >
              The Hard Cash
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md"
              variants={sectionVariants}
            >
              Delivering professional debt management and recovery services with
              unparalleled integrity and efficiency. Trusted by leading banks
              and financial institutions for tailored debt recovery solutions.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-medium text-accent mb-4 tracking-tight"
              variants={sectionVariants}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-accent transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-accent opacity-0 group-hover:opacity-100"
                      initial={{ width: 0 }}
                      whileHover={{
                        width: "100%",
                        transition: { duration: 0.3 },
                      }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h4
              className="text-lg font-medium text-accent mb-4 tracking-tight"
              variants={sectionVariants}
            >
              Contact
            </motion.h4>
            <ul className="space-y-3">
              {[
                "contact@thehardcash.com",
                "+91 12345 67890",
                "24/7 Support",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="text-gray-600 dark:text-gray-400 text-sm"
                  variants={linkVariants}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 dark:via-gray-600/50 to-transparent mb-8"
          variants={dividerVariants}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={sectionVariants}
        >
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 The Hard Cash. All rights reserved.
          </div>

          <div className="flex space-x-6">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ].map((link, idx) => (
              <motion.div key={idx} variants={linkVariants}>
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-accent transition-colors duration-300 relative group"
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{
                      width: "100%",
                      transition: { duration: 0.3 },
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Credits */}
        <motion.div
          className="max-w-7xl mx-auto text-gray-600 dark:text-gray-400 text-sm text-center"
          variants={sectionVariants}
        >
          Developed by ZenBeta, crafted by Swetha & Abhishek
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-4 right-4 w-2 h-2 bg-accent rounded-full opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent rounded-full opacity-40"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
    </motion.footer>
  );
}
