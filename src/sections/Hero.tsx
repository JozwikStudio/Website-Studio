import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const leftHeadlineRef = useRef<HTMLHeadingElement>(null);
  const rightHeadlineRef = useRef<HTMLHeadingElement>(null);
  const microLabelsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const bottomInfoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Left image entrance
      loadTl.fromTo(
        leftImageRef.current,
        { opacity: 0, x: '-6vw' },
        { opacity: 1, x: 0, duration: 0.6 },
        0
      );

      // Right image entrance
      loadTl.fromTo(
        rightImageRef.current,
        { opacity: 0, x: '6vw' },
        { opacity: 1, x: 0, duration: 0.6 },
        0.15
      );

      // Left headline entrance
      loadTl.fromTo(
        leftHeadlineRef.current,
        { opacity: 0, y: '6vh' },
        { opacity: 1, y: 0, duration: 0.6 },
        0.35
      );

      // Right headline entrance
      loadTl.fromTo(
        rightHeadlineRef.current,
        { opacity: 0, y: '6vh' },
        { opacity: 1, y: 0, duration: 0.6 },
        0.5
      );

      // Micro labels entrance
      loadTl.fromTo(
        microLabelsRef.current?.children || [],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        0.7
      );

      // CTA entrance
      loadTl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        0.8
      );

      // Bottom info entrance
      loadTl.fromTo(
        bottomInfoRef.current?.children || [],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        0.85
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([leftImageRef.current, rightImageRef.current], { opacity: 1, x: 0 });
            gsap.set([leftHeadlineRef.current, rightHeadlineRef.current], { opacity: 1, x: 0 });
            gsap.set(microLabelsRef.current?.children || [], { opacity: 1 });
            gsap.set(ctaRef.current, { opacity: 1 });
            gsap.set(bottomInfoRef.current?.children || [], { opacity: 1 });
          },
        },
      });

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
        leftImageRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        rightImageRef.current,
        { x: 0, opacity: 1 },
        { x: '10vw', opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        microLabelsRef.current?.children || [],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

      scrollTl.fromTo(
        ctaRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

      scrollTl.fromTo(
        bottomInfoRef.current?.children || [],
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
      className="section-pinned bg-noir flex items-center justify-center z-10"
    >
      {/* Micro labels */}
      <div ref={microLabelsRef} className="absolute inset-0 pointer-events-none">
        <span className="text-micro text-ivory/60 absolute left-[6vw] top-[7vh]">
          FOTOGRAFIE
        </span>
        <span className="text-micro text-ivory/60 absolute right-[6vw] top-[7vh]">
          KAMPAGNEN / EDITORIAL
        </span>
      </div>

      {/* Left image panel */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[42vw] h-[80vh] image-panel will-change-transform"
      >
        <img
          src="/images/hero_left.jpg"
          alt="Editorial portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right image panel */}
      <div
        ref={rightImageRef}
        className="absolute left-[56vw] top-[10vh] w-[38vw] h-[80vh] image-panel will-change-transform"
      >
        <img
          src="/images/hero_right.jpg"
          alt="Fashion portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left headline */}
      <h1
        ref={leftHeadlineRef}
        className="absolute left-[4vw] top-[18vh] font-display font-light text-display-xl text-ivory/95 will-change-transform z-20"
      >
        Józwik
      </h1>

      {/* Right headline */}
      <h1
        ref={rightHeadlineRef}
        className="absolute left-[62vw] top-[62vh] font-display font-light text-display-xl text-ivory/95 will-change-transform z-20"
      >
        Studio
      </h1>

      {/* CTA */}
      <a
        ref={ctaRef}
        href="#arbeiten"
        className="cta-link absolute left-[6vw] top-[34vh] z-20"
      >
        Ausgewählte Arbeiten
      </a>

      {/* Bottom info */}
      <div ref={bottomInfoRef} className="absolute inset-x-[6vw] bottom-[5vh] flex justify-between pointer-events-none">
        <span className="text-micro text-ivory/50">Portfolio 2026</span>
        <span className="text-micro text-ivory/50">Auf Anfrage</span>
      </div>
    </section>
  );
}
