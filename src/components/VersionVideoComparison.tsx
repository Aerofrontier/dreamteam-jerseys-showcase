import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface VersionVideoComparisonProps {
  sport: string;
  categories: string[];
}

const VersionVideoComparison: React.FC<VersionVideoComparisonProps> = ({ sport, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Solo mostrar para fútbol con versiones jugador/aficionado
  const shouldShow = sport === 'futbol' && 
    (categories.includes('version-jugador') || categories.includes('version-aficionado'));

  if (!shouldShow) return null;

  return (
    <div className="mb-8">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 cursor-pointer hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Play className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    ¿Cuál es la diferencia entre Versión Jugador y Versión Aficionado?
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Mira este video para entender las diferencias en calidad, materiales y precio
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Video Explicativo
                </Button>
              </div>
            </DialogTrigger>
            
            <DialogContent className="max-w-md p-0">
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg">
                    Diferencias entre versiones
                  </DialogTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <DialogDescription>
                  Conoce las diferencias en calidad, materiales y precio
                </DialogDescription>
              </DialogHeader>
              
              <div className="p-6 pt-0">
                <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
                  {/* Video de ejemplo - formato vertical */}
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=700&fit=crop"
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Tu navegador no soporta video HTML5.
                  </video>
                  
                  {/* Overlay de carga si no hay video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center text-white">
                      <Play className="w-12 h-12 mx-auto mb-2 opacity-80" />
                      <p className="text-sm opacity-80">Video explicativo</p>
                      <p className="text-xs opacity-60 mt-1">
                        Diferencias entre<br />
                        versiones de jerseys
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700">
                    📹 <strong>Video informativo:</strong> Este video te ayudará a elegir la versión correcta según tu presupuesto y necesidades.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default VersionVideoComparison;