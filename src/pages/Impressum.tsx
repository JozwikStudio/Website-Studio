import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Impressum() {
  const { language, setLanguage } = useLanguage();
  const isGerman = language === 'de';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <header className="px-[6vw] py-6 border-b border-noir/10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/images/logo.png" alt="Józwik Studio" className="w-6 h-6" />
            <span className="font-display font-medium text-noir text-sm tracking-tight">
              Józwik Studio
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-full border border-noir/10 bg-white/70 p-1 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setLanguage('de')}
                className={`rounded-full px-3 py-1 text-[11px] tracking-[0.18em] transition-colors ${
                  isGerman ? 'bg-noir text-white' : 'text-noir/60 hover:text-noir'
                }`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-[11px] tracking-[0.18em] transition-colors ${
                  !isGerman ? 'bg-noir text-white' : 'text-noir/60 hover:text-noir'
                }`}
              >
                EN
              </button>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-noir/60 hover:text-gold transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-micro">{isGerman ? 'ZURÜCK' : 'BACK'}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-[6vw] py-16 max-w-4xl">
        <h1 className="font-display font-light text-display-lg text-noir mb-12">
          {isGerman ? 'Impressum' : 'Legal Notice'}
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to Section 5 TMG'}
            </h2>

            <div className="font-body text-noir/70 space-y-2">
              <p>Józwik Studio</p>
              <p>{isGerman ? 'Inhaber: Jakub Józwik' : 'Owner: Jakub Józwik'}</p>
              <p>Georg-Schumann-Str. 141</p>
              <p>04155 Leipzig</p>
              <p>{isGerman ? 'Deutschland' : 'Germany'}</p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Kontakt' : 'Contact'}
            </h2>

            <div className="font-body text-noir/70 space-y-2">
              <p>{isGerman ? 'Telefon: 0176 5783 71 98' : 'Phone: +49 176 5783 7198'}</p>
              <p>E-Mail: mail@jozwik-studio.de</p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Unternehmensform' : 'Company form'}
            </h2>

            <p className="font-body text-noir/70">
              {isGerman ? 'Einzelunternehmen (Kleingewerbe)' : 'Sole proprietorship (small business)'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Vertreten durch' : 'Represented by'}
            </h2>

            <p className="font-body text-noir/70">
              {isGerman ? 'Inhaber: Jakub Józwik' : 'Owner: Jakub Józwik'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Handwerkskammer' : 'Chamber of Skilled Crafts'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman ? (
                <>
                  Eingetragener Fotograf
                  <br />
                  Mitglied der Handwerkskammer zu Leipzig
                </>
              ) : (
                <>
                  Registered photographer
                  <br />
                  Member of the Chamber of Skilled Crafts in Leipzig
                </>
              )}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Streitschlichtung' : 'Dispute resolution'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'
                : 'The European Commission provides a platform for online dispute resolution:'}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline ml-1"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>

            <p className="font-body text-noir/70 mt-4 leading-relaxed">
              {isGerman
                ? 'Ich bin weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                : 'I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Haftung für Inhalte' : 'Liability for content'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. Nach §§ 8–10 TMG besteht keine Verpflichtung zur Überwachung fremder Informationen.'
                : 'As a service provider, we are responsible for our own content pursuant to Section 7 (1) TMG. Pursuant to Sections 8 to 10 TMG, there is no obligation to monitor third-party information.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Verpflichtungen zur Entfernung oder Sperrung bleiben unberührt. Eine Haftung erfolgt erst ab Kenntnis konkreter Rechtsverletzungen.'
                : 'Obligations to remove or block the use of information remain unaffected. Liability only arises once a specific legal infringement becomes known.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Haftung für Links' : 'Liability for links'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Für Inhalte externer Links wird keine Haftung übernommen. Verantwortlich sind ausschließlich die jeweiligen Betreiber.'
                : 'No liability is assumed for the content of external links. Their operators are solely responsible for their content.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? 'Urheberrecht' : 'Copyright'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung oder Nutzung außerhalb des Urheberrechts bedarf der Zustimmung.'
                : 'The content of this website is subject to German copyright law. Any reproduction or use beyond the scope of copyright law requires prior consent.'}
            </p>
          </section>
        </div>
      </main>

      <footer className="px-[6vw] py-8 border-t border-noir/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-micro text-noir/50">© 2026 Józwik Studio</span>

          <div className="flex items-center gap-8">
            <Link to="/impressum" className="text-micro text-noir/60 hover:text-gold">
              {isGerman ? 'Impressum' : 'Legal Notice'}
            </Link>
            <Link to="/datenschutz" className="text-micro text-noir/60 hover:text-gold">
              {isGerman ? 'Datenschutz' : 'Privacy'}
            </Link>
            <Link to="/agb" className="text-micro text-noir/60 hover:text-gold">
              {isGerman ? 'AGB' : 'Terms'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}