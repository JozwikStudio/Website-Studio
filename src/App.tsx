import { useEffect } from 'react';
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
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main > section')) as HTMLElement[];
    let isScrolling = false;
    let touchStartY = 0;
    let touchCurrentY = 0;
    const sectionPositions = sections.map(section => section.offsetTop);

    const getCurrentSectionIndex = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      for (let i = 0; i < sectionPositions.length; i += 1) {
        const start = sectionPositions[i];
        const end = sectionPositions[i + 1] ?? Number.POSITIVE_INFINITY;
        if (scrollTop >= start - 20 && scrollTop < end - 20) {
          return i;
        }
      }
      return 0;
    };

    const scrollToSection = (index: number) => {
      const target = sections[index];
      if (!target) return;

      isScrolling = true;
      window.scrollTo({ top: target.offsetTop, behavior: 'auto' });

      window.setTimeout(() => {
        isScrolling = false;
      }, 700);
    };

    const onWheel = (event: WheelEvent) => {
      if (isScrolling || !sections.length || event.deltaY === 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();

      const currentIndex = getCurrentSectionIndex();
      const targetIndex = event.deltaY > 0
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

      if (targetIndex !== currentIndex) {
        scrollToSection(targetIndex);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchCurrentY = touchStartY;
    };

    const onTouchMove = (event: TouchEvent) => {
      touchCurrentY = event.touches[0]?.clientY ?? touchCurrentY;
      event.preventDefault();
    };

    const onTouchEnd = () => {
      if (isScrolling || !sections.length) return;

      const deltaY = touchStartY - touchCurrentY;
      if (Math.abs(deltaY) < 30) return;

      const currentIndex = getCurrentSectionIndex();
      const targetIndex = deltaY > 0
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

      if (targetIndex !== currentIndex) {
        scrollToSection(targetIndex);
      }
    };

    document.addEventListener('wheel', onWheel, { passive: false, capture: true });
    document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    document.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true, capture: true });

    return () => {
      document.removeEventListener('wheel', onWheel, { capture: true });
      document.removeEventListener('touchstart', onTouchStart, { capture: true });
      document.removeEventListener('touchmove', onTouchMove, { capture: true });
      document.removeEventListener('touchend', onTouchEnd, { capture: true });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-noir">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Vignette overlay */}
      <div className="vignette-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <Philosophy />
        <Gallery />
        <Campaigns />
        <StudioSessions />
        <Editorial />
        <Portraits />
        <Contact />
      </main>
    </div>
  );
}

export default App;
