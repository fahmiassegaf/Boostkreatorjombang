'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function FinalCTA() {
  const words = "Mulai dari satu script. Jadikan itu karya pertamamu.".split(" ");

  return (
    <section className="py-32 md:py-48 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.h2 
          className="text-[40px] md:text-[64px] font-medium leading-[1.1] tracking-tight text-[var(--color-text-main)] mb-12 max-w-[800px] flex flex-wrap justify-center gap-[0.25em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {words.map((word, i) => (
             <motion.span 
                key={i} 
                variants={{
                   hidden: { opacity: 0, y: 40, rotateX: -40, filter: "blur(10px)" },
                   visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={word.includes("script") || word.includes("pertamamu") ? "text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 font-serif italic" : ""}
                style={{ transformStyle: "preserve-3d", transformOrigin: "bottom center" }}
             >
                {word}
             </motion.span>
          ))}
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#daftar" className="inline-flex h-[56px] items-center justify-center px-10 text-[15px] font-medium text-[#050505] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Daftar Batch #1 Sekarang
            </Link>
            <Link href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="inline-flex h-[56px] items-center justify-center px-8 text-[15px] font-medium text-[var(--color-text-main)] bg-transparent border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] transition-all duration-300">
              Hubungi Admin
            </Link>
          </div>
          <p className="text-[14px] text-[var(--color-text-muted)] italic mt-2">
            Kuota terbatas untuk peserta yang siap mengikuti proses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
