import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface GalleryProps {
  isActive?: boolean;
}

export default function Gallery({ isActive = false }: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        leftImageRef.current,
        { y: '60vh', opacity: 0, scale: 1.02 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        0
      );

      tl.fromTo(
        centerImageRef.current,
        { y: '60vh', opacity: 0, scale: 1.02 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7 },
        0.1
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
      className="h-full w-full bg-noir flex items-center justify-center relative"
    >
      {/* Left image */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[26vw] h-[80vh] image-panel opacity-0"
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
        className="absolute left-[37vw] top-[10vh] w-[26vw] h-[80vh] image-panel opacity-0"
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
        className="absolute left-[68vw] top-[10vh] w-[26vw] h-[80vh] image-panel opacity-0"
      >
        <img
          src="/images/gallery_right.jpg"
          alt="Studio portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline overlay */}
      <h2
        ref={headlineRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-light text-display-lg text-ivory text-center z-50 mix-blend-difference opacity-0"
      >
        Ausgewählte Arbeiten
      </h2>

      {/* Subcopy */}
      <p
        ref={subcopyRef}
        className="absolute left-1/2 top-[58vh] -translate-x-1/2 text-micro text-ivory/70 text-center z-50 opacity-0"
      >
        Mode · Kampagnen · Portrait
      </p>

      {/* CTA */}
      <button
        ref={ctaRef}
        onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'kampagnen' }))}
        className="cta-link absolute left-1/2 top-[78vh] -translate-x-1/2 z-50 opacity-0"
      >
        Projekte erkunden
      </button>
    </section>
  );
}
