
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Trophy, Settings, Github, Layers, X, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyDetailProps {
  project: Project;
  onBack: () => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ project, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto"
    >
      {/* Lightbox / Fullscreen Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full glass border border-white/10 rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl flex items-center justify-center">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption}
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200&h=800&text=${encodeURIComponent(selectedImage.caption)}`;
                  }}
                />
              </div>
              <p className="mt-8 text-lg text-white/80 font-medium text-center max-w-3xl leading-relaxed">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Portfolio</span>
        </button>
        <div className="flex items-center space-x-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 transition-all"
            >
              <Github className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-widest">View PR & Code</span>
            </a>
          )}
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">View Demo Video</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-purple-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em]">{project.awards}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[0.9]">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
             <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-lg italic">
                "{project.challenge}"
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400">The Solution</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                {project.solution}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Smart Schema Mapping',
                  'Dynamic Status Tracking',
                  'Auto Date Normalization',
                  'Native Retool Theming',
                  'No-Gap Visual Logic',
                  'Keyboard Accessibility'
                ].map(feature => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-white/10 p-8 flex items-center justify-center relative group">
             <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
             <div className="text-center relative z-10">
               <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                 <Settings className="w-10 h-10 text-blue-400 animate-spin-slow" />
               </div>
               <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Normalization Engine Active</p>
               <div className="mt-6 flex flex-col space-y-2">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${30 + i * 20}%` }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }}
                        className="h-full bg-blue-500/50"
                     />
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Screenshots) */}
      {project.gallery && (
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-4">Visual Showcase</h2>
            <p className="text-3xl font-extrabold tracking-tight">Interface & Configuration</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.gallery.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <div 
                  className="glass border border-white/10 rounded-[2.5rem] overflow-hidden bg-slate-900 group aspect-[16/10] cursor-zoom-in relative"
                  onClick={() => setSelectedImage(item)}
                >
                  <motion.div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                    <div className="bg-white/20 p-4 rounded-full border border-white/30">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <img 
                    src={item.url} 
                    alt={item.caption}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200&h=800&text=${encodeURIComponent(item.caption)}`;
                    }}
                  />
                </div>
                <p className="text-sm text-gray-500 italic leading-relaxed text-center px-8">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Feature Deep Dive */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center border border-green-500/30">
              <Layers className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Dynamic Mapping</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Flexible schema support using fieldMapping attributes allowing it to work with any SQL or API query structure seamlessly.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold">Progress Computation</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Automated completion calculation driven by a 'single source of truth' status manifest, ensuring visual data integrity.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 space-y-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold">Visual Precision</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Custom segment-based rendering algorithm prevents visual gaps between timeline nodes for a polished, high-end feel.
            </p>
          </div>
        </div>
      </section>

      {/* Code Snippets */}
      {project.snippets && (
        <section className="px-6 py-32 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-12 text-center">Implementation Logic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(project.snippets).map(([lang, code]) => (
                <div key={lang} className="glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{lang}</span>
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/20" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                      <div className="w-2 h-2 rounded-full bg-green-500/20" />
                    </div>
                  </div>
                  <pre className="p-8 text-xs font-mono text-blue-300/80 leading-relaxed overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Result Footer */}
      <footer className="px-6 py-32 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-300 leading-relaxed italic">
          "{project.result}"
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all"
          >
            Watch Demo Video
          </a>
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-black uppercase tracking-widest border border-white/10 transition-all"
          >
            Back to Home
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

export default CaseStudyDetail;
