import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[13px] md:text-[14px] text-[var(--color-text-secondary)] font-light">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[var(--color-text-main)]">Boost Kreator</span>
          <span className="text-[var(--color-text-muted)]">Komunitas Kreator Jombang</span>
          <a href="https://instagram.com/komunitaskreatorjombang" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-main)] transition-colors mt-2 text-[var(--color-text-muted)] underline decoration-transparent hover:decoration-[var(--color-text-main)] underline-offset-4">@komunitaskreatorjombang</a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link href="#program" className="hover:text-[var(--color-text-main)] transition-colors">Program</Link>
          <Link href="#benefit" className="hover:text-[var(--color-text-main)] transition-colors">Benefit</Link>
          <Link href="#alur" className="hover:text-[var(--color-text-main)] transition-colors">Alur</Link>
          <Link href="#faq" className="hover:text-[var(--color-text-main)] transition-colors">FAQ</Link>
          <Link href="#daftar" className="hover:text-[var(--color-text-main)] transition-colors">Daftar</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-[var(--color-text-muted)]">
          <span>Batch 1 • 2026</span>
          <span>Jombang, Jawa Timur</span>
        </div>
      </div>
    </footer>
  );
}
