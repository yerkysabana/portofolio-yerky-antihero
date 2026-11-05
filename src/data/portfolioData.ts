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

// ========================================================
// TAMBAHAN: detail proyek — data lengkap untuk halaman detail.
// Satu template detail dipakai untuk semua proyek; cukup edit array ini.
// Urutan array harus sama dengan projectsData di atas.
// GANTI: teks narasi, angka statistik, URL gambar/galeri, dan link tiap proyek.
// ========================================================
export interface ProjectStat {
  value: number;
  suffix?: string;
  label: string;
}

export interface GalleryItem {
  image?: string; // GANTI: URL screenshot (kosong = placeholder komik)
  caption: string;
}

export interface TechItem {
  icon: string; // emoji ikon teknologi
  name: string;
}

export interface ProjectDetailData {
  id: string;
  image?: string; // GANTI: URL gambar utama proyek (kosong = placeholder komik)
  background: string; // GANTI: latar belakang / konteks proyek
  problem: string; // GANTI: masalah yang diselesaikan
  solution: string; // GANTI: solusi yang dibangun
  result: string; // GANTI: hasil / dampak proyek
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
    background:
      'Trafix adalah platform enterprise untuk manajemen operasional dan monitoring perangkat. Arsitektur frontend-nya berbasis Turborepo yang mencakup 4 sub-aplikasi mandiri: Admin Teknisi, Finance, Operator, dan Signage.',
    problem:
      'Portal admin teknisi, keuangan, operator, dan tampilan signage awalnya berjalan terpisah. Tidak ada sumber tunggal untuk status perangkat, tiket keluhan, dan laporan keuangan — akibatnya switching context tinggi, gaya visual tidak konsisten, dan data operasional sulit dilacak real-time.',
    solution:
      'Frontend disusun ulang menjadi monorepo modular dengan Turborepo: setiap portal punya codebase sendiri tapi berbagi design system, utilitas, dan kontrak API yang sama. Dilengkapi dashboard analitik, audit transaksi finance, dan display digital signage terpisah untuk informasi publik.',
    result:
      'Empat sub-aplikasi terintegrasi dalam satu monorepo dengan REST API terpusat. Status perangkat dan tiket keluhan terpantau real-time, laporan finance terpadu dalam satu dashboard, dan signage publik berjalan independen tanpa mengganggu portal internal.',
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 4, label: 'Sub-aplikasi Terintegrasi' },
      { value: 95, suffix: '%', label: 'Target Performa UI' },
      { value: 100, suffix: '+', label: 'Komponen Reusable' },
    ],
    // GANTI: taruh URL screenshot tiap portal di sini
    gallery: [
      { image: '', caption: 'Portal Admin Teknisi — manajemen tiket perbaikan' },
      { image: '', caption: 'Dashboard Finance — laporan & audit transaksi' },
      { image: '', caption: 'Tampilan Signage — informasi publik real-time' },
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
    background:
      'YukAbsen adalah ekosistem absensi digital karyawan: aplikasi mobile berbasis Expo (React Native) untuk presensi lapangan, plus dashboard web admin Next.js 16 untuk monitoring.',
    problem:
      'Absensi konvensional tidak bisa memverifikasi apakah karyawan benar-benar berada di lokasi kerja. Data kehadiran tersebar, jadwal shift sulit dikelola, dan admin tidak punya visualisasi pemetaan untuk memantau ribuan titik presensi.',
    solution:
      'Presensi divalidasi dengan radius GPS (geofencing) memakai React Native Maps dan TanStack Query, dilengkapi verifikasi foto selfie. Dashboard admin Next.js 16 dengan Leaflet menampilkan pemetaan interaktif, manajemen jadwal kerja, shift, dan riwayat absensi, serta visualisasi Recharts.',
    result:
      'Kehadiran hanya bisa dicatat di dalam radius lokasi yang ditentukan, data tersentralisasi di dashboard, dan admin mendapat gambaran real-time melalui peta interaktif serta grafik statistik kehadiran.',
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 2, label: 'Platform (Mobile + Web)' },
      { value: 100, suffix: '%', label: 'Presensi Terverifikasi Lokasi' },
      { value: 60, suffix: 'fps', label: 'Target Animasi UI' },
    ],
    // GANTI: taruh URL screenshot aplikasi di sini
    gallery: [
      { image: '', caption: 'Aplikasi Mobile — presensi geofencing + selfie' },
      { image: '', caption: 'Dashboard Admin — peta Leaflet interaktif' },
      { image: '', caption: 'Visualisasi Recharts — statistik kehadiran' },
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
    background:
      'MobileParking adalah sistem parkir cerdas: website monitoring ketersediaan area parkir berbasis Next.js 16, dipasangkan dengan aplikasi mobile Flutter untuk pengendara.',
    problem:
      'Pengendara sering mengitari area parkir tanpa tahu slot mana yang kosong, sementara operator kesulitan memantau kuota, durasi, dan transaksi parkir secara live dari satu tempat.',
    solution:
      'Website monitoring menampilkan status kuota dan ketersediaan lot parkir secara real-time dengan Tailwind CSS dan Recharts, terhubung ke REST API backend untuk pencatatan tiket dan durasi parkir. Aplikasi mobile Flutter menjadi pelengkap bagi pengendara di lapangan.',
    result:
      'Operator memantau seluruh area dari satu dashboard live, pengendara mendapat informasi ketersediaan slot sebelum masuk, dan data transaksi terekam otomatis untuk pelaporan harian.',
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 2, label: 'Aplikasi (Web + Mobile)' },
      { value: 24, suffix: '/7', label: 'Monitoring Status Slot' },
      { value: 100, suffix: '%', label: 'Tampilan Responsif' },
    ],
    // GANTI: taruh URL screenshot aplikasi di sini
    gallery: [
      { image: '', caption: 'Dashboard Monitoring — kuota & ketersediaan lot' },
      { image: '', caption: 'Grafik Recharts — volume kendaraan harian' },
      { image: '', caption: 'Aplikasi Mobile Flutter — panduan pengendara' },
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
    background:
      'Proyek akademik gabungan: sistem reservasi tiket konser berbasis PHP/MySQL dan riset terapan computer vision untuk deteksi warna objek real-time menggunakan Python OpenCV.',
    problem:
      'Penjualan tiket konser manual rawan overselling dan antri panjang, sementara deteksi warna berbasis kamera membutuhkan filter ruang warna yang tepat agar akurat di berbagai kondisi pencahayaan.',
    solution:
      'Sistem pemesanan tiket dibangun lengkap dengan otentikasi akun, manajemen kuota tiket, dan operasi CRUD PHP/MySQL. Riset computer vision memakai filter ruang warna HSV pada frame video webcam untuk mendeteksi objek warna secara real-time.',
    result:
      'Alur pemesanan tiket konser berjalan interaktif dengan kuota terkendali, dan deteksi warna berbasis HSV terbukti bekerja real-time pada umpan kamera.',
    // GANTI: sesuaikan angka statistik dengan data riil proyek
    stats: [
      { value: 2, label: 'Proyek (Web + Computer Vision)' },
      { value: 30, suffix: 'fps', label: 'Deteksi Warna Real-time' },
      { value: 180, suffix: '°', label: 'Rentang Hue HSV' },
    ],
    // GANTI: taruh URL screenshot proyek di sini
    gallery: [
      { image: '', caption: 'Sistem Pemesanan Tiket — katalog & kuota' },
      { image: '', caption: 'Deteksi Warna HSV — tampilan kamera' },
      { image: '', caption: 'Basis Data MySQL — struktur relasional' },
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
