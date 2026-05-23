'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FreePricing() {
  return (
    <section id="benefit" className="py-24 md:py-40 bg-[var(--color-bg-main)] border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)] mb-16 md:mb-24"
        >
          Satu cara<br />untuk mulai.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[800px] bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-[24px] md:rounded-[40px] p-8 md:p-16 hover:border-[var(--color-border-hover)] transition-colors duration-500 relative overflow-hidden group"
        >
          {/* Subtle accent line on hover */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-text-main)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            <div className="flex flex-col gap-6 w-full md:w-1/2">
               <div className="inline-flex w-max items-center justify-center px-4 py-1.5 rounded-full border border-[var(--color-border)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-main)]">
                  Kuota Batch 1
               </div>
               
               <div>
                  <h3 className="text-[20px] text-[var(--color-text-secondary)] font-light mb-2">Boost Kreator Batch 1</h3>
                  <div className="text-[64px] md:text-[82px] font-light tracking-[-3px] leading-[1] text-[var(--color-text-main)]">
                    GRATIS
                  </div>
               </div>

               <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.5]">
                 Tidak ada biaya pendaftaran, biaya program, atau biaya mentoring.
               </p>

               <Link href="#daftar" className="mt-4 inline-flex h-[56px] items-center justify-center px-8 text-[15px] font-medium text-[#050505] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 w-max">
                 Ambil Slot Batch 1
               </Link>
            </div>

            <div className="w-full md:w-1/2 md:pl-12 md:border-l border-[var(--color-border)] flex flex-col gap-4 pt-4 md:pt-0">
               {[
                 "Script konten siap pakai",
                 "Collab post akun komunitas",
                 "Grup eksklusif kreator",
                 "Mentoring online via Zoom",
                 "Mentoring offline di Jombang",
                 "Feedback konten nyata",
                 "Sertifikat resmi",
                 "Personal branding terbangun"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-4 text-[15px] md:text-[16px] text-[var(--color-text-secondary)]">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)] flex-shrink-0" />
                   <span className="leading-[1.5]">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
