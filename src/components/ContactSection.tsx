import { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Kontak: info markas + form transmisi (mailto). */
export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  // TAMBAHAN: i18n
  const { t, loc } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TAMBAHAN: i18n — subjek & isi email ikut bahasa yang sedang aktif
    const subject = t('contact.mailSubject').replace('{name}', name || t('contact.mailVisitor'));
    const body = `${t('contact.mailName')}: ${name}\n${t('contact.mailEmail')}: ${email}\n\n${message}`;
    window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="kontak">
      <div className="section-header">
        <div className="comic-tag">{t('contact.tag')}</div>
        <h2 className="section-title">
          {t('contact.title')} <span>📬</span>
        </h2>
      </div>

      <div className="contact-grid">
        <div className="comic-panel">
          <h3
            style={{
              fontFamily: 'var(--font-comic)',
              fontSize: '2.2rem',
              color: 'var(--color-yellow)',
              marginBottom: 12,
            }}
          >
            {t('contact.quote')}
          </h3>
          <p style={{ color: '#ccc', marginBottom: 24 }}>{t('contact.intro')}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="fact-item">
              <span className="fact-icon">✉️</span>
              <div>
                <strong>{t('contact.emailLabel')}</strong> {profileData.email}
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-icon">📍</span>
              <div>
                <strong>{t('contact.baseLabel')}</strong> {loc(profileData.location)}
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-icon">🌐</span>
              <div>
                <strong>{t('contact.socialsLabel')}</strong>{' '}
                <a href={profileData.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--color-yellow)' }}>
                  {profileData.github}
                </a>
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-icon">⚡</span>
              <div>
                <strong>{t('contact.statusLabel')}</strong> {loc(profileData.availability)}
              </div>
            </div>
          </div>
        </div>

        <div className="comic-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">
                {t('contact.nameLabel')}
              </label>
              <input
                id="contact-name"
                className="comic-input"
                type="text"
                placeholder={t('contact.namePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">
                {t('contact.emailFormLabel')}
              </label>
              <input
                id="contact-email"
                className="comic-input"
                type="email"
                placeholder={t('contact.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="contact-message"
                className="comic-textarea"
                placeholder={t('contact.messagePlaceholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="comic-btn" style={{ marginTop: 8 }}>
              {t('contact.submit')}
            </button>
            {sent && <div className="contact-success">{t('contact.success')}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
