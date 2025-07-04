import React, { useState } from 'react';
import { ArrowLeft, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import SizeComparator from '@/components/SizeComparator';
import ProductImageGallery from '@/components/ProductImageGallery';
import VersionComparison from '@/components/VersionComparison';
import EnhancedProductTables from '@/components/EnhancedProductTables';

interface Product {
  id: string;
  name: string;
  team: string;
  price: string;
  sport: string;
  category: string[];
  image: string;
  badges: string[];
  images?: string[];
  description?: string;
  features?: string[];
}

const allProducts: Product[] = [
  // ⚽ FÚTBOL - HOMBRE - NUEVA TEMPORADA - VERSIÓN JUGADOR
  { id: '1', name: 'Real Madrid Home 24/25', team: 'Real Madrid', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '3', name: 'Manchester City Home 24/25', team: 'Manchester City', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '4', name: 'PSG Home 24/25', team: 'Paris Saint-Germain', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '5', name: 'Chelsea Home 24/25', team: 'Chelsea FC', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },

  // ⚽ FÚTBOL - HOMBRE - NUEVA TEMPORADA - VERSIÓN AFICIONADO
  { id: '6', name: 'Real Madrid Fan 24/25', team: 'Real Madrid', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '7', name: 'Barcelona Fan 24/25', team: 'FC Barcelona', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '8', name: 'Manchester City Fan 24/25', team: 'Manchester City', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '9', name: 'PSG Fan 24/25', team: 'Paris Saint-Germain', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '10', name: 'Chelsea Fan 24/25', team: 'Chelsea FC', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },

  // Continue with all other products from the original array...
  { id: '11', name: 'Brasil Retro 02', team: 'Selección Brasil', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },
  { id: '12', name: 'Argentina Retro 86', team: 'Selección Argentina', price: '$580', sport: 'futbol', category: ['hombre', 'jerseys-retro', 'selecciones', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Retro', 'Selección', 'Versión Jugador'] },
  
  // Add representative products for all sports...
  { id: '51', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['F1', 'Tipo Polo'] },
  { id: '71', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['NFL', 'Versión de Campo'] },
  { id: '91', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['NBA', 'Versión Jugador'] },
  { id: '81', name: 'Dodgers Betts Jersey', team: 'Los Angeles Dodgers', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['MLB', 'Versión de Campo'] }
];

interface ProductGalleryProps {
  selectedSport: string;
  selectedPath: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  selectedSport, 
  selectedPath 
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showComparator, setShowComparator] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Filtrar productos según el deporte y la ruta seleccionada
  const filteredProducts = allProducts.filter(product => {
    const matchesSport = product.sport === selectedSport;
    const matchesPath = selectedPath.every(step => product.category.includes(step));
    
    return matchesSport && matchesPath;
  });

  const getGalleryTitle = () => {
    const sportNames: { [key: string]: string } = {
      futbol: 'Fútbol',
      nfl: 'NFL',
      nba: 'NBA',
      mlb: 'MLB',
      f1: 'Fórmula 1'
    };
    
    return `Muestrario de ${sportNames[selectedSport]}`;
  };

  const isProductFinalLevel = selectedPath.length > 0;

  const handleBadgeClick = (badge: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const badgeToPath: { [key: string]: string } = {
      'Versión Jugador': 'version-jugador',
      'Versión Aficionado': 'version-aficionado',
      'Nueva Temporada': 'nueva-temporada',
      'Retro': 'jerseys-retro',
      'Selección': 'selecciones',
      'Equipos': 'equipos',
      'Kit Completo': 'kits-completos',
      'Mujeres': 'mujeres',
      'Niños': 'ninos'
    };

    const pathSegment = badgeToPath[badge];
    if (pathSegment) {
      console.log(`Navegando a: ${pathSegment}`);
    }
  };

  const handleProductClick = (product: Product) => {
    const expandedProduct = {
      ...product,
      images: [
        product.image,
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800',
        'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800',
        'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'
      ],
      description: `Jersey oficial de ${product.team}. Confeccionado con tecnología de alto rendimiento que absorbe el sudor para mantenerte seco y cómodo durante el juego.`,
      features: [
        'Tecnología de control de humedad',
        'Diseño oficial del equipo',
        'Corte atlético moderno',
        'Escudo bordado de alta calidad',
        'Materiales premium',
        'Personalización disponible'
      ]
    };
    setSelectedProduct(expandedProduct);
  };

  const handleBackToGallery = () => {
    setSelectedProduct(null);
  };

  const handleWhatsAppContact = (city: string, product?: Product) => {
    const message = product 
      ? `Hola, vi este modelo en su muestrario: ${product.name}, ¿me pueden ayudar con más información y opciones disponibles?`
      : 'Hola, me interesa conocer más sobre sus jerseys disponibles';
    const phoneNumber = city === 'mazatlan' ? '526699123456' : '523312345678';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageClick = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setShowImageGallery(true);
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
              <ArrowLeft className="w-4 h-4" />
              Volver al muestrario
            </Button>
          </div>

          <VersionComparison 
            sport={selectedProduct.sport} 
            categories={selectedProduct.category}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="space-y-4">
              <div 
                className="aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer touch-manipulation" 
                onClick={() => handleImageClick(0)}
                style={{ touchAction: 'pinch-zoom' }}
              >
                <img 
                  src={selectedProduct.images?.[0] || selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ touchAction: 'pinch-zoom' }}
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {selectedProduct.images?.slice(1).map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer touch-manipulation" 
                    onClick={() => handleImageClick(index + 1)}
                    style={{ touchAction: 'pinch-zoom' }}
                  >
                    <img 
                      src={image} 
                      alt={`${selectedProduct.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      style={{ touchAction: 'pinch-zoom' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {selectedProduct.badges.map((badge: string) => (
                    <Badge 
                      key={badge} 
                      className="text-xs bg-white/90 text-gray-800 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      onClick={(e) => handleBadgeClick(badge, e)}
                    >
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

              <div>
                <h3 className="text-lg font-semibold mb-3">Tallas disponibles</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size: string) => (
                    <Button key={size} variant="outline" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Este es un muestrario</h4>
                <p className="text-sm text-amber-700 mb-3">
                  Estos son algunos ejemplos de nuestros modelos disponibles. Tenemos acceso a cientos de jerseys adicionales.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    size="sm" 
                    className="bg-amber-600 hover:bg-amber-700"
                    onClick={() => handleWhatsAppContact('mazatlan', selectedProduct)}
                  >
                    📱 Consultar más opciones MZT
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white"
                    onClick={() => handleWhatsAppContact('guadalajara', selectedProduct)}
                  >
                    📱 Consultar más opciones GDL
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <EnhancedProductTables 
            selectedSport={selectedSport}
            selectedPath={selectedPath}
          />
        </div>

        {showImageGallery && selectedProduct.images && (
          <ProductImageGallery
            images={selectedProduct.images}
            productName={selectedProduct.name}
            onClose={() => setShowImageGallery(false)}
            initialIndex={selectedImageIndex}
          />
        )}
      </section>
    );
  }

  // Vista de la galería principal
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {getGalleryTitle()}
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            {filteredProducts.length} modelos de muestra disponibles
          </p>
          <p className="text-sm text-amber-600 bg-amber-50 inline-block px-4 py-2 rounded-full border border-amber-200">
            💡 Este es nuestro muestrario - Tenemos cientos de modelos adicionales disponibles
          </p>
        </div>

        <VersionComparison 
          sport={selectedSport} 
          categories={selectedPath}
        />

        {/* Barra de herramientas simplificada */}
        <div className="mb-8">
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => setShowComparator(true)}
              className="flex items-center gap-2"
            >
              <GitCompare className="w-4 h-4" />
              Comparador
            </Button>
          </div>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid gap-6 mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
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
                          className="text-xs bg-white/90 text-gray-800 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                          onClick={(e) => handleBadgeClick(badge, e)}
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

            {isProductFinalLevel && (
              <>
                <EnhancedProductTables 
                  selectedSport={selectedSport}
                  selectedPath={selectedPath}
                />
                <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ¿Buscas algo específico?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Este muestrario representa solo una pequeña muestra. Tenemos acceso a cientos de modelos adicionales, equipos y ligas de todo el mundo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => handleWhatsAppContact('mazatlan')}>
                      📱 WhatsApp MZT
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" onClick={() => handleWhatsAppContact('guadalajara')}>
                      📱 WhatsApp GDL
                    </Button>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <span className="text-6xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron modelos en el muestrario
            </h3>
            <p className="text-gray-600 mb-4">
              ¡Pero tenemos muchos más modelos disponibles! Contáctanos por WhatsApp para ver opciones adicionales.
            </p>
            <Button 
              size="lg"
              onClick={() => handleWhatsAppContact('mazatlan')}
            >
              📱 Consultar más modelos
            </Button>
          </div>
        )}
      </div>

      <SizeComparator 
        isOpen={showComparator} 
        onClose={() => setShowComparator(false)} 
      />

      {showImageGallery && selectedProduct && selectedProduct.images && (
        <ProductImageGallery
          images={selectedProduct.images}
          productName={selectedProduct.name}
          onClose={() => setShowImageGallery(false)}
          initialIndex={selectedImageIndex}
        />
      )}
    </section>
  );
};

export default ProductGallery;
