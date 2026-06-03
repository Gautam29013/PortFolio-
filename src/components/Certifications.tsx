"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle Corporation",
      date: "Credential ID: OCI-FOUNDATIONS"
    },
    {
      title: "IT Specialist: Software Development",
      issuer: "Certiport",
      date: "Credential ID: CERT-SWDEV"
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
           className="text-center mb-20"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            Accreditation
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Certifications & <span className="text-primary text-glow">Awards</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-2xl glass-panel glass-panel-hover border-white/5 hover:border-primary/30 transition-all duration-300 shadow-md group relative overflow-hidden"
            >
              {/* Corner Glowing Orb Accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="p-4 bg-gradient-to-tr from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                <Award size={26} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground font-semibold flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-cyan-400" />
                    {cert.issuer}
                  </p>
                  <span className="text-[11px] font-mono text-muted-foreground/60 uppercase tracking-wider mt-1">
                    {cert.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
