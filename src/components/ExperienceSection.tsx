import { experiencesData } from '../data/portfolioData';

/** Catatan misi: pengalaman kerja & pendidikan dalam panel komik. */
export function ExperienceSection() {
  return (
    <section id="misi">
      <div className="section-header">
        <div className="comic-tag">BAB V: CATATAN MISI</div>
        <h2 className="section-title">
          PENGALAMAN &amp; PENDIDIKAN <span>🗺️</span>
        </h2>
      </div>

      <div className="exp-list">
        {experiencesData.map((exp) => (
          <div className="exp-item" key={`${exp.company}-${exp.period}`}>
            <div>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-location">📍 {exp.location}</div>
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
