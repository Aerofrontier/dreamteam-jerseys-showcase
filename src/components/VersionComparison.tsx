
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface VersionComparisonProps {
  sport: string;
  categories: string[];
}

const VersionComparison: React.FC<VersionComparisonProps> = ({ sport, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Solo mostrar para fútbol con versiones jugador/aficionado
  const shouldShow = sport === 'futbol' && 
    (categories.includes('version-jugador') || categories.includes('version-aficionado'));

  if (!shouldShow) return null;

  return (
    <div className="mb-8">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="w-full justify-between bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100"
          >
            <span className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              ¿Cuál es la diferencia entre Versión Jugador y Versión Aficionado?
            </span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              Diferencias entre versiones
            </DialogTitle>
            <DialogDescription className="text-center">
              Mira este video para entender las diferencias en calidad, materiales y precio
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
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
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors cursor-pointer" />
          </div>
          
          <p className="text-xs text-center text-gray-500 mt-3">
            *Próximamente: Video explicativo detallado
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VersionComparison;
