import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroStrip from '@/components/IntroStrip';
import WhatYouGet from '@/components/WhatYouGet';
import ProgramShowcase from '@/components/ProgramShowcase';
import FreePricing from '@/components/FreePricing';
import Target from '@/components/Target';
import Flow from '@/components/Flow';
import FAQ from '@/components/FAQ';
import RegistrationForm from '@/components/RegistrationForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <Navbar />
      <Hero />
      <IntroStrip />
      <WhatYouGet />
      <ProgramShowcase />
      <FreePricing />
      <Target />
      <Flow />
      <FAQ />
      <RegistrationForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
