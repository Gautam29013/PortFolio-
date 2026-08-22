"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    theme: {
      accent: "text-blue-400",
      border: "border-blue-500/20 hover:border-blue-500/50",
      badge: "bg-blue-500/5 text-blue-300 border-blue-500/15 hover:border-blue-500/40",
      glow: "from-blue-500/5 to-transparent"
    },
    items: ["C++", "Java", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    theme: {
      accent: "text-cyan-400",
      border: "border-cyan-500/20 hover:border-cyan-500/50",
      badge: "bg-cyan-500/5 text-cyan-300 border-cyan-500/15 hover:border-cyan-500/40",
      glow: "from-cyan-500/5 to-transparent"
    },
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    category: "Backend & DB",
    theme: {
      accent: "text-emerald-400",
      border: "border-emerald-500/20 hover:border-emerald-500/50",
      badge: "bg-emerald-500/5 text-emerald-300 border-emerald-500/15 hover:border-emerald-500/40",
      glow: "from-emerald-500/5 to-transparent"
    },
    items: ["Node.js", "Express.js", "FastAPI", "MongoDB", "SQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Cloud",
    theme: {
      accent: "text-blue-400",
      border: "border-blue-500/20 hover:border-blue-500/50",
      badge: "bg-blue-500/5 text-blue-300 border-blue-500/15 hover:border-blue-500/40",
      glow: "from-blue-500/5 to-transparent"
    },
    items: ["AWS EC2", "AWS ECR", "Docker", "GitHub Actions", "Render", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-secondary/5 overflow-hidden">
      {/* Mesh lines */}
      <div className="absolute inset-0 bg-mesh-grid opacity-15 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto" 
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 glass-panel border-white/5 hover:bg-gradient-to-br ${skillGroup.theme.glow} ${skillGroup.theme.border} transition-all duration-300 relative group overflow-hidden shadow-lg`}
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <h3 className={`text-xl font-black mb-6 pb-4 border-b border-white/5 ${skillGroup.theme.accent} tracking-wide`}>
                {skillGroup.category}
              </h3>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: index * 0.1 + 0.3 }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-semibold tracking-wide cursor-default transition-all duration-300 ${skillGroup.theme.badge}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
