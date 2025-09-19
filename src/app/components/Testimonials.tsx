"use client";

import { motion, Variants } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Financial Services",
      feedback:
        "The Hard Cash helped us recover debts faster than expected highly professional and reliable.",
    },
    {
      name: "Priya Sharma",
      company: "XYZ Banking Corp",
      feedback:
        "Outstanding service quality and integrity. They&apos;ve become our trusted partner for debt management.",
    },
    {
      name: "Amit Patel",
      company: "Global NBFC Ltd",
      feedback:
        "Their strategic approach and compliance standards are unmatched. Highly recommend their services.",
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
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

  const itemVariants: Variants = {
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80 text-foreground text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-accent font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="group relative card-bg backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-6 sm:p-8 cursor-pointer overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              />

              {/* Floating particles/glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-accent/20 rounded-full blur-md group-hover:animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent/30 rounded-full blur-md group-hover:animate-pulse delay-300" />
              </div>

              <div className="relative z-10">
                {/* Feedback */}
                <motion.p
                  className="text-gray-500 dark:text-gray-400 mb-4 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-200 transition-colors duration-500"
                  variants={itemVariants}
                >
                  “{t.feedback}”
                </motion.p>

                {/* Name */}
                <motion.h4
                  className="font-semibold text-accent mb-2 text-center"
                  variants={itemVariants}
                >
                  {t.name}
                </motion.h4>

                {/* Company */}
                <motion.p
                  className="text-gray-500 dark:text-gray-400 text-sm text-center"
                  variants={itemVariants}
                >
                  {t.company}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "50%", transition: { duration: 0.4 } }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent mt-12"></div>
    </section>
  );
}
