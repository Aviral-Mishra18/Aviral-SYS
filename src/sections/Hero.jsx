import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Cpu, Globe } from 'lucide-react';

const TerminalLine = ({ prefix, command, delay = 0 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

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
      if (index > command.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, command]);

  if (!started) return null;

  return (
    <div className="flex items-center gap-2" style={{ fontFamily: 'var(--font-mono)' }}>
      <span className="text-cyber-green text-sm whitespace-nowrap">{prefix}</span>
      <span className="text-cyber-blue text-sm">
        {displayed}
        {!done && <span className="animate-pulse ml-0.5 inline-block w-[7px] h-[14px] bg-cyber-blue/80 align-middle"></span>}
      </span>
    </div>
  );
};

const Hero = () => {
  const terminalLines = [
    { prefix: "~/aviral $", command: "building fullstack apps...", delay: 600 },
    { prefix: "~/aviral $", command: "deploying scalable systems...", delay: 2400 },
    { prefix: "~/aviral $", command: "ready to ship production code ✓", delay: 4200 },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badges */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-bold ring-1 ring-cyber-blue/10" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>
              <ShieldCheck size={12} />
              SECURE_LINK: ACTIVE
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple font-bold" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>
              <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse"></div>
              UPTIME: 99.9%
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="leading-[0.92] tracking-[-0.04em] mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue animate-gradient-x">
              FRONTEND
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-1">
              DEVELOPER<span className="text-cyber-blue">.</span>
            </span>
          </h1>

          {/* Terminal Typewriter Block */}
          <div className="mb-6 p-3.5 bg-black/70 border border-white/10 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
              <span className="ml-2 text-slate-500" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.05em' }}>aviral@dev — zsh</span>
            </div>
            <div className="space-y-2">
              {terminalLines.map((line, i) => (
                <TerminalLine
                  key={i}
                  prefix={line.prefix}
                  command={line.command}
                  delay={line.delay}
                />
              ))}
            </div>
          </div>

          <div className="max-w-lg mb-8 space-y-1" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <span className="block text-neon-pink font-bold">Building production-grade web applications with clean architecture.</span>
            <span className="block text-cyber-blue font-bold">Specialized in React & Node.js backends.</span>
            <span className="block"><span className="text-cyber-purple font-bold">MongoDB data layers and,</span> <span className="text-cyber-green font-bold">JWT auth systems from idea to deployment.</span></span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              className="cyber-button flex items-center gap-2"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE_SYSTEM <ChevronRight size={16} />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/10 hover:border-white/30 transition-all text-white font-semibold opacity-70 hover:opacity-100 flex items-center gap-2 rounded-sm"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
            >
              DOWNLOAD_RESUME
            </a>
          </div>

          {/* Metric Strip */}
          <div className="pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
            <div>
              <div className="mono-label text-slate-500 mb-1">Career_Level</div>
              <div className="text-base font-bold text-cyber-blue" style={{ fontFamily: 'var(--font-heading)' }}>FRESHER</div>
            </div>
            <div>
              <div className="mono-label text-slate-500 mb-1">Projects_Shipped</div>
              <div className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>15+</div>
            </div>
            <div>
              <div className="mono-label text-slate-500 mb-1">Stack_Depth</div>
              <div className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>FULLSTACK</div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
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
              <div className="text-cyber-green text-xs" style={{ fontFamily: 'var(--font-mono)' }}>LATENCY: 12ms</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50"
      >
        <span className="text-cyber-blue" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.2em' }}>SCROLL_TO_ENTER</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyber-blue to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
