import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AGB() {
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
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              1. Geltungsbereich
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge, 
              die zwischen Józwik Studio (nachfolgend „Fotograf") und dem Auftraggeber (nachfolgend 
              „Kunde") geschlossen werden. Sie gelten als vereinbart, sobald der Kunde den Auftrag 
              erteilt oder die Leistung des Fotografen in Anspruch nimmt.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Fotograf 
              hat diesen ausdrücklich schriftlich zugestimmt.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              2. Vertragsschluss und Leistungsumfang
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Der Vertrag kommt durch die Annahme des Auftrags durch den Fotografen zustande. 
              Die Annahme kann schriftlich, mündlich oder durch Ausführung des Auftrags erfolgen.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Der Leistungsumfang ergibt sich aus der Auftragsbestätigung oder dem Angebot des 
              Fotografen. Änderungen oder Ergänzungen bedürfen der schriftlichen Vereinbarung.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Der Fotograf ist berechtigt, zur Erfüllung des Auftrags Dritte (z. B. Assistenten, 
              Visagisten, Stylisten) einzusetzen. Die Kosten hierfür werden dem Kunden gesondert 
              in Rechnung gestellt, sofern nicht anders vereinbart.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              3. Termine und Terminverschiebungen
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Termine werden individuell vereinbart. Der Kunde ist verpflichtet, pünktlich zum 
              vereinbarten Termin zu erscheinen. Bei Verspätung des Kunden vermindert sich die 
              Auftragszeit entsprechend, es sei denn, der Fotograf stimmt einer Verlängerung zu.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Terminverschiebungen müssen mindestens 48 Stunden vor dem vereinbarten Termin 
              schriftlich mitgeteilt werden. Bei kurzfristigeren Absagen oder Terminverschiebungen 
              behält sich der Fotograf vor, 50% der vereinbarten Vergütung als Ausfallhonorar 
              zu berechnen.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Bei Absagen innerhalb von 24 Stunden vor dem Termin oder Nichterscheinen ohne 
              Absage wird die volle vereinbarte Vergütung fällig.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              4. Vergütung und Zahlungsbedingungen
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Die Vergütung für die fotografischen Leistungen ergibt sich aus der Auftragsbestätigung 
              oder dem Angebot des Fotografen. Alle Preise verstehen sich zuzüglich der gesetzlichen 
              Mehrwertsteuer.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Sofern nicht anders vereinbart, ist eine Anzahlung in Höhe von 30% des Gesamtbetrages 
              bei Vertragsschluss fällig. Die Restzahlung ist innerhalb von 14 Tagen nach Rechnungsstellung 
              fällig.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Bei Zahlungsverzug ist der Fotograf berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten 
              über dem Basiszinssatz zu verlangen. Der Fotograf behält sich vor, einen höheren 
              Verzugsschaden nachzuweisen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              5. Urheberrecht und Nutzungsrechte
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Der Fotograf behält das Urheberrecht an allen von ihm erstellten Aufnahmen. 
              Das Urheberrecht ist nicht übertragbar.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Mit vollständiger Bezahlung erhält der Kunde das einfache Nutzungsrecht an den 
              vereinbarten Aufnahmen für den vertraglich bestimmten Zweck und Zeitraum. 
              Eine über die vertragliche Vereinbarung hinausgehende Nutzung bedarf der 
              schriftlichen Zustimmung des Fotografen.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Der Kunde ist nicht berechtigt, die Aufnahmen zu bearbeiten, zu verfremden oder 
              in einer Weise zu verwenden, die die künstlerische Integrität des Fotografen 
              beeinträchtigt.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Eine Weitergabe der Nutzungsrechte an Dritte bedarf der schriftlichen Zustimmung 
              des Fotografen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              6. Honorierung bei Nichtnutzung
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Wenn der Kunde die vertraglich vereinbarten Aufnahmen nicht nutzt, ohne dass der 
              Fotograf hieran ein Verschulden trifft, hat der Kunde den vereinbarten Honoraranteil 
              dennoch zu zahlen. Dies gilt nicht, wenn der Fotograf die Aufnahmen anderweitig 
              verwerten kann.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              7. Mängel und Nachbesserung
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Mängel sind innerhalb von 7 Tagen nach Übergabe der Aufnahmen schriftlich zu rügen. 
              Bei berechtigten Mängeln ist der Fotograf zur Nachbesserung berechtigt und verpflichtet.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Bei Fehlschlagen der Nachbesserung hat der Kunde das Recht, eine angemessene 
              Minderung des Honorars zu verlangen oder vom Vertrag zurückzutreten.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              8. Haftung
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Der Fotograf haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. 
              Dies gilt nicht für die Verletzung wesentlicher Vertragspflichten oder für 
              Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Die Haftung für leichte Fahrlässigkeit ist auf vertragstypische, vorhersehbare 
              Schäden begrenzt, es sei denn, es handelt sich um die Verletzung wesentlicher 
              Vertragspflichten.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Der Fotograf haftet nicht für den Verlust von Daten, sofern er nicht vorsätzlich 
              oder grob fahrlässig gehandelt hat. Der Kunde ist verpflichtet, eigene Sicherungskopien 
              der übergebenen Daten anzufertigen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              9. Datenschutz
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Der Fotograf verarbeitet personenbezogene Daten des Kunden im Einklang mit den 
              geltenden Datenschutzbestimmungen. Nähere Informationen entnehmen Sie bitte unserer 
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              10. Schlussbestimmungen
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Gerichtsstand ist der Sitz des Fotografen, sofern der Kunde Kaufmann ist oder 
              keinen allgemeinen Gerichtsstand im Inland hat.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt der 
              Vertrag im Übrigen wirksam. Die unwirksame Bestimmung ist durch eine wirksame 
              zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
          </section>

          <section>
            <p className="font-body text-noir/60 text-sm mt-8">
              Stand: Januar 2026
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
