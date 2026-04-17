import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

interface PhilosophyProps {
  isActive?: boolean;
}

export default function Philosophy({ isActive = false }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyOneRef = useRef<HTMLParagraphElement>(null);
  const bodyTwoRef = useRef<HTMLParagraphElement>(null);
  const detailRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const { language } = useLanguage();

  const copy = language === 'de'
    ? {
        label: 'ÜBER MICH',
        title: 'Ein ruhiger Blick. Eine klare Handschrift.',
        bodyOne: 'Ich bin Jakub Józwik und entwickle Bildwelten für Marken, Produkte und Persönlichkeiten, die nicht lauter wirken müssen, um präsent zu sein.',
        bodyTwo: 'Meine Arbeit bewegt sich zwischen Editorial, Kampagne und Portrait — reduziert in der Form, präzise in der Wirkung und immer auf echte Präsenz ausgerichtet.',
        detail: 'Jakub Józwik · Fotografie · Creative Direction',
        cta: 'Kontakt',
        imageAlt: 'Portrait von Jakub Józwik',
      }
    : {
        label: 'ABOUT',
        title: 'A calm eye. A distinct signature.',
        bodyOne: 'I am Jakub Józwik, creating visual worlds for brands, products and personalities that do not need to be louder in order to feel present.',
        bodyTwo: 'My work moves between editorial, campaign and portraiture — restrained in form, precise in effect, always shaped around real presence.',
        detail: 'Jakub Józwik · Photography · Creative Direction',
        cta: 'Contact',
        imageAlt: 'Portrait of Jakub Józwik',
      };

  useEffect(() => {
    if (!isActive) return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(labelRef.current, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.05)
        .fromTo(titleRef.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.15)
        .fromTo(bodyOneRef.current, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.32)
        .fromTo(bodyTwoRef.current, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.45)
        .fromTo(detailRef.current, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 0.56)
        .fromTo(ctaRef.current, { autoAlpha: 0, y: 24, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.7 }, 0.66)
        .fromTo(imageRef.current, { autoAlpha: 0, x: 40, scale: 1.03 }, { autoAlpha: 1, x: 0, scale: 1, duration: 1.0 }, 0.2)
        .fromTo(captionRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.75);
    }, section);

    return () => ctx.revert();
  }, [isActive, language]);

  return (
    <section
      ref={sectionRef}
      className="h-full w-full bg-noir text-ivory relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_22%_28%,rgba(214,164,90,0.12),transparent_0,transparent_42%),radial-gradient(circle_at_78%_32%,rgba(255,255,255,0.06),transparent_0,transparent_38%)]" />

      <div className="relative h-full overflow-x-hidden px-[6vw] pt-[11vh] pb-[4vh] flex items-start lg:items-center lg:py-[8vh]">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-4 lg:items-center lg:gap-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="order-2 lg:order-1 max-w-[36rem] lg:pl-2">
            <span
              ref={labelRef}
              className="mb-3 inline-block text-[9px] font-ui uppercase tracking-[0.32em] text-gold/75 opacity-0 sm:text-[10px]"
            >
              {copy.label}
            </span>
            <h2
              ref={titleRef}
              className="max-w-[12ch] font-display font-light text-[clamp(1.85rem,6.8vw,3.6rem)] leading-[0.94] tracking-[-0.05em] text-ivory opacity-0"
            >
              {copy.title}
            </h2>
            <div className="gold-rule my-4 w-12 origin-left sm:my-6 sm:w-14" />
            <p
              ref={bodyOneRef}
              className="max-w-[36rem] text-[14px] leading-[1.6] text-ivory/78 opacity-0 sm:text-base sm:leading-relaxed"
            >
              {copy.bodyOne}
            </p>
            <p
              ref={bodyTwoRef}
              className="mt-3 hidden max-w-[36rem] font-serif text-[clamp(1.05rem,4.2vw,1.65rem)] leading-[1.18] text-ivory/88 opacity-0 sm:block lg:mt-4"
            >
              {copy.bodyTwo}
            </p>
            <p
              ref={detailRef}
              className="mt-4 text-[10px] font-ui uppercase tracking-[0.22em] text-gold/72 opacity-0 sm:mt-6 sm:text-[11px]"
            >
              {copy.detail}
            </p>
            <button
              ref={ctaRef}
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'kontakt' }))}
              className="mt-4 shimmer-button cta-link rounded-full border border-ivory/12 bg-noir/40 px-5 py-2.5 text-[10px] font-ui uppercase tracking-[0.24em] text-ivory/92 shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-ivory opacity-0 sm:mt-6 sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.28em]"
            >
              {copy.cta}
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[16.5rem] sm:max-w-[24rem] lg:mr-0 lg:ml-auto lg:max-w-[35rem]">
              <div className="pointer-events-none absolute -left-5 top-[10%] hidden h-[68%] w-px bg-gradient-to-b from-transparent via-gold/45 to-transparent lg:block" />
              <div className="pointer-events-none absolute -right-4 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-ivory/0 via-ivory/20 to-ivory/0 lg:block" />

              <div
                ref={imageRef}
                className="image-panel relative h-[28vh] w-full overflow-hidden rounded-[6px] bg-[#111214] shadow-[0_24px_56px_rgba(0,0,0,0.30)] opacity-0 sm:h-[38vh] lg:h-[74vh] lg:rounded-[8px] lg:shadow-[0_38px_110px_rgba(0,0,0,0.42)]"
              >
                <img
                  src="/images/Jakub.jpg"
                  alt={copy.imageAlt}
                  className="h-full w-full object-cover object-[center_18%] saturate-[0.92] contrast-[1.03] lg:object-[center_24%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.10),rgba(8,8,10,0.02)_38%,rgba(8,8,10,0.18)_100%)]" />
              </div>

              <div
                ref={captionRef}
                className="mt-2 flex items-center justify-between gap-3 border-t border-ivory/10 pt-2 opacity-0 sm:mt-4 sm:gap-4 sm:pt-3"
              >
                <p className="text-[9px] font-ui uppercase tracking-[0.24em] text-ivory/52 sm:text-[10px] sm:tracking-[0.28em]">
                  Józwik Studio
                </p>
                <p className="text-right font-serif text-[14px] text-ivory/88 sm:text-base lg:text-lg">
                  Jakub Józwik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
