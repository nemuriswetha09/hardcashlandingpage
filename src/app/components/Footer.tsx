"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  // Animation variants
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
      color: "#3b82f6",
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

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const email = "contact@thehardcash.com";
    const subject = encodeURIComponent("Inquiry from Website Footer");
    const body = encodeURIComponent(
      "Hello The Hard Cash Team,\n\nI came across your website and would like to learn more about your debt management and recovery services.\n\nPlease contact me at your earliest convenience.\n\nThank you!"
    );

    try {
      if (isMobile) {
        // For mobile, use standard mailto link
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      } else {
        // For desktop, use direct Gmail compose link
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(gmailLink, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      // Fallback: copy email to clipboard
      const email = "contact@thehardcash.com";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          alert(`Email address copied to clipboard: ${email}`);
        }).catch(() => {
          alert(`Please email us at: ${email}`);
        });
      } else {
        alert(`Please email us at: ${email}`);
      }
    }
  };

  const handleEmailMouseEnter = () => {
    setIsEmailHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setIsEmailHovered(false);
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
                { href: "/#about-us", label: "About Us" },
                { href: "/#our-services", label: "Services" },
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
              <motion.li variants={linkVariants}>
                <a
                  href="#"
                  onClick={handleEmailClick}
                  onMouseEnter={handleEmailMouseEnter}
                  onMouseLeave={handleEmailMouseLeave}
                  className={`text-gray-600 dark:text-gray-400 text-sm transition-all duration-300 relative group cursor-pointer ${
                    isEmailHovered ? 'text-accent' : 'hover:text-accent'
                  }`}
                >
                  contact@thehardcash.com
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{
                      width: "100%",
                      transition: { duration: 0.3 },
                    }}
                  />
                  {/* Hover underline effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent"
                    animate={{ width: isEmailHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
              <motion.li
                className="text-gray-600 dark:text-gray-400 text-sm"
                variants={linkVariants}
              >
                24/7 Support
              </motion.li>
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
          className="max-w-7xl mx-auto text-gray-600 dark:text-gray-400 text-sm text-center mt-6"
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