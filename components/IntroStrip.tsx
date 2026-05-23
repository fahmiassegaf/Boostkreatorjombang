'use client';

import { motion } from 'motion/react';

export default function IntroStrip() {
  return (
    <section className="py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1000px] text-center"
        >
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-light leading-[1.1] tracking-[-1.5px] md:tracking-[-2px] text-[var(--color-text-main)]">
            <span className="opacity-40">Bukan kelas teori.</span> Ini ruang mulai untuk kreator lokal yang ingin benar-benar posting.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
