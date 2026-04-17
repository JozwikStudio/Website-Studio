import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Datenschutz() {
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
          {isGerman ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? '1. Datenschutz auf einen Blick' : '1. Privacy at a glance'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Diese Website verarbeitet personenbezogene Daten nur, soweit dies technisch erforderlich ist oder Sie freiwillig per E-Mail Kontakt aufnehmen. Es werden keine Analyse- oder Marketing-Dienste eingesetzt.'
                : 'This website only processes personal data where technically necessary or if you contact us voluntarily by email. No analytics or marketing services are used.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? '2. Hosting' : '2. Hosting'}
            </h2>

            <h3 className="font-display font-medium text-lg text-noir mb-3">Cloudflare Pages</h3>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Diese Website wird über Cloudflare Pages (Cloudflare Inc., USA) bereitgestellt. Beim Aufruf der Website werden technisch notwendige Daten verarbeitet, zum Beispiel IP-Adresse, Zeitpunkt des Zugriffs und Browserinformationen, um die sichere und stabile Auslieferung der Website zu gewährleisten.'
                : 'This website is provided via Cloudflare Pages (Cloudflare Inc., USA). When you access the website, technically necessary data may be processed, such as your IP address, time of access and browser information, in order to ensure secure and stable delivery of the website.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Cloudflare verarbeitet diese Daten als technischer Dienstleister im Rahmen der Auftragsverarbeitung. Eine Datenübertragung in die USA kann nicht ausgeschlossen werden. Cloudflare ist nach dem EU-US Data Privacy Framework zertifiziert.'
                : 'Cloudflare processes this data as a technical service provider within the scope of commissioned processing. A transfer of data to the USA cannot be ruled out. Cloudflare is certified under the EU-US Data Privacy Framework.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).'
                : 'The legal basis is Art. 6(1)(f) GDPR, reflecting our legitimate interest in the secure and reliable operation of the website.'}
            </p>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              {isGerman ? 'Domain-Provider' : 'Domain provider'}
            </h3>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Die Domain wird über IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland, bereitgestellt. Bei der Domainauflösung kann es technisch bedingt zu einer Weiterleitung auf Cloudflare kommen.'
                : 'The domain is provided by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. During domain resolution, a technical redirect to Cloudflare may occur.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? '3. Allgemeine Hinweise' : '3. General information'}
            </h2>

            <h3 className="font-display font-medium text-lg text-noir mb-3">
              {isGerman ? 'Verantwortliche Stelle' : 'Controller'}
            </h3>

            <div className="font-body text-noir/70 space-y-1">
              <p>Józwik Studio</p>
              <p>Jakub Józwik</p>
              <p>Georg-Schumann-Str. 141</p>
              <p>04155 Leipzig</p>
              <p>{isGerman ? 'E-Mail: mail@jozwik-studio.de' : 'Email: mail@jozwik-studio.de'}</p>
            </div>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              {isGerman ? 'Ihre Rechte' : 'Your rights'}
            </h3>

            <ul className="font-body text-noir/70 ml-6 list-disc space-y-1">
              <li>{isGerman ? 'Auskunft (Art. 15 DSGVO)' : 'Access (Art. 15 GDPR)'}</li>
              <li>{isGerman ? 'Berichtigung (Art. 16 DSGVO)' : 'Rectification (Art. 16 GDPR)'}</li>
              <li>{isGerman ? 'Löschung (Art. 17 DSGVO)' : 'Erasure (Art. 17 GDPR)'}</li>
              <li>{isGerman ? 'Einschränkung der Verarbeitung (Art. 18 DSGVO)' : 'Restriction of processing (Art. 18 GDPR)'}</li>
              <li>{isGerman ? 'Datenübertragbarkeit (Art. 20 DSGVO)' : 'Data portability (Art. 20 GDPR)'}</li>
              <li>{isGerman ? 'Widerspruch (Art. 21 DSGVO)' : 'Objection (Art. 21 GDPR)'}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? '4. Kontaktaufnahme per E-Mail' : '4. Contact via email'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Wenn Sie uns per E-Mail kontaktieren, werden die übermittelten Daten, etwa Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht, ausschließlich zur Bearbeitung der Anfrage verarbeitet.'
                : 'If you contact us by email, the transmitted data, such as your email address and the content of your message, will be processed solely for the purpose of handling your request.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).'
                : 'Processing is carried out pursuant to Art. 6(1)(b) GDPR for pre-contractual measures or Art. 6(1)(f) GDPR based on our legitimate interest in responding to enquiries.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Diese Website enthält kein Kontaktformular. Die Kontaktaufnahme erfolgt ausschließlich über einen E-Mail-Link, der Ihr lokales E-Mail-Programm öffnet.'
                : 'This website does not contain a contact form. Contact is made exclusively via an email link that opens your local email application.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Auf eingehende E-Mails hat ausschließlich der Verantwortliche persönlich Zugriff. Eine Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche Verpflichtung besteht.'
                : 'Incoming emails are accessible only to the responsible person personally. No transfer to third parties takes place unless there is a legal obligation to do so.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              {isGerman ? '5. Cookies und externe Dienste' : '5. Cookies and external services'}
            </h2>

            <p className="font-body text-noir/70 leading-relaxed">
              {isGerman
                ? 'Diese Website verwendet keine Tracking-Technologien sowie keine Analyse- oder Marketing-Cookies. Nur wenn Sie im Banner zustimmen, wird ein technisch notwendiger Cookie eingesetzt, um Ihre gewählte Spracheinstellung zu speichern.'
                : 'This website does not use tracking technologies or any analytics or marketing cookies. Only if you consent via the banner will a technically necessary cookie be used to store your selected language preference.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Es werden keine externen Schriftarten, Inhalte oder Skripte von Drittanbietern geladen. Alle Inhalte werden lokal bereitgestellt.'
                : 'No external fonts, scripts or third-party content are loaded. All content is provided locally.'}
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              {isGerman
                ? 'Die Website enthält einen externen Link zu Instagram. Erst wenn Sie diesen Link aktiv anklicken, werden Sie zu der Plattform weitergeleitet. Dabei können personenbezogene Daten, etwa Ihre IP-Adresse oder Browserinformationen, durch den jeweiligen Anbieter verarbeitet werden.'
                : 'The website contains an external link to Instagram. Only when you actively click this link will you be redirected to the platform. In that case, personal data such as your IP address or browser information may be processed by the respective provider.'}
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