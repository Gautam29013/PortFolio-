"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[45vw] h-[45vw] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Let&apos;s Connect & <span className="text-primary text-glow">Build</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-black text-white mb-6 tracking-tight">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-muted-foreground mb-12 text-base md:text-lg leading-relaxed font-medium">
              I am open to new development opportunities, collaborative software engineering roles, and innovative system designs. Whether you have a project idea or just want to network, I&apos;d love to connect!
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:jonygautam29013@gmail.com" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-all group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-0.5">Email Address</p>
                  <p className="text-lg text-white font-bold group-hover:text-primary transition-colors">jonygautam29013@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 text-muted-foreground group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-0.5">Phone Call</p>
                  <p className="text-lg text-white font-bold">+91 9315849446</p>
                </div>
              </div>

              <div className="flex items-center gap-5 text-muted-foreground group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-0.5">Current Location</p>
                  <p className="text-lg text-white font-bold">India</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/j-g-sharma-b35573322/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-muted-foreground hover:text-primary transition-all group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-0.5">LinkedIn Profile</p>
                  <p className="text-lg text-white font-bold group-hover:text-primary transition-colors truncate max-w-[200px] sm:max-w-xs">j-g-sharma-b35573322</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-10 glass-panel border-white/5 shadow-2xl relative"
          >
            {/* Ambient Background Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 via-purple-500/10 to-cyan-500/20 rounded-3xl blur opacity-30 -z-10 animate-pulse-slow" />
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-white/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/45 text-white shadow-inner" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-white/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/45 text-white shadow-inner" 
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Hi Jony, let's collaborate on..." 
                  className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-white/5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/45 text-white resize-none shadow-inner"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-black text-lg shadow-md hover:shadow-glow hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2.5 transition-all duration-300 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
