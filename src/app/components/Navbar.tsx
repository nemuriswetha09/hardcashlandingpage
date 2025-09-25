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
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
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

  // Enhanced contact handler with Gmail direct link for desktop
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    try {
      if (typeof window !== 'undefined') {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
          // For mobile, use standard mailto link
          const mailToLink = "mailto:contact@thehardcash.com?subject=Inquiry%20from%20Website&body=Hello%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%0A%0ARegards%2C%0A";
          window.open(mailToLink, '_self');
        } else {
          // For desktop, use direct Gmail compose link
          const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=contact@thehardcash.com&su=Inquiry%20from%20Website&body=Hello%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services.%0A%0ARegards%2C%0A";
          window.open(gmailLink, '_blank', 'noopener,noreferrer');
        }
      }
    } catch (error) {
      // Fallback: copy email to clipboard and show alert
      const email = "contact@thehardcash.com";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          alert(`Email address copied to clipboard: ${email}`);
        }).catch(() => {
          alert(`Please email us at: ${email}`);
        });
      } else {
        alert(`Please email us at: ${email}`);
      }
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="w-full fixed top-0 left-0 z-50 bg-[rgb(var(--background-rgb))]/90 text-foreground px-4 sm:px-6 py-3 flex items-center justify-between backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
      >
        {/* Logo */}
        {/* Logo */}
{/* Logo */}
<Link
  href="/"
  className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-accent flex-shrink-0"
>
  {mounted && theme === "dark" ? (
    <Image
      src="/img/logo.jpg"  // dark mode logo
      alt="The Hard Cash Logo Dark"
      width={200}               // increase width
      height={60}               // keep aspect ratio
      priority                  // load faster
      className="h-16 w-auto object-contain" // bigger + no blur
    />
  ) : (
    <Image
      src="/img/logolightmode.jpg" // light mode logo
      alt="The Hard Cash Logo Light"
      width={200}
      height={60}
      priority
      className="h-16 w-auto object-contain"
    />
  )}
  <span className="hidden sm:inline">The Hard Cash</span>
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Contact Us - Desktop */}
          <button
            onClick={handleContactClick}
            className="relative text-foreground hover:text-accent dark:hover:text-accent transition-colors duration-300 font-medium group cursor-pointer"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={20} className="text-foreground" />
              ) : (
                <Moon size={20} className="text-foreground" />
              )
            ) : (
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

              {/* Contact Us - Mobile */}
              <button
                onClick={handleContactClick}
                className="py-3 px-4 text-foreground hover:text-accent dark:hover:text-accent transition-colors duration-300 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}