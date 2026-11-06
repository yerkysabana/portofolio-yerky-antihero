import { profileData } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageProvider'; // TAMBAHAN: i18n

/** Footer bergaya komik. */
export function Footer() {
  // TAMBAHAN: i18n
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-brand">
        {profileData.name.toUpperCase()} • <span>{t('footer.brand')}</span>
      </div>
      <p className="footer-note">{t('footer.note')}</p>
      <div className="footer-legal">{t('footer.legal').replace('{name}', profileData.name)}</div>
    </footer>
  );
}
