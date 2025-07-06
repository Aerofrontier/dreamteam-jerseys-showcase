
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import ProductNavigation from '@/components/ProductNavigation';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';

const NFL = () => {
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  const handlePathChange = (path: string[]) => {
    setSelectedPath(path);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  // Scroll to top when component mounts or path changes to show categories
  useEffect(() => {
    if (selectedPath.length === 0) {
      // Scroll to the categories section when deporte is selected
      const timer = setTimeout(() => {
        const element = document.getElementById('categories-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedPath]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Botón de regreso */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={handleBackToHome}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Button>
        </div>
      </div>

      <div id="categories-section">
        <ProductNavigation
          selectedSport="nfl"
          selectedPath={selectedPath}
          onPathChange={handlePathChange}
        />
      </div>
      
      <ProductGallery
        selectedSport="nfl"
        selectedPath={selectedPath}
        onPathChange={handlePathChange}
      />
      
      <Footer />
    </div>
  );
};

export default NFL;
