"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function KontakPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita", active: true },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      content: "Jl. Pendidikan No. 123, Hegarmanah, Purbalingga, Jawa Tengah 54316",
      action: "Lihat di Peta"
    },
    {
      icon: "📞",
      title: "Telepon",
      content: "+62 281 123 4567",
      action: "Telepon Sekarang"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      content: "+62 812-3456-7890",
      action: "Chat WhatsApp"
    },
    {
      icon: "📧",
      title: "Email",
      content: "info@smphegarmanah.sch.id",
      action: "Kirim Email"
    }
  ];

  // Department contacts
  const departmentContacts = [
    {
      department: "Pendaftaran",
      person: "Bapak Ahmad Fauzi, S.Pd",
      phone: "+62 812-1111-2222",
      email: "pendaftaran@smphegarmanah.sch.id",
      hours: "Senin - Jumat, 08.00 - 16.00 WIB"
    },
    {
      department: "Akademik",
      person: "Ustadzah Siti Rahayu, M.Pd",
      phone: "+62 813-3333-4444",
      email: "akademik@smphegarmanah.sch.id",
      hours: "Senin - Jumat, 07.00 - 17.00 WIB"
    },
    {
      department: "Asrama & Boarding",
      person: "Bapak M. Nur Ichsan, S.Pd",
      phone: "+62 814-5555-6666",
      email: "asrama@smphegarmanah.sch.id",
      hours: "24 Jam"
    },
    {
      department: "Keuangan",
      person: "Ustadzah Rina Sari, S.Pd",
      phone: "+62 815-7777-8888",
      email: "keuangan@smphegarmanah.sch.id",
      hours: "Senin - Jumat, 08.00 - 15.00 WIB"
    }
  ];

  // FAQ data
  const faqData = [
    {
      question: "Bagaimana cara mendaftar di SMP Islam Hegarmanah?",
      answer: "Calon siswa dapat mendaftar dengan datang langsung ke sekolah, mengisi formulir pendaftaran, dan melengkapi syarat-syarat yang diperlukan seperti ijazah SD, KTP, dan foto."
    },
    {
      question: "Berapa biaya pendidikan di SMP Islam Hegarmanah?",
      answer: "Biaya pendidikan mencakup biaya pendaftaran, SPP bulanan, dan biaya asrama. Untuk informasi detail biaya, silakan hubungi bagian keuangan."
    },
    {
      question: "Apakah ada program beasiswa?",
      answer: "Ya, kami menyediakan program beasiswa untuk siswa berprestasi dan tidak mampu. Syarat dan ketentuan dapat ditanyakan di bagian pendaftaran."
    },
    {
      question: "Kapan tahun ajaran baru dimulai?",
      answer: "Tahun ajaran baru dimulai pada bulan Juli setiap tahun. Pendaftaran biasanya dibuka dari bulan Januari hingga Juni."
    },
    {
      question: "Bagaimana sistem boarding school?",
      answer: "Siswa tinggal di asrama dengan pengasuhan 24 jam, jadwal harian yang terstruktur, dan pengawasan oleh asatidz profesional."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-800 text-white px-4 py-2 rounded-lg font-medium"
      >
        Lewati ke konten utama
      </a>
      
      {/* Top Bar */}
      <div className="bg-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-xs mb-2 sm:mb-0">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
      
      {/* Logo & Branding */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/logo.jpg"
                  alt="Logo SMP Islam Hegarmanah"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="mx-4 h-12 w-px bg-gray-300 hidden sm:block"></div>
              
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
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
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

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center text-white max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Kontak
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Hubungi Kami
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-white to-white/80 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Kami siap membantu Anda mendapatkan informasi lengkap tentang SMP Islam Hegarmanah
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="contact-heading" className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Informasi Kontak
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" role="list" aria-label="Informasi kontak">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  role="listitem"
                >
                  <div className="text-3xl sm:text-4xl mb-4" aria-hidden="true">{contact.icon}</div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3">{contact.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{contact.content}</p>
                  <button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    {contact.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Lokasi
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Lokasi Sekolah
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="bg-gray-200 rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 text-sm sm:text-base mb-2">Peta Interaktif SMP Islam Hegarmanah</p>
                <p className="text-gray-500 text-xs sm:text-sm">Jl. Pendidikan No. 123, Hegarmanah, Purbalingga</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Lihat di Google Maps
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Departemen
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Kontak Departemen
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" role="list" aria-label="Kontak departemen">
              {departmentContacts.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  role="listitem"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{dept.department}</h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base mb-3">{dept.person}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-sm">📞</span>
                      <a href={`tel:${dept.phone}`} className="text-gray-700 text-sm hover:text-blue-600 transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-sm">📧</span>
                      <a href={`mailto:${dept.email}`} className="text-gray-700 text-sm hover:text-blue-600 transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-sm">🕒</span>
                      <span className="text-gray-700 text-sm">{dept.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Telepon
                    </button>
                    <button className="flex-1 px-3 py-2 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 transition-colors">
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                FAQ
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Pertanyaan yang Sering Diajukan
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Form
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Kirim Pesan
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
              <p className="text-sm sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Kirimkan pesan Anda dan kami akan merespons secepatnya
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Subjek</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Pendaftaran</option>
                      <option>Informasi Akademik</option>
                      <option>Fasilitas</option>
                      <option>Biaya Pendidikan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tuliskan pesan Anda di sini"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:from-blue-900 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-800 rounded-full font-bold text-xs sm:text-sm mb-6 sm:mb-7">
                Jam Operasional
              </div>
              <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Jam Kantor
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded mx-auto mb-6 sm:mb-10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🏢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Sekolah</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p className="text-gray-700"><strong>Senin - Jumat:</strong> 07.00 - 17.00 WIB</p>
                  <p className="text-gray-700"><strong>Sabtu:</strong> 07.00 - 12.00 WIB</p>
                  <p className="text-gray-700"><strong>Minggu:</strong> Tutup</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🏠</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Asrama</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p className="text-gray-700"><strong>Setiap Hari:</strong> 24 Jam</p>
                  <p className="text-gray-700"><strong>Visite:</strong> 08.00 - 20.00 WIB</p>
                  <p className="text-gray-700"><strong>Emergency:</strong> +62 814-5555-6666</p>
                </div>
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