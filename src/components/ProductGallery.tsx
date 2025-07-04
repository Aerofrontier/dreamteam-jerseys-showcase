import React, { useState } from 'react';
import { ArrowLeft, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductImageGallery from '@/components/ProductImageGallery';
import VersionComparison from '@/components/VersionComparison';
import EnhancedProductTables from '@/components/EnhancedProductTables';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';

interface Product {
  id: string;
  name: string;
  team: string;
  price: string;
  sport: string;
  category: string[];
  images: string[];
  badges: string[];
  description: string;
  features: string[];
  sizes: string[];
  personalization: boolean;
}

const productData: { [key: string]: Product } = {
  '1': {
    id: '1', name: 'Real Madrid Home 24/25', team: 'Real Madrid', price: '$650', sport: 'futbol',
    category: ['Hombre', 'Nueva Temporada', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'],
    badges: ['Nueva Temporada', 'Versión Jugador'],
    description: 'Jersey oficial del Real Madrid temporada 2024/25. Confeccionado con tecnología Dri-FIT que absorbe el sudor para mantenerte seco y cómodo.',
    features: ['Tecnología Dri-FIT para control de humedad', 'Diseño oficial del club', 'Corte atlético moderno', 'Escudo bordado de alta calidad'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },
  '2': {
    id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'futbol',
    category: ['Hombre', 'Nueva Temporada', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['Nueva Temporada', 'Versión Jugador'],
    description: 'Jersey oficial del FC Barcelona temporada 2024/25. Diseño icónico con las tradicionales rayas azulgrana.',
    features: ['Diseño clásico azulgrana', 'Tecnología de rendimiento', 'Escudo oficial bordado', 'Corte ergonómico'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },
  '71': {
    id: '71', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'nfl',
    category: ['Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NFL', 'Versión de Campo'],
    description: 'Jersey oficial de Tom Brady con Tampa Bay Buccaneers. Versión de campo con todos los detalles profesionales.',
    features: ['Versión de campo auténtica', 'Materiales premium', 'Números y nombres bordados', 'Tecnología de alto rendimiento'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },
  '51': {
    id: '51', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'f1',
    category: ['Tipo Polo'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800'],
    badges: ['F1', 'Tipo Polo'],
    description: 'Polo oficial del equipo Red Bull Racing de Fórmula 1. Diseño elegante y deportivo.',
    features: ['Diseño oficial del equipo', 'Material tipo polo', 'Logo bordado', 'Corte moderno'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: false
  },
  '91': {
    id: '91', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'nba',
    category: ['Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NBA', 'Versión Jugador'],
    description: 'Jersey oficial de LeBron James con Los Angeles Lakers. Versión jugador con máxima calidad.',
    features: ['Versión jugador auténtica', 'Tecnología Nike Dri-FIT', 'Números y nombres bordados', 'Diseño oficial NBA'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },
  '81': {
    id: '81', name: 'Dodgers Betts Jersey', team: 'Los Angeles Dodgers', price: '$720', sport: 'mlb',
    category: ['Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    badges: ['MLB', 'Versión de Campo'],
    description: 'Jersey oficial de Mookie Betts con Los Angeles Dodgers. Versión de campo profesional.',
    features: ['Versión de campo auténtica', 'Material premium', 'Bordados oficiales', 'Tecnología Coolbase'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: true
  }
};

interface ProductGalleryProps {
  selectedSport: string;
  selectedPath: string[];
  onPathChange: (path: string[]) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  selectedSport,
  selectedPath,
  onPathChange
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);

  const getCurrentProducts = () => {
    let currentProducts = Object.values(productData).filter(product => product.sport === selectedSport);
    
    for (const category of selectedPath) {
      currentProducts = currentProducts.filter(product => product.category.includes(category));
    }
    
    return currentProducts;
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCompareToggle = (product: Product) => {
    setCompareProducts(prev => {
      if (prev.find(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleBackToGallery = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <section className="section-padding bg-gray-50 min-h-screen">
        <NavigationBreadcrumb 
          sport={selectedSport} 
          selectedPath={selectedPath} 
          onPathChange={onPathChange}
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={handleBackToGallery}
              className="text-gray-600 hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la galería
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <ProductImageGallery 
                images={selectedProduct.images} 
                productName={selectedProduct.name}
              />
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {selectedProduct.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">{selectedProduct.team}</p>
                <p className="text-3xl font-bold text-primary mb-6">
                  {selectedProduct.price}
                </p>
              </div>

              <div>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Características:</h4>
                  <ul className="space-y-1">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Tallas disponibles:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <Button key={size} variant="outline" size="sm" className="px-4">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {selectedProduct.personalization && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    ✨ Personalización disponible
                  </h4>
                  <p className="text-sm text-blue-700">
                    Puedes agregar nombre y número a este jersey. Consulta las opciones con tu vendedor.
                  </p>
                </div>
              )}
            </div>
          </div>

          <EnhancedProductTables 
            selectedSport={selectedSport}
            selectedPath={selectedPath}
          />

          {/* Enhanced contact section */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 p-8 rounded-xl border shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ¿Buscas otro producto o tienes dudas?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cotiza tu producto personalizado, consulta disponibilidad de tallas y equipos, 
                o descubre más opciones en nuestro catálogo completo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-semibold text-gray-900 text-sm">Cotización personalizada</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl mb-2">📏</div>
                <h4 className="font-semibold text-gray-900 text-sm">Consulta de tallas</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl mb-2">🎽</div>
                <h4 className="font-semibold text-gray-900 text-sm">Disponibilidad de equipos</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-900 text-sm">Entrega rápida</h4>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/526691234567?text=Hola,%20estoy%20interesado%20en%20un%20jersey,%20¿me%20puedes%20apoyar?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center font-medium text-lg"
              >
                📱 WhatsApp Mazatlán
              </a>
              <a
                href="https://wa.me/523312345678?text=Hola,%20estoy%20interesado%20en%20un%20jersey,%20¿me%20puedes%20apoyar?"
                target="_blank"  
                rel="noopener noreferrer"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center font-medium text-lg"
              >
                📱 WhatsApp Guadalajara
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Vista de la galería principal
  return (
    <section className="section-padding bg-gray-50">
      <NavigationBreadcrumb 
        sport={selectedSport} 
        selectedPath={selectedPath} 
        onPathChange={onPathChange}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Galería de Productos - {selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)}
          </h2>
          <p className="text-lg text-gray-600">
            {selectedPath.length > 0 
              ? `Categoría: ${selectedPath.join(' > ')}`
              : 'Explora todos nuestros productos disponibles'
            }
          </p>
        </div>

        {compareProducts.length > 0 && (
          <div className="mb-8">
            <VersionComparison 
              products={compareProducts}
              onRemoveProduct={(productId) => {
                setCompareProducts(prev => prev.filter(p => p.id !== productId));
              }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getCurrentProducts().map((product) => (
            <Card 
              key={product.id} 
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden group"
            >
              <div 
                className="aspect-square bg-cover bg-center relative"
                style={{ backgroundImage: `url(${product.images[0]})` }}
                onClick={() => handleProductSelect(product)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {product.badges.map((badge) => (
                    <Badge key={badge} className="text-xs bg-white/90 text-gray-900">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-3 right-3">
                  <Button
                    size="sm"
                    variant={compareProducts.find(p => p.id === product.id) ? "default" : "secondary"}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCompareToggle(product);
                    }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <GitCompare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div onClick={() => handleProductSelect(product)}>
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">{product.team}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                    <Button size="sm" variant="ghost" className="text-xs text-primary hover:bg-primary/10">
                      Ver detalles →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <EnhancedProductTables 
          selectedSport={selectedSport}
          selectedPath={selectedPath}
        />
      </div>
    </section>
  );
};

export default ProductGallery;
