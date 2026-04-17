import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  isActive?: boolean;
}

export default function Hero({ isActive = false }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const detailRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const { language } = useLanguage();

  const copy = language === 'de'
    ? {
        label: 'Nicht mehr Bilder. Mehr Richtung.',
        title: 'Was bleibt, ist nicht der Look. Sondern die Handschrift.',
        intro: 'Ich entwickle Produktionen, in denen Ästhetik, Marke und Präsenz präzise aufeinander abgestimmt sind.',
        body: 'So entsteht kein loses Material, sondern ein visueller Auftritt mit Ruhe, Konsistenz und Wiedererkennbarkeit.',
        detail: 'Konzept · Produktion · Art Direction',
        cta: 'Kontakt',
      }
    : {
        label: 'Not more images. More direction.',
        title: 'What remains is not the look. It is the signature.',
        intro: 'I create productions in which aesthetics, brand and presence are aligned with precision.',
        body: 'The result is not loose material, but a visual presence defined by restraint, consistency and recognisability.',
        detail: 'Concept · Production · Art Direction',
        cta: 'Contact',
      };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
        .fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 70, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1 },
          0.35
        )
        .fromTo(
          introRef.current,
          { autoAlpha: 0, y: 60 },
          { autoAlpha: 1, y: 0, duration: 1.0 },
          0.6
        )
        .fromTo(
          bodyRef.current,
          { autoAlpha: 0, y: 55 },
          { autoAlpha: 1, y: 0, duration: 1.0 },
          0.75
        )
        .fromTo(
          detailRef.current,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 1.0 },
          0.9
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 30, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
          1.05
        );
    }, section);

    return () => {
      ctx.revert();
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;

    if (isActive) {
      timelineRef.current.restart(true, false);
    } else if (timelineRef.current.progress() > 0) {
      timelineRef.current.reverse();
    }
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      className="h-full w-full bg-transparent text-ivory relative overflow-hidden"
    >
      <div className="relative h-full px-[6vw] py-[7vh] flex flex-col justify-center">
        <div className="mx-auto grid w-full max-w-7xl gap-12">
          <div className="max-w-[44rem] space-y-8 lg:space-y-9">
            <span className="text-micro uppercase tracking-[0.35em] text-gold/80">
              {copy.label}
            </span>
            <h1
              ref={titleRef}
              className="max-w-[14ch] font-display font-light text-display-lg leading-[1] tracking-[-0.045em] text-ivory"
            >
              {copy.title}
            </h1>
            <p
              ref={introRef}
              className="max-w-[31rem] font-serif text-display-md leading-[1.08] text-ivory/86"
            >
              {copy.intro}
            </p>
            <div className="gold-rule w-14" />
            <p
              ref={bodyRef}
              className="max-w-[36rem] font-body text-base leading-relaxed text-ivory/70"
            >
              {copy.body}
            </p>
            <p
              ref={detailRef}
              className="font-ui text-[11px] uppercase tracking-[0.24em] text-gold/75"
            >
              {copy.detail}
            </p>
          </div>
          <div className="flex items-start justify-center lg:justify-end">
            <button
              ref={ctaRef}
              onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'kontakt' }))}
              className="shimmer-button cta-link rounded-full border border-ivory/12 bg-noir/40 px-6 py-3 text-[11px] font-ui uppercase tracking-[0.28em] text-ivory/92 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-ivory"
            >
              {copy.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
