import { experiencesData } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Catatan misi: pengalaman kerja & pendidikan dalam panel komik. */
export function ExperienceSection() {
  // TAMBAHAN: i18n
  const { t, loc } = useLanguage();

  return (
    <section id="misi">
      <div className="section-header">
        <div className="comic-tag">{t('exp.tag')}</div>
        <h2 className="section-title">
          {t('exp.title')} <span>🗺️</span>
        </h2>
      </div>

      <div className="exp-list">
        {experiencesData.map((exp) => (
          <div className="exp-item" key={`${exp.company}-${exp.period.id}`}>
            <div>
              <div className="exp-period">{loc(exp.period)}</div>
              <div className="exp-location">📍 {loc(exp.location)}</div>
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{loc(exp.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
