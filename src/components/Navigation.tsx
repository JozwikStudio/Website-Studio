import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (id === 'hero') {
      window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 40);
      return;
    }

    window.setTimeout(() => {
      const trigger = ScrollTrigger.getById(id);
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const extraArbeitenOffset = id === 'arbeiten' ? Math.round(window.innerHeight * 0.1) : 0;

      if (trigger && typeof trigger.start === 'number' && typeof trigger.end === 'number') {
        const stableProgress = 0.6;
        const targetTop = Math.max(
          0,
          Math.round(trigger.start + (trigger.end - trigger.start) * stableProgress) + extraArbeitenOffset
        );
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        });
        return;
      }

      const element = document.getElementById(id);
      if (!element) return;

      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetTop = Math.max(
        0,
        Math.round(elementTop - headerHeight + Math.round(window.innerHeight * 0.7) + extraArbeitenOffset)
      );

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      });
    }, 40);
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Philosophie', id: 'philosophie' },
    { label: 'Arbeiten', id: 'arbeiten' },
    { label: 'Kampagnen', id: 'kampagnen' },
    { label: 'Studio', id: 'studio-sessions' },
    { label: 'Editorial', id: 'editorial' },
    { label: 'Portraits', id: 'portraits' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  return (
    <>
      {/* Fixed header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-noir/90 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="px-[6vw] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="inline-flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
          >
            <img
              src="/images/logo.png"
              alt="Józwik Studio"
              className={`transition-all duration-300 ${isScrolled ? 'w-6 h-6' : 'w-7 h-7'}`}
            />
            <span
              className={`font-display font-medium text-ivory tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Józwik Studio
            </span>
          </a>

          {/* Menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-ivory/80 hover:text-ivory transition-colors duration-300"
          >
            <span className="text-micro">MENU</span>
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-noir transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Menu header */}
          <div className="px-[6vw] py-6 flex items-center justify-between">
            <a href="#" className="inline-flex items-center gap-3">
              <img src="/images/logo.png" alt="Józwik Studio" className="w-6 h-6" />
              <span className="font-display font-medium text-ivory text-sm tracking-tight">
                Józwik Studio
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-ivory/80 hover:text-ivory transition-colors duration-300"
            >
              <span className="text-micro">SCHLIESSEN</span>
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <nav className="space-y-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block font-display font-light text-display-md text-ivory/80 hover:text-ivory transition-colors duration-300 text-center"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('kontakt')}
              className="mt-16 cta-link"
            >
              Anfrage
            </button>
          </div>

          {/* Menu footer */}
          <div className="px-[6vw] py-8 flex items-center justify-between">
            <span className="text-micro text-ivory/40">
              FOTOGRAFIE · KAMPAGNEN · EDITORIAL
            </span>
            <span className="text-micro text-ivory/40">
              LEIPZIG
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
