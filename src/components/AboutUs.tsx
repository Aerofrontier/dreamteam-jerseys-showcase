
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutUs = () => {
  const values = [
    {
      icon: '🏆',
      title: 'Calidad Premium',
      description: 'Utilizamos materiales de primera calidad para garantizar durabilidad y comodidad.'
    },
    {
      icon: '⚡',
      title: 'Entrega Rápida',
      description: 'Envíos express y entrega puntual en toda la República Mexicana.'
    },
    {
      icon: '💎',
      title: 'Precios Justos',
      description: 'La mejor relación calidad-precio del mercado, sin comprometer la calidad.'
    },
    {
      icon: '🤝',
      title: 'Servicio Personal',
      description: 'Atención personalizada y asesoría experta para cada cliente.'
    }
  ];

  const coverage = [
    { city: 'Mazatlán', status: 'Base principal', icon: '🏢' },
    { city: 'Guadalajara', status: 'Base secundaria', icon: '🏪' },
    { city: 'Ciudad de México', status: 'Envíos 2-3 días', icon: '📦' },
    { city: 'Monterrey', status: 'Envíos 2-3 días', icon: '📦' },
    { city: 'Resto del país', status: 'Envíos 3-7 días', icon: '🚚' }
  ];

  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sobre DreamTeam Sport Jerseys
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una empresa mexicana especializada en jerseys deportivos de alta calidad. 
            Nuestra pasión por el deporte y el compromiso con la excelencia nos han convertido 
            en la opción preferida de miles de fanáticos.
          </p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nuestra Historia
                </h3>
                <p className="text-gray-600 mb-4">
                  Comenzamos en 2019 con una simple misión: hacer accesibles los jerseys 
                  deportivos de calidad premium para todos los fanáticos mexicanos. 
                  Lo que inició como un proyecto entre amigos apasionados por el deporte, 
                  se ha convertido en una empresa reconocida en todo el país.
                </p>
                <p className="text-gray-600 mb-6">
                  Hoy, con bases en Mazatlán y Guadalajara, distribuimos miles de jerseys 
                  al mes, siempre manteniendo nuestro compromiso original: 
                  <strong className="text-primary"> "Réplicas que juegan como originales"</strong>.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary">5+ años de experiencia</Badge>
                  <Badge variant="outline">10,000+ clientes satisfechos</Badge>
                  <Badge variant="outline">Cobertura nacional</Badge>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white text-center flex flex-col justify-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h4 className="text-2xl font-bold mb-2">DreamTeam</h4>
                  <p className="text-xl opacity-90">Sport Jerseys</p>
                  <p className="text-sm opacity-75 mt-4">Desde 2019</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover-lift">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Cobertura Nacional
          </h3>
          <Card className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {coverage.map((location, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="text-2xl mb-2">{location.icon}</div>
                  <h4 className="font-semibold text-gray-900">{location.city}</h4>
                  <p className="text-sm text-gray-600">{location.status}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="text-center bg-primary text-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-8">DreamTeam en Números</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">5+</div>
              <p className="text-sm opacity-90">Años de experiencia</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10K+</div>
              <p className="text-sm opacity-90">Clientes felices</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <p className="text-sm opacity-90">Modelos disponibles</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">32</div>
              <p className="text-sm opacity-90">Estados con envío</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
