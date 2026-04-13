import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AGB() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-noir">

      {/* HEADER */}
      <header className="px-[6vw] py-6 border-b border-noir/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/images/logo.png" alt="Józwik Studio" className="w-6 h-6" />
            <span className="font-display font-medium text-noir text-sm tracking-tight">
              Józwik Studio
            </span>
          </Link>

          <Link to="/" className="flex items-center gap-2 text-noir/60 hover:text-gold">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-micro">ZURÜCK</span>
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="px-[6vw] py-16 max-w-4xl text-noir">

        <h1 className="font-display font-light text-display-lg text-noir mb-12">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="space-y-12">

          {/* 1 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">1. Geltungsbereich</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Diese AGB gelten für alle Leistungen von Józwik Studio (Fotografie, Videografie, Postproduktion,
              Beratung) gegenüber Privat- und Geschäftskunden.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">2. Vertragsschluss</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Ein Vertrag kommt durch schriftliche, elektronische oder mündliche Beauftragung und Bestätigung
              durch Józwik Studio zustande. Leistungsumfang und Vergütung ergeben sich ausschließlich aus dem individuellen Angebot.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">3. Individuelle Vergütung</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Alle Leistungen werden projektbezogen individuell kalkuliert. Es bestehen keine festen Preislisten.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Zusatzleistungen, Mehraufwand oder nachträgliche Änderungswünsche werden gesondert berechnet.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">4. Vertraulichkeit</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Individuelle Angebote, Preisgestaltungen sowie projekt- und lizenzbezogene Konditionen gelten als vertraulich.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Eine Weitergabe an Dritte ohne vorherige Zustimmung von Józwik Studio ist untersagt,
              soweit keine gesetzliche Verpflichtung zur Offenlegung besteht. Diese Regelung gilt auch nach Vertragsende.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">5. Nutzungsrechte & Urheberrecht</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Alle Werke unterliegen dem Urheberrecht von Józwik Studio.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Nutzungsrechte werden im jeweiligen Angebot individuell definiert und nur im vereinbarten Umfang eingeräumt.
              Eine weitergehende Nutzung oder Weitergabe bedarf der schriftlichen Zustimmung.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">6. Portfolio & Eigenwerbung</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Sofern nicht ausdrücklich schriftlich widersprochen, darf Józwik Studio ausgewählte Arbeiten
              zu Eigenwerbungszwecken (Website, Social Media, Portfolio) verwenden.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">7. Lieferung & Cloud-Speicherung</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Die Bereitstellung erfolgt digital über eine passwortgeschützte Cloud (IONOS).
              Der Zugriff ist für 12 Monate ab Bereitstellung gewährleistet.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Der Kunde ist für die rechtzeitige Sicherung der Daten selbst verantwortlich.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">8. Dateiformate</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Standardlieferung erfolgt als hochauflösende JPEG-Dateien.
              RAW-Dateien werden ausschließlich nach gesonderter Vereinbarung an Geschäftskunden herausgegeben.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">9. Bearbeitung & Korrekturen</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Eine Korrekturrunde ist im Leistungsumfang enthalten, sofern nicht anders vereinbart.
              Weitere Änderungen oder Retuschen gelten als Zusatzleistung.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">10. Termine & Stornierung</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Stornierungen:
              <br />– bis 14 Tage vor Termin: 50%
              <br />– weniger als 14 Tage: 100%
              <br />– weniger als 24 Stunden / Nichterscheinen: 100%
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">11. Widerrufsrecht (B2C)</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Bei Verbrauchern besteht grundsätzlich ein gesetzliches Widerrufsrecht.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Das Widerrufsrecht erlischt vorzeitig, wenn der Kunde ausdrücklich zustimmt,
              dass mit der Ausführung der Dienstleistung vor Ablauf der Widerrufsfrist begonnen wird
              und er über den Verlust des Widerrufsrechts belehrt wurde.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">12. Haftung</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Józwik Studio haftet nur bei Vorsatz und grober Fahrlässigkeit.
              Bei einfacher Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Die Haftung ist in diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">13. Datenschutz</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Es gilt die Datenschutzerklärung von Józwik Studio.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="font-display font-medium text-xl text-noir">14. Schlussbestimmungen</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              Gerichtsstand ist Leipzig, soweit gesetzlich zulässig.
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.
            </p>
          </section>

          <p className="text-noir/50 text-sm mt-10">
            Stand: April 2026 – Version 3.3
          </p>

        </div>
      </main>
    </div>
  );
}