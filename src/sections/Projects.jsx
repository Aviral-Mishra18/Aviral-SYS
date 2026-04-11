import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Database, Zap, Code2, Cpu } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl"></div>
      
      <div className="glass-card relative overflow-hidden group-hover:border-cyber-blue/50 transition-all duration-500 h-full flex flex-col">
        {/* Project Image Placeholder */}
        <div className="relative h-48 overflow-hidden bg-black/40 border-b border-white/5">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <project.icon className="w-16 h-16 text-cyber-blue/20 group-hover:text-cyber-blue/40 transition-colors" />
          </div>
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 border border-cyber-blue/30 text-[10px] font-mono text-cyber-blue uppercase">
            Exp_{project.id}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
            {project.title}
          </h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-[10px] font-mono text-cyber-purple uppercase tracking-widest mb-1">Problem</p>
              <p className="text-xs text-slate-400">{project.problem}</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-cyber-green uppercase tracking-widest mb-1">Solution</p>
              <p className="text-xs text-slate-300">{project.solution}</p>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono border border-white/10 px-2 py-0.5 rounded text-slate-400 group-hover:border-cyber-blue/20 transition-colors">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.live} className="flex items-center gap-1.5 text-xs font-bold text-cyber-blue hover:text-white transition-colors">
                <ExternalLink size={14} /> SYSTEM_LAUNCH
              </a>
              <a href={project.github} className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                <GitBranch size={14} /> SOURCE_CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const experiments = [
    {
      id: "001",
      title: "NEURAL_NODE.JS",
      problem: "Centralized data bottlenecks in high-frequency trading simulations.",
      solution: "Implemented a distributed graph-based state management system with sub-5ms latency.",
      tech: ["React", "Go", "Redis", "gRPC"],
      icon: Cpu,
      live: "#",
      github: "#"
    },
    {
      id: "002",
      title: "VOID_SIMULATOR",
      problem: "Unintuitive physical representation of heavy data structures in 2D interfaces.",
      solution: "Created a WebGL-based voxel visualization engine for real-time memory monitoring.",
      tech: ["Three.js", "GLSL", "React Native"],
      icon: Database,
      live: "#",
      github: "#"
    },
    {
      id: "003",
      title: "GHOST_PROTOCOL",
      problem: "Vulnerability in cross-origin data transmission for stealth banking apps.",
      solution: "Custom end-to-end encryption layer with quantum-resistant rotational keys.",
      tech: ["TypeScript", "Rust", "WebAssembly"],
      icon: Zap,
      live: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-cyber-grid-dots">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-4">
              <span className="text-cyber-blue">02.</span> PROJECTS_LAB
            </h2>
            <p className="text-slate-400 max-w-md font-mono text-sm">
              Exploring the boundaries of digital reality through modular experiments and high-impact missions.
            </p>
          </div>
          <div className="text-[10px] font-mono text-cyber-blue/50 tracking-widest hidden md:block">
            TOTAL_EXPERIMENTS: [003] / STATUS: STABLE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((exp, i) => (
            <ProjectCard key={exp.id} project={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
