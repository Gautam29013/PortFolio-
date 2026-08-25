"use client";

import { motion } from "framer-motion";
import { Award, FileText } from "lucide-react";
import Image from "next/image";

export function Certifications() {
  const certs = [
    {
      title: "1st Position in Best Project Awards",
      issuer: "K.R. Mangalam University",
      date: "April 2026",
      image: "/certificates/best-project.jpg"
    },
    {
      title: "LLM-Based Knowledge Retrieval System",
      issuer: "Projexa AI",
      date: "May 2026",
      image: "/certificates/projexa.jpg"
    },
    {
      title: "Hack KRMU 5.0 Participation",
      issuer: "K.R. Mangalam University",
      date: "Feb 2026",
      image: "/certificates/hack-krmu.jpg"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "Oct 2025",
      image: "/certificates/oracle.jpg"
    },
    {
      title: "\"Code Canvas\" Visual AI Tool Design",
      issuer: "K.R. Mangalam University",
      date: "Nov 2025",
      image: "/certificates/code-canvas.jpg"
    },
    {
      title: "IT Specialist: Software Development",
      issuer: "Certiport",
      date: "Sep 2025",
      image: "/certificates/it-specialist.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-28 relative bg-secondary/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            Accreditation
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Certifications & <span className="text-primary text-glow">Awards</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto" />
        </motion.div>

        {/* Infinite Scroll Marquee Container */}
        <div className="w-full max-w-7xl mx-auto overflow-hidden px-4 md:px-0 relative">
          
          <div className="flex gap-6 w-max animate-marquee pb-4">
            {[...certs, ...certs].map((cert, idx) => (
              <div key={idx} className="relative flex-shrink-0 w-[300px] sm:w-[350px] group/card cursor-pointer">
                
                {/* The Glow Element (bottom light) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-primary/50 blur-[50px] opacity-0 group-hover/card:opacity-100 group-active/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full" />

                {/* The Card */}
                <div className="relative bg-[#15161c] border border-white/5 rounded-[1.5rem] hover:border-primary/40 hover:bg-[#191a21] transition-all duration-300 shadow-xl z-10 h-full flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative w-full h-[240px] bg-white/5 flex items-center justify-center p-4 overflow-hidden border-b border-white/5 rounded-t-[1.5rem]">
                      {/* Glowing effect behind image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative w-full h-full rounded-md overflow-hidden group-hover/card:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
                         <Image 
                           src={cert.image}
                           alt={cert.title}
                           fill
                           className="object-contain drop-shadow-md"
                         />
                      </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 rounded-b-[1.5rem]">
                     <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-white font-bold text-[17px] leading-snug line-clamp-2 group-hover/card:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-[13px] font-semibold text-muted-foreground mt-2">
                             {cert.issuer} <span className="mx-1.5 opacity-50">•</span> {cert.date}
                          </p>
                        </div>
                     </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
