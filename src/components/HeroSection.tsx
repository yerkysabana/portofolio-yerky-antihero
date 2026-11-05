import { useEffect, useRef } from 'react';
import { profileData } from '../data/portfolioData';

function Letters({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span key={i} className={`bouncing-letter${highlight ? ' highlight' : ''}`}>
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </>
  );
}

/** Hero section: judul glitch, balon dialog, dan topeng interaktif. */
export function HeroSection() {
  const maskRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<SVGGElement>(null);
  const rightPupilRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const mask = maskRef.current;
      const left = leftPupilRef.current;
      const right = rightPupilRef.current;
      if (!mask || !left || !right) return;

      const rect = mask.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;
      const clampX = Math.max(-14, Math.min(14, deltaX));
      const clampY = Math.max(-10, Math.min(10, deltaY));

      left.style.transform = `translate(${clampX}px, ${clampY}px)`;
      right.style.transform = `translate(${clampX}px, ${clampY}px)`;

      const tiltX = (e.clientY - centerY) / -40;
      const tiltY = (e.clientX - centerX) / 40;
      mask.style.transform = `perspective(800px) rotateX(${Math.max(-10, Math.min(10, tiltX))}deg) rotateY(${Math.max(-12, Math.min(12, tiltY))}deg)`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="narrative-box">★ EDISI SPESIAL #01: MASUK KE SEMESTA SAYA</div>

          <h1 className="glitch-title">
            <Letters text={profileData.heroGreeting} />
            {' '}
            <Letters text={profileData.heroName} highlight />
          </h1>

          <div className="speech-bubble">{profileData.speech}</div>

          <p className="hero-desc">{profileData.heroDesc}</p>

          <div className="hero-cta-group">
            <a href="#proyek" className="comic-btn">
              ⚡ LIHAT KARYA GILA SAYA
            </a>
            <a href="#arcade" className="comic-btn comic-btn-secondary">
              🎮 COBA MINI GAME
            </a>
          </div>
        </div>

        <div className="hero-interactive-mask">
          <div className="interactive-mask-wrapper" ref={maskRef}>
            <svg className="mask-svg" viewBox="0 0 300 360">
              <path
                d="M 150 15 C 60 15 30 80 30 190 C 30 270 90 340 150 340 C 210 340 270 270 270 190 C 270 80 240 15 150 15 Z"
                fill="#C8102E"
                stroke="#000"
                strokeWidth="10"
              />
              <line x1="80" y1="40" x2="220" y2="310" stroke="#000" strokeWidth="3" strokeDasharray="6 8" opacity="0.6" />
              <path d="M 40 160 C 65 165 115 160 135 125 C 115 100 70 100 45 110 Z" fill="#141414" stroke="#000" strokeWidth="6" />
              <path d="M 260 160 C 235 165 185 160 165 125 C 185 100 230 100 255 110 Z" fill="#141414" stroke="#000" strokeWidth="6" />

              <g ref={leftPupilRef} className="eye-pupil">
                <polygon points="60,132 120,150 80,120" fill="#FFFFFF" stroke="#000" strokeWidth="4" />
              </g>
              <g ref={rightPupilRef} className="eye-pupil">
                <polygon points="240,132 180,150 220,120" fill="#FFFFFF" stroke="#000" strokeWidth="4" />
              </g>
            </svg>
            <div className="mask-caption">👀 &quot;SAYA MEMANTAU GERAKAN KURSORMU!&quot;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
