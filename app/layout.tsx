import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Kelas Content Creator Gratis di Jombang | Boost Kreator',
  description: 'Program gratis 3 bulan untuk kreator pemula Jombang. Belajar script, storytelling, produksi konten, feedback, dan kolaborasi komunitas.',
  keywords: 'kelas content creator Jombang, komunitas kreator Jombang, belajar ngonten gratis Jombang, mentoring content creator Jombang, program kreator pemula Jombang, kelas konten gratis untuk pemula, pelatihan content creator Jombang',
  openGraph: {
    title: 'Kelas Content Creator Gratis di Jombang | Boost Kreator',
    description: 'Program gratis 3 bulan untuk kreator pemula Jombang. Belajar script, storytelling, produksi konten, feedback, dan kolaborasi komunitas.',
    url: 'https://boostkreatorjombang.vercel.app',
    siteName: 'Boost Kreator Jombang',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Boost Kreator Jombang',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelas Content Creator Gratis di Jombang | Boost Kreator',
    description: 'Program gratis 3 bulan untuk kreator pemula Jombang. Belajar script, storytelling, produksi konten, feedback, dan kolaborasi komunitas.',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://boostkreatorjombang.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Komunitas Kreator Jombang",
  "url": "https://boostkreatorjombang.vercel.app",
  "logo": "https://boostkreatorjombang.vercel.app/hero.png",
  "description": "Komunitas kreator lokal di Jombang yang memfasilitasi program Boost Kreator untuk kreator pemula.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans antialiased overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-black" suppressHydrationWarning>{children}</body>
    </html>
  );
}
