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
  const [showPopup, setShowPopup] = useState(false);

  const terminalLines = [
    { prefix: "~/aviral $", command: "building fullstack apps...", delay: 600 },
    { prefix: "~/aviral $", command: "deploying scalable systems...", delay: 2400 },
    { prefix: "~/aviral $", command: "ready to ship production code ✓", delay: 4200 },
  ];

  const popupData = {
    role: "FULLSTACK DEVELOPER",
    status: "ACTIVE",
    clearance: "LEVEL_5",
    stack: ["React", "Node.js", "MongoDB", "Python", "C++", "Tailwind"],
    uptime: "99.9%",
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-bold ring-1 ring-cyber-blue/10" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
              <ShieldCheck size={12} className="animate-pulse" />
              SECURE_ACCESS: GRANTED
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple font-bold" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
              <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-glow-pulse"></div>
              SYSTEM_LATENCY: 14MS
            </div>
          </div>

          {/* Main Heading with Popup */}
          <div className="relative inline-block">
            <h1
              className="leading-[0.92] tracking-[-0.04em] mb-5 cursor-pointer heading-popup-trigger"
              style={{ fontFamily: 'var(--font-heading)' }}
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
              onClick={() => setShowPopup(prev => !prev)}
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue animate-gradient-x">
                FULLSTACK
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-1">
                DEVELOPER<span className="text-cyber-blue">.</span>
              </span>
            </h1>

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.92 }}
              animate={showPopup
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 15, scale: 0.92 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-full mt-2 z-50 pointer-events-none"
              style={{ pointerEvents: showPopup ? 'auto' : 'none' }}
            >
              <div className="relative w-[340px] sm:w-[400px] bg-black/90 backdrop-blur-xl border border-cyber-blue/40 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,242,255,0.15)]">
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,242,255,0.03)_2px,rgba(0,242,255,0.03)_4px)] pointer-events-none z-10"></div>

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-cyber-blue/20 bg-cyber-blue/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></div>
                    <span className="text-cyber-blue font-bold" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em' }}>
                      PROFILE_CARD.exe
                    </span>
                  </div>
                  <span className="text-cyber-green font-bold" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.08em' }}>
                    ● ONLINE
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 py-3.5 space-y-3">
                  {/* Role */}
                  <div>
                    <div className="text-slate-500 mb-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em' }}>
                      DESIGNATION
                    </div>
                    <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple" style={{ fontFamily: 'var(--font-heading)' }}>
                      {popupData.role}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-md p-2 border border-white/5">
                      <div className="text-slate-500 mb-0.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em' }}>STATUS</div>
                      <div className="text-cyber-green font-bold text-xs" style={{ fontFamily: 'var(--font-mono)' }}>{popupData.status}</div>
                    </div>
                    <div className="bg-white/5 rounded-md p-2 border border-white/5">
                      <div className="text-slate-500 mb-0.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em' }}>CLEARANCE</div>
                      <div className="text-cyber-purple font-bold text-xs" style={{ fontFamily: 'var(--font-mono)' }}>{popupData.clearance}</div>
                    </div>
                    <div className="bg-white/5 rounded-md p-2 border border-white/5">
                      <div className="text-slate-500 mb-0.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em' }}>UPTIME</div>
                      <div className="text-cyber-blue font-bold text-xs" style={{ fontFamily: 'var(--font-mono)' }}>{popupData.uptime}</div>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div>
                    <div className="text-slate-500 mb-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em' }}>
                      LOADED_MODULES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {popupData.stack.map((tech, i) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-semibold rounded border transition-colors duration-300"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            color: i % 3 === 0 ? '#00f2ff' : i % 3 === 1 ? '#bc13fe' : '#00ff9f',
                            borderColor: i % 3 === 0 ? 'rgba(0,242,255,0.3)' : i % 3 === 1 ? 'rgba(188,19,254,0.3)' : 'rgba(0,255,159,0.3)',
                            backgroundColor: i % 3 === 0 ? 'rgba(0,242,255,0.08)' : i % 3 === 1 ? 'rgba(188,19,254,0.08)' : 'rgba(0,255,159,0.08)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t border-white/5 bg-white/[0.02]">
                  <div className="text-slate-600 flex items-center gap-1.5" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.08em' }}>
                    <span className="inline-block w-1 h-1 bg-cyber-blue/50 rounded-full"></span>
                    HOVER_TO_INSPECT // CLICK_TO_TOGGLE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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

          <div className="max-w-2xl mb-10 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="group relative border-l-2 border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300 pl-5 py-0.5"
            >
              <p className="text-lg md:text-xl text-slate-400 group-hover:text-slate-100 transition-colors leading-relaxed">
                Building <span className="text-white font-semibold">production-grade</span> web applications with
                <span className="text-cyber-blue font-bold mx-1.5 uppercase tracking-tighter text-base md:text-lg">clean architecture</span>
                and robust algorithmic logic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="group relative border-l-2 border-cyber-purple/30 hover:border-cyber-purple transition-all duration-300 pl-5 py-0.5"
            >
              <p className="text-lg md:text-xl text-slate-400 group-hover:text-slate-100 transition-colors leading-relaxed">
                Specialized in <span className="text-cyber-blue font-bold mx-1.5 uppercase tracking-tighter text-base md:text-lg">React ecosystems</span>
                and high-performance <span className="text-cyber-purple font-bold mx-1.5 uppercase tracking-tighter text-base md:text-lg">Node.js & Express.js backends</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="group relative border-l-2 border-cyber-green/30 hover:border-cyber-green transition-all duration-300 pl-5 py-0.5"
            >
              <p className="text-lg md:text-xl text-slate-400 group-hover:text-slate-100 transition-colors leading-relaxed">
                Implementing <span className="text-cyber-green font-bold mx-1.5 uppercase tracking-tighter text-base md:text-lg">MongoDB</span>
                data layers and <span className="text-white font-semibold">JWT auth systems</span> from concept to global deployment.
              </p>
            </motion.div>
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
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="relative">
              <div className="mono-label text-slate-500 mb-2">EXPERIENCE_INDEX</div>
              <div className="text-xl font-bold text-cyber-blue font-heading tracking-tight">FRESHER_DEEPCORE</div>
              <div className="absolute -left-2 top-0 w-0.5 h-full bg-cyber-blue/20"></div>
            </div>
            <div className="relative">
              <div className="mono-label text-slate-500 mb-2">PROJECTS_V_SHIPPED</div>
              <div className="text-xl font-bold text-white font-heading tracking-tight">5_STABLE_BUILDS</div>
              <div className="absolute -left-2 top-0 w-0.5 h-full bg-white/10"></div>
            </div>
            <div className="relative hidden sm:block">
              <div className="mono-label text-slate-500 mb-2">COGNITIVE_ARRAY</div>
              <div className="text-xl font-bold text-white font-heading tracking-tight">FULLSTACK.mjs</div>
              <div className="absolute -left-2 top-0 w-0.5 h-full bg-white/10"></div>
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
