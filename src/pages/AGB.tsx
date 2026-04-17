import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AGB() {
  const { language, setLanguage } = useLanguage();
  const isGerman = language === 'de';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-noir">
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

            <Link to="/" className="flex items-center gap-2 text-noir/60 hover:text-gold transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-micro">{isGerman ? 'ZURÜCK' : 'BACK'}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="px-[6vw] py-16 max-w-4xl text-noir">
        <h1 className="font-display font-light text-display-lg text-noir mb-12">
          {isGerman ? 'Allgemeine Geschäftsbedingungen (AGB)' : 'Terms and Conditions'}
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-display font-medium text-xl text-noir">1. {isGerman ? 'Geltungsbereich' : 'Scope'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Diese AGB gelten für alle Leistungen von Józwik Studio in den Bereichen Fotografie, Videografie, Postproduktion und Beratung gegenüber Privat- und Geschäftskunden.'
                : 'These Terms and Conditions apply to all services provided by Józwik Studio in the fields of photography, videography, post-production and consulting for private and business clients.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">2. {isGerman ? 'Vertragsschluss' : 'Conclusion of contract'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Ein Vertrag kommt durch schriftliche, elektronische oder mündliche Beauftragung und Bestätigung durch Józwik Studio zustande. Leistungsumfang und Vergütung ergeben sich ausschließlich aus dem individuellen Angebot.'
                : 'A contract is concluded by written, electronic or verbal commissioning and confirmation by Józwik Studio. The scope of services and remuneration are determined exclusively by the individual offer.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">3. {isGerman ? 'Individuelle Vergütung' : 'Individual remuneration'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Alle Leistungen werden projektbezogen individuell kalkuliert. Es bestehen keine festen Preislisten.'
                : 'All services are calculated individually on a project basis. No fixed price list applies.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Zusatzleistungen, Mehraufwand oder nachträgliche Änderungswünsche werden gesondert berechnet.'
                : 'Additional services, extra effort or subsequent change requests are charged separately.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">4. {isGerman ? 'Vertraulichkeit' : 'Confidentiality'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Individuelle Angebote, Preisgestaltungen sowie projekt- und lizenzbezogene Konditionen gelten als vertraulich.'
                : 'Individual offers, pricing structures and project- or licence-related conditions are considered confidential.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Eine Weitergabe an Dritte ohne vorherige Zustimmung von Józwik Studio ist untersagt, soweit keine gesetzliche Verpflichtung zur Offenlegung besteht. Diese Regelung gilt auch nach Vertragsende.'
                : 'Disclosure to third parties without prior consent from Józwik Studio is prohibited unless there is a legal obligation to disclose such information. This provision also applies after termination of the contract.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">5. {isGerman ? 'Nutzungsrechte & Urheberrecht' : 'Usage rights and copyright'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Alle Werke unterliegen dem Urheberrecht von Józwik Studio.'
                : 'All works are protected by the copyright of Józwik Studio.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Nutzungsrechte werden im jeweiligen Angebot individuell definiert und nur im vereinbarten Umfang eingeräumt. Eine weitergehende Nutzung oder Weitergabe bedarf der schriftlichen Zustimmung.'
                : 'Usage rights are defined individually in the respective offer and granted only to the agreed extent. Any further use or transfer requires written consent.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">6. {isGerman ? 'Portfolio & Eigenwerbung' : 'Portfolio and self-promotion'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Sofern nicht ausdrücklich schriftlich widersprochen, darf Józwik Studio ausgewählte Arbeiten zu Eigenwerbungszwecken auf Website, Social Media oder im Portfolio verwenden.'
                : 'Unless expressly objected to in writing, Józwik Studio may use selected work for self-promotional purposes on the website, social media channels or in its portfolio.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">7. {isGerman ? 'Lieferung & Cloud-Speicherung' : 'Delivery and cloud storage'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Die Bereitstellung erfolgt digital über eine passwortgeschützte Cloud. Der Zugriff ist für 12 Monate ab Bereitstellung gewährleistet.'
                : 'Delivery is provided digitally via a password-protected cloud. Access is guaranteed for 12 months from the date of delivery.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Der Kunde ist für die rechtzeitige Sicherung der Daten selbst verantwortlich.'
                : 'The client is responsible for backing up the delivered data in due time.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">8. {isGerman ? 'Dateiformate' : 'File formats'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Die Standardlieferung erfolgt als hochauflösende JPEG-Dateien. RAW-Dateien werden ausschließlich nach gesonderter Vereinbarung an Geschäftskunden herausgegeben.'
                : 'Standard delivery is made as high-resolution JPEG files. RAW files are only provided to business clients upon separate agreement.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">9. {isGerman ? 'Bearbeitung & Korrekturen' : 'Editing and corrections'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Eine Korrekturrunde ist im Leistungsumfang enthalten, sofern nicht anders vereinbart. Weitere Änderungen oder Retuschen gelten als Zusatzleistung.'
                : 'One correction round is included in the scope of services unless otherwise agreed. Further changes or retouching are considered additional services.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">10. {isGerman ? 'Termine & Stornierung' : 'Appointments and cancellation'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman ? (
                <>
                  Stornierungen:
                  <br />– bis 14 Tage vor Termin: 50%
                  <br />– weniger als 14 Tage: 100%
                  <br />– weniger als 24 Stunden / Nichterscheinen: 100%
                </>
              ) : (
                <>
                  Cancellations:
                  <br />– up to 14 days before the appointment: 50%
                  <br />– fewer than 14 days before the appointment: 100%
                  <br />– fewer than 24 hours / no-show: 100%
                </>
              )}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">11. {isGerman ? 'Widerrufsrecht (B2C)' : 'Right of withdrawal (B2C)'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Das Widerrufsrecht erlischt, sobald der Kunde ausdrücklich zustimmt, dass mit der Ausführung der Dienstleistung begonnen wird und er über den Verlust des Widerrufsrechts belehrt wurde.'
                : 'The right of withdrawal expires as soon as the client expressly agrees that the service may begin and has been informed about the loss of the right of withdrawal.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">12. {isGerman ? 'Haftung' : 'Liability'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Józwik Studio haftet nur bei Vorsatz und grober Fahrlässigkeit. Bei einfacher Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.'
                : 'Józwik Studio is liable only in cases of intent and gross negligence. In cases of ordinary negligence, liability exists only for the breach of essential contractual obligations.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">13. {isGerman ? 'Zahlungsmodalitäten' : 'Payment terms'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Die Vergütung wird individuell im Angebot festgelegt.'
                : 'Remuneration is defined individually in the offer.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Rechnungen sind innerhalb von 14 Tagen nach Zugang ohne Abzug fällig, sofern nichts anderes vereinbart wurde.'
                : 'Invoices are due within 14 days of receipt without deduction unless otherwise agreed.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen gemäß § 288 BGB sowie angemessene Mahngebühren. Offene Forderungen können an ein Inkassounternehmen oder im Rahmen eines gerichtlichen Mahnverfahrens geltend gemacht werden.'
                : 'In the event of late payment, the statutory default interest pursuant to Section 288 BGB and reasonable reminder fees shall apply. Outstanding claims may be pursued through a debt collection agency or by way of judicial collection proceedings.'}
            </p>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Zahlungen gelten erst mit vollständigem Zahlungseingang als geleistet.'
                : 'Payments are only deemed made once the full amount has been received.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">14. {isGerman ? 'Datenschutz' : 'Privacy'} </h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Es gilt die Datenschutzerklärung von Józwik Studio.'
                : 'The Privacy Policy of Józwik Studio applies.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir">15. {isGerman ? 'Schlussbestimmungen' : 'Final provisions'}</h2>
            <p className="text-noir/70 mt-3 leading-relaxed">
              {isGerman
                ? 'Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Leipzig, soweit gesetzlich zulässig.'
                : 'German law shall apply to the exclusion of the UN Convention on Contracts for the International Sale of Goods. The place of jurisdiction is Leipzig where legally permissible.'}
            </p>
          </section>

          <p className="text-noir/50 text-sm mt-10">
            {isGerman ? 'Stand: April 2026 – Version 3.3' : 'Last updated: April 2026 – Version 3.3'}
          </p>
        </div>
      </main>
    </div>
  );
}