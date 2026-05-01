
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';

const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      style={{ transitionDelay: `${index * 50}ms` }}
      className={`group relative border-r border-b border-white/5 p-6 md:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
            {skill.icon}
          </div>
          <span className="text-[8px] font-mono text-white/10 group-hover:text-blue-500/50 transition-colors uppercase tracking-widest">
            Module {index + 1}
          </span>
        </div>
        
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-white/40 group-hover:text-white transition-colors">
          {skill.name}
        </h4>
        <p className="text-[10px] text-gray-500 leading-relaxed font-medium opacity-60 group-hover:opacity-100 transition-opacity max-w-[180px]">
          {skill.description}
        </p>
        
        <div className="mt-6 flex items-center space-x-2">
          <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
          <div className="h-[1px] w-4 bg-white/5 group-hover:bg-blue-500/20 transition-colors" />
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-white/5 overflow-hidden">
      <div 
        ref={headerRef}
        className={`flex flex-col md:flex-row items-baseline justify-between mb-12 transition-all duration-1000 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div>
          <h2 className="text-[9px] uppercase tracking-[0.4em] font-black text-blue-500 mb-3">Technical Inventory</h2>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">Core Engine Stack</h3>
        </div>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-4 md:mt-0 opacity-50">
          Precision-engineered internal tool infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-white/5">
        {SKILLS.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
