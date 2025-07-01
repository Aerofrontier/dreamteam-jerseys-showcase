
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

  const getSizeTableData = () => {
    // Datos placeholder para tabla de tallas
    const baseData = {
      'futbol-hombre-nueva-temporada-version-jugador': {
        title: 'Tabla de Tallas - Fútbol Hombre Versión Jugador',
        sizes: [
          { size: 'S', chest: '48-50', length: '70', shoulders: '44' },
          { size: 'M', chest: '52-54', length: '72', shoulders: '46' },
          { size: 'L', chest: '56-58', length: '74', shoulders: '48' },
          { size: 'XL', chest: '60-62', length: '76', shoulders: '50' },
          { size: 'XXL', chest: '64-66', length: '78', shoulders: '52' }
        ]
      },
      'nfl-version-campo': {
        title: 'Tabla de Tallas - NFL Versión Campo',
        sizes: [
          { size: 'S', chest: '50-52', length: '72', shoulders: '46' },
          { size: 'M', chest: '54-56', length: '74', shoulders: '48' },
          { size: 'L', chest: '58-60', length: '76', shoulders: '50' },
          { size: 'XL', chest: '62-64', length: '78', shoulders: '52' },
          { size: 'XXL', chest: '66-68', length: '80', shoulders: '54' }
        ]
      }
    };

    return baseData[getProductType() as keyof typeof baseData] || {
      title: `Tabla de Tallas - ${selectedSport.toUpperCase()}`,
      sizes: [
        { size: 'S', chest: '48-50', length: '70', shoulders: '44' },
        { size: 'M', chest: '52-54', length: '72', shoulders: '46' },
        { size: 'L', chest: '56-58', length: '74', shoulders: '48' },
        { size: 'XL', chest: '60-62', length: '76', shoulders: '50' },
        { size: 'XXL', chest: '64-66', length: '78', shoulders: '52' }
      ]
    };
  };

  const getPriceTableData = () => {
    // Datos placeholder para tabla de precios
    const baseData = {
      'futbol-hombre-nueva-temporada-version-jugador': {
        title: 'Tabla de Precios - Fútbol Hombre Versión Jugador',
        prices: [
          { quantity: '1 pieza', price: '$650', savings: '-' },
          { quantity: '2-4 piezas', price: '$620', savings: '$30' },
          { quantity: '5-9 piezas', price: '$590', savings: '$60' },
          { quantity: '10+ piezas', price: '$550', savings: '$100' }
        ]
      },
      'nfl-version-campo': {
        title: 'Tabla de Precios - NFL Versión Campo',
        prices: [
          { quantity: '1 pieza', price: '$750', savings: '-' },
          { quantity: '2-4 piezas', price: '$720', savings: '$30' },
          { quantity: '5-9 piezas', price: '$680', savings: '$70' },
          { quantity: '10+ piezas', price: '$640', savings: '$110' }
        ]
      }
    };

    return baseData[getProductType() as keyof typeof baseData] || {
      title: `Tabla de Precios - ${selectedSport.toUpperCase()}`,
      prices: [
        { quantity: '1 pieza', price: '$500', savings: '-' },
        { quantity: '2-4 piezas', price: '$480', savings: '$20' },
        { quantity: '5-9 piezas', price: '$450', savings: '$50' },
        { quantity: '10+ piezas', price: '$420', savings: '$80' }
      ]
    };
  };

  const sizeData = getSizeTableData();
  const priceData = getPriceTableData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      {/* Tabla de Tallas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📏 {sizeData.title}
            <Badge variant="secondary" className="text-xs">
              Medidas en cm
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Talla</TableHead>
                  <TableHead>Pecho</TableHead>
                  <TableHead>Largo</TableHead>
                  <TableHead>Hombros</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sizeData.sizes.map((size, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{size.size}</TableCell>
                    <TableCell>{size.chest}</TableCell>
                    <TableCell>{size.length}</TableCell>
                    <TableCell>{size.shoulders}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 <strong>Nota:</strong> Estas son medidas aproximadas. Para mayor precisión, contáctanos por WhatsApp.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tabla de Precios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            💰 {priceData.title}
            <Badge variant="secondary" className="text-xs">
              Precios MXN
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Precio c/u</TableHead>
                  <TableHead>Ahorro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceData.prices.map((price, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{price.quantity}</TableCell>
                    <TableCell className="text-primary font-semibold">{price.price}</TableCell>
                    <TableCell>
                      {price.savings !== '-' ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {price.savings}
                        </Badge>
                      ) : (
                        price.savings
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              🎯 <strong>¡Mayor cantidad, mayor ahorro!</strong> Contáctanos para cotizaciones especiales de pedidos grandes.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Información adicional */}
      <div className="lg:col-span-2 mt-6">
        <div className="bg-gradient-to-r from-primary/10 to-blue-100 p-6 rounded-xl">
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
                className="btn-primary inline-flex items-center justify-center"
              >
                📱 WhatsApp Mazatlán
              </a>
              <a
                href="https://wa.me/523312345678?text=Hola, estoy interesado en un jersey, ¿me puedes apoyar?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
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
