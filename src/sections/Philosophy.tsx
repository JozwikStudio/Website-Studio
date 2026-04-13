import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface PhilosophyProps {
  isActive?: boolean;
}

export default function Philosophy({ isActive = false }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLDivElement>(null);
  const verticalRuleRef = useRef<HTMLDivElement>(null);
  const goldRuleRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        textBlockRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0
      );

      tl.fromTo(
        topImageRef.current,
        { x: '40vw', opacity: 0, scale: 1.02 },
        { x: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.1
      );

      tl.fromTo(
        bottomImageRef.current,
        { x: '40vw', opacity: 0, scale: 1.02 },
        { x: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.2
      );

      tl.fromTo(
        verticalRuleRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.6 },
        0.15
      );

      tl.fromTo(
        goldRuleRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5 },
        0.25
      );

      tl.fromTo(
        microLabelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        0.3
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
        className="text-micro text-ivory/60 absolute left-[6vw] top-[7vh] opacity-0"
      >
        PHILOSOPHIE
      </span>

      {/* Left text block */}
      <div
        ref={textBlockRef}
        className="absolute left-[7vw] top-[10vh] md:top-[22vh] w-[34vw] opacity-0 z-20 md:z-10"
      >
        <div className="block md:hidden absolute inset-0 bg-noir/40 backdrop-blur-sm rounded-lg -m-3"></div>
        <div className="relative">
          <h2 className="font-display font-light text-display-lg text-ivory mb-6">
            Präzision
          </h2>
          <div
            ref={goldRuleRef}
            className="gold-rule w-[6vw] mb-8 origin-left"
          />
          <p className="text-body max-w-[44ch]">
            Ich reduziere auf das Wesentliche. Licht, Haltung, Augenblick.
            So entsteht ein Bild, das nicht wirkt—sondern bleibt.
          </p>
        </div>
      </div>

      {/* Vertical rule */}
      <div
        ref={verticalRuleRef}
        className="hairline absolute left-[50vw] md:left-[48vw] top-[14vh] h-[72vh] origin-top z-10 md:z-20"
      />

      {/* Right top image */}
      <div
        ref={topImageRef}
        className="absolute left-[52vw] top-[10vh] w-[42vw] h-[38vh] image-panel opacity-0 z-10 md:z-20"
      >
        <img
          src="/images/philosophy_top.jpg"
          alt="Fashion detail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right bottom image */}
      <div
        ref={bottomImageRef}
        className="absolute left-[52vw] top-[52vh] w-[42vw] h-[38vh] image-panel opacity-0 z-10 md:z-20"
      >
        <img
          src="/images/philosophy_bottom.jpg"
          alt="Fashion portrait"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
