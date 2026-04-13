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
      ScrollTrigger.matchMedia({
        // =========================
        // DESKTOP ANIMATION ONLY
        // =========================
        '(min-width: 768px)': () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              id: 'philosophie',
              trigger: section,
              start: 'top top',
              end: '+=130%',
              pin: true,
              scrub: 0.6,
            },
          });

          // ENTRANCE
          scrollTl.fromTo(
            textBlockRef.current,
            { x: '-55vw', opacity: 0 },
            { x: 0, opacity: 1, ease: 'none' },
            0
          );

          scrollTl.fromTo(
            topImageRef.current,
            { x: '60vw', opacity: 0, scale: 1.06 },
            { x: 0, opacity: 1, scale: 1, ease: 'none' },
            0.06
          );

          scrollTl.fromTo(
            bottomImageRef.current,
            { x: '60vw', opacity: 0, scale: 1.06 },
            { x: 0, opacity: 1, scale: 1, ease: 'none' },
            0.12
          );

          scrollTl.fromTo(
            verticalRuleRef.current,
            { scaleY: 0 },
            { scaleY: 1, ease: 'none' },
            0.08
          );

          scrollTl.fromTo(
            goldRuleRef.current,
            { scaleX: 0 },
            { scaleX: 1, ease: 'none' },
            0.14
          );

          scrollTl.fromTo(
            microLabelRef.current,
            { opacity: 0 },
            { opacity: 1, ease: 'none' },
            0.18
          );

          // EXIT
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
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophie"
      className="bg-noir relative z-20"
    >
      {/* ========================= */}
      {/* MOBILE LAYOUT (STACKED)   */}
      {/* ========================= */}
      <div className="md:hidden px-6 py-24 flex flex-col gap-12">
        <span className="text-micro text-ivory/60">
          PHILOSOPHIE
        </span>

        <h2 className="font-display font-light text-display-lg text-ivory">
          Präzision
        </h2>

        <div className="gold-rule w-24" />

        <p className="text-body max-w-[44ch] text-ivory/80">
          Wir reduzieren auf das Wesentliche. Licht, Haltung, Augenblick.
          So entsteht ein Bild, das nicht wirkt—sondern bleibt.
        </p>

        <img
          src="/images/philosophy_top.jpg"
          alt="Fashion detail"
          className="w-full h-[40vh] object-cover"
        />

        <img
          src="/images/philosophy_bottom.jpg"
          alt="Fashion portrait"
          className="w-full h-[40vh] object-cover"
        />
      </div>

      {/* ========================= */}
      {/* DESKTOP LAYOUT (GSAP)     */}
      {/* ========================= */}
      <div className="hidden md:block section-pinned">
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
          className="absolute left-[7vw] top-[22vh] w-[34vw] will-change-transform z-10"
        >
          <h2 className="font-display font-light text-display-lg text-ivory mb-6">
            Präzision
          </h2>

          <div
            ref={goldRuleRef}
            className="gold-rule w-[6vw] mb-8 origin-left"
          />

          <p className="text-body max-w-[44ch] text-ivory/80">
            Wir reduzieren auf das Wesentliche. Licht, Haltung, Augenblick.
            So entsteht ein Bild, das nicht wirkt—sondern bleibt.
          </p>
        </div>

        {/* Vertical rule */}
        <div
          ref={verticalRuleRef}
          className="hairline absolute left-[48vw] top-[14vh] h-[72vh] origin-top"
        />

        {/* Top image */}
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

        {/* Bottom image */}
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
      </div>
    </section>
  );
}