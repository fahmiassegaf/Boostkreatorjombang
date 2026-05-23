'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-32 md:py-48 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)] mb-8 max-w-[800px]"
        >
          Tidak perlu sempurna untuk mulai.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] mb-12 max-w-md"
        >
          Yang penting mulai, lalu tumbuh bareng komunitas.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="#daftar" className="inline-flex h-[56px] items-center justify-center px-10 text-[15px] font-medium text-[#050505] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-all duration-300">
            Daftar Gratis
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
