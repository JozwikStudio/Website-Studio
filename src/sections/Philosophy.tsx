import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLDivElement>(null);
  const verticalRuleRef = useRef<HTMLDivElement>(null);
  const goldRuleRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE phase (0% - 30%)
      // Text block from left
      scrollTl.fromTo(
        textBlockRef.current,
        { x: '-55vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Top image from right
      scrollTl.fromTo(
        topImageRef.current,
        { x: '60vw', opacity: 0, scale: 1.06 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.06
      );

      // Bottom image from right
      scrollTl.fromTo(
        bottomImageRef.current,
        { x: '60vw', opacity: 0, scale: 1.06 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0.12
      );

      // Vertical rule scale
      scrollTl.fromTo(
        verticalRuleRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none' },
        0.08
      );

      // Gold rule scale
      scrollTl.fromTo(
        goldRuleRef.current,
        { scaleX: 0 },
        { scaleX: 1, ease: 'none' },
        0.14
      );

      // Micro label fade
      scrollTl.fromTo(
        microLabelRef.current,
        { opacity: 0 },
        { opacity: 1, ease: 'none' },
        0.18
      );

      // SETTLE phase (30% - 70%) - static

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        textBlockRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [topImageRef.current, bottomImageRef.current],
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        verticalRuleRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

      scrollTl.fromTo(
        goldRuleRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

      scrollTl.fromTo(
        microLabelRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.85
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophie"
      className="section-pinned bg-noir flex items-center justify-center z-20"
    >
      {/* Micro label */}
      <span
        ref={microLabelRef}
        className="text-micro text-ivory/60 absolute left-[6vw] top-[7vh]"
      >
        PHILOSOPHIE
      </span>

      {/* Left text block */}
      <div
        ref={textBlockRef}
        className="absolute left-[7vw] top-[22vh] w-[34vw] will-change-transform"
      >
        <h2 className="font-display font-light text-display-lg text-ivory mb-6">
          Präzision
        </h2>
        <div
          ref={goldRuleRef}
          className="gold-rule w-[6vw] mb-8 origin-left"
        />
        <p className="text-body max-w-[44ch]">
          Wir reduzieren auf das Wesentliche. Licht, Haltung, Augenblick. 
          So entsteht ein Bild, das nicht wirkt—sondern bleibt.
        </p>
      </div>

      {/* Vertical rule */}
      <div
        ref={verticalRuleRef}
        className="hairline absolute left-[48vw] top-[14vh] h-[72vh] origin-top"
      />

      {/* Right top image */}
      <div
        ref={topImageRef}
        className="absolute left-[52vw] top-[10vh] w-[42vw] h-[38vh] image-panel will-change-transform"
      >
        <img
          src="/images/philosophy_top.jpg"
          alt="Fashion detail"
          className="w-full h-full object-cover animate-image-breathe"
        />
      </div>

      {/* Right bottom image */}
      <div
        ref={bottomImageRef}
        className="absolute left-[52vw] top-[52vh] w-[42vw] h-[38vh] image-panel will-change-transform"
      >
        <img
          src="/images/philosophy_bottom.jpg"
          alt="Fashion portrait"
          className="w-full h-full object-cover animate-image-breathe"
          style={{ animationDelay: '3s' }}
        />
      </div>
    </section>
  );
}
