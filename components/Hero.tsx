
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 md:pt-48 pb-24 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background geometric nodes simulation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-[1px] h-[400px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-blue-500/10 blur-sm animate-float" />
        <div className="absolute top-1/3 right-1/2 w-3 h-3 rounded-full bg-indigo-500/10 blur-md animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-[9px] uppercase tracking-[0.3em] font-black text-cyan-400 mb-10 shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        <span>Currently accepting projects</span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-[100px] font-extrabold mb-8 tracking-tighter leading-[0.95] liquid-metal max-w-5xl">
        Full-Stack <br className="hidden md:block" /> Automation Engineer.
      </h1>

      <p className="max-w-2xl text-base md:text-xl text-gray-400 mb-14 font-medium leading-relaxed tracking-tight px-4">
        Engineering high-performance internal tools and SaaS backends. <br className="hidden md:block" /> 
        Specializing in the <span className="text-white">WeWeb + Retool + Supabase + Xano + Softr + Airtable</span> ecosystem.
      </p>

      <div className="flex flex-col items-center space-y-12">
        <a 
          href="#contact" 
          className="animate-shine px-14 py-6 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-blue-500 transition-all active:scale-95 shadow-2xl shadow-blue-500/20"
        >
          Start Project
        </a>

        {/* Minimalist Stack Signature */}
        <div className="flex flex-wrap justify-center gap-3">
          {['WeWeb', 'Retool', 'Supabase', 'Xano', 'Softr', 'Airtable'].map((tool) => (
            <div 
              key={tool} 
              className="px-4 py-2 border border-white/5 bg-white/5 rounded-full backdrop-blur-sm relative overflow-hidden group transition-all hover:border-blue-500/30 hover:bg-white/10"
            >
              {/* Subtle Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
              <div className="flex items-center space-x-2">
                <span className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/90 transition-colors">
                  {tool}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
