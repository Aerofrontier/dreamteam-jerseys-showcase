import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface PricingTablesProps {
  selectedSport: string;
  selectedPath: string[];
}

const PricingTables: React.FC<PricingTablesProps> = ({ selectedSport, selectedPath }) => {
  // Datos completos de precios para todos los deportes
  const pricingData = {
    'futbol-jugador': {
      name: 'Fútbol - Jersey Versión Jugador (Hombre-Mujer) Manga Corta',
      prices: [
        { quantity: '1 pieza', base: 650, conNombre: 700, conParches: 725, completo: 750 },
        { quantity: '2 piezas', base: 600, conNombre: 650, conParches: 675, completo: 700 },
        { quantity: '3-5 piezas', base: 575, conNombre: 625, conParches: 650, completo: 675 },
        { quantity: '6-15 piezas', base: 550, conNombre: 600, conParches: 625, completo: 650 }
      ]
    },
    'futbol-aficionado': {
      name: 'Fútbol - Jersey Versión Aficionado (Hombre-Mujer) Manga Corta',
      prices: [
        { quantity: '1 pieza', base: 600, conNombre: 650, conParches: 675, completo: 700 },
        { quantity: '2 piezas', base: 550, conNombre: 600, conParches: 625, completo: 650 },
        { quantity: '3-5 piezas', base: 525, conNombre: 575, conParches: 600, completo: 625 },
        { quantity: '6-15 piezas', base: 500, conNombre: 550, conParches: 575, completo: 600 }
      ]
    },
    'futbol-mujeres': {
      name: 'Fútbol - Jersey Mujeres',
      prices: [
        { quantity: '1 pieza', base: 580, conNombre: 630, conParches: 655, completo: 680 },
        { quantity: '2 piezas', base: 530, conNombre: 580, conParches: 605, completo: 630 },
        { quantity: '3-5 piezas', base: 505, conNombre: 555, conParches: 580, completo: 605 },
        { quantity: '6-15 piezas', base: 480, conNombre: 530, conParches: 555, completo: 580 }
      ]
    },
    'futbol-ninos': {
      name: 'Fútbol - Kits Completos Niños',
      prices: [
        { quantity: '1 kit', base: 500, conNombre: 550, conParches: 575, completo: 600 },
        { quantity: '2 kits', base: 450, conNombre: 500, conParches: 525, completo: 550 },
        { quantity: '3-5 kits', base: 425, conNombre: 475, conParches: 500, completo: 525 },
        { quantity: '6+ kits', base: 400, conNombre: 450, conParches: 475, completo: 500 }
      ]
    },
    'f1': {
      name: 'Fórmula 1 - Jerseys',
      prices: [
        { quantity: '1 pieza', desde: 600, hasta: 800 },
        { quantity: '2 piezas', desde: 575, hasta: 775 },
        { quantity: '3-5 piezas', desde: 550, hasta: 750 },
        { quantity: '6+ piezas', desde: 525, hasta: 725 }
      ]
    },
    'nba': {
      name: 'NBA - Jerseys',
      prices: [
        { quantity: '1 pieza', desde: 650, hasta: 750 },
        { quantity: '2 piezas', desde: 625, hasta: 725 },
        { quantity: '3-5 piezas', desde: 600, hasta: 700 },
        { quantity: '6+ piezas', desde: 575, hasta: 675 }
      ]
    },
    'nfl': {
      name: 'NFL - Jerseys',
      prices: [
        { quantity: '1 pieza', desde: 750, hasta: 850 },
        { quantity: '2 piezas', desde: 725, hasta: 825 },
        { quantity: '3-5 piezas', desde: 700, hasta: 800 },
        { quantity: '6+ piezas', desde: 675, hasta: 775 }
      ]
    },
    'mlb': {
      name: 'MLB - Jerseys',
      prices: [
        { quantity: '1 pieza', desde: 720, hasta: 820 },
        { quantity: '2 piezas', desde: 695, hasta: 795 },
        { quantity: '3-5 piezas', desde: 670, hasta: 770 },
        { quantity: '6+ piezas', desde: 645, hasta: 745 }
      ]
    }
  };

  // Tabla de personalización para fútbol
  const personalizationPricing = {
    name: 'Costos de Personalización - Fútbol',
    services: [
      { service: 'Nombre y Número', precio: 50 },
      { service: 'Parches de Liga', precio: 25 },
      { service: 'Parches de Champions', precio: 30 },
      { service: 'Parches de Copa del Mundo', precio: 35 },
      { service: 'Escudo del Equipo', precio: 20 },
      { service: 'Estampado Especial', precio: 40 }
    ]
  };

  const getRelevantPricing = () => {
    const sport = selectedSport;
    const hasVersionJugador = selectedPath.includes('version-jugador');
    const hasVersionAficionado = selectedPath.includes('version-aficionado');
    const hasMujeres = selectedPath.includes('mujeres');
    const hasNinos = selectedPath.includes('ninos');
    
    let pricingKey = sport;
    
    if (sport === 'futbol') {
      if (hasNinos) {
        pricingKey = 'futbol-ninos';
      } else if (hasMujeres) {
        pricingKey = 'futbol-mujeres';
      } else if (hasVersionJugador) {
        pricingKey = 'futbol-jugador';
      } else if (hasVersionAficionado) {
        pricingKey = 'futbol-aficionado';
      } else {
        pricingKey = 'futbol-jugador'; // Default para fútbol
      }
    }
    
    return pricingData[pricingKey as keyof typeof pricingData];
  };

  const pricing = getRelevantPricing();
  const showPersonalization = selectedSport === 'futbol';

  if (!pricing) return null;

  return (
    <div className="mt-12 space-y-8">
      {/* Tabla de Precios */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-xl flex items-center gap-2">
            💰 {pricing.name}
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
                {'base' in pricing.prices[0] ? (
                  <>
                    <TableHead className="font-bold">Base</TableHead>
                    <TableHead className="font-bold">Con Nombre y Número</TableHead>
                    <TableHead className="font-bold">Con Parches</TableHead>
                    <TableHead className="font-bold">Con Nombre + Parches</TableHead>
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
                  {'base' in price ? (
                    <>
                      <TableCell className="text-primary font-semibold">${price.base}</TableCell>
                      <TableCell className="text-primary font-semibold">${price.conNombre}</TableCell>
                      <TableCell className="text-primary font-semibold">${price.conParches}</TableCell>
                      <TableCell className="text-green-600 font-semibold">${price.completo}</TableCell>
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

          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700">
              🎯 <strong>¡Mayor cantidad, mayor ahorro!</strong> Contáctanos para cotizaciones especiales de pedidos grandes.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de Personalización para Fútbol */}
      {showPersonalization && (
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-xl flex items-center gap-2">
              🎨 {personalizationPricing.name}
              <Badge variant="secondary" className="text-xs">
                Pesos MX
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Servicio de Personalización</TableHead>
                  <TableHead className="font-bold">Precio Adicional</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {personalizationPricing.services.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{service.service}</TableCell>
                    <TableCell className="text-primary font-semibold">+${service.precio}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-700">
                ✨ <strong>Personalización Premium:</strong> Todos los servicios de personalización se realizan con materiales de alta calidad y técnicas profesionales.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

    </div>
  );
};

export default PricingTables;