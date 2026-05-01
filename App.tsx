
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AIAgent from './components/AIAgent';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CaseStudyDetail from './components/CaseStudyDetail';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  // Update GA on case study open
  useEffect(() => {
    if (selectedCaseStudy) {
      ReactGA.send({ hitType: "pageview", page: `/case-study/${selectedCaseStudy.id}` });
      document.body.style.overflow = 'hidden';
    } else {
      ReactGA.send({ hitType: "pageview", page: '/' });
      document.body.style.overflow = 'unset';
    }
  }, [selectedCaseStudy]);

  return (
    <div className="relative selection:bg-white selection:text-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {selectedCaseStudy ? (
          <CaseStudyDetail 
            key="case-study"
            project={selectedCaseStudy} 
            onBack={() => setSelectedCaseStudy(null)} 
          />
        ) : (
          <div key="portfolio-main" className="relative">
            {/* Background with fluid slow-motion elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/5 blur-[150px] rounded-full animate-float opacity-30" />
              <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-indigo-900/5 blur-[150px] rounded-full animate-float opacity-20" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            </div>

            <div className="relative z-10">
              <Header />
              <main>
                <Hero />
                <Skills />
                <Projects onSelectCaseStudy={setSelectedCaseStudy} />
                <Testimonials />
                <Certifications />
                <Contact />
              </main>
              <Footer />
              <AIAgent />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
