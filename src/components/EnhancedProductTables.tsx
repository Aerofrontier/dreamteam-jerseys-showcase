
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface EnhancedProductTablesProps {
  selectedSport: string;
  selectedPath: string[];
}

const EnhancedProductTables: React.FC<EnhancedProductTablesProps> = ({
  selectedSport,
  selectedPath
}) => {
  // Datos completos de tallas
  const sizingData = {
    f1: {
      name: 'Fórmula 1 - Hombre - Única',
      sizes: [
        { size: 'S', largo: '71', busto: '52', cintura: '49.5', cadera: '52', hombros: '45', cuello: '19.5', manga: '36.5' },
        { size: 'M', largo: '73', busto: '54', cintura: '51.5', cadera: '54', hombros: '47', cuello: '19.5', manga: '38.5' },
        { size: 'L', largo: '75', busto: '56', cintura: '53.5', cadera: '56', hombros: '49', cuello: '19.5', manga: '40.5' },
        { size: 'XL', largo: '77', busto: '58', cintura: '55.5', cadera: '58', hombros: '51', cuello: '19.5', manga: '42.5' },
        { size: '2XL', largo: '79', busto: '60', cintura: '57.5', cadera: '60', hombros: '53', cuello: '19.5', manga: '44.5' },
        { size: '3XL', largo: '81', busto: '62', cintura: '59.5', cadera: '62', hombros: '55', cuello: '21.5', manga: '46.5' },
        { size: '4XL', largo: '83', busto: '64', cintura: '61.5', cadera: '64', hombros: '57', cuello: '21.5', manga: '48.5' },
        { size: '5XL', largo: '85', busto: '66', cintura: '63.5', cadera: '66', hombros: '59', cuello: '21.5', manga: '50.5' }
      ]
    },
    'futbol-jugador': {
      name: 'Fútbol - Hombre - Versión Jugador',
      sizes: [
        { size: 'S', largo: '71', busto: '46', hombros: '41.5', manga: '23.5', altura: '160-165' },
        { size: 'M', largo: '73', busto: '48', hombros: '43', manga: '24', altura: '165-170' },
        { size: 'L', largo: '75', busto: '50', hombros: '44.5', manga: '24.5', altura: '170-175' },
        { size: 'XL', largo: '77', busto: '52', hombros: '46', manga: '25', altura: '175-180' },
        { size: '2XL', largo: '79', busto: '54', hombros: '47.5', manga: '25.5', altura: '180-185' }
      ]
    },
    'nba': {
      name: 'NBA - Hombre - Bordada',
      sizes: [
        { size: 'S', busto: '50', largoPrenda: '76', alturaRecomendada: '170', pesoRecomendado: '50-60' },
        { size: 'M', busto: '53', largoPrenda: '79', alturaRecomendada: '175', pesoRecomendado: '60-70' },
        { size: 'L', busto: '56', largoPrenda: '82', alturaRecomendada: '180', pesoRecomendado: '70-80' },
        { size: 'XL', busto: '58', largoPrenda: '85', alturaRecomendada: '185', pesoRecomendado: '80-90' },
        { size: '2XL', busto: '61', largoPrenda: '88', alturaRecomendada: '190', pesoRecomendado: '90-100' }
      ]
    },
    'nfl': {
      name: 'NFL - Prensada por calor',
      sizes: [
        { size: 'S', busto: '56', largoPrenda: '80' },
        { size: 'M', busto: '58', largoPrenda: '82' },
        { size: 'L', busto: '60', largoPrenda: '84' },
        { size: 'XL', busto: '62', largoPrenda: '86' },
        { size: '2XL', busto: '64', largoPrenda: '88' },
        { size: '3XL', busto: '66', largoPrenda: '90' }
      ]
    }
  };

  // Datos completos de precios
  const pricingData = {
    'futbol-jugador': {
      name: 'Fútbol - Jersey Versión Jugador',
      prices: [
        { quantity: '1 pieza', mangaCorta: 650, mangaLarga: 700 },
        { quantity: '2 piezas (cada una)', mangaCorta: 600, mangaLarga: 650 },
        { quantity: '3-5 piezas (cada una)', mangaCorta: 575, mangaLarga: 625 },
        { quantity: '6-15 piezas (cada una)', mangaCorta: 550, mangaLarga: 600 }
      ],
      customization: [
        { option: 'Nombre y número', price: 50 },
        { option: 'Parches', price: 75 },
        { option: 'Nombre + número + parches', price: 100 }
      ]
    },
    'futbol-aficionado': {
      name: 'Fútbol - Jersey Versión Aficionado',
      prices: [
        { quantity: '1 pieza', mangaCorta: 600, mangaLarga: 650 },
        { quantity: '2 piezas (cada una)', mangaCorta: 550, mangaLarga: 600 },
        { quantity: '3-5 piezas (cada una)', mangaCorta: 525, mangaLarga: 575 },
        { quantity: '6-15 piezas (cada una)', mangaCorta: 500, mangaLarga: 550 }
      ],
      customization: [
        { option: 'Nombre y número', price: 50 },
        { option: 'Parches', price: 75 },
        { option: 'Nombre + número + parches', price: 100 }
      ]
    },
    f1: {
      name: 'Fórmula 1 - Jersey',
      prices: [
        { quantity: '1 pieza', desde: 600, hasta: 800 },
        { quantity: '2 piezas (cada una)', desde: 575, hasta: 775 },
        { quantity: '3-5 piezas (cada una)', desde: 550, hasta: 750 },
        { quantity: '6+ piezas (cada una)', desde: 525, hasta: 725 }
      ]
    },
    nba: {
      name: 'NBA - Jersey',
      prices: [
        { quantity: '1 pieza', desde: 650, hasta: 750 },
        { quantity: '2 piezas (cada una)', desde: 625, hasta: 725 },
        { quantity: '3-5 piezas (cada una)', desde: 600, hasta: 700 },
        { quantity: '6+ piezas (cada una)', desde: 575, hasta: 675 }
      ]
    },
    'nfl-mlb': {
      name: 'NFL/MLB - Jersey',
      prices: [
        { quantity: '1 pieza', desde: 750, hasta: 800 },
        { quantity: '2 piezas (cada una)', desde: 725, hasta: 775 },
        { quantity: '3-5 piezas (cada una)', desde: 700, hasta: 750 },
        { quantity: '6+ piezas (cada una)', desde: 675, hasta: 725 }
      ]
    }
  };

  const getRelevantData = () => {
    const sport = selectedSport;
    const hasVersionJugador = selectedPath.includes('version-jugador');
    const hasVersionAficionado = selectedPath.includes('version-aficionado');
    
    let sizingKey = sport;
    let pricingKey = sport;
    
    if (sport === 'futbol') {
      if (hasVersionJugador) {
        sizingKey = 'futbol-jugador';
        pricingKey = 'futbol-jugador';
      } else if (hasVersionAficionado) {
        pricingKey = 'futbol-aficionado';
      }
    } else if (sport === 'mlb') {
      pricingKey = 'nfl-mlb';
    }
    
    return {
      sizing: sizingData[sizingKey as keyof typeof sizingData],
      pricing: pricingData[pricingKey as keyof typeof pricingData]
    };
  };

  const { sizing, pricing } = getRelevantData();

  if (!sizing && !pricing) return null;

  const getColumnTitle = (key: string) => {
    const titles: { [key: string]: string } = {
      largo: 'Largo (cm)',
      busto: 'Busto (cm)', 
      cintura: 'Cintura (cm)',
      cadera: 'Cadera (cm)',
      hombros: 'Hombros (cm)',
      cuello: 'Cuello (cm)',
      manga: 'Manga (cm)',
      largoPrenda: 'Largo Prenda (cm)',
      altura: 'Altura (cm)',
      alturaRecomendada: 'Altura Sugerida',
      pesoRecomendado: 'Peso Sugerido (kg)'
    };
    return titles[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="mt-12 space-y-8">
      {/* Tabla de Tallas */}
      {sizing && (
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
                    <TableHead className="font-bold">Talla</TableHead>
                    {Object.keys(sizing.sizes[0]).filter(key => key !== 'size').map((key) => (
                      <TableHead key={key} className="font-bold">
                        {getColumnTitle(key)}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizing.sizes.map((size, sizeIndex) => (
                    <TableRow key={sizeIndex} className="hover:bg-gray-50">
                      <TableCell className="font-bold text-primary">{size.size}</TableCell>
                      {Object.entries(size).filter(([key]) => key !== 'size').map(([key, value]) => (
                        <TableCell key={key}>{String(value)}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                💡 <strong>Nota:</strong> Las medidas pueden variar entre 1-4 cm debido a diferencias en el método de medición.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tabla de Precios */}
      {pricing && (
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-xl flex items-center gap-2">
              💰 Precios - {pricing.name}
              <Badge variant="secondary" className="text-xs">
                Pesos MX
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Cantidad</TableHead>
                  {'mangaCorta' in pricing.prices[0] ? (
                    <>
                      <TableHead className="font-bold">Manga Corta</TableHead>
                      <TableHead className="font-bold">Manga Larga</TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead className="font-bold">Desde</TableHead>
                      <TableHead className="font-bold">Hasta</TableHead>
                    </>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricing.prices.map((price, priceIndex) => (
                  <TableRow key={priceIndex}>
                    <TableCell className="font-medium">{price.quantity}</TableCell>
                    {'mangaCorta' in price ? (
                      <>
                        <TableCell className="text-primary font-semibold">${price.mangaCorta}</TableCell>
                        <TableCell className="text-primary font-semibold">${price.mangaLarga}</TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell className="text-primary font-semibold">${price.desde}</TableCell>
                        <TableCell className="text-primary font-semibold">${price.hasta}</TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Opciones de personalización */}
            {pricing.customization && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">Opciones de Personalización</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pricing.customization.map((custom, customIndex) => (
                    <div key={customIndex} className="flex justify-between items-center bg-white p-2 rounded border">
                      <span className="text-sm text-gray-700">{custom.option}</span>
                      <span className="font-semibold text-green-600">+${custom.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EnhancedProductTables;
