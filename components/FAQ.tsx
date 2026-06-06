'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    q: "Apa itu Boost Kreator Jombang?",
    a: "Boost Kreator adalah program aktivasi kreator lokal Jombang selama 3 bulan untuk membantu kreator pemula, pelaku UMKM, dan anak muda agar mulai membuat konten secara konsisten."
  },
  {
    q: "Apakah program ini gratis?",
    a: "Ya, 100% gratis. Namun kuota peserta terbatas dan wajib memiliki komitmen untuk mengikuti prosesnya sampai akhir."
  },
  {
    q: "Siapa yang boleh ikut program ini?",
    a: "Kreator pemula, UMKM, komunitas lokal, mahasiswa, pekerja muda, atau kreator stagnan yang berdomisili atau beraktivitas di Jombang."
  },
  {
    q: "Apakah harus punya followers banyak?",
    a: "Sama sekali tidak. Program ini sangat cocok untuk kamu yang bahkan belum mulai atau followersnya masih puluhan."
  },
  {
    q: "Apakah harus punya kamera bagus?",
    a: "Tidak. Kamu bisa memproduksi konten bermodalkan handphone yang kamu miliki saat ini."
  },
  {
    q: "Program ini berjalan berapa lama?",
    a: "Program berjalan selama 3 bulan, dengan 6 sesi pembekalan yang mencakup mindset hingga produksi konten."
  },
  {
    q: "Apa saja materi yang dipelajari?",
    a: "Kamu akan belajar Mindset Reset, Creator IKIGAI (Niche & Persona), Storytelling, Produksi Konten Sederhana, Distribusi & Algoritma, hingga Konsistensi."
  },
  {
    q: "Apakah peserta mendapat script konten?",
    a: "Ya, salah satu materi yang diberikan akan membantu kamu membuat draft dan struktur hook hingga CTA kontenmu."
  },
  {
    q: "Apakah ada mentoring dan feedback?",
    a: "Ada. Kamu akan mendapat feedback mengenai konten pertamamu untuk diulas dan diperbaiki."
  },
  {
    q: "Apakah peserta mendapat sertifikat?",
    a: "Sertifikat akan diberikan sebagai bentuk apresiasi bagi peserta yang mengikuti dan berhasil menyelesaikan rangkaian program sampai akhir."
  },
  {
    q: "Apakah program ini online atau offline?",
    a: "Program ini berjalan hybrid. Ada sesi mentoring offline dan distribusi materi online."
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Cukup klik tombol 'Daftar Batch #1' yang ada di website ini, isi form ketersediaan, dan tunggu informasi selanjutnya."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(prev => prev === idx ? null : idx);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-24 md:py-40 bg-[var(--color-bg-main)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/3 pt-4 sticky top-32"
        >
          <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[0.92] tracking-[-0.03em] text-[var(--color-text-main)]">
            FAQ<br />Tanya Jawab
          </h2>
        </motion.div>

        <div className="md:w-2/3 w-full flex flex-col border-t border-[var(--color-border)]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[var(--color-border)]">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between py-8 md:py-10 text-left focus:outline-none group"
              >
                <span className="text-[20px] md:text-[28px] font-light tracking-[-0.5px] text-[var(--color-text-main)] pr-8 group-hover:text-[var(--color-text-secondary)] transition-colors">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 text-[24px] font-light text-[var(--color-text-muted)] transition-transform duration-500 ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] pb-10 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
