
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Sport {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

const sports: Sport[] = [
  { 
    id: 'futbol', 
    name: 'Fútbol', 
    icon: '⚽', 
    description: 'Clubes europeos, selecciones, Liga MX',
    color: 'from-green-500 to-green-600'
  },
  { 
    id: 'nfl', 
    name: 'NFL', 
    icon: '🏈', 
    description: 'Todos los equipos de la NFL',
    color: 'from-orange-500 to-red-600'
  },
  { 
    id: 'nba', 
    name: 'NBA', 
    icon: '🏀', 
    description: 'Jerseys de basketball profesional',
    color: 'from-orange-600 to-red-500'
  },
  { 
    id: 'mlb', 
    name: 'MLB', 
    icon: '⚾', 
    description: 'Béisbol de las Grandes Ligas',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    id: 'f1', 
    name: 'Fórmula 1', 
    icon: '🏎️', 
    description: 'Equipos y pilotos de F1',
    color: 'from-red-500 to-red-600'
  }
];

interface SportsSelectorProps {
  selectedSport: string;
  onSportChange: (sport: string) => void;
}

const SportsSelector: React.FC<SportsSelectorProps> = ({ selectedSport, onSportChange }) => {
  return (
    <section id="deportes" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Elige tu Deporte
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia selección de jerseys organizados por deporte. 
            Cada categoría incluye versiones para jugador, aficionado, niños y mujeres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sports.map((sport) => (
            <Card 
              key={sport.id}
              className={`sport-card cursor-pointer transition-all duration-300 ${
                selectedSport === sport.id 
                  ? 'ring-2 ring-primary shadow-lg transform scale-105' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => onSportChange(sport.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${sport.color} flex items-center justify-center text-2xl`}>
                  {sport.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {sport.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {sport.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-sm text-blue-700">
            <span>💡</span>
            <span>¿Buscas algo específico? ¡Contáctanos por WhatsApp!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSelector;
