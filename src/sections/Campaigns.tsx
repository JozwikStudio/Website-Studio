import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Campaigns() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const leftHeadlineRef = useRef<HTMLHeadingElement>(null);
  const rightHeadlineRef = useRef<HTMLHeadingElement>(null);
  const microLabelsRef = useRef<HTMLDivElement>(null);

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
      // Left image from left
      scrollTl.fromTo(
        leftImageRef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      // Right image from right
      scrollTl.fromTo(
        rightImageRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      // Left headline from left
      scrollTl.fromTo(
        leftHeadlineRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.1
      );

      // Right headline from right
      scrollTl.fromTo(
        rightHeadlineRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.14
      );

      // Micro labels fade in
      scrollTl.fromTo(
        microLabelsRef.current?.children || [],
        { opacity: 0 },
        { opacity: 1, stagger: 0.02, ease: 'none' },
        0.18
      );

      // SETTLE phase (30% - 70%) - static

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        leftHeadlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        rightHeadlineRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [leftImageRef.current, rightImageRef.current],
        { y: 0, opacity: 1 },
        { y: '18vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        microLabelsRef.current?.children || [],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kampagnen"
      className="section-pinned bg-noir flex items-center justify-center z-40"
    >
      {/* Micro labels */}
      <div ref={microLabelsRef} className="absolute inset-0 pointer-events-none">
        <span className="text-micro text-ivory/60 absolute left-[6vw] top-[7vh]">
          KOMMERZIELL
        </span>
        <span className="text-micro text-ivory/60 absolute right-[6vw] top-[7vh]">
          STIL · KLARHEIT
        </span>
      </div>

      {/* Left image panel */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[44vw] h-[80vh] image-panel will-change-transform"
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
        className="absolute left-[54vw] top-[10vh] w-[40vw] h-[80vh] image-panel will-change-transform"
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
        className="absolute left-[4vw] top-[18vh] font-display font-light text-display-xl text-ivory/95 will-change-transform z-20"
      >
        Kampagnen
      </h2>

      {/* Right headline */}
      <h2
        ref={rightHeadlineRef}
        className="absolute left-[58vw] top-[62vh] font-display font-light text-display-xl text-ivory/95 will-change-transform z-20"
      >
        mit Haltung
      </h2>
    </section>
  );
}
