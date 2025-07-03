
import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface VideoExplainerProps {
  sport: string;
  categories: string[];
}

const VideoExplainer: React.FC<VideoExplainerProps> = ({ sport, categories }) => {
  // Solo mostrar el video para jerseys de fútbol con versiones jugador/aficionado
  const shouldShowVideo = sport === 'futbol' && 
    (categories.includes('version-jugador') || categories.includes('version-aficionado'));

  if (!shouldShowVideo) return null;

  return (
    <div className="mb-8">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ¿Cuál es la diferencia entre Versión Jugador y Versión Aficionado?
            </h3>
            <p className="text-sm text-gray-600">
              Mira este video para entender las diferencias en calidad, materiales y precio
            </p>
          </div>
          
          <div className="relative aspect-[9/16] max-w-xs mx-auto bg-gray-900 rounded-lg overflow-hidden">
            {/* Video placeholder - aquí iría el video real */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-12 h-12 mx-auto mb-2 opacity-80" />
                <p className="text-sm opacity-80">Video explicativo</p>
                <p className="text-xs opacity-60 mt-1">
                  Diferencias entre<br />
                  versiones de jerseys
                </p>
              </div>
            </div>
            
            {/* Overlay para simular que es clickeable */}
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors cursor-pointer" />
          </div>
          
          <p className="text-xs text-center text-gray-500 mt-3">
            *Próximamente: Video explicativo detallado
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoExplainer;
