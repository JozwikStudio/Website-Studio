import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE phase (0% - 30%)
      // Left image from bottom
      scrollTl.fromTo(
        leftImageRef.current,
        { y: '100vh', opacity: 0, scale: 1.05 },
        { y: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      // Center image from bottom
      scrollTl.fromTo(
        centerImageRef.current,
        { y: '100vh', opacity: 0, scale: 1.05 },
        { y: 0, opacity: 1, scale: 1, ease: 'none' },
        0.08
      );

      // Right image from bottom
      scrollTl.fromTo(
        rightImageRef.current,
        { y: '100vh', opacity: 0, scale: 1.05 },
        { y: 0, opacity: 1, scale: 1, ease: 'none' },
        0.14
      );

      // Headline from top
      scrollTl.fromTo(
        headlineRef.current,
        { y: '-40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      // Subcopy + CTA from bottom
      scrollTl.fromTo(
        subcopyRef.current,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.18
      );

      scrollTl.fromTo(
        ctaRef.current,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.22
      );

      // SETTLE phase (30% - 70%) - static

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(
        [leftImageRef.current, centerImageRef.current, rightImageRef.current],
        { y: 0, opacity: 1 },
        { y: '-35vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        [subcopyRef.current, ctaRef.current],
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
      id="arbeiten"
      className="section-pinned bg-noir flex items-center justify-center z-30"
    >
      {/* Left image */}
      <div
        ref={leftImageRef}
        className="absolute left-[6vw] top-[10vh] w-[26vw] h-[80vh] image-panel will-change-transform"
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
        className="absolute left-[37vw] top-[10vh] w-[26vw] h-[80vh] image-panel will-change-transform"
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
        className="absolute left-[68vw] top-[10vh] w-[26vw] h-[80vh] image-panel will-change-transform"
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
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-light text-display-lg text-ivory text-center will-change-transform z-50 mix-blend-difference"
      >
        Ausgewählte Arbeiten
      </h2>

      {/* Subcopy */}
      <p
        ref={subcopyRef}
        className="absolute left-1/2 top-[58vh] -translate-x-1/2 text-micro text-ivory/70 text-center will-change-transform z-50"
      >
        Mode · Kampagnen · Portrait
      </p>

      {/* CTA */}
      <a
        ref={ctaRef}
        href="#kampagnen"
        className="cta-link absolute left-1/2 top-[78vh] -translate-x-1/2 will-change-transform z-50"
      >
        Projekte erkunden
      </a>
    </section>
  );
}
