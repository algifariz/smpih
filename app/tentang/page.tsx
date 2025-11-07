"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function TentangPage() {
  // Navigation links for footer
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang", active: true },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ];

  // History timeline data
  const sejarahData = [
    {
      tahun: "2010",
      judul: "Pendirian Sekolah",
      deskripsi: "SMP Islam Hegarmanah didirikan dengan visi membangun generasi Qur'an yang unggul"
    },
    {
      tahun: "2015",
      judul: "Program Boarding School",
      deskripsi: "Mengembangkan sistem boarding school untuk memberikan pengasuhan 24 jam"
    },
    {
      tahun: "2018",
      judul: "Kurikulum Terpadu",
      deskripsi: "Implementasi kurikulum nasional yang dipadukan dengan pendidikan Islam komprehensif"
    },
    {
      tahun: "2020",
      judul: "Akreditasi A",
      deskripsi: "Mendapat akreditasi A dari Badan Akreditasi Nasional Sekolah"
    },
    {
      tahun: "2025",
      judul: "Generasi Unggul",
      deskripsi: "Terus berkembang dengan prestasi gemilang dan lulusan yang berkualitas"
    }
  ];

  // Visi dan Misi data
  const visiMisi = {
    visi: "Menjadi sekolah Islam terpadu yang menghasilkan generasi Qur'an yang unggul, cerdas, dan berkarakter mulia",
    misi: [
      "Menyelenggarakan pendidikan berkualitas yang mengintegrasikan kurikulum nasional dengan pendidikan Islam",
      "Membentuk karakter Islami yang kuat melalui program tahfizh Al-Qur'an dan pembiasaan akhlak mulia",
      "Mengembangkan potensi siswa secara holistik dalam bidang akademik, spiritual, dan sosial",
      "Menciptakan lingkungan belajar yang kondusif dengan sistem boarding school yang terintegrasi",
      "Menhasilkan lulusan yang siap melanjutkan kejenjang pendidikan tinggi dan berguna bagi masyarakat"
    ]
  };

  // Timred data
  const timred = {
    kepala_sekolah: {
      nama: "Dr. H. Abdul Rahman, M.Pd",
      pengalaman: "20 Tahun",
      foto: "👨‍💼"
    },
    komite_sekolah: {
      nama: "H. Ahmad Fauzi, S.E",
      jabatan: " Ketua Komite Sekolah",
      foto: "👨‍💻"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath="/tentang" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Tentang Kami
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
               Profil Sekolah Islam Hegarmanah
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Mengenal lebih dekat tentang sekolah kami, sejarah, visi misi, dan komitmen kami dalam membangun generasi Qur'an yang unggul
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm">
                  Tentang Kami
                </div>
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  SMP Islam Hegarmanah
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

        {/* Visi dan Misi */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Visi & Misi
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Visi dan Misi Sekolah
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Visi */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🎯</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">VISI</h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center">
                  {visiMisi.visi}
                </p>
              </div>
              
              {/* Misi */}
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">📋</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">MISI</h3>
                </div>
                <div className="space-y-3">
                  {visiMisi.misi.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sejarah */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Sejarah
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Perjalanan Sekolah
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {sejarahData.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-5/12`}>
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
                      <div className="text-blue-800 font-bold text-sm sm:text-base mb-2">{item.tahun}</div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{item.judul}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.deskripsi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Organisasi
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Struktur Organisasi
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-6xl mb-4" aria-hidden="true">{timred.kepala_sekolah.foto}</div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{timred.kepala_sekolah.nama}</h3>
                <p className="text-blue-600 font-medium mb-2">Kepala Sekolah</p>
                <p className="text-gray-600 text-sm">Pengalaman: {timred.kepala_sekolah.pengalaman}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-6xl mb-4" aria-hidden="true">{timred.komite_sekolah.foto}</div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{timred.komite_sekolah.nama}</h3>
                <p className="text-blue-600 font-medium">{timred.komite_sekolah.jabatan}</p>
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