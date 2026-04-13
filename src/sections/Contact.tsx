import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

interface ContactProps {
  isActive?: boolean;
}

export default function Contact({ isActive = false }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        leftColumnRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0
      );

      tl.fromTo(
        rightColumnRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.15
      );

      tl.fromTo(
        footerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3
      );
    }, section);

    return () => ctx.revert();
  }, [isActive]);


  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="h-full w-full bg-ivory py-[6vh] px-[6vw] overflow-y-auto"
    >
      {/* Logo */}
      <div className="mb-[6vh]">
        <button className="inline-flex items-center gap-3" onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'hero' }))}>
          <img src="/images/logo.png" alt="Józwik Studio" className="w-8 h-8" />
          <span className="font-display font-medium text-noir text-lg tracking-tight">
            Józwik Studio
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5vw]">
        {/* Left column - Info */}
        <div ref={leftColumnRef} className="opacity-0">
          <h2 className="font-display font-light text-display-md text-noir mb-5">
            Ihre Fotos, mein Fokus.
          </h2>
          <p className="font-body text-lg text-noir/70 max-w-[44ch] mb-8">
            Teilen Sie mir Ihre Vision mit – ich antworte persönlich innerhalb von zwei Werktagen.
          </p>

          {/* Contact details */}
          <div className="space-y-4">
            <a
              href="mailto:mail@jozwik-studio.de"
              className="flex items-center gap-4 text-noir/80 hover:text-gold transition-colors duration-300"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">mail@jozwik-studio.de</span>
            </a>
            <a
              href="tel:+491234567890"
              className="flex items-center gap-4 text-noir/80 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">+49 123 456 789 0</span>
            </a>
            <div className="flex items-center gap-4 text-noir/80">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">Leipzig / weltweit</span>
            </div>
          </div>
        </div>

        <div ref={rightColumnRef} className="opacity-0">
          <div className="space-y-6">
            <p className="font-body text-lg text-noir/70 max-w-[44ch]">
              Bitte nutzen Sie direkt die Mailadresse. Beim Klick öffnet sich Ihr Mailprogramm mit einer neuen Nachricht.
            </p>
            <a
              href="mailto:mail@jozwik-studio.de"
              className="inline-flex items-center justify-center w-full bg-noir text-ivory px-8 py-4 font-ui text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300"
            >
              Mail schreiben
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="mt-[6vh] pt-6 border-t border-noir/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-0"
      >
        <span className="text-micro text-noir/50">
          © 2026 Józwik Studio
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-noir/60 hover:text-gold transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href="/impressum"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            Datenschutz
          </a>
          <a
            href="/agb"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            AGB
          </a>
        </div>
      </footer>
    </section>
  );
}
