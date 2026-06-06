'use client';

import { motion } from 'motion/react';

const targets = [
  "Kreator pemula yang belum tahu mulai dari mana",
  "Kreator yang pernah mulai tetapi tidak konsisten",
  "Pelaku UMKM yang ingin promosi lewat konten",
  "Mahasiswa dan anak muda yang ingin membangun personal branding",
  "Komunitas lokal yang ingin lebih aktif di media sosial",
  "Pekerja muda yang ingin membangun portofolio digital",
  "Kreator aktif yang mulai kehilangan arah konten"
];

const outputs = [
  "Memiliki beberapa konten yang sudah dipublikasikan",
  "Memiliki arah niche dan personal branding yang lebih jelas",
  "Memiliki 3 content pillars",
  "Memiliki bio media sosial yang lebih kuat",
  "Memiliki pengalaman menerima feedback",
  "Memiliki pengalaman kolaborasi",
  "Memiliki kalender konten sederhana",
  "Memiliki roadmap kreator 90 hari",
  "Masuk dalam database kreator lokal Jombang",
  "Memiliki dokumentasi karya awal sebagai portofolio digital"
];

const commitments = [
  "Aktif di grup komunikasi",
  "Mengikuti sesi pembekalan",
  "Mengerjakan tugas konten",
  "Berani memposting konten",
  "Terbuka terhadap feedback",
  "Menjaga etika komunitas",
  "Mengikuti proses sampai akhir"
];

const highlights = ["Tidak perlu followers banyak.", "Tidak perlu kamera mahal.", "Tidak perlu jago editing."];

export default function Target() {
  return (
    <section className="py-24 md:py-40 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[72px] font-medium leading-[0.92] tracking-[-0.03em] text-[var(--color-text-main)] mb-16 md:mb-24"
        >
          Untuk Siapa Program Ini?
        </motion.h2>

        <div className="flex flex-wrap gap-4 mb-24 md:mb-40">
          {targets.map((target, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.8, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
               whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
               className="bg-white/5 border border-white/5 px-6 py-4 rounded-full flex items-center justify-center text-center cursor-default transition-colors duration-300 hover:bg-white/10"
             >
               <p className="text-[15px] md:text-[17px] text-[var(--color-text-secondary)] font-medium">
                 {target}
               </p>
             </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-[32px] md:text-[48px] font-medium tracking-tight text-white mb-8">
              Komitmen Peserta
            </h3>
            <p className="text-[18px] text-[var(--color-text-secondary)] mb-8">
              Program ini gratis, tetapi peserta tetap wajib:
            </p>
            <ul className="flex flex-col gap-4">
              {commitments.map((c, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] md:text-[18px] text-[var(--color-text-secondary)]">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-text-main)] shrink-0 opacity-40" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-gray-500 mt-8 italic border-l-2 border-gray-700 pl-4">
              Peserta yang tidak aktif dapat digantikan oleh calon peserta lain agar kuota program tetap produktif.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[32px]"
          >
            <h3 className="text-[32px] md:text-[40px] font-medium tracking-tight text-white mb-8">
              Output Program
            </h3>
            <ul className="flex flex-col gap-4">
              {outputs.map((o, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] text-gray-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-text-main)] shrink-0 opacity-40" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex justify-center mt-32 md:mt-40">
           <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                 visible: { transition: { staggerChildren: 0.4 } }
              }}
              className="flex flex-wrap justify-center gap-[0.3em] font-serif text-[32px] md:text-[48px] lg:text-[64px] font-light leading-[1.2] tracking-[-0.02em] text-center max-w-[1000px]"
           >
              {highlights.map((text, idx) => (
                 <motion.span
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
                      visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className={idx === 2 ? "text-[var(--color-text-main)] underline decoration-white/20 underline-offset-8" : "text-gray-500"}
                 >
                   {text}
                 </motion.span>
              ))}
           </motion.h3>
        </div>
      </div>
    </section>
  );
}
