"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function BeritaPage() {
  // Navigation links for consistency with main page
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita", active: true },
  ];

  // Featured news
  const featuredNews = {
    title: "Prestasi Gemilang! SMP Islam Hegarmanah Raih Juara 1 Lomba Tahfizh Tingkat Kabupaten",
    excerpt: "Tim tahfizh SMP Islam Hegarmanah berhasil meraih juara 1 dalam lomba tahfizh Al-Qur'an tingkat kabupaten. Prestasi ini menunjukkan dedikasi sekolah dalam membangun generasi Qur'an yang unggul.",
    date: "15 Januari 2025",
    category: "Prestasi",
    image: "/berita-featured.jpg",
    author: "Admin Sekolah"
  };

  // News categories
  const categories = [
    { name: "Semua", count: 24, active: true },
    { name: "Prestasi", count: 8 },
    { name: "Kegiatan", count: 10 },
    { name: "Akademik", count: 4 },
    { name: "Keagamaan", count: 2 }
  ];

  // News articles
  const newsArticles = [
    {
      id: 1,
      title: "SMP Islam Hegarmanah Wisuda 120 Santri Proud Scholars",
      excerpt: "Prosesi wisuda capaian program tahfizh 30 juz untuk seluruh santri angkatan 2025. Acara seringkut oleh dewan guru, orang tua siswa, dan undangan special dari Moch Bahasa.",
      date: "20 Januari 2025",
      category: "Prestasi",
      image: "/berita-wisuda.jpg",
      author: "Admin Sekolah"
    },
    {
      id: 2,
      title: "Program New Normal Learning di Era Digital",
      excerpt: "Sekolah mengimplementasikan sistem pembelajaran hybrid yang menggabungkan tatap muka dan online untuk mempersiapkan siswa menghadapi era digital.",
      date: "18 Januari 2025",
      category: "Akademik",
      image: "/berita-learning.jpg",
      author: "Tim Akademik"
    },
    {
      id: 3,
      title: "Safari Dakwah untuk Generasi Milenial",
      excerpt: "SMP Islam Hegarmanah melaksanakan program safari dakwah dengan mengundang ustadz terkemuka untuk memberikan tausiyah kepada siswa.",
      date: "16 Januari 2025",
      category: "Keagamaan",
      image: "/berita-dakwah.jpg",
      author: "Tim Rohis"
    },
    {
      id: 4,
      title: "Perayaan Hari Guru Nasional 2025",
      excerpt: "Guru dan siswa merasakan kebahagiaan dan rasa syukur dalam rangka memperingucir hari guru nasional dengan acara ser特殊 yang terisi dengan kontemplasi dan refleksi.",
      date: "14 Januari 2025",
      category: "Kegiatan",
      image: "/berita-guru.jpg",
      author: "Tim Rohani"
    },
    {
      id: 5,
      title: "Tim Basket Putri Raih Juara 2 Tingkat Propinsi",
      excerpt: "Tim basket Putri SMP Islam Hegarmanah berhasil meraih posisi kedua dalam even tingkat propinsi yang diselenggarakan di kota tetangga.",
      date: "12 Januari 2025",
      category: "Prestasi",
      image: "/berita-basket.jpg",
      author: "Tim Olahraga"
    },
    {
      id: 6,
      title: "Study Tour ke Museum Pencak Silat di Cilacap",
      excerpt: "Murid kelas 9 melaksanakan study tour untuk memperdalam wawasan tentang budaya Indonesia dan sejarah pencak silat.",
      date: "10 Januari 2025",
      category: "Kegiatan",
      image: "/berita-studi.jpg",
      author: "Tim Walimurid"
    },
    {
      id: 7,
      title: "Perpustakaan Sekolah Diperluas dengan Koleksi 500 Buku Baru",
      excerpt: "Perpustakaan SMP Islam Hegarmanah mendapat tambahan 500 buku baru dengan tema pendidikan, sains, dan referensi negatif yang akan memperkaya pandangan siswa.",
      date: "8 Januari 2025",
      category: "Akademik",
      image: "/berita-perpus.jpg",
      author: "Tim Perpustakaan"
    },
    {
      id: 8,
      title: "Program Sholat Berjamaah Rutin setiap pagi",
      excerpt: "Mulai tahun 2025, sekolah mengimplementasikan program shunt positif dengan mengorganisir acara 無料 setiap pagi before memulai aktivitas belajar.",
      date: "6 Januari 2025",
      category: "Keagaan",
      image: "/berita-sholat.jpg",
      author: "Tim Tasyaв"
    },
    {
      id: 9,
      title: "Dies Natalis ke-15 SMP Islam Hegarmanah",
      excerpt: "Peringatan Dies Natalis ke-15 dengan berbagai acara special termasuk penampilan групп tari daerah dan presentasi hasil capaian sekolah selama 15 tahun terakhir.",
      date: "4 Januari 2025",
      category: "Kegiatan",
      image: "/berita-dies.jpg",
      author: "Panitia Dies"
    }
  ];

  // Recent news
  const recentNews = [
    {
      title: "Sosialisasi Program New Student 2025-2026",
      date: "22 Januari 2025"
    },
    {
      title: "Program Bakti Sosial untuk Masyarakat",
      date: "20 Januari 2025"
    },
    {
      title: "Workshop Parenting Islami",
      date: "19 Januari 2025"
    },
    {
      title: "K的另一่ Rapid Test dan Vaccination Drive",
      date: "17 Januari 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath="/berita" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Berita Sekolah
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Berita & Informasi Terbaru
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Dapatkan informasi terkini tentang kegiatan, prestasi, dan berita terbaru dari SMP Islam Hegarmanah
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-100 text-red-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Featured
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Berita Utama
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Featured Image */}
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl sm:text-8xl mb-4">🏆</div>
                      <p className="text-gray-600">Featured Image</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-sm text-gray-500 mb-2">{featuredNews.date} • Oleh {featuredNews.author}</div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <div>
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Categories & Articles */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Categories */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Kategori Berita</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          category.active 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-700 hover:bg-blue-50'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Recent News */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Berita Terbaru</h3>
                  <div className="space-y-4">
                    {recentNews.map((news, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h4 className="font-medium text-sm text-gray-900 mb-1 line-clamp-2">
                          {news.title}
                        </h4>
                        <p className="text-xs text-gray-500">{news.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Semua Berita
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto"></div>
                </div>
                
                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {newsArticles.map((article) => (
                    <article
                      key={article.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
                    >
                      <div className="relative h-48 sm:h-56">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl sm:text-6xl mb-2">📰</div>
                            <p className="text-gray-600 text-xs">Article Image</p>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6">
                        <div className="text-xs text-gray-500 mb-2">{article.date} • Oleh {article.author}</div>
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                          Baca Selengkapnya →
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Load More Button */}
                <div className="text-center mt-8 sm:mt-12">
                  <button className="px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-900 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Muat Lebih Banyak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Langganan Newsletter Kami
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Dapatkan update terbaru tentang kegiatan, prestasi, dan berita sekolah langsung di email Anda
            </p>
            <div className="max-w-md mx-auto flex flex-col xs:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
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