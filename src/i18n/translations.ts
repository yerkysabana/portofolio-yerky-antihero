/**
 * TAMBAHAN: i18n — kamus teks antarmuka 2 bahasa (Indonesia & Inggris).
 *
 * Cara pakai:
 *   import { useLanguage } from '../i18n/LanguageProvider';
 *   const { t, loc, lang, toggleLang } = useLanguage();
 *   t('nav.hero')            -> teks UI sesuai bahasa aktif
 *   loc(project.title)       -> teks data bilingual { id, en }
 *
 * Data portofolio (judul, deskripsi, fitur) TIDAK ada di file ini —
 * teks tersebut bilingual langsung di src/data/portfolioData.ts.
 *
 * CATATAN: teks yang dirender lewat JSX ({t('...')}) memakai karakter asli
 * (", &, ') — entity HTML hanya untuk teks yang disisipkan via innerHTML
 * (kunci 'detail.*' di lib/projectDetail.ts).
 */

export type Lang = 'id' | 'en';

/** Teks yang punya versi Indonesia & Inggris. */
export type LocalizedText = { id: string; en: string };

export const LANG_LABEL: Record<Lang, string> = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

/** Kamus teks UI (bukan data portofolio). */
export const uiText = {
  // ---------- NAVBAR ----------
  'nav.hero': { id: 'BERANDA', en: 'HOME' },
  'nav.tentang': { id: 'TENTANG', en: 'ABOUT' },
  'nav.skill': { id: 'SKILL', en: 'SKILLS' },
  'nav.proyek': { id: 'PROYEK', en: 'PROJECTS' },
  'nav.misi': { id: 'MISI', en: 'MISSIONS' },
  'nav.arcade': { id: 'MINI GAME', en: 'MINI GAMES' },
  'nav.kontak': { id: 'KONTAK', en: 'CONTACT' },
  'nav.logoTitle': { id: 'Klik aku beberapa kali...', en: 'Click me a few times...' },
  'nav.sfx': { id: 'SFX', en: 'SFX' },
  'nav.sfxTitle': { id: 'Nyalakan/Matikan Sound FX', en: 'Toggle Sound FX' },
  'nav.cursor': { id: 'KURSOR', en: 'CURSOR' },
  'nav.cursorTitle': { id: 'Nyalakan/Matikan Kursor Custom', en: 'Toggle Custom Cursor' },
  'nav.menu': { id: 'Menu', en: 'Menu' },
  'nav.langTitle': { id: 'Ganti bahasa', en: 'Switch language' },

  // ---------- HERO ----------
  'hero.edition': { id: '★ EDISI SPESIAL #01: MASUK KE SEMESTA SAYA', en: '★ SPECIAL EDITION #01: ENTER MY UNIVERSE' },
  'hero.ctaWork': { id: '⚡ LIHAT KARYA GILA SAYA', en: '⚡ SEE MY CRAZY WORK' },
  'hero.ctaGame': { id: '🎮 COBA MINI GAME', en: '🎮 TRY THE MINI GAMES' },
  'hero.maskCaption': { id: '👀 "SAYA MEMANTAU GERAKAN KURSORMU!"', en: '👀 "I\'M WATCHING YOUR CURSOR MOVE!"' },

  // ---------- TENTANG ----------
  'about.tag': { id: 'BAB II: ASAL-USUL RAHASIA', en: 'CHAPTER II: SECRET ORIGIN' },
  'about.title': { id: 'TENTANG SAYA', en: 'ABOUT ME' },

  // ---------- SKILL ----------
  'skills.tag': { id: 'BAB III: ARSENAL TEMPUR', en: 'CHAPTER III: BATTLE ARSENAL' },
  'skills.title': { id: 'KEAHLIAN & SKILL', en: 'EXPERTISE & SKILLS' },

  // ---------- PROYEK ----------
  'projects.tag': { id: 'BAB IV: MISI-MISI BERBAHAYA', en: 'CHAPTER IV: DANGEROUS MISSIONS' },
  'projects.title': { id: 'PROYEK PILIHAN', en: 'SELECTED PROJECTS' },
  'projects.cta': { id: 'PELAJARI KASUS ➔', en: 'EXPLORE THE CASE ➔' },

  // ---------- PENGALAMAN ----------
  'exp.tag': { id: 'BAB V: CATATAN MISI', en: 'CHAPTER V: MISSION LOG' },
  'exp.title': { id: 'PENGALAMAN & PENDIDIKAN', en: 'EXPERIENCE & EDUCATION' },

  // ---------- ARCADE ----------
  'arcade.tag': { id: 'BAB V: ZONA RELAKSASI ANTI-HERO', en: 'CHAPTER V: ANTI-HERO RELAX ZONE' },
  'arcade.title': { id: 'MINI GAME ZONE', en: 'MINI GAME ZONE' },
  'arcade.highScore': { id: '🏆 HIGH SCORE:', en: '🏆 HIGH SCORE:' },
  'arcade.tab1': { id: '1. TEMBAK TARGET', en: '1. SHOOT THE TARGET' },
  'arcade.tab2': { id: '2. TEBAS TACO (KATANA)', en: '2. SLICE THE TACO (KATANA)' },
  'arcade.tab3': { id: '3. TANGKAP CHIMICHANGA', en: '3. CATCH THE CHIMICHANGA' },

  // ---------- KONTAK ----------
  'contact.tag': { id: 'BAB VI: HUBUNGI MARKAS', en: 'CHAPTER VI: CONTACT HQ' },
  'contact.title': { id: 'KIRIM PESAN RAHASIA', en: 'SEND A SECRET MESSAGE' },
  'contact.quote': {
    id: '"PUNYA MISI ATAU PROYEK MENARIK? JANGAN SEGAN-SEGAN!"',
    en: '"GOT AN INTERESTING MISSION OR PROJECT? DON\'T BE SHY!"',
  },
  'contact.intro': {
    id: 'Saya selalu terbuka untuk tawaran kolaborasi freelance, proyek skala penuh, atau sekadar berdiskusi seputar teknologi web dan resep taco terenak.',
    en: "I'm always open to freelance collaborations, full-scale projects, or just a chat about web technology and the tastiest taco recipes.",
  },
  'contact.emailLabel': { id: 'Email:', en: 'Email:' },
  'contact.baseLabel': { id: 'Markas:', en: 'Base:' },
  'contact.socialsLabel': { id: 'Socials:', en: 'Socials:' },
  'contact.statusLabel': { id: 'Status:', en: 'Status:' },
  'contact.nameLabel': { id: 'NAMA KODE PENGUNJUNG', en: 'VISITOR CODE NAME' },
  'contact.namePlaceholder': { id: 'Masukkan nama atau julukanmu', en: 'Enter your name or alias' },
  'contact.emailFormLabel': { id: 'ALAMAT TRANSMISI (EMAIL)', en: 'TRANSMISSION ADDRESS (EMAIL)' },
  'contact.emailPlaceholder': { id: 'nama@domain.com', en: 'name@domain.com' },
  'contact.messageLabel': { id: 'PESAN RAHASIA', en: 'SECRET MESSAGE' },
  'contact.messagePlaceholder': {
    id: 'Tuliskan ide proyek atau pesan penting di sini...',
    en: 'Write your project idea or important message here...',
  },
  'contact.submit': { id: 'KIRIM TRANSMISI 🚀', en: 'SEND TRANSMISSION 🚀' },
  'contact.success': {
    id: '💥 BOOM! Pesan Anda telah meluncur ke markas — aplikasi email Anda terbuka untuk konfirmasi.',
    en: '💥 BOOM! Your message has launched to HQ — your email app opens for confirmation.',
  },
  'contact.mailSubject': { id: 'Pesan dari {name} — Portofolio Anti-Hero', en: 'Message from {name} — Anti-Hero Portfolio' },
  'contact.mailVisitor': { id: 'pengunjung', en: 'visitor' },
  'contact.mailName': { id: 'Nama', en: 'Name' },
  'contact.mailEmail': { id: 'Email', en: 'Email' },

  // ---------- FOOTER ----------
  'footer.brand': { id: 'PORTOFOLIO ANTI-HERO', en: 'ANTI-HERO PORTFOLIO' },
  'footer.note': {
    id: 'Dibangun dengan React + Vite + TypeScript. Didesain dengan cinta, sarkasme, dan secangkir kopi hitam.',
    en: 'Built with React + Vite + TypeScript. Designed with love, sarcasm, and a cup of black coffee.',
  },
  'footer.legal': {
    id: '© 2026 {name}. Tip: Coba tekan kode Konami (↑ ↑ ↓ ↓ ← → ← → B A) untuk mode kacau!',
    en: '© 2026 {name}. Tip: Try the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) for chaos mode!',
  },

  // ---------- LOADING ----------
  'loading.text': { id: 'MEMUAT PORTFOLIO...', en: 'LOADING PORTFOLIO...' },
  'loading.subtext': { id: '"Tenang, santai saja. Saya bukan virus trojan."', en: '"Relax, take it easy. I\'m not a trojan virus."' },

  // ---------- SCROLL TO TOP ----------
  'scrollTop.title': { id: 'Meluncur ke Atas!', en: 'Blast Off to the Top!' },

  // ---------- LAYAR RETAK ----------
  'cracked.text': {
    id: '💥 LAYAR RETAK! "SIAPA SURUH KLIK LOGO TERUS-TERUSAN?!"',
    en: '💥 SCREEN CRACKED! "WHO TOLD YOU TO KEEP CLICKING THE LOGO?!"',
  },

  // ---------- FOURTH WALL ----------
  'fourthWall.title': { id: 'Klik aku untuk komentar lain!', en: 'Click me for another comment!' },

  // ---------- KONAMI TOAST ----------
  'konami.title': { id: '💥 KONAMI CODE TERDETEKSI!', en: '💥 KONAMI CODE DETECTED!' },
  'konami.sub': { id: 'SELAMAT DATANG DI SEMESTA TERBALIK!', en: 'WELCOME TO THE UPSIDE-DOWN UNIVERSE!' },

  // ---------- GAME: UMUM ----------
  'game.score': { id: 'SKOR:', en: 'SCORE:' },
  'game.time': { id: 'WAKTU:', en: 'TIME:' },
  'game.lives': { id: 'NYAWA:', en: 'LIVES:' },
  'game.finalScore': { id: 'SKOR AKHIR:', en: 'FINAL SCORE:' },

  // ---------- GAME 1: TEMBAK TARGET ----------
  'shoot.title': { id: 'TEMBAK TARGET!', en: 'SHOOT THE TARGET!' },
  'shoot.desc': {
    id: 'Topeng dan target bermunculan secara acak. Klik atau tap target secepat mungkin sebelum waktu 30 detik habis!',
    en: 'Masks and targets pop up at random. Click or tap the targets as fast as you can before the 30 seconds run out!',
  },
  'shoot.start': { id: 'MULAI TEMBAK! 🎯', en: 'START SHOOTING! 🎯' },
  'shoot.over': { id: 'WAKTU HABIS!', en: "TIME'S UP!" },
  'shoot.overDesc': {
    id: '"Refleksmu lumayan... untuk ukuran orang yang belum ngopi."',
    en: '"Your reflexes aren\'t bad... for someone who hasn\'t had coffee yet."',
  },
  'shoot.again': { id: 'MAIN LAGI 🔄', en: 'PLAY AGAIN 🔄' },

  // ---------- GAME 2: TEBAS TACO ----------
  'taco.title': { id: 'TEBAS TACO! 🌮', en: 'SLICE THE TACO! 🌮' },
  'taco.desc': {
    id: 'Geser/swipe mouse atau jari Anda seperti pedang katana untuk membelah Taco & Chimichanga yang terlempar ke atas. HATI-HATI: Jangan tebas bom tengkorak!',
    en: "Swipe your mouse or finger like a katana blade to slice the Tacos & Chimichangas tossed into the air. CAREFUL: Don't slash the skull bomb!",
  },
  'taco.start': { id: 'ASAH KATANA! ⚔️', en: 'SHARPEN YOUR KATANA! ⚔️' },
  'taco.over': { id: 'LEDAKAN BOM! 💣', en: 'BOMB BLAST! 💣' },
  'taco.overDesc': {
    id: '"Tebasanmu melesat atau bomnya terlalu lezat untuk dilewatkan?"',
    en: '"Did your slash miss, or was the bomb just too tasty to pass up?"',
  },
  'taco.again': { id: 'TEBAS LAGI 🔄', en: 'SLICE AGAIN 🔄' },

  // ---------- GAME 3: TANGKAP CHIMICHANGA ----------
  'catch.title': { id: 'TANGKAP CHIMICHANGA! 🌯', en: 'CATCH THE CHIMICHANGA! 🌯' },
  'catch.desc': {
    id: 'Gerakkan keranjang/karakter di bawah menggunakan geseran mouse, jari, atau tombol Panah Kiri/Kanan. Tangkap semua makanan lezat, hindari dinamit & granat!',
    en: 'Move the basket/character at the bottom with your mouse, finger, or the Left/Right Arrow keys. Catch all the tasty food, dodge the dynamite & grenades!',
  },
  'catch.start': { id: 'TANGKAP SEKARANG! 🌯', en: 'CATCH NOW! 🌯' },
  'catch.over': { id: 'CHIMICHANGA LENYAP!', en: 'CHIMICHANGA GONE!' },
  'catch.overDesc': {
    id: '"Dapur kita kehabisan stok... perut pahlawan mulai keroncongan."',
    en: '"Our kitchen is out of stock... a hero\'s stomach is starting to rumble."',
  },
  'catch.again': { id: 'COBA LAGI 🔄', en: 'TRY AGAIN 🔄' },

  // ---------- DETAIL PROYEK (panel vanilla JS — teks masuk innerHTML, entity HTML aman) ----------
  'detail.back': { id: '← KEMBALI', en: '← BACK' },
  'detail.blockBackground': { id: '📖 LATAR BELAKANG', en: '📖 BACKGROUND' },
  'detail.blockProblem': { id: '💥 MASALAH', en: '💥 PROBLEM' },
  'detail.blockSolution': { id: '⚔️ SOLUSI', en: '⚔️ SOLUTION' },
  'detail.blockResult': { id: '🏆 HASIL', en: '🏆 RESULT' },
  'detail.next': { id: 'PROYEK BERIKUTNYA', en: 'NEXT PROJECT' },
  'detail.visit': { id: '🚀 KUNJUNGI PROYEK', en: '🚀 VISIT PROJECT' },
  'detail.code': { id: '💻 LIHAT KODE', en: '💻 VIEW CODE' },
  'detail.close': { id: '✕ TUTUP', en: '✕ CLOSE' },
  'detail.slide': { id: 'Gambar {n}', en: 'Slide {n}' },
  'detail.linkHint': { id: 'GANTI: isi link proyek di portfolioData.ts', en: 'TODO: fill in the project link in portfolioData.ts' },
} satisfies Record<string, LocalizedText>;

export type UiKey = keyof typeof uiText;

/** Ambil teks UI untuk bahasa tertentu (dipakai modul non-React, mis. lib/projectDetail.ts). */
export function getUiText(key: UiKey, lang: Lang): string {
  return uiText[key][lang];
}
