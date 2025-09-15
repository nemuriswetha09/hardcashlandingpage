"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mt-16 justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzNzM3MzciIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* The Hard Cash with spacing */}
        <div className="mb-8">
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 tracking-wide">
            The Hard Cash
          </h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12">
            Lets collect ..
          </p> */}
        </div>

        {/* Debt Management with spacing */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
           Debt Management &<br />
            Recovery Services
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Helping businesses and individuals recover outstanding debts with integrity,
            strategy, and proven results.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          
          
          <button className="group relative border-2 border-yellow-500 text-yellow-400 font-semibold py-4 px-8 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center min-w-[200px]">
            <Phone className="mr-2 w-5 h-5" />
            <span>Talk to Us</span>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex flex-col items-center">
         
          
        </div>
      </div>

      {/* Decorative Elements */}
     
    </section>
  );
}