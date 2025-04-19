"use client";

import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-[#e2725b] text-white hover:bg-[#d1654f] transition-all shadow-lg w-12 h-12 flex items-center justify-center"
      aria-label={`Ubah ke mode ${theme === "light" ? "gelap" : "terang"}`}>
      {theme === "light" ? <FaRegMoon className="text-xl" /> : <FaRegSun className="text-xl" />}
    </button>
  );
}
