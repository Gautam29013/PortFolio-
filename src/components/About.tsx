"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, MonitorSmartphone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-background">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 max-w-xl"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              Biography
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
              About <span className="text-primary text-glow">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mb-8" />
            
            <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-base md:text-lg flex flex-col gap-6">
              <p>
                I am a highly motivated Computer Science student with a deep passion for full-stack development, cloud computing, and DevOps engineering. My journey is driven by an insatiable curiosity to build scalable, resilient, and user-centric applications.
              </p>
              <p>
                Whether it&apos;s conceptualizing a seamless, fluid frontend experience or architecting complex backend microservices, I thrive on tackling technical challenges. I constantly explore cutting-edge methodologies to deliver robust, production-grade solutions.
              </p>
            </div>
          </motion.div>

          {/* Cards Right Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:mt-0 mt-8">
            {[
              {
                icon: <Code2 className="w-6 h-6 text-primary" />,
                title: "Full-Stack Dev",
                desc: "Building end-to-end web apps with Next.js, React, Node.js, and modern databases."
              },
              {
                icon: <Terminal className="w-6 h-6 text-primary" />,
                title: "Cloud & DevOps",
                desc: "Deploying secure infra with AWS, Docker, and automated pipelines via GitHub Actions."
              },
              {
                icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
                title: "Responsive Design",
                desc: "Crafting beautiful, accessible, and high-performance UI using responsive Tailwind principles."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group cursor-default relative overflow-hidden min-h-[220px]"
              >
                {/* Micro Border Glow Accents */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                
                <div className="flex flex-col gap-5">
                  {/* Glowing Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
