'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nama: '',
    domisili: '',
    usia: '',
    akun: '',
    level: '',
    kendala: '',
    kesiapan: '',
    pahamGratis: false
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pahamGratis) {
      setError('Centang persetujuan program gratis terlebih dahulu.');
      return;
    }

    const rawText = `Halo Admin Komunitas Kreator Jombang, saya ingin daftar Boost Kreator Batch 1.

Nama: ${formData.nama}
Domisili: ${formData.domisili}
Usia: ${formData.usia}
Akun IG/TikTok: ${formData.akun}
Level saat ini: ${formData.level}
Kendala terbesar: ${formData.kendala}
Kesiapan posting dan collab: ${formData.kesiapan}

Saya paham program ini gratis dan siap mengikuti prosesnya.`;

    const encoded = encodeURIComponent(rawText);
    window.open(`https://wa.me/6285815146250?text=${encoded}`, '_blank');
  }

  return (
    <section id="daftar" className="py-24 md:py-40 bg-[var(--color-bg-surface)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
         
         <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/3"
         >
            <h2 className="text-[48px] md:text-[64px] lg:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)] mb-6">
              Daftar<br />Batch 1.
            </h2>
            <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] max-w-sm">
              Isi data singkat. Setelah submit, kamu akan diarahkan ke WhatsApp admin Komunitas Kreator Jombang.
            </p>
         </motion.div>

         <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit} 
            className="lg:w-2/3 flex flex-col gap-8 md:gap-12 pt-4"
         >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <label htmlFor="nama" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Nama lengkap</label>
                <input id="nama" required type="text" value={formData.nama} onChange={e => setFormData({...formData, nama: e.target.value})} className="w-full h-12 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors placeholder:text-[var(--color-text-muted)] rounded-none px-0" placeholder="Ahmad Reza" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="domisili" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Domisili</label>
                <input id="domisili" required type="text" value={formData.domisili} onChange={e => setFormData({...formData, domisili: e.target.value})} className="w-full h-12 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors placeholder:text-[var(--color-text-muted)] rounded-none px-0" placeholder="Diwek, Jombang" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col gap-3">
                <label htmlFor="usia" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Usia</label>
                <input id="usia" required type="number" value={formData.usia} onChange={e => setFormData({...formData, usia: e.target.value})} className="w-full h-12 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors placeholder:text-[var(--color-text-muted)] rounded-none px-0" placeholder="20" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="akun" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Akun Instagram/TikTok</label>
                <input id="akun" required type="text" value={formData.akun} onChange={e => setFormData({...formData, akun: e.target.value})} className="w-full h-12 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors placeholder:text-[var(--color-text-muted)] rounded-none px-0" placeholder="@username" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="level" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Level saat ini</label>
              <div className="relative">
                <select id="level" required value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="w-full h-12 appearance-none bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors rounded-none px-0 pb-2">
                  <option value="" disabled className="bg-[var(--color-bg-surface)] text-[var(--color-text-muted)]">Pilih level...</option>
                  <option value="Belum pernah ngonten" className="bg-[var(--color-bg-surface)]">Belum pernah ngonten</option>
                  <option value="Pernah ngonten tapi tidak konsisten" className="bg-[var(--color-bg-surface)]">Pernah ngonten tapi tidak konsisten</option>
                  <option value="Sudah aktif tapi ingin berkembang" className="bg-[var(--color-bg-surface)]">Sudah aktif tapi ingin berkembang</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] pb-2">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="kendala" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Kendala terbesar saat ngonten</label>
              <textarea id="kendala" required value={formData.kendala} onChange={e => setFormData({...formData, kendala: e.target.value})} rows={1} className="w-full bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors placeholder:text-[var(--color-text-muted)] resize-none rounded-none px-0 py-2" placeholder="Tuliskan singkat kendalamu..." />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="kesiapan" className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">Bersedia posting dan collab dengan akun komunitas?</label>
              <div className="relative">
                <select id="kesiapan" required value={formData.kesiapan} onChange={e => setFormData({...formData, kesiapan: e.target.value})} className="w-full h-12 appearance-none bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-main)] text-[16px] md:text-[18px] focus:outline-none focus:border-[var(--color-text-main)] transition-colors rounded-none px-0 pb-2">
                  <option value="" disabled className="bg-[var(--color-bg-surface)] text-[var(--color-text-muted)]">Pilih jawaban...</option>
                  <option value="Ya, saya siap" className="bg-[var(--color-bg-surface)]">Ya, saya siap</option>
                  <option value="Saya masih ingin tanya dulu" className="bg-[var(--color-bg-surface)]">Saya masih ingin tanya dulu</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)] pb-2">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <label htmlFor="paham" className="flex items-start gap-4 cursor-pointer group w-max">
                <div className="relative flex items-center justify-center mt-1">
                  <input id="paham" type="checkbox" checked={formData.pahamGratis} onChange={e => {
                    setFormData({...formData, pahamGratis: e.target.checked});
                    if(e.target.checked) setError('');
                  }} className="peer sr-only" />
                  <div className="w-4 h-4 border border-[var(--color-text-muted)] rounded-sm bg-transparent peer-checked:bg-[var(--color-text-main)] peer-checked:border-[var(--color-text-main)] transition-colors" />
                  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="absolute opacity-0 peer-checked:opacity-100 transition-opacity"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-[14px] md:text-[15px] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-main)] transition-colors">Saya paham program ini gratis dan siap mengikuti prosesnya.</span>
              </label>

              {error && <div className="text-[var(--color-accent)] text-sm">{error}</div>}

              <button type="submit" className="mt-4 inline-flex h-[56px] items-center justify-center px-8 text-[15px] font-medium text-[#050505] bg-[var(--color-text-main)] rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 w-max">
                Kirim via WhatsApp
              </button>
            </div>
         </motion.form>
      </div>
    </section>
  );
}
