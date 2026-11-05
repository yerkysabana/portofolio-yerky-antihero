import { tickerSkills } from '../data/portfolioData';

/** Marquee teks komik berjalan (duplikasi konten untuk loop mulus). */
export function MarqueeTicker() {
  const line = `${tickerSkills.join(' • ')} • `;
  return (
    <div className="comic-marquee-container">
      <div className="comic-marquee-content">
        {line}
        {line}
      </div>
    </div>
  );
}
