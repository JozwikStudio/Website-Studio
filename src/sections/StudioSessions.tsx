import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

interface StudioSessionsProps {
  isActive?: boolean;
}

export default function StudioSessions({ isActive = false }: StudioSessionsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);
  const bottomInfoRef = useRef<HTMLSpanElement>(null);
  const { language } = useLanguage();

  const copy = language === 'de'
    ? {
        label: 'PORTRAIT',
        title: 'Studio Sessions',
        subtitle: 'Ruhig. Präzise. Im Detail.',
        info: 'Verfügbar auf Anfrage',
      }
    : {
        label: 'PORTRAIT',
        title: 'Studio Sessions',
        subtitle: 'Calm. Precise. Detail-driven.',
        info: 'Available on request',
      };

  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.04, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        0
      );

      tl.fromTo(
        headlineRef.current,
        { x: '30vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0.2
      );

      tl.fromTo(
        subheadlineRef.current,
        { x: '30vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0.3
      );

      tl.fromTo(
        microLabelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        0.35
      );

      tl.fromTo(
        bottomInfoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        0.4
      );
    }, section);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      className="h-full w-full bg-noir flex items-center justify-center relative"
    >
      {/* Micro label */}
      <span
        ref={microLabelRef}
        className="text-micro text-ivory/80 drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] absolute left-[6vw] top-[7vh] opacity-0"
      >
        {copy.label}
      </span>

      {/* Full background image */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 opacity-0"
      >
        <img
          src="/images/studio_bg.jpg"
          alt="Studio session"
          className="w-full h-full object-cover"
          style={{ objectPosition: '22% center' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-noir/80 via-transparent to-transparent" />
      </div>

      {/* Right headline */}
      <h2
        ref={headlineRef}
        className="absolute right-[6vw] top-[18vh] font-display font-light text-display-xl text-ivory text-right drop-shadow-[0_4px_18px_rgba(0,0,0,0.82)] z-20 opacity-0"
      >
        {copy.title}
      </h2>

      {/* Right subheadline */}
      <p
        ref={subheadlineRef}
        className="absolute right-[6vw] top-[30vh] font-body text-lg text-ivory/90 text-right drop-shadow-[0_3px_14px_rgba(0,0,0,0.82)] z-20 opacity-0"
      >
        {copy.subtitle}
      </p>

      {/* Bottom right info */}
      <span
        ref={bottomInfoRef}
        className="text-micro text-ivory/70 drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)] absolute right-[6vw] bottom-[6vh] opacity-0"
      >
        {copy.info}
      </span>
    </section>
  );
}
