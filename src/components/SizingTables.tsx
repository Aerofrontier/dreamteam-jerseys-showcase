import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface SizingTablesProps {
  selectedSport: string;
  selectedPath: string[];
}

const SizingTables: React.FC<SizingTablesProps> = ({ selectedSport, selectedPath }) => {
  // Datos completos de tallas para todos los deportes - formato con tallas en columnas
  const sizingData = {
    'futbol-jugador': {
      name: 'Fútbol - Hombre - Versión Jugador',
      measurements: [
        { measurement: 'Largo (cm)', S: '71', M: '73', L: '75', XL: '77', '2XL': '79' },
        { measurement: 'Busto (cm)', S: '46', M: '48', L: '50', XL: '52', '2XL': '54' },
        { measurement: 'Hombros (cm)', S: '41.5', M: '43', L: '44.5', XL: '46', '2XL': '47.5' },
        { measurement: 'Manga (cm)', S: '23.5', M: '24', L: '24.5', XL: '25', '2XL': '25.5' },
        { measurement: 'Altura Recomendada (cm)', S: '160-165', M: '165-170', L: '170-175', XL: '175-180', '2XL': '180-185' }
      ]
    },
    'futbol-aficionado': {
      name: 'Fútbol - Hombre - Versión Aficionado',
      measurements: [
        { measurement: 'Largo (cm)', S: '69', M: '73', L: '76', XL: '79', '2XL': '82' },
        { measurement: 'Busto (cm)', S: '50', M: '52', L: '54', XL: '56', '2XL': '58' },
        { measurement: 'Altura Recomendada (cm)', S: '165-170', M: '170-175', L: '175-180', XL: '180-185', '2XL': '185-190' },
        { measurement: 'Peso Recomendado (kg)', S: '47-62', M: '62-72', L: '72-82', XL: '82-92', '2XL': '92-100' }
      ]
    },
    'futbol-mujeres': {
      name: 'Fútbol - Mujeres - Versión Aficionado',
      measurements: [
        { measurement: 'Largo (cm)', S: '63', M: '65', L: '67', XL: '69' },
        { measurement: 'Busto (cm)', S: '40', M: '43', L: '46', XL: '48' },
        { measurement: 'Altura Recomendada (cm)', S: '155-160', M: '160-165', L: '165-173', XL: '173-180' },
        { measurement: 'Peso Recomendado (kg)', S: '40-50', M: '50-55', L: '55-60', XL: '60-65' }
      ]
    },
    'futbol-ninos': {
      name: 'Fútbol - Niños - Kits Completos',
      measurements: [
        { measurement: 'Talla (Número)', '3XS': '16', '2XS': '18', XS: '20', S: '22', M: '24', L: '26', XL: '28' },
        { measurement: 'Altura (cm)', '3XS': '95-105', '2XS': '105-115', XS: '115-125', S: '125-135', M: '135-145', L: '145-155', XL: '155-165' },
        { measurement: 'Edad', '3XS': '2-3', '2XS': '4-5', XS: '6-7', S: '8-9', M: '10-11', L: '12-13', XL: '14-15' },
        { measurement: '1/2 Busto (cm)', '3XS': '34', '2XS': '36', XS: '38', S: '40', M: '42', L: '44', XL: '46' },
        { measurement: 'Largo (cm)', '3XS': '43', '2XS': '47', XS: '50', S: '53', M: '56', L: '58', XL: '61' },
        { measurement: '1/2 Cintura (cm)', '3XS': '24-34', '2XS': '25-36', XS: '26-38', S: '27-40', M: '28-42', L: '29-44', XL: '30-46' },
        { measurement: 'Pantalón (cm)', '3XS': '29', '2XS': '31', XS: '33', S: '35', M: '37', L: '39', XL: '41' }
      ]
    },
    'f1': {
      name: 'Fórmula 1 - Tabla de Tallas para Adultos',
      measurements: [
        { measurement: 'Largo (cm)', S: '71', M: '73', L: '75', XL: '77', '2XL': '79', '3XL': '81', '4XL': '83', '5XL': '85' },
        { measurement: 'Busto (cm)', S: '52', M: '54', L: '56', XL: '58', '2XL': '60', '3XL': '62', '4XL': '64', '5XL': '66' },
        { measurement: 'Cintura (cm)', S: '49.5', M: '51.5', L: '53.5', XL: '55.5', '2XL': '57.5', '3XL': '59.5', '4XL': '61.5', '5XL': '63.5' },
        { measurement: 'Cadera (cm)', S: '52', M: '54', L: '56', XL: '58', '2XL': '60', '3XL': '62', '4XL': '64', '5XL': '66' },
        { measurement: 'Hombros (cm)', S: '45', M: '47', L: '49', XL: '51', '2XL': '53', '3XL': '55', '4XL': '57', '5XL': '59' },
        { measurement: 'Cuello (cm)', S: '19.5', M: '19.5', L: '19.5', XL: '19.5', '2XL': '19.5', '3XL': '21.5', '4XL': '21.5', '5XL': '21.5' },
        { measurement: 'Manga (cm)', S: '36.5', M: '38.5', L: '40.5', XL: '42.5', '2XL': '44.5', '3XL': '46.5', '4XL': '48.5', '5XL': '50.5' }
      ]
    },
    'nba': {
      name: 'NBA - Jersey Hombre',
      measurements: [
        { measurement: 'Ancho de Pecho (cm)', S: '51', M: '53.5', L: '56', XL: '58.5', '2XL': '61' },
        { measurement: 'Largo de la Prenda (cm)', S: '73', M: '76', L: '79', XL: '82', '2XL': '85' },
        { measurement: 'Altura Recomendada (cm)', S: '170', M: '175', L: '180', XL: '185', '2XL': '190' },
        { measurement: 'Peso Recomendado (kg)', S: '50-60', M: '60-70', L: '70-80', XL: '80-90', '2XL': '90-100' }
      ]
    },
    'nfl': {
      name: 'NFL - Jersey Hombre',
      measurements: [
        { measurement: 'Ancho de Pecho (cm)', S: '56', M: '58', L: '60', XL: '62', '2XL': '64', '3XL': '66' },
        { measurement: 'Largo de la Prenda (cm)', S: '80', M: '82', L: '84', XL: '86', '2XL': '88', '3XL': '90' }
      ]
    },
    'mlb': {
      name: 'MLB - Tabla de Tallas de Jerseys',
      measurements: [
        { measurement: 'Ancho de Hombros (cm)', S: '44', M: '46', L: '49', XL: '50', '2XL': '52', '3XL': '53' },
        { measurement: 'Contorno de Pecho (cm)', S: '100', M: '108', L: '116', XL: '122', '2XL': '132', '3XL': '138' },
        { measurement: 'Largo de la Prenda (cm)', S: '77', M: '78', L: '81', XL: '82', '2XL': '83', '3XL': '85' },
        { measurement: 'Largo de Manga (cm)', S: '34', M: '34', L: '36', XL: '36', '2XL': '36', '3XL': '36' },
        { measurement: 'Diámetro de Puño (cm)', S: '18', M: '19', L: '20', XL: '21', '2XL': '21', '3XL': '21' },
        { measurement: 'Estatura Recomendada (cm)', S: '168-173', M: '173-178', L: '178-183', XL: '188-195', '2XL': '195+', '3XL': '195+' }
      ]
    }
  };

  const getRelevantSizing = () => {
    const sport = selectedSport;
    const hasVersionJugador = selectedPath.includes('version-jugador');
    const hasVersionAficionado = selectedPath.includes('version-aficionado');
    const hasMujeres = selectedPath.includes('mujeres');
    const hasNinos = selectedPath.includes('ninos');
    
    let sizingKey = sport;
    
    if (sport === 'futbol') {
      if (hasNinos) {
        sizingKey = 'futbol-ninos';
      } else if (hasMujeres) {
        sizingKey = 'futbol-mujeres';
      } else if (hasVersionJugador) {
        sizingKey = 'futbol-jugador';
      } else if (hasVersionAficionado) {
        sizingKey = 'futbol-aficionado';
      } else {
        sizingKey = 'futbol-jugador'; // Default para fútbol
      }
    }
    
    return sizingData[sizingKey as keyof typeof sizingData];
  };

  const sizing = getRelevantSizing();

  if (!sizing) return null;

  // Obtener todas las tallas disponibles de la primera medida
  const availableSizes = Object.keys(sizing.measurements[0]).filter(key => key !== 'measurement');

  return (
    <div className="mt-12">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-xl flex items-center gap-2">
            📏 Guía de Tallas - {sizing.name}
            <Badge variant="secondary" className="text-xs">
              Medidas en cm
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Medida Corporal</TableHead>
                  {availableSizes.map((size) => (
                    <TableHead key={size} className="font-bold text-center">
                      {size}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sizing.measurements.map((measurement, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-primary">
                      {measurement.measurement}
                    </TableCell>
                    {availableSizes.map((size) => (
                      <TableCell key={size} className="text-center">
                        {measurement[size as keyof typeof measurement]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              💡 <strong>Nota:</strong> Las medidas pueden variar entre 1-4 cm debido a diferencias en el método de medición. Selecciona según tus medidas reales.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizingTables;