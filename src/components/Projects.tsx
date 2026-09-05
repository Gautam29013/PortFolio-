"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "Veridoc",
    description: "An AI-powered platform for intelligent, fast document analysis. Architected a robust backend ecosystem paired with an interactive high-fidelity frontend.",
    tech: ["NEXT.JS", "TAILWIND CSS", "TYPESCRIPT", "PYTHON", "AI"],
    github: "https://github.com/Gautam29013/Veridoc",
    live: "https://veridoc.varun.page/",
    image: "/projects/veridoc.jpg"
  },
  {
    title: "BookEasy",
    description: "A secure, comprehensive full-stack application designed to streamline reservation lifecycles. Features role-based user authentication and real-time availability tracking.",
    tech: ["REACT", "NODE.JS", "EXPRESS", "MONGODB", "RENDER"],
    github: "https://github.com/Gautam29013/BookEasy",
    live: "https://bookgo-delta.vercel.app/",
    image: "/projects/bookeasy.png"
  },
  {
    title: "BusTrack Pro",
    description: "A real-time bus tracking application featuring live GPS updates, smart ETA predictions, and smooth map animations all in one unified dashboard.",
    tech: ["REACT", "WEBSOCKETS", "MAPBOX", "NODE.JS"],
    github: "https://github.com/Gautam29013/BusTrack-Pro",
    live: "https://protracker-chi.vercel.app/",
    image: "/projects/bustrack.png"
  },
  {
    title: "Foodie",
    description: "A modern food delivery platform guaranteeing fresh groceries to your doorstep. Includes advanced search, categorized products, cart management, and seamless UI.",
    tech: ["REACT", "TAILWIND CSS", "NODE.JS", "MONGODB"],
    github: "https://github.com/Gautam29013/Foodie",
    live: "https://foodtracker-omega.vercel.app/",
    image: "/projects/foodie.png"
  }
];

const GithubIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

function ProjectCard({ project, idx }: { project: typeof projects[0], idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific card
  // "start 15%" means animation starts when the top of the card hits 15% from the top of the viewport
  // "end start" means animation ends when the bottom of the card hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 15%", "end start"]
  });

  // As the user scrolls down and the card goes UP out of view, it scales down and fades out
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[520px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
       {/* Left Card: Info */}
       <div className="lg:w-2/5 w-full bg-card rounded-[2rem] p-10 md:p-12 flex flex-col justify-between border border-border/40 relative group shadow-2xl">
          <div className="flex justify-between items-start w-full">
             <h3 className="text-4xl md:text-[2.75rem] font-black text-foreground uppercase tracking-tighter leading-none">
               {project.title}
             </h3>
             <span className="text-sm font-semibold text-muted-foreground mt-2 font-mono">
               0{idx + 1} - 04
             </span>
          </div>
          
          <div className="mt-8 flex-grow">
             <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm font-medium">
               {project.description}
             </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
             <div>
                <span className="text-xs font-black tracking-widest uppercase text-foreground mb-4 block">
                 Tech Stack
               </span>
               <div className="flex flex-wrap gap-2.5">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-secondary border border-border/60 rounded-full text-[11px] font-bold text-foreground/80 tracking-wider">
                      {t}
                    </span>
                  ))}
               </div>
             </div>
             
             <div className="flex flex-wrap gap-4">
                 {project.live !== "#" && (
                   <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 transition-all duration-300 border border-border/60 rounded-xl text-xs font-bold text-foreground tracking-widest uppercase hover:scale-105">
                     Live Site <ExternalLink size={16} />
                   </a>
                 )}
                 {project.github !== "#" && (
                   <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-secondary/50 transition-all duration-300 border border-border/60 rounded-xl text-xs font-bold text-foreground tracking-widest uppercase hover:scale-105">
                     Github <GithubIcon className="w-4 h-4" />
                   </a>
                 )}
             </div>
          </div>
       </div>

       {/* Right Card: Image Preview */}
       <div className="lg:w-3/5 w-full rounded-[2rem] overflow-hidden relative group border border-border/40 bg-card min-h-[300px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={idx < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
       </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
