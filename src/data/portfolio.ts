import type { LucideIcon } from 'lucide-react';
import {
    Globe,
    Sparkles,
    Zap,
    BarChart3,
} from 'lucide-react';

export interface BusinessCaseContent {
    role: string;
    strategicOverview: string;
    businessContext: string;
    coreChallenge: string;
    strategicApproach: string;
    executionHighlights: string[];
    impactMetrics: string[];
    keySkills: string[];
}

export interface OrganizationItem {
    id: string;
    title: string;
    org: string;
    date: string;
    shortDesc: string;
    link?: string;
    businessCase: BusinessCaseContent;
    icon: LucideIcon;
    accent: string;
}

export interface AchievementItem {
    title: string;
    event: string;
    year: string;
}

export interface ExperienceItem {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    shortDesc: string;
    link?: string;
    businessCase: BusinessCaseContent;
    iconName: string;
}

export interface ProjectItem {
    id: string;
    title: string;
    shortDesc: string;
    tags: string[];
    link?: string;
    image: string;
}

// ─── Organizations ────────────────────────────────────────────

export const organizationData: OrganizationItem[] = [
    {
        id: 'ragam-cakap',
        title: "Kepala Hubungan Masyarakat",
        org: "Ragam Cakap",
        date: "Maret 2024 — April 2025",
        shortDesc: "Manajemen komunikasi strategis dan hubungan eksternal di seluruh sektor pemerintah kota dan daerah.",
        businessCase: {
            role: "Kepala Hubungan Masyarakat",
            strategicOverview: "Memimpin strategi hubungan eksternal organisasi, menempatkan Ragam Cakap sebagai mitra utama bagi lembaga pemerintah dan masyarakat lokal.",
            businessContext: "Ragam Cakap perlu meningkatkan profil publiknya dan membangun kemitraan formal dengan otoritas regional dan organisasi lintas sektor untuk memperluas jangkauan program.",
            coreChallenge: "Mengatasi hambatan institusional untuk mengamankan keterlibatan tingkat tinggi dan perjanjian kolaboratif dengan berbagai pemangku kepentingan secara bersamaan.",
            strategicApproach: "Menerapkan kerangka kerja pemetaan pemangku kepentingan yang ditargetkan, mengembangkan materi komunikasi yang disesuaikan, dan menyelenggarakan diskusi publik bernilai tinggi untuk menyelaraskan tujuan organisasi dengan kepentingan pemerintah.",
            executionHighlights: [
                "Memimpin audiensi dan negosiasi formal dengan lembaga pemerintah di seluruh Samarinda.",
                "Menjabat sebagai Steering Committee untuk kolaborasi 'Eduventure' yang kompleks dengan Samarinda BookParty.",
                "Memimpin inisiatif lintas komunitas 'Melintas', mengelola penyelarasan pemangku kepentingan multi-pihak."
            ],
            impactMetrics: [
                "Mengamankan kemitraan jangka panjang dengan lebih dari 3 lembaga pemerintah daerah.",
                "Meningkatkan jangkauan program dengan memposisikan program literasi sekolah 3T 'Manjah' secara efektif.",
                "Mencapai tingkat keberhasilan 100% dalam pelaksanaan kampanye hubungan masyarakat yang ditargetkan."
            ],
            keySkills: ["Komunikasi Strategis", "Negosiasi Pemangku Kepentingan", "Hubungan Masyarakat", "Advokasi Program"]
        },
        icon: Globe,
        accent: "bg-crank-violet"
    },
    {
        id: 'inforsa-service',
        title: "Ketua Proyek",
        org: "INFORSA Mengabdi 2024",
        date: "April 2024 — November 2024",
        shortDesc: "Mengarahkan inisiatif digitalisasi komprehensif yang diterapkan di 6 sub-proyek komunitas.",
        businessCase: {
            role: "Ketua Proyek",
            strategicOverview: "Mengarahkan inisiatif strategis 'INFORSA Mengabdi 2024', mendorong transformasi digital dan pembangunan berkelanjutan di Tanah Merah.",
            businessContext: "Masyarakat lokal menghadapi kesenjangan yang signifikan dalam literasi digital dan efisiensi operasional, membutuhkan intervensi yang terstruktur dan multi-aspek.",
            coreChallenge: "Mengelola tim lintas fungsional berskala besar untuk menyampaikan 6 sub-proyek teknologi dan sosial yang berbeda dengan batasan waktu dan sumber daya yang ketat.",
            strategicApproach: "Memanfaatkan kerangka kerja manajemen proyek Agile untuk membagi inisiatif ke dalam alur kerja yang dapat dikelola, memastikan penyampaian yang berkelanjutan dan koordinasi yang erat dengan para pemimpin masyarakat.",
            executionHighlights: [
                "Mengorkestrasi 6 sub-proyek yang berfokus pada Digitalisasi UMKM, Manajemen Risiko, dan Keamanan Siber.",
                "Menyampaikan situs web resmi tingkat perusahaan untuk SMA Wahidiyah.",
                "Memfasilitasi lokakarya peningkatan kapasitas untuk pemuda dan siswa lokal."
            ],
            impactMetrics: [
                "Berhasil menyelesaikan 6 proyek paralel dengan tingkat penyelesaian 100%.",
                "Mendigitalkan operasi untuk beberapa UMKM lokal, meningkatkan kesiapan pasar mereka.",
                "Melatih lebih dari 100 siswa lokal dalam kerangka desain dan literasi digital."
            ],
            keySkills: ["Manajemen Program", "Eksekusi Agile", "Transformasi Digital", "Kepemimpinan Lintas Fungsional"]
        },
        icon: Sparkles,
        accent: "bg-seafoam-teal"
    },
    {
        id: 'sobat-bumi',
        title: "Communication Relation",
        org: "Sobat Bumi (SOBI) Samarinda",
        date: "Agustus 2024 — Desember 2025",
        shortDesc: "Eksekusi kemitraan korporat untuk proyek energi terbarukan 'Desa Energi Berdikari'.",
        businessCase: {
            role: "Communication Relation",
            strategicOverview: "Mengelola titik temu penting antara Universitas Mulawarman, Pertamina Foundation, dan masyarakat pedesaan untuk mengimplementasikan infrastruktur energi terbarukan.",
            businessContext: "Pertamina Foundation mensponsori program 'Desa Energi Berdikari' yang berisiko tinggi, menuntut pelaksanaan yang teliti dan penyelarasan pemangku kepentingan.",
            coreChallenge: "Menavigasi dinamika korporat-akademik-komunitas yang kompleks untuk mengamankan dukungan dan memastikan keberhasilan penerapan teknologi baru.",
            strategicApproach: "Mengembangkan proposal teknis komprehensif dan mempertahankan saluran komunikasi yang ketat untuk memastikan semua mitra tetap selaras dengan hasil proyek dan tujuan dampak.",
            executionHighlights: [
                "Bertindak sebagai Koordinator utama untuk Proyek Desa Energi Berdikari (DEB) Fase 1.",
                "Berhasil mempresentasikan proposal teknis komprehensif kepada dewan Pertamina Foundation.",
                "Memimpin penilaian lapangan dan mengawasi tim implementasi teknis di Desa Lempake."
            ],
            impactMetrics: [
                "Mendapatkan persetujuan dan pendanaan penting dari Pertamina Foundation.",
                "Berhasil meluncurkan program energi terbarukan sesuai jadwal.",
                "Membangun model operasional yang berkelanjutan untuk masyarakat Desa Lempake."
            ],
            keySkills: ["Kemitraan Korporat", "Penyelarasan Pemangku Kepentingan", "Penulisan Hibah", "Penyebaran Energi Terbarukan"]
        },
        icon: Zap,
        accent: "bg-playdate-yellow"
    },
    {
        id: 'inforsa-cominfo',
        title: "Penanggung Jawab Media Sosial",
        org: "INFORSA (COMINFO)",
        date: "Januari 2025 — Januari 2026",
        shortDesc: "Mengeksekusi branding digital strategis untuk memaksimalkan jangkauan dan interaksi organisasi.",
        businessCase: {
            role: "Ketua Media Sosial & Branding",
            strategicOverview: "Mendefinisikan ulang identitas digital dan strategi konten untuk Himpunan Mahasiswa Sistem Informasi, mendorong tingkat interaksi yang belum pernah terjadi sebelumnya.",
            businessContext: "Organisasi perlu memodernisasi kehadiran digitalnya secara besar-besaran untuk meningkatkan metrik interaksi dan otoritas organisasi.",
            coreChallenge: "Mengubah komunikasi ad-hoc menjadi mesin konten yang terstruktur dan berbasis data yang mampu menghasilkan output bernilai tinggi secara konsisten.",
            strategicApproach: "Menerapkan pedoman branding yang terstandardisasi, membangun alur konten yang kohesif, dan memanfaatkan analitik kinerja untuk terus mengoptimalkan penjangkauan digital.",
            executionHighlights: [
                "Merombak dan mengelola titik sentuh digital resmi untuk organisasi.",
                "Merampingkan komunikasi internal dan menetapkan standar identitas korporat yang ketat.",
                "Mengarahkan tim internal COMINFO melalui sprint perencanaan konten yang terstruktur."
            ],
            impactMetrics: [
                "Mencapai lebih dari 37.200 tayangan konten, menetapkan rekor jangkauan tertinggi.",
                "Menghasilkan lebih dari 1.900 interaksi terverifikasi di seluruh kampanye digital strategis.",
                "Meningkatkan pertumbuhan pengikut dan konsistensi merek sebesar 40%."
            ],
            keySkills: ["Strategi Pemasaran Digital", "Manajemen Merek", "Operasional Konten", "Analitik"]
        },
        icon: BarChart3,
        accent: "bg-crank-violet"
    }
];

// ─── Achievements ─────────────────────────────────────────────

export const achievementsData: AchievementItem[] = [
    { title: "Juara 3", event: "Business Plan Competition Infation HMTI", year: "2025" },
    { title: "Finalis PFMuda 2024", event: "Pertamina Foundation", year: "2025" },
    { title: "Juara 2", event: "Information System Debate Competition", year: "2024" },
    { title: "Sobat Bumi Scholar", event: "Beasiswa Pertamina Foundation", year: "2024" },
    { title: "Desa Energi Berdikari", event: "Pertamina Foundation × Universitas Mulawarman", year: "2024" },
    { title: "Anggota OSIS Teramah", event: "OSIS Kabinet Nagarabhakti", year: "2022" }
];

// ─── Experience ───────────────────────────────────────────────

export const experienceData: ExperienceItem[] = [
    {
        id: 'pr-unmul',
        title: "Jurnalis",
        subtitle: "Humas Universitas Mulawarman",
        date: "April 2025 — April 2026",
        shortDesc: "Komunikasi korporat dan manajemen reputasi institusional melalui konten strategis.",
        businessCase: {
            role: "Pemagang Jurnalis",
            strategicOverview: "Mengeksekusi komunikasi korporat berkualitas tinggi untuk menjunjung tinggi dan meningkatkan reputasi publik Universitas Mulawarman.",
            businessContext: "Institusi memerlukan distribusi informasi internal dan cerita dampak komunitas yang cepat, akurat, dan profesional.",
            coreChallenge: "Merangkum acara institusional yang kompleks ke dalam siaran pers yang menarik dan sangat akurat di bawah tenggat waktu yang ketat.",
            strategicApproach: "Menerapkan kerangka verifikasi data yang ketat dan menetapkan proses persetujuan konten yang disederhanakan untuk memastikan publikasi tanpa kesalahan.",
            executionHighlights: [
                "Menyusun dan menyelesaikan siaran pers berkualitas tinggi dan artikel korporat.",
                "Melakukan wawancara lapangan dan verifikasi data menyeluruh untuk acara tingkat tinggi.",
                "Mengelola distribusi konten di seluruh properti digital resmi."
            ],
            impactMetrics: [
                "Menerbitkan berbagai artikel berdampak tinggi yang meningkatkan visibilitas institusional.",
                "Mempertahankan tingkat akurasi 100% di semua materi pers yang didistribusikan.",
                "Merampingkan alur konten dari liputan acara hingga publikasi."
            ],
            keySkills: ["Komunikasi Korporat", "Hubungan Masyarakat", "Verifikasi Data", "Copywriting"]
        },
        iconName: "PenTool"
    },
    {
        id: 'komisi-ii-dprd-kaltim',
        title: "Web Developer",
        subtitle: "Komisi II DPRD Provinsi Kalimantan Timur",
        date: "Februari 2026 — Mei 2026",
        shortDesc: "Membangun sistem tracking jadwal anggota Komisi II yang dikelola oleh staf untuk meningkatkan visibilitas agenda dan koordinasi internal.",
        businessCase: {
            role: "Web Developer",
            strategicOverview: "Mengembangkan aplikasi internal untuk membantu staf Komisi II DPRD Provinsi Kalimantan Timur memantau, memperbarui, dan mengelola jadwal anggota secara lebih terstruktur.",
            businessContext: "Koordinasi agenda anggota komisi membutuhkan sistem yang mudah dipakai staf agar perubahan jadwal dapat tercatat dan dilacak dengan rapi.",
            coreChallenge: "Menyederhanakan alur pencatatan jadwal menjadi pengalaman web yang jelas, cepat, dan mudah dipelihara untuk kebutuhan operasional harian.",
            strategicApproach: "Merancang sistem tracking berbasis web dengan fokus pada visibilitas jadwal, pembaruan data oleh staf, dan struktur informasi yang mudah dipantau.",
            executionHighlights: [
                "Membangun sistem tracking jadwal anggota Komisi II yang dapat dikelola oleh staf.",
                "Menyusun tampilan agenda agar status dan perubahan jadwal lebih mudah dipantau.",
                "Membantu digitalisasi proses koordinasi jadwal yang sebelumnya bergantung pada pencatatan manual."
            ],
            impactMetrics: [
                "Meningkatkan keterlacakan agenda anggota komisi.",
                "Mempermudah staf dalam memperbarui dan memonitor jadwal harian.",
                "Mengurangi risiko miskomunikasi melalui informasi jadwal yang lebih terpusat."
            ],
            keySkills: ["Web Development", "Sistem Informasi", "Manajemen Jadwal", "Digitalisasi Operasional"]
        },
        iconName: "Code"
    }
];

// ─── Projects ─────────────────────────────────────────────────

export const projectsData: ProjectItem[] = [
    {
        id: 'data-science',
        title: "Bonbon Ice Cream",
        shortDesc: "Mengeksekusi klasterisasi tingkat lanjut pada lebih dari 136.000 transaksi dan membangun profil perusahaan untuk mendorong strategi bisnis berbasis data.",
        tags: ["K-Means", "Python", "Web Development", "Analitik"],
        link: "https://bonbon.great-site.net/",
        image: "/images/bonbon.webp"
    },
    {
        id: 'bank-sampah',
        title: "Bank Sampah Faperta UNMUL",
        shortDesc: "Sistem informasi manajemen bank sampah untuk mempermudah pencatatan dan pengelolaan transaksi.",
        tags: ["Web Development", "Manajemen"],
        link: "#",
        image: "/images/banksampah.webp"
    },
    {
        id: 'kaltiminaja',
        title: "Kaltiminaja",
        shortDesc: "Spesialis Wisata Kalimantan Timur & Kepulauan Berau, web travel agent wisata untuk wilayah Kaltim.",
        tags: ["Web Development", "Travel", "Tourism"],
        link: "https://kaltiminaja.vercel.app/",
        image: "/images/kaltiminaja.webp"
    }
];

// ─── Skills & Tools ──────────────────────────────────────────

export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        name: "Language",
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "Java"]
    },
    {
        name: "Framework",
        skills: ["React", "Vue", "Express", "Laravel", "Tailwind", "Bootstrap", "Node.js"]
    },
    {
        name: "Database",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"]
    },
    {
        name: "Tools",
        skills: ["Git", "GitHub", "GitLab", "VS Code", "Figma", "Postman", "Canva", "Notion"]
    }
];

// ─── About ────────────────────────────────────────────────────

export const aboutData = {
    id: 'about-summary',
    name: "Muhammad Hisyam Nugroho",
    university: "Universitas Mulawarman",
    major: "Sistem Informasi",
    gpa: "3.87",
    businessCase: {
        role: "Strategi Digital & Spesialis Operasional",
        strategicOverview: "Seorang profesional Sistem Informasi yang sangat adaptif yang berdedikasi untuk mendorong keunggulan operasional dan transformasi digital dalam lingkungan UMKM dan perusahaan.",
        businessContext: "Lanskap bisnis modern membutuhkan pemimpin yang dapat dengan mulus menjembatani kesenjangan antara infrastruktur teknis dan strategi operasional.",
        coreChallenge: "Menavigasi lingkungan pemangku kepentingan yang kompleks untuk memberikan dampak bisnis yang terukur di berbagai vertikal operasional.",
        strategicApproach: "Memanfaatkan fondasi akademik yang kuat (IPK 3,87) dikombinasikan dengan kepemimpinan langsung dalam program perusahaan, inisiatif komunitas, dan operasi ritel.",
        executionHighlights: [
            "Penerima Beasiswa Sobat Bumi Pertamina Foundation yang sangat kompetitif.",
            "Memimpin berbagai proyek berisiko tinggi yang berinteraksi dengan mitra perusahaan dan entitas pemerintah.",
            "Menunjukkan keunggulan yang konsisten dalam pelaksanaan operasional dan implementasi digital strategis."
        ],
        impactMetrics: [
            "Mempertahankan posisi akademik 5% teratas (IPK 3,87) sambil memimpin inisiatif organisasi besar.",
            "Berhasil memelopori proyek komunitas yang didukung oleh entitas perusahaan besar.",
            "Rekam jejak terbukti dalam meningkatkan profitabilitas dan efisiensi dalam peran operasional UMKM."
        ],
        keySkills: ["Perencanaan Strategis", "Transformasi Digital", "Kepemimpinan Lintas Fungsional", "Manajemen Pemangku Kepentingan"]
    }
};

