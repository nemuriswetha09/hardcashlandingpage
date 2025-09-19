"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  CreditCard,
  ShieldCheck,
  FileText,
  Car,
  MapPin,
  Scale,
  BookOpen,
  Calculator,
  Search,
  Map,
  Wallet,
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      title: "B2B Debt Collection",
      description:
        "Recover unpaid invoices from businesses with strategic approaches.",
      expandedContent:
        "Our B2B debt collection service employs a multi-phase approach starting with amicable resolution attempts, escalating to formal demand letters, and if necessary, legal proceedings. We maintain professional relationships while ensuring your business receives what it's owed.",
      icon: Briefcase,
    },
    {
      title: "Credit Score Repair",
      description:
        "Improve low credit scores efficiently with proven methodologies.",
      expandedContent:
        "Our credit repair process includes comprehensive credit report analysis, dispute resolution for inaccurate items, debt validation, and personalized coaching to help you build healthier financial habits. We work with all major credit bureaus to ensure your profile accurately reflects your creditworthiness.",
      icon: CreditCard,
    },
    {
      title: "Credit Risk Management",
      description: "Assess borrower's risk & payment behavior comprehensively.",
      expandedContent:
        "Our risk assessment tools evaluate multiple data points including payment history, outstanding debts, credit utilization patterns, and economic factors. We provide detailed risk scoring and recommendations to protect your financial interests when extending credit.",
      icon: ShieldCheck,
    },
    {
      title: "Enforcement of SARFAESI Act",
      description:
        "Full compliance & enforcement support with legal expertise.",
      expandedContent:
        "Our legal team specializes in SARFAESI Act proceedings, handling everything from issuing demand notices to taking physical possession of secured assets. We ensure full regulatory compliance while expediting the recovery process for financial institutions.",
      icon: FileText,
    },
    {
      title: "Vehicle Loan Recovery",
      description: "Interstate & customized recovery services for auto loans.",
      expandedContent:
        "Our vehicle recovery specialists operate across state lines with proper documentation and authorization. We utilize advanced tracking technology and coordinated efforts with local authorities when necessary to recover assets while maintaining strict adherence to legal protocols.",
      icon: Car,
    },
    {
      title: "Skip Tracing Services",
      description: "Fast, accurate tracking of missing/unresponsive debtors.",
      expandedContent:
        "Our skip tracing methodology combines database searches, public records analysis, social media monitoring, and field investigation to locate individuals who have changed locations without providing forwarding information. We maintain strict compliance with privacy regulations throughout the process.",
      icon: MapPin,
    },
    {
      title: "Legal Collection Services",
      description: "End-to-end legal support for debt recovery processes.",
      expandedContent:
        "Our legal collections team handles the entire process from demand letters to court proceedings. We work with a network of attorneys across jurisdictions to ensure proper legal action is taken while maximizing recovery rates and minimizing legal expenses.",
      icon: Scale,
    },
    {
      title: "Accounts Receivable Services",
      description: "Efficient management of outstanding receivables.",
      expandedContent:
        "We implement customized receivables management strategies including invoice processing, payment tracking, aging report analysis, and customized communication protocols to accelerate collections while maintaining customer relationships.",
      icon: BookOpen,
    },
    {
      title: "Accounting & Bookkeeping",
      description: "Reliable financial record-keeping services.",
      expandedContent:
        "Our accounting professionals provide comprehensive bookkeeping services including accounts payable/receivable management, bank reconciliation, financial statement preparation, and compliance reporting. We utilize cloud-based platforms for real-time financial visibility.",
      icon: Calculator,
    },
    {
      title: "Background Check Services",
      description: "Ensure transparency with professional verification.",
      expandedContent:
        "Our background verification services include criminal record checks, employment history verification, education credential validation, reference checks, and credit history reviews. We provide detailed reports to help you make informed decisions about potential employees, tenants, or business partners.",
      icon: Search,
    },
    {
      title: "Field Tracking System",
      description: "Real-time monitoring and management of field operations.",
      expandedContent:
        "Our field tracking platform provides real-time location monitoring, route optimization, visit verification, and performance analytics. The system includes mobile apps for field agents and a comprehensive dashboard for managers to oversee operations and improve efficiency.",
      icon: Map,
    },
    {
      title: "Payment Pickups",
      description: "Secure and convenient payment collection services.",
      expandedContent:
        "Our trained collection agents follow strict protocols for payment collection including proper identification, receipt issuance, and secure transport of funds. We offer scheduled and on-demand pickup services with real-time tracking and confirmation for complete transparency.",
      icon: Wallet,
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

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="services"
      className="w-full py-24 bg-gradient-to-b from-background to-background/80 text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-accent font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive debt management solutions tailored to your specific
            needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
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
                  {/* Icon */}
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500 shadow-md group-hover:shadow-lg group-hover:shadow-accent/20">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-500"
                    variants={itemVariants}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-500 dark:text-gray-400 mb-4"
                    variants={itemVariants}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    className="pt-4 border-t border-gray-200 dark:border-gray-700"
                    variants={itemVariants}
                  >
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {service.expandedContent}
                    </p>
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: "50%", transition: { duration: 0.4 } }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center bg-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-foreground mb-4">
            Ready to recover your debts?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you with customized debt
            recovery solutions.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-accent text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
