'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import Image from 'next/image';

const steps: { cat: string; title: string; desc: string; visual: ReactNode }[] = [
  {
    cat: "Tahap 01",
    title: "Onboarding peserta",
    desc: "Masuk ke ekosistem komunitas dan grup diskusi eksklusif.",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="relative w-[70%] max-w-[300px] aspect-square flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src="/icon-1.png" 
            alt="Icon 1"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    )
  },
  {
    cat: "Tahap 02",
    title: "Terima script konten",
    desc: "Akses library script yang sudah disiapkan untuk dieksekusi.",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
          className="relative w-[70%] max-w-[300px] aspect-square flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src="/icon-2.png" 
            alt="Icon 2"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    )
  },
  {
    cat: "Tahap 03",
    title: "Rekam dengan gaya sendiri",
    desc: "Take video konten menggunakan style personal masing-masing.",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          className="relative w-[70%] max-w-[300px] aspect-square flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src="/icon-3.png" 
            alt="Icon 3"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    )
  },
  {
    cat: "Tahap 04",
    title: "Posting di akun pribadi",
    desc: "Publish hasil karya pertama atau langkah terbarumu.",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
          className="relative w-[70%] max-w-[300px] aspect-square flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src="/icon-4.png" 
            alt="Icon 4"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    )
  },
  {
    cat: "Tahap 05",
    title: "Ajukan collab post",
    desc: "Perluas jangkauan bersama akun resmi komunitas.",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="relative w-[70%] max-w-[300px] aspect-square flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src="/icon-5.png" 
            alt="Icon 5"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    )
  },
  {
    cat: "Tahap 06",
    title: "Dapat feedback konten",
    desc: "Evaluasi, perbaiki, dan teruskan progres dengan konsisten.",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5.8, ease: "easeInOut", repeat: Infinity, delay: 2.5 }}
          className="relative w-[70%] max-w-[300px] aspect-square flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src="/icon-6.png" 
            alt="Icon 6"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    )
  }
];

export default function ProgramShowcase() {
  return (
    <section id="alur" className="py-24 md:py-40 bg-[var(--color-bg-main)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[80px] lg:text-[100px] font-medium leading-[0.9] tracking-[-0.04em] text-white mb-20"
        >
          Yang akan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400">kamu jalani.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-6"
            >
              {/* Cinematic Card Placeholder */}
              <div className="w-full aspect-[4/3] bg-[#0a0a0a] border border-white/5 rounded-3xl md:rounded-[40px] overflow-hidden relative transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_80px_-16px_rgba(255,255,255,0.05)] group cursor-pointer">
                
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05)_0%,_transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Subtle Grid Backdrop */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

                {/* 3D Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                   {step.visual}
                </div>

                {/* Subtle abstraction */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
                
                {/* Top Label */}
                <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 z-10 transition-colors duration-500 group-hover:border-white/30 group-hover:text-white group-hover:bg-white/10">
                  Step 0{idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-3 px-2 pt-2">
                <span className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.15em] text-gray-400">
                  {step.cat}
                </span>
                <h3 className="text-[28px] md:text-[36px] font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-[16px] md:text-[17px] text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
