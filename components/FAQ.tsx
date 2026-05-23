'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    q: "Apakah program ini gratis?",
    a: "Ya, 100% gratis. Tidak ada biaya tersembunyi, biaya pendaftaran, atau biaya mentoring."
  },
  {
    q: "Apakah harus punya followers banyak?",
    a: "Tidak. Pemula yang baru mau buat akun media sosial pun sangat dipersilakan untuk ikut."
  },
  {
    q: "Apakah harus jago editing?",
    a: "Tidak harus. Karya sederhana yang dieksekusi dengan baik (bahkan dari HP) jauh lebih berarti untuk proses belajarmu awal-awal."
  },
  {
    q: "Apakah harus tinggal di Jombang?",
    a: "Ya, kami mensyaratkan domisili atau setidaknya aktivitas harian (kuliah/kerja) berada di Jombang karena program memuat sesi mentorship offline."
  },
  {
    q: "Kontennya nanti tentang apa?",
    a: "Fokusnya pada cerita seputar dunia kreator, edukasi ringan, atau behind the scenes yang skripnya sudah kami buatkan."
  },
  {
    q: "Apakah semua konten pasti di-collab post?",
    a: "Selama memenuhi standar komunitas dan tidak ada unsur negatif, kontenmu akan diajukan untuk kolaborasi resmi antarakun."
  },
  {
    q: "Bagaimana cara daftar?",
    a: "Cukup isi formulir 'Daftar Batch 1' di website ini; konfirmasi akan diteruskan secara otomatis via WhatsApp."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(prev => prev === idx ? null : idx);
  }

  return (
    <section id="faq" className="py-24 md:py-40 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/3 pt-4"
        >
          <h2 className="text-[48px] md:text-[64px] lg:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)]">
            Questions,<br />answered.
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
