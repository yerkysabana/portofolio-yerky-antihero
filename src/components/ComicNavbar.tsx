import { useEffect, useState } from 'react';
import { navSections, profileData } from '../data/portfolioData';
import { useSoundEnabled } from '../hooks/useSoundEnabled';
import { playScoreSound, setSoundEnabled } from '../hooks/useSoundFx';

interface ComicNavbarProps {
  cursorOn: boolean;
  onToggleCursor: () => void;
  onLogoClick: () => void;
}

/** Sticky navbar panel komik + toggle SFX/kursor + menu mobile. */
export function ComicNavbar({ cursorOn, onToggleCursor, onLogoClick }: ComicNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const soundOn = useSoundEnabled();

  useEffect(() => {
    const onScroll = () => {
      let current = 'hero';
      navSections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
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
        <a href="#hero" className="brand-logo" onClick={onLogoClick} title="Klik aku beberapa kali...">
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
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-tools">
          <button
            className="btn-tool"
            onClick={toggleSound}
            title="Nyalakan/Matikan Sound FX"
            style={soundOn ? { backgroundColor: 'var(--color-primary)' } : undefined}
          >
            <span>{soundOn ? '🔊' : '🔇'}</span> SFX
          </button>
          <button
            className="btn-tool"
            onClick={onToggleCursor}
            title="Nyalakan/Matikan Kursor Custom"
            style={cursorOn ? { backgroundColor: 'var(--color-primary)' } : undefined}
          >
            🎯 KURSOR
          </button>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
