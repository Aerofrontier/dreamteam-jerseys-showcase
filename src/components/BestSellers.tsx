
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
    // Redirect to product detail page instead of showing inline
    const productId = getProductIdFromBestSeller(product);
    if (productId) {
      window.location.href = `/producto/${productId}`;
    }
  };

  const getProductIdFromBestSeller = (product: Product): string | null => {
    // Map best sellers to their full product detail IDs
    const productMap: { [key: string]: string } = {
      'bs1': '1', // Real Madrid -> Product ID 1
      'bs2': '2', // Barcelona -> Product ID 2
      'bs3': '91', // LeBron James Lakers -> Product ID 91
      'bs4': '71' // Patrick Mahomes Chiefs -> Product ID 71
    };
    return productMap[product.id] || null;
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
