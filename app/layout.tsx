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
  title: 'Kreator Boost Batch 1 | Komunitas Kreator Jombang',
  description: 'Program gratis untuk kreator Jombang yang ingin mulai ngonten dengan bantuan script, collab post, mentoring, feedback, dan komunitas.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans antialiased overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-black" suppressHydrationWarning>{children}</body>
    </html>
  );
}
