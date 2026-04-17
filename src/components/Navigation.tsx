import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage } = useLanguage();

  const copy = language === 'de'
    ? {
        menu: 'MENÜ',
        close: 'SCHLIESSEN',
        cta: 'Kontakt',
        items: [
          { label: 'Start', id: 'visual' },
          { label: 'Arbeiten', id: 'arbeiten' },
          { label: 'Leistungen', id: 'kampagnen' },
        ],
        footer: 'FOTOGRAFIE · KAMPAGNEN · EDITORIAL',
        openMenuAria: 'Menü öffnen',
        closeMenuAria: 'Menü schließen',
        languageSwitchAria: 'Sprache wechseln',
      }
    : {
        menu: 'MENU',
        close: 'CLOSE',
        cta: 'Contact',
        items: [
          { label: 'Home', id: 'visual' },
          { label: 'Work', id: 'arbeiten' },
          { label: 'Services', id: 'kampagnen' },
        ],
        footer: 'PHOTOGRAPHY · CAMPAIGNS · EDITORIAL',
        openMenuAria: 'Open menu',
        closeMenuAria: 'Close menu',
        languageSwitchAria: 'Switch language',
      };

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

  useEffect(() => {
    if (!isMenuOpen) return;

    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }

      if (e.key !== 'Tab' || !menuDialogRef.current) return;

      const focusableElements = menuDialogRef.current.querySelectorAll<HTMLElement>(
        'button, a, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMenuOpen]);

  const menuItems = copy.items;

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
            onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'visual' }))}
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

          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center rounded-full border border-ivory/15 bg-noir/20 p-1 backdrop-blur-sm"
              aria-label={copy.languageSwitchAria}
            >
              <button
                type="button"
                onClick={() => setLanguage('de')}
                aria-pressed={language === 'de'}
                className={`rounded-full px-2.5 py-1 text-[10px] font-ui uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 ${
                  language === 'de' ? 'bg-ivory text-noir' : 'text-ivory/75 hover:text-ivory'
                }`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`rounded-full px-2.5 py-1 text-[10px] font-ui uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 ${
                  language === 'en' ? 'bg-ivory text-noir' : 'text-ivory/75 hover:text-ivory'
                }`}
              >
                EN
              </button>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu-dialog"
              aria-label={copy.openMenuAria}
              className="flex items-center gap-2 text-ivory/80 hover:text-ivory transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            >
              <span className="text-micro">{copy.menu}</span>
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        ref={menuDialogRef}
        id="site-menu-dialog"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[200] bg-noir transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Menu header */}
          <div className="px-[6vw] py-6 flex items-center justify-between">
            <button type="button" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70" onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'visual' }))}>
              <img src="/images/logo.png" alt="Józwik Studio" className="w-6 h-6" />
              <span className="font-display font-medium text-ivory text-sm tracking-tight">
                Józwik Studio
              </span>
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label={copy.closeMenuAria}
              className="flex items-center gap-2 text-ivory/80 hover:text-ivory transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            >
              <span className="text-micro">{copy.close}</span>
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <nav className="space-y-8" aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}>
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="block font-display font-light text-display-md text-ivory/80 hover:text-ivory transition-colors duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
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
              type="button"
              onClick={() => scrollToSection('kontakt')}
              className="mt-16 cta-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            >
              {copy.cta}
            </button>
          </div>

          {/* Menu footer */}
          <div className="px-[6vw] py-8 flex flex-col items-center gap-2">
            <span className="text-micro text-ivory/40">
              {copy.footer}
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
