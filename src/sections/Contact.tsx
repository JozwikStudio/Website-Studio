import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

interface ContactProps {
  isActive?: boolean;
}

export default function Contact({ isActive = false }: ContactProps) {
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

  useEffect(() => {
    if (!isActive) return;
    
    const section = sectionRef.current;
    if (!section) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        leftColumnRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0
      );

      tl.fromTo(
        rightColumnRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.15
      );

      tl.fromTo(
        footerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3
      );
    }, section);

    return () => ctx.revert();
  }, [isActive]);

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
      className="h-full w-full bg-ivory py-[6vh] px-[6vw] overflow-y-auto"
    >
      {/* Logo */}
      <div className="mb-[6vh]">
        <button className="inline-flex items-center gap-3" onClick={() => window.dispatchEvent(new CustomEvent('scrollToSection', { detail: 'hero' }))}>
          <img src="/images/logo.png" alt="Józwik Studio" className="w-8 h-8" />
          <span className="font-display font-medium text-noir text-lg tracking-tight">
            Józwik Studio
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5vw]">
        {/* Left column - Info */}
        <div ref={leftColumnRef} className="opacity-0">
          <h2 className="font-display font-light text-display-md text-noir mb-5">
            Lassen Sie uns drehen.
          </h2>
          <p className="font-body text-lg text-noir/70 max-w-[44ch] mb-8">
            Erzählen Sie uns vom Projekt. Wir melden uns innerhalb von zwei Werktagen.
          </p>

          {/* Contact details */}
          <div className="space-y-4">
            <a
              href="mailto:hello@jozwikstudio.de"
              className="flex items-center gap-4 text-noir/80 hover:text-gold transition-colors duration-300"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-body">hello@jozwikstudio.de</span>
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
        <div ref={rightColumnRef} className="opacity-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                rows={3}
                className="w-full bg-transparent border-b border-noir/20 py-3 font-body text-noir focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-noir text-ivory px-8 py-4 font-ui text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300 mt-4"
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
        className="mt-[6vh] pt-6 border-t border-noir/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-0"
      >
        <span className="text-micro text-noir/50">
          © 2026 Józwik Studio
        </span>
        <div className="flex items-center gap-6">
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
