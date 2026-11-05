import { projectsData } from '../data/portfolioData';
// TAMBAHAN: detail proyek — buka halaman detail dari kartu
import { openProjectDetail } from '../lib/projectDetail';

/** Proyek pilihan: kartu bergaya stempel komik; tombol membuka halaman detail. */
export function ProjectsSection() {
  return (
    <section id="proyek">
      <div className="section-header">
        <div className="comic-tag">BAB IV: MISI-MISI BERBAHAYA</div>
        <h2 className="section-title">
          PROYEK PILIHAN <span>🚀</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          // TAMBAHAN: detail proyek — data-project-card dipakai animasi FLIP sebagai posisi asal
          <div className="project-card" key={project.id} data-project-card={project.id}>
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

                {/* TAMBAHAN: detail proyek — buka halaman detail (FLIP dari kartu ini) */}
                <button
                  className="comic-btn"
                  style={{ padding: '6px 16px', fontSize: '1.1rem', width: 'fit-content' }}
                  onClick={(event) => openProjectDetail(project.id, event.currentTarget)}
                >
                  PELAJARI KASUS ➔
                </button>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
