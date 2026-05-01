
import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, Briefcase, Github, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Expertise', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Certification', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -20% 0px', // Wide enough to catch sections but focused on the top half
      threshold: [0, 0.05, 0.1], // Multiple thresholds for better sensitivity
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Professional UI/UX approach: 
      // Instead of relying on the last entry, we evaluate all sections currently in the viewport
      // to find the one that is most prominent at the top.
      
      const sections = navItems.map(item => ({
        id: item.href,
        element: document.querySelector(item.href)
      }));

      const visibleSections = sections.filter(s => {
        if (!s.element) return false;
        const rect = s.element.getBoundingClientRect();
        // A section is "active" if its top is in the top 40% of the screen
        // or if it's a large section currently covering the top 20%
        return rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.2;
      });

      if (visibleSections.length > 0) {
        // Pick the one closest to the top of the viewport
        const bestSection = visibleSections.reduce((prev, curr) => {
          const prevRect = prev.element!.getBoundingClientRect();
          const currRect = curr.element!.getBoundingClientRect();
          return Math.abs(prevRect.top) < Math.abs(currRect.top) ? prev : curr;
        });
        
        setActiveSection(bestSection.id);
      } else if (window.scrollY < 100) {
        // Fallback for the very top of the page
        setActiveSection('#about');
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    // Handle the very top of the page
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('#about');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-6 md:py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass px-6 md:px-10 py-3 md:py-4 rounded-full border border-white/10 shadow-2xl relative">
        <div className="text-[11px] font-black tracking-[0.4em] uppercase text-white">
          Snehal Parate
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className={`transition-all duration-300 relative py-1 ${
                activeSection === item.href ? 'text-white' : 'hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 animate-in fade-in zoom-in-95 duration-500" />
              )}
            </a>
          ))}
          <div className="flex items-center space-x-6 border-l border-white/10 pl-10">
            <a href="https://www.linkedin.com/in/snehalparate17/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/snehal1791" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://x.com/sne_hal_p" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors" title="X (Twitter)">
              <Twitter size={18} />
            </a>
            <a href="https://contra.com/snehalparate?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=snehalparate" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors" title="Contra">
              <Briefcase size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white/70 hover:text-white transition-colors p-1"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-2 bg-slate-900/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all py-3 border-b border-white/5 last:border-0 flex items-center justify-between group ${
                    activeSection === item.href ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`w-1 h-1 rounded-full bg-blue-500 transition-opacity ${
                    activeSection === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </a>
              ))}
              <div className="flex items-center justify-center space-x-8 pt-6 border-t border-white/5">
                <a href="https://www.linkedin.com/in/snehalparate17/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/snehal1791" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://x.com/sne_hal_p" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://contra.com/snehalparate?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=snehalparate" target="_blank" rel="noreferrer" className="text-white/40 hover:text-blue-400 transition-colors">
                  <Briefcase size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
