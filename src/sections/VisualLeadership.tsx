import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function VisualLeadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const { language } = useLanguage();

  const scrollToNextSection = () => {
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'hero' }));
  };

  const copy = language === 'de'
    ? {
        label: 'Józwik Studio',
        title: 'Bilder, die Haltung sichtbar machen.',
        subtitle: 'Fotografie · Kampagnen · Editorial',
        micro: 'Für ausgewählte Marken, Produkte und Persönlichkeiten.',
        trust: 'Leipzig · Deutschland · International',
        cta: 'Auswahl ansehen',
      }
    : {
        label: 'Józwik Studio',
        title: 'Images that make presence visible.',
        subtitle: 'Photography · Campaigns · Editorial',
        micro: 'For selected brands, products and people.',
        trust: 'Leipzig · Germany · International',
        cta: 'View selection',
      };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      );

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.25
      );

      tl.fromTo(
        microRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.45
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1 },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-full w-full bg-transparent text-ivory relative overflow-hidden"
    >
      <div className="relative h-full px-[6vw] py-[7vh] flex flex-col justify-center">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_auto] lg:items-center">
          <div className="max-w-[58rem] space-y-8 lg:space-y-10">
            <span className="text-micro uppercase tracking-[0.35em] text-gold/80">
              {copy.label}
            </span>
            <h1
              ref={titleRef}
              className="max-w-[12ch] font-display font-light text-display-xl leading-[0.94] tracking-[-0.045em] text-ivory"
            >
              {copy.title}
            </h1>
            <p
              ref={subtitleRef}
              className="max-w-3xl font-ui text-[0.72rem] uppercase tracking-[0.3em] text-ivory/72 sm:text-[0.82rem]"
            >
              {copy.subtitle}
            </p>
            <div className="gold-rule w-16" />
            <p
              ref={microRef}
              className="max-w-[30rem] font-body text-[1rem] leading-relaxed text-ivory/72 sm:text-[1.08rem]"
            >
              {copy.micro}
            </p>
            <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold/72">
              {copy.trust}
            </p>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <button
              ref={ctaRef}
              onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'arbeiten' }))}
              className="hidden lg:inline-flex shimmer-button cta-link rounded-full border border-ivory/12 bg-noir/45 px-6 py-3 text-[11px] font-ui uppercase tracking-[0.28em] text-ivory/92 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-ivory"
            >
              {copy.cta}
            </button>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'arbeiten' }))}
              className="inline-flex shimmer-button items-center justify-center rounded-full border border-ivory/12 bg-noir/45 px-6 py-3 text-[11px] font-ui uppercase tracking-[0.28em] text-ivory/92 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-ivory lg:hidden"
            >
              {copy.cta}
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <button
            type="button"
            onClick={scrollToNextSection}
            aria-label={language === 'de' ? 'Zur nächsten Section' : 'Go to next section'}
            className="rounded-full p-2 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="down-arrow" aria-hidden="true"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
