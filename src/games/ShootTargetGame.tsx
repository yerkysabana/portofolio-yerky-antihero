import { useCallback, useEffect, useRef, useState } from 'react';
import { playBoomSound, playScoreSound } from '../hooks/useSoundFx';

interface Target {
  x: number;
  y: number;
  r: number;
  life: number;
  isBonus: boolean;
}

/** Game 1: Tembak Target — klik topeng/target sebelum waktu habis. */
export function ShootTargetGame({ onScore }: { onScore: (score: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [phase, setPhase] = useState<'start' | 'playing' | 'over'>('start');

  const targetsRef = useRef<Target[]>([]);
  const runningRef = useRef(false);
  const animRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scoreRef = useRef(0);
  const timeRef = useRef(30);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  const stop = useCallback(() => {
    runningRef.current = false;
    if (timerRef.current) clearInterval(timerRef.current);
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

      if (Math.random() < 0.04 && targetsRef.current.length < 5) {
        targetsRef.current.push({
          x: Math.random() * (canvas.width - 80) + 40,
          y: Math.random() * (canvas.height - 120) + 60,
          r: 32,
          life: 120,
          isBonus: Math.random() < 0.25,
        });
      }

      for (let i = targetsRef.current.length - 1; i >= 0; i--) {
        const t = targetsRef.current[i];
        t.life -= 1;

        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.beginPath();
        ctx.arc(0, 0, t.r, 0, Math.PI * 2);
        ctx.fillStyle = t.isBonus ? '#FFCC00' : '#C8102E';
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#000';
        ctx.stroke();

        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(-10, -4, 6, 0, Math.PI * 2);
        ctx.arc(10, -4, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (t.life <= 0) targetsRef.current.splice(i, 1);
      }
    }
    animRef.current = requestAnimationFrame(loop);
  }, []);

  const start = useCallback(() => {
    stop();
    resize();
    runningRef.current = true;
    scoreRef.current = 0;
    timeRef.current = 30;
    targetsRef.current = [];
    setScore(0);
    setTimeLeft(30);
    setPhase('playing');

    timerRef.current = setInterval(() => {
      timeRef.current -= 1;
      setTimeLeft(timeRef.current);
      if (timeRef.current <= 0) end();
    }, 1000);

    loop();
  }, [stop, resize, end, loop]);

  useEffect(() => stop, [stop]);

  const handleHit = (clientX: number, clientY: number) => {
    if (!runningRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    for (let i = targetsRef.current.length - 1; i >= 0; i--) {
      const t = targetsRef.current[i];
      if (Math.hypot(clickX - t.x, clickY - t.y) <= t.r) {
        scoreRef.current += t.isBonus ? 25 : 10;
        setScore(scoreRef.current);
        playScoreSound();
        targetsRef.current.splice(i, 1);
        break;
      }
    }
  };

  return (
    <div className="game-screen">
      <div className="game-hud">
        <div className="hud-chip">
          SKOR: <span>{score}</span>
        </div>
        <div className="hud-chip">
          WAKTU: <span>{timeLeft}</span>s
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="game-canvas"
        onMouseDown={(e) => handleHit(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          if (e.touches.length > 0) handleHit(e.touches[0].clientX, e.touches[0].clientY);
        }}
      />

      {phase !== 'playing' && (
        <div className={phase === 'start' ? 'overlay-start' : 'overlay-gameover'}>
          {phase === 'start' ? (
            <>
              <h3 className="overlay-title">TEMBAK TARGET!</h3>
              <p className="overlay-desc">
                Topeng dan target bermunculan secara acak. Klik atau tap target secepat mungkin sebelum waktu 30
                detik habis!
              </p>
              <button className="comic-btn" onClick={start}>
                MULAI TEMBAK! 🎯
              </button>
            </>
          ) : (
            <>
              <h3 className="overlay-title">WAKTU HABIS!</h3>
              <p className="overlay-desc">&quot;Refleksmu lumayan... untuk ukuran orang yang belum ngopi.&quot;</p>
              <p className="overlay-score">
                SKOR AKHIR: <span>{score}</span>
              </p>
              <button className="comic-btn" onClick={start}>
                MAIN LAGI 🔄
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
