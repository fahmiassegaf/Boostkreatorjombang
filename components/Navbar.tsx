'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-main)]/80 backdrop-blur-md"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        <Link href="#" className="flex flex-col z-50 relative">
          <span className="text-[18px] md:text-[20px] font-medium tracking-tight text-[var(--color-text-main)] leading-none">Boost Kreator</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#program" className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Program</Link>
          <Link href="#benefit" className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Benefit</Link>
          <Link href="#alur" className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Alur</Link>
          <Link href="#faq" className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">FAQ</Link>
        </div>

        {/* Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4 z-50 relative">
          <Link href="#daftar" className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-medium text-[var(--color-bg-main)] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300">
            Daftar
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-[var(--color-text-main)] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-[var(--color-text-main)] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-[var(--color-text-main)] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-[var(--color-bg-main)] z-40 flex flex-col pt-[100px] px-6"
          >
            <div className="flex flex-col gap-8">
              <Link href="#program" onClick={() => setIsOpen(false)} className="text-[32px] font-light text-[var(--color-text-main)] tracking-[-1px] border-b border-[var(--color-border)] pb-4">Program</Link>
              <Link href="#benefit" onClick={() => setIsOpen(false)} className="text-[32px] font-light text-[var(--color-text-main)] tracking-[-1px] border-b border-[var(--color-border)] pb-4">Benefit</Link>
              <Link href="#alur" onClick={() => setIsOpen(false)} className="text-[32px] font-light text-[var(--color-text-main)] tracking-[-1px] border-b border-[var(--color-border)] pb-4">Alur</Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="text-[32px] font-light text-[var(--color-text-main)] tracking-[-1px] border-b border-[var(--color-border)] pb-4">FAQ</Link>
              <Link href="#daftar" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center h-[56px] mt-4 text-[15px] font-medium text-[#050505] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-all">
                Daftar Gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
