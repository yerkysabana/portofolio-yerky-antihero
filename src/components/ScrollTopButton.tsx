import { useEffect, useState } from 'react';
import { playSlashSound } from '../hooks/useSoundFx';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Tombol scroll-to-top bergaya roket. */
export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  // TAMBAHAN: i18n
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      title={t('scrollTop.title')}
      onClick={() => {
        playSlashSound();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2.5L3.5 11h5v10h7V11h5L12 2.5z" />
      </svg>
    </button>
  );
}
