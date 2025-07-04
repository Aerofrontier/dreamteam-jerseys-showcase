
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BreadcrumbItem {
  name: string;
  path: string[];
  onClick: () => void;
}

interface NavigationBreadcrumbProps {
  sport: string;
  selectedPath: string[];
  onPathChange: (path: string[]) => void;
}

const NavigationBreadcrumb: React.FC<NavigationBreadcrumbProps> = ({
  sport,
  selectedPath,
  onPathChange
}) => {
  const sportNames: { [key: string]: string } = {
    futbol: 'Fútbol',
    nfl: 'NFL',
    nba: 'NBA',
    mlb: 'MLB',
    f1: 'Fórmula 1'
  };

  const pathNames: { [key: string]: string } = {
    'hombre': 'Hombre',
    'mujeres': 'Mujeres',
    'ninos': 'Niños',
    'nueva-temporada': 'Nueva Temporada',
    'jerseys-retro': 'Jerseys Retro',
    'version-jugador': 'Versión Jugador',
    'version-aficionado': 'Versión Aficionado',
    'selecciones': 'Selecciones',
    'equipos': 'Equipos',
    'kits-completos': 'Kits Completos',
    'tipo-polo': 'Tipo Polo',
    'tipo-playera': 'Tipo Playera',
    'manga-larga': 'Manga Larga',
    'hoodies': 'Hoodies',
    'version-campo': 'Versión de Campo'
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      name: sportNames[sport],
      path: [],
      onClick: () => onPathChange([])
    }
  ];

  // Build breadcrumb path
  for (let i = 0; i < selectedPath.length; i++) {
    const currentPath = selectedPath.slice(0, i + 1);
    breadcrumbItems.push({
      name: pathNames[selectedPath[i]] || selectedPath[i],
      path: currentPath,
      onClick: () => onPathChange(currentPath)
    });
  }

  if (breadcrumbItems.length <= 1) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          <Home className="w-4 h-4 text-gray-500" />
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
              <Button
                variant={index === breadcrumbItems.length - 1 ? "default" : "ghost"}
                size="sm"
                onClick={item.onClick}
                className={`px-3 py-2 h-auto text-sm transition-all duration-200 ${
                  index === breadcrumbItems.length - 1
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 hover:text-primary hover:bg-white/50'
                }`}
              >
                {item.name}
              </Button>
            </React.Fragment>
          ))}
        </nav>
        <div className="mt-2 text-xs text-gray-600">
          📍 Navega fácilmente entre categorías haciendo clic en cualquier nivel
        </div>
      </div>
    </div>
  );
};

export default NavigationBreadcrumb;
