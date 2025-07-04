
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
  // Datos completos de tallas para todos los deportes
  const sizingData = {
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
    'futbol-aficionado': {
      name: 'Fútbol - Hombre - Versión Aficionado',
      sizes: [
        { size: 'S', largo: '69', busto: '50', alturaRecomendada: '165-170', pesoRecomendado: '47-62' },
        { size: 'M', largo: '73', busto: '52', alturaRecomendada: '170-175', pesoRecomendado: '62-72' },
        { size: 'L', largo: '76', busto: '54', alturaRecomendada: '175-180', pesoRecomendado: '72-82' },
        { size: 'XL', largo: '79', busto: '56', alturaRecomendada: '180-185', pesoRecomendado: '82-92' },
        { size: '2XL', largo: '82', busto: '58', alturaRecomendada: '185-190', pesoRecomendado: '92-100' }
      ]
    },
    'futbol-mujeres': {
      name: 'Fútbol - Mujeres - Versión Aficionado',
      sizes: [
        { size: 'S', largo: '63', busto: '40', alturaRecomendada: '155-160', pesoRecomendado: '40-50' },
        { size: 'M', largo: '65', busto: '43', alturaRecomendada: '160-165', pesoRecomendado: '50-55' },
        { size: 'L', largo: '67', busto: '46', alturaRecomendada: '165-173', pesoRecomendado: '55-60' },
        { size: 'XL', largo: '69', busto: '48', alturaRecomendada: '173-180', pesoRecomendado: '60-65' }
      ]
    },
    'futbol-ninos': {
      name: 'Fútbol - Niños - Kits Completos',
      sizes: [
        { size: '3XS', talla: '16', altura: '95-105', edad: '2-3', mediBusto: '34', largo: '43', mediaCintura: '24-34', pantalon: '29' },
        { size: '2XS', talla: '18', altura: '105-115', edad: '4-5', mediBusto: '36', largo: '47', mediaCintura: '25-36', pantalon: '31' },
        { size: 'XS', talla: '20', altura: '115-125', edad: '6-7', mediBusto: '38', largo: '50', mediaCintura: '26-38', pantalon: '33' },
        { size: 'S', talla: '22', altura: '125-135', edad: '8-9', mediBusto: '40', largo: '53', mediaCintura: '27-40', pantalon: '35' },
        { size: 'M', talla: '24', altura: '135-145', edad: '10-11', mediBusto: '42', largo: '56', mediaCintura: '28-42', pantalon: '37' },
        { size: 'L', talla: '26', altura: '145-155', edad: '12-13', mediBusto: '44', largo: '58', mediaCintura: '29-44', pantalon: '39' },
        { size: 'XL', talla: '28', altura: '155-165', edad: '14-15', mediBusto: '46', largo: '61', mediaCintura: '30-46', pantalon: '41' }
      ]
    },
    'f1': {
      name: 'Fórmula 1 - Tabla de Tallas para Adultos',
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
    'nba': {
      name: 'NBA - Jersey Hombre',
      sizes: [
        { size: 'S', anchoPecho: '51', largoPrenda: '73', alturaRecomendada: '170', pesoRecomendado: '50-60' },
        { size: 'M', anchoPecho: '53.5', largoPrenda: '76', alturaRecomendada: '175', pesoRecomendado: '60-70' },
        { size: 'L', anchoPecho: '56', largoPrenda: '79', alturaRecomendada: '180', pesoRecomendado: '70-80' },
        { size: 'XL', anchoPecho: '58.5', largoPrenda: '82', alturaRecomendada: '185', pesoRecomendado: '80-90' },
        { size: '2XL', anchoPecho: '61', largoPrenda: '85', alturaRecomendada: '190', pesoRecomendado: '90-100' }
      ]
    },
    'nfl': {
      name: 'NFL - Jersey Hombre',
      sizes: [
        { size: 'S', anchoPecho: '56', largoPrenda: '80' },
        { size: 'M', anchoPecho: '58', largoPrenda: '82' },
        { size: 'L', anchoPecho: '60', largoPrenda: '84' },
        { size: 'XL', anchoPecho: '62', largoPrenda: '86' },
        { size: '2XL', anchoPecho: '64', largoPrenda: '88' },
        { size: '3XL', anchoPecho: '66', largoPrenda: '90' }
      ]
    },
    'mlb': {
      name: 'MLB - Tabla de Tallas de Jerseys',
      sizes: [
        { size: 'S', anchoHombros: '44', contornoPecho: '100', largoPrenda: '77', largoManga: '34', diametroPuno: '18', estaturaRecomendada: '168-173' },
        { size: 'M', anchoHombros: '46', contornoPecho: '108', largoPrenda: '78', largoManga: '34', diametroPuno: '19', estaturaRecomendada: '173-178' },
        { size: 'L', anchoHombros: '49', contornoPecho: '116', largoPrenda: '81', largoManga: '36', diametroPuno: '20', estaturaRecomendada: '178-183' },
        { size: 'XL', anchoHombros: '50', contornoPecho: '122', largoPrenda: '82', largoManga: '36', diametroPuno: '21', estaturaRecomendada: '188-195' },
        { size: '2XL', anchoHombros: '52', contornoPecho: '132', largoPrenda: '83', largoManga: '36', diametroPuno: '21', estaturaRecomendada: '195+' },
        { size: '3XL', anchoHombros: '53', contornoPecho: '138', largoPrenda: '85', largoManga: '36', diametroPuno: '21', estaturaRecomendada: '195+' }
      ]
    }
  };

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

  const getRelevantData = () => {
    const sport = selectedSport;
    const hasVersionJugador = selectedPath.includes('version-jugador');
    const hasVersionAficionado = selectedPath.includes('version-aficionado');
    const hasMujeres = selectedPath.includes('mujeres');
    const hasNinos = selectedPath.includes('ninos');
    
    let sizingKey = sport;
    let pricingKey = sport;
    
    if (sport === 'futbol') {
      if (hasNinos) {
        sizingKey = 'futbol-ninos';
        pricingKey = 'futbol-ninos';
      } else if (hasMujeres) {
        sizingKey = 'futbol-mujeres';
        pricingKey = 'futbol-mujeres';
      } else if (hasVersionJugador) {
        sizingKey = 'futbol-jugador';
        pricingKey = 'futbol-jugador';
      } else if (hasVersionAficionado) {
        sizingKey = 'futbol-aficionado';
        pricingKey = 'futbol-aficionado';
      }
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
      pesoRecomendado: 'Peso Sugerido (kg)',
      talla: 'Talla (Número)',
      edad: 'Edad',
      mediBusto: '1/2 Busto (cm)',
      mediaCintura: '1/2 Cintura (cm)',
      pantalon: 'Pantalón (cm)',
      anchoPecho: 'Ancho de Pecho (cm)',
      anchoHombros: 'Ancho de Hombros (cm)',
      contornoPecho: 'Contorno de Pecho (cm)',
      largoManga: 'Largo de Manga (cm)',
      diametroPuno: 'Diámetro de Puño (cm)',
      estaturaRecomendada: 'Estatura Recomendada'
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
              📏 {sizing.name}
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
      )}

      {/* Sección de contacto final */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-100 p-6 rounded-xl border">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Listo para hacer tu pedido?
          </h3>
          <p className="text-gray-600 mb-4">
            Contáctanos por WhatsApp para confirmar disponibilidad, tallas y realizar tu pedido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/526699123456?text=Hola, estoy interesado en un jersey, ¿me puedes apoyar?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center font-medium"
            >
              📱 WhatsApp Mazatlán
            </a>
            <a
              href="https://wa.me/523312345678?text=Hola, estoy interesado en un jersey, ¿me puedes apoyar?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center font-medium"
            >
              📱 WhatsApp Guadalajara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedProductTables;
