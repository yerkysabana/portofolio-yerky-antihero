/**
 * Konten portofolio Yerky Syabana untuk tema Anti-Hero Comic.
 * Sumber data: portofolio existing (D:\Magang\Portofolio_Yerky).
 *
 * TAMBAHAN: i18n — teks yang tampil ke pengunjung berbentuk bilingual
 * { id: '...', en: '...' } (tipe LocalizedText). Komponen membacanya lewat
 * loc(...) dari useLanguage(). Teks yang sama di kedua bahasa (nama, email,
 * nama teknologi, tag) dibiarkan sebagai string biasa.
 */

import type { LocalizedText } from '../i18n/translations';

export interface Skill {
  name: string;
  percent: number;
}

export interface ProjectItem {
  id: string;
  title: LocalizedText;
  categoryLabel: string;
  badge: string;
  stamp: string;
  summary: LocalizedText;
  description: LocalizedText;
  tags: string[];
  metrics: { label: LocalizedText; value: string }[];
  features: LocalizedText[];
}

export interface ExperienceItem {
  period: LocalizedText;
  location: LocalizedText;
  role: string;
  company: string;
  description: LocalizedText;
}

export interface StatCard {
  label: LocalizedText;
  value: string;
  sublabel: LocalizedText;
  description: LocalizedText;
  highlight?: boolean;
}

export const profileData = {
  name: 'Yerky Syabana',
  brandFirst: 'YERKY',
  brandLast: 'SYABANA',
  role: 'Frontend Developer & Informatics Engineer',
  heroGreeting: { id: 'HALO, SAYA', en: "HELLO, I'M" },
  heroName: 'YERKY SYABANA!',
  speech: {
    id: '"Bisa dibilang saya pahlawan digital... ya setidaknya sampai deadline-nya cair. Mari bikin sesuatu yang bikin orang melongo!"',
    en: '"Call me a digital hero... at least until the deadline melts away. Let\'s build something that leaves people stunned!"',
  },
  heroDesc: {
    id: 'Saya seorang Frontend Developer & Informatics Engineer yang memadukan kode bersih dengan visual liar tanpa kompromi. Suka tantangan, kopi hitam, dan tentu saja... chimichangas!',
    en: "I'm a Frontend Developer & Informatics Engineer who pairs clean code with wild visuals, no compromises. I love a good challenge, black coffee, and of course... chimichangas!",
  },
  aboutQuote: {
    id: '"SAYA TIDAK SELALU MENULIS BUG, TAPI SAAT SAYA LAKUKAN, IT\'S A FEATURE."',
    en: '"I DON\'T ALWAYS WRITE BUGS, BUT WHEN I DO, IT\'S A FEATURE."',
  },
  bio: {
    id: 'Mahasiswa S1 Teknik Informatika UKSW yang berfokus pada Frontend Engineering & antarmuka responsif. Berpengalaman membangun UI modern dengan React, Next.js, dan arsitektur mobile terintegrasi REST API dengan performa tinggi.',
    en: 'An undergraduate Informatics Engineering student at UKSW focused on Frontend Engineering and responsive interfaces. Experienced in building modern UI with React, Next.js, and mobile architecture integrated with REST APIs for high performance.',
  },
  secondaryBio: {
    id: 'Berpengalaman menangani implementasi frontend proyek riil mulai dari platform enterprise Trafix, ekosistem absensi digital YukAbsen, hingga portal Mobile Parking. Terbiasa memadukan antarmuka yang bersih dengan keandalan integrasi backend secara sistematis.',
    en: 'Experienced in delivering frontend implementations for real projects, from the Trafix enterprise platform and the YukAbsen digital attendance ecosystem to the Mobile Parking portal. Used to pairing clean interfaces with reliable backend integration, systematically.',
  },
  availability: { id: 'Tersedia untuk Peluang & Proyek', en: 'Available for Opportunities & Projects' },
  location: { id: 'Salatiga, Jawa Tengah (WIB)', en: 'Salatiga, Central Java (WIB)' },
  email: 'yerkysabana1994@gmail.com',
  github: 'github.com/yerkysabana',
  githubUrl: 'https://github.com/yerkysabana',
};

export const aboutFacts: { icon: string; text: LocalizedText }[] = [
  {
    icon: '🎓',
    text: {
      id: 'Pendidikan: S1 Teknik Informatika UKSW, Salatiga (IPK 3.52).',
      en: 'Education: B.Sc. Informatics Engineering, UKSW Salatiga (GPA 3.52).',
    },
  },
  {
    icon: '📍',
    text: {
      id: 'Markas: Salatiga, Jawa Tengah — bisa remote/hybrid.',
      en: 'Base: Salatiga, Central Java — remote/hybrid friendly.',
    },
  },
  {
    icon: '⚔️',
    text: {
      id: 'Senjata Utama: React, Next.js, TypeScript, Tailwind CSS, React Native & REST API.',
      en: 'Main Weapons: React, Next.js, TypeScript, Tailwind CSS, React Native & REST API.',
    },
  },
  {
    icon: '🎯',
    text: {
      id: 'Filosofi Kerja: Maximum Effort — UI rapi, cepat dimuat, integrasi backend yang andal.',
      en: 'Work Philosophy: Maximum Effort — tidy UI, fast loads, reliable backend integration.',
    },
  },
  { icon: '🍕', text: { id: 'Bahan Bakar: Kopi pekat, deadline yang mepet, dan chimichangas.', en: 'Fuel: Strong coffee, tight deadlines, and chimichangas.' } },
];

export const statsData: StatCard[] = [
  {
    label: { id: 'Akademik', en: 'Academic' },
    value: '3.52',
    sublabel: { id: 'IPK Teknik Informatika UKSW', en: 'Informatics Engineering GPA, UKSW' },
    description: {
      id: 'Komitmen kuat pada pemahaman konsep rekayasa perangkat lunak dan keunggulan akademis.',
      en: 'A strong commitment to understanding software engineering concepts and academic excellence.',
    },
  },
  {
    label: { id: 'Pengalaman Riil', en: 'Real Experience' },
    value: 'Intern',
    sublabel: { id: 'Frontend Dev di PT Kreasi X', en: 'Frontend Dev at PT Kreasi X' },
    description: {
      id: 'Terbiasa berkontribusi pada codebase proyek komersial dan kolaborasi tim pengembangan.',
      en: 'Comfortable contributing to commercial project codebases and collaborating with a development team.',
    },
    highlight: true,
  },
  {
    label: { id: 'Proyek Portofolio', en: 'Portfolio Projects' },
    value: '6+',
    sublabel: { id: 'Web & Mobile Aplikasi', en: 'Web & Mobile Apps' },
    description: {
      id: 'Dari platform monorepo enterprise, absensi geofencing, hingga website smart parking.',
      en: 'From enterprise monorepo platforms and geofencing attendance to a smart parking website.',
    },
  },
  {
    label: { id: 'Fokus Inti', en: 'Core Focus' },
    value: 'Clean & Fast',
    sublabel: { id: 'UI Slicing & API Integration', en: 'UI Slicing & API Integration' },
    description: {
      id: 'Mengutamakan antarmuka yang responsif, rapi, cepat dimuat, dan mudah dirawat.',
      en: 'Prioritizing interfaces that are responsive, tidy, fast to load, and easy to maintain.',
    },
  },
];

export const skillsData: Skill[] = [
  { name: 'REACT JS & NEXT.JS', percent: 95 },
  { name: 'TYPESCRIPT & JAVASCRIPT', percent: 92 },
  { name: 'TAILWIND CSS & UI SLICING', percent: 90 },
  { name: 'REST API INTEGRATION', percent: 90 },
  { name: 'REACT NATIVE & EXPO', percent: 85 },
  { name: 'TURBOREPO & MONOREPO', percent: 85 },
  { name: 'PHP & MYSQL', percent: 80 },
  { name: 'PYTHON & OPENCV', percent: 75 },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'fe-trafix',
    title: { id: 'Trafix — Monitoring & Operasional Enterprise', en: 'Trafix — Enterprise Monitoring & Operations' },
    categoryLabel: 'Enterprise Monorepo',
    badge: 'Turborepo Multi-App',
    stamp: 'MAXIMUM EFFORT',
    summary: {
      id: 'Monorepo antarmuka web enterprise untuk manajemen operasional, monitoring trafik, portal admin/teknisi, keuangan, hingga tampilan digital signage.',
      en: 'An enterprise web interface monorepo covering operations management, traffic monitoring, admin/technician portals, finance, and digital signage displays.',
    },
    description: {
      id: 'Arsitektur frontend modular berbasis Turborepo yang mencakup 4 sub-aplikasi mandiri: Admin Teknisi, Finance, Operator, dan Signage. Dioptimasi untuk pengelolaan tiket perbaikan perangkat, pelacakan status operasional real-time, dan pelaporan keuangan terpadu.',
      en: 'A modular frontend architecture built on Turborepo spanning 4 standalone sub-applications: Technician Admin, Finance, Operator, and Signage. Optimized for device repair ticket management, real-time operational status tracking, and unified financial reporting.',
    },
    tags: ['Turborepo', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: { id: 'Sub-aplikasi', en: 'Sub-applications' }, value: '4 Portal (Admin, Finance, Operator, Signage)' },
      { label: { id: 'Arsitektur', en: 'Architecture' }, value: 'Turborepo Monorepo' },
      { label: { id: 'Integrasi', en: 'Integration' }, value: 'REST API & Real-time' },
    ],
    features: [
      {
        id: 'Slicing UI kompleks untuk portal admin teknisi dan operator',
        en: 'Complex UI slicing for the technician and operator admin portals',
      },
      {
        id: 'Monitoring status perangkat operasional dan tiket keluhan secara real-time',
        en: 'Real-time monitoring of device status and complaint tickets',
      },
      { id: 'Dashboard laporan analitik dan audit transaksi finance', en: 'Analytics reporting and finance transaction audit dashboard' },
      {
        id: 'Display digital signage terpisah untuk kebutuhan informasi publik',
        en: 'A separate digital signage display for public information needs',
      },
    ],
  },
  {
    id: 'yukabsen',
    title: { id: 'YukAbsen — Absensi Digital & Geofencing', en: 'YukAbsen — Digital Attendance & Geofencing' },
    categoryLabel: 'Mobile App & Web Admin',
    badge: 'Expo + Next.js 16',
    stamp: 'APPROVED',
    summary: {
      id: 'Ekosistem absensi digital mobile berbasis Expo/React Native dengan geolokasi/peta dan dashboard monitoring admin Next.js 16.',
      en: 'A mobile digital attendance ecosystem built on Expo/React Native with geolocation/maps and a Next.js 16 admin monitoring dashboard.',
    },
    description: {
      id: 'Membangun aplikasi mobile absensi karyawan menggunakan Expo (React Native), NativeWind, TanStack Query, dan React Native Maps untuk validasi radius kehadiran (geofencing). Dilengkapi dashboard web admin interaktif Next.js 16, Leaflet, dan visualisasi Recharts.',
      en: 'Built an employee attendance mobile app with Expo (React Native), NativeWind, TanStack Query, and React Native Maps to validate attendance radius (geofencing). Completed with an interactive Next.js 16 admin web dashboard, Leaflet, and Recharts visualization.',
    },
    tags: ['React Native', 'Expo', 'Next.js 16', 'TanStack Query', 'Leaflet'],
    metrics: [
      { label: { id: 'Platform', en: 'Platform' }, value: 'Android & Web Admin' },
      { label: { id: 'Geofencing', en: 'Geofencing' }, value: 'Radius GPS Presisi' },
      { label: { id: 'State Management', en: 'State Management' }, value: 'Zustand & React Query' },
    ],
    features: [
      {
        id: 'Presensi berbasis radius lokasi (GPS/Maps) & verifikasi foto selfie',
        en: 'Location-radius attendance (GPS/Maps) with selfie photo verification',
      },
      {
        id: 'Dashboard web admin dengan visualisasi pemetaan interaktif Leaflet',
        en: 'Admin web dashboard with interactive Leaflet map visualization',
      },
      { id: 'Manajemen jadwal kerja, shift karyawan, dan riwayat absensi', en: 'Work schedule, employee shift, and attendance history management' },
      { id: 'Pengambilan data responsif dengan caching TanStack Query', en: 'Responsive data fetching with TanStack Query caching' },
    ],
  },
  {
    id: 'mobile-parking',
    title: { id: 'MobileParking — Parkir Cerdas & Otomasi', en: 'MobileParking — Smart Parking & Automation' },
    categoryLabel: 'Smart Mobility System',
    badge: 'Next.js 16 + Flutter',
    stamp: 'SHIPPED',
    summary: {
      id: 'Portal monitoring parkir cerdas berbasis Next.js 16 dan aplikasi mobile Flutter untuk tracking slot ketersediaan dan transaksi parkir.',
      en: 'A smart parking monitoring portal built on Next.js 16 plus a Flutter mobile app for tracking slot availability and parking transactions.',
    },
    description: {
      id: 'Mengembangkan website monitoring ketersediaan area parkir dan transaksi secara real-time menggunakan Next.js dan Tailwind CSS, terhubung dengan integrasi REST API backend serta aplikasi pendukung mobile.',
      en: 'Developed a real-time website for monitoring parking area availability and transactions using Next.js and Tailwind CSS, connected to a backend REST API integration along with a supporting mobile app.',
    },
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Recharts', 'Flutter'],
    metrics: [
      { label: { id: 'Monitoring Slot', en: 'Slot Monitoring' }, value: 'Real-time Status' },
      { label: { id: 'Tampilan', en: 'Display' }, value: 'Responsif Mobile & Web' },
      { label: { id: 'Visualisasi', en: 'Visualization' }, value: 'Recharts Analitik' },
    ],
    features: [
      { id: 'Pemantauan status kuota dan ketersediaan lot parkir secara live', en: 'Live monitoring of quota status and parking lot availability' },
      {
        id: 'Visualisasi grafik statistik pendapatan & volume kendaraan harian',
        en: 'Graph visualization of daily revenue and vehicle volume statistics',
      },
      { id: 'Integrasi REST API untuk pencatatan tiket dan durasi parkir', en: 'REST API integration for ticket recording and parking duration' },
      { id: 'Antarmuka ramah pengguna bagi operator lapangan dan pengendara', en: 'A user-friendly interface for field operators and drivers' },
    ],
  },
  {
    id: 'academic-projects',
    title: { id: 'Concert Ticket Booking & CV Color Detection', en: 'Concert Ticket Booking & CV Color Detection' },
    categoryLabel: 'Fullstack & Computer Vision',
    badge: 'Web & Python AI',
    stamp: 'BRUTAL CODE',
    summary: {
      id: 'Sistem reservasi tiket konser interaktif berbasis PHP/MySQL serta deteksi objek warna real-time via webcam dengan Python OpenCV.',
      en: 'An interactive concert ticket reservation system built on PHP/MySQL plus real-time color object detection through a webcam using Python OpenCV.',
    },
    description: {
      id: 'Proyek pengembangan sistem pemesanan tiket konser lengkap dengan otentikasi akun, manajemen kuota tiket, dan operasi CRUD menggunakan PHP dan MySQL, didukung riset terapan pengolahan citra digital untuk deteksi warna berbasis HSV menggunakan Python dan OpenCV.',
      en: 'A project developing a complete concert ticket booking system with account authentication, ticket quota management, and CRUD operations using PHP and MySQL, supported by applied digital image processing research for HSV-based color detection using Python and OpenCV.',
    },
    tags: ['PHP', 'MySQL', 'Python', 'OpenCV', 'JavaScript'],
    metrics: [
      { label: { id: 'Teknologi', en: 'Technology' }, value: 'Fullstack Web + AI' },
      { label: { id: 'Otentikasi', en: 'Authentication' }, value: 'Role-based Access' },
      { label: { id: 'Computer Vision', en: 'Computer Vision' }, value: 'Real-time HSV Filter' },
    ],
    features: [
      {
        id: 'Alur pemesanan tiket konser interaktif dengan pemilihan kategori tiket',
        en: 'An interactive concert ticket booking flow with ticket category selection',
      },
      { id: 'Manajemen basis data relasional MySQL terstruktur', en: 'Structured relational MySQL database management' },
      { id: 'Deteksi warna dinamis melalui umpan kamera webcam (OpenCV)', en: 'Dynamic color detection through a webcam feed (OpenCV)' },
      { id: 'Penerapan logika matematika filter ruang warna HSV pada frame video', en: 'Applying HSV color-space filter mathematics to video frames' },
    ],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    period: { id: 'AGUSTUS 2026 — SEKARANG', en: 'AUGUST 2026 — PRESENT' },
    location: { id: 'Indonesia (Hybrid)', en: 'Indonesia (Hybrid)' },
    role: 'Frontend Developer Intern',
    company: 'PT Kreasi X',
    description: {
      id: 'Membangun antarmuka web dan mobile untuk ekosistem absensi digital (YukAbsen), website sistem parkir otomatis (Mobile Parking), dan platform monitoring enterprise. Bertanggung jawab atas slicing UI berstandar tinggi, integrasi REST API ke backend, serta optimasi performa antarmuka.',
      en: 'Built web and mobile interfaces for the YukAbsen digital attendance ecosystem, the Mobile Parking automated parking website, and an enterprise monitoring platform. Responsible for high-standard UI slicing, REST API integration with the backend, and interface performance optimization.',
    },
  },
  {
    period: { id: 'AGUSTUS 2023 — SEKARANG', en: 'AUGUST 2023 — PRESENT' },
    location: { id: 'Salatiga, Jawa Tengah', en: 'Salatiga, Central Java' },
    role: 'S1 Informatics Engineering (IPK 3.52)',
    company: 'Universitas Kristen Satya Wacana (UKSW)',
    description: {
      id: 'Mendalami Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Pemrograman Web, Basis Data Relasional, serta Komputer Grafis & Vision. Aktif mengasah keterampilan problem-solving sistematis dalam proyek mandiri dan kolaborasi tim.',
      en: 'Diving deep into Software Engineering, Data Structures & Algorithms, Web Programming, Relational Databases, and Computer Graphics & Vision. Actively sharpening systematic problem-solving skills through independent projects and team collaboration.',
    },
  },
];

export const tickerSkills: string[] = [
  'REACT JS & NEXT.JS',
  'TYPESCRIPT & JAVASCRIPT',
  'TAILWIND CSS',
  'REST API INTEGRATION',
  'REACT NATIVE & EXPO',
  'TURBOREPO & MONOREPO',
  'PHP & MYSQL',
  'PYTHON & OPENCV',
  'RESPONSIVE WEB & MOBILE SLICING',
];

export const fourthWallQuotes: LocalizedText[] = [
  {
    id: '"Ya, kamu. Yang lagi scroll tanpa berkedip. Jangan lupa minum air!"',
    en: '"Yes, you. The one scrolling without blinking. Don\'t forget to drink water!"',
  },
  {
    id: '"Pssst... frontend developer ini tersedia untuk proyek keren lho."',
    en: '"Pssst... this frontend developer is available for cool projects, you know."',
  },
  {
    id: '"Kamu pikir ini website biasa? Coba scroll lagi ke bawah."',
    en: '"You think this is just another website? Try scrolling down again."',
  },
  { id: '"Hei! Jangan tatap topeng saya terus, nanti naksir!"', en: '"Hey! Don\'t stare at my mask too long, you might fall for me!"' },
  {
    id: '"Tip: Coba mainkan mini game di bawah kalau lagi bosan kerja."',
    en: '"Tip: Try the mini games below if work is boring you."',
  },
  {
    id: '"Kode Konami masih aktif di semesta ini, kalau kamu cukup jeli..."',
    en: '"The Konami code is still alive in this universe, if you\'re observant enough..."',
  },
];

export const navSections: { id: string; label: LocalizedText }[] = [
  { id: 'hero', label: { id: 'BERANDA', en: 'HOME' } },
  { id: 'tentang', label: { id: 'TENTANG', en: 'ABOUT' } },
  { id: 'skill', label: { id: 'SKILL', en: 'SKILLS' } },
  { id: 'proyek', label: { id: 'PROYEK', en: 'PROJECTS' } },
  { id: 'misi', label: { id: 'MISI', en: 'MISSIONS' } },
  { id: 'arcade', label: { id: 'MINI GAME', en: 'MINI GAMES' } },
  { id: 'kontak', label: { id: 'KONTAK', en: 'CONTACT' } },
];

// ========================================================
// TAMBAHAN: detail proyek — data lengkap untuk halaman detail.
// Satu template detail dipakai untuk semua proyek; cukup edit array ini.
// Urutan array harus sama dengan projectsData di atas.
// GANTI: teks narasi, angka statistik, URL gambar/galeri, dan link tiap proyek.
// ========================================================
export interface ProjectStat {
  value: number;
  suffix?: string;
  label: LocalizedText;
}

export interface GalleryItem {
  image?: string; // GANTI: URL screenshot (kosong = placeholder komik)
  caption: LocalizedText;
}

export interface TechItem {
  icon: string; // emoji ikon teknologi
  name: string;
}

export interface ProjectDetailData {
  id: string;
  image?: string; // GANTI: URL gambar utama proyek (kosong = placeholder komik)
  background: LocalizedText; // GANTI: latar belakang / konteks proyek
  problem: LocalizedText; // GANTI: masalah yang diselesaikan
  solution: LocalizedText; // GANTI: solusi yang dibangun
  result: LocalizedText; // GANTI: hasil / dampak proyek
  stats: ProjectStat[]; // GANTI: angka statistik (animasi count-up)
  gallery: GalleryItem[]; // GANTI: daftar screenshot
  techStack: TechItem[]; // GANTI: ikon + nama teknologi
  links: { live?: string; repo?: string }; // GANTI: link demo & source code ('#' = belum diisi)
}

export const projectDetailsData: ProjectDetailData[] = [
  {
    id: 'fe-trafix',
    // GANTI: taruh URL gambar utama Trafix di sini, contoh: '/projects/trafix.jpg'
    image: '',
    background: {
      id: 'Trafix adalah platform enterprise untuk manajemen operasional dan monitoring perangkat. Arsitektur frontend-nya berbasis Turborepo yang mencakup 4 sub-aplikasi mandiri: Admin Teknisi, Finance, Operator, dan Signage.',
      en: 'Trafix is an enterprise platform for operations management and device monitoring. Its frontend architecture is built on Turborepo, spanning 4 standalone sub-applications: Technician Admin, Finance, Operator, and Signage.',
    },
    problem: {
      id: 'Portal admin teknisi, keuangan, operator, dan tampilan signage awalnya berjalan terpisah. Tidak ada sumber tunggal untuk status perangkat, tiket keluhan, dan laporan keuangan — akibatnya switching context tinggi, gaya visual tidak konsisten, dan data operasional sulit dilacak real-time.',
      en: 'The technician admin, finance, operator, and signage portals initially ran separately. There was no single source of truth for device status, complaint tickets, and financial reports — resulting in heavy context switching, inconsistent visual styling, and operational data that was hard to track in real time.',
    },
    solution: {
      id: 'Frontend disusun ulang menjadi monorepo modular dengan Turborepo: setiap portal punya codebase sendiri tapi berbagi design system, utilitas, dan kontrak API yang sama. Dilengkapi dashboard analitik, audit transaksi finance, dan display digital signage terpisah untuk informasi publik.',
      en: 'The frontend was restructured into a modular monorepo with Turborepo: each portal keeps its own codebase but shares the same design system, utilities, and API contracts. Completed with an analytics dashboard, finance transaction audit, and a separate digital signage display for public information.',
    },
    result: {
      id: 'Empat sub-aplikasi terintegrasi dalam satu monorepo dengan REST API terpusat. Status perangkat dan tiket keluhan terpantau real-time, laporan finance terpadu dalam satu dashboard, dan signage publik berjalan independen tanpa mengganggu portal internal.',
      en: 'Four sub-applications integrated into a single monorepo with a centralized REST API. Device status and complaint tickets are monitored in real time, finance reports are unified in one dashboard, and the public signage runs independently without disturbing the internal portals.',
    },
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 4, label: { id: 'Sub-aplikasi Terintegrasi', en: 'Integrated Sub-apps' } },
      { value: 95, suffix: '%', label: { id: 'Target Performa UI', en: 'UI Performance Target' } },
      { value: 100, suffix: '+', label: { id: 'Komponen Reusable', en: 'Reusable Components' } },
    ],
    // GANTI: taruh URL screenshot tiap portal di sini
    gallery: [
      {
        image: '',
        caption: { id: 'Portal Admin Teknisi — manajemen tiket perbaikan', en: 'Technician Admin Portal — repair ticket management' },
      },
      { image: '', caption: { id: 'Dashboard Finance — laporan & audit transaksi', en: 'Finance Dashboard — reports & transaction audit' } },
      { image: '', caption: { id: 'Tampilan Signage — informasi publik real-time', en: 'Signage Display — real-time public information' } },
    ],
    // GANTI: sesuaikan ikon & nama tech stack
    techStack: [
      { icon: '📦', name: 'Turborepo' },
      { icon: '⚛️', name: 'React' },
      { icon: '🔷', name: 'TypeScript' },
      { icon: '🎨', name: 'Tailwind CSS' },
      { icon: '🔌', name: 'REST API' },
    ],
    // GANTI: isi link demo & repository ('#' berarti belum diisi)
    links: { live: '#', repo: '#' },
  },
  {
    id: 'yukabsen',
    // GANTI: taruh URL gambar utama YukAbsen di sini
    image: '',
    background: {
      id: 'YukAbsen adalah ekosistem absensi digital karyawan: aplikasi mobile berbasis Expo (React Native) untuk presensi lapangan, plus dashboard web admin Next.js 16 untuk monitoring.',
      en: 'YukAbsen is an employee digital attendance ecosystem: an Expo (React Native) mobile app for field attendance, plus a Next.js 16 admin web dashboard for monitoring.',
    },
    problem: {
      id: 'Absensi konvensional tidak bisa memverifikasi apakah karyawan benar-benar berada di lokasi kerja. Data kehadiran tersebar, jadwal shift sulit dikelola, dan admin tidak punya visualisasi pemetaan untuk memantau ribuan titik presensi.',
      en: 'Conventional attendance cannot verify whether employees are actually at the work location. Attendance data was scattered, shift schedules were hard to manage, and admins had no map visualization to monitor thousands of attendance points.',
    },
    solution: {
      id: 'Presensi divalidasi dengan radius GPS (geofencing) memakai React Native Maps dan TanStack Query, dilengkapi verifikasi foto selfie. Dashboard admin Next.js 16 dengan Leaflet menampilkan pemetaan interaktif, manajemen jadwal kerja, shift, dan riwayat absensi, serta visualisasi Recharts.',
      en: 'Attendance is validated with a GPS radius (geofencing) using React Native Maps and TanStack Query, complete with selfie photo verification. The Next.js 16 admin dashboard with Leaflet provides interactive mapping, work schedule, shift, and attendance history management, plus Recharts visualization.',
    },
    result: {
      id: 'Kehadiran hanya bisa dicatat di dalam radius lokasi yang ditentukan, data tersentralisasi di dashboard, dan admin mendapat gambaran real-time melalui peta interaktif serta grafik statistik kehadiran.',
      en: 'Attendance can only be recorded inside the designated location radius, data is centralized in the dashboard, and admins get a real-time picture through the interactive map and attendance statistics charts.',
    },
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 2, label: { id: 'Platform (Mobile + Web)', en: 'Platforms (Mobile + Web)' } },
      { value: 100, suffix: '%', label: { id: 'Presensi Terverifikasi Lokasi', en: 'Location-Verified Attendance' } },
      { value: 60, suffix: 'fps', label: { id: 'Target Animasi UI', en: 'UI Animation Target' } },
    ],
    // GANTI: taruh URL screenshot aplikasi di sini
    gallery: [
      { image: '', caption: { id: 'Aplikasi Mobile — presensi geofencing + selfie', en: 'Mobile App — geofencing attendance + selfie' } },
      { image: '', caption: { id: 'Dashboard Admin — peta Leaflet interaktif', en: 'Admin Dashboard — interactive Leaflet map' } },
      { image: '', caption: { id: 'Visualisasi Recharts — statistik kehadiran', en: 'Recharts Visualization — attendance statistics' } },
    ],
    // GANTI: sesuaikan ikon & nama tech stack
    techStack: [
      { icon: '📱', name: 'React Native' },
      { icon: '🚀', name: 'Expo' },
      { icon: '▲', name: 'Next.js 16' },
      { icon: '🗺️', name: 'Leaflet' },
      { icon: '📊', name: 'Recharts' },
    ],
    // GANTI: isi link demo & repository ('#' berarti belum diisi)
    links: { live: '#', repo: '#' },
  },
  {
    id: 'mobile-parking',
    // GANTI: taruh URL gambar utama MobileParking di sini
    image: '',
    background: {
      id: 'MobileParking adalah sistem parkir cerdas: website monitoring ketersediaan area parkir berbasis Next.js 16, dipasangkan dengan aplikasi mobile Flutter untuk pengendara.',
      en: 'MobileParking is a smart parking system: a Next.js 16 website for monitoring parking area availability, paired with a Flutter mobile app for drivers.',
    },
    problem: {
      id: 'Pengendara sering mengitari area parkir tanpa tahu slot mana yang kosong, sementara operator kesulitan memantau kuota, durasi, dan transaksi parkir secara live dari satu tempat.',
      en: 'Drivers often circle around parking areas without knowing which slots are free, while operators struggle to monitor quota, duration, and parking transactions live from a single place.',
    },
    solution: {
      id: 'Website monitoring menampilkan status kuota dan ketersediaan lot parkir secara real-time dengan Tailwind CSS dan Recharts, terhubung ke REST API backend untuk pencatatan tiket dan durasi parkir. Aplikasi mobile Flutter menjadi pelengkap bagi pengendara di lapangan.',
      en: 'The monitoring website shows quota status and parking lot availability in real time with Tailwind CSS and Recharts, connected to a backend REST API for recording tickets and parking duration. The Flutter mobile app complements it for drivers in the field.',
    },
    result: {
      id: 'Operator memantau seluruh area dari satu dashboard live, pengendara mendapat informasi ketersediaan slot sebelum masuk, dan data transaksi terekam otomatis untuk pelaporan harian.',
      en: 'Operators monitor the entire area from a single live dashboard, drivers get slot availability information before entering, and transaction data is recorded automatically for daily reporting.',
    },
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 2, label: { id: 'Aplikasi (Web + Mobile)', en: 'Apps (Web + Mobile)' } },
      { value: 24, suffix: '/7', label: { id: 'Monitoring Status Slot', en: 'Slot Status Monitoring' } },
      { value: 100, suffix: '%', label: { id: 'Tampilan Responsif', en: 'Responsive Display' } },
    ],
    // GANTI: taruh URL screenshot aplikasi di sini
    gallery: [
      { image: '', caption: { id: 'Dashboard Monitoring — kuota & ketersediaan lot', en: 'Monitoring Dashboard — quota & lot availability' } },
      { image: '', caption: { id: 'Grafik Recharts — volume kendaraan harian', en: 'Recharts Chart — daily vehicle volume' } },
      { image: '', caption: { id: 'Aplikasi Mobile Flutter — panduan pengendara', en: 'Flutter Mobile App — driver guide' } },
    ],
    // GANTI: sesuaikan ikon & nama tech stack
    techStack: [
      { icon: '▲', name: 'Next.js 16' },
      { icon: '⚛️', name: 'React 19' },
      { icon: '🎨', name: 'Tailwind CSS' },
      { icon: '📊', name: 'Recharts' },
      { icon: '💙', name: 'Flutter' },
    ],
    // GANTI: isi link demo & repository ('#' berarti belum diisi)
    links: { live: '#', repo: '#' },
  },
  {
    id: 'academic-projects',
    // GANTI: taruh URL gambar utama proyek akademik di sini
    image: '',
    background: {
      id: 'Proyek akademik gabungan: sistem reservasi tiket konser berbasis PHP/MySQL dan riset terapan computer vision untuk deteksi warna objek real-time menggunakan Python OpenCV.',
      en: 'A combined academic project: a PHP/MySQL concert ticket reservation system and applied computer vision research for real-time object color detection using Python OpenCV.',
    },
    problem: {
      id: 'Penjualan tiket konser manual rawan overselling dan antri panjang, sementara deteksi warna berbasis kamera membutuhkan filter ruang warna yang tepat agar akurat di berbagai kondisi pencahayaan.',
      en: 'Manual concert ticket sales are prone to overselling and long queues, while camera-based color detection needs the right color-space filter to stay accurate under various lighting conditions.',
    },
    solution: {
      id: 'Sistem pemesanan tiket dibangun lengkap dengan otentikasi akun, manajemen kuota tiket, dan operasi CRUD PHP/MySQL. Riset computer vision memakai filter ruang warna HSV pada frame video webcam untuk mendeteksi objek warna secara real-time.',
      en: 'The ticket booking system was built complete with account authentication, ticket quota management, and PHP/MySQL CRUD operations. The computer vision research applies an HSV color-space filter to webcam video frames to detect colored objects in real time.',
    },
    result: {
      id: 'Alur pemesanan tiket konser berjalan interaktif dengan kuota terkendali, dan deteksi warna berbasis HSV terbukti bekerja real-time pada umpan kamera.',
      en: 'The concert ticket booking flow runs interactively with controlled quotas, and HSV-based color detection proves to work in real time on a camera feed.',
    },
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 2, label: { id: 'Proyek (Web + Computer Vision)', en: 'Projects (Web + Computer Vision)' } },
      { value: 30, suffix: 'fps', label: { id: 'Deteksi Warna Real-time', en: 'Real-time Color Detection' } },
      { value: 180, suffix: '°', label: { id: 'Rentang Hue HSV', en: 'HSV Hue Range' } },
    ],
    // GANTI: taruh URL screenshot proyek di sini
    gallery: [
      { image: '', caption: { id: 'Sistem Pemesanan Tiket — katalog & kuota', en: 'Ticket Booking System — catalog & quota' } },
      { image: '', caption: { id: 'Deteksi Warna HSV — tampilan kamera', en: 'HSV Color Detection — camera view' } },
      { image: '', caption: { id: 'Basis Data MySQL — struktur relasional', en: 'MySQL Database — relational structure' } },
    ],
    // GANTI: sesuaikan ikon & nama tech stack
    techStack: [
      { icon: '🐘', name: 'PHP' },
      { icon: '🗄️', name: 'MySQL' },
      { icon: '🐍', name: 'Python' },
      { icon: '👁️', name: 'OpenCV' },
      { icon: '📜', name: 'JavaScript' },
    ],
    // GANTI: isi link demo & repository ('#' berarti belum diisi)
    links: { live: '#', repo: '#' },
  },
];
