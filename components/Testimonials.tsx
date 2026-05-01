
import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialCard: React.FC<{ testimonial: any; index: number; featured?: boolean }> = ({ testimonial, index, featured = false }) => {
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
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`h-full group relative glass ${featured ? 'p-6 md:p-12 border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent' : 'p-6 md:p-8 border-white/5'} rounded-3xl transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          {featured && (
            <span className="text-[7px] font-black uppercase tracking-[0.4em] text-blue-400 mb-2">Executive Endorsement</span>
          )}
          <div className="flex items-center space-x-2 mb-1">
            <h5 className={`font-extrabold text-white uppercase tracking-[0.1em] ${featured ? 'text-[12px]' : 'text-[11px]'}`}>
              {testimonial.name}
            </h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#0077b5">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-black leading-tight">
            {testimonial.role} <span className="text-gray-700 mx-1">/</span> {testimonial.company}
          </p>
        </div>
      </div>

      <p className={`text-gray-300 leading-relaxed font-medium ${featured ? 'text-lg md:text-xl italic' : 'text-sm'}`}>
        "{testimonial.content}"
      </p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Power Trio: CEO, CTO, Director of Engineering
  const powerTrioIds = ['t1', 't2', 't4'];
  const powerTrio = TESTIMONIALS.filter(t => powerTrioIds.includes(t.id));
  
  // Exclude Power Trio and the Retool Contextual one (t5) from the bottom grid
  const otherTestimonials = TESTIMONIALS.filter(t => !powerTrioIds.includes(t.id) && t.id !== 't5');

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
    <section id="testimonials" className="py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div 
        ref={headerRef}
        className={`mb-12 md:mb-20 text-center transition-all duration-1000 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4">Social Proof</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter">Trusted by Founders & Engineering Leaders</h3>
      </div>

      {/* Featured Power Trio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {powerTrio.map((testimonial, idx) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} featured />
        ))}
      </div>

      {/* Remaining Wall of Trust */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherTestimonials.map((testimonial, idx) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx + 3} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
