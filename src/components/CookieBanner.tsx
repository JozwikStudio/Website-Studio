import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getCookie, setCookie } from '../lib/cookies';

const COOKIE_NOTICE_NAME = 'jozwik_cookie_notice_v2';
const LANGUAGE_COOKIE_NAME = 'jozwik_language';

export default function CookieBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(getCookie(COOKIE_NOTICE_NAME) !== 'accepted');
  }, []);

  const handleAcknowledge = () => {
    setCookie(COOKIE_NOTICE_NAME, 'accepted', 180);
    setCookie(LANGUAGE_COOKIE_NAME, language, 365);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const copy = language === 'de'
    ? {
        eyebrow: 'Nur notwendige Cookies',
        title: 'Spracheinstellung optional speichern',
        body:
          'Wenn Sie zustimmen, speichert die Website Ihre Spracheinstellung in einem technisch notwendigen Cookie. Wenn Sie ablehnen, wird kein Cookie gesetzt.',
        accept: 'Akzeptieren',
        decline: 'Ablehnen',
        more: 'Datenschutz lesen',
      }
    : {
        eyebrow: 'Necessary cookies only',
        title: 'Optionally save language preference',
        body:
          'If you agree, the website stores your language preference in a technically necessary cookie. If you decline, no cookie will be set.',
        accept: 'Accept',
        decline: 'Decline',
        more: 'Read privacy policy',
      };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[140] sm:left-6 sm:right-6 md:right-auto md:max-w-lg">
      <div className="relative overflow-hidden rounded-[20px] border border-gold/15 bg-noir/76 p-3.5 text-ivory shadow-[0_14px_40px_rgba(0,0,0,0.30)] backdrop-blur-2xl sm:rounded-[24px] sm:p-4">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,168,106,0.10),transparent_42%)]" />

        <div className="relative">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="font-ui text-[10px] uppercase tracking-[0.18em] text-gold/85 sm:text-xs">{copy.eyebrow}</span>
          </div>

          <h2 className="font-display text-[1.05rem] leading-tight text-ivory sm:text-[1.45rem]">
            {copy.title}
          </h2>

          <p className="mt-2 font-body text-[13px] leading-relaxed text-ivory/75 sm:text-sm">
            {copy.body}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-2.5">
            <button
              type="button"
              onClick={handleAcknowledge}
              className="group relative overflow-hidden rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.18em] text-ivory transition-all duration-300 hover:border-gold/55 hover:bg-gold/16 sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">{copy.accept}</span>
            </button>

            <button
              type="button"
              onClick={handleDecline}
              className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.18em] text-ivory/72 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:text-ivory sm:px-4 sm:py-2 sm:text-xs"
            >
              {copy.decline}
            </button>

            <Link
              to="/datenschutz"
              className="font-ui text-[10px] uppercase tracking-[0.18em] text-ivory/60 transition-colors duration-300 hover:text-gold sm:text-xs"
            >
              {copy.more}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
