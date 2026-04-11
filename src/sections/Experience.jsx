import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "2023-PRESENT",
      role: "LEAD_FRONTEND_ENGINEER",
      company: "TECH_CORP",
      tasks: ["Architecting design systems used by 50+ developers", "Leading migration from legacy jQuery to React 18 + TypeScript", "Reduced bundle size by 40% with code-splitting & lazy loading"]
    },
    {
      year: "2021-2023",
      role: "SENIOR_FRONTEND_DEV",
      company: "STARTUP_LABS",
      tasks: ["Built real-time dashboard serving 10k+ concurrent users", "Implemented CI/CD pipelines with automated visual regression testing", "Mentored junior developers and conducted code reviews"]
    },
    {
      year: "2019-2021",
      role: "FRONTEND_DEVELOPER",
      company: "DIGITAL_AGENCY",
      tasks: ["Delivered 20+ pixel-perfect responsive web applications", "Integrated REST & GraphQL APIs with custom React hooks", "Optimized Core Web Vitals achieving 95+ Lighthouse scores"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
          <span className="text-cyber-blue">04.</span> EXPERIENCE_LOGS
        </h2>

        <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-cyber-blue/20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 w-6 h-6 bg-black border-2 border-cyber-blue rounded-full z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
              </div>
              
              <div className="mb-1 text-[10px] font-mono text-cyber-blue font-bold tracking-widest">{exp.year}</div>
              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{exp.role}</h3>
              <div className="text-cyber-purple font-mono text-xs mb-4">{exp.company}</div>
              
              <ul className="space-y-2">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="text-cyber-blue text-xs font-bold leading-none select-none">{'>'}</span>
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
