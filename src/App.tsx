import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import Gallery from './sections/Gallery';
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
  const sections = ['hero', 'philosophy', 'gallery', 'campaigns', 'studio', 'editorial', 'portraits', 'contact'];
  const animationDuration = 2400;

  useEffect(() => {
    // Disable native scroll
    document.body.style.overflow = 'hidden';
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isAnimating.current) return;
      
      const delta = e.deltaY;
      
      // Very sensitive threshold
      if (Math.abs(delta) > 5) {
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
        }, animationDuration + 100);
      }
    };

    // Touch handling for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      
      // Very sensitive threshold for touch
      if (Math.abs(deltaY) > 20) {
        isAnimating.current = true;
        
        if (deltaY > 0 && currentSection < sections.length - 1) {
          setCurrentSection(prev => prev + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          setCurrentSection(prev => prev - 1);
        }
        
        setTimeout(() => {
          isAnimating.current = false;
        }, animationDuration + 100);
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
          setTimeout(() => { isAnimating.current = false; }, animationDuration + 100);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          isAnimating.current = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isAnimating.current = false; }, animationDuration + 100);
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
      document.body.style.overflow = '';
    };
  }, [currentSection]);

  return (
    <div className="relative bg-noir h-screen w-screen overflow-hidden">

      {/* Navigation */}
      <Navigation />

      {/* Sections container */}
      <main 
        className="relative h-full w-full transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transitionDuration: `${animationDuration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="h-screen w-screen">
          <Hero />
        </div>
        <div className="h-screen w-screen">
          <Philosophy isActive={currentSection === 1} />
        </div>
        <div className="h-screen w-screen">
          <Gallery isActive={currentSection === 2} />
        </div>
        <div className="h-screen w-screen">
          <Campaigns isActive={currentSection === 3} />
        </div>
        <div className="h-screen w-screen">
          <StudioSessions isActive={currentSection === 4} />
        </div>
        <div className="h-screen w-screen">
          <Editorial isActive={currentSection === 5} />
        </div>
        <div className="h-screen w-screen">
          <Portraits isActive={currentSection === 6} />
        </div>
        <div className="h-screen w-screen">
          <Contact isActive={currentSection === 7} />
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
