'use client';

import { motion } from 'motion/react';

const helps = [
  {
    num: "01",
    title: "Script Konten",
    desc: "Script disiapkan agar peserta tidak berhenti di ide."
  },
  {
    num: "02",
    title: "Collab Post",
    desc: "Konten dapat diajukan untuk collab dengan akun komunitas."
  },
  {
    num: "03",
    title: "Mentoring",
    desc: "Sesi online dan offline untuk membahas proses dan kendala."
  },
  {
    num: "04",
    title: "Feedback",
    desc: "Konten dievaluasi agar peserta tahu apa yang perlu diperbaiki."
  }
];

export default function WhatYouGet() {
  return (
    <section id="program" className="py-24 md:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3 pt-4"
          >
            <h2 className="text-[48px] md:text-[64px] lg:text-[82px] font-light leading-[0.92] tracking-[-2px] md:tracking-[-3px] text-[var(--color-text-main)] max-w-sm">
              Apa yang dibantu?
            </h2>
          </motion.div>

          <div className="lg:w-2/3 w-full flex flex-col">
            {helps.map((help, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-10 md:py-16 border-t border-[var(--color-border)] transition-colors duration-500 hover:border-[var(--color-border-hover)]"
              >
                <div className="text-[20px] md:text-[24px] font-light text-[var(--color-text-muted)] group-hover:text-[var(--color-text-main)] transition-colors duration-500">
                  {help.num}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] md:text-[40px] font-light tracking-[-1px] text-[var(--color-text-main)] leading-[1.1]">
                    {help.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.5] max-w-md">
                    {help.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
