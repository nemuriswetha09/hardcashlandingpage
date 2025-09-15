"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 dark:bg-black/80 text-white dark:text-white px-6 py-4 flex items-center justify-between backdrop-blur-md">
      <div className="text-2xl font-bold text-yellow-500">The Hard Cash</div>

      <ul className="hidden md:flex gap-6 font-medium">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>

      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-lg border border-yellow-400 hover:bg-yellow-500 hover:text-black transition"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}
