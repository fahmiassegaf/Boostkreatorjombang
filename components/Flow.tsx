'use client';

import { motion } from 'motion/react';

const steps = [
  "Daftar",
  "Masuk grup",
  "Terima script",
  "Bikin konten",
  "Posting dan collab",
  "Mentoring",
  "Sertifikat"
];

export default function Flow() {
  return (
    <section className="py-24 md:py-40 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)] mb-20"
        >
          Alurnya sederhana.
        </motion.h2>

        <div className="flex flex-col border-t border-[var(--color-border)]">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-8 md:gap-16 py-8 md:py-12 border-b border-[var(--color-border)] group hover:pl-4 transition-all duration-500"
            >
              <span className="text-[16px] md:text-[20px] font-light text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors duration-500 w-[60px]">
                0{idx + 1}
              </span>
              <span className="text-[24px] md:text-[40px] lg:text-[48px] font-light tracking-[-1px] text-[var(--color-text-main)]">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
