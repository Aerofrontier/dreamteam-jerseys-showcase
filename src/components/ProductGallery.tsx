
import React, { useState } from 'react';
import { Search, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ProductTables from '@/components/ProductTables';

interface Product {
  id: string;
  name: string;
  team: string;
  price: string;
  sport: string;
  category: string[];
  image: string;
  badges: string[];
}

// Productos de ejemplo organizados por tipo
const sampleProducts: Product[] = [
  // Fútbol - Hombre - Nueva Temporada - Versión Jugador
  { id: '1', name: 'Real Madrid Home 24/25', team: 'Real Madrid', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '3', name: 'Manchester City Home 24/25', team: 'Manchester City', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '4', name: 'PSG Home 24/25', team: 'Paris Saint-Germain', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '5', name: 'Chelsea Home 24/25', team: 'Chelsea FC', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },

  // Fútbol - Hombre - Nueva Temporada - Versión Aficionado
  { id: '6', name: 'Real Madrid Home Fan', team: 'Real Madrid', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '7', name: 'Barcelona Home Fan', team: 'FC Barcelona', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '8', name: 'Manchester City Fan', team: 'Manchester City', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '9', name: 'PSG Home Fan', team: 'Paris Saint-Germain', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },
  { id: '10', name: 'Chelsea Home Fan', team: 'Chelsea FC', price: '$450', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-aficionado'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Nueva Temporada', 'Versión Aficionado'] },

  // NFL - Versión de Campo
  { id: '11', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Versión de Campo'] },
  { id: '12', name: 'Aaron Rodgers Packers', team: 'Green Bay Packers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Versión de Campo'] },
  { id: '13', name: 'Josh Allen Bills', team: 'Buffalo Bills', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Versión de Campo'] },
  { id: '14', name: 'Patrick Mahomes Chiefs', team: 'Kansas City Chiefs', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Versión de Campo'] },
  { id: '15', name: 'Lamar Jackson Ravens', team: 'Baltimore Ravens', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Versión de Campo'] },

  // NBA - Versión Jugador
  { id: '16', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Versión Jugador'] },
  { id: '17', name: 'Stephen Curry Warriors', team: 'Golden State Warriors', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Versión Jugador'] },
  { id: '18', name: 'Giannis Bucks', team: 'Milwaukee Bucks', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Versión Jugador'] },
  { id: '19', name: 'Luka Doncic Mavericks', team: 'Dallas Mavericks', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Versión Jugador'] },
  { id: '20', name: 'Jayson Tatum Celtics', team: 'Boston Celtics', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['Versión Jugador'] },

  // F1 - Tipo Polo
  { id: '21', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Tipo Polo'] },
  { id: '22', name: 'Mercedes AMG Polo', team: 'Mercedes AMG', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Tipo Polo'] },
  { id: '23', name: 'Ferrari Polo', team: 'Scuderia Ferrari', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['Tipo Polo'] },
  { id: '24', name: 'McLaren Polo', team: 'McLaren F1', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400', badges: ['Tipo Polo'] },
  { id: '25', name: 'Alpine Polo', team: 'Alpine F1', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', badges: ['Tipo Polo'] }
];

interface ProductGalleryProps {
  selectedSport: string;
  selectedPath: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  selectedSport, 
  selectedPath 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar productos según el deporte y la ruta seleccionada
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSport = product.sport === selectedSport;
    const matchesPath = selectedPath.every(step => product.category.includes(step));
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSport && matchesPath && matchesSearch;
  });

  // Generar el título basado en la ruta seleccionada
  const getGalleryTitle = () => {
    const sportNames: { [key: string]: string } = {
      futbol: 'Fútbol',
      nfl: 'NFL',
      nba: 'NBA',
      mlb: 'MLB',
      f1: 'Fórmula 1'
    };
    
    return `Galería de ${sportNames[selectedSport]} - ${selectedPath.join(' > ')}`;
  };

  const isProductFinalLevel = selectedPath.length > 0;

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {getGalleryTitle()}
          </h2>
          <p className="text-lg text-gray-600">
            {filteredProducts.length} productos disponibles
          </p>
        </div>

        {/* Search and view controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar jerseys, equipos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className={`grid gap-6 mb-12 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className="jersey-card">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full object-cover ${
                        viewMode === 'grid' ? 'h-48' : 'h-32'
                      }`}
                    />
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {product.badges.map((badge) => (
                        <Badge key={badge} className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{product.team}</p>
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tablas de precios y tallas - solo se muestran cuando hay productos */}
            {isProductFinalLevel && (
              <ProductTables 
                selectedSport={selectedSport}
                selectedPath={selectedPath}
              />
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar tus términos de búsqueda
            </p>
            <Button 
              variant="outline"
              onClick={() => setSearchTerm('')}
            >
              Limpiar búsqueda
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-blue-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-4">
            Tenemos acceso a miles de modelos adicionales. ¡Contáctanos por WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              📱 Mazatlán
            </Button>
            <Button size="lg" variant="outline">
              📱 Guadalajara
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
