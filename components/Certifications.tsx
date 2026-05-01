
import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../constants';

const CertificationCard: React.FC<{ cert: any; index: number }> = ({ cert, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <span className="text-blue-400 text-xl font-black">S</span>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Issuer</h4>
              <p className="text-sm font-bold text-white tracking-tight">{cert.issuer}</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Date Issued</h4>
            <p className="text-[11px] font-mono text-blue-400/80">{cert.date}</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-white mb-2 leading-none">
            {cert.title}
          </h3>
          <div className="h-1 w-12 bg-blue-500 rounded-full mb-6" />
          
          {cert.type === 'badge' ? (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-white/5 p-2 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <iframe 
                  src={`https://www.credly.com/embedded_badge/${cert.id}`}
                  width="150"
                  height="270"
                  frameBorder="0"
                  scrolling="no"
                  title={cert.title}
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold mb-4">
                  Skills Validated
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills?.map((skill: string) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[9px] font-black uppercase tracking-widest text-blue-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
              Verified Professional Credential
            </p>
          )}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">Credential ID</h4>
            <p className="text-[9px] font-mono text-gray-500 break-all">{cert.id}</p>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-widest text-green-500/80">Verified</span>
          </div>
        </div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20">
        <div className="absolute top-4 right-4 w-4 h-[1px] bg-blue-500" />
        <div className="absolute top-4 right-4 w-[1px] h-4 bg-blue-500" />
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-baseline justify-between mb-12 md:mb-20"
      >
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4">Credential Registry</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">Professional Certifications</h3>
        </div>
        <div className="max-w-xs flex flex-col space-y-2 mt-4 md:mt-0">
          <p className="text-xs text-gray-500 leading-relaxed font-semibold uppercase tracking-wider">
            Verified expertise in enterprise automation and no-code architecture.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, idx) => (
          <CertificationCard key={cert.id} cert={cert} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
