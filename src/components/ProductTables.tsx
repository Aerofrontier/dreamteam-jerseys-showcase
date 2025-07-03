
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface ProductTablesProps {
  selectedSport: string;
  selectedPath: string[];
}

const ProductTables: React.FC<ProductTablesProps> = ({ selectedSport, selectedPath }) => {
  const getProductType = () => {
    return `${selectedSport}-${selectedPath.join('-')}`;
  };

  // 🔥 TABLAS DE TALLAS REALES - Datos de las imágenes proporcionadas
  const getSizeTableData = () => {
    const baseData = {
      // FÚTBOL - HOMBRE - VERSIÓN JUGADOR
      'futbol-hombre-nueva-temporada-version-jugador': {
        title: 'Tabla de Tallas - Fútbol Hombre Versión Jugador',
        sizes: [
          { size: 'S', largo: '71', pecho: '46', hombros: '41.5', manga: '23.5', altura: '160-165' },
          { size: 'M', largo: '73', pecho: '48', hombros: '43', manga: '24', altura: '165-170' },
          { size: 'L', largo: '75', pecho: '50', hombros: '44.5', manga: '24.5', altura: '170-175' },
          { size: 'XL', largo: '77', pecho: '52', hombros: '46', manga: '25', altura: '175-180' },
          { size: 'XXL', largo: '79', pecho: '54', hombros: '47.5', manga: '25.5', altura: '180-185' }
        ]
      },
      // FÚTBOL - HOMBRE - VERSIÓN AFICIONADO  
      'futbol-hombre-nueva-temporada-version-aficionado': {
        title: 'Tabla de Tallas - Fútbol Hombre Versión Aficionado',
        sizes: [
          { size: 'S', largo: '69', busto: '50', alturaRecomendada: '165-170', pesoRecomendado: '47-62' },
          { size: 'M', largo: '73', busto: '52', alturaRecomendada: '170-175', pesoRecomendado: '62-72' },
          { size: 'L', largo: '76', busto: '54', alturaRecomendada: '175-180', pesoRecomendado: '72-82' },
          { size: 'XL', largo: '79', busto: '56', alturaRecomendada: '180-185', pesoRecomendado: '82-92' },
          { size: 'XXL', largo: '82', busto: '58', alturaRecomendada: '185-190', pesoRecomendado: '92-100' }
        ]
      },
      // FÚTBOL - MUJERES - VERSIÓN AFICIONADO
      'futbol-mujeres-version-aficionado': {
        title: 'Tabla de Tallas - Fútbol Mujeres Versión Aficionado',
        sizes: [
          { size: 'S', largo: '63', busto: '40', alturaRecomendada: '155-160', pesoRecomendado: '40-50' },
          { size: 'M', largo: '65', busto: '43', alturaRecomendada: '160-165', pesoRecomendado: '50-55' },
          { size: 'L', largo: '67', busto: '46', alturaRecomendada: '165-173', pesoRecomendado: '55-60' },
          { size: 'XL', largo: '69', busto: '48', alturaRecomendada: '173-180', pesoRecomendado: '60-65' }
        ]
      },
      // NIÑOS
      'futbol-ninos-kits-completos': {
        title: 'Tabla de Tallas Infantiles',
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
      // NBA
      'nba-version-jugador': {
        title: 'Tabla de Tallas - Jersey NBA (Hombre)',
        sizes: [
          { size: 'S', anchoPecho: '51', largoPrenda: '73', alturaRecomendada: '170', pesoRecomendado: '50-60' },
          { size: 'M', anchoPecho: '53.5', largoPrenda: '76', alturaRecomendada: '175', pesoRecomendado: '60-70' },
          { size: 'L', anchoPecho: '56', largoPrenda: '79', alturaRecomendada: '180', pesoRecomendado: '70-80' },
          { size: 'XL', anchoPecho: '58.5', largoPrenda: '82', alturaRecomendada: '185', pesoRecomendado: '80-90' },
          { size: 'XXL', anchoPecho: '61', largoPrenda: '85', alturaRecomendada: '190', pesoRecomendado: '90-100' }
        ]
      },
      // NFL
      'nfl-version-campo': {
        title: 'Tabla de Tallas - Jersey NFL (Hombre)',
        sizes: [
          { size: 'S', anchoPecho: '56', largoPrenda: '80' },
          { size: 'M', anchoPecho: '58', largoPrenda: '82' },
          { size: 'L', anchoPecho: '60', largoPrenda: '84' },
          { size: 'XL', anchoPecho: '62', largoPrenda: '86' },
          { size: 'XXL', anchoPecho: '64', largoPrenda: '88' },
          { size: 'XXXL', anchoPecho: '66', largoPrenda: '90' }
        ]
      },
      // FÓRMULA 1
      'f1-tipo-polo': {
        title: 'Fórmula 1 - Tabla de Tallas para Adultos',
        sizes: [
          { size: 'S', largo: '71', pecho: '52', cintura: '49.5', cadera: '52', hombros: '45', cuello: '19.5', manga: '36.5' },
          { size: 'M', largo: '73', pecho: '54', cintura: '51.5', cadera: '54', hombros: '47', cuello: '19.5', manga: '38.5' },
          { size: 'L', largo: '75', pecho: '56', cintura: '53.5', cadera: '56', hombros: '49', cuello: '19.5', manga: '40.5' },
          { size: 'XL', largo: '77', pecho: '58', cintura: '55.5', cadera: '58', hombros: '51', cuello: '19.5', manga: '42.5' },
          { size: 'XXL', largo: '79', pecho: '60', cintura: '57.5', cadera: '60', hombros: '53', cuello: '19.5', manga: '44.5' },
          { size: 'XXXL', largo: '81', pecho: '62', cintura: '59.5', cadera: '62', hombros: '55', cuello: '21.5', manga: '46.5' },
          { size: '4XL', largo: '83', pecho: '64', cintura: '61.5', cadera: '64', hombros: '57', cuello: '21.5', manga: '48.5' },
          { size: '5XL', largo: '85', pecho: '66', cintura: '63.5', cadera: '66', hombros: '59', cuello: '21.5', manga: '50.5' }
        ]
      },
      // MLB
      'mlb-version-campo': {
        title: 'Tabla de Tallas de Jerseys MLB',
        sizes: [
          { size: 'S', anchoHombros: '44', contornoPecho: '100', largoPrenda: '77', largoManga: '34', diametroPuno: '18', estaturaRecomendada: '168-173' },
          { size: 'M', anchoHombros: '46', contornoPecho: '108', largoPrenda: '78', largoManga: '34', diametroPuno: '19', estaturaRecomendada: '173-178' },
          { size: 'L', anchoHombros: '49', contornoPecho: '116', largoPrenda: '81', largoManga: '36', diametroPuno: '20', estaturaRecomendada: '178-183' },
          { size: 'XL', anchoHombros: '50', contornoPecho: '122', largoPrenda: '82', largoManga: '36', diametroPuno: '21', estaturaRecomendada: '188-195' },
          { size: 'XXL', anchoHombros: '52', contornoPecho: '132', largoPrenda: '83', largoManga: '36', diametroPuno: '21', estaturaRecomendada: '195+' },
          { size: 'XXXL', anchoHombros: '53', contornoPecho: '138', largoPrenda: '85', largoManga: '36', diametroPuno: '21', estaturaRecomendada: '195+' }
        ]
      }
    };

    return baseData[getProductType() as keyof typeof baseData] || {
      title: `Tabla de Tallas - ${selectedSport.toUpperCase()}`,
      sizes: [
        { size: 'S', medida1: '48-50', medida2: '70', medida3: '44' },
        { size: 'M', medida1: '52-54', medida2: '72', medida3: '46' },
        { size: 'L', medida1: '56-58', medida2: '74', medida3: '48' },
        { size: 'XL', medida1: '60-62', medida2: '76', medida3: '50' },
        { size: 'XXL', medida1: '64-66', medida2: '78', medida3: '52' }
      ]
    };
  };

  // 🔥 TABLAS DE PRECIOS REALES
  const getPriceTableData = () => {
    const baseData = {
      'futbol-hombre-nueva-temporada-version-jugador': {
        title: 'Precios Jersey Versión Jugador (Hombre-Mujer) Manga Corta',
        prices: [
          { quantity: '1 pieza', base: '$650', conNombre: '$700', conParches: '$725', completo: '$750' },
          { quantity: '2 piezas', base: '$600', conNombre: '$650', conParches: '$675', completo: '$700' },
          { quantity: '3-5 piezas', base: '$575', conNombre: '$625', conParches: '$650', completo: '$675' },
          { quantity: '6-15 piezas', base: '$550', conNombre: '$600', conParches: '$625', completo: '$650' }
        ]
      },
      'futbol-hombre-nueva-temporada-version-aficionado': {
        title: 'Precios Jersey Versión Aficionado (Hombre-Mujer) Manga Corta',
        prices: [
          { quantity: '1 pieza', base: '$600', conNombre: '$650', conParches: '$675', completo: '$700' },
          { quantity: '2 piezas', base: '$550', conNombre: '$600', conParches: '$625', completo: '$650' },
          { quantity: '3-5 piezas', base: '$525', conNombre: '$575', conParches: '$600', completo: '$625' },
          { quantity: '6-15 piezas', base: '$500', conNombre: '$550', conParches: '$575', completo: '$600' }
        ]
      }
    };

    return baseData[getProductType() as keyof typeof baseData] || {
      title: `Tabla de Precios - ${selectedSport.toUpperCase()}`,
      prices: [
        { quantity: '1 pieza', base: '$500', conNombre: '$550', conParches: '$575', completo: '$600' },
        { quantity: '2-4 piezas', base: '$480', conNombre: '$530', conParches: '$555', completo: '$580' },
        { quantity: '5-9 piezas', base: '$450', conNombre: '$500', conParches: '$525', completo: '$550' },
        { quantity: '10+ piezas', base: '$420', conNombre: '$470', conParches: '$495', completo: '$520' }
      ]
    };
  };

  const sizeData = getSizeTableData();
  const priceData = getPriceTableData();

  const renderSizeTable = () => {
    const firstSize = sizeData.sizes[0];
    if (!firstSize) return null;

    // Determinar las columnas dinámicamente basado en las propiedades del primer elemento
    const columns = Object.keys(firstSize).filter(key => key !== 'size');
    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Talla</TableHead>
            {columns.map((col) => (
              <TableHead key={col} className="font-bold">
                {getColumnTitle(col)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sizeData.sizes.map((size, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="font-bold text-primary">{size.size}</TableCell>
              {columns.map((col) => (
                <TableCell key={col}>
                  {size[col as keyof typeof size]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const getColumnTitle = (key: string) => {
    const titles: { [key: string]: string } = {
      largo: 'Largo (cm)',
      pecho: 'Pecho (cm)',
      hombros: 'Hombros (cm)',
      manga: 'Manga (cm)',
      altura: 'Altura (cm)',
      busto: 'Busto (cm)',
      alturaRecomendada: 'Altura Sugerida',
      pesoRecomendado: 'Peso Sugerido (kg)',
      talla: 'Talla (Número)',
      edad: 'Edad',
      mediBusto: '1/2 Busto (cm)',
      mediaCintura: '1/2 Cintura (cm)',
      pantalon: 'Pantalón (cm)',
      anchoPecho: 'Ancho de Pecho (cm)',
      largoPrenda: 'Largo de la Prenda (cm)',
      cintura: 'Cintura (cm)',
      cadera: 'Cadera (cm)',
      cuello: 'Cuello (cm)',
      anchoHombros: 'Ancho de Hombros (cm)',
      contornoPecho: 'Contorno de Pecho (cm)',
      largoManga: 'Largo de Manga (cm)',
      diametroPuno: 'Diámetro de Puño (cm)',
      estaturaRecomendada: 'Estatura Recomendada'
    };
    return titles[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="flex items-center gap-2 text-lg">
            📏 {sizeData.title}
            <Badge variant="secondary" className="text-xs">
              Medidas en cm
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            {renderSizeTable()}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              💡 <strong>Nota:</strong> Las medidas pueden variar entre 1-4 cm debido a diferencias en el método de medición. Selecciona según tus medidas reales.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center gap-2 text-lg">
            💰 {priceData.title}
            <Badge variant="secondary" className="text-xs">
              Precios MXN
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Cantidad</TableHead>
                  <TableHead className="font-bold">Base</TableHead>
                  <TableHead className="font-bold">Con Nombre y Número</TableHead>
                  <TableHead className="font-bold">Con Parches</TableHead>
                  <TableHead className="font-bold">Con Nombre + Parches</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData.prices.map((price, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{price.quantity}</TableCell>
                    <TableCell className="text-primary font-semibold">{price.base}</TableCell>
                    <TableCell className="font-semibold">{price.conNombre}</TableCell>
                    <TableCell className="font-semibold">{price.conParches}</TableCell>
                    <TableCell className="font-semibold text-green-600">{price.completo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700">
              🎯 <strong>¡Mayor cantidad, mayor ahorro!</strong> Contáctanos para cotizaciones especiales de pedidos grandes.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-2 mt-6">
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
    </div>
  );
};

export default ProductTables;
