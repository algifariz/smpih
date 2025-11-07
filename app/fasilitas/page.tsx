"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function FasilitasPage() {
  // Facilities data
  const facilities = [
    {
      id: 1,
      icon: "🏢",
      title: "Gedung Modern",
      description: "Ruang kelas ber-AC dengan teknologi modern",
      details: [
        "30 ruang kelas ber-AC dan projector",
        "Sistem pendingin dan ventilasi yang baik",
        "Pencahayaan alami dan buatan yang optimal",
        "Pondasi anti-gempa dan tahan api"
      ],
      images: ["/fasilitas-gedung1.jpg", "/fasilitas-gedung2.jpg"]
    },
    {
      id: 2,
      icon: "📖",
      title: "Perpustakaan",
      description: "Koleksi buku lengkap dan digital",
      details: [
        "Koleksi 15.000+ buku referensi",
        "E-library dengan akses internet",
        "Ruang baca yang nyaman dan tenang",
        "Layanan referensi dan penelitian"
      ],
      images: ["/fasilitas-perpus1.jpg", "/fasilitas-perpus2.jpg"]
    },
    {
      id: 3,
      icon: "🔬",
      title: "Laboratorium",
      description: "Lab IPA, IPS, dan Bahasa lengkap",
      details: [
        "Lab IPA dengan alat praktikum modern",
        "Lab Bahasa dengan sistem audio-visual",
        "Lab IPS dengan globe dan peta besar",
        "Fasilitas praktikum untuk semua mata pelajaran"
      ],
      images: ["/fasilitas-lab1.jpg", "/fasilitas-lab2.jpg"]
    },
    {
      id: 4,
      icon: "🏃",
      title: "Lapangan Olahraga",
      description: "Fasilitas olahraga standar nasional",
      details: [
        "Lapangan basket dan voli",
        "Lintasan lari 400 meter",
        "Area olahraga dalam ruang (gymnasium)",
        "Fasilitas untuk senam dan bulu tangkis"
      ],
      images: ["/fasilitas-olahraga1.jpg", "/fasilitas-olahraga2.jpg"]
    },
    {
      id: 5,
      icon: "🕌",
      title: "Masjid",
      description: "Masjid besar untuk ibadah dan kegiatan",
      details: [
        "Kapasitas 1.000 jemaah",
        "Sistem audio dan sound system",
        "Ruang aula untuk kegiatan keagamaan",
        "Fasilitas wc dan tempat wudhu"
      ],
      images: ["/fasilitas-masjid1.jpg", "/fasilitas-masjid2.jpg"]
    },
    {
      id: 6,
      icon: "🏠",
      title: "Asrama",
      description: "Asrama nyaman dengan pengasuhan 24/7",
      details: [
        "60 kamar asrama dengan AC",
        "Kamar tidur 4-6 orang per kamar",
        "Fasilitas mandi dengan air panas",
        "Dapur asrama dan ruang makan"
      ],
      images: ["/fasilitas-asrama1.jpg", "/fasilitas-asrama2.jpg"]
    },
    {
      id: 7,
      icon: "🍽️",
      title: "Kantin",
      description: "Dapur dan kantin modern",
      details: [
        "Dapur modern dengan standar higiene",
        "Kantin dengan kapasitas 500 orang",
        "Menu sehat dan bergizi",
        "Fasilitas tempat sampah otomatis"
      ],
      images: ["/fasilitas-kantin1.jpg", "/fasilitas-kantin2.jpg"]
    },
    {
      id: 8,
      icon: "🏥",
      title: "Klinik Kesehatan",
      description: "Klinik dengan tenaga medis profesional",
      details: [
        "Dokter dan perawat 24 jam",
        "Ruang tindakan dan ruang inap",
        "Obat-obat lengkap dan memadai",
        "Konsultasi kesehatan gratis"
      ],
      images: ["/fasilitas-klinik1.jpg", "/fasilitas-klinik2.jpg"]
    },
    {
      id: 9,
      icon: "🅿️",
      title: "Tempat Parkir",
      description: "Area parkir luas dan aman",
      details: [
        "Parkir roda 4 dan roda 2 terpisah",
        "Sistem keamanan dan CCTV",
        "Naungan dan teras perlindungan",
        "Akses mudah dan keluar masuk"
      ],
      images: ["/fasilitas-parkir1.jpg", "/fasilitas-parkir2.jpg"]
    }
  ];

  // Navigation links for footer
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas", active: true },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ];

  return (
    <div className="min-h-screen bg-white">

      <Navbar currentPath="/fasilitas" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Fasilitas
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Fasilitas Modern & Lengkap
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Fasilitas modern dan lengkap yang mendukung proses pembelajaran dan pembentukan karakter siswa
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-1 sm:mb-2">9</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Kategori Fasilitas</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-1 sm:mb-2">30+</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Ruang Kelas AC</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-1 sm:mb-2">15K+</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Buku Perpustakaan</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-1 sm:mb-2">24/7</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Layanan Fasilitas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="facilities-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="facilities-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Daftar Fasilitas
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Fasilitas-fasilitas modern yang mendukung kenyamanan belajar dan pengasuhan siswa
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" role="list" aria-label="Daftar fasilitas">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                  role="listitem"
                >
                  {/* Header dengan icon */}
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl sm:text-5xl" aria-hidden="true">{facility.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{facility.title}</h3>
                        <p className="text-blue-200 text-sm sm:text-base">{facility.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {facility.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Image placeholders */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Gambar 1</span>
                      </div>
                      <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Gambar 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Teknologi
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Fasilitas Teknologi
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Internet & WiFi</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Akses internet berkecepatan tinggi dan WiFi di seluruh area sekolah
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Sistem Informasi</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Sistem informasi terintegrasi untuk pembelajaran dan administrasi
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Keamanan</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Sistem keamanan 24 jam dengan CCTV dan petugas keamanan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Perawatan
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Perawatan Fasilitas
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Program Perawatan Rutin</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Pembersihan harian semua area</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Pemeliharaan perangkat teknologi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Inspeksi keselamatan berkala</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Standar Kualitas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">ISO 9001:2015 Sertifikasi Mutu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Sertifikat Keamanan & Kesehatan</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">★</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Standar Lingkungan Hijau</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Fasilitas Terdepan di Indonesia
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Fasilitas modern yang mendukung pembelajaran optimal dan pembentukan karakter siswa
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-5 justify-center">
              <button className="px-6 sm:px-9 py-3 sm:py-4 bg-white text-blue-800 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30">
                Lihat Video Tour
              </button>
              <button className="px-6 sm:px-9 py-3 sm:py-4 bg-transparent text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-white/30">
                Kunjungi Sekolah
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