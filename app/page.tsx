"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";

export default function SMPIslamHegarmanah() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized data untuk performa yang lebih baik
  const navLinks = useMemo(() => [
    { href: "/", label: "Beranda", active: true },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ], []);

  const stats = useMemo(() => [
    { number: "500+", label: "Siswa Aktif" },
    { number: "50+", label: "Guru Profesional" },
    { number: "100+", label: "Prestasi" },
    { number: "15+", label: "Tahun Berpengalaman" },
  ], []);

  // Centralized teachers data (19 teachers total)
  const teachers = useMemo(() => [
    {
      id: 1,
      name: "Dr. H. Abdul Rahman, M.Pd",
      position: "Kepala Sekolah",
      subject: "Pendidikan Agama Islam",
      experience: "20 Tahun Pengalaman",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Ustadzah Dra. Hj. Siti Aminah",
      position: "Koordinator Tahfizh",
      subject: "Tahfizh Al-Qur'an & Hadits",
      experience: "18 Tahun Pengalaman",
      avatar: "👩‍🏫"
    },
    {
      id: 3,
      name: "Bapak Ir. Muhammad Zaenal",
      position: "Guru Matematika",
      subject: "Matematika & Fisika",
      experience: "15 Tahun Pengalaman",
      avatar: "👨‍🔬"
    },
    {
      id: 4,
      name: "Ustadzah S.Pd.I Fatimah Zahra",
      position: "Guru Bahasa Arab",
      subject: "Bahasa Arab & Akidah Akhlak",
      experience: "12 Tahun Pengalaman",
      avatar: "👩‍🎓"
    },
    {
      id: 5,
      name: "Bapak Drs. Eko Prasetyo",
      position: "Guru IPS",
      subject: "IPS & Sejarah Indonesia",
      experience: "14 Tahun Pengalaman",
      avatar: "👨‍💻"
    },
    {
      id: 6,
      name: "Ustadzah S.Pd Nurul Hidayah",
      position: "Guru Bahasa Indonesia",
      subject: "Bahasa Indonesia & Sastra",
      experience: "10 Tahun Pengalaman",
      avatar: "👩‍💼"
    },
    {
      id: 7,
      name: "Bapak M. Nur Ichsan, S.Pd",
      position: "Guru IPA",
      subject: "IPA & Kimia",
      experience: "13 Tahun Pengalaman",
      avatar: "👨‍🔬"
    },
    {
      id: 8,
      name: "Ustadzah Siti Rahayu, M.Pd",
      position: "Guru PKn",
      subject: "Pendidikan Kewarganegaraan",
      experience: "11 Tahun Pengalaman",
      avatar: "👩‍🏫"
    },
    {
      id: 9,
      name: "Bapak Ahmad Fauzi, S.Pd",
      position: "Guru PJOK",
      subject: "Pendidikan Jasmani",
      experience: "9 Tahun Pengalaman",
      avatar: "🏃‍♂️"
    },
    {
      id: 10,
      name: "Ustadzah Rina Sari, S.Pd",
      position: "Guru Seni Budaya",
      subject: "Seni Musik & Tari",
      experience: "8 Tahun Pengalaman",
      avatar: "🎨"
    },
    {
      id: 11,
      name: "Bapak Yusuf Setiawan, S.T",
      position: "Guru Teknologi",
      subject: "TIK & Robotika",
      experience: "12 Tahun Pengalaman",
      avatar: "💻"
    },
    {
      id: 12,
      name: "Ustadzah Melinda, S.Pd.I",
      position: "Guru Fiqih",
      subject: "Fiqih & Akhlak",
      experience: "16 Tahun Pengalaman",
      avatar: "👩‍🎓"
    },
    {
      id: 13,
      name: "Bapak Hamzah, M.Ag",
      position: "Guru Hadits",
      subject: "Hadits & Tafsir",
      experience: "22 Tahun Pengalaman",
      avatar: "📚"
    },
    {
      id: 14,
      name: "Ustadzah Dewi Lestari, S.Pd",
      position: "Guru Bahasa Inggris",
      subject: "Bahasa Inggris",
      experience: "10 Tahun Pengalaman",
      avatar: "🌍"
    },
    {
      id: 15,
      name: "Bapak Rudi Hartono, S.Pd",
      position: "Guru Ekonomi",
      subject: "IPS Ekonomi",
      experience: "14 Tahun Pengalaman",
      avatar: "💰"
    },
    {
      id: 16,
      name: "Ustadzah Aisyah, M.Pd",
      position: "Guru Geografi",
      subject: "IPS Geografi",
      experience: "13 Tahun Pengalaman",
      avatar: "🗺️"
    },
    {
      id: 17,
      name: "Bapak Dedi Kurniawan, S.Pd",
      position: "Guru Sosiologi",
      subject: "IPS Sosiologi",
      experience: "11 Tahun Pengalaman",
      avatar: "👥"
    },
    {
      id: 18,
      name: "Ustadzah Nuryanti, S.Pd",
      position: "Guru Akidah",
      subject: "Akidah & Akhlak",
      experience: "17 Tahun Pengalaman",
      avatar: "🤲"
    },
    {
      id: 19,
      name: "Bapak Halim, M.Ag",
      position: "Guru SKI",
      subject: "Sejarah Kebudayaan Islam",
      experience: "19 Tahun Pengalaman",
      avatar: "🕌"
    }
  ], []);

  

  // Centralized gallery data
  const galleryItems = useMemo(() => [
    { id: 1, title: "Kegiatan Pembelajaran", emoji: "📚", category: "Akademik" },
    { id: 2, title: "Sholat Berjamaah", emoji: "🕌", category: "Ibadah" },
    { id: 3, title: "Olahraga Bersama", emoji: "⚽", category: "Olahraga" },
    { id: 4, title: "Hafalan Al-Qur'an", emoji: "📖", category: "Tahfizh" },
    { id: 5, title: "Kegiatan Seni", emoji: "🎨", category: "Seni" },
    { id: 6, title: "Pramuka", emoji: "🏕️", category: "Ekstrakurikuler" },
    { id: 7, title: "Perpustakaan", emoji: "📚", category: "Fasilitas" },
    { id: 8, title: "Masjid Sekolah", emoji: "🕌", category: "Fasilitas" }
  ], []);

  // Centralized programs data
  const programs = useMemo(() => [
    {
      icon: "📚",
      title: "Kurikulum Nasional + Islam",
      description: "Memadukan kurikulum Depdiknas dengan pendidikan Islam komprehensif"
    },
    {
      icon: "🕌",
      title: "Tahfizh Al-Qur'an",
      description: "Program tahfizh dengan metode bersanad dan hafalan 30 Juz"
    },
    {
      icon: "🏫",
      title: "Boarding School",
      description: "Sistem boarding dengan pengasuhan 24 jam dalam lingkungan Islami"
    },
    {
      icon: "🏆",
      title: "Prestasi Akademik",
      description: "Unggul dalam bidang akademik dan non-akademik"
    },
    {
      icon: "🤝",
      title: "Karakter Islam",
      description: "Pembentukan akhlak mulia dan kepribadian Islami"
    },
    {
      icon: "🌟",
      title: "Keterampilan Hidup",
      description: "Pengembangan keterampilan hidup dan Leadership"
    }
  ], []);

  // Centralized facilities data
  const facilities = useMemo(() => [
    { icon: "🏢", title: "Gedung Modern", desc: "Ruang kelas ber-AC dengan teknologi modern" },
    { icon: "📖", title: "Perpustakaan", desc: "Koleksi buku lengkap dan digital" },
    { icon: "🔬", title: "Laboratorium", desc: "Lab IPA, IPS, dan Bahasa lengkap" },
    { icon: "🏃", title: "Lapangan Olahraga", desc: "Fasilitas olahraga standar nasional" },
    { icon: "🕌", title: "Masjid", desc: "Masjid besar untuk ibadah dan kegiatan" },
    { icon: "🏠", title: "Asrama", desc: "Asrama nyaman dengan pengasuhan 24/7" }
  ], []);

  

  // Memoized scroll function untuk performa
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  }, []);

  // Toggle mobile menu dengan debouncing
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    // Passive listener untuk performa yang lebih baik
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation untuk aksesibilitas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-800 text-white px-4 py-2 rounded-lg font-medium"
      >
        Lewati ke konten utama
      </a>
      
      {/* Top Bar - Blue Contact Info & Search */}
      <div className="bg-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Left side - Contact info */}
            <div className="flex items-center space-x-4 text-xs mb-2 sm:mb-0">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ummi.ac.id
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (0266) 218 345
              </div>
            </div>
            
            {/* Right side - Search and language */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
                <input
                  type="text"
                  placeholder="Cari di sini..."
                  className="bg-transparent text-white placeholder-white/70 text-xs focus:outline-none w-24 sm:w-32"
                />
                <button className="text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="text-xs bg-white/20 px-2 py-1 rounded">ID</button>
                <button className="text-xs bg-white/10 px-2 py-1 rounded">EN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo & Branding Section */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              {/* Logo */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/logo.jpg"
                  alt="Logo SMP Islam Hegarmanah"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Vertical separator */}
              <div className="mx-4 h-12 w-px bg-gray-300 hidden sm:block"></div>
              
              {/* Brand Info */}
              <div className="text-center sm:text-left">
                <div className="flex items-center">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">SMP ISLAM HEGARMANAH</h1>
                  <span className="ml-3 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">2<sup>nd</sup></span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Membangun Generasi Qur'an yang Unggul dan Berkarakter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     {/* Navigation Menu */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`} role="navigation" aria-label="Navigasi utama">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-4 px-3 font-semibold text-sm hover:text-blue-600 transition-colors ${
                    link.active ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block w-full text-left px-3 py-2 font-semibold hover:bg-blue-50 rounded-md transition-colors ${
                      link.active ? 'text-blue-800 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content">
        <section
          id="beranda"
          className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 min-h-screen flex items-center"
          role="banner"
          aria-label="Hero section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="text-center text-white max-w-5xl mx-auto">

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in">
                Mewujudkan Generasi Cerdas, Mandiri, dan Berakhlak Qur'an
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Sekolah Islam Terpadu dengan sistem Boarding School dan program Tahfizh Al-Qur'an bersanad
              </p>
              
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-5 justify-center mb-12 sm:mb-20 animate-fade-in">
                <a
                  href="/berita"
                  className="px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-800 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800 inline-block text-center"
                  aria-label="Lihat berita terbaru SMP Islam Hegarmanah"
                >
                  Berita Terbaru
                </a>
                <a
                  href="/tentang"
                  className="px-6 sm:px-9 py-3 sm:py-4 bg-transparent text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-800 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-blue-800 inline-block text-center"
                  aria-label="Pelajari lebih lanjut tentang sekolah"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>

              {/* Floating Card */}
              <div className="animate-bounce max-w-xs sm:max-w-lg mx-auto mb-12 sm:mb-16">
                
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto" role="list" aria-label="Statistik sekolah">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center border border-white/20 hover:scale-105 transition-all duration-300"
                    role="listitem"
                  >
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2" aria-label={`${stat.number} ${stat.label}`}>{stat.number}</div>
                    <div className="text-blue-200 text-xs sm:text-sm lg:text-base leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

     
        {/* About Section */}
        <section id="tentang" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50" aria-labelledby="tentang-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm" role="status">
                  Tentang Kami
                </div>
                <h2 id="tentang-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Tentang SMP ISLAM HEGARMANAH
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded" aria-hidden="true"></div>
                <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Lembaga pendidikan Islam terpadu yang memadukan kurikulum nasional dengan pendidikan agama Islam yang komprehensif,
                  menghasilkan generasi yang cerdas secara intelektual dan spiritual.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">Kurikulum Nasional + Pendidikan Islam</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">Sistem Boarding School</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base">Program Tahfizh Al-Qur'an Bersanad</p>
                  </div>
                </div>
              </div>
              
              {/* Right content - Visual element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 sm:p-12 text-center">
                  <div className="text-6xl sm:text-8xl mb-6" aria-hidden="true">🏫</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Pendidikan Berkualitas</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Menghasilkan lulusan yang siap melanjutkan kejenjang pendidikan dengan dasar moral yang kuat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="program" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white" aria-labelledby="program-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7" role="status">
                Program Pendidikan
              </div>
              <h2 id="program-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Program Unggulan Kami
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10" aria-hidden="true"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Program pendidikan">
              {programs.map((program, index) => (
                <div
                  key={`program-${index}`}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  role="listitem"
                >
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6" aria-hidden="true">{program.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers Section - Replaced by carousel above */}

        {/* Facilities Section */}
        <section id="fasilitas" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white" aria-labelledby="fasilitas-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7" role="status">
                Fasilitas
              </div>
              <h2 id="fasilitas-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Fasilitas Modern & Lengkap
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10" aria-hidden="true"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Fasilitas sekolah">
              {facilities.map((facility, index) => (
                <div
                  key={`facility-${index}`}
                  className="flex items-center space-x-4 p-4 sm:p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                  role="listitem"
                >
                  <div className="text-3xl sm:text-4xl flex-shrink-0" aria-hidden="true">{facility.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">{facility.title}</h3>
                    <p className="text-gray-600 text-sm leading-tight">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
   {/* Teachers Carousel Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="teachers-carousel-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 id="teachers-carousel-heading" className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tim Pengajar Kami
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-6">
                {/* Teachers items for seamless loop - duplicated for continuous scrolling */}
                {[...teachers, ...teachers].map((guru, index) => (
                  <div
                    key={`teacher-carousel-${guru.id}-${index}`}
                    className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                  >
                    <div className="p-6 text-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <div className="text-4xl sm:text-5xl">{guru.avatar}</div>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{guru.name}</h4>
                      <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">{guru.position}</p>
                      <p className="text-gray-600 text-xs mb-2">{guru.subject}</p>
                      <p className="text-gray-500 text-xs">{guru.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Teacher categories info */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Tim Pengajar SMP Islam Hegarmanah ({teachers.length} Guru Professional)
              </p>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="news-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 id="news-heading" className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Berita Terbaru
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {[
                {
                  title: "Prestasi Gemilang! SMP Islam Hegarmanah Raih Juara 1 Lomba Tahfizh Tingkat Kabupaten",
                  excerpt: "Tim tahfizh SMP Islam Hegarmanah berhasil meraih juara 1 dalam lomba tahfizh Al-Qur'an tingkat kabupaten.",
                  date: "15 Januari 2025",
                  category: "Prestasi",
                  emoji: "🏆"
                },
                {
                  title: "SMP Islam Hegarmanah Wisuda 120 Santri Proud Scholars",
                  excerpt: "Prosesi wisuda capaian program tahfizh 30 juz untuk seluruh santri angkatan 2025.",
                  date: "20 Januari 2025",
                  category: "Prestasi",
                  emoji: "🎓"
                },
                {
                  title: "Program New Normal Learning di Era Digital",
                  excerpt: "Sekolah mengimplementasikan sistem pembelajaran hybrid yang menggabungkan tatap muka dan online.",
                  date: "18 Januari 2025",
                  category: "Akademik",
                  emoji: "💻"
                }
              ].map((news, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                >
                  <div className="relative h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-5xl">{news.emoji}</div>
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="text-xs text-gray-500 mb-2">{news.date}</div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <a
                      href="/berita"
                      className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                    >
                      Baca Selengkapnya →
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <a
                href="/berita"
                className="px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-900 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Lihat Semua Berita
              </a>
            </div>
          </div>
        </section>

        {/* Image Gallery Carousel Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="gallery-carousel-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 id="gallery-carousel-heading" className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Galeri Kegiatan
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-6">
                {/* Gallery items for seamless loop - duplicated for continuous scrolling */}
                {[...galleryItems, ...galleryItems].map((item, index) => (
                  <div
                    key={`gallery-carousel-${item.id}-${index}`}
                    className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <div className="text-6xl sm:text-7xl">{item.emoji}</div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-xs">Klik untuk melihat galeri lengkap</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl flex items-center justify-center" aria-hidden="true">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/logo.jpg"
                      alt="Logo footer"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg sm:text-xl">SMP ISLAM HEGARMANAH</h3>
                  <p className="text-gray-400 text-sm">Purbalingga</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Membangun generasi Qur'an yang unggul dan berkarakter melalui pendidikan terpadu berbasis akhlak mulia.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Menu</h4>
              <nav aria-label="Menu footer">
                <ul className="space-y-2 text-gray-400" role="list">
                  {navLinks.map((link) => (
                    <li key={`footer-${link.href}`} role="listitem">
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors focus:outline-none focus:text-white text-sm"
                        aria-label={`Navigasi ke halaman ${link.label}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Kontak</h4>
              <address className="space-y-2 text-gray-400 not-italic text-sm">
                <p>📍 Hegarmanah, Purbalingga</p>
                <p>📞 <a href="tel:+622811234567" className="hover:text-white transition-colors focus:outline-none focus:text-white">+62 281 123 4567</a></p>
                <p>📧 <a href="mailto:info@smphegarmanah.sch.id" className="hover:text-white transition-colors focus:outline-none focus:text-white">info@smphegarmanah.sch.id</a></p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 text-center text-gray-500 text-xs sm:text-sm">
            © 2025 SMP ISLAM HEGARMANAH. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
