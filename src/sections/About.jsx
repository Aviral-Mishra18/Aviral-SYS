import React from 'react';
import { motion } from 'framer-motion';

const Terminal = ({ children, title = "guest@aviral-sys:~" }) => {
  return (
    <div className="terminal-window w-full">
      <div className="terminal-header">
        <span className="font-bold tracking-widest" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem' }}>{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      <div className="p-6 text-sm overflow-hidden" style={{ fontFamily: 'var(--font-mono)' }}>
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
            className="relative"
          >
            <div className="relative group grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden rounded-sm border border-cyber-blue/20">
               {/* Main Profile Image */}
               <div className="w-full aspect-square relative bg-black flex items-center justify-center">
                  <img 
                    src="/cyber_profile_avatar_1775934274052.png" 
                    alt="Digital Identity" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  
                  {/* Scanning Line Animation */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent z-20 shadow-[0_0_15px_rgba(0,242,255,0.5)]"
                  />

                  {/* Matrix/Grid Overlay */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
                  
                  {/* Technical Overlay Graphics */}
                  <div className="absolute top-4 left-4 flex gap-1">
                    <div className="w-1 h-3 bg-cyber-blue animate-pulse"></div>
                    <div className="w-1 h-3 bg-cyber-blue/50"></div>
                    <div className="w-1 h-3 bg-cyber-blue/20"></div>
                  </div>
               </div>

               {/* Floating Data Tags */}
               <div className="absolute top-12 -right-4 bg-cyber-blue text-black text-[9px] font-black px-3 py-1 rotate-12 shadow-[5px_5px_0px_rgba(0,0,0,0.5)] z-30">
                 IDENTITY_SYNC: 100%
               </div>
               <div className="absolute bottom-12 -left-6 bg-cyber-purple text-white text-[9px] font-black px-3 py-1 -rotate-12 shadow-[5px_5px_0px_rgba(0,0,0,0.5)] z-30 tracking-widest">
                 CORE_LOGIC: STABLE
               </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-cyber-blue/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-cyber-purple/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              <span className="text-cyber-blue">01.</span> ABOUT.EXE
              <div className="flex-1 h-px bg-gradient-to-r from-cyber-blue/30 to-transparent"></div>
            </h2>

            <Terminal>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-slate-400 leading-[1.75]" style={{ fontFamily: 'var(--font-body)' }}>
                  Passionate <span className="text-white font-semibold italic">Fullstack Developer</span> and 
                  <span className="text-cyber-blue font-semibold"> Fresher</span> dedicated to building 
                  high-performance digital systems. I specialize in bridging the gap between clean 
                  architecture and cinematic user interfaces.
                </div>

                <div className="flex gap-2 pt-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <span className="text-white">access technical_matrix.json</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div>
                    <div className="text-cyber-purple font-bold text-[10px] uppercase mb-1 tracking-widest opacity-80">Languages</div>
                    <div className="grid grid-cols-1 gap-1 text-cyber-blue/80 text-[13px]">
                      <span>▸ C / C++ / Python</span>
                      <span>▸ JavaScript (ES6+)</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-cyber-purple font-bold text-[10px] uppercase mb-1 tracking-widest opacity-80">Frontend_Core</div>
                    <div className="grid grid-cols-1 gap-1 text-cyber-blue/80 text-[13px]">
                      <span>▸ React / Tailwind CSS</span>
                      <span>▸ GSAP / Framer Motion</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-cyber-purple font-bold text-[10px] uppercase mb-1 tracking-widest opacity-80">System_Backend</div>
                    <div className="grid grid-cols-1 gap-1 text-cyber-blue/80 text-[13px]">
                      <span>▸ Node.js / Express</span>
                      <span>▸ MongoDB / NoSQL</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-cyber-purple font-bold text-[10px] uppercase mb-1 tracking-widest opacity-80">Preferred_Tools</div>
                    <div className="grid grid-cols-1 gap-1 text-cyber-blue/80 text-[13px]">
                      <span>▸ Cursor AI / VS Code</span>
                      <span>▸ Git / Github Desktop</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <span className="text-white">echo $PHILOSOPHY</span>
                </div>
                <div className="text-slate-400 italic text-[13px] border-l-2 border-white/10 pl-3">
                  "Writing code is about creating systems that solve problems while feeling 
                  effortless to the user."
                </div>
                
                <div className="flex gap-1 animate-pulse pt-2">
                  <span className="text-cyber-green">guest@aviral-sys:~$</span>
                  <div className="w-2.5 h-4 bg-cyber-blue shadow-[0_0_10px_rgba(0,242,255,0.7)]"></div>
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
