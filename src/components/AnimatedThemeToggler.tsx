"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function AnimatedThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[60px] h-[30px] rounded-full bg-secondary/40 border border-border/30" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-[60px] h-[30px] rounded-full border border-border/40 bg-secondary/40 backdrop-blur-sm flex items-center cursor-pointer focus:outline-none overflow-hidden"
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))"
            : "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(245,158,11,0.1))",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Icons row */}
      <div className="absolute inset-0 flex items-center justify-between px-[7px] z-10 pointer-events-none">
        {/* Sun icon (left) */}
        <motion.span
          animate={{ opacity: isDark ? 0.35 : 1, scale: isDark ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-amber-400"
        >
          <SunIcon />
        </motion.span>

        {/* Moon icon (right) */}
        <motion.span
          animate={{ opacity: isDark ? 1 : 0.35, scale: isDark ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className="text-violet-400"
        >
          <MoonIcon />
        </motion.span>
      </div>

      {/* Sliding pill */}
      <motion.div
        animate={{ x: isDark ? 31 : 3 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute w-[24px] h-[24px] rounded-full shadow-md z-20"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #818cf8, #7c3aed)"
            : "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow: isDark
            ? "0 0 10px rgba(139,92,246,0.5)"
            : "0 0 10px rgba(251,191,36,0.5)",
        }}
      />
    </motion.button>
  );
}
