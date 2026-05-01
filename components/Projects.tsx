
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, TESTIMONIALS } from '../constants';
import { Project } from '../types';

const CodeTooltip: React.FC<{ snippet: string; active: boolean }> = ({ snippet, active }) => {
  return (
    <div 
      className={`absolute bottom-full left-0 mb-4 z-20 pointer-events-none transition-all duration-300 ${
        active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
      }`}
    >
      <div className="glass p-4 rounded-xl border border-blue-500/30 shadow-2xl backdrop-blur-3xl min-w-[220px] max-w-[280px] md:max-w-none">
        <div className="flex items-center space-x-2 mb-3 border-b border-white/10 pb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
          <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest ml-auto">Implementation Logic</span>
        </div>
        <pre className="text-[10px] font-mono text-blue-300 leading-relaxed overflow-x-auto whitespace-pre">
          <code>{snippet}</code>
        </pre>
      </div>
    </div>
  );
};

const TagWithSnippet: React.FC<{ tag: string; snippet?: string }> = ({ tag, snippet }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`px-3 py-1.5 bg-white/5 border rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 cursor-default flex items-center ${
        isHovered ? 'border-blue-500/50 text-blue-400 bg-blue-500/5' : 'border-white/10 text-white/50'
      }`}>
        {tag}
      </span>
      {snippet && <CodeTooltip snippet={snippet} active={isHovered} />}
    </div>
  );
};

const ReconciliationVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Central Matching Engine */}
      <div className="relative z-10 w-48 h-48 rounded-3xl glass border border-blue-500/30 flex items-center justify-center flex-col space-y-2 group/engine">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-spin-slow">
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-blue-400/50" />
        </div>
        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Matching Engine</div>
        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold border border-green-500/30">90% Accuracy</div>
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 flex items-center justify-between px-12">
        {/* Left Stream: Bank Records */}
        <div className="space-y-4">
          <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em] mb-2">Bank Statements</div>
          {[1, 2, 3].map(i => (
            <div key={i} className="w-32 h-10 glass border border-white/5 rounded-lg p-2 flex items-center space-x-2 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
              <div className="w-2 h-2 rounded-full bg-blue-400/50" />
              <div className="h-1.5 w-full bg-white/10 rounded" />
            </div>
          ))}
        </div>

        {/* Right Stream: Internal Data */}
        <div className="space-y-4 text-right">
          <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em] mb-2">Internal Ledger</div>
          {[1, 2, 3].map(i => (
            <div key={i} className="w-32 h-10 glass border border-white/5 rounded-lg p-2 flex items-center space-x-2 justify-end animate-pulse" style={{ animationDelay: `${i * 0.7}s` }}>
              <div className="h-1.5 w-full bg-white/10 rounded" />
              <div className="w-2 h-2 rounded-full bg-indigo-400/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Badges */}
      {[
        { name: 'JavaScript Algorithms', pos: 'top-[15%] left-[20%]', icon: '📜' },
        { name: 'Retool Workflows', pos: 'bottom-[15%] right-[20%]', icon: '🔄' },
        { name: 'Python/Render', pos: 'top-[20%] right-[15%]', icon: '🐍' },
        { name: 'Scheduled Runs', pos: 'bottom-[20%] left-[15%]', icon: '⏰' }
      ].map((badge, i) => (
        <div 
          key={i}
          className={`absolute ${badge.pos} animate-float glass px-3 py-1.5 rounded-full border border-white/10 z-20 flex items-center space-x-2`}
          style={{ animationDelay: `${i * 1.5}s` }}
        >
          <span className="text-[10px]">{badge.icon}</span>
          <span className="text-[8px] font-black uppercase tracking-widest text-white/60">{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

const AdminPortalVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px]">
      {/* Retool Interface Simulation */}
      <div className="relative z-10 w-[85%] h-[70%] bg-slate-800/80 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group/retool">
        {/* Header */}
        <div className="h-10 bg-slate-700/30 border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500/50" />
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">High-Performance Portal</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-6 grid grid-cols-12 gap-4 h-full">
          {/* Sidebar */}
          <div className="col-span-3 space-y-3 border-r border-white/5 pr-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`h-2 rounded bg-white/${i === 1 ? '10' : '5'} w-${i === 1 ? 'full' : '2/3'}`} />
            ))}
          </div>
          
          {/* Main Table Area */}
          <div className="col-span-9 space-y-4">
            <div className="flex justify-between items-center">
              <div className="h-4 w-1/4 bg-blue-500/20 rounded" />
              <div className="h-6 w-20 bg-blue-600/40 rounded-full" />
            </div>
            
            {/* Table Rows */}
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-8 w-full bg-white/5 rounded flex items-center px-3 space-x-4">
                  <div className="w-4 h-4 rounded bg-white/10" />
                  <div className="h-2 w-1/3 bg-white/10 rounded" />
                  <div className="h-2 w-1/4 bg-white/5 rounded" />
                  <div className="h-2 w-1/6 bg-green-500/20 rounded ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Badges */}
      {[
        { name: 'Retool', pos: 'top-[10%] left-[5%]', color: 'text-blue-400', icon: '🛠️' },
        { name: 'Xano', pos: 'top-[20%] right-[8%]', color: 'text-indigo-400', icon: '⚙️' },
        { name: 'SQL', pos: 'bottom-[25%] left-[10%]', color: 'text-cyan-400', icon: '📊' },
        { name: 'Reusable modules', pos: 'bottom-[15%] right-[15%]', color: 'text-purple-400', icon: '📦' },
        { name: 'Custom filter', pos: 'top-[40%] left-[2%]', color: 'text-green-400', icon: '🔍' },
        { name: 'Optimizations', pos: 'bottom-[10%] left-[30%]', color: 'text-yellow-400', icon: '⚡' }
      ].map((badge, i) => (
        <div 
          key={i}
          className={`absolute ${badge.pos} animate-float flex items-center glass px-3 py-1.5 rounded-full border border-white/10 z-20 shadow-xl`}
          style={{ animationDelay: `${i * 1.2}s` }}
        >
          <span className="text-xs mr-2">{badge.icon}</span>
          <span className={`font-black uppercase tracking-widest text-[8px] ${badge.color}`}>{badge.name}</span>
        </div>
      ))}

      {/* Backend Nodes (Xano) */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center animate-pulse">
        <div className="text-[8px] font-black text-blue-400 uppercase tracking-tighter">Xano API</div>
      </div>
      
      {/* Data Flow Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3].map(i => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px] animate-float"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Orchestration Badge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.3em] flex items-center space-x-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          <span>Backend Orchestration Active</span>
        </div>
      </div>
    </div>
  );
};

const EcosystemMap: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]">
      {/* Central WeWeb Frame */}
      <div className="relative z-10 w-[80%] h-[60%] bg-slate-800 rounded-xl border border-white/10 shadow-2xl overflow-hidden group/browser translate-y-4">
        <div className="h-6 bg-slate-700/50 border-b border-white/5 flex items-center px-3 space-x-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
        </div>
        <div className="p-4 flex flex-col space-y-3">
          <div className="h-4 w-1/3 bg-white/5 rounded" />
          <div className="h-20 w-full bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
             <span className="text-[9px] text-blue-400/50 font-mono tracking-widest uppercase">WeWeb Framework</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-8 bg-white/5 rounded-lg" />
            <div className="h-8 bg-white/5 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Integration Chips */}
      {[
        { name: 'Google Calendar', pos: 'top-[15%] left-[8%]', color: 'bg-blue-500', icon: '📅', size: 'small' },
        { name: 'Outlook', pos: 'top-[15%] right-[10%]', color: 'bg-indigo-500', icon: '✉️', size: 'small' },
        { name: 'Stripe', pos: 'bottom-[12%] left-[8%]', color: 'bg-purple-500', icon: '💳', size: 'large' },
        { name: 'Supabase', pos: 'bottom-[12%] right-[8%]', color: 'bg-green-500', icon: '⚡', size: 'large' }
      ].map((chip, i) => (
        <React.Fragment key={i}>
          {/* Glowing Line to center */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
            <line 
              x1={chip.pos.includes('left') ? '20%' : '80%'} 
              y1={chip.pos.includes('top') ? '20%' : '80%'} 
              x2="50%" 
              y2="50%" 
              stroke="rgba(59, 130, 246, 0.5)" 
              strokeWidth="1" 
              strokeDasharray="4 4"
              className="animate-[marquee_20s_linear_infinite]"
            />
          </svg>
          
          <div className={`absolute ${chip.pos} animate-float flex items-center glass rounded-full border border-white/10 z-20 transition-all duration-500 ${
            chip.size === 'large' ? 'px-6 py-3 scale-125' : 'px-3 py-1.5'
          }`} style={{ animationDelay: `${i * 1.5}s` }}>
            <span className={chip.size === 'large' ? 'text-base mr-2' : 'text-xs mr-2'}>{chip.icon}</span>
            <span className={`font-black uppercase tracking-widest text-white/70 ${chip.size === 'large' ? 'text-[11px]' : 'text-[8px]'}`}>{chip.name}</span>
          </div>
        </React.Fragment>
      ))}

      {/* Security Badge */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20 group-hover:scale-110 transition-transform cursor-help">
        <div className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full text-[7px] font-black uppercase tracking-[0.2em] shadow-xl backdrop-blur-xl flex items-center space-x-2">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.597 9.29-6.5 11.654-3.903-2.364-6.5-6.708-6.5-11.654 0-.681.056-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Security Verified</span>
        </div>
      </div>
    </div>
  );
};

const TimelineVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Vertical Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-white/10">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: '60%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />
      </div>

      <div className="relative z-10 w-full px-12 space-y-12">
        {[
          { color: 'bg-green-500', pos: 'left', active: true, label: 'Completed' },
          { color: 'bg-blue-500', pos: 'right', active: true, label: 'In Progress' },
          { color: 'bg-slate-500', pos: 'left', active: false, label: 'Upcoming' }
        ].map((node, i) => (
          <div key={i} className={`flex items-center space-x-4 ${node.pos === 'right' ? 'flex-row-reverse space-x-reverse ml-auto' : ''} w-fit relative`}>
            {/* Absolute indicator on the line */}
            <div 
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-slate-900 ${node.active ? node.color : 'bg-slate-700'} z-20`}
              style={{ [node.pos === 'left' ? 'right' : 'left']: '-54px' }}
            />
            
            <motion.div 
              initial={{ opacity: 0, x: node.pos === 'left' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
              className="glass p-4 rounded-2xl border border-white/10 min-w-[160px] shadow-2xl"
            >
              <div className="h-2 w-12 bg-white/10 rounded mb-2" />
              <div className={`h-4 w-20 rounded-full mb-3 flex items-center justify-center text-[7px] font-black uppercase tracking-widest ${node.active ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/30'}`}>
                {node.label}
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Floating Meta */}
      <div className="absolute top-10 right-10">
        <div className="glass px-4 py-2 rounded-full border border-yellow-500/30 flex items-center space-x-2 animate-bounce">
          <span className="text-xs">🏆</span>
          <span className="text-[8px] font-black uppercase tracking-widest text-yellow-500">Winner: Retool Challenge</span>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; onSelectCaseStudy?: (p: Project) => void }> = ({ project, index, onSelectCaseStudy }) => {
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
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Visual Representation */}
      <div className={`relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden glass border border-white/5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
        {project.id === 'timeline-component' ? (
          <TimelineVisual />
        ) : project.id === '0' ? (
          <AdminPortalVisual />
        ) : project.id === '1' ? (
          <ReconciliationVisual />
        ) : project.id === '2' ? (
          <EcosystemMap />
        ) : (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* Results Block */}
      <div className="flex flex-col text-left space-y-6 lg:space-y-8 px-2 lg:px-0">
        <div className="relative">
          {project.isCaseStudy && (
            <div className="absolute -top-8 left-0 flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-500 flex items-center">
                <span className="mr-1">🏆</span> Featured Case Study
              </span>
            </div>
          )}
          <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">{project.title}</h3>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
            {project.tags.map((tag: string) => (
              <TagWithSnippet key={tag} tag={tag} snippet={project.snippets?.[tag]} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="group/item">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">The Challenge</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div className="group/item">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-2">The Solution</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {project.isCaseStudy && onSelectCaseStudy && (
            <button 
              onClick={() => onSelectCaseStudy(project)}
              className="w-full lg:w-fit px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all flex items-center justify-center group/btn"
            >
              <span>Explore Case Study</span>
              <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}

          {!project.isCaseStudy && project.highlights && (
             <div className="group/item bg-slate-900/50 p-6 lg:p-8 rounded-[2rem] border border-blue-500/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4 flex items-center">
                 <span className="relative flex h-2 w-2 mr-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                 </span>
                 Systems Engineering Focus
               </h4>
               <ul className="space-y-3 relative z-10">
                 {project.highlights.map((point: string, i: number) => (
                   <li key={i} className="flex items-start text-xs text-gray-400 leading-relaxed">
                     <span className="text-blue-500 mr-3 font-mono">/</span>
                     {point}
                   </li>
                 ))}
               </ul>
             </div>
          )}
          
          {!project.isCaseStudy && (
            <div className="group/item bg-white/5 p-6 lg:p-8 rounded-[2rem] border border-white/10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400 mb-2">The Result</h4>
              <p className="text-white text-base lg:text-lg font-bold leading-relaxed">{project.result}</p>
            </div>
          )}

          {!project.isCaseStudy && project.resultCards && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
              {project.resultCards.map((card, i) => (
                <div key={i} className="glass p-4 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-blue-500/20 transition-all duration-500">
                  <span className={`text-[7px] font-black uppercase tracking-[0.2em] mb-1 block ${card.color}`}>
                    {card.label}
                  </span>
                  <p className="text-[10px] text-gray-300 font-semibold leading-tight">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ContextualTestimonial: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  return (
    <div className="max-w-3xl mx-auto my-24 lg:my-48 p-8 md:p-14 rounded-[2.5rem] lg:rounded-[3rem] border border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-1000" />
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0077b5">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Contextual Endorsement</span>
        </div>
        <p className="text-lg md:text-2xl font-medium text-white italic leading-relaxed mb-8">
          "{testimonial.content}"
        </p>
        <div>
          <h5 className="font-black text-white text-[11px] uppercase tracking-[0.2em]">{testimonial.name}</h5>
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-bold">
            {testimonial.role} <span className="text-gray-700 mx-1">/</span> {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{ onSelectCaseStudy?: (p: Project) => void }> = ({ onSelectCaseStudy }) => {
  const retoolTestimonial = TESTIMONIALS.find(t => t.id === 't5'); // David Mason

  return (
    <section id="projects" className="py-16 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12 md:mb-32 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4">Case Studies</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter">Featured Work & Outcomes</h3>
      </div>

      <div className="space-y-20 md:space-y-56">
        {PROJECTS.map((project, idx) => (
          <React.Fragment key={project.id}>
            <ProjectCard project={project} index={idx} onSelectCaseStudy={onSelectCaseStudy} />
            {/* Inject Retool Testimonial after the first project */}
            {idx === 0 && retoolTestimonial && (
              <ContextualTestimonial testimonial={retoolTestimonial} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
