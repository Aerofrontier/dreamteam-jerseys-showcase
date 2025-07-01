
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },
  '2': {
    id: '2', name: 'Barcelona Home 24/25', team: 'FC Barcelona', price: '$650', sport: 'Fútbol',
    category: ['Hombre', 'Nueva Temporada', 'Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['Nueva Temporada', 'Versión Jugador'],
    description: 'Jersey oficial del FC Barcelona temporada 2024/25. Diseño icónico con las tradicionales rayas azulgrana.',
    features: ['Diseño clásico azulgrana', 'Tecnología de rendimiento', 'Escudo oficial bordado', 'Corte ergonómico'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },

  // NFL - VERSIÓN DE CAMPO
  '71': {
    id: '71', name: 'Tom Brady Buccaneers', team: 'Tampa Bay Buccaneers', price: '$750', sport: 'NFL',
    category: ['Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NFL', 'Versión de Campo'],
    description: 'Jersey oficial de Tom Brady con Tampa Bay Buccaneers. Versión de campo con todos los detalles profesionales.',
    features: ['Versión de campo auténtica', 'Materiales premium', 'Números y nombres bordados', 'Tecnología de alto rendimiento'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },

  // F1 - TIPO POLO
  '51': {
    id: '51', name: 'Red Bull Racing Polo', team: 'Red Bull Racing', price: '$420', sport: 'Fórmula 1',
    category: ['Tipo Polo'],
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800', 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800'],
    badges: ['F1', 'Tipo Polo'],
    description: 'Polo oficial del equipo Red Bull Racing de Fórmula 1. Diseño elegante y deportivo.',
    features: ['Diseño oficial del equipo', 'Material tipo polo', 'Logo bordado', 'Corte moderno'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: false
  },

  // NBA - VERSIÓN JUGADOR
  '91': {
    id: '91', name: 'LeBron James Lakers', team: 'Los Angeles Lakers', price: '$680', sport: 'NBA',
    category: ['Versión Jugador'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800'],
    badges: ['NBA', 'Versión Jugador'],
    description: 'Jersey oficial de LeBron James con Los Angeles Lakers. Versión jugador con máxima calidad.',
    features: ['Versión jugador auténtica', 'Tecnología Nike Dri-FIT', 'Números y nombres bordados', 'Diseño oficial NBA'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: true
  },

  // MLB - VERSIÓN DE CAMPO
  '81': {
    id: '81', name: 'Dodgers Betts Jersey', team: 'Los Angeles Dodgers', price: '$720', sport: 'MLB',
    category: ['Versión de Campo'],
    images: ['https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800'],
    badges: ['MLB', 'Versión de Campo'],
    description: 'Jersey oficial de Mookie Betts con Los Angeles Dodgers. Versión de campo profesional.',
    features: ['Versión de campo auténtica', 'Material premium', 'Bordados oficiales', 'Tecnología Coolbase'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], personalization: true
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
                  <Badge key={badge} className="text-xs">
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

        {/* 🔥 TABLAS DE TALLAS Y PRECIOS - AQUÍ PUEDES MODIFICAR LAS TABLAS */}
        {/* Archivo: src/pages/ProductDetail.tsx - Líneas 250-290 */}
        {/* Para modificar las tablas, edita el contenido de los TabsContent */}
        <div className="mt-16">
          <Tabs defaultValue="sizes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sizes">Guía de Tallas</TabsTrigger>
              <TabsTrigger value="prices">Tabla de Precios</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sizes" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Guía de Tallas - {product.category.join(' ')}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Talla</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Pecho (cm)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Largo (cm)</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Ancho (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-gray-300 px-4 py-2">XS</td><td className="border border-gray-300 px-4 py-2">46</td><td className="border border-gray-300 px-4 py-2">68</td><td className="border border-gray-300 px-4 py-2">42</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">S</td><td className="border border-gray-300 px-4 py-2">50</td><td className="border border-gray-300 px-4 py-2">70</td><td className="border border-gray-300 px-4 py-2">46</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">M</td><td className="border border-gray-300 px-4 py-2">54</td><td className="border border-gray-300 px-4 py-2">72</td><td className="border border-gray-300 px-4 py-2">50</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">L</td><td className="border border-gray-300 px-4 py-2">58</td><td className="border border-gray-300 px-4 py-2">74</td><td className="border border-gray-300 px-4 py-2">54</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">XL</td><td className="border border-gray-300 px-4 py-2">62</td><td className="border border-gray-300 px-4 py-2">76</td><td className="border border-gray-300 px-4 py-2">58</td></tr>
                        <tr><td className="border border-gray-300 px-4 py-2">XXL</td><td className="border border-gray-300 px-4 py-2">66</td><td className="border border-gray-300 px-4 py-2">78</td><td className="border border-gray-300 px-4 py-2">62</td></tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="prices" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Precios por Volumen</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-2 text-left">Cantidad</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Precio Unitario</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50"><td className="border border-gray-300 px-4 py-2">1-2 piezas</td><td className="border border-gray-300 px-4 py-2">{product.price}</td><td className="border border-gray-300 px-4 py-2">{product.price}-{parseInt(product.price.replace('$', '')) * 2}</td></tr>
                        <tr className="hover:bg-gray-50"><td className="border border-gray-300 px-4 py-2">3-5 piezas</td><td className="border border-gray-300 px-4 py-2">${parseInt(product.price.replace('$', '')) - 30}</td><td className="border border-gray-300 px-4 py-2">Consultar</td></tr>
                        <tr className="hover:bg-gray-50"><td className="border border-gray-300 px-4 py-2">6-10 piezas</td><td className="border border-gray-300 px-4 py-2">${parseInt(product.price.replace('$', '')) - 60}</td><td className="border border-gray-300 px-4 py-2">Consultar</td></tr>
                        <tr className="hover:bg-gray-50"><td className="border border-gray-300 px-4 py-2">11+ piezas</td><td className="border border-gray-300 px-4 py-2">${parseInt(product.price.replace('$', '')) - 100}</td><td className="border border-gray-300 px-4 py-2">Consultar</td></tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
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
