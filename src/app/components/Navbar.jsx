"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="bg-[#3A3A3A] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      role="navigation"
      aria-label="Main navigation">
      <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4 relative">
        {/* Logo - Tengah */}
        <p className="flex items-center group transition-colors duration-200">
          <span className="text-2xl font-semibold whitespace-nowrap text-white group-hover:text-[#e2725b] transition-colors duration-200">
            Catsitter Banyuwangi
          </span>
        </p>

        {/* Theme Toggle - Kanan */}
        <div className="absolute right-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
