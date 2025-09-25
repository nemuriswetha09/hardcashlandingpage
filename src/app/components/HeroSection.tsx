"use client";

import { Typewriter } from "react-simple-typewriter";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const fullText =
    "Debt Management & Recovery Services with Tailored Solutions";

  // Detect theme
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
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleTalkToUs = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
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
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 py-4 md:py-16 overflow-hidden bg-[rgb(var(--background-rgb))]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: "var(--hero-overlay-opacity)" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
            <Image
              src={isDarkMode ? "/img/logo.jpg" : "/img/logolightmode.jpg"}
              alt="The Hard Cash Logo"
              width={700}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:text-left text-foreground mt-2 lg:mt-0">
          {/* Main heading */}
         <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
  <span className="text-amber-300">
    <Typewriter
      words={[
        "Debt Management & Recovery Services with Tailored Solutions",
        "Empowering Your Financial Journey with Sustainable Solutions",
      ]}
      loop={true}            // keeps shuffling infinitely
      cursor
      cursorStyle="|"
      typeSpeed={50}         // typing speed
      deleteSpeed={30}       // deleting speed
      delaySpeed={2000}      // pause between sentences
    />
  </span>
</h2>


          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-400 dark:text-gray-300 mb-6 lg:mb-10 leading-relaxed">
            Helping businesses and individuals recover outstanding debts with
            integrity, strategy, and proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
            <button
              onClick={handleTalkToUs}
              className={`relative font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-xl cursor-pointer text-base sm:text-lg overflow-hidden group
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
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 opacity-90 group-hover:opacity-100 blur-sm transition duration-500 animate-gradient-x"></span>
              <span className="absolute inset-0 rounded-xl border border-amber-400 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.9)] transition duration-500 animate-ping"></span>
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