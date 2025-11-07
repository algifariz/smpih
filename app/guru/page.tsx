"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function GuruPage() {
  // Teachers data - 19 teachers total
  const teachers = [
    {
      id: 1,
      name: "Dr. H. Abdul Rahman, M.Pd",
      position: "Kepala Sekolah",
      subject: "Pendidikan Agama Islam",
      experience: "20 Tahun Pengalaman",
      qualification: "S3 Pendidikan Islam, S2 Pendidikan",
      specialization: "Kurikulum & Manajemen Pendidikan",
      achievements: "Akademisi Terbaik 2020, Writer of the Year",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Ustadzah Dra. Hj. Siti Aminah",
      position: "Koordinator Tahfizh",
      subject: "Tahfizh Al-Qur'an & Hadits",
      experience: "18 Tahun Pengalaman",
      qualification: "S2 Pendidikan Islam, Hafidzah 30 Juz",
      specialization: "Metode Tahfizh & Tafsir",
      achievements: "Pembina Tahfizh Terbaik 2019",
      avatar: "👩‍🏫"
    },
    {
      id: 3,
      name: "Bapak Ir. Muhammad Zaenal",
      position: "Guru Matematika",
      subject: "Matematika & Fisika",
      experience: "15 Tahun Pengalaman",
      qualification: "S1 Teknik Elektro",
      specialization: "Matematika Terapan & Fisika",
      achievements: "Guru Matematika Berprestasi 2021",
      avatar: "👨‍🔬"
    },
    {
      id: 4,
      name: "Ustadzah S.Pd.I Fatimah Zahra",
      position: "Guru Bahasa Arab",
      subject: "Bahasa Arab & Akidah Akhlak",
      experience: "12 Tahun Pengalaman",
      qualification: "S2 Pendidikan Bahasa Arab",
      specialization: "Nahwu & Shorof",
      achievements: "Dosen tamu bahasa Arab terbaik",
      avatar: "👩‍🎓"
    },
    {
      id: 5,
      name: "Bapak Drs. Eko Prasetyo",
      position: "Guru IPS",
      subject: "IPS & Sejarah Indonesia",
      experience: "14 Tahun Pengalaman",
      qualification: "S1 Pendidikan Sejarah",
      specialization: "Sejarah & Geografi",
      achievements: "Guru Sejarah Tingkat Kabupaten",
      avatar: "👨‍💻"
    },
    {
      id: 6,
      name: "Ustadzah S.Pd Nurul Hidayah",
      position: "Guru Bahasa Indonesia",
      subject: "Bahasa Indonesia & Sastra",
      experience: "10 Tahun Pengalaman",
      qualification: "S2 Pendidikan Bahasa Indonesia",
      specialization: "Sastra & Metodologi Bahasa",
      achievements: "Penulis cerita anak terbaik",
      avatar: "👩‍💼"
    },
    {
      id: 7,
      name: "Bapak M. Nur Ichsan, S.Pd",
      position: "Guru IPA",
      subject: "IPA & Kimia",
      experience: "13 Tahun Pengalaman",
      qualification: "S1 Pendidikan IPA",
      specialization: "Biologi & Kimia",
      achievements: "Trainer Ilmiah Internasional",
      avatar: "👨‍🔬"
    },
    {
      id: 8,
      name: "Ustadzah Siti Rahayu, M.Pd",
      position: "Guru PKn",
      subject: "Pendidikan Kewarganegaraan",
      experience: "11 Tahun Pengalaman",
      qualification: "S2 Pendidikan Kewarganegaraan",
      specialization: "Hukum & Tata Kelola",
      achievements: "Guru PKn Berprestasi 2022",
      avatar: "👩‍🏫"
    },
    {
      id: 9,
      name: "Bapak Ahmad Fauzi, S.Pd",
      position: "Guru PJOK",
      subject: "Pendidikan Jasmani",
      experience: "9 Tahun Pengalaman",
      qualification: "S1 Pendidikan Jasmani",
      specialization: "Olahraga & Kesehatan",
      achievements: "Pelatih basket national level",
      avatar: "🏃‍♂️"
    },
    {
      id: 10,
      name: "Ustadzah Rina Sari, S.Pd",
      position: "Guru Seni Budaya",
      subject: "Seni Musik & Tari",
      experience: "8 Tahun Pengalaman",
      qualification: "S1 Pendidikan Seni Musik",
      specialization: "Musik & Tari Tradisional",
      achievements: "Koreografer terbaik 2020",
      avatar: "🎨"
    },
    {
      id: 11,
      name: "Bapak Yusuf Setiawan, S.T",
      position: "Guru Teknologi",
      subject: "TIK & Robotika",
      experience: "12 Tahun Pengalaman",
      qualification: "S1 Teknik Informatika",
      specialization: "Programming & AI",
      achievements: "Juara 1 Robotik Nasional 2021",
      avatar: "💻"
    },
    {
      id: 12,
      name: "Ustadzah Melinda, S.Pd.I",
      position: "Guru Fiqih",
      subject: "Fiqih & Akhlak",
      experience: "16 Tahun Pengalaman",
      qualification: "S2 Pendidikan Fiqih",
      specialization: "Fiqih Mu'amalah & Jinayah",
      achievements: "Penulis kitab fiqih untuk remaja",
      avatar: "👩‍🎓"
    },
    {
      id: 13,
      name: "Bapak Hamzah, M.Ag",
      position: "Guru Hadits",
      subject: "Hadits & Tafsir",
      experience: "22 Tahun Pengalaman",
      qualification: "S3 Ushuluddin, M.Ag",
      specialization: "Ilmu Hadits & Tafsir",
      achievements: "Penulis tafsir tematik terbaik",
      avatar: "📚"
    },
    {
      id: 14,
      name: "Ustadzah Dewi Lestari, S.Pd",
      position: "Guru Bahasa Inggris",
      subject: "Bahasa Inggris",
      experience: "10 Tahun Pengalaman",
      qualification: "S2 Pendidikan Bahasa Inggris",
      specialization: "Literasi & Grammar",
      achievements: "IELTS Trainer Bersertifikat",
      avatar: "🌍"
    },
    {
      id: 15,
      name: "Bapak Rudi Hartono, S.Pd",
      position: "Guru Ekonomi",
      subject: "IPS Ekonomi",
      experience: "14 Tahun Pengalaman",
      qualification: "S1 Pendidikan Ekonomi",
      specialization: "Ekonomi & Kewirausahaan",
      achievements: "Guru Ekonomi Terbaik 2020",
      avatar: "💰"
    },
    {
      id: 16,
      name: "Ustadzah Aisyah, M.Pd",
      position: "Guru Geografi",
      subject: "IPS Geografi",
      experience: "13 Tahun Pengalaman",
      qualification: "S2 Pendidikan Geografi",
      specialization: "Geografi Fisik & Sosial",
      achievements: "Peneliti geografi terbaik 2019",
      avatar: "🗺️"
    },
    {
      id: 17,
      name: "Bapak Dedi Kurniawan, S.Pd",
      position: "Guru Sosiologi",
      subject: "IPS Sosiologi",
      experience: "11 Tahun Pengalaman",
      qualification: "S1 Pendidikan Sosiologi",
      specialization: "Sosiologi & Antropologi",
      achievements: "Konsultan sosial komunitas",
      avatar: "👥"
    },
    {
      id: 18,
      name: "Ustadzah Nuryanti, S.Pd",
      position: "Guru Akidah",
      subject: "Akidah & Akhlak",
      experience: "17 Tahun Pengalaman",
      qualification: "S2 Pendidikan Akidah",
      specialization: "Akidah & Filsafat Islam",
      achievements: "Penulis buku akidah anak",
      avatar: "🤲"
    },
    {
      id: 19,
      name: "Bapak Halim, M.Ag",
      position: "Guru SKI",
      subject: "Sejarah Kebudayaan Islam",
      experience: "19 Tahun Pengalaman",
      qualification: "S2 Sejarah Kebudayaan Islam",
      specialization: "Sejarah Islam & Peradaban",
      achievements: "Sejarawan Muslim Terbaik 2021",
      avatar: "🕌"
    }
  ];

  // Navigation links for footer
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru", active: true },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath="/guru" />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Tim Pengajar
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Tim Pengajar Profesional
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Didukung oleh tenaga pengajar berpengalaman dan berkualifikasi tinggi dalam bidang pendidikan Islam dan umum
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-1 sm:mb-2">19</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Total Guru</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-1 sm:mb-2">15+</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Tahun Rata-rata Pengalaman</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 mb-1 sm:mb-2">85%</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Guru S2/S3</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-800 mb-1 sm:mb-2">100%</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-tight">Sertifikat Profissional</div>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="teachers-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="teachers-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Profil Guru
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Mengenal lebih dekat para dedikasi kami dalam membangun generasi Qur'an yang unggul
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Profil guru">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
                  role="listitem"
                >
                  {/* Header dengan avatar */}
                  <div className="bg-gradient-to-br from-blue-800 to-blue-600 p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="text-4xl">{teacher.avatar}</div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{teacher.name}</h3>
                    <p className="text-blue-200 text-sm">{teacher.position}</p>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 text-sm font-medium flex-shrink-0">Mata Pelajaran:</span>
                        <span className="text-gray-700 text-sm">{teacher.subject}</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 text-sm font-medium flex-shrink-0">Pengalaman:</span>
                        <span className="text-gray-700 text-sm">{teacher.experience}</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 text-sm font-medium flex-shrink-0">Kualifikasi:</span>
                        <span className="text-gray-700 text-sm">{teacher.qualification}</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 text-sm font-medium flex-shrink-0">Spesialisasi:</span>
                        <span className="text-gray-700 text-sm">{teacher.specialization}</span>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-100">
                        <div className="flex items-start space-x-2">
                          <span className="text-blue-600 text-sm font-medium flex-shrink-0">Prestasi:</span>
                          <span className="text-gray-700 text-sm">{teacher.achievements}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Filosofi
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Filosofi Pengajaran
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Visi Bersama</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Menghasilkan generasi Muslim yang cerdas, berakhlak mulia, dan siap menghadapi tantangan masa depan
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Kerjasama</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Bekerja sama dengan orang tua dan masyarakat untuk menciptakan lingkungan pendidikan yang optimal
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Inovasi</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Terus berinovasi dalam metode pengajaran untuk menyesuaikan dengan perkembangan zaman
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ingin Bergabung dengan Tim Kami?
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Kami selalu mencari tenaga pengajar profesional yang memiliki komitmen tinggi dalam pendidikan Islam
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-5 justify-center">
              <button className="px-6 sm:px-9 py-3 sm:py-4 bg-white text-blue-800 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30">
                Lihat Lowongan
              </button>
              <button className="px-6 sm:px-9 py-3 sm:py-4 bg-transparent text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl border-2 border-white transition-all duration-300 hover:bg-white hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-white/30">
                Hubungi HRD
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