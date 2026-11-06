import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './i18n/LanguageProvider'; // TAMBAHAN: i18n — provider bahasa ID/EN
import './index.css';

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
