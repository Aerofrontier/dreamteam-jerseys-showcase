
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SizingPage = () => {
  const navigate = useNavigate();

  const sizingData = [
    {
      sport: 'Fórmula 1',
      category: 'Hombre - Única',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
      sizes: [
        { size: 'S', largo: '71', busto: '52', cintura: '49.5', cadera: '52', hombros: '45', cuello: '19.5', manga: '36.5' },
        { size: 'M', largo: '73', busto: '54', cintura: '51.5', cadera: '54', hombros: '47', cuello: '19.5', manga: '38.5' },
        { size: 'L', largo: '75', busto: '56', cintura: '53.5', cadera: '56', hombros: '49', cuello: '19.5', manga: '40.5' },
        { size: 'XL', largo: '77', busto: '58', cintura: '55.5', cadera: '58', hombros: '51', cuello: '19.5', manga: '42.5' },
        { size: '2XL', largo: '79', busto: '60', cintura: '57.5', cadera: '60', hombros: '53', cuello: '19.5', manga: '44.5' },
        { size: '3XL', largo: '81', busto: '62', cintura: '59.5', cadera: '62', hombros: '55', cuello: '21.5', manga: '46.5' },
        { size: '4XL', largo: '83', busto: '64', cintura: '61.5', cadera: '64', hombros: '57', cuello: '21.5', manga: '48.5' },
        { size: '5XL', largo: '85', busto: '66', cintura: '63.5', cadera: '66', hombros: '59', cuello: '21.5', manga: '50.5' }
      ]
    },
    {
      sport: 'Fútbol',
      category: 'Hombre - Versión Jugador',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
      sizes: [
        { size: 'S', largo: '71', busto: '46', hombros: '41.5', manga: '23.5', altura: '160-165' },
        { size: 'M', largo: '73', busto: '48', hombros: '43', manga: '24', altura: '165-170' },
        { size: 'L', largo: '75', busto: '50', hombros: '44.5', manga: '24.5', altura: '170-175' },
        { size: 'XL', largo: '77', busto: '52', hombros: '46', manga: '25', altura: '175-180' },
        { size: '2XL', largo: '79', busto: '54', hombros: '47.5', manga: '25.5', altura: '180-185' }
      ]
    },
    {
      sport: 'NBA',
      category: 'Hombre - Bordada',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400',
      sizes: [
        { size: 'S', busto: '50', largoPrenda: '76', alturaRecomendada: '170', pesoRecomendado: '50-60' },
        { size: 'M', busto: '53', largoPrenda: '79', alturaRecomendada: '175', pesoRecomendado: '60-70' },
        { size: 'L', busto: '56', largoPrenda: '82', alturaRecomendada: '180', pesoRecomendado: '70-80' },
        { size: 'XL', busto: '58', largoPrenda: '85', alturaRecomendada: '185', pesoRecomendado: '80-90' },
        { size: '2XL', busto: '61', largoPrenda: '88', alturaRecomendada: '190', pesoRecomendado: '90-100' }
      ]
    },
    {
      sport: 'NFL',
      category: 'Prensada por calor',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
      sizes: [
        { size: 'S', busto: '56', largoPrenda: '80' },
        { size: 'M', busto: '58', largoPrenda: '82' },
        { size: 'L', busto: '60', largoPrenda: '84' },
        { size: 'XL', busto: '62', largoPrenda: '86' },
        { size: '2XL', busto: '64', largoPrenda: '88' },
        { size: '3XL', busto: '66', largoPrenda: '90' }
      ]
    }
  ];

  const getColumnTitle = (key: string) => {
    const titles: { [key: string]: string } = {
      largo: 'Largo (cm)',
      busto: 'Busto (cm)', 
      cintura: 'Cintura (cm)',
      cadera: 'Cadera (cm)',
      hombros: 'Hombros (cm)',
      cuello: 'Cuello (cm)',
      manga: 'Manga (cm)',
      largoPrenda: 'Largo Prenda (cm)',
      altura: 'Altura (cm)',
      alturaRecomendada: 'Altura Sugerida',
      pesoRecomendado: 'Peso Sugerido (kg)'
    };
    return titles[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guía de Tallas
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra la talla perfecta para cada tipo de jersey. Todas las medidas están en centímetros.
            </p>
          </div>

          <div className="space-y-8">
            {sizingData.map((category, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center gap-4">
                    <img 
                      src={category.image} 
                      alt={`${category.sport} ${category.category}`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {category.sport} - {category.category}
                        <Badge variant="secondary" className="text-xs">
                          Medidas en cm
                        </Badge>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-bold">Talla</TableHead>
                          {Object.keys(category.sizes[0]).filter(key => key !== 'size').map((key) => (
                            <TableHead key={key} className="font-bold">
                              {getColumnTitle(key)}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.sizes.map((size, sizeIndex) => (
                          <TableRow key={sizeIndex} className="hover:bg-gray-50">
                            <TableCell className="font-bold text-primary">{size.size}</TableCell>
                            {Object.entries(size).filter(([key]) => key !== 'size').map(([key, value]) => (
                              <TableCell key={key}>{value}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700">
                      💡 <strong>Nota:</strong> Las medidas pueden variar entre 1-4 cm debido a diferencias en el método de medición. Selecciona según tus medidas reales.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-blue-100 p-8 rounded-xl border">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Dudas sobre tu talla?
            </h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo puede ayudarte a elegir la talla perfecta. Contáctanos por WhatsApp con tus medidas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                📱 Consultar por WhatsApp Mazatlán
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                📱 Consultar por WhatsApp Guadalajara
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SizingPage;
