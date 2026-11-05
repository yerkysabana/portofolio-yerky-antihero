import { useState } from 'react';
import { profileData } from '../data/portfolioData';

/** Kontak: info markas + form transmisi (mailto). */
export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Pesan dari ${name || 'pengunjung'} — Portofolio Anti-Hero`;
    const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="kontak">
      <div className="section-header">
        <div className="comic-tag">BAB VI: HUBUNGI MARKAS</div>
        <h2 className="section-title">
          KIRIM PESAN RAHASIA <span>📬</span>
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
            &quot;PUNYA MISI ATAU PROYEK MENARIK? JANGAN SEGAN-SEGAN!&quot;
          </h3>
          <p style={{ color: '#ccc', marginBottom: 24 }}>
            Saya selalu terbuka untuk tawaran kolaborasi freelance, proyek skala penuh, atau sekadar berdiskusi
            seputar teknologi web dan resep taco terenak.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="fact-item">
              <span className="fact-icon">✉️</span>
              <div>
                <strong>Email:</strong> {profileData.email}
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-icon">📍</span>
              <div>
                <strong>Markas:</strong> {profileData.location}
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-icon">🌐</span>
              <div>
                <strong>Socials:</strong>{' '}
                <a href={profileData.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--color-yellow)' }}>
                  {profileData.github}
                </a>
              </div>
            </div>
            <div className="fact-item">
              <span className="fact-icon">⚡</span>
              <div>
                <strong>Status:</strong> {profileData.availability}
              </div>
            </div>
          </div>
        </div>

        <div className="comic-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">
                NAMA KODE PENGUNJUNG
              </label>
              <input
                id="contact-name"
                className="comic-input"
                type="text"
                placeholder="Masukkan nama atau julukanmu"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">
                ALAMAT TRANSMISI (EMAIL)
              </label>
              <input
                id="contact-email"
                className="comic-input"
                type="email"
                placeholder="nama@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                PESAN RAHASIA
              </label>
              <textarea
                id="contact-message"
                className="comic-textarea"
                placeholder="Tuliskan ide proyek atau pesan penting di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="comic-btn" style={{ marginTop: 8 }}>
              KIRIM TRANSMISI 🚀
            </button>
            {sent && (
              <div className="contact-success">
                💥 BOOM! Pesan Anda telah meluncur ke markas — aplikasi email Anda terbuka untuk konfirmasi.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
