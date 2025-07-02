
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import ProductNavigation from '@/components/ProductNavigation';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Football = () => {
  const [selectedPath, setSelectedPath] = useState<string[]>([]);

  const handlePathChange = (path: string[]) => {
    setSelectedPath(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-3xl">
              ⚽
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fútbol</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra colección completa de jerseys de fútbol. Clubes europeos, 
              selecciones nacionales, Liga MX y más.
            </p>
          </div>
        </div>

        <ProductNavigation 
          selectedSport="futbol"
          selectedPath={selectedPath}
          onPathChange={handlePathChange}
        />
        
        {selectedPath.length > 0 && (
          <ProductGallery 
            selectedSport="futbol"
            selectedPath={selectedPath}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Football;
