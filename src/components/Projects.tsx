"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const Github = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const projects = [
  {
    title: "Veridoc",
    subtitle: "AI Document Analysis System",
    description: "An AI-powered platform for intelligent, fast document analysis. Architected a robust backend ecosystem with asynchronous data modeling, paired with an interactive high-fidelity frontend and automated multi-stage CI/CD pipelines.",
    tech: ["FastAPI", "MongoDB", "React", "Tailwind CSS", "Docker", "AWS", "GitHub Actions"],
    github: "https://github.com/Gautam29013",
    live: "#",
    theme: "from-blue-500/20 via-indigo-500/10 to-purple-500/20"
  },
  {
    title: "BookEasy",
    subtitle: "Booking Management App",
    description: "A secure, comprehensive full-stack application designed to streamline reservation lifecycles. Features role-based user authentication, real-time availability tracking, dynamic calendar scheduling, and deployment infrastructure.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Render"],
    github: "https://github.com/Gautam29013",
    live: "#",
    theme: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl overflow-hidden glass-panel border-white/5 hover:border-white/15 hover:shadow-glow transition-all duration-500 flex flex-col min-h-[480px]"
            >
              {/* Dynamic Theme Glow Sphere */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.theme} rounded-full blur-[100px] -mr-28 -mt-28 group-hover:scale-125 transition-transform duration-700 pointer-events-none opacity-40`} />
              
              <div className="p-8 md:p-10 flex flex-col h-full relative z-10 justify-between flex-grow">
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5 mb-1">
                        <Code2 size={14} /> Full-Stack Application
                      </span>
                      <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
                        {project.title}
                        <span className="block text-lg text-muted-foreground font-semibold mt-1">
                          {project.subtitle}
                        </span>
                      </h3>
                    </div>
                    
                    {/* Social/Link icons */}
                    <div className="flex gap-3">
                      {project.github !== "#" && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-white transition-all p-2 bg-white/5 border border-white/5 hover:border-white/20 rounded-full hover:scale-110"
                          title="View GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-primary transition-all p-2 bg-white/5 border border-white/5 hover:border-primary/20 rounded-full hover:scale-110"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm md:text-base mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div>
                  <h4 className="text-xs font-bold text-white mb-3 tracking-wider uppercase opacity-85">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span 
                        key={t} 
                        className="px-3 py-1.5 bg-background/50 border border-white/5 text-muted-foreground rounded-lg text-xs font-semibold tracking-wide group-hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
