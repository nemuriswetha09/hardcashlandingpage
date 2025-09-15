import React from "react";
import { Lightbulb, TrendingUp, Zap, Headphones } from "lucide-react";

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
      title: "Tailored Solutions",
      description: "Every case is unique, solutions are tailored",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-yellow-400" />,
      title: "Improving 24/7",
      description: "Continuous training & upgrading",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: "Rapid Solutions",
      description: "Speedy debt collection with high integrity",
    },
    {
      icon: <Headphones className="w-10 h-10 text-yellow-400" />,
      title: "Top-Notch Support",
      description: "Partnering with you throughout recovery",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-amber-300 font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight">
            About The Hard Cash
          </h1>
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              The Hard Cash offers professional debt management and recovery services using a fully 
              integrated collections system. Trusted by major banks & NBFCs, we combine integrity with 
              innovative strategies to minimize delinquency rates and maximize recovery.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="p-2 rounded-lg bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-center lg:text-left text-white group-hover:text-yellow-50 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base text-center lg:text-left leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
