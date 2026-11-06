import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Loading screen bergaya topeng komik. */
export function LoadingScreen({ hidden }: { hidden: boolean }) {
  // TAMBAHAN: i18n
  const { t } = useLanguage();

  return (
    <div id="loading-screen" className={hidden ? 'hidden' : ''}>
      <div className="loader-mask">
        <svg viewBox="0 0 100 120" width="100%" height="100%">
          <path
            d="M 50 5 C 20 5 10 30 10 70 C 10 95 30 115 50 115 C 70 115 90 95 90 70 C 90 30 80 5 50 5 Z"
            fill="#C8102E"
            stroke="#000"
            strokeWidth="5"
          />
          <path d="M 12 60 C 20 62 38 60 44 48 C 38 38 24 38 14 42 Z" fill="#111" stroke="#000" strokeWidth="2" />
          <path d="M 88 60 C 80 62 62 60 56 48 C 62 38 76 38 86 42 Z" fill="#111" stroke="#000" strokeWidth="2" />
          <polygon points="20,48 40,54 26,43" fill="#FFF" stroke="#000" strokeWidth="2">
            <animate
              attributeName="points"
              dur="1.2s"
              repeatCount="indefinite"
              values="20,48 40,54 26,43; 20,48 40,49 26,48; 20,48 40,54 26,43"
            />
          </polygon>
          <polygon points="80,48 60,54 74,43" fill="#FFF" stroke="#000" strokeWidth="2">
            <animate
              attributeName="points"
              dur="1.2s"
              repeatCount="indefinite"
              values="80,48 60,54 74,43; 80,48 60,49 74,48; 80,48 60,54 74,43"
            />
          </polygon>
        </svg>
      </div>
      <div className="loader-text">{t('loading.text')}</div>
      <div className="loader-subtext">{t('loading.subtext')}</div>
    </div>
  );
}
