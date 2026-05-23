'use client';

import { motion } from 'motion/react';

export default function Target() {
  return (
    <section className="py-24 md:py-40 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)] mb-16 md:mb-24"
        >
          Untuk siapa?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[24px] md:rounded-[40px] p-10 md:p-16 hover:border-[var(--color-border-hover)] transition-colors duration-500"
          >
            <div className="text-[14px] md:text-[16px] text-[var(--color-text-muted)] mb-8 font-light">01</div>
            <h3 className="text-[32px] md:text-[48px] font-light text-[var(--color-text-main)] tracking-[-1px] mb-6">Pemula Total</h3>
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] max-w-sm">
              Untuk kamu yang belum pernah ngonten dan butuh dorongan pertama.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[24px] md:rounded-[40px] p-10 md:p-16 hover:border-[var(--color-border-hover)] transition-colors duration-500"
          >
             <div className="text-[14px] md:text-[16px] text-[var(--color-text-muted)] mb-8 font-light">02</div>
            <h3 className="text-[32px] md:text-[48px] font-light text-[var(--color-text-main)] tracking-[-1px] mb-6">Kreator Stagnan</h3>
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] max-w-sm">
              Untuk kamu yang pernah mulai, tapi berhenti, bingung arah, atau belum konsisten.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <h3 className="text-[32px] md:text-[48px] lg:text-[64px] font-light leading-[1.1] tracking-[-1.5px] md:tracking-[-2px] text-[var(--color-text-main)] text-center max-w-[1000px]">
            <span className="opacity-40">Tidak perlu followers banyak. Tidak perlu kamera mahal.</span> Tidak perlu jago editing.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
