
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PricingPage = () => {
  const navigate = useNavigate();

  const pricingData = [
    {
      sport: 'Fútbol',
      category: 'Jersey Versión Jugador',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
      prices: [
        { quantity: '1 pieza', mangaCorta: '$650', mangaLarga: '$700' },
        { quantity: '2 piezas (cada una)', mangaCorta: '$600', mangaLarga: '$650' },
        { quantity: '3-5 piezas (cada una)', mangaCorta: '$575', mangaLarga: '$625' },
        { quantity: '6-15 piezas (cada una)', mangaCorta: '$550', mangaLarga: '$600' }
      ],
      customization: [
        { option: 'Nombre y número', price: '+$50' },
        { option: 'Parches', price: '+$75' },
        { option: 'Nombre + número + parches', price: '+$100' }
      ]
    },
    {
      sport: 'Fútbol',
      category: 'Jersey Versión Aficionado',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
      prices: [
        { quantity: '1 pieza', mangaCorta: '$600', mangaLarga: '$650' },
        { quantity: '2 piezas (cada una)', mangaCorta: '$550', mangaLarga: '$600' },
        { quantity: '3-5 piezas (cada una)', mangaCorta: '$525', mangaLarga: '$575' },
        { quantity: '6-15 piezas (cada una)', mangaCorta: '$500', mangaLarga: '$550' }
      ],
      customization: [
        { option: 'Nombre y número', price: '+$50' },
        { option: 'Parches', price: '+$75' },
        { option: 'Nombre + número + parches', price: '+$100' }
      ]
    },
    {
      sport: 'NBA',
      category: 'Jersey',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400',
      prices: [
        { quantity: '1 pieza', desde: '$650', hasta: '$750' },
        { quantity: '2 piezas (cada una)', desde: '$625', hasta: '$725' },
        { quantity: '3-5 piezas (cada una)', desde: '$600', hasta: '$700' },
        { quantity: '6+ piezas (cada una)', desde: '$575', hasta: '$675' }
      ]
    },
    {
      sport: 'NFL/MLB',
      category: 'Jersey',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
      prices: [
        { quantity: '1 pieza', desde: '$750', hasta: '$800' },
        { quantity: '2 piezas (cada una)', desde: '$725', hasta: '$775' },
        { quantity: '3-5 piezas (cada una)', desde: '$700', hasta: '$750' },
        { quantity: '6+ piezas (cada una)', desde: '$675', hasta: '$725' }
      ]
    },
    {
      sport: 'Fórmula 1',
      category: 'Jersey',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      prices: [
        { quantity: '1 pieza', desde: '$600', hasta: '$800' },
        { quantity: '2 piezas (cada una)', desde: '$575', hasta: '$775' },
        { quantity: '3-5 piezas (cada una)', desde: '$550', hasta: '$750' },
        { quantity: '6+ piezas (cada una)', desde: '$525', hasta: '$725' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Button>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Precios de Nuestros Jerseys
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Precios competitivos con descuentos por volumen. Todos los precios están en pesos mexicanos.
            </p>
          </div>

          <div className="space-y-8">
            {pricingData.map((category, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-4">
                    <img 
                      src={category.image} 
                      alt={`${category.sport} ${category.category}`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-xl">
                        {category.sport} - {category.category}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-bold">Cantidad</TableHead>
                        {'mangaCorta' in category.prices[0] ? (
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
                      {category.prices.map((price, priceIndex) => (
                        <TableRow key={priceIndex}>
                          <TableCell className="font-medium">{price.quantity}</TableCell>
                          {'mangaCorta' in price ? (
                            <>
                              <TableCell className="text-primary font-semibold">{price.mangaCorta}</TableCell>
                              <TableCell className="text-primary font-semibold">{price.mangaLarga}</TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell className="text-primary font-semibold">{price.desde}</TableCell>
                              <TableCell className="text-primary font-semibold">{price.hasta}</TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {category.customization && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3">Opciones de Personalización</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {category.customization.map((custom, customIndex) => (
                          <div key={customIndex} className="flex justify-between items-center bg-white p-2 rounded border">
                            <span className="text-sm text-gray-700">{custom.option}</span>
                            <span className="font-semibold text-green-600">{custom.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-blue-100 p-8 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Necesitas una cotización personalizada?
            </h3>
            <p className="text-gray-600 mb-4">
              Contáctanos por WhatsApp para cotizaciones especiales, pedidos grandes o consultas específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                📱 WhatsApp Mazatlán
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                📱 WhatsApp Guadalajara
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
