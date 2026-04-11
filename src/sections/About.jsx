import React from 'react';
import { motion } from 'framer-motion';

const Terminal = ({ children, title = "guest@aviral-sys:~" }) => {
  return (
    <div className="terminal-window w-full">
      <div className="terminal-header">
        <span className="text-[10px] font-mono text-cyber-blue font-bold tracking-widest">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      <div className="p-6 font-mono text-sm overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
               {/* Use generate_image later for proper photo placeholders if needed, but for now I'll use a stylized div */}
               <div className="w-full aspect-square bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 border-2 border-cyber-blue/30 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                  <div className="text-8xl font-black text-white/10 select-none">WHOAMI</div>
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-blue"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-purple"></div>
               </div>
               {/* Floating Data Tags */}
               <div className="absolute top-10 -right-4 bg-cyber-blue text-black text-[10px] font-bold px-2 py-1 rotate-12">STATUS: ACTIVE</div>
               <div className="absolute bottom-10 -left-6 bg-cyber-purple text-white text-[10px] font-bold px-2 py-1 -rotate-12">CLASS: FULLSTACK</div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <span className="text-cyber-blue">01.</span> ABOUT.EXE
              <div className="flex-1 h-px bg-gradient-to-r from-cyber-blue/30 to-transparent"></div>
            </h2>

            <Terminal>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-slate-400 leading-relaxed">
                  I am a digital architect specializing in high-performance web systems. 
                  My journey began in the dark alleys of vanilla JS, evolving through 
                  framework wars to master the art of "Cyber-Visual-Optimization".
                </div>
                <div className="flex gap-2 pt-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <span className="text-white">cat interests.txt</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-cyber-blue/70">
                  <span>- Neural Graphics</span>
                  <span>- Cloud Fortification</span>
                  <span>- Interactive Simulators</span>
                  <span>- Low-Latency Systems</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <span className="text-white">run manifest.sh</span>
                </div>
                <div className="text-slate-400 italic">
                  "The gap between imagination and reality is just a few thousand lines of code."
                </div>
                <div className="flex gap-1 animate-pulse">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <div className="w-2 h-4 bg-cyber-blue"></div>
                </div>
              </div>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
