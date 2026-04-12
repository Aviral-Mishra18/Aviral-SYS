import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Globe, Database, Shield, Zap, Layers, Terminal } from 'lucide-react';

const SkillIcon = ({ Icon, name, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 100, delay }}
    className="flex flex-col items-center gap-3"
  >
    <div className={`p-5 rounded-2xl border border-white/10 glass-card group relative hover:border-${color}/50 transition-all cursor-pointer overflow-hidden`}>
      <div className={`absolute inset-0 bg-${color}/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      <Icon className={`w-8 h-8 text-slate-400 group-hover:text-${color} transition-colors`} />
    </div>
    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">{name}</span>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { name: "Frontend", icon: Globe, color: "cyber-blue" },
    { name: "Backend", icon: Database, color: "cyber-purple" },
    { name: "Algorithms", icon: Cpu, color: "cyber-yellow" },
    { name: "Architecture", icon: Layers, color: "cyber-blue" },
    { name: "CLI_Tools", icon: Terminal, color: "cyber-green" },
    { name: "Scripting", icon: Code2, color: "cyber-purple" },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
            <span className="text-cyber-blue">03.</span> SKILLS_MATRIX
          </h2>
          <p className="text-slate-400 text-sm uppercase" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>Core technical stack & operational capacities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto px-4">
          {skills.map((skill, i) => (
            <SkillIcon 
              key={skill.name} 
              Icon={skill.icon} 
              name={skill.name} 
              color={skill.color} 
              delay={i * 0.1}
            />
          ))}
        </div>

        <div className="mt-24 p-8 glass-card border-white/5 max-w-3xl mx-auto relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-cyber-blue/40 uppercase tracking-widest">System_Stack_v1.0</div>
          <div className="flex items-center gap-6 flex-wrap justify-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
            {['C++', 'PYTHON', 'JAVASCRIPT', 'REACT', 'GSAP', 'TAILWIND', 'NODE.JS', 'MONGODB', 'VSCODE', 'CURSOR'].map(tech => (
              <span key={tech} className="text-sm font-black tracking-tighter text-white">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
