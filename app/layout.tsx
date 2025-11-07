import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMP ISLAM HEGARMANAH - Sekolah Islam Terpadu",
  description: "Sekolah Islam Terpadu dengan sistem Boarding School dan program Tahfizh Al-Qur'an bersanad. Membangun Generasi Qur'an yang Unggul dan Berkarakter.",
  keywords: "SMP Islam, sekolah Islam, boarding school, tahfizh quran, pendidikan Islam, Purbalingga, Hegarmanah",
  authors: [{ name: "SMP ISLAM HEGARMANAH" }],
  openGraph: {
    title: "SMP ISLAM HEGARMANAH - Sekolah Islam Terpadu",
    description: "Membangun Generasi Qur'an yang Unggul dan Berkarakter",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
