/**
 * Konten portofolio Yerky Syabana untuk tema Anti-Hero Comic.
 * Sumber data: portofolio existing (D:\Magang\Portofolio_Yerky).
 */

export interface Skill {
  name: string;
  percent: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  categoryLabel: string;
  badge: string;
  stamp: string;
  summary: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
}

export interface ExperienceItem {
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
}

export interface StatCard {
  label: string;
  value: string;
  sublabel: string;
  description: string;
  highlight?: boolean;
}

export const profileData = {
  name: 'Yerky Syabana',
  brandFirst: 'YERKY',
  brandLast: 'SYABANA',
  role: 'Frontend Developer & Informatics Engineer',
  heroGreeting: 'HALO, SAYA',
  heroName: 'YERKY SYABANA!',
  speech:
    '"Bisa dibilang saya pahlawan digital... ya setidaknya sampai deadline-nya cair. Mari bikin sesuatu yang bikin orang melongo!"',
  heroDesc:
    'Saya seorang Frontend Developer & Informatics Engineer yang memadukan kode bersih dengan visual liar tanpa kompromi. Suka tantangan, kopi hitam, dan tentu saja... chimichangas!',
  aboutQuote:
    '"SAYA TIDAK SELALU MENULIS BUG, TAPI SAAT SAYA LAKUKAN, IT\'S A FEATURE."',
  bio: 'Mahasiswa S1 Teknik Informatika UKSW yang berfokus pada Frontend Engineering & antarmuka responsif. Berpengalaman membangun UI modern dengan React, Next.js, dan arsitektur mobile terintegrasi REST API dengan performa tinggi.',
  secondaryBio:
    'Berpengalaman menangani implementasi frontend proyek riil mulai dari platform enterprise Trafix, ekosistem absensi digital YukAbsen, hingga portal Mobile Parking. Terbiasa memadukan antarmuka yang bersih dengan keandalan integrasi backend secara sistematis.',
  availability: 'Tersedia untuk Peluang & Proyek',
  location: 'Salatiga, Jawa Tengah (WIB)',
  email: 'yerkysabana1994@gmail.com',
  github: 'github.com/yerkysabana',
  githubUrl: 'https://github.com/yerkysabana',
};

export const aboutFacts: { icon: string; text: string }[] = [
  { icon: '🎓', text: 'Pendidikan: S1 Teknik Informatika UKSW, Salatiga (IPK 3.52).' },
  { icon: '📍', text: 'Markas: Salatiga, Jawa Tengah — bisa remote/hybrid.' },
  {
    icon: '⚔️',
    text: 'Senjata Utama: React, Next.js, TypeScript, Tailwind CSS, React Native & REST API.',
  },
  {
    icon: '🎯',
    text: 'Filosofi Kerja: Maximum Effort — UI rapi, cepat dimuat, integrasi backend yang andal.',
  },
  { icon: '🍕', text: 'Bahan Bakar: Kopi pekat, deadline yang mepet, dan chimichangas.' },
];

export const statsData: StatCard[] = [
  {
    label: 'Akademik',
    value: '3.52',
    sublabel: 'IPK Teknik Informatika UKSW',
    description: 'Komitmen kuat pada pemahaman konsep rekayasa perangkat lunak dan keunggulan akademis.',
  },
  {
    label: 'Pengalaman Riil',
    value: 'Intern',
    sublabel: 'Frontend Dev di PT Kreasi X',
    description: 'Terbiasa berkontribusi pada codebase proyek komersial dan kolaborasi tim pengembangan.',
    highlight: true,
  },
  {
    label: 'Proyek Portofolio',
    value: '6+',
    sublabel: 'Web & Mobile Aplikasi',
    description: 'Dari platform monorepo enterprise, absensi geofencing, hingga website smart parking.',
  },
  {
    label: 'Fokus Inti',
    value: 'Clean & Fast',
    sublabel: 'UI Slicing & API Integration',
    description: 'Mengutamakan antarmuka yang responsif, rapi, cepat dimuat, dan mudah dirawat.',
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
    title: 'Trafix — Monitoring & Operasional Enterprise',
    categoryLabel: 'Enterprise Monorepo',
    badge: 'Turborepo Multi-App',
    stamp: 'MAXIMUM EFFORT',
    summary:
      'Monorepo antarmuka web enterprise untuk manajemen operasional, monitoring trafik, portal admin/teknisi, keuangan, hingga tampilan digital signage.',
    description:
      'Arsitektur frontend modular berbasis Turborepo yang mencakup 4 sub-aplikasi mandiri: Admin Teknisi, Finance, Operator, dan Signage. Dioptimasi untuk pengelolaan tiket perbaikan perangkat, pelacakan status operasional real-time, dan pelaporan keuangan terpadu.',
    tags: ['Turborepo', 'React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    metrics: [
      { label: 'Sub-aplikasi', value: '4 Portal (Admin, Finance, Operator, Signage)' },
      { label: 'Arsitektur', value: 'Turborepo Monorepo' },
      { label: 'Integrasi', value: 'REST API & Real-time' },
    ],
    features: [
      'Slicing UI kompleks untuk portal admin teknisi dan operator',
      'Monitoring status perangkat operasional dan tiket keluhan secara real-time',
      'Dashboard laporan analitik dan audit transaksi finance',
      'Display digital signage terpisah untuk kebutuhan informasi publik',
    ],
  },
  {
    id: 'yukabsen',
    title: 'YukAbsen — Absensi Digital & Geofencing',
    categoryLabel: 'Mobile App & Web Admin',
    badge: 'Expo + Next.js 16',
    stamp: 'APPROVED',
    summary:
      'Ekosistem absensi digital mobile berbasis Expo/React Native dengan geolokasi/peta dan dashboard monitoring admin Next.js 16.',
    description:
      'Membangun aplikasi mobile absensi karyawan menggunakan Expo (React Native), NativeWind, TanStack Query, dan React Native Maps untuk validasi radius kehadiran (geofencing). Dilengkapi dashboard web admin interaktif Next.js 16, Leaflet, dan visualisasi Recharts.',
    tags: ['React Native', 'Expo', 'Next.js 16', 'TanStack Query', 'Leaflet'],
    metrics: [
      { label: 'Platform', value: 'Android & Web Admin' },
      { label: 'Geofencing', value: 'Radius GPS Presisi' },
      { label: 'State Management', value: 'Zustand & React Query' },
    ],
    features: [
      'Presensi berbasis radius lokasi (GPS/Maps) & verifikasi foto selfie',
      'Dashboard web admin dengan visualisasi pemetaan interaktif Leaflet',
      'Manajemen jadwal kerja, shift karyawan, dan riwayat absensi',
      'Pengambilan data responsif dengan caching TanStack Query',
    ],
  },
  {
    id: 'mobile-parking',
    title: 'MobileParking — Parkir Cerdas & Otomasi',
    categoryLabel: 'Smart Mobility System',
    badge: 'Next.js 16 + Flutter',
    stamp: 'SHIPPED',
    summary:
      'Portal monitoring parkir cerdas berbasis Next.js 16 dan aplikasi mobile Flutter untuk tracking slot ketersediaan dan transaksi parkir.',
    description:
      'Mengembangkan website monitoring ketersediaan area parkir dan transaksi secara real-time menggunakan Next.js dan Tailwind CSS, terhubung dengan integrasi REST API backend serta aplikasi pendukung mobile.',
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Recharts', 'Flutter'],
    metrics: [
      { label: 'Monitoring Slot', value: 'Real-time Status' },
      { label: 'Tampilan', value: 'Responsif Mobile & Web' },
      { label: 'Visualisasi', value: 'Recharts Analitik' },
    ],
    features: [
      'Pemantauan status kuota dan ketersediaan lot parkir secara live',
      'Visualisasi grafik statistik pendapatan & volume kendaraan harian',
      'Integrasi REST API untuk pencatatan tiket dan durasi parkir',
      'Antarmuka ramah pengguna bagi operator lapangan dan pengendara',
    ],
  },
  {
    id: 'academic-projects',
    title: 'Concert Ticket Booking & CV Color Detection',
    categoryLabel: 'Fullstack & Computer Vision',
    badge: 'Web & Python AI',
    stamp: 'BRUTAL CODE',
    summary:
      'Sistem reservasi tiket konser interaktif berbasis PHP/MySQL serta deteksi objek warna real-time via webcam dengan Python OpenCV.',
    description:
      'Proyek pengembangan sistem pemesanan tiket konser lengkap dengan otentikasi akun, manajemen kuota tiket, dan operasi CRUD menggunakan PHP dan MySQL, didukung riset terapan pengolahan citra digital untuk deteksi warna berbasis HSV menggunakan Python dan OpenCV.',
    tags: ['PHP', 'MySQL', 'Python', 'OpenCV', 'JavaScript'],
    metrics: [
      { label: 'Teknologi', value: 'Fullstack Web + AI' },
      { label: 'Otentikasi', value: 'Role-based Access' },
      { label: 'Computer Vision', value: 'Real-time HSV Filter' },
    ],
    features: [
      'Alur pemesanan tiket konser interaktif dengan pemilihan kategori tiket',
      'Manajemen basis data relasional MySQL terstruktur',
      'Deteksi warna dinamis melalui umpan kamera webcam (OpenCV)',
      'Penerapan logika matematika filter ruang warna HSV pada frame video',
    ],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    period: 'AGUSTUS 2026 — SEKARANG',
    location: 'Indonesia (Hybrid)',
    role: 'Frontend Developer Intern',
    company: 'PT Kreasi X',
    description:
      'Membangun antarmuka web dan mobile untuk ekosistem absensi digital (YukAbsen), website sistem parkir otomatis (Mobile Parking), dan platform monitoring enterprise. Bertanggung jawab atas slicing UI berstandar tinggi, integrasi REST API ke backend, serta optimasi performa antarmuka.',
  },
  {
    period: 'AGUSTUS 2023 — SEKARANG',
    location: 'Salatiga, Jawa Tengah',
    role: 'S1 Informatics Engineering (IPK 3.52)',
    company: 'Universitas Kristen Satya Wacana (UKSW)',
    description:
      'Mendalami Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Pemrograman Web, Basis Data Relasional, serta Komputer Grafis & Vision. Aktif mengasah keterampilan problem-solving sistematis dalam proyek mandiri dan kolaborasi tim.',
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

export const fourthWallQuotes: string[] = [
  '"Ya, kamu. Yang lagi scroll tanpa berkedip. Jangan lupa minum air!"',
  '"Pssst... frontend developer ini tersedia untuk proyek keren lho."',
  '"Kamu pikir ini website biasa? Coba scroll lagi ke bawah."',
  '"Hei! Jangan tatap topeng saya terus, nanti naksir!"',
  '"Tip: Coba mainkan mini game di bawah kalau lagi bosan kerja."',
  '"Kode Konami masih aktif di semesta ini, kalau kamu cukup jeli..."',
];

export const navSections: { id: string; label: string }[] = [
  { id: 'hero', label: 'BERANDA' },
  { id: 'tentang', label: 'TENTANG' },
  { id: 'skill', label: 'SKILL' },
  { id: 'proyek', label: 'PROYEK' },
  { id: 'misi', label: 'MISI' },
  { id: 'arcade', label: 'MINI GAME' },
  { id: 'kontak', label: 'KONTAK' },
];
