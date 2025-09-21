'use client';

import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Set mounted to true after the component mounts on the client
  useEffect(() => {
    setMounted(true);
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile menu when a link is clicked
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position to scroll to, accounting for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "About Us", id: "about-us" },
    { name: "Our Services", id: "our-services" },
    { name: "What We Do", id: "what-we-do" },
  ];

  return (
    <nav 
      ref={navbarRef}
      className="w-full fixed top-0 left-0 z-50 bg-[rgb(var(--background-rgb))]/90 text-foreground px-4 sm:px-6 py-3 flex items-center justify-between backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      {/* Logo and Brand */}
      <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-accent flex-shrink-0">
        <Image 
          src="/img/thc-gold.png" 
          alt="The Hard Cash Logo" 
          width={32} 
          height={32}
          className="w-8 h-8 object-contain"
        />
        The Hard Cash
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 ml-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative text-foreground hover:text-accent dark:hover:text-accent transition-colors duration-300 font-medium group"
          >
            {item.name}
            {/* Hover underline effect */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile menu button - shown first on mobile */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
        </button>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {/* Only render the icon after mounting */}
          {mounted ? (
            theme === "dark" ? (
              <Sun size={20} className="text-foreground" />
            ) : (
              <Moon size={20} className="text-foreground" />
            )
          ) : (
            // Render a fallback icon during SSR
            <Moon size={20} className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgb(var(--background-rgb))] border-b border-gray-200 dark:border-gray-800 md:hidden shadow-lg">
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-3 px-4 text-foreground hover:text-accent dark:hover:text-accent transition-colors duration-300 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}