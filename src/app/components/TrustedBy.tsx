'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function TrustedBy() {
  const banks = [
    { name: "ICICI Bank", logo: "/img/icicibank.jpg" },
    { name: "Moneyview", logo: "/img/moneyview.jpg" },
    { name: "SBI", logo: "/img/SBi.jpg" },
    { name: "Axis Bank", logo: "/img/axis.jpg" },
    { name: "IIFL", logo: "/img/IIFL.jpg" },
    { name: "RBL Bank", logo: "/img/RBL.jpg" },
    { name: "Kissht", logo: "/img/kissht_logo.jpg" },
    { name: "South Indian Bank", logo: "/img/southindianbank.jpg" },
    { name: "Poonawala Fincorp" , logo:"/img/poonawala.jpg"},
    {name: "Home Credit", logo:"/img/homecredit.jpg"},
    {name:"Bajaj Finserv", logo:"/img/bajajfinserv.jpg"},
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
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      
      className="py-20 dark:from-gray-900/30 to-background backdrop-blur-sm text-foreground text-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={sectionVariants} className="mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent tracking-tight mb-6"
            variants={sectionVariants}
          >
            Trusted By Our Esteemed Clients
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed"
            variants={sectionVariants}
          >
            Our commitment to integrity and quality service has earned the trust of leading banks and NBFCs. Partner with us to minimize debt today.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Circular Infinite Scroll */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee">
            <div className="marquee__group">
              {banks.map((bank, idx) => (
                <motion.div
                  key={idx}
                  className="w-48 h-32 flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 mx-4 hover:shadow-lg transition-shadow duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={120}
                    height={80}
                    className="max-h-20 max-w-[120px] object-contain"
                    draggable="false"
                  />
                </motion.div>
              ))}
            </div>

            {/* Duplicate for seamless scroll */}
            <div className="marquee__group" aria-hidden="true">
              {banks.map((bank, idx) => (
                <motion.div
                  key={`dup-${idx}`}
                  className="w-48 h-32 flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 mx-4"
                  variants={cardVariants}
                >
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={120}
                    height={80}
                    className="max-h-20 max-w-[120px] object-contain"
                    draggable="false"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee {
            display: flex;
            width: max-content;
            overflow: hidden;
            position: relative;
          }
          .marquee__group {
            display: flex;
            flex-shrink: 0;
            animation: scroll 25s linear infinite;
          }
          .marquee__group[aria-hidden="true"] {
            position: absolute;
            left: 100%;
            top: 0;
          }
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
          @media (max-width: 640px) {
            .marquee__group {
              animation: scroll 15s linear infinite;
            }
            .w-48 {
              width: 40vw;
              height: 24vw;
            }
            .max-h-20 {
              max-height: 16vw;
            }
            .max-w-[120px] {
              max-width: 32vw;
            }
            .mx-4 {
              margin-left: 1rem;
              margin-right: 1rem;
            }
          }
        `}</style>
      </div>
    </motion.section>
  );
}