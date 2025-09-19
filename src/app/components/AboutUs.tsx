"use client";

import { Lightbulb, TrendingUp, Zap, Headphones } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Lightbulb className="w-10 h-10 text-accent" />,
      title: "Tailored Solutions",
      description: "Every case is unique, solutions are tailored",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-accent" />,
      title: "Improving 24/7",
      description: "Continuous training & upgrading",
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      title: "Rapid Solutions",
      description: "Speedy debt collection with high integrity",
    },
    {
      icon: <Headphones className="w-10 h-10 text-accent" />,
      title: "Top-Notch Support",
      description: "Partnering with you throughout recovery",
    },
  ];

  // Corrected animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      } as const, // Ensuring TypeScript recognizes the transition object
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      } as const,
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      } as const,
    },
  };

  if (!mounted) return null;

  return (
    <section className="hero-section text-foreground min-h-screen flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-accent font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About The Hard Cash
          </motion.h1>
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="text-gray-400 dark:text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The Hard Cash offers professional debt management and recovery
              services using a fully integrated collections system. Trusted by
              major banks & NBFCs, we combine integrity with innovative
              strategies to minimize delinquency rates and maximize recovery.
            </motion.p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative card-bg backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>

              {/* Floating particles/glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-accent/20 rounded-full blur-md group-hover:animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent/30 rounded-full blur-md group-hover:animate-pulse delay-300"></div>
              </div>

              <div className="relative z-10">
                {/* Icon with animation */}
                <motion.div
                  className="mb-6 flex justify-center lg:justify-start"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 shadow-md group-hover:shadow-lg group-hover:shadow-accent/20">
                    {feature.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-xl font-bold mb-3 text-center lg:text-left text-foreground group-hover:text-accent transition-colors duration-500"
                  variants={itemVariants}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-400 dark:text-gray-300 text-sm sm:text-base text-center lg:text-left leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-200 transition-colors duration-500"
                  variants={itemVariants}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Bottom accent line with animation */}
              <motion.div
                className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                initial={{ width: 0 }}
                whileHover={{ width: "50%", transition: { duration: 0.4 } }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
