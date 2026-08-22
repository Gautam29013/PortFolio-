"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const content = document.getElementById("page-content");
    
    if (elem || href === "/") {
      const top = href === "/" ? 0 : elem!.getBoundingClientRect().top + window.scrollY - 100;
      
      // 1. Fast, performant zoom out (removed expensive blur filter)
      if (content) {
        animate(content, { scale: 0.97, opacity: 0.7 }, { duration: 0.2, ease: "easeOut" });
      }
      
      // 2. Faster cinematic scroll
      animate(window.scrollY, top, {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1], // Smoother, snappier ease curve
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
      
      // 3. Zoom back in seamlessly before scroll completely finishes
      setTimeout(() => {
        if (content) {
          animate(content, { scale: 1, opacity: 1 }, { duration: 0.4, ease: "easeOut" });
        }
      }, 500);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 transition-all duration-300 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "w-full max-w-5xl flex items-center justify-between rounded-full px-6 md:px-8 py-3 transition-all duration-300 pointer-events-auto",
          isScrolled
            ? "glass-panel bg-card/70 border-white/10 shadow-lg py-2.5 backdrop-blur-lg"
            : "bg-transparent border-transparent py-4"
        )}
      >
        <Link 
          href="/" 
          onClick={(e) => handleSmoothScroll(e, "/")}
          className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform"
        >
          JG<span className="text-primary text-glow">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground relative transition-colors py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-md hover:shadow-glow hover:bg-primary/90 transition-all hover:scale-[1.03] duration-300"
          >
            Hire Me
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>

        {/* Mobile Toggle and Theme */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            className="p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 md:hidden glass-panel bg-card/95 rounded-2xl p-6 pointer-events-auto border-white/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/40 hover:text-primary transition-colors"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 w-full py-3 bg-primary text-primary-foreground font-bold text-center rounded-xl shadow-md"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
