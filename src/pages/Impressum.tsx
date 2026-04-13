import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impressum() {
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
              <p>Musterstraße 123</p>
              <p>04155 Leipzig</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Kontakt
            </h2>
            <div className="font-body text-noir/70 space-y-2">
              <p>Telefon: +49 123 456 789 0</p>
              <p>E-Mail: hello@jozwikstudio.de</p>
            </div>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Vertreten durch
            </h2>
            <p className="font-body text-noir/70">
              Max Mustermann (Geschäftsführer)
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="font-body text-noir/70">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p className="font-body text-noir/70 mt-2">
              DE123456789
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Berufshaftpflichtversicherung
            </h2>
            <div className="font-body text-noir/70 space-y-2">
              <p>Muster Versicherung AG</p>
              <p>Musterweg 45</p>
              <p>04155 Leipzig</p>
              <p>Räumlicher Geltungsbereich: Deutschland</p>
            </div>
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
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Haftung für Inhalte
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
              Tätigkeit hinweisen.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend 
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Haftung für Links
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
              Verlinkung nicht erkennbar.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              Urheberrecht
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
              werden wir derartige Inhalte umgehend entfernen.
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
            <Link
              to="/impressum"
              className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
            >
              Datenschutz
            </Link>
            <Link
              to="/agb"
              className="text-micro text-noir/60 hover:text-gold transition-colors duration-300"
            >
              AGB
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
