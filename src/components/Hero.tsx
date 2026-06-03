"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Code2, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const LeetCode = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.47 1.47 0 0 0 0 2.088l3.854 4.125 5.406 5.787a1.374 1.374 0 0 0 .961.438 1.375 1.375 0 0 0 .962-.438l1.414-1.514a1.45 1.45 0 0 0 0-2.087l-2.03-2.174 2.03-2.175a1.45 1.45 0 0 0 0-2.087L14.445 2.175A1.375 1.375 0 0 0 13.483 0zM.86 13.155a1.47 1.47 0 0 0 0 2.088l5.228 5.596a1.375 1.375 0 0 0 1.923 0l1.414-1.514a1.45 1.45 0 0 0 0-2.087L4.47 11.233l2.03-2.175a1.45 1.45 0 0 0 0-2.087L8.03 5.378a1.375 1.375 0 0 0 0-1.923L6.616 1.94a1.45 1.45 0 0 0-2.087 0L.86 7.666a1.47 1.47 0 0 0 0 2.088l2.03 2.175z"/></svg>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-mesh-grid z-0 opacity-[0.25]" />
      
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/5 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-semibold text-muted-foreground tracking-wide uppercase">
              Available for new opportunities
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
            Hi, I&apos;m <span className="text-gradient text-glow">Jony Gautam</span>
            <br />
            <span className="text-3xl md:text-5xl text-foreground font-semibold mt-4 block">
              Software & Full Stack Developer
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

        {/* Right Creative Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center lg:col-span-5"
        >
          {/* Main Floating Container */}
          <div className="relative w-[380px] h-[480px] animate-float">
            {/* Pulsing neon outer layer */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-purple-500 to-cyan-400 rounded-3xl blur opacity-30 animate-pulse-slow"></div>
            
            {/* The Glassmorphic Core Panel */}
            <div className="relative w-full h-full rounded-3xl glass-panel border-white/10 p-5 flex flex-col justify-between overflow-hidden shadow-2xl">
              {/* Internal Mesh Background */}
              <div className="absolute inset-0 bg-mesh-grid opacity-20 pointer-events-none" />
              
              {/* Corner Accent Orbs */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

              {/* Decorative Window Controls */}
              <div className="flex gap-1.5 relative z-20">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>

              {/* Center Abstract Interactive Element */}
              <div className="flex-grow flex flex-col items-center justify-center relative z-20">
                {/* Outer spinning ring */}
                <div className="relative w-44 h-44 rounded-full flex items-center justify-center border border-dashed border-primary/40 animate-[spin_20s_linear_infinite]">
                  {/* Middle rotating ring */}
                  <div className="w-36 h-36 rounded-full flex items-center justify-center border border-white/10 animate-[spin_10s_linear_infinite_reverse]">
                    {/* Inner glowing sphere */}
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary/30 to-cyan-500/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-glow relative">
                      <span className="text-3xl font-black text-white text-glow">JG</span>
                    </div>
                  </div>
                </div>

                {/* Micro Tech Floating Info Tags */}
                <span className="absolute top-4 left-4 py-1.5 px-3 rounded-lg bg-card/60 border border-white/5 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 shadow-sm">
                  <Terminal size={12} /> Cloud & DevOps
                </span>
                <span className="absolute bottom-4 right-4 py-1.5 px-3 rounded-lg bg-card/60 border border-white/5 text-[11px] font-mono text-purple-400 flex items-center gap-1.5 shadow-sm">
                  <Code2 size={12} /> Full-Stack
                </span>
              </div>

              {/* Card Metadata Footer */}
              <div className="border-t border-white/5 pt-4 relative z-20 flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-sm text-white tracking-wide">JONY GAUTAM</h3>
                  <p className="text-xs text-muted-foreground">Computer Science Student</p>
                </div>
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <Sparkles size={16} className="animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
