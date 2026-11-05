import { useState } from 'react';
import { CatchFoodGame } from '../games/CatchFoodGame';
import { ShootTargetGame } from '../games/ShootTargetGame';
import { TacoSlashGame } from '../games/TacoSlashGame';

const GAME_TABS = [
  { id: 1, label: '1. TEMBAK TARGET' },
  { id: 2, label: '2. TEBAS TACO (KATANA)' },
  { id: 3, label: '3. TANGKAP CHIMICHANGA' },
];

/** Arcade zone dengan 3 mini game dan high score global. */
export function ArcadeSection() {
  const [activeGame, setActiveGame] = useState(1);
  const [highScore, setHighScore] = useState(0);

  const handleScore = (score: number) => {
    setHighScore((current) => (score > current ? score : current));
  };

  return (
    <section id="arcade">
      <div className="section-header">
        <div className="comic-tag">BAB V: ZONA RELAKSASI ANTI-HERO</div>
        <h2 className="section-title">
          MINI GAME ZONE <span>🎯</span>
        </h2>
      </div>

      <div className="arcade-wrapper">
        <div className="arcade-header">
          <div className="game-tabs">
            {GAME_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn${activeGame === tab.id ? ' active' : ''}`}
                onClick={() => setActiveGame(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="arcade-highscore">
            🏆 HIGH SCORE: <span>{highScore}</span>
          </div>
        </div>

        <div className="arcade-viewport">
          {activeGame === 1 && <ShootTargetGame onScore={handleScore} />}
          {activeGame === 2 && <TacoSlashGame onScore={handleScore} />}
          {activeGame === 3 && <CatchFoodGame onScore={handleScore} />}
        </div>
      </div>
    </section>
  );
}
