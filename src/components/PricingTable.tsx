
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingTable = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const pricingData = [
    {
      category: 'Fútbol - Versión Jugador',
      prices: { '1': '$450', '3-5': '$420', '6-10': '$390', '11+': '$360' },
      popular: true
    },
    {
      category: 'Fútbol - Versión Aficionado',
      prices: { '1': '$350', '3-5': '$320', '6-10': '$290', '11+': '$260' }
    },
    {
      category: 'NFL - Versión Jugador',
      prices: { '1': '$580', '3-5': '$550', '6-10': '$520', '11+': '$490' }
    },
    {
      category: 'NBA - Versión Jugador',
      prices: { '1': '$520', '3-5': '$490', '6-10': '$460', '11+': '$430' }
    },
    {
      category: 'MLB - Versión Jugador',
      prices: { '1': '$480', '3-5': '$450', '6-10': '$420', '11+': '$390' }
    },
    {
      category: 'F1 - Polo/Camiseta',
      prices: { '1': '$420', '3-5': '$390', '6-10': '$360', '11+': '$330' }
    }
  ];

  const quantities = ['1', '3-5', '6-10', '11+'];

  return (
    <section id="precios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tabla de Precios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precios por volumen en pesos mexicanos. Entre más piezas, mejores precios.
            Todos nuestros jerseys incluyen calidad premium y envío gratuito.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-primary text-white">
            <CardTitle className="text-center">Precios por Cantidad</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900">
                      Categoría
                    </th>
                    {quantities.map((qty) => (
                      <th key={qty} className="text-center p-4 font-semibold text-gray-900">
                        {qty === '1' ? '1 pieza' : `${qty} piezas`}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, rowIndex) => (
                    <tr 
                      key={rowIndex}
                      className={`border-b hover:bg-gray-50 transition-colors ${
                        row.popular ? 'bg-blue-50' : ''
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {row.category}
                          </span>
                          {row.popular && (
                            <Badge className="bg-orange-500 text-white text-xs">
                              MÁS POPULAR
                            </Badge>
                          )}
                        </div>
                      </td>
                      {quantities.map((qty) => (
                        <td 
                          key={`${rowIndex}-${qty}`}
                          className="p-4 text-center"
                          onMouseEnter={() => setHoveredCell(`${rowIndex}-${qty}`)}
                          onMouseLeave={() => setHoveredCell(null)}
                        >
                          <span 
                            className={`inline-block px-3 py-2 rounded-lg font-semibold transition-all ${
                              hoveredCell === `${rowIndex}-${qty}`
                                ? 'bg-primary text-white shadow-md transform scale-105'
                                : 'text-primary bg-blue-50'
                            }`}
                          >
                            {row.prices[qty as keyof typeof row.prices]}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">🚚</div>
            <h3 className="font-semibold mb-2">Envío Gratuito</h3>
            <p className="text-sm text-gray-600">
              En pedidos de 3+ piezas a toda la República
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Entrega Rápida</h3>
            <p className="text-sm text-gray-600">
              3-5 días hábiles en ciudades principales
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">Personalización</h3>
            <p className="text-sm text-gray-600">
              Nombre y número disponible en fútbol
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
