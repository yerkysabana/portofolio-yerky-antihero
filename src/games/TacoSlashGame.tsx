import { useCallback, useEffect, useRef, useState } from 'react';
import { playBoomSound, playSlashSound } from '../hooks/useSoundFx';

interface Item {
  x: number;
  y: number;
  vx: number;
  vy: number;
  gravity: number;
  radius: number;
  isBomb: boolean;
  sliced: boolean;
  emoji: string;
}

/** Game 2: Tebas Taco — geser seperti katana untuk membelah makanan, hindari bom. */
export function TacoSlashGame({ onScore }: { onScore: (score: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [phase, setPhase] = useState<'start' | 'playing' | 'over'>('start');

  const itemsRef = useRef<Item[]>([]);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const runningRef = useRef(false);
  const animRef = useRef(0);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  const stop = useCallback(() => {
    runningRef.current = false;
    if (animRef.current) cancelAnimationFrame(animRef.current);
  }, []);

  const end = useCallback(() => {
    stop();
    setPhase('over');
    onScore(scoreRef.current);
    playBoomSound();
  }, [stop, onScore]);

  const loop = useCallback(() => {
    if (!runningRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.035 && itemsRef.current.length < 6) {
        const isBomb = Math.random() < 0.28;
        itemsRef.current.push({
          x: Math.random() * (canvas.width - 120) + 60,
          y: canvas.height + 30,
          vx: (Math.random() - 0.5) * 4,
          vy: -(Math.random() * 5 + 9.5),
          gravity: 0.22,
          radius: 28,
          isBomb,
          sliced: false,
          emoji: isBomb ? '💣' : Math.random() < 0.5 ? '🌮' : '🌯',
        });
      }

      for (let i = itemsRef.current.length - 1; i >= 0; i--) {
        const item = itemsRef.current[i];
        item.x += item.vx;
        item.y += item.vy;
        item.vy += item.gravity;

        ctx.font = '34px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.emoji, item.x, item.y);

        if (item.y > canvas.height + 60) {
          if (!item.isBomb && !item.sliced) {
            livesRef.current -= 1;
            setLives(Math.max(0, livesRef.current));
            if (livesRef.current <= 0) {
              end();
              return;
            }
          }
          itemsRef.current.splice(i, 1);
        }
      }

      const trail = trailRef.current;
      if (trail.length > 1) {
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let t = 1; t < trail.length; t++) ctx.lineTo(trail[t].x, trail[t].y);
        ctx.stroke();
      }
      if (trail.length > 0) trail.shift();
    }
    animRef.current = requestAnimationFrame(loop);
  }, [end]);

  const start = useCallback(() => {
    stop();
    resize();
    runningRef.current = true;
    scoreRef.current = 0;
    livesRef.current = 3;
    itemsRef.current = [];
    trailRef.current = [];
    setScore(0);
    setLives(3);
    setPhase('playing');
    loop();
  }, [stop, resize, loop]);

  useEffect(() => stop, [stop]);

  const checkSlice = (px: number, py: number) => {
    if (!runningRef.current) return;
    trailRef.current.push({ x: px, y: py });
    if (trailRef.current.length > 8) trailRef.current.shift();

    for (let i = itemsRef.current.length - 1; i >= 0; i--) {
      const item = itemsRef.current[i];
      if (item.sliced) continue;
      if (Math.hypot(px - item.x, py - item.y) < item.radius) {
        item.sliced = true;
        if (item.isBomb) {
          end();
          return;
        }
        scoreRef.current += 15;
        setScore(scoreRef.current);
        playSlashSound();
        itemsRef.current.splice(i, 1);
      }
    }
  };

  return (
    <div className="game-screen">
      <div className="game-hud">
        <div className="hud-chip">
          SKOR: <span>{score}</span>
        </div>
        <div className="hud-chip">NYAWA: {'❤️'.repeat(lives)}</div>
      </div>
      <canvas
        ref={canvasRef}
        className="game-canvas"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          checkSlice(e.clientX - rect.left, e.clientY - rect.top);
        }}
        onTouchMove={(e) => {
          if (e.touches.length > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            checkSlice(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
          }
        }}
      />

      {phase !== 'playing' && (
        <div className={phase === 'start' ? 'overlay-start' : 'overlay-gameover'}>
          {phase === 'start' ? (
            <>
              <h3 className="overlay-title">TEBAS TACO! 🌮</h3>
              <p className="overlay-desc">
                Geser/swipe mouse atau jari Anda seperti pedang katana untuk membelah Taco &amp; Chimichanga yang
                terlempar ke atas. HATI-HATI: Jangan tebas bom tengkorak!
              </p>
              <button className="comic-btn" onClick={start}>
                ASAH KATANA! ⚔️
              </button>
            </>
          ) : (
            <>
              <h3 className="overlay-title">LEDAKAN BOM! 💣</h3>
              <p className="overlay-desc">
                &quot;Tebasanmu meleset atau bomnya terlalu lezat untuk dilewatkan?&quot;
              </p>
              <p className="overlay-score">
                SKOR AKHIR: <span>{score}</span>
              </p>
              <button className="comic-btn" onClick={start}>
                TEBAS LAGI 🔄
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
