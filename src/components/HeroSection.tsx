
import React from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 sports-gradient"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            DreamTeam
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-light mt-2">
              Sport Jerseys
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 opacity-90">
            Réplicas que juegan como originales
          </p>
          
          <p className="text-lg sm:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Descubre nuestra colección de jerseys deportivos de alta calidad. 
            Desde fútbol hasta F1, tenemos el jersey perfecto para cada fanático.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              onClick={() => scrollToSection('deportes')}
            >
              Explorar Deportes
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium"
              onClick={() => scrollToSection('destacados')}
            >
              Ver Destacados
            </Button>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('deportes')}
              className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors group"
            >
              <span className="text-sm font-medium">Descubre más</span>
              <ArrowDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
