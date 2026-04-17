import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import VisualLeadership from './sections/VisualLeadership';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
// About section temporarily disabled until a new portrait is ready
// import Philosophy from './sections/Philosophy';
import Campaigns from './sections/Campaigns';
import StudioSessions from './sections/StudioSessions';
import Editorial from './sections/Editorial';
import Portraits from './sections/Portraits';
import Contact from './sections/Contact';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const isAnimating = useRef(false);
  const touchStartY = useRef(0);
  const sections = ['visual', 'hero', 'arbeiten', 'kampagnen', 'studio', 'editorial', 'portraits', 'kontakt'];
  const animationDuration = 2400;
  const scrollLockDuration = 300;

  useEffect(() => {
    // Disable native scroll
    document.body.style.overflow = 'hidden';
    
    const handleScrollToSection = (e: CustomEvent) => {
      const sectionId = e.detail;
      const sectionIndex = sections.indexOf(sectionId);
      if (sectionIndex !== -1) {
        setCurrentSection(sectionIndex);
      }
    };

    window.addEventListener('scrollToSection', handleScrollToSection as EventListener);
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isAnimating.current) return;
      
      const delta = e.deltaY;
      
      // Slightly higher threshold for a calmer, more controlled feel
      if (Math.abs(delta) > 32) {
        isAnimating.current = true;
        
        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down
          setCurrentSection(prev => prev + 1);
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up
          setCurrentSection(prev => prev - 1);
        }
        
        setTimeout(() => {
          isAnimating.current = false;
        }, scrollLockDuration);
      }
    };

    // Touch handling for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      
      // Slightly higher threshold for touch to avoid accidental jumps
      if (Math.abs(deltaY) > 36) {
        isAnimating.current = true;
        
        if (deltaY > 0 && currentSection < sections.length - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
        
        setTimeout(() => {
          isAnimating.current = false;
        }, scrollLockDuration);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating.current) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (currentSection < sections.length - 1) {
          isAnimating.current = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isAnimating.current = false; }, scrollLockDuration);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          isAnimating.current = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isAnimating.current = false; }, scrollLockDuration);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scrollToSection', handleScrollToSection as EventListener);
      document.body.style.overflow = '';
    };
  }, [currentSection]);

  // Dispatch section change event
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sectionChange', { detail: { section: sections[currentSection], index: currentSection } }));
  }, [currentSection]);

  return (
    <div className="relative bg-noir viewport-screen w-screen overflow-hidden">
      {/* Navigation */}
      <Navigation />

      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity"
        style={{
          opacity: currentSection <= 1 ? 1 : 0,
          transition: `opacity ${animationDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none spotlight-ambient" />
        <div className="absolute inset-0 pointer-events-none spotlight-beam" />
      </div>

      {/* Sections container */}
      <main 
        className="relative z-10 h-full w-full transition-transform"
        style={{
          transform: `translateY(-${currentSection * 100}%)`,
          transitionDuration: `${animationDuration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="viewport-screen w-screen safe-screen-shell">
          <VisualLeadership />
        </div>
        <div className="viewport-screen w-screen safe-screen-shell">
          <Hero isActive={currentSection === 1} />
        </div>
        <div className="viewport-screen w-screen safe-screen-shell">
          <Gallery isActive={currentSection === 2} />
        </div>
        {/* About section temporarily disabled until the updated portrait is ready */}
        <div className="viewport-screen w-screen safe-screen-shell">
          <Campaigns isActive={currentSection === 3} />
        </div>
        <div className="viewport-screen w-screen safe-screen-shell">
          <StudioSessions isActive={currentSection === 4} />
        </div>
        <div className="viewport-screen w-screen safe-screen-shell">
          <Editorial isActive={currentSection === 5} />
        </div>
        <div className="viewport-screen w-screen safe-screen-shell">
          <Portraits isActive={currentSection === 6} />
        </div>
        <div className="viewport-screen w-screen safe-screen-shell">
          <Contact />
        </div>
      </main>

      {/* Section indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-gold w-2 h-6' 
                : 'bg-ivory/30 hover:bg-ivory/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
