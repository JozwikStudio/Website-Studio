import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

interface GalleryProps {
  isActive?: boolean;
}

export default function Gallery({ isActive = false }: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const { language } = useLanguage();

  const copy = language === 'de'
    ? {
        headline: 'Ausgewählte Arbeiten',
        subcopy: 'Fotografie · Kampagnen · Editorial',
        cta: 'Projekte erkunden',
      }
    : {
        headline: 'Selected Work',
        subcopy: 'Photography · Campaigns · Editorial',
        cta: 'Explore projects',
      };

  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0
      );

      tl.fromTo(
        leftImageRef.current,
        { y: '60vh', opacity: 0, scale: 1.02 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.1
      );

      tl.fromTo(
        centerImageRef.current,
        { y: '60vh', opacity: 0, scale: 1.02 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.15
      );

      tl.fromTo(
        rightImageRef.current,
        { y: '60vh', opacity: 0, scale: 1.02 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.2
      );

      tl.fromTo(
        headlineRef.current,
        { y: '-20vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.15
      );

      tl.fromTo(
        subcopyRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3
      );

      tl.fromTo(
        ctaRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.4
      );
    }, section);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      id="arbeiten"
      className="h-full w-full bg-transparent flex items-center justify-center relative overflow-hidden"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-noir opacity-0"
      />
      {/* Left image */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[26vw] h-[80vh] image-panel opacity-0 z-10"
      >
        <img
          src="/images/gallery_left.jpg"
          alt="Fashion campaign"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center image */}
      <div
        ref={centerImageRef}
        className="absolute left-[37vw] top-[10vh] w-[26vw] h-[80vh] image-panel opacity-0 z-10"
      >
        <img
          src="/images/gallery_center.jpg"
          alt="Editorial portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right image */}
      <div
        ref={rightImageRef}
        className="absolute left-[68vw] top-[10vh] w-[26vw] h-[80vh] image-panel opacity-0 z-10"
      >
        <img
          src="/images/gallery_right.jpg"
          alt="Studio portrait"
          className="w-full h-full object-cover"
        />
      </div>

      <h2
        ref={headlineRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 bg-noir/32 px-5 py-2 font-display font-light text-display-lg text-ivory text-center z-50 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-[4px] opacity-0"
      >
        {copy.headline}
      </h2>

      {/* Subcopy */}
      <p
        ref={subcopyRef}
        className="absolute left-1/2 top-[58vh] -translate-x-1/2 font-body text-[0.82rem] sm:text-[1.6rem] tracking-[0.18em] uppercase text-ivory/95 text-center z-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.92)] opacity-0"
      >
        {copy.subcopy}
      </p>

      {/* CTA */}
      <button
        ref={ctaRef}
        onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'kampagnen' }))}
        className="cta-link absolute left-1/2 top-[78vh] -translate-x-1/2 z-50 rounded-full border border-white/8 bg-noir/18 px-4 py-1.5 opacity-0 font-body text-[0.82rem] sm:text-[1.1rem] tracking-[0.18em] uppercase text-ivory/95 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-[2px] drop-shadow-[0_3px_14px_rgba(0,0,0,0.8)]"
      >
        {copy.cta}
      </button>
    </section>
  );
}
