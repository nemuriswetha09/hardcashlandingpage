"use client";

import { Phone, MapPin, Search, Handshake } from "lucide-react";

export default function WhatWeDo() {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-yellow-400" />,
      title: "Connect Customer",
      description: "Outreach via digital & telemode channels ,off-field investigation"
    },
    {
      icon: <MapPin className="w-8 h-8 text-yellow-400" />,
      title: "Track Customer",
      description: "Field agents with highest compliance standards, visit customers on ground"
    },
    {
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      title: "Visit Location",
      description: "Negotiate Debt "
    },
    {
      icon: <Handshake className="w-8 h-8 text-yellow-400" />,
      title: "Collect Debt",
      description: "Negotiations ensuring win-win for stakeholders"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            What We Do
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our proven process ensures optimal results
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-50 transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Connecting Line (Desktop only) */}
        <div className="hidden lg:flex items-center justify-center mt-12">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent relative">
            {steps.map((_, index) => (
              <div
                key={index}
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full"
                style={{ left: `${(index * 33.33) + 16.66}%` }}
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}