import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { Mail } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative min-h-screen bg-ivory flex items-center justify-center px-[6vw]"
    >
      <div ref={contentRef} className="text-center max-w-2xl">

        {/* Label */}
        <p className="text-micro text-noir/50 mb-6 tracking-[0.25em]">
          KONTAKT
        </p>

        {/* Headline */}
        <h1 className="font-display font-light text-display-lg text-noir mb-8">
          Lassen Sie uns sprechen.
        </h1>

        {/* Divider */}
        <div className="w-24 h-px bg-gold/60 mx-auto mb-10" />

        {/* Email */}
        <a
          href="mailto:mail@jozwik-studio.de"
          className="group inline-flex items-center gap-4 text-noir text-xl font-body hover:text-gold transition-colors duration-300"
        >
          <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100 transition" />
          mail@jozwik-studio.de
        </a>

        {/* Subtext */}
        <p className="text-noir/60 mt-10 text-body max-w-md mx-auto">
          Für Anfragen, Kooperationen oder Projekte.
          Wir antworten innerhalb von 48 Stunden.
        </p>

        {/* Footer micro */}
        <div className="mt-16 text-micro text-noir/40 tracking-widest">
          LEIPZIG · WORLDWIDE
        </div>

      </div>
    </section>
  );
}