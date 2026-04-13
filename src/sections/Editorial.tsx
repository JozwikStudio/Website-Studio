import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface EditorialProps {
  isActive?: boolean;
}

export default function Editorial({ isActive = false }: EditorialProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const leftHeadlineRef = useRef<HTMLHeadingElement>(null);
  const rightHeadlineRef = useRef<HTMLHeadingElement>(null);
  const microLabelsRef = useRef<HTMLDivElement>(null);

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
      className="h-full w-full bg-noir flex items-center justify-center relative"
    >
      {/* Micro labels */}
      <div ref={microLabelsRef} className="absolute inset-0 pointer-events-none">
        <span className="text-micro text-ivory/60 absolute left-[6vw] top-[7vh] opacity-0">
          PUBLIKATIONEN
        </span>
        <span className="text-micro text-ivory/60 absolute right-[6vw] top-[7vh] opacity-0">
          TEXTUR · RAUM
        </span>
      </div>

      {/* Left image panel */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[44vw] h-[80vh] image-panel opacity-0"
      >
        <img
          src="/images/editorial_left.jpg"
          alt="Editorial fashion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right image panel */}
      <div
        ref={rightImageRef}
        className="absolute left-[54vw] top-[10vh] w-[40vw] h-[80vh] image-panel opacity-0"
      >
        <img
          src="/images/editorial_right.jpg"
          alt="Editorial portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left headline */}
      <h2
        ref={leftHeadlineRef}
        className="absolute left-[4vw] top-[18vh] font-display font-light text-display-xl text-ivory/95 z-20 opacity-0"
      >
        Editorial
      </h2>

      {/* Right headline */}
      <h2
        ref={rightHeadlineRef}
        className="absolute left-[58vw] top-[62vh] font-display font-light text-display-xl text-ivory/95 z-20 opacity-0"
      >
        für Magazine
      </h2>
    </section>
  );
}
