import { aboutFacts, profileData, statsData } from '../data/portfolioData';

/** Tentang saya: foto, bio, fakta, dan kartu statistik. */
export function AboutSection() {
  return (
    <section id="tentang">
      <div className="section-header">
        <div className="comic-tag">BAB II: ASAL-USUL RAHASIA</div>
        <h2 className="section-title">
          TENTANG SAYA <span>💥</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-image-card">
          <img className="about-photo" src="/profile.jpg" alt={`Foto ${profileData.name}`} loading="lazy" />
        </div>

        <div className="comic-panel">
          <h3
            style={{
              fontFamily: 'var(--font-comic)',
              fontSize: '2.2rem',
              color: 'var(--color-yellow)',
              marginBottom: 12,
            }}
          >
            {profileData.aboutQuote}
          </h3>
          <p style={{ color: '#ddd', marginBottom: 18 }}>{profileData.bio}</p>
          <p style={{ color: '#ddd', marginBottom: 18 }}>{profileData.secondaryBio}</p>

          <div className="about-facts-list">
            {aboutFacts.map((fact) => (
              <div className="fact-item" key={fact.icon}>
                <span className="fact-icon">{fact.icon}</span>
                <div>{fact.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="comic-stat-grid">
        {statsData.map((stat) => (
          <div className={`comic-stat-card${stat.highlight ? ' highlight' : ''}`} key={stat.label}>
            <div className="comic-stat-label">{stat.label}</div>
            <div className="comic-stat-value">{stat.value}</div>
            <div className="comic-stat-sublabel">{stat.sublabel}</div>
            <div className="comic-stat-desc">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
