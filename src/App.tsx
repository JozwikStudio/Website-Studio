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

    const getNearestSectionIndex = () => {
      let nearestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = index;
        }
      });

      return nearestIndex;
    };

    const scrollToSection = (index: number) => {
      const target = sections[index];
      if (!target) return;

      isScrolling = true;
      target.scrollIntoView({ behavior: 'auto', block: 'start' });

      window.setTimeout(() => {
        isScrolling = false;
      }, 700);
    };

    const onWheel = (event: WheelEvent) => {
      if (isScrolling || !sections.length || event.deltaY === 0) return;
      event.preventDefault();
      event.stopPropagation();

      const currentIndex = getNearestSectionIndex();
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
    };

    const onTouchEnd = () => {
      if (isScrolling || !sections.length) return;

      const deltaY = touchStartY - touchCurrentY;
      if (Math.abs(deltaY) < 20) return;

      const currentIndex = getNearestSectionIndex();
      const targetIndex = deltaY > 0
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);

      if (targetIndex !== currentIndex) {
        scrollToSection(targetIndex);
      }
    };

    document.addEventListener('wheel', onWheel, { passive: false, capture: true });
    document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true, capture: true });
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
