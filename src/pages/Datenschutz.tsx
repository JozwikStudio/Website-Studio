import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-12">

          {/* 1 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              1. Datenschutz auf einen Blick
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              Diese Website verarbeitet keine personenbezogenen Daten aktiv durch den Betreiber.
              Es werden keine Cookies, Tracking-Tools oder Analyse-Dienste eingesetzt.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              2. Hosting
            </h2>

            <h3 className="font-display font-medium text-lg text-noir mb-3">
              Cloudflare Pages
            </h3>

            <p className="font-body text-noir/70 leading-relaxed">
              Diese Website wird über Cloudflare Pages (Cloudflare Inc., USA) bereitgestellt.
              Beim Aufruf der Website werden technisch notwendige Daten verarbeitet
              (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browserinformationen),
              um die Auslieferung und Sicherheit der Website zu gewährleisten.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Cloudflare verarbeitet diese Daten als technischer Dienstleister im Rahmen der
              Auftragsverarbeitung. Dabei kann eine Datenübertragung in die USA nicht ausgeschlossen werden.
              Cloudflare ist nach dem EU-US Data Privacy Framework zertifiziert.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).
            </p>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Domain-Provider
            </h3>

            <p className="font-body text-noir/70 leading-relaxed">
              Die Domain wird über IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland, bereitgestellt.
              Bei der Domainauflösung kann es technisch bedingt zu einer Weiterleitung auf Cloudflare kommen.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              3. Allgemeine Hinweise
            </h2>

            <h3 className="font-display font-medium text-lg text-noir mb-3">
              Verantwortliche Stelle
            </h3>

            <div className="font-body text-noir/70 space-y-1">
              <p>Józwik Studio</p>
              <p>Jakub Józwik</p>
              <p>Georg-Schumann-Str. 141</p>
              <p>04155 Leipzig</p>
              <p>E-Mail: mail@jozwik-studio.de</p>
            </div>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Ihre Rechte
            </h3>

            <ul className="font-body text-noir/70 ml-6 list-disc space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              4. Kontaktaufnahme per E-Mail
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten
              (z. B. E-Mail-Adresse, Inhalt der Nachricht) ausschließlich zur Bearbeitung
              der Anfrage verarbeitet.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
              oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Diese Website enthält kein Kontaktformular. Die Kontaktaufnahme erfolgt ausschließlich
              über einen E-Mail-Link (mailto:), der Ihr lokales E-Mail-Programm öffnet.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              5. Cookies und externe Dienste
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              Diese Website verwendet keine Cookies, keine Tracking-Technologien
              und keine Analyse- oder Marketing-Dienste.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Es werden keine externen Schriftarten, Inhalte oder Skripte von Drittanbietern geladen.
              Alle Inhalte werden lokal bereitgestellt.
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