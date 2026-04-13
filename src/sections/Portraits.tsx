import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portraits() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);
  const bottomInfoRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          id: section.id,
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE phase (0% - 30%)
      // Background image scale and fade
      scrollTl.fromTo(
        bgImageRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      // Headline from right
      scrollTl.fromTo(
        headlineRef.current,
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.1
      );

      // Subheadline from right
      scrollTl.fromTo(
        subheadlineRef.current,
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.14
      );

      // Micro label fade in
      scrollTl.fromTo(
        microLabelRef.current,
        { opacity: 0 },
        { opacity: 1, ease: 'none' },
        0.18
      );

      // Bottom info fade in
      scrollTl.fromTo(
        bottomInfoRef.current,
        { opacity: 0 },
        { opacity: 1, ease: 'none' },
        0.22
      );

      // SETTLE phase (30% - 70%) - static

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        [headlineRef.current, subheadlineRef.current],
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgImageRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        [microLabelRef.current, bottomInfoRef.current],
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
      id="portraits"
      className="section-pinned bg-noir flex items-center justify-center z-[70]"
    >
      {/* Micro label */}
      <span
        ref={microLabelRef}
        className="text-micro text-ivory/60 absolute left-[6vw] top-[7vh]"
      >
        MENSCHEN
      </span>

      {/* Full background image */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="/images/portraits_bg.jpg"
          alt="Portrait session"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-noir/80 via-transparent to-transparent" />
      </div>

      {/* Right headline */}
      <h2
        ref={headlineRef}
        className="absolute right-[6vw] top-[18vh] font-display font-light text-display-xl text-ivory text-right will-change-transform z-20"
      >
        Portraits
      </h2>

      {/* Right subheadline */}
      <p
        ref={subheadlineRef}
        className="absolute right-[6vw] top-[30vh] font-body text-lg text-ivory/80 text-right will-change-transform z-20"
      >
        Charakter vor Kamera.
      </p>

      {/* Bottom right info */}
      <span
        ref={bottomInfoRef}
        className="text-micro text-ivory/50 absolute right-[6vw] bottom-[6vh]"
      >
        Buchung per Mail
      </span>
    </section>
  );
}
