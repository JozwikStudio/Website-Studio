import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();

  const copy = language === 'de'
    ? {
        title: 'Anfragen',
        body: 'Für ausgewählte Marken, Produkte und Editorials begleite ich visuelle Konzeption und Umsetzung.',
        location: 'Leipzig / weltweit',
        note: 'Antwort in der Regel innerhalb von 48 Stunden.',
        cta: 'Kontakt aufnehmen',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        terms: 'AGB',
        backToTop: 'Zurück nach oben',
      }
    : {
        title: 'Enquiries',
        body: 'For selected brands, products and editorials, I support both visual concept and execution.',
        location: 'Leipzig / worldwide',
        note: 'Usually replying within 48 hours.',
        cta: 'Get in touch',
        imprint: 'Imprint',
        privacy: 'Privacy',
        terms: 'Terms',
        backToTop: 'Back to top',
      };

  return (
    <section
      id="kontakt"
      className="relative h-full w-full bg-ivory pt-[16vh] pb-[6vh] px-[4vw] sm:pt-[16vh] sm:pb-[6vh] sm:px-[6vw] overflow-y-auto touch-pan-y"
    >
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-[8vw]">
        {/* Left column - Info */}
        <div className="max-w-[44rem]">
          <h2 className="font-display font-light text-display-md text-noir mb-4">
            {copy.title}
          </h2>
          <p className="font-body text-lg text-noir/70 max-w-[40ch] mb-6">
            {copy.body}
          </p>

          {/* Contact details */}
          <div className="mt-10 space-y-8">
            <a
              href="mailto:mail@jozwik-studio.de"
              className="inline-block font-body text-[20px] sm:text-[22px] leading-[1.15] tracking-[0.02em] text-noir/90 transition-colors duration-300 hover:text-gold"
            >
              mail@jozwik-studio.de
            </a>
            <div className="space-y-2">
              <span className="block font-body text-base text-noir/60">
                {copy.location}
              </span>
              <span className="block font-ui text-[11px] uppercase tracking-[0.22em] text-noir/45">
                {copy.note}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="pt-4 lg:pt-10 lg:pl-[2vw]">
            <a
              href="mailto:mail@jozwik-studio.de"
              className="inline-flex shimmer-button relative mx-auto items-center justify-center w-auto max-w-[20rem] rounded-full border border-noir/20 bg-noir px-6 py-3 text-[11px] font-ui uppercase tracking-[0.28em] text-ivory shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/70"
            >
              <span className="relative z-10 text-ivory">{copy.cta}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="mt-[6vh] pt-6 border-t border-noir/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
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
          <Link
            to="/impressum"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            {copy.imprint}
          </Link>
          <Link
            to="/datenschutz"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            {copy.privacy}
          </Link>
          <Link
            to="/agb"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            {copy.terms}
          </Link>
        </div>
      </footer>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'visual' }))}
        className="up-arrow-container absolute inset-x-0 bottom-8 flex justify-center"
        aria-label={copy.backToTop}
      >
        <span className="up-arrow" aria-hidden="true"></span>
      </button>
    </section>
  );
}
