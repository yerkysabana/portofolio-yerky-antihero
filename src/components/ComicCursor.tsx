import { useEffect, useRef } from 'react';
import { playBoomSound, playSlashSound } from '../hooks/useSoundFx';

const COMIC_WORDS = ['POW!', 'BOOM!', 'BAMF!', 'SLASH!', 'BANG!', 'OUCH!'];

/**
 * Kursor custom + efek klik (splat teks + screen shake) + sayatan katana
 * saat mouse bergerak cepat. Port dari template vanilla.
 */
export function ComicCursor({ active }: { active: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;
    const cursor = cursorRef.current;

    const createKatanaSlash = (x1: number, y1: number, x2: number, y2: number) => {
      const length = Math.hypot(x2 - x1, y2 - y1);
      const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
      const line = document.createElement('div');
      line.className = 'katana-slash-line';
      line.style.width = `${length}px`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.transform = `rotate(${angle}deg)`;
      document.body.appendChild(line);
      setTimeout(() => line.remove(), 350);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      if (dist > 120 && Math.random() < 0.25) {
        createKatanaSlash(lastPos.current.x, lastPos.current.y, e.clientX, e.clientY);
        playSlashSound();
      }
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('.arcade-viewport') ||
        target?.closest('.project-detail') || // TAMBAHAN: detail proyek — jangan ganggu panel detail
        target?.closest('a')
      ) {
        return;
      }

      playBoomSound();

      const splat = document.createElement('div');
      splat.className = 'comic-splat';
      splat.textContent = COMIC_WORDS[Math.floor(Math.random() * COMIC_WORDS.length)];
      splat.style.left = `${e.clientX}px`;
      splat.style.top = `${e.clientY}px`;
      splat.style.setProperty('--rot', `${Math.random() * 40 - 20}deg`);
      document.body.appendChild(splat);
      setTimeout(() => splat.remove(), 550);

      document.body.classList.add('screen-shake');
      setTimeout(() => document.body.classList.remove('screen-shake'), 220);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeDasharray="8 4" />
        <line x1="20" y1="2" x2="20" y2="10" stroke="#C8102E" strokeWidth="2.5" />
        <line x1="20" y1="30" x2="20" y2="38" stroke="#C8102E" strokeWidth="2.5" />
        <line x1="2" y1="20" x2="10" y2="20" stroke="#C8102E" strokeWidth="2.5" />
        <line x1="30" y1="20" x2="38" y2="20" stroke="#C8102E" strokeWidth="2.5" />
      </svg>
      <div className="custom-cursor-dot" />
    </div>
  );
}
