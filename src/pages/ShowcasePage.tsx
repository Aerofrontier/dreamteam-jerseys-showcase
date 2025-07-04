
import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Usar los mismos productos del ProductGallery
const allProducts = [
  // Fútbol
  { id: '1', name: 'Real Madrid Home 24/25', team: 'Real Madrid', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  { id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'futbol', category: ['hombre', 'nueva-temporada', 'version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['Nueva Temporada', 'Versión Jugador'] },
  // NBA
  { id: '91', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['NBA', 'Versión Jugador'] },
  { id: '92', name: 'Stephen Curry Warriors', team: 'Golden State Warriors', price: '$680', sport: 'nba', category: ['version-jugador'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['NBA', 'Versión Jugador'] },
  // NFL
  { id: '71', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400', badges: ['NFL', 'Versión de Campo'] },
  { id: '72', name: 'Aaron Rodgers Packers', team: 'Green Bay Packers', price: '$750', sport: 'nfl', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['NFL', 'Versión de Campo'] },
  // MLB
  { id: '81', name: 'Dodgers Betts Jersey', team: 'Los Angeles Dodgers', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['MLB', 'Versión de Campo'] },
  { id: '82', name: 'Yankees Judge Jersey', team: 'New York Yankees', price: '$720', sport: 'mlb', category: ['version-campo'], image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400', badges: ['MLB', 'Versión de Campo'] },
  // F1
  { id: '51', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400', badges: ['F1', 'Tipo Polo'] },
  { id: '52', name: 'Mercedes AMG Polo', team: 'Mercedes AMG', price: '$420', sport: 'f1', category: ['tipo-polo'], image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', badges: ['F1', 'Tipo Polo'] }
];

const ShowcasePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState<string>('all');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.team.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === 'all' || product.sport === selectedSport;
    
    return matchesSearch && matchesSport;
  });

  const handleWhatsAppContact = (product: any) => {
    const message = `Hola, vi este modelo en el muestrario: ${product.name}, ¿me pueden ayudar con más información?`;
    const whatsappUrl = `https://wa.me/526699123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const sports = [
    { id: 'all', name: 'Todos', icon: '🏆' },
    { id: 'futbol', name: 'Fútbol', icon: '⚽' },
    { id: 'nba', name: 'NBA', icon: '🏀' },
    { id: 'nfl', name: 'NFL', icon: '🏈' },
    { id: 'mlb', name: 'MLB', icon: '⚾' },
    { id: 'f1', name: 'F1', icon: '🏎️' }
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Muestrario General
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {filteredProducts.length} modelos de muestra disponibles
            </p>
            <p className="text-sm text-amber-600 bg-amber-50 inline-block px-4 py-2 rounded-full border border-amber-200">
              💡 Este es nuestro muestrario - Tenemos cientos de modelos adicionales disponibles
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar en el muestrario..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {sports.map((sport) => (
                <Button
                  key={sport.id}
                  variant={selectedSport === sport.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSport(sport.id)}
                  className="flex items-center gap-2"
                >
                  <span>{sport.icon}</span>
                  {sport.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="jersey-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg"
                onClick={() => handleWhatsAppContact(product)}
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
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">{product.team}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                    <Button size="sm" variant="ghost" className="text-xs text-primary hover:bg-primary/10">
                      Consultar →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Buscas algo específico?
            </h3>
            <p className="text-gray-600 mb-4">
              Este muestrario representa solo una pequeña muestra. Tenemos acceso a cientos de modelos adicionales.
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

export default ShowcasePage;
