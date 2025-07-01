
import React from 'react';
import { Star, Heart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  team: string;
  sport: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  badges: string[];
  isNew?: boolean;
}

const bestSellers: Product[] = [
  {
    id: '1',
    name: 'Real Madrid Home 2024/25',
    team: 'Real Madrid',
    sport: 'Fútbol',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    price: '$450',
    originalPrice: '$550',
    rating: 4.9,
    badges: ['Nueva Temporada', 'Versión Jugador'],
    isNew: true
  },
  {
    id: '2',
    name: 'Kansas City Chiefs',
    team: 'Chiefs',
    sport: 'NFL',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
    price: '$580',
    rating: 4.8,
    badges: ['Versión Jugador', 'Personalizable']
  },
  {
    id: '3',
    name: 'Lakers Icon Edition',
    team: 'Los Angeles Lakers',
    sport: 'NBA',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
    price: '$520',
    rating: 4.7,
    badges: ['Retro', 'Edición Especial']
  },
  {
    id: '4',
    name: 'Barcelona Retro 1992',
    team: 'FC Barcelona',
    sport: 'Fútbol',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
    price: '$480',
    rating: 4.9,
    badges: ['Retro', 'Edición Limitada'],
    isNew: true
  }
];

const BestSellers = () => {
  const openWhatsApp = (city: string) => {
    const message = encodeURIComponent("Hola, estoy interesado en un jersey, ¿me puedes apoyar?");
    const phoneNumbers = {
      mazatlan: "526691234567",
      guadalajara: "523312345678"
    };
    const phone = phoneNumbers[city as keyof typeof phoneNumbers];
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="destacados" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los jerseys más populares de nuestra colección. Calidad premium y diseños auténticos 
            que nuestros clientes aman.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <Card key={product.id} className="jersey-card group">
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <Badge className="bg-red-500 text-white">NUEVO</Badge>
                  )}
                  {product.badges.slice(0, 2).map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white/90">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white/90">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs text-primary">
                    {product.sport}
                  </Badge>
                </div>

                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">{product.team}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Contact button */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 text-center">Contacta a tu vendedor:</p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => openWhatsApp('mazatlan')}
                    >
                      Mazatlán
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 text-xs"
                      onClick={() => openWhatsApp('guadalajara')}
                    >
                      Guadalajara
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
