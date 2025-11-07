"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCompactLogo, setShowCompactLogo] = useState(false);

  // Navigation links with current path detection
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/program", label: "Program" },
    { href: "/guru", label: "Guru" },
    { href: "/fasilitas", label: "Fasilitas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ].map(link => ({
    ...link,
    active: currentPath === link.href
  }));

  // Enhanced scroll effect with performance optimization
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 60);
      setShowCompactLogo(scrollTop > 200); // Show compact logo after scrolling past hero section
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg"
      >
        Lewati ke konten utama
      </a>
      
      {/* Enhanced Top Bar with modern glassmorphism - Hidden when scrolling */}
      {!showCompactLogo && (
        <div className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-2 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-blue-700/90 to-blue-600/90"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              {/* Contact info with modern styling */}
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">info@ummi.ac.id</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">(0266) 218 345</span>
                </div>
              </div>
              
              {/* Enhanced search and language selector */}
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <div className="flex items-center bg-white/20 hover:bg-white/30 rounded-full px-3 py-1 transition-all duration-200 backdrop-blur-sm">
                    <input
                      type="text"
                      placeholder="Cari di sini..."
                      className="bg-transparent text-white placeholder-white/70 text-xs focus:outline-none w-24 sm:w-32 focus:w-40 transition-all duration-200"
                    />
                    <button className="text-white hover:text-blue-200 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded font-medium transition-all duration-200 backdrop-blur-sm">
                    ID
                  </button>
                  <button className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded font-medium transition-all duration-200 backdrop-blur-sm">
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced Logo & Branding with modern design - Collapsible */}
      <div className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-500 ${
        showCompactLogo ? 'py-2' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center group">
              {/* Enhanced logo with better hover effects */}
              <div className={`relative group-hover:scale-105 transition-transform duration-200 ${
                showCompactLogo ? 'w-10 h-10' : 'w-16 h-16 sm:w-20 sm:h-20'
              }`}>
                <Image
                  src="/logo.jpg"
                  alt="Logo SMP Islam Hegarmanah"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
              
              {/* Enhanced vertical separator - Hidden in compact mode */}
              {!showCompactLogo && (
                <div className="mx-4 h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden sm:block group-hover:via-gray-400 transition-colors duration-200"></div>
              )}
              
              {/* Enhanced brand info with better typography - Hidden in compact mode */}
              {!showCompactLogo && (
                <div className="text-center sm:text-left group-hover:text-gray-800 transition-colors duration-200">
                  <div className="flex items-center justify-center sm:justify-start">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      SMP ISLAM HEGARMANAH
                    </h1>
                    <span className="ml-3 px-2 py-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-200">
                      2<sup>nd</sup>
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 font-medium">
                    Membangun Generasi Qur'an yang Unggul dan Berkarakter
                  </p>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Enhanced Navigation Menu with modern glassmorphism */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Navigasi utama"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            {/* Mobile menu button with enhanced styling */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
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

            {/* Enhanced centered navigation menu */}
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-4 px-4 font-semibold text-sm transition-all duration-200 group ${
                      link.active
                        ? 'text-blue-800'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {/* Active indicator */}
                    {link.active && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      link.active ? 'opacity-50' : ''
                    }`}></div>
                    
                    <span className="relative z-10 hover:scale-105 transform transition-transform duration-200">
                      {link.label.toUpperCase()}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Enhanced desktop CTA button */}
            <div className="hidden md:flex items-center ml-4">
              <Link
                href="/kontak"
                className="px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold text-sm rounded-xl hover:from-blue-700 hover:to-blue-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
          
          {/* Enhanced Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 font-semibold rounded-xl transition-all duration-200 ${
                      link.active
                        ? 'text-blue-800 bg-gradient-to-r from-blue-50 to-blue-100'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-50'
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href="/kontak"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-500 transition-all duration-200"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}