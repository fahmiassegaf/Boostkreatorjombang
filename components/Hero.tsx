'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Marquee / Repeated Brand Text */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.02] overflow-hidden pointer-events-none select-none z-0 mix-blend-screen">
        <div className="flex animate-marquee whitespace-nowrap mb-[-2vw]">
          <div className="text-[20vw] font-serif tracking-tighter shrink-0 pr-[4vw] leading-none uppercase">
            KREATOR BOOST
          </div>
          <div className="text-[20vw] font-serif tracking-tighter shrink-0 pr-[4vw] leading-none uppercase">
            KREATOR BOOST
          </div>
        </div>
        <div className="flex animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          <div className="text-[20vw] font-light tracking-tighter shrink-0 pr-[4vw] leading-none uppercase">
            BATCH 1 JOMBANG
          </div>
          <div className="text-[20vw] font-light tracking-tighter shrink-0 pr-[4vw] leading-none uppercase">
            BATCH 1 JOMBANG
          </div>
        </div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 w-full z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Column: Typography */}
        <div className="w-full lg:w-[55%] flex flex-col items-start pt-12 md:pt-0">
          
          {/* Label Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10 md:mb-12"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-secondary)]">
              PROGRAM GRATIS &middot; BATCH 1 &middot; JOMBANG
            </span>
          </motion.div>

          {/* Giant Typography */}
          <div className="mb-10 lg:mb-12 flex flex-col gap-2">
            <div className="overflow-hidden py-2" style={{ transform: "perspective(1000px)" }}>
                <motion.h1
                  initial={{ opacity: 0, y: 120, rotateX: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[72px] sm:text-[100px] md:text-[120px] lg:text-[160px] font-serif font-light leading-[0.85] tracking-tight text-white drop-shadow-sm"
                  style={{ transformOrigin: "bottom center" }}
                >
                  Kreator
                </motion.h1>
            </div>
            <div className="overflow-hidden py-4 mt-[-10px] md:mt-[-20px]" style={{ transform: "perspective(1000px)" }}>
                <motion.h1
                  initial={{ opacity: 0, y: 120, rotateX: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[72px] sm:text-[100px] md:text-[120px] lg:text-[160px] font-serif font-light leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 drop-shadow-[0_20px_40px_rgba(255,255,255,0.05)] pb-4"
                  style={{ transformOrigin: "bottom center" }}
                >
                  Boost
                </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[480px]"
          >
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.44] tracking-[-0.3px] mb-8">
              Program gratis untuk kreator Jombang yang ingin mulai ngonten dengan script, collab post, mentoring, dan feedback langsung.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#daftar" className="inline-flex h-[56px] items-center justify-center px-8 text-[15px] font-medium text-[#050505] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-all duration-300">
                Daftar Batch 1
              </Link>
              <Link href="#program" className="inline-flex h-[56px] items-center justify-center px-8 text-[15px] font-medium text-[var(--color-text-main)] bg-transparent border border-[var(--color-border)] rounded-full hover:border-[var(--color-border-hover)] transition-all duration-300">
                Lihat Detail
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Hero Image/Mockup Grid */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[600px] relative aspect-square rounded-[32px] md:rounded-[48px] overflow-hidden group shadow-[0_0_100px_-20px_rgba(255,255,255,0.05)]"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            {/* Editorial Image provided by user */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
            <div className="absolute inset-0">
              <Image 
                src="/hero.png" 
                alt="Kreator Boost 3D Artwork" 
                fill 
                className="object-cover w-full h-full transform group-hover:scale-[1.05] transition-transform duration-[3s] ease-out will-change-transform" 
                priority
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Overlay to make it feel more integrated */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-80" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[32px] md:rounded-[48px] pointer-events-none" />
              
              {/* Overlay Labels */}
              <div className="absolute right-6 bottom-6 md:right-10 md:bottom-10 text-right z-10 transition-transform duration-700 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]">
                <div className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 mb-1 opacity-90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 bg-white/5 inline-block shadow-xl">Editorial</div>
              </div>
              
              <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 text-left z-10 transition-transform duration-700 group-hover:translate-x-[10px] group-hover:translate-y-[-10px]">
                 <div className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 mb-1 opacity-90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 bg-white/5 inline-block shadow-xl">Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
