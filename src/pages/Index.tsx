
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import SportsSelector from '@/components/SportsSelector';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BestSellers />
      <SportsSelector />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
