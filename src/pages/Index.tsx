
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SportsSelector from '@/components/SportsSelector';
import BestSellers from '@/components/BestSellers';
import FAQ from '@/components/FAQ';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SportsSelector />
      <BestSellers />
      <FAQ />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
