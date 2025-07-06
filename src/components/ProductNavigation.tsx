
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';

interface ProductStructure {
  [key: string]: {
    name: string;
    children?: ProductStructure;
  };
}

const productStructure: ProductStructure = {
  futbol: {
    name: 'Fútbol',
    children: {
      hombre: {
        name: 'Hombre',
        children: {
          'nueva-temporada': {
            name: 'Nueva Temporada',
            children: {
              'version-jugador': { name: 'Versión Jugador' },
              'version-aficionado': { name: 'Versión Aficionado' }
            }
          },
          'jerseys-retro': {
            name: 'Jerseys Retro',
            children: {
              selecciones: {
                name: 'Selecciones',
                children: {
                  'version-jugador': { name: 'Versión Jugador' },
                  'version-aficionado': { name: 'Versión Aficionado' }
                }
              },
              equipos: {
                name: 'Equipos',
                children: {
                  'version-jugador': { name: 'Versión Jugador' },
                  'version-aficionado': { name: 'Versión Aficionado' }
                }
              }
            }
          },
          'kits-completos': { name: 'Kits Completos (Jerseys + Shorts)' }
        }
      },
      mujeres: {
        name: 'Mujeres',
        children: {
          'version-jugador': { name: 'Jerseys Versión Jugador' },
          'version-aficionado': { name: 'Jerseys Versión Aficionado' }
        }
      },
      ninos: {
        name: 'Niños',
        children: {
          'kits-completos': { name: 'Kits Completos (Jerseys + Shorts)' }
        }
      }
    }
  },
  f1: {
    name: 'Fórmula 1',
    children: {
      'tipo-polo': { name: 'Jerseys Tipo Polo' },
      'tipo-playera': { name: 'Jerseys Tipo Playera' },
      'manga-larga': { name: 'Jerseys Manga Larga' },
      hoodies: { name: 'Hoodies' }
    }
  },
  nfl: {
    name: 'NFL',
    children: {
      'version-campo': { name: 'Versión de Campo' },
      'version-aficionado': { name: 'Versión Aficionado' }
    }
  },
  mlb: {
    name: 'MLB',
    children: {
      'version-campo': { name: 'Versión de Campo' },
      'version-aficionado': { name: 'Versión Aficionado' }
    }
  },
  nba: {
    name: 'NBA',
    children: {
      'version-jugador': { name: 'Versión Jugador' },
      'version-aficionado': { name: 'Versión Aficionado' }
    }
  }
};

interface ProductNavigationProps {
  selectedSport: string;
  selectedPath: string[];
  onPathChange: (path: string[]) => void;
}

const ProductNavigation: React.FC<ProductNavigationProps> = ({
  selectedSport,
  selectedPath,
  onPathChange
}) => {
  const getCurrentLevel = () => {
    let current = productStructure[selectedSport];
    for (const step of selectedPath) {
      current = current?.children?.[step];
    }
    return current;
  };

  const handleSelection = (key: string) => {
    const newPath = [...selectedPath, key];
    onPathChange(newPath);
  };

  const handleBack = () => {
    const newPath = selectedPath.slice(0, -1);
    onPathChange(newPath);
  };

  const currentLevel = getCurrentLevel();
  if (!currentLevel?.children) return null;

  const isProductLevel = !Object.values(currentLevel.children).some(item => item.children);

  // Background images for sports
  const backgroundImages: { [key: string]: string } = {
    futbol: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200',
    f1: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200',
    nfl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200',
    nba: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200',
    mlb: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200'
  };

  // Category images
  const categoryImages: { [key: string]: string } = {
    hombre: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300',
    mujeres: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300',
    ninos: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300',
    'nueva-temporada': 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=300',
    'jerseys-retro': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300',
    'version-jugador': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300',
    'version-aficionado': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300',
    selecciones: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300',
    equipos: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300',
    'kits-completos': 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=300',
    'tipo-polo': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300',
    'tipo-playera': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300',
    'manga-larga': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300',
    hoodies: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300',
    'version-campo': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300'
  };

  return (
    <>
      <NavigationBreadcrumb 
        sport={selectedSport}
        selectedPath={selectedPath}
        onPathChange={onPathChange}
      />
      
      <section 
        className="section-padding bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImages[selectedSport] || backgroundImages.futbol})`
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {selectedPath.length > 0 && (
            <div className="mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </div>
          )}

          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {currentLevel.name} - Selecciona una categoría
            </h2>
            <p className="text-lg text-white/90">
              Explora las diferentes opciones disponibles
            </p>
          </div>

          <div className={`grid gap-6 justify-center ${
            Object.keys(currentLevel.children).length <= 2 
              ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
              : Object.keys(currentLevel.children).length <= 3
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {Object.entries(currentLevel.children).map(([key, item]) => (
              <Card
                key={key}
                className="sport-card cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
                onClick={() => handleSelection(key)}
              >
                <div className="relative h-32 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${categoryImages[key] || categoryImages.hombre})` }}>
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  {item.children && (
                    <p className="text-sm text-gray-600">
                      {Object.keys(item.children).length} opciones disponibles
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductNavigation;
