"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function GaleriPage() {
  // Navigation links for consistency with main page
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri", active: true },
    { href: "/berita", label: "Berita" },
  ];

  // Memoized gallery data
  const galleryItems = [
    { 
      id: 1,
      image: "/gallery-kegiatan1.jpg", 
      title: "Kegiatan Tahfidz", 
      desc: "Santri sedang menghafal Al-Qur'an bersama ustadz pembimbing",
      category: "Akademik"
    },
    { 
      id: 2,
      image: "/gallery-kegiatan2.jpg", 
      title: "Pramuka", 
      desc: "Anggota pramuka sedang berlatih di alam terbuka",
      category: "Ekstrakurikuler"
    },
    { 
      id: 3,
      image: "/gallery-kegiatan3.jpg", 
      title: "Prestasi Akademik", 
      desc: "Anak didik meraih juara lomba tingkat kabupaten",
      category: "Prestasi"
    },
    { 
      id: 4,
      image: "/gallery-kegiatan4.jpg", 
      title: "Kegiatan Ekstrakurikuler", 
      desc: "Santri berlatih seni dan budaya Islam",
      category: "Ekstrakurikuler"
    },
    { 
      id: 5,
      image: "/gallery-kegiatan5.jpg", 
      title: "Kegiatan Keagamaan", 
      desc: "Santri mengikuti pengajian rutin di masjid sekolah",
      category: "Keagamaan"
    },
    { 
      id: 6,
      image: "/gallery-kegiatan6.jpg", 
      title: "Wisuda", 
      desc: "Prosesi wisuda santri angkatan terbaru",
      category: "Wisuda"
    },
    { 
      id: 7,
      image: "/gallery-kegiatan7.jpg", 
      title: "Study Tour", 
      desc: "Kegiatan study tour ke tempat tempat edukatif",
      category: "Akademik"
    },
    { 
      id: 8,
      image: "/gallery-kegiatan8.jpg", 
      title: "Olahraga", 
      desc: "Pertandingan olahraga antar kelas dalam rangka memperingatan hari besar Islam",
      category: "Ekstrakurikuler"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath="/galeri" />

      {/* Gallery Header Section */}
      <main id="main-content">
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Galeri Kegiatan
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Kegiatan Siswa & Prestasi
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Menyajikan berbagai kegiatan siswa, prestasi, dan momen-momen penting di SMP Islam Hegarmanah
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gray-50" aria-labelledby="galeri-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="galeri-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Galeri Kegiatan
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            {/* Gallery Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              <button className="px-4 py-2 bg-blue-800 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">Semua</button>
              <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-blue-300">Akademik</button>
              <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-blue-300">Ekstrakurikuler</button>
              <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-blue-300">Keagamaan</button>
              <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-blue-300">Prestasi</button>
              <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-blue-300">Wisuda</button>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12" role="list" aria-label="Galeri kegiatan">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  role="listitem"
                >
                  <div className="relative h-60 sm:h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-blue-800/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center">
              <button
                className="px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-900 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white"
                aria-label="Muat lebih banyak kegiatan"
              >
                Muat Lebih Banyak
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