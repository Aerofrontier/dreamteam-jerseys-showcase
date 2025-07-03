
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Compare } from 'lucide-react';

interface SizeComparatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SizeData {
  category: string;
  size: string;
  measurements: { [key: string]: string };
}

const SizeComparator: React.FC<SizeComparatorProps> = ({ isOpen, onClose }) => {
  const [selectedGender, setSelectedGender] = useState<'hombre' | 'mujer' | 'ninos'>('hombre');
  const [comparisonData, setComparisonData] = useState<SizeData[]>([]);

  // Datos de tallas por categoría y género
  const sizeData = {
    hombre: {
      'Fútbol Versión Jugador': {
        'S': { largo: '71', pecho: '46', hombros: '41.5', manga: '23.5' },
        'M': { largo: '73', pecho: '48', hombros: '43', manga: '24' },
        'L': { largo: '75', pecho: '50', hombros: '44.5', manga: '24.5' },
        'XL': { largo: '77', pecho: '52', hombros: '46', manga: '25' },
        'XXL': { largo: '79', pecho: '54', hombros: '47.5', manga: '25.5' }
      },
      'Fútbol Versión Aficionado': {
        'S': { largo: '69', busto: '50', altura: '165-170', peso: '47-62' },
        'M': { largo: '73', busto: '52', altura: '170-175', peso: '62-72' },
        'L': { largo: '76', busto: '54', altura: '175-180', peso: '72-82' },
        'XL': { largo: '79', busto: '56', altura: '180-185', peso: '82-92' },
        'XXL': { largo: '82', busto: '58', altura: '185-190', peso: '92-100' }
      },
      'NBA': {
        'S': { anchoPecho: '51', largoPrenda: '73', altura: '170', peso: '50-60' },
        'M': { anchoPecho: '53.5', largoPrenda: '76', altura: '175', peso: '60-70' },
        'L': { anchoPecho: '56', largoPrenda: '79', altura: '180', peso: '70-80' },
        'XL': { anchoPecho: '58.5', largoPrenda: '82', altura: '185', peso: '80-90' },
        'XXL': { anchoPecho: '61', largoPrenda: '85', altura: '190', peso: '90-100' }
      },
      'NFL': {
        'S': { anchoPecho: '56', largoPrenda: '80' },
        'M': { anchoPecho: '58', largoPrenda: '82' },
        'L': { anchoPecho: '60', largoPrenda: '84' },
        'XL': { anchoPecho: '62', largoPrenda: '86' },
        'XXL': { anchoPecho: '64', largoPrenda: '88' }
      },
      'Fórmula 1': {
        'S': { largo: '71', pecho: '52', cintura: '49.5', hombros: '45' },
        'M': { largo: '73', pecho: '54', cintura: '51.5', hombros: '47' },
        'L': { largo: '75', pecho: '56', cintura: '53.5', hombros: '49' },
        'XL': { largo: '77', pecho: '58', cintura: '55.5', hombros: '51' },
        'XXL': { largo: '79', pecho: '60', cintura: '57.5', hombros: '53' }
      },
      'MLB': {
        'S': { anchoHombros: '44', contornoPecho: '100', largoPrenda: '77' },
        'M': { anchoHombros: '46', contornoPecho: '108', largoPrenda: '78' },
        'L': { anchoHombros: '49', contornoPecho: '116', largoPrenda: '81' },
        'XL': { anchoHombros: '50', contornoPecho: '122', largoPrenda: '82' },
        'XXL': { anchoHombros: '52', contornoPecho: '132', largoPrenda: '83' }
      }
    },
    mujer: {
      'Fútbol Versión Aficionado': {
        'S': { largo: '63', busto: '40', altura: '155-160', peso: '40-50' },
        'M': { largo: '65', busto: '43', altura: '160-165', peso: '50-55' },
        'L': { largo: '67', busto: '46', altura: '165-173', peso: '55-60' },
        'XL': { largo: '69', busto: '48', altura: '173-180', peso: '60-65' }
      }
    },
    ninos: {
      'Fútbol Kit Completo': {
        '3XS': { talla: '16', altura: '95-105', edad: '2-3', busto: '34', largo: '43' },
        '2XS': { talla: '18', altura: '105-115', edad: '4-5', busto: '36', largo: '47' },
        'XS': { talla: '20', altura: '115-125', edad: '6-7', busto: '38', largo: '50' },
        'S': { talla: '22', altura: '125-135', edad: '8-9', busto: '40', largo: '53' },
        'M': { talla: '24', altura: '135-145', edad: '10-11', busto: '42', largo: '56' },
        'L': { talla: '26', altura: '145-155', edad: '12-13', busto: '44', largo: '58' },
        'XL': { talla: '28', altura: '155-165', edad: '14-15', busto: '46', largo: '61' }
      }
    }
  };

  const addToComparison = (category: string, size: string) => {
    const categoryData = sizeData[selectedGender][category as keyof typeof sizeData[typeof selectedGender]];
    if (categoryData && categoryData[size as keyof typeof categoryData]) {
      const newItem: SizeData = {
        category,
        size,
        measurements: categoryData[size as keyof typeof categoryData] as { [key: string]: string }
      };
      
      // Evitar duplicados
      const exists = comparisonData.some(item => 
        item.category === category && item.size === size
      );
      
      if (!exists) {
        setComparisonData([...comparisonData, newItem]);
      }
    }
  };

  const removeFromComparison = (index: number) => {
    setComparisonData(comparisonData.filter((_, i) => i !== index));
  };

  const clearComparison = () => {
    setComparisonData([]);
  };

  const getAllMeasurementKeys = () => {
    const keys = new Set<string>();
    comparisonData.forEach(item => {
      Object.keys(item.measurements).forEach(key => keys.add(key));
    });
    return Array.from(keys);
  };

  const getMeasurementLabel = (key: string) => {
    const labels: { [key: string]: string } = {
      largo: 'Largo (cm)',
      pecho: 'Pecho (cm)',
      hombros: 'Hombros (cm)',
      manga: 'Manga (cm)',
      busto: 'Busto (cm)',
      altura: 'Altura',
      peso: 'Peso (kg)',
      anchoPecho: 'Ancho Pecho (cm)',
      largoPrenda: 'Largo Prenda (cm)',
      cintura: 'Cintura (cm)',
      talla: 'Talla (Número)',
      edad: 'Edad',
      contornoPecho: 'Contorno Pecho (cm)',
      anchoHombros: 'Ancho Hombros (cm)'
    };
    return labels[key] || key;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-auto">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Compare className="w-6 h-6" />
              Comparador de Medidas
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Selector de género */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Seleccionar categoría:</label>
            <div className="flex gap-2">
              {(['hombre', 'mujer', 'ninos'] as const).map((gender) => (
                <Button
                  key={gender}
                  variant={selectedGender === gender ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedGender(gender);
                    clearComparison();
                  }}
                  className="capitalize"
                >
                  {gender === 'ninos' ? 'Niños' : gender === 'mujer' ? 'Mujer' : 'Hombre'}
                </Button>
              ))}
            </div>
          </div>

          {/* Agregar productos para comparar */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Agregar producto para comparar:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(sizeData[selectedGender]).map(([category, sizes]) => (
                <Card key={category} className="p-4">
                  <h4 className="font-medium mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(sizes).map((size) => (
                      <Button
                        key={size}
                        size="sm"
                        variant="outline"
                        onClick={() => addToComparison(category, size)}
                        className="text-xs"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tabla de comparación */}
          {comparisonData.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Comparación de Medidas</h3>
                <Button variant="outline" size="sm" onClick={clearComparison}>
                  Limpiar todo
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-3 py-2 text-left font-medium">Medida</th>
                      {comparisonData.map((item, index) => (
                        <th key={index} className="border border-gray-300 px-3 py-2 text-center min-w-[120px]">
                          <div className="flex flex-col items-center gap-1">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <span className="font-bold text-primary">{item.size}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromComparison(index)}
                              className="text-red-500 hover:text-red-700 p-1 h-auto"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getAllMeasurementKeys().map((measurementKey) => (
                      <tr key={measurementKey} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium bg-gray-50">
                          {getMeasurementLabel(measurementKey)}
                        </td>
                        {comparisonData.map((item, index) => (
                          <td key={index} className="border border-gray-300 px-3 py-2 text-center">
                            {item.measurements[measurementKey] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {comparisonData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Compare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Selecciona productos y tallas para comenzar a comparar medidas</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeComparator;
