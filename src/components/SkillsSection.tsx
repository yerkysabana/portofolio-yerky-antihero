import { useEffect, useRef } from 'react';
import { skillsData } from '../data/portfolioData';

/** Skill arsenal dengan bullet-meter yang terisi saat terlihat. */
export function SkillsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.width = target.dataset.progress ?? '0%';
          }
        });
      },
      { threshold: 0.25 },
    );

    grid.querySelectorAll<HTMLElement>('.bullet-fill').forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skill">
      <div className="section-header">
        <div className="comic-tag">BAB III: ARSENAL TEMPUR</div>
        <h2 className="section-title">
          KEAHLIAN &amp; SKILL <span>⚔️</span>
        </h2>
      </div>

      <div className="skills-grid" ref={gridRef}>
        {skillsData.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="bullet-meter">
              <div className="bullet-fill" data-progress={`${skill.percent}%`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
