import { useState } from 'react';
import { projectsData } from '../data/portfolioData';

/** Proyek pilihan: kartu bergaya stempel komik dengan detail expandable. */
export function ProjectsSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="proyek">
      <div className="section-header">
        <div className="comic-tag">BAB IV: MISI-MISI BERBAHAYA</div>
        <h2 className="section-title">
          PROYEK PILIHAN <span>🚀</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => {
          const open = openId === project.id;
          return (
            <div className="project-card" key={project.id}>
              <div className="project-thumb">
                <div className="slot-placeholder" style={{ border: '2px dashed #555' }}>
                  <span style={{ fontFamily: 'var(--font-comic)', color: '#fff', fontSize: '1.3rem' }}>
                    {project.categoryLabel.toUpperCase()}
                  </span>
                  <small style={{ color: '#888' }}>{project.badge}</small>
                </div>
                <div className="project-stamp">{project.stamp}</div>
              </div>
              <div className="project-body">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.summary}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="p-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {open && (
                  <div className="project-details">
                    <p style={{ color: '#bbb', fontSize: '0.9rem' }}>{project.description}</p>
                    <div className="project-metrics">
                      {project.metrics.map((m) => (
                        <div className="project-metric-row" key={m.label}>
                          <span className="m-label">{m.label}</span>
                          <span className="m-value">{m.value}</span>
                        </div>
                      ))}
                    </div>
                    <ul className="project-features">
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  className="comic-btn"
                  style={{ padding: '6px 16px', fontSize: '1.1rem', width: 'fit-content' }}
                  onClick={() => setOpenId(open ? null : project.id)}
                >
                  {open ? 'TUTUP DOKUMEN ➔' : 'PELAJARI KASUS ➔'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
