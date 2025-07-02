
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import ProductNavigation from '@/components/ProductNavigation';
import ProductGallery from '@/components/ProductGallery';
import Footer from '@/components/Footer';

const Baseball = () => {
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
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl">
              ⚾
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">MLB</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jerseys oficiales de las Grandes Ligas. Todos los equipos, versiones auténticas.
            </p>
          </div>
        </div>

        <ProductNavigation 
          selectedSport="mlb"
          selectedPath={selectedPath}
          onPathChange={handlePathChange}
        />
        
        {selectedPath.length > 0 && (
          <ProductGallery 
            selectedSport="mlb"
            selectedPath={selectedPath}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Baseball;
