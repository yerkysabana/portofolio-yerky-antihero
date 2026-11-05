import { profileData } from '../data/portfolioData';

/** Footer bergaya komik. */
export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        {profileData.name.toUpperCase()} • <span>PORTOFOLIO ANTI-HERO</span>
      </div>
      <p className="footer-note">
        Dibangun dengan React + Vite + TypeScript. Didesain dengan cinta, sarkasme, dan secangkir kopi hitam.
      </p>
      <div className="footer-legal">
        © 2026 {profileData.name}. Tip: Coba tekan kode Konami (↑ ↑ ↓ ↓ ← → ← → B A) untuk mode kacau!
      </div>
    </footer>
  );
}
