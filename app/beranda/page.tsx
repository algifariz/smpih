"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";

export default function BerandaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized data untuk performa yang lebih baik
  const navLinks = useMemo(() => [
    { href: "/beranda", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kontak", label: "Kontak" },
  ], []);

  const stats = useMemo(() => [
    { number: "500+", label: "Siswa Aktif" },
    { number: "50+", label: "Guru Profesional" },
    { number: "100+", label: "Prestasi" },
    { number: "15+", label: "Tahun Berpengalaman" },
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
      <nav className="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Navigasi utama">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-1">
              <button
                onClick={() => scrollToSection('beranda')}
                className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 border-b-2 border-blue-800 hover:border-blue-600 transition-colors">BERANDA</button>
              
              {/* Profil Sekolah Dropdown */}
              <div className="relative group">
                <button className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 flex items-center transition-colors">
                  PROFIL SEKOLAH
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-md">Sejarah</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Visi & Misi</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-md">Struktur Organisasi</a>
                </div>
              </div>
              
              {/* Akademik Dropdown */}
              <div className="relative group">
                <button className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 flex items-center transition-colors">
                  AKADEMIK
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-md">Kurikulum</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Program Pembelajaran</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-md">Kalender Akademik</a>
                </div>
              </div>
              
              {/* Ekstrakurikuler Dropdown */}
              <div className="relative group">
                <button className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 flex items-center transition-colors">
                  EKSTRAKURIKULER
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-md">Tahfidz Quran</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pramuka</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-md">Seni & Olahraga</a>
                </div>
              </div>
              
              {/* Informasi Dropdown */}
              <div className="relative group">
                <button className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 flex items-center transition-colors">
                  INFORMASI
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-md">Berita</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Pengumuman</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-md">Agenda Kegiatan</a>
                </div>
              
              {/* Galeri Dropdown */}
              <div className="relative group">
                <button className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 flex items-center transition-colors">
                  GALERI
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-t-md">Kegiatan Siswa</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Prestasi</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-b-md">Album Wisuda</a>
                </div>
              </div>
              
              <button
                onClick={() => scrollToSection('fasilitas')}
                className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 transition-colors">FASILITAS</button>
              <button
                onClick={() => scrollToSection('galeri')}
                className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 transition-colors">GALERI</button>
              <button
                onClick={() => scrollToSection('kontak')}
                className="py-4 px-3 text-blue-800 font-semibold text-sm hover:text-blue-600 transition-colors">KONTAK</button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
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
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    scrollToSection('beranda');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md">BERANDA</button>
                
                <div className="relative">
                  <details className="group">
                    <summary className="block px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md cursor-pointer">PROFIL SEKOLAH ▼</summary>
                    <div className="bg-gray-50 ml-4 mt-1 rounded-md">
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Sejarah</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Visi & Misi</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Struktur Organisasi</a>
                    </div>
                  </details>
                </div>
                
                <div className="relative">
                  <details className="group">
                    <summary className="block px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md cursor-pointer">AKADEMIK ▼</summary>
                    <div className="bg-gray-50 ml-4 mt-1 rounded-md">
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Kurikulum</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Program Pembelajaran</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Kalender Akademik</a>
                    </div>
                  </details>
                </div>
                
                <div className="relative">
                  <details className="group">
                    <summary className="block px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md cursor-pointer">EKSTRAKURIKULER ▼</summary>
                    <div className="bg-gray-50 ml-4 mt-1 rounded-md">
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Tahfidz Quran</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Pramuka</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Seni & Olahraga</a>
                    </div>
                  </details>
                </div>
                
                <div className="relative">
                  <details className="group">
                    <summary className="block px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md cursor-pointer">INFORMASI ▼</summary>
                    <div className="bg-gray-50 ml-4 mt-1 rounded-md">
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Berita</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Pengumuman</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Agenda Kegiatan</a>
                    </div>
                  </details>
                </div>
                
                <div className="relative">
                  <details className="group">
                    <summary className="block px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md cursor-pointer">GALERI ▼</summary>
                    <div className="bg-gray-50 ml-4 mt-1 rounded-md">
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Kegiatan Siswa</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Prestasi</a>
                      <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Album Wisuda</a>
                    </div>
                  </details>
                </div>
                
                <button
                  onClick={() => {
                    scrollToSection('fasilitas');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md">FASILITAS</button>
                <button
                  onClick={() => {
                    scrollToSection('galeri');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md">GALERI</button>
                <button
                  onClick={() => {
                    scrollToSection('kontak');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-blue-800 font-semibold hover:bg-blue-50 rounded-md">KONTAK</button>
              </div>
            </div>
          )}
          </div>
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
                <button
                  onClick={() => scrollToSection("kontak")}
                  className="px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-800 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800"
                  aria-label="Daftar sekarang ke SMP Islam Hegarmanah"
                >
                  Daftar Sekarang
                </button>
                <button
                  onClick={() => scrollToSection("tentang")}
                  className="px-6 sm:px-9 py-3 sm:py-4 bg-transparent text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-800 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-blue-800"
                  aria-label="Pelajari lebih lanjut tentang sekolah"
                >
                  Pelajari Lebih Lanjut
                </button>
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
                        aria-label={`Navigasi ke bagian ${link.label}`}
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
        </div>
      </footer>
    </div>
  );
}