import { useCallback, useEffect, useRef, useState } from 'react';
import { playBoomSound, playScoreSound } from '../hooks/useSoundFx';

interface FallingObject {
  x: number;
  y: number;
  speed: number;
  isHazard: boolean;
  emoji: string;
}

const PLAYER_WIDTH = 85;

/** Game 3: Tangkap Chimichanga — gerakkan catcher, tangkap makanan, hindari granat. */
export function CatchFoodGame({ onScore }: { onScore: (score: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [phase, setPhase] = useState<'start' | 'playing' | 'over'>('start');

  const objectsRef = useRef<FallingObject[]>([]);
  const playerXRef = useRef(200);
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
    playerXRef.current = canvas.width / 2 - PLAYER_WIDTH / 2;
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

      if (Math.random() < 0.04) {
        const isHazard = Math.random() < 0.28;
        objectsRef.current.push({
          x: Math.random() * (canvas.width - 50) + 25,
          y: -20,
          speed: Math.random() * 2.5 + 3.2,
          isHazard,
          emoji: isHazard ? '🧨' : Math.random() < 0.5 ? '🌯' : '🌮',
        });
      }

      const playerY = canvas.height - 42;
      ctx.save();
      ctx.fillStyle = '#C8102E';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(playerXRef.current, playerY, PLAYER_WIDTH, 26, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFCC00';
      ctx.font = "bold 13px 'Bangers', cursive";
      ctx.textAlign = 'center';
      ctx.fillText('CHIMI CATCHER', playerXRef.current + PLAYER_WIDTH / 2, playerY + 18);
      ctx.restore();

      for (let i = objectsRef.current.length - 1; i >= 0; i--) {
        const obj = objectsRef.current[i];
        obj.y += obj.speed;

        ctx.font = '28px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(obj.emoji, obj.x, obj.y);

        if (obj.y >= playerY - 10 && obj.y <= playerY + 25) {
          if (obj.x >= playerXRef.current - 15 && obj.x <= playerXRef.current + PLAYER_WIDTH + 15) {
            if (obj.isHazard) {
              livesRef.current -= 1;
              setLives(Math.max(0, livesRef.current));
              playBoomSound();
              if (livesRef.current <= 0) {
                end();
                return;
              }
            } else {
              scoreRef.current += 10;
              setScore(scoreRef.current);
              playScoreSound();
            }
            objectsRef.current.splice(i, 1);
            continue;
          }
        }

        if (obj.y > canvas.height + 30) {
          if (!obj.isHazard) {
            livesRef.current -= 1;
            setLives(Math.max(0, livesRef.current));
            if (livesRef.current <= 0) {
              end();
              return;
            }
          }
          objectsRef.current.splice(i, 1);
        }
      }
    }
    animRef.current = requestAnimationFrame(loop);
  }, [end]);

  const start = useCallback(() => {
    stop();
    resize();
    runningRef.current = true;
    scoreRef.current = 0;
    livesRef.current = 3;
    objectsRef.current = [];
    setScore(0);
    setLives(3);
    setPhase('playing');
    loop();
  }, [stop, resize, loop]);

  useEffect(() => stop, [stop]);

  // Kontrol keyboard: panah kiri/kanan
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!runningRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      if (e.key === 'ArrowLeft') {
        playerXRef.current = Math.max(0, playerXRef.current - 25);
      } else if (e.key === 'ArrowRight') {
        playerXRef.current = Math.min(canvas.width - PLAYER_WIDTH, playerXRef.current + 25);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const updateCatcher = (clientX: number) => {
    if (!runningRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    playerXRef.current = Math.max(0, Math.min(canvas.width - PLAYER_WIDTH, relativeX - PLAYER_WIDTH / 2));
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
        onMouseMove={(e) => updateCatcher(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches.length > 0) updateCatcher(e.touches[0].clientX);
        }}
      />

      {phase !== 'playing' && (
        <div className={phase === 'start' ? 'overlay-start' : 'overlay-gameover'}>
          {phase === 'start' ? (
            <>
              <h3 className="overlay-title">TANGKAP CHIMICHANGA! 🌯</h3>
              <p className="overlay-desc">
                Gerakkan keranjang/karakter di bawah menggunakan geseran mouse, jari, atau tombol Panah Kiri/Kanan.
                Tangkap semua makanan lezat, hindari dinamit &amp; granat!
              </p>
              <button className="comic-btn" onClick={start}>
                TANGKAP SEKARANG! 🌯
              </button>
            </>
          ) : (
            <>
              <h3 className="overlay-title">CHIMICHANGA LENYAP!</h3>
              <p className="overlay-desc">
                &quot;Dapur kita kehabisan stok... perut pahlawan mulai keroncongan.&quot;
              </p>
              <p className="overlay-score">
                SKOR AKHIR: <span>{score}</span>
              </p>
              <button className="comic-btn" onClick={start}>
                COBA LAGI 🔄
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
