"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-800 transition-all shadow-lg w-12 h-12 flex items-center justify-center">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
