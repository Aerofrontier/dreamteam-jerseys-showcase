
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  team: string;
  price: string;
  image: string;
  badges: string[];
  description?: string;
  features?: string[];
}

const bestSellers: Product[] = [
  {
    id: 'bs1',
    name: 'Real Madrid Home 24/25',
    team: 'Real Madrid',
    price: '$650',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    badges: ['Más Vendido', 'Versión Jugador'],
    description: 'Jersey oficial del Real Madrid temporada 2024/25. Confeccionado con tecnología de alto rendimiento.',
    features: [
      'Tecnología de control de humedad',
      'Diseño oficial del equipo',
      'Corte atlético moderno',
      'Escudo bordado de alta calidad'
    ]
  },
  {
    id: 'bs2',
    name: 'Barcelona Home 24/25',
    team: 'FC Barcelona',
    price: '$650',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
    badges: ['Más Vendido', 'Versión Jugador'],
    description: 'Jersey oficial del FC Barcelona temporada 2024/25. Máxima calidad y comodidad.',
    features: [
      'Tecnología de control de humedad',
      'Diseño oficial del equipo',
      'Corte atlético moderno',
      'Escudo bordado de alta calidad'
    ]
  },
  {
    id: 'bs3',
    name: 'LeBron James Lakers',
    team: 'Los Angeles Lakers',
    price: '$680',
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400',
    badges: ['NBA', 'Versión Jugador'],
    description: 'Jersey oficial de LeBron James de los Lakers. Calidad premium para verdaderos fanáticos.',
    features: [
      'Tecnología de control de humedad',
      'Diseño oficial del equipo',
      'Corte atlético moderno',
      'Números y letras bordados'
    ]
  },
  {
    id: 'bs4',
    name: 'Patrick Mahomes Chiefs',
    team: 'Kansas City Chiefs',
    price: '$750',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
    badges: ['NFL', 'Versión Campo'],
    description: 'Jersey oficial de Patrick Mahomes de los Kansas City Chiefs. Máxima autenticidad.',
    features: [
      'Tecnología de control de humedad',
      'Diseño oficial del equipo',
      'Corte atlético moderno',
      'Números y nombres bordados'
    ]
  }
];

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    const expandedProduct = {
      ...product,
      images: [
        product.image,
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'
      ]
    };
    setSelectedProduct(expandedProduct);
  };

  const handleBackToGallery = () => {
    setSelectedProduct(null);
  };

  const handleWhatsAppContact = (city: string, product: Product) => {
    const message = `Hola, vi este modelo en los más vendidos: ${product.name}, ¿me pueden ayudar con más información?`;
    const phoneNumber = city === 'mazatlan' ? '526699123456' : '523312345678';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Vista del producto individual
  if (selectedProduct) {
    return (
      <section className="section-padding bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Button 
              onClick={handleBackToGallery}
              variant="outline"
              className="flex items-center gap-2"
            >
              ← Volver a los más vendidos
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {selectedProduct.badges.map((badge: string) => (
                    <Badge key={badge} className="text-xs bg-primary/10 text-primary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{selectedProduct.team}</p>
                <p className="text-3xl font-bold text-primary">{selectedProduct.price}</p>
              </div>

              <div>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <h3 className="text-lg font-semibold mb-3">Características:</h3>
                <ul className="space-y-2">
                  {selectedProduct.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Producto destacado</h4>
                <p className="text-sm text-amber-700 mb-3">
                  Este es uno de nuestros modelos más populares. Contáctanos para más información y disponibilidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    size="sm" 
                    className="bg-amber-600 hover:bg-amber-700"
                    onClick={() => handleWhatsAppContact('mazatlan', selectedProduct)}
                  >
                    📱 WhatsApp Mazatlán
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white"
                    onClick={() => handleWhatsAppContact('guadalajara', selectedProduct)}
                  >
                    📱 WhatsApp Guadalajara
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Vista de la galería principal
  return (
    <section id="destacados" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Los Más Vendidos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los jerseys favoritos de nuestros clientes. 
            Estos modelos destacan por su calidad, diseño y popularidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <Card 
              key={product.id}
              className="jersey-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {product.badges.map((badge) => (
                    <Badge 
                      key={badge} 
                      className="text-xs bg-white/90 text-gray-800"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-1">{product.team}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-primary">{product.price}</p>
                  <Button size="sm" variant="ghost" className="text-xs text-primary hover:bg-primary/10">
                    Ver detalles →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
