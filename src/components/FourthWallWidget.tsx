import { useEffect, useState } from 'react';
import { fourthWallQuotes } from '../data/portfolioData';
import { playTone } from '../hooks/useSoundFx';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Widget "breaking the fourth wall" — balon komentar karakter. */
export function FourthWallWidget() {
  const [index, setIndex] = useState(0);
  // TAMBAHAN: i18n
  const { t, loc } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % fourthWallQuotes.length);
      playTone(400, 'triangle', 0.1, 0.1);
    }, 14000);
    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => {
    setIndex((i) => (i + 1) % fourthWallQuotes.length);
    playTone(400, 'triangle', 0.1, 0.1);
  };

  return (
    <div className="fourth-wall-widget">
      <div className="fourth-wall-bubble" key={index}>
        {loc(fourthWallQuotes[index])}
      </div>
      <div className="fourth-wall-avatar" onClick={nextQuote} title={t('fourthWall.title')}>
        <svg viewBox="0 0 30 30" width="36" height="36">
          <circle cx="15" cy="15" r="14" fill="#C8102E" stroke="#000" strokeWidth="2" />
          <path d="M 5 15 C 5 8 10 5 15 5 C 20 5 25 8 25 15 C 25 22 20 25 15 25 C 10 25 5 22 5 15 Z" fill="#000" />
          <polygon points="8,14 13,16 9,12" fill="#FFF" />
          <polygon points="22,14 17,16 21,12" fill="#FFF" />
        </svg>
      </div>
    </div>
  );
}
