"use client";
import { motion, Variants } from "framer-motion";
import { Phone, MapPin, Search, Handshake } from "lucide-react";

export default function WhatWeDo() {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-accent" />,
      title: "Connect Customer",
      description:
        "Outreach via digital & telemode channels, off-field investigation",
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Track Customer",
      description:
        "Field agents with highest compliance standards, visit customers on ground",
    },
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "Visit Location",
      description: "Negotiate Debt",
    },
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: "Collect Debt",
      description: "Negotiations ensuring win-win for stakeholders",
    },
  ];

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

  const cardVariants: Variants = {
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
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section   id="what-we-do" className="w-full py-20 bg-gradient-to-b from-background to-background/80 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-accent font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
            What We Do
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Our proven process ensures optimal results
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative card-bg backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Floating particles/glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-accent/20 rounded-full blur-md group-hover:animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent/30 rounded-full blur-md group-hover:animate-pulse delay-300" />
              </div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 shadow-md group-hover:shadow-lg group-hover:shadow-accent/20">
                    {step.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-500">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-200 transition-colors duration-500">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                initial={{ width: 0 }}
                whileHover={{ width: "50%", transition: { duration: 0.4 } }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting Line (Desktop only) */}
        <div className="hidden lg:block mt-12">
          <div className="relative w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent">
            {steps.slice(0, 3).map((_, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent rounded-full"
                style={{ left: `${index * 33.33 + 16.66}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.5 + index * 0.2,
                }}
              >
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
              </motion.div>
            ))}
            <motion.svg
              className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="16.66%"
                x2="83.33%"
                y1="50%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                variants={lineVariants}
              />
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "transparent" }} />
                  <stop offset="50%" style={{ stopColor: "#3b82f6" }} />
                  <stop offset="100%" style={{ stopColor: "transparent" }} />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
}