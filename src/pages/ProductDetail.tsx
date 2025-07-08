
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SizingTables from '@/components/SizingTables';
import PricingTables from '@/components/PricingTables';
import ContactCTA from '@/components/ContactCTA';
import VersionVideoComparison from '@/components/VersionVideoComparison';

// 🔥 DATOS DE PRODUCTOS - AQUÍ PUEDES MODIFICAR LA INFORMACIÓN DE PRODUCTOS
// Archivo: src/pages/ProductDetail.tsx - Líneas 15-120
// Para modificar información de productos, edita este objeto
const productData: { [key: string]: any } = {
  // FÚTBOL - HOMBRE - NUEVA TEMPORADA - VERSIÓN JUGADOR
  '1': {
    id: '1', name: 'Real Madrid Home 24/25', team: 'Real Madrid', price: '$650', sport: 'Fútbol',
    category: ['Hombre', 'Nueva Temporada', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'],
    badges: ['Nueva Temporada', 'Versión Jugador'],
    description: 'Jersey oficial del Real Madrid temporada 2024/25. Confeccionado con tecnología Dri-FIT que absorbe el sudor para mantenerte seco y cómodo.',
    features: ['Tecnología Dri-FIT para control de humedad', 'Diseño oficial del club', 'Corte atlético moderno', 'Escudo bordado de alta calidad'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'], personalization: true
  },
  '2': {
    id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'Fútbol',
    category: ['Hombre', 'Nueva Temporada', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['Nueva Temporada', 'Versión Jugador'],
    description: 'Jersey oficial del FC Barcelona temporada 2024/25. Diseño icónico con rayas azulgrana que representan la historia y tradición del club catalán. Confeccionado con tecnología avanzada que combina estilo y rendimiento.',
    features: ['Diseño clásico azulgrana', 'Tecnología de rendimiento', 'Escudo oficial bordado', 'Corte ergonómico'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'], personalization: true
  },

  // Agregar categoría mujeres para todos los deportes
  '3': {
    id: '3', name: 'Real Madrid Home Mujer 24/25', team: 'Real Madrid', price: '$580', sport: 'Fútbol',
    category: ['Mujeres', 'Nueva Temporada', 'Versión Aficionado'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    badges: ['Nueva Temporada', 'Mujeres'],
    description: 'Jersey oficial del Real Madrid para mujeres temporada 2024/25. Diseño específicamente adaptado para el corte femenino con todas las características técnicas de alto rendimiento que caracterizan al club merengue.',
    features: ['Corte específico para mujeres', 'Tecnología Dri-FIT', 'Diseño oficial del club', 'Escudo bordado premium'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], personalization: true
  },

  '92': {
    id: '92', name: 'Lakers Mujer Jersey', team: 'Los Angeles Lakers', price: '$650', sport: 'NBA',
    category: ['Mujeres', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NBA', 'Mujeres'],
    description: 'Jersey oficial de Los Angeles Lakers diseñado específicamente para mujeres. Combina el estilo icónico púrpura y dorado con un corte moderno y femenino que mantiene toda la autenticidad del equipo profesional.',
    features: ['Corte diseñado para mujeres', 'Colores oficiales Lakers', 'Tecnología de rendimiento', 'Números bordados'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], personalization: true
  },

  '72': {
    id: '72', name: 'Chiefs Mujer Jersey', team: 'Kansas City Chiefs', price: '$720', sport: 'NFL',
    category: ['Mujeres', 'Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NFL', 'Mujeres'],
    description: 'Jersey oficial de Kansas City Chiefs para mujeres. Diseño que celebra al equipo campeón con corte específico femenino y todos los detalles premium que caracterizan a la vestimenta oficial de la NFL.',
    features: ['Corte específico femenino', 'Detalles oficiales NFL', 'Tecnología de alto rendimiento', 'Bordados premium'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], personalization: true
  },

  '82': {
    id: '82', name: 'Dodgers Mujer Jersey', team: 'Los Angeles Dodgers', price: '$680', sport: 'MLB',
    category: ['Mujeres', 'Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    badges: ['MLB', 'Mujeres'],
    description: 'Jersey oficial de Los Angeles Dodgers para mujeres. El icónico azul Dodger en un diseño elegante y femenino que mantiene toda la tradición y calidad del equipo de béisbol más reconocido de Los Ángeles.',
    features: ['Diseño femenino elegante', 'Azul Dodger auténtico', 'Materiales premium', 'Bordados oficiales'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], personalization: true
  },

  '52': {
    id: '52', name: 'Red Bull Racing Mujer Polo', team: 'Red Bull Racing', price: '$380', sport: 'Fórmula 1',
    category: ['Mujeres', 'Tipo Polo'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800'],
    badges: ['F1', 'Mujeres'],
    description: 'Polo oficial del equipo Red Bull Racing para mujeres. Diseño sofisticado que combina la elegancia del automovilismo con un corte moderno y femenino, ideal para fanáticas de la Fórmula 1 que buscan estilo y comodidad.',
    features: ['Corte femenino moderno', 'Diseño oficial Red Bull', 'Material polo premium', 'Logo bordado'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], personalization: false
  },

  // NFL - VERSIÓN DE CAMPO
  '71': {
    id: '71', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'NFL',
    category: ['Hombre', 'Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NFL', 'Versión de Campo'],
    description: 'Jersey oficial de Tom Brady con Tampa Bay Buccaneers. Una pieza de colección que representa la grandeza del GOAT en sus últimas temporadas. Versión de campo auténtica con todos los detalles profesionales que usó el legendario quarterback.',
    features: ['Versión de campo auténtica', 'Materiales premium', 'Números y nombres bordados', 'Tecnología de alto rendimiento'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'], personalization: true
  },

  // F1 - TIPO POLO
  '51': {
    id: '51', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'Fórmula 1',
    category: ['Hombre', 'Tipo Polo'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800'],
    badges: ['F1', 'Tipo Polo'],
    description: 'Polo oficial del equipo Red Bull Racing de Fórmula 1. Diseño elegante y deportivo que refleja la innovación y velocidad del equipo campeón. Perfecto para los verdaderos fanáticos del automovilismo que buscan calidad y estilo distintivo.',
    features: ['Diseño oficial del equipo', 'Material tipo polo', 'Logo bordado', 'Corte moderno'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'], personalization: false
  },

  // NBA - VERSIÓN JUGADOR
  '91': {
    id: '91', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'NBA',
    category: ['Hombre', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NBA', 'Versión Jugador'],
    description: 'Jersey oficial de LeBron James con Los Angeles Lakers. Representa la grandeza del Rey James en la ciudad de los ángeles. Versión jugador auténtica con la máxima calidad y tecnología que caracteriza a los uniformes profesionales de la NBA.',
    features: ['Versión jugador auténtica', 'Tecnología Nike Dri-FIT', 'Números y nombres bordados', 'Diseño oficial NBA'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'], personalization: true
  },

  // MLB - VERSIÓN DE CAMPO
  '81': {
    id: '81', name: 'Dodgers Betts Jersey', team: 'Los Angeles Dodgers', price: '$720', sport: 'MLB',
    category: ['Hombre', 'Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    badges: ['MLB', 'Versión de Campo'],
    description: 'Jersey oficial de Mookie Betts con Los Angeles Dodgers. Una leyenda del béisbol moderno en el equipo más icónico de LA. Versión de campo profesional con todos los detalles auténticos que se usan en las Grandes Ligas.',
    features: ['Versión de campo auténtica', 'Material premium', 'Bordados oficiales', 'Tecnología Coolbase'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'], personalization: true
  }

  // 🔥 PARA AGREGAR MÁS PRODUCTOS, agrega nuevos objetos aquí siguiendo la misma estructura
  // Ejemplo: '100': { id: '100', name: 'Producto Nuevo', ... }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = productData[id || ''];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-6">El producto que buscas no existe o ha sido removido.</p>
          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppContact = (city: string) => {
    const message = `Hola, estoy interesado en el ${product.name}, ¿me puedes apoyar?`;
    const phoneNumber = city === 'mazatlan' ? '6691234567' : '3331234567';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBadgeClick = (badge: string) => {
    // Navigate to specific categories based on badge
    const sportMap: { [key: string]: string } = {
      'NBA': '/nba',
      'NFL': '/nfl', 
      'MLB': '/mlb',
      'F1': '/f1'
    };

    if (sportMap[badge]) {
      window.location.href = sportMap[badge];
    } else if (badge === 'Nueva Temporada') {
      // Navigate to sport with nueva-temporada filter
      const sportRoute = getSportRoute(product.sport);
      window.location.href = `${sportRoute}?category=nueva-temporada`;
    } else if (badge === 'Versión Jugador') {
      const sportRoute = getSportRoute(product.sport);
      window.location.href = `${sportRoute}?category=version-jugador`;
    } else if (badge === 'Versión de Campo') {
      const sportRoute = getSportRoute(product.sport);
      window.location.href = `${sportRoute}?category=version-campo`;
    } else if (badge === 'Mujeres') {
      const sportRoute = getSportRoute(product.sport);
      window.location.href = `${sportRoute}?category=mujeres`;
    } else if (badge === 'Tipo Polo') {
      const sportRoute = getSportRoute(product.sport);
      window.location.href = `${sportRoute}?category=tipo-polo`;
    }
  };

  const getSportRoute = (sport: string): string => {
    const routes: { [key: string]: string } = {
      'Fútbol': '/futbol',
      'NBA': '/nba',
      'NFL': '/nfl',
      'MLB': '/mlb',
      'Fórmula 1': '/f1'
    };
    return routes[sport] || '/';
  };

  const getSportKey = (sport: string): string => {
    const sportKeys: { [key: string]: string } = {
      'Fútbol': 'futbol',
      'NBA': 'nba',
      'NFL': 'nfl',
      'MLB': 'mlb',
      'Fórmula 1': 'f1'
    };
    return sportKeys[sport] || 'futbol';
  };

  const getProductPath = (product: any): string[] => {
    const path: string[] = [];
    
    if (product.category.includes('Hombre')) {
      path.push('hombre');
    } else if (product.category.includes('Mujeres')) {
      path.push('mujeres');
    }
    
    if (product.category.includes('Nueva Temporada')) {
      path.push('nueva-temporada');
    }
    
    if (product.category.includes('Versión Jugador')) {
      path.push('version-jugador');
    } else if (product.category.includes('Versión Aficionado')) {
      path.push('version-aficionado');
    } else if (product.category.includes('Versión de Campo')) {
      path.push('version-campo');
    }
    
    if (product.category.includes('Tipo Polo')) {
      path.push('tipo-polo');
    }
    
    return path;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image: string, index: number) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.badges.map((badge: string) => (
                  <Badge 
                    key={badge} 
                    className="text-xs cursor-pointer hover:bg-primary/20"
                    onClick={() => handleBadgeClick(badge)}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.team}</p>
              <p className="text-2xl font-bold text-primary mt-4">{product.price}</p>
            </div>

            <div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tallas disponibles</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string) => (
                  <Button key={size} variant="outline" size="sm">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {product.personalization && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✨ Personalización disponible</h4>
                <p className="text-sm text-gray-600">
                  Puedes agregar nombre y número a este jersey. Consulta opciones con tu vendedor.
                </p>
              </div>
            )}

            {/* Contact Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacta a tu vendedor</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => handleWhatsAppContact('mazatlan')}
                  className="flex-1"
                >
                  📱 Mazatlán
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => handleWhatsAppContact('guadalajara')}
                  className="flex-1"
                >
                  📱 Guadalajara
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video comparison for soccer player/fan versions */}
        {product.sport === 'Fútbol' && 
         (product.category.includes('Versión Jugador') || product.category.includes('Versión Aficionado')) && (
          <VersionVideoComparison sport="futbol" categories={product.category} />
        )}

        {/* 🔥 TABLAS DE TALLAS Y PRECIOS - AQUÍ PUEDES MODIFICAR LAS TABLAS */}
        <div className="mt-16">
          <Tabs defaultValue="sizes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sizes">Guía de Tallas</TabsTrigger>
              <TabsTrigger value="prices">Precios</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sizes" className="mt-6">
              <SizingTables selectedSport={getSportKey(product.sport)} selectedPath={getProductPath(product)} />
            </TabsContent>
            
            <TabsContent value="prices" className="mt-6">
              <PricingTables selectedSport={getSportKey(product.sport)} selectedPath={getProductPath(product)} />
              
              {/* Contact CTA al final después de las tablas */}
              <ContactCTA />
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products Navigation */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Productos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(productData).filter(p => p.sport === product.sport && p.id !== product.id).slice(0, 4).map((relatedProduct: any) => (
              <Card key={relatedProduct.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <Link to={`/producto/${relatedProduct.id}`}>
                  <div className="aspect-square rounded-t-lg overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-900 mb-1">{relatedProduct.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{relatedProduct.team}</p>
                    <p className="text-lg font-bold text-primary">{relatedProduct.price}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
