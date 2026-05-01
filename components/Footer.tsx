
import React from 'react';
import { Linkedin, Twitter, Briefcase, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Snehal Parate
          </div>
          <p className="text-gray-500 text-sm">Full-Stack Automation Engineer.</p>
        </div>
        
        <div className="flex items-center space-x-8 text-gray-400">
          <a href="https://www.linkedin.com/in/snehalparate17/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/snehal1791" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://x.com/sne_hal_p" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="X (Twitter)">
            <Twitter size={20} />
          </a>
          <a href="https://contra.com/snehalparate?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=snehalparate" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Contra">
            <Briefcase size={20} />
          </a>
        </div>
        
        <div className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Snehal Parate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
