import { useState } from 'react';
import { CatchFoodGame } from '../games/CatchFoodGame';
import { ShootTargetGame } from '../games/ShootTargetGame';
import { TacoSlashGame } from '../games/TacoSlashGame';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Arcade zone dengan 3 mini game dan high score global. */
export function ArcadeSection() {
  const [activeGame, setActiveGame] = useState(1);
  const [highScore, setHighScore] = useState(0);
  // TAMBAHAN: i18n — label tab game mengikuti bahasa aktif
  const { t } = useLanguage();

  const gameTabs = [
    { id: 1, label: t('arcade.tab1') },
    { id: 2, label: t('arcade.tab2') },
    { id: 3, label: t('arcade.tab3') },
  ];

  const handleScore = (score: number) => {
    setHighScore((current) => (score > current ? score : current));
  };

  return (
    <section id="arcade">
      <div className="section-header">
        <div className="comic-tag">{t('arcade.tag')}</div>
        <h2 className="section-title">
          {t('arcade.title')} <span>🎯</span>
        </h2>
      </div>

      <div className="arcade-wrapper">
        <div className="arcade-header">
          <div className="game-tabs">
            {gameTabs.map((tab) => (
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
            {t('arcade.highScore')} <span>{highScore}</span>
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
