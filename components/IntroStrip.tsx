'use client';

import { motion } from 'motion/react';

export default function IntroStrip() {
  const paragraph = "Banyak kreator pemula berhenti bukan karena tidak mampu, tetapi karena belum punya arah, takut salah, merasa belum siap, dan tidak punya lingkungan pendukung. Sementara itu, kreator yang sudah pernah mulai sering berhenti karena kehilangan tujuan, terlalu fokus pada angka, atau kelelahan menjaga konsistensi. Karena itu, Boost Kreator dimulai dari mindset, lalu bergerak ke niche, script, produksi, distribusi, dan sistem konsistensi jangka panjang.";
  const words = paragraph.split(" ");

  return (
    <section className="py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-[1000px] text-center mb-12"
        >
          <h2 className="text-[28px] md:text-[42px] lg:text-[56px] font-medium leading-[1.2] tracking-[-0.03em] text-[var(--color-text-main)]">
            <span className="text-gray-500">Banyak kreator pemula berhenti dan kreator aktif kelelahan.</span>{" "}
            Kreator Boost hadir mengembalikan tujuan <span className="font-serif italic text-gray-300">dan</span> konsistensi.
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 text-left md:text-center text-[18px] md:text-[22px] lg:text-[26px] leading-[1.6] max-w-[900px] mx-auto font-light text-[var(--color-text-secondary)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03
              }
            }
          }}
        >
          {words.map((word, i) => {
            const isHighlight = word.toLowerCase().includes("mindset") || word.toLowerCase().includes("niche") || word.toLowerCase().includes("script") || word.toLowerCase().includes("produksi") || word.toLowerCase().includes("distribusi") || word.toLowerCase().includes("konsistensi");
            return (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={isHighlight ? "text-white font-medium italic" : ""}
              >
                {word}
              </motion.span>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
