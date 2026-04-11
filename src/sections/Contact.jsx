import React from 'react';
import { motion } from 'framer-motion';
import { SendHorizontal, GitBranch, Terminal, Mail, AtSign } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="text-cyber-blue">05.</span> CONTACT_CHANNEL
            </h2>
            <p className="text-slate-400 mb-10 font-mono text-sm leading-relaxed">
              Establishing a priority uplink. Whether you have a mission for me or just want to discuss the future of the void, my channel is always open.
            </p>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 p-4 glass-card border-white/5 hover:border-cyber-blue/50 transition-all group">
                <div className="p-3 bg-cyber-blue/10 rounded-lg group-hover:bg-cyber-blue group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5 text-cyber-blue group-hover:text-black" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Primary_Uplink</div>
                  <div className="text-white font-bold">aviral@system.io</div>
                </div>
              </a>
              
              <div className="flex gap-4">
                {[
                  { icon: GitBranch, link: "#" },
                  { icon: Terminal, link: "#" },
                  { icon: AtSign, link: "#" },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="p-4 glass-card border-white/5 hover:border-cyber-purple/50 text-slate-400 hover:text-cyber-purple transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-cyber-blue/20 relative"
          >
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-black border border-cyber-blue px-4 py-1 text-[10px] font-black text-cyber-blue tracking-[0.2em]">
              MSG_ENCRYPT_ON
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-cyber-blue uppercase mb-2 tracking-widest">Ident_Name</label>
                  <input 
                    type="text" 
                    placeholder="REQUIRED"
                    className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-cyber-blue transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-cyber-blue uppercase mb-2 tracking-widest">Uplink_Addr</label>
                  <input 
                    type="email" 
                    placeholder="REQUIRED"
                    className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-cyber-blue transition-colors font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-cyber-blue uppercase mb-2 tracking-widest">Payload_Data</label>
                <textarea 
                  rows="5"
                  placeholder="TRANSMISSION START..."
                  className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-cyber-blue transition-colors font-mono resize-none"
                ></textarea>
              </div>
              <button className="cyber-button w-full flex items-center justify-center gap-3">
                <SendHorizontal size={18} /> INITIATE_TRANSFER
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-slate-600">
            © 2026 AVIRAL.SYS - ALL_RIGHTS_PROTECTED
          </div>
          <div className="flex gap-6 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            <span className="hover:text-cyber-blue cursor-pointer transition-colors">Internal_Audit</span>
            <span className="hover:text-cyber-blue cursor-pointer transition-colors">Manifesto</span>
            <span className="hover:text-cyber-blue cursor-pointer transition-colors">Uptime: 99.99%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
