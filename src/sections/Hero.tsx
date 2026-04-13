import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const leftHeadlineRef = useRef<HTMLHeadingElement>(null);
  const rightHeadlineRef = useRef<HTMLHeadingElement>(null);
  const microLabelsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const bottomInfoRef = useRef<HTMLDivElement>(null);

  // Initial load animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        leftImageRef.current,
        { opacity: 0, x: '-6vw' },
        { opacity: 1, x: 0, duration: 0.8 },
        0
      );

      tl.fromTo(
        rightImageRef.current,
        { opacity: 0, x: '6vw' },
        { opacity: 1, x: 0, duration: 0.8 },
        0.2
      );

      tl.fromTo(
        leftHeadlineRef.current,
        { opacity: 0, y: '4vh' },
        { opacity: 1, y: 0, duration: 0.8 },
        0.4
      );

      tl.fromTo(
        rightHeadlineRef.current,
        { opacity: 0, y: '4vh' },
        { opacity: 1, y: 0, duration: 0.8 },
        0.55
      );

      tl.fromTo(
        microLabelsRef.current?.children || [],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        0.7
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.85
      );

      tl.fromTo(
        bottomInfoRef.current?.children || [],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        0.9
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-full w-full bg-noir flex items-center justify-center relative"
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
        className="absolute left-[6vw] top-[10vh] w-[42vw] h-[80vh] image-panel"
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
        className="absolute left-[56vw] top-[10vh] w-[38vw] h-[80vh] image-panel"
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
        className="absolute left-[4vw] top-[18vh] font-display font-light text-display-xl text-ivory/95 z-20"
      >
        Józwik
      </h1>

      {/* Right headline */}
      <h1
        ref={rightHeadlineRef}
        className="absolute left-[62vw] top-[62vh] font-display font-light text-display-xl text-ivory/95 z-20"
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
