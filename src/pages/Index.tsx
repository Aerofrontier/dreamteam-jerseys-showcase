
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SportsSelector from '@/components/SportsSelector';
import BestSellers from '@/components/BestSellers';
import ProductNavigation from '@/components/ProductNavigation';
import ProductGallery from '@/components/ProductGallery';
import FAQ from '@/components/FAQ';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  const handleSportChange = (sport: string) => {
    setSelectedSport(sport);
    setSelectedPath([]);
  };

  const handlePathChange = (path: string[]) => {
    setSelectedPath(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SportsSelector selectedSport={selectedSport} onSportChange={handleSportChange} />
      <BestSellers />
      
      {selectedSport && (
        <>
          <ProductNavigation 
            selectedSport={selectedSport}
            selectedPath={selectedPath}
            onPathChange={handlePathChange}
          />
          
          {selectedPath.length > 0 && (
            <ProductGallery 
              selectedSport={selectedSport}
              selectedPath={selectedPath}
            />
          )}
        </>
      )}
      
      <FAQ />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
