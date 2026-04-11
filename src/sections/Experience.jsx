import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "2024-PRESENT",
      role: "FULLSTACK_LAB_RESEARCH",
      company: "SELF_INITIATED",
      tasks: ["Building end-to-end scalable web applications", "Mastering React, Node.js and Cloud Infrastructure", "Implementing security best practices in personal projects"]
    },
    {
      year: "2023-2024",
      role: "OPEN_SOURCE_CONTRIBUTOR",
      company: "GITHUB_COMMUNITY",
      tasks: ["Contributing to modern UI component libraries", "Participating in global coding challenges", "Collaborating on developer tools and documentation"]
    },
    {
      year: "2020-2024",
      role: "TECHNICAL_GRADUATION",
      company: "UNIVERSITY_SYSTEMS",
      tasks: ["Developed 8+ academic software projects", "Deep-dived into Computer Science fundamentals", "Led technical university workshops"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="text-cyber-blue">04.</span> SYSTEM_EVOLUTION
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
