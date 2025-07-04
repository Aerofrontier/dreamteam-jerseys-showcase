
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
    <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          <Home className="w-4 h-4 text-gray-400" />
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
              <Button
                variant="ghost"
                size="sm"
                onClick={item.onClick}
                className={`px-2 py-1 h-auto text-sm ${
                  index === breadcrumbItems.length - 1
                    ? 'text-primary font-medium'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.name}
              </Button>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationBreadcrumb;
