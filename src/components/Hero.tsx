"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Mail, Code2, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ConstellationGrid from "@/components/ui/constellation-grid";
import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const LeetCode = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.47 1.47 0 0 0 0 2.088l3.854 4.125 5.406 5.787a1.374 1.374 0 0 0 .961.438 1.375 1.375 0 0 0 .962-.438l1.414-1.514a1.45 1.45 0 0 0 0-2.087l-2.03-2.174 2.03-2.175a1.45 1.45 0 0 0 0-2.087L14.445 2.175A1.375 1.375 0 0 0 13.483 0zM.86 13.155a1.47 1.47 0 0 0 0 2.088l5.228 5.596a1.375 1.375 0 0 0 1.923 0l1.414-1.514a1.45 1.45 0 0 0 0-2.087L4.47 11.233l2.03-2.175a1.45 1.45 0 0 0 0-2.087L8.03 5.378a1.375 1.375 0 0 0 0-1.923L6.616 1.94a1.45 1.45 0 0 0-2.087 0L.86 7.666a1.47 1.47 0 0 0 0 2.088l2.03 2.175z"/></svg>
);

const roles = ["MERN Stack Developer", "Full Stack Developer", "Web Developer"];

// Typewriter: slow type left→right, 2s pause, slow delete right→left, then next word
function useTypewriter(words: string[]) {
  const TYPE_SPEED   = 150;  // ms per character while typing
  const DELETE_SPEED = 100;  // ms per character while deleting
  const PAUSE_MS     = 2000; // ms to hold the full word before deleting

  const [displayed, setDisplayed] = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [phase,     setPhase]     = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const word = words[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        // Type one more character
        timer = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        // Fully typed → pause
        timer = setTimeout(() => setPhase("deleting"), PAUSE_MS);
      }
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        // Delete one character from the right
        timer = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        // Fully deleted → move to next word
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, wordIdx, words]);

  return displayed;
}

export function Hero() {
  const typedText = useTypewriter(roles);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Dynamic Constellation Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ConstellationGrid isBackground={true} />
      </div>
      
      {/* Background Mesh Grid overlay */}
      <div className="absolute inset-0 bg-mesh-grid z-0 opacity-[0.15] pointer-events-none" />
      
      {/* Dynamic Glowing Ambient Spheres */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      
      <div className="container relative z-10 px-4 md:px-8 mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:col-span-7"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
            <span className="text-gradient text-glow">Jony Gautam</span>
            <br />
            {/* Single-line cycling typewriter: I'm a [MERN Stack Developer|] */}
            <span
              className="text-2xl md:text-4xl font-semibold mt-3 flex items-center"
              style={{ minHeight: "1.6em" }}
            >
              <span className="text-white/60 mr-2">I&apos;m a</span>
              <span className="text-gradient text-glow font-bold">{typedText}</span>
              <span
                className="inline-block w-[3px] rounded-sm bg-primary ml-[2px] align-middle"
                style={{ height: "1em", animation: "blink 0.8s step-end infinite" }}
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-xl leading-relaxed">
            Building highly scalable, premium full-stack applications. Seamlessly bridging the gap between pixel-perfect design and high-fidelity, robust engineering.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link 
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-md hover:shadow-glow hover:bg-primary/95 transition-all hover:gap-3 group hover:scale-[1.03] duration-300"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass-panel border-white/10 text-foreground font-semibold hover:bg-white/5 transition-all hover:scale-[1.03] duration-300"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-6">
            <a 
              href="https://github.com/Gautam29013" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110 border border-transparent hover:border-white/5"
            >
              <Github size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/j-g-sharma-b35573322/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110 border border-transparent hover:border-white/5"
            >
              <Linkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://leetcode.com/u/Gautam29013/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110 border border-transparent hover:border-white/5"
            >
              <LeetCode size={22} />
              <span className="sr-only">LeetCode</span>
            </a>
            <a 
              href="mailto:jonygautam29013@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-all p-3 hover:bg-white/5 rounded-full hover:scale-110 border border-transparent hover:border-white/5"
            >
              <Mail size={22} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Creative Side — 3D Tilt Card */}
        {(() => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const cardRef = useRef<HTMLDivElement>(null);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const mouseX = useMotionValue(0);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const mouseY = useMotionValue(0);
          const rotateX = useSpring(useTransform(mouseY, [-1, 1], [12, -12]), { stiffness: 200, damping: 20 });
          const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), { stiffness: 200, damping: 20 });

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = cardRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
            mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
          };
          const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:flex items-center justify-center lg:col-span-5"
              style={{ perspective: "1000px" }}
            >
              {/* Main Floating Container */}
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.03, y: -15 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="relative w-full aspect-square max-w-[550px] cursor-pointer"
              >
                {/* Clean container for IconCloud */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <IconCloud />
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
}
