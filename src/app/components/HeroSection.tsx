"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleTalkToUs = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const email = "contact@thehardcash.com";
    const subject = encodeURIComponent("Inquiry about Debt Management Services");
    const body = encodeURIComponent(
      "Hello,\n\nI would like to learn more about your debt management and recovery services.\n\nPlease contact me at your earliest convenience.\n\nThank you!"
    );

    if (isMobile) {
      // For mobile, use standard mailto
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
      // For desktop, use direct Gmail link to avoid account selection
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
    setIsButtonActive(false);
  };

  const handleMouseDown = () => {
    setIsButtonActive(true);
  };

  const handleMouseUp = () => {
    setIsButtonActive(false);
  };

  const handleTouchStart = () => {
    setIsButtonActive(true);
  };

  const handleTouchEnd = () => {
    setIsButtonActive(false);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-8 md:py-16 overflow-hidden bg-[rgb(var(--background-rgb))]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: "var(--hero-overlay-opacity)" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[500px] lg:max-w-[600px]">
            <Image
              src="/img/logo.png"
              alt="The Hard Cash Logo"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:text-left text-foreground">
          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Debt Management &<br />
            <span className="text-accent">
              Recovery Services with Tailored Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 dark:text-gray-300 mb-8 lg:mb-12 leading-relaxed">
            Helping businesses and individuals recover outstanding debts with
            integrity, strategy, and proven results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
            <button
              onClick={handleTalkToUs}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`relative border-2 border-accent font-semibold py-4 px-8 rounded-lg transition-all duration-200 cursor-pointer text-lg
                ${
                  isButtonActive 
                    ? 'bg-amber-500 text-black shadow-inner' 
                    : isButtonHovered 
                    ? 'bg-black text-accent shadow-lg' 
                    : 'bg-black text-accent'
                }
                hover:bg-black hover:text-accent hover:shadow-lg
                active:bg-amber-500 active:text-black active:shadow-inner
                focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50
                transform transition-all duration-200 ease-in-out
              `}
            >
              <span className="relative z-10 transition-colors duration-200">
                Talk to Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}