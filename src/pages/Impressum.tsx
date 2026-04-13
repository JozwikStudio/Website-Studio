import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">

      {/* Header */}
      <header className="px-[6vw] py-6 border-b border-noir/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/images/logo.png" alt="Józwik Studio" className="w-6 h-6" />
            <span className="font-display font-medium text-noir text-sm tracking-tight">
              Józwik Studio
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-noir/60 hover:text-gold transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-micro">ZURÜCK</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-[6vw] py-16 max-w-4xl">
        <h1 className="font-display font-light text-display-lg text-noir mb-12">
          Impressum
        </h1>

        <div className="space-y-12">

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Angaben gemäß § 5 TMG
            </h2>

            <div className="font-body text-noir/70 space-y-2">
              <p>Józwik Studio</p>
              <p>Inhaber: Jakub Józwik</p>
              <p>Georg-Schumann-Str. 141</p>
              <p>04155 Leipzig</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Kontakt
            </h2>

            <div className="font-body text-noir/70 space-y-2">
              <p>Telefon: 0176 5783 71 98</p>
              <p>E-Mail: mail@jozwik-studio.de</p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Unternehmensform
            </h2>

            <p className="font-body text-noir/70">
              Einzelunternehmen (Kleingewerbe)
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Vertreten durch
            </h2>

            <p className="font-body text-noir/70">
              Inhaber: Jakub Józwik
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Handwerkskammer
            </h2>

            <p className="font-body text-noir/70">
              Eingetragener Fotograf<br></br>
              Mitglied der Handwerkskammer zu Leipzig
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Streitschlichtung
            </h2>

            <p className="font-body text-noir/70">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline ml-1"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>

            <p className="font-body text-noir/70 mt-4">
              Ich bin weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Haftung für Inhalte
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich.
              Nach §§ 8–10 TMG besteht keine Verpflichtung zur Überwachung fremder Informationen.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Verpflichtungen zur Entfernung oder Sperrung bleiben unberührt.
              Eine Haftung erfolgt erst ab Kenntnis konkreter Rechtsverletzungen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Haftung für Links
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              Für Inhalte externer Links wird keine Haftung übernommen.
              Verantwortlich sind ausschließlich die jeweiligen Betreiber.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Urheberrecht
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              Inhalte unterliegen dem deutschen Urheberrecht.
              Vervielfältigung oder Nutzung außerhalb des Urheberrechts bedarf der Zustimmung.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-[6vw] py-8 border-t border-noir/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-micro text-noir/50">
            © 2026 Józwik Studio
          </span>

          <div className="flex items-center gap-8">
            <Link to="/impressum" className="text-micro text-noir/60 hover:text-gold">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-micro text-noir/60 hover:text-gold">
              Datenschutz
            </Link>
            <Link to="/agb" className="text-micro text-noir/60 hover:text-gold">
              AGB
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}