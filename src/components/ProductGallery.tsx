
import React, { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProductGalleryProps {
  selectedSport: string;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'todos', name: 'Todos', count: 150 },
  { id: 'hombre', name: 'Hombre', count: 80 },
  { id: 'mujer', name: 'Mujer', count: 35 },
  { id: 'niños', name: 'Niños', count: 25 },
  { id: 'jugador', name: 'Versión Jugador', count: 60 },
  { id: 'aficionado', name: 'Versión Aficionado', count: 70 },
  { id: 'retro', name: 'Retro', count: 20 }
];

const sampleProducts = [
  {
    id: '1',
    name: 'Manchester United Home',
    team: 'Manchester United',
    price: '$450',
    sport: 'futbol',
    category: 'hombre',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    badges: ['Nueva Temporada']
  },
  {
    id: '2',
    name: 'Chelsea Away',
    team: 'Chelsea FC',
    price: '$420',
    sport: 'futbol',
    category: 'mujer',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400',
    badges: ['Versión Aficionado']
  },
  {
    id: '3',
    name: 'Patriots Jersey',
    team: 'New England Patriots',
    price: '$580',
    sport: 'nfl',
    category: 'hombre',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
    badges: ['Versión Jugador']
  },
  // Add more sample products...
];

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  selectedSport, 
  selectedCategory, 
  onCategoryChange 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSport = selectedSport === 'todos' || product.sport === selectedSport;
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSport && matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-lg text-gray-600">
            Explora nuestra colección completa organizada por deporte y categoría
          </p>
        </div>

        {/* Filters and search */}
        <div className="mb-8">
          {/* Search bar */}
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

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className="text-sm"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Mostrando {filteredProducts.length} de {sampleProducts.length} productos
          </p>
        </div>

        {/* Products grid */}
        <div className={`grid gap-6 ${
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
                <div className="absolute top-2 left-2">
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

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar tus filtros o términos de búsqueda
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                onCategoryChange('todos');
                setSearchTerm('');
              }}
            >
              Limpiar filtros
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
