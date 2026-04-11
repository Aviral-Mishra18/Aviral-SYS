import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Cpu, Globe } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING SYSTEM_INTERFACE... ACCESS GRANTED.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            FULLSTACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue animate-gradient-x">
              DEVELOPER.
            </span>
          </h1>
          
          <div className="font-mono text-cyber-blue/80 mb-8 h-6">
            {text}<span className="animate-pulse">_</span>
          </div>
          
          <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
            Architecting the future of the web with high-performance, scalable solutions. Specialized in 
            <span className="text-cyber-blue font-bold"> Fullstack Engineering</span>, 
            <span className="text-cyber-purple font-bold"> Distributed Systems</span>, and 
            <span className="text-cyber-green font-bold"> Interactive Realities</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="cyber-button flex items-center gap-2">
              EXPLORE_SYSTEM <ChevronRight size={18} />
            </button>
            <button className="px-6 py-2 border border-white/10 hover:border-white/30 transition-all text-white font-bold opacity-70 hover:opacity-100 flex items-center gap-2">
              DOWNLOAD_MANIFEST
            </button>
          </div>

          <div className="pt-8 border-t border-white/5 flex gap-10">
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">Experience_Index</div>
              <div className="text-xl font-bold text-white font-mono">04+ YEARS</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">Nodes_Deployed</div>
              <div className="text-xl font-bold text-white font-mono">24+ ACTIVE</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">Global_Latency</div>
              <div className="text-xl font-bold text-white font-mono">0.02ms</div>
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
