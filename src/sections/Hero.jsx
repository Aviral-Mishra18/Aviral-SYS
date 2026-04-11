import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Cpu, Globe } from 'lucide-react';

const TerminalLine = ({ prefix, command, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(command.slice(0, index));
      index++;
      if (index > command.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [started, command]);

  return (
    <div className="flex gap-2 font-mono text-sm">
      <span className="text-cyber-green whitespace-nowrap">{prefix}</span>
      <span className="text-cyber-blue">
        {started ? displayed : ''}
        {started && displayed.length < command.length && (
          <span className="animate-pulse">▌</span>
        )}
      </span>
    </div>
  );
};

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  const terminalLines = [
    { prefix: "~/aviral $", command: "building fullstack apps...", delay: 500 },
    { prefix: "~/aviral $", command: "deploying scalable systems...", delay: 2200 },
    { prefix: "~/aviral $", command: "ready to ship production code ✓", delay: 4000 },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-bold ring-1 ring-cyber-blue/20">
              <ShieldCheck size={14} />
              SECURE_LINK: ACTIVE
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple text-xs font-bold">
              <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse"></div>
              PING: 14ms
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-2">
            SENIOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue animate-gradient-x">
              FRONTEND
            </span>
            <br />
            <span className="text-white">DEVELOPER.</span>
          </h1>

          {/* Terminal-style typewriter lines */}
          <div className="my-8 p-4 bg-black/60 border border-white/10 rounded-lg backdrop-blur-sm space-y-2">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              <span className="text-[10px] font-mono text-slate-500 ml-2">aviral@dev-terminal</span>
            </div>
            {terminalLines.map((line, i) => (
              <TerminalLine
                key={i}
                prefix={line.prefix}
                command={line.command}
                delay={line.delay}
              />
            ))}
          </div>

          <p className="text-base text-slate-400 max-w-lg mb-10 leading-relaxed">
            Crafting pixel-perfect, performant interfaces with
            <span className="text-cyber-blue font-bold"> React & Next.js</span>,
            <span className="text-cyber-purple font-bold"> TypeScript</span>, and
            <span className="text-cyber-green font-bold"> Modern CSS</span>.
            From complex design systems to production-grade SPAs — I ship polished UIs at scale.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="cyber-button flex items-center gap-2">
              EXPLORE_SYSTEM <ChevronRight size={18} />
            </button>
            <button className="px-6 py-2 border border-white/10 hover:border-white/30 transition-all text-white font-bold opacity-70 hover:opacity-100 flex items-center gap-2">
              DOWNLOAD_RESUME
            </button>
          </div>

          <div className="pt-8 border-t border-white/5 flex gap-10">
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">Career_Level</div>
              <div className="text-xl font-bold text-cyber-blue font-mono">SENIOR</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">Projects_Shipped</div>
              <div className="text-xl font-bold text-white font-mono">30+</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">Stack_Depth</div>
              <div className="text-xl font-bold text-white font-mono">FULLSTACK</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Futuristic Visual Asset */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Rotating Rings */}
            <div className="absolute w-[80%] h-[80%] border-2 border-cyber-blue/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[90%] h-[90%] border border-dashed border-cyber-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute w-[70%] h-[70%] border border-cyber-green/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

            {/* Center Core */}
            <div className="z-10 bg-black p-8 rounded-2xl border border-cyber-blue/50 shadow-[0_0_50px_rgba(0,242,255,0.2)]">
              <Cpu size={80} className="text-cyber-blue animate-pulse" />
            </div>

            {/* Floating Icons */}
            <div className="absolute top-10 right-10 p-4 glass-card animate-bounce" style={{ animationDuration: '3s' }}>
              <Globe className="text-cyber-purple" />
            </div>
            <div className="absolute bottom-20 left-0 p-4 glass-card animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="text-cyber-green font-mono text-xs">LATENCY: 12ms</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] tracking-widest uppercase text-cyber-blue">SCROLL_TO_ENTER</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyber-blue to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
