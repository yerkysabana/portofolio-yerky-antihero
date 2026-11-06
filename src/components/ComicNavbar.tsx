import { useEffect, useState } from 'react';
import { navSections, profileData } from '../data/portfolioData';
import { useSoundEnabled } from '../hooks/useSoundEnabled';
import { playScoreSound, setSoundEnabled } from '../hooks/useSoundFx';
import { getStackFrameHeight } from '../lib/stackingScroll';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

interface ComicNavbarProps {
  cursorOn: boolean;
  onToggleCursor: () => void;
  onLogoClick: () => void;
}

/** Sticky navbar panel komik + toggle SFX/kursor/bahasa + menu mobile. */
export function ComicNavbar({ cursorOn, onToggleCursor, onLogoClick }: ComicNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const soundOn = useSoundEnabled();
  // TAMBAHAN: i18n — teks UI, teks data bilingual, bahasa aktif & fungsi ganti bahasa
  const { t, loc, lang, toggleLang } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      let current = navSections[0]?.id ?? 'hero';
      // TAMBAHAN: pakai kriteria yang sama dengan indikator frame — section
      // terakhir yang sudah menutup setengah tinggi frame itulah yang "sedang
      // dilihat". offsetTop tidak dipakai karena section sticky yang sedang
      // stuck posisinya ikut bergeser mengikuti scroll.
      const halfFrame = getStackFrameHeight() * 0.5;
      navSections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < halfFrame) current = id;
      });
      setActiveId(current);
    };

    // TAMBAHAN: stacking scroll — throttle dengan rAF supaya scroll mulus
    // (sebelumnya tiap event scroll membaca offsetTop → paksa reflow)
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    if (next) playScoreSound();
  };

  return (
    <nav className="comic-navbar">
      <div className="nav-inner">
        <a href="#hero" className="brand-logo" onClick={onLogoClick} title={t('nav.logoTitle')}>
          <div className="logo-badge">
            <svg viewBox="0 0 30 30" width="24" height="24">
              <circle cx="15" cy="15" r="14" fill="#C8102E" />
              <path
                d="M 5 15 C 5 8 10 5 15 5 C 20 5 25 8 25 15 C 25 22 20 25 15 25 C 10 25 5 22 5 15 Z"
                fill="#000"
              />
              <polygon points="8,14 13,16 9,12" fill="#FFF" />
              <polygon points="22,14 17,16 21,12" fill="#FFF" />
            </svg>
          </div>
          <div className="brand-text">
            {profileData.brandFirst}
            <span>{profileData.brandLast}</span>
          </div>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeId === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {loc(label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-tools">
          <button
            className="btn-tool"
            onClick={toggleSound}
            title={t('nav.sfxTitle')}
            style={soundOn ? { backgroundColor: 'var(--color-primary)' } : undefined}
          >
            <span>{soundOn ? '🔊' : '🔇'}</span>{' '}
            <span className="tool-text">{t('nav.sfx')}</span>
          </button>
          <button
            className="btn-tool"
            onClick={onToggleCursor}
            title={t('nav.cursorTitle')}
            style={cursorOn ? { backgroundColor: 'var(--color-primary)' } : undefined}
          >
            🎯 <span className="tool-text">{t('nav.cursor')}</span>
          </button>
          {/* TAMBAHAN: i18n — tombol ganti bahasa; bahasa aktif disorot kuning */}
          <button
            className="btn-tool btn-lang"
            onClick={toggleLang}
            title={t('nav.langTitle')}
            aria-label={t('nav.langTitle')}
          >
            <span className={lang === 'id' ? 'lang-on' : ''}>ID</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'lang-on' : ''}>EN</span>
          </button>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label={t('nav.menu')}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
