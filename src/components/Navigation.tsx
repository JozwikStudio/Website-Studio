import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for section changes
  useEffect(() => {
    const handleSectionChange = (e: CustomEvent) => {
      // Contact is the last section (kontakt)
      setIsDarkSection(e.detail.section === 'kontakt');
    };

    window.addEventListener('sectionChange', handleSectionChange as EventListener);
    return () => window.removeEventListener('sectionChange', handleSectionChange as EventListener);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: id }));
  };

  const menuItems = [
    { label: 'Arbeiten', id: 'arbeiten' },
    { label: 'Leistungen', id: 'kampagnen' },
    { label: 'Kontakt', id: 'kontakt' },
  ];

  return (
    <>
      {/* Fixed header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isDarkSection || isScrolled
            ? 'bg-noir/80 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="px-[6vw] flex items-center justify-between">
          {/* Logo */}
          <button
            className="inline-flex items-center gap-3"
            onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'hero' }))}
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
          </button>

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
            <button className="inline-flex items-center gap-3" onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'hero' }))}>
              <img src="/images/logo.png" alt="Józwik Studio" className="w-6 h-6" />
              <span className="font-display font-medium text-ivory text-sm tracking-tight">
                Józwik Studio
              </span>
            </button>
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
          <div className="px-[6vw] py-8 flex flex-col items-center gap-2">
            <span className="text-micro text-ivory/40">
              FOTOGRAFIE · KAMPAGNEN · EDITORIAL
            </span>
            <span className="text-micro text-ivory/40">
              Leipzig
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
