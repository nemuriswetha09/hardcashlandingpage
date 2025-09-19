'use client';

import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[rgb(var(--background-rgb))]/80 text-foreground px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-2xl font-bold text-accent">
        The Hard Cash
      </Link>

      {/* Desktop Navigation */}
      {/* <ul className="hidden md:flex gap-8 font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href} 
              className="text-foreground hover:text-accent dark:hover:text-accent transition-colors duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul> */}

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-accent hover:bg-accent hover:text-foreground dark:hover:bg-accent dark:hover:text-foreground transition-all duration-300"
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
            // Render a fallback icon or nothing during SSR
            <Moon size={20} className="text-foreground" />
          )}
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {/* {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgb(var(--background-rgb))] border-b border-gray-200 dark:border-gray-800 md:hidden">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="block py-3 text-foreground hover:text-accent dark:hover:text-accent transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </nav>
  );
}