/**
 * TAMBAHAN: i18n — provider bahasa (Indonesia/Inggris).
 *
 * - Pilihan bahasa disimpan di localStorage (key: kp-lang) supaya tetap
 *   aktif saat pengunjung kembali.
 * - Kalau belum pernah memilih, bahasa mengikuti bahasa browser
 *   (navigator.language); default 'id'.
 * - Atribut lang di <html> ikut diperbarui (aksesibilitas & SEO).
 * - getLang()/loc() versi modul dipakai projectDetail.ts yang vanilla JS
 *   (bukan komponen React) — selalu sinkron dengan state provider.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { uiText, type Lang, type LocalizedText, type UiKey } from './translations';

const STORAGE_KEY = 'kp-lang';

function detectInitialLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'id' || stored === 'en') return stored;
  } catch {
    // localStorage tidak tersedia (private mode dsb.) — lanjut ke deteksi browser
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) return 'en';
  return 'id';
}

// Bahasa aktif versi modul — dibaca projectDetail.ts saat panel detail dibuat
let currentLang: Lang = detectInitialLang();

/** Bahasa aktif (dipakai modul non-React, mis. lib/projectDetail.ts). */
export function getLang(): Lang {
  return currentLang;
}

/** Ambil teks bilingual sesuai bahasa aktif (dipakai modul non-React). */
export function loc(text: LocalizedText): string {
  return text[currentLang];
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Teks UI dari kamus translations.ts. */
  t: (key: UiKey) => string;
  /** Teks data bilingual { id, en }. */
  loc: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    currentLang = detectInitialLang();
    return currentLang;
  });

  const setLang = useCallback((next: Lang) => {
    currentLang = next;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // abaikan kalau storage penuh/tidak tersedia
    }
    document.documentElement.lang = next;
  }, []);

  // pastikan atribut lang selalu sinkron (termasuk saat pertama mount)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === 'id' ? 'en' : 'id'),
      t: (key: UiKey) => uiText[key][lang],
      loc: (text: LocalizedText) => text[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Hook akses bahasa — hanya untuk komponen React di dalam provider. */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage harus dipakai di dalam <LanguageProvider>');
  return ctx;
}
