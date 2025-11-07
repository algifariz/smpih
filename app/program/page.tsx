"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function ProgramPage() {
  // Programs data
  const programs = [
    {
      icon: "📚",
      title: "Kurikulum Nasional + Islam",
      description: "Memadukan kurikulum Depdiknas dengan pendidikan Islam komprehensif",
      details: [
        "Kurikulum sesuai standar nasional",
        "Integrasi nilai-nilai Islam dalam setiap mata pelajaran",
        "Pembelajaran berbasis karakter",
        "Metode pembelajaran yang menarik dan efektif"
      ]
    },
    {
      icon: "🕌",
      title: "Tahfizh Al-Qur'an",
      description: "Program tahfizh dengan metode bersanad dan hafalan 30 Juz",
      details: [
        "Metode tahfizh yang mudah dan efektif",
        "Pembimbing ustadz bersertifikat",
        "Target hafalan 30 Juz",
        "Metode muroja'ah yang terstruktur"
      ]
    },
    {
      icon: "🏫",
      title: "Boarding School",
      description: "Sistem boarding dengan pengasuhan 24 jam dalam lingkungan Islami",
      details: [
        "Pengasuhan 24 jam oleh asatidz profesional",
        "Lingkungan yang aman dan Islami",
        "Pembinaan karakter intensif",
        "Fasilitas lengkap dan nyaman"
      ]
    },
    {
      icon: "🏆",
      title: "Prestasi Akademik",
      description: "Unggul dalam bidang akademik dan non-akademik",
      details: [
        "Sistem pembelajaran yang inovatif",
        "Ekstrakurikuler yang beragam",
        "Persiapan untuk olimpiade",
        "Prestasi tingkat kabupaten dan provinsi"
      ]
    },
    {
      icon: "🤝",
      title: "Karakter Islam",
      description: "Pembentukan akhlak mulia dan kepribadian Islami",
      details: [
        "Pembinaan akhlak harian",
        "Teladan dari ustadz dan ustadzah",
        "Program tahsin dan tadrib",
        "Pembiasaan perilaku Islami"
      ]
    },
    {
      icon: "🌟",
      title: "Keterampilan Hidup",
      description: "Pengembangan keterampilan hidup dan Leadership",
      details: [
        "Program leadership training",
        "Keterampilan komunikasi",
        "Keterampilan teknologi",
        "Keterampilan sosial dan empati"
      ]
    }
  ];

  // Curriculum data
  const kurikulum = {
    mapel: [
      { nama: "Bahasa Indonesia", icon: "📝", jam: "6 jam/minggu" },
      { nama: "Matematika", icon: "🔢", jam: "5 jam/minggu" },
      { nama: "IPA", icon: "🔬", jam: "4 jam/minggu" },
      { nama: "IPS", icon: "🌍", jam: "4 jam/minggu" },
      { nama: "Bahasa Inggris", icon: "🌐", jam: "4 jam/minggu" },
      { nama: "PAI", icon: "🕌", jam: "4 jam/minggu" },
      { nama: "Tahfizh Al-Qur'an", icon: "📖", jam: "6 jam/minggu" },
      { nama: "Bahasa Arab", icon: "🔤", jam: "3 jam/minggu" },
      { nama: "PKn", icon: "🏛️", jam: "2 jam/minggu" },
      { nama: "PJOK", icon: "⚽", jam: "3 jam/minggu" },
      { nama: "Seni Budaya", icon: "🎨", jam: "2 jam/minggu" },
      { nama: "Prakarya", icon: "🛠️", jam: "2 jam/minggu" }
    ]
  };

  // Navigation links for footer
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program", active: true },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath="/program" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Program Pendidikan
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Program Unggulan Kami
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Program pendidikan terintegrasi yang menggabungkan kurikulum nasional dengan pendidikan Islam untuk menghasilkan generasi Qur'an yang unggul
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="programs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="programs-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Program Pendidikan
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
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
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Kurikulum
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Struktur Kurikulum
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Kurikulum yang memadukan pembelajaran akademik denganpendidikan Islam yang komprehensif
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {kurikulum.mapel.map((mapel, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl sm:text-3xl" aria-hidden="true">{mapel.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{mapel.nama}</h3>
                      <p className="text-blue-600 text-xs sm:text-sm font-medium">{mapel.jam}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Method */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Metode
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Metode Pembelajaran
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">👨‍🏫</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Pembelajaran Interaktif</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Metode pembelajaran yang melibatkan siswa secara aktif dengan diskusi, presentasi, dan teamwork
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">💻</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Teknologi Pembelajaran</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Integrasi teknologi dalam pembelajaran untuk membuat proses belajar lebih menarik dan efektif
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🤝</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Pembelajaran Kolaboratif</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Pembelajaran melalui kelompok kerja yang mengajarkan siswa untuk berinteraksi dan bekerja sama
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Tertarik dengan Program Kami?
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Bergabunglah dengan keluarga besar SMP Islam Hegarmanah dan wujudkan cita-cita menjadi generasi Qur'an yang unggul
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-5 justify-center">
              <button className="px-6 sm:px-9 py-3 sm:py-4 bg-white text-blue-800 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30">
                Daftar Sekarang
              </button>
              <button className="px-6 sm:px-9 py-3 sm:py-4 bg-transparent text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-white/30">
                Hubungi Kami
              </button>
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
                        className={`hover:text-white transition-colors focus:outline-none focus:text-white text-sm ${
                          link.active ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                        }`}
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
      </footer>
    </div>
  );
}