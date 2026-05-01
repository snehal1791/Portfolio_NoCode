
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="relative glass p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden shadow-3xl">
        <div className="relative md:absolute top-0 right-0 mb-8 md:mb-0 md:p-8">
          <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-[9px] uppercase tracking-[0.3em] font-black text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span>Currently accepting projects</span>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4">Intake Protocol</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">Architecting your next system</h3>
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            Ready to transition from building velocity to strategic infrastructure? Tell me about your system requirements or current bottlenecks.
          </p>
        </div>

        <form 
          action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'your-id'}`}
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest font-black text-white/30 ml-2">Your Name</label>
            <input 
              required
              name="name"
              type="text" 
              placeholder="e.g. Alex Chen"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest font-black text-white/30 ml-2">Work Email</label>
            <input 
              required
              name="email"
              type="email" 
              placeholder="alex@company.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[9px] uppercase tracking-widest font-black text-white/30 ml-2">System Requirements & Bottlenecks</label>
            <textarea 
              required
              name="message"
              rows={4}
              placeholder="Tell me about the workflow bottleneck you're looking to solve, your current tech stack, and the target outcome..."
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10 resize-none"
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl flex items-center justify-center space-x-3 group"
            >
              <span>Submit Intake Form</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
