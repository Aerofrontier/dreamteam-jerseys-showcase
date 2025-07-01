
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface ProductStructure {
  [key: string]: {
    name: string;
    children?: ProductStructure;
  };
}

// 🔥 ESTRUCTURA DE NAVEGACIÓN - AQUÍ PUEDES AGREGAR MÁS CATEGORÍAS Y SUBCATEGORÍAS
// Archivo: src/components/ProductNavigation.tsx - Líneas 15-80
// Para agregar nuevos deportes, categorías o subcategorías, modifica este objeto
// Cada nivel puede tener 'name' (nombre mostrado) y 'children' (subcategorías)
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
  // 🔥 PARA AGREGAR MÁS DEPORTES, AGREGA AQUÍ NUEVAS SECCIONES
  // Ejemplo: para agregar un nuevo deporte, sigue este formato:
  // 'nuevo-deporte': {
  //   name: 'Nombre del Deporte',
  //   children: {
  //     'categoria-1': { name: 'Categoría 1' },
  //     'categoria-2': { name: 'Categoría 2' }
  //   }
  // },
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
    const nextLevel = getCurrentLevel()?.children?.[key];
    
    if (nextLevel?.children) {
      onPathChange(newPath);
    } else {
      // Es un producto final
      onPathChange(newPath);
    }
  };

  const handleBack = () => {
    const newPath = selectedPath.slice(0, -1);
    onPathChange(newPath);
  };

  const currentLevel = getCurrentLevel();
  if (!currentLevel?.children) return null;

  const isProductLevel = !Object.values(currentLevel.children).some(item => item.children);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>{productStructure[selectedSport]?.name}</span>
            {selectedPath.map((step, index) => {
              let current = productStructure[selectedSport];
              for (let i = 0; i <= index; i++) {
                current = current?.children?.[selectedPath[i]];
              }
              return (
                <React.Fragment key={step}>
                  <ChevronRight className="w-4 h-4" />
                  <span>{current?.name}</span>
                </React.Fragment>
              );
            })}
          </div>

          {selectedPath.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="mt-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          )}
        </div>

        {/* Navigation Cards */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {currentLevel.name}
          </h2>
          <p className="text-lg text-gray-600">
            Selecciona una categoría para ver los productos disponibles
          </p>
        </div>

        {/* 🔥 DISEÑO DE TARJETAS DE NAVEGACIÓN */}
        {/* Archivo: src/components/ProductNavigation.tsx - Líneas 170-200 */}
        {/* Para cambiar el diseño de las tarjetas, modifica esta sección */}
        <div className={`grid gap-6 ${
          Object.keys(currentLevel.children).length <= 2 
            ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {Object.entries(currentLevel.children).map(([key, item]) => (
            <Card
              key={key}
              className="sport-card cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => handleSelection(key)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {/* 🔥 ÍCONOS DE CATEGORÍAS - AQUÍ PUEDES CAMBIAR LOS ÍCONOS */}
                    {/* Para cambiar los íconos, modifica esta línea */}
                    {isProductLevel ? '👕' : '📂'}
                  </span>
                </div>
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
  );
};

export default ProductNavigation;
