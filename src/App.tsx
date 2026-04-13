import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

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

gsap.registerPlugin(ScrollTrigger, Observer);

function App() {
  useEffect(() => {
    const sections = ScrollTrigger.getAll()
      .filter(st => st.trigger instanceof HTMLElement)
      .sort((a, b) => a.start - b.start);

    let index = 0;
    let locked = false;

    const goTo = (i: number) => {
      const target = sections[i];
      if (!target || locked) return;

      locked = true;
      index = i;

      gsap.to(window, {
        scrollTo: target.start,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          locked = false;
        },
      });
    };

    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      tolerance: 10,

      onDown: () => {
        goTo(Math.min(index + 1, sections.length - 1));
      },

      onUp: () => {
        goTo(Math.max(index - 1, 0));
      },
    });

    ScrollTrigger.refresh();

    return () => {
      Observer.getAll().forEach(o => o.kill());
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative bg-noir">

      <Navigation />

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
