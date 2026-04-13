import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Flowing section - animate when entering viewport
      gsap.fromTo(
        leftColumnRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        rightColumnRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        footerRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="relative min-h-screen bg-ivory py-[8vh] px-[6vw] z-[80]"
    >
      {/* Logo */}
      <div className="mb-[12vh]">
        <a href="#" className="inline-flex items-center gap-3">
          <img src="/images/logo.png" alt="Józwik Studio" className="w-8 h-8" />
          <span className="font-display font-medium text-noir text-lg tracking-tight">
            Józwik Studio
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[8vw]">
        {/* Left column - Info */}
        <div ref={leftColumnRef} className="will-change-transform">
          <h2 className="font-display font-light text-display-lg text-noir mb-6">
            Lassen Sie uns drehen.
          </h2>
          <p className="font-body text-lg text-noir/70 max-w-[44ch] mb-12">
            Erzählen Sie uns vom Projekt. Wir melden uns innerhalb von zwei Werktagen.
          </p>

          {/* Contact details */}
          <div className="space-y-6">
            <a
              href="mailto:mail@jozwik-studio.de"
              className="flex items-center gap-4 text-noir/80 hover:text-gold transition-colors duration-300"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">mail@jozwik-studio.de</span>
            </a>
            <a
              href="tel:+491234567890"
              className="flex items-center gap-4 text-noir/80 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">+49 123 456 789 0</span>
            </a>
            <div className="flex items-center gap-4 text-noir/80">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">Berlin / weltweit</span>
            </div>
          </div>
        </div>

        {/* Right column - Form */}
        <div ref={rightColumnRef} className="will-change-transform">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-micro text-noir/60 block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-noir/20 py-3 font-body text-noir focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-micro text-noir/60 block mb-2">
                  E-MAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-noir/20 py-3 font-body text-noir focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="text-micro text-noir/60 block mb-2">
                PROJEKT
              </label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-noir/20 py-3 font-body text-noir focus:outline-none focus:border-gold transition-colors duration-300"
                placeholder="Art des Projekts"
              />
            </div>

            <div>
              <label htmlFor="budget" className="text-micro text-noir/60 block mb-2">
                BUDGET
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-noir/20 py-3 font-body text-noir focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="">Bitte wählen</option>
                <option value="bis-5000">Bis 5.000 €</option>
                <option value="5000-10000">5.000 € – 10.000 €</option>
                <option value="10000-25000">10.000 € – 25.000 €</option>
                <option value="25000+">Über 25.000 €</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-micro text-noir/60 block mb-2">
                NACHRICHT
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-noir/20 py-3 font-body text-noir focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-noir text-ivory px-8 py-4 font-ui text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300"
            >
              {isSubmitted ? (
                <>Gesendet</>
              ) : (
                <>
                  Anfrage senden
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="mt-[12vh] pt-8 border-t border-noir/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <span className="text-micro text-noir/50">
          © 2026 Józwik Studio
        </span>
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-noir/60 hover:text-gold transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href="/impressum"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
          >
            Datenschutz
          </a>
        </div>
      </footer>
    </section>
  );
}
