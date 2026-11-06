import { useCallback, useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ArcadeSection } from './components/ArcadeSection';
import { ComicCursor } from './components/ComicCursor';
import { ComicNavbar } from './components/ComicNavbar';
import { ContactSection } from './components/ContactSection';
import { CrackedScreen } from './components/CrackedScreen';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { FourthWallWidget } from './components/FourthWallWidget';
import { HeroSection } from './components/HeroSection';
import { LoadingScreen } from './components/LoadingScreen';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ProjectsSection } from './components/ProjectsSection';
import { ScrollTopButton } from './components/ScrollTopButton';
import { SkillsSection } from './components/SkillsSection';
import { initStackingScroll } from './lib/stackingScroll'; // TAMBAHAN: stacking scroll
import { useKonamiCode } from './hooks/useKonamiCode';
import { playBoomSound } from './hooks/useSoundFx';
import { useLanguage } from './i18n/LanguageProvider'; // TAMBAHAN: i18n

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorOn, setCursorOn] = useState(true);
  const [cracked, setCracked] = useState(false);
  const [konami, setKonami] = useState(false);
  // TAMBAHAN: i18n — teks toast Konami ikut bahasa aktif
  const { t } = useLanguage();

  // Loading screen hilang setelah mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  // TAMBAHAN: stacking scroll — aktifkan efek frame menumpuk setelah mount
  useEffect(() => {
    initStackingScroll();
  }, []);

  // Toggle kursor custom → kelas di body
  useEffect(() => {
    document.body.classList.toggle('has-custom-cursor', cursorOn);
  }, [cursorOn]);

  const triggerKonami = useCallback(() => {
    playBoomSound();
    document.body.classList.add('konami-chaos');
    setKonami(true);
    setTimeout(() => {
      document.body.classList.remove('konami-chaos');
      setKonami(false);
    }, 6000);
  }, []);

  useKonamiCode(triggerKonami);

  // Klik logo 5x → layar retak
  const logoClickCount = useRef(0);
  const handleLogoClick = useCallback(() => {
    logoClickCount.current += 1;
    if (logoClickCount.current >= 5) {
      logoClickCount.current = 0;
      playBoomSound();
      setCracked(true);
      setTimeout(() => setCracked(false), 4000);
    }
  }, []);

  return (
    <>
      <LoadingScreen hidden={!loading} />
      <CrackedScreen active={cracked} />
      <ComicCursor active={cursorOn} />

      <ComicNavbar
        cursorOn={cursorOn}
        onToggleCursor={() => setCursorOn((v) => !v)}
        onLogoClick={handleLogoClick}
      />

      <main>
        <HeroSection />
        <MarqueeTicker />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ArcadeSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollTopButton />
      <FourthWallWidget />

      {konami && (
        <div className="konami-toast">
          {t('konami.title')}
          <br />
          {t('konami.sub')}
        </div>
      )}
    </>
  );
}
