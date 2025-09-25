"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [displayedText, setDisplayedText] = useState(""); // For typing effect

  const fullText =
    "Debt Management & Recovery Services with Tailored Solutions";

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80); // typing speed
    return () => clearInterval(interval);
  }, []);

  const handleTalkToUs = (e: React.MouseEvent) => {
    e.preventDefault();

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const email = "contact@thehardcash.com";
    const subject = encodeURIComponent("Inquiry about Debt Management Services");
    const body = encodeURIComponent(
      "Hello,\n\nI would like to learn more about your debt management and recovery services.\n\nPlease contact me at your earliest convenience.\n\nThank you!"
    );

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank", "noopener,noreferrer");
    }
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
              src={isDarkMode ? "/img/logo.jpg" : "/img/logolightmode.jpg"}
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
          {/* Main heading with typing effect */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-accent">{displayedText}</span>
            <span className="animate-pulse">|</span>
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
              className={`relative font-semibold py-4 px-10 rounded-xl cursor-pointer text-lg overflow-hidden group
                ${isButtonActive ? "scale-95" : "scale-100"}
                transition-all duration-300 ease-out animate-pulse
              `}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => {
                setIsButtonHovered(false);
                setIsButtonActive(false);
              }}
              onMouseDown={() => setIsButtonActive(true)}
              onMouseUp={() => setIsButtonActive(false)}
              onTouchStart={() => setIsButtonActive(true)}
              onTouchEnd={() => setIsButtonActive(false)}
            >
              {/* Shiny moving background */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 
                           opacity-90 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-x"
              ></span>

              {/* Glow ring effect */}
              <span className="absolute inset-0 rounded-xl border border-amber-400 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.9)] transition duration-500 animate-ping"></span>

              {/* Button text */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                Talk to Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
