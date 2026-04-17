import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

interface CampaignsProps {
  isActive?: boolean;
}

export default function Campaigns({ isActive = false }: CampaignsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const leftHeadlineRef = useRef<HTMLHeadingElement>(null);
  const rightHeadlineRef = useRef<HTMLHeadingElement>(null);
  const microLabelsRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const copy = language === 'de'
    ? {
        leftLabel: 'KOMMERZIELL',
        rightLabel: 'STIL · KLARHEIT',
        leftTitle: 'Kampagnen',
        rightTitle: 'mit Haltung',
      }
    : {
        leftLabel: 'COMMERCIAL',
        rightLabel: 'STYLE · CLARITY',
        leftTitle: 'Campaigns',
        rightTitle: 'with intent',
      };

  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        leftImageRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0
      );

      tl.fromTo(
        rightImageRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0.1
      );

      tl.fromTo(
        leftHeadlineRef.current,
        { x: '-25vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0.15
      );

      tl.fromTo(
        rightHeadlineRef.current,
        { x: '25vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0.25
      );

      tl.fromTo(
        microLabelsRef.current?.children || [],
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.4 },
        0.3
      );
    }, section);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      id="kampagnen"
      className="h-full w-full bg-noir flex items-center justify-center relative"
    >
      {/* Micro labels */}
      <div ref={microLabelsRef} className="absolute inset-0 pointer-events-none">
        <span className="font-body text-micro tracking-[0.18em] uppercase text-ivory/80 drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] absolute left-[6vw] top-[7vh] opacity-0">
          {copy.leftLabel}
        </span>
        <span className="font-body text-micro tracking-[0.18em] uppercase text-ivory/80 drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] absolute right-[6vw] top-[7vh] opacity-0">
          {copy.rightLabel}
        </span>
      </div>

      {/* Left image panel */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[44vw] h-[80vh] image-panel opacity-0"
      >
        <img
          src="/images/campaigns_left.jpg"
          alt="Campaign portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right image panel */}
      <div
        ref={rightImageRef}
        className="absolute left-[54vw] top-[10vh] w-[40vw] h-[80vh] image-panel opacity-0"
      >
        <img
          src="/images/campaigns_right.jpg"
          alt="Campaign detail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left headline */}
      <h2
        ref={leftHeadlineRef}
        className="absolute left-[4vw] top-[18vh] max-w-[70vw] font-body text-[12vw] font-light uppercase leading-[0.92] tracking-[0.06em] text-ivory/95 drop-shadow-[0_4px_18px_rgba(0,0,0,0.82)] z-20 opacity-0 sm:max-w-none sm:text-display-xl sm:tracking-[0.08em]"
      >
        {copy.leftTitle}
      </h2>

      {/* Right headline */}
      <h2
        ref={rightHeadlineRef}
        className="absolute right-[4vw] top-[60vh] max-w-[56vw] text-right font-body text-[10.5vw] font-light uppercase leading-[0.92] tracking-[0.06em] text-ivory/95 drop-shadow-[0_4px_18px_rgba(0,0,0,0.82)] z-20 opacity-0 sm:right-auto sm:left-[58vw] sm:top-[62vh] sm:max-w-none sm:text-left sm:text-display-xl sm:tracking-[0.08em]"
      >
        {copy.rightTitle}
      </h2>
    </section>
  );
}
