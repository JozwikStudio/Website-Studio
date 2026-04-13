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
          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Allgemeine Hinweise
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter 
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Datenerfassung auf dieser Website
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              <strong className="text-noir">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-2">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" 
              in dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              <strong className="text-noir">Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-2">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-2">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
              automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              <strong className="text-noir">Wofür nutzen wir Ihre Daten?</strong>
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-2">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
              zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-body text-noir/70 leading-relaxed mt-4">
              <strong className="text-noir">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-2">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
              ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              2. Hosting
            </h2>
            <p className="font-body text-noir/70 leading-relaxed">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Externes Hosting
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
              Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. 
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über 
              eine Website generiert werden, handeln.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren 
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse 
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots 
              durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Datenschutz
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür 
              wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="font-body text-noir/70 space-y-1 mt-4">
              <p>Józwik Studio</p>
              <p>Jakub Józwik</p>
              <p>Georg-Schumann-Str. 141</p>
              <p>04155 Leipzig</p>
              <p>Telefon: 0176 5783 71 98</p>
              <p>E-Mail: mail@jozwik-studio.de</p>
            </div>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Speicherdauer
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
              oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
              personenbezogenen Daten haben.
            </p>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Ihre Rechte
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Sie haben folgende Rechte:
            </p>
            <ul className="font-body text-noir/70 leading-relaxed mt-2 ml-6 list-disc space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Kontaktformular
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der 
              an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
              (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben 
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-display font-medium text-xl text-noir mb-4">
              5. Plugins und Tools
            </h2>
            <h3 className="font-display font-medium text-lg text-noir mb-3 mt-6">
              Google Fonts
            </h3>
            <p className="font-body text-noir/70 leading-relaxed">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, 
              die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die 
              benötigten Schriftarten in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p className="font-body text-noir/70 leading-relaxed mt-4">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google 
              aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese 
              Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 
              Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen 
              Darstellung des Schriftbildes auf seiner Website.
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
