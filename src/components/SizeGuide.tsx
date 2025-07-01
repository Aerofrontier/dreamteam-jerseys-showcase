
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SizeGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('hombre');
  const [selectedSize, setSelectedSize] = useState('');

  const sizeData = {
    hombre: {
      title: 'Tallas Hombre',
      sizes: [
        { size: 'S', chest: '88-92', length: '68', shoulder: '44' },
        { size: 'M', chest: '96-100', length: '70', shoulder: '46' },
        { size: 'L', chest: '104-108', length: '72', shoulder: '48' },
        { size: 'XL', chest: '112-116', length: '74', shoulder: '50' },
        { size: 'XXL', chest: '120-124', length: '76', shoulder: '52' }
      ]
    },
    mujer: {
      title: 'Tallas Mujer',
      sizes: [
        { size: 'XS', chest: '80-84', length: '62', shoulder: '40' },
        { size: 'S', chest: '84-88', length: '64', shoulder: '42' },
        { size: 'M', chest: '88-92', length: '66', shoulder: '44' },
        { size: 'L', chest: '96-100', length: '68', shoulder: '46' },
        { size: 'XL', chest: '104-108', length: '70', shoulder: '48' }
      ]
    },
    niños: {
      title: 'Tallas Niños',
      sizes: [
        { size: '4-6', chest: '60-64', length: '50', shoulder: '32' },
        { size: '8-10', chest: '68-72', length: '54', shoulder: '36' },
        { size: '12-14', chest: '76-80', length: '58', shoulder: '40' },
        { size: '16-18', chest: '84-88', length: '62', shoulder: '42' }
      ]
    }
  };

  const categories = [
    { id: 'hombre', name: 'Hombre', icon: '👨' },
    { id: 'mujer', name: 'Mujer', icon: '👩' },
    { id: 'niños', name: 'Niños', icon: '👶' }
  ];

  const currentData = sizeData[selectedCategory as keyof typeof sizeData];

  return (
    <section id="tallas" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Guía de Tallas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra tu talla perfecta con nuestras medidas detalladas. 
            Todas las medidas están en centímetros.
          </p>
        </div>

        {/* Category selector */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-white p-2 rounded-lg shadow-sm">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'ghost'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Size table */}
        <Card className="overflow-hidden mb-8">
          <CardHeader className="bg-primary text-white">
            <CardTitle className="text-center">{currentData.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold">Talla</th>
                    <th className="text-center p-4 font-semibold">Pecho (cm)</th>
                    <th className="text-center p-4 font-semibold">Largo (cm)</th>
                    <th className="text-center p-4 font-semibold">Hombro (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.sizes.map((item, index) => (
                    <tr 
                      key={index}
                      className={`border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedSize === item.size ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedSize(selectedSize === item.size ? '' : item.size)}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Badge variant={selectedSize === item.size ? 'default' : 'outline'}>
                            {item.size}
                          </Badge>
                        </div>
                      </td>
                      <td className="p-4 text-center font-medium">{item.chest}</td>
                      <td className="p-4 text-center font-medium">{item.length}</td>
                      <td className="p-4 text-center font-medium">{item.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Size comparison and tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">💡 Consejos de Medición</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Pecho:</strong> Mide alrededor de la parte más ancha del pecho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Largo:</strong> Desde el hombro hasta el borde inferior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Hombro:</strong> De costura a costura en la parte superior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Para un ajuste holgado, elige una talla más grande</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">📏 Comparar Versiones</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Versión Jugador</span>
                <Badge>Ajustada</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Versión Aficionado</span>
                <Badge variant="outline">Cómoda</Badge>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Nota:</strong> Las versiones de jugador son más ajustadas al cuerpo, 
                mientras que las de aficionado son más cómodas para el uso diario.
              </p>
            </div>
          </Card>
        </div>

        {/* Contact for size help */}
        <div className="mt-8 text-center bg-blue-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Dudas con tu talla?
          </h3>
          <p className="text-gray-600 mb-4">
            Nuestros asesores te ayudan a elegir la talla perfecta
          </p>
          <Button size="lg">
            📱 Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
