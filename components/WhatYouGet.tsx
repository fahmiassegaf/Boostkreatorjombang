'use client';

import { motion } from 'motion/react';

const helps = [
  {
    num: "01",
    title: "Content Script",
    desc: "Peserta dibantu membuat struktur konten dari hook, isi, sampai CTA."
  },
  {
    num: "02",
    title: "Mindset Reset",
    desc: "Peserta dibantu melewati rasa takut mulai dan perfeksionisme."
  },
  {
    num: "03",
    title: "Creator IKIGAI",
    desc: "Peserta mencari titik temu antara minat, kemampuan, kebutuhan audiens, dan peluang platform."
  },
  {
    num: "04",
    title: "Storytelling",
    desc: "Peserta belajar membuat konten yang lebih menarik dan tidak datar."
  },
  {
    num: "05",
    title: "Simple Production",
    desc: "Peserta belajar membuat konten dengan alat sederhana."
  },
  {
    num: "06",
    title: "Algorithm & Distribution",
    desc: "Peserta memahami dasar distribusi konten, caption, hashtag, dan SEO platform."
  },
  {
    num: "07",
    title: "Sustainability",
    desc: "Peserta belajar tetap konsisten tanpa burnout."
  },
  {
    num: "08",
    title: "Community Collaboration",
    desc: "Peserta mendapat ruang kolaborasi dengan komunitas kreator lokal."
  }
];

export default function WhatYouGet() {
  return (
    <section id="program" className="py-24 md:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3 pt-4 sticky top-32"
          >
            <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[0.92] tracking-[-0.03em] text-[var(--color-text-main)] max-w-sm">
              Apa yang Kamu Dapatkan di Boost Kreator?
            </h2>
          </motion.div>

          <div className="lg:w-2/3 w-full flex flex-col">
            {helps.map((help, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 md:py-16 border-t border-[var(--color-border)] transition-colors duration-500 hover:border-[var(--color-border-hover)]"
              >
                <div className="text-[20px] md:text-[24px] font-light text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors duration-500">
                  {help.num}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] md:text-[40px] font-light tracking-[-1px] text-[var(--color-text-main)] leading-[1.1]">
                    {help.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] max-w-md">
                    {help.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
