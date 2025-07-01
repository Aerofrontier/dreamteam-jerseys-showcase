
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué incluye la personalización?",
      answer: "La personalización incluye nombre y número en la espalda del jersey. Disponible solo para jerseys de fútbol. Utilizamos viniles de alta calidad que no se despegan ni decoloran. El costo adicional es de $80 pesos por jersey personalizado."
    },
    {
      question: "¿Cuánto tarda el envío?",
      answer: "Los tiempos de envío varían según tu ubicación: Mazatlán y Guadalajara (1-2 días), ciudades principales (3-5 días), y resto del país (5-7 días hábiles). El envío es gratuito en pedidos de 3 o más piezas."
    },
    {
      question: "¿Puedo pedir un equipo que no esté en el catálogo?",
      answer: "¡Por supuesto! Este catálogo muestra solo una pequeña parte de nuestro inventario. Tenemos acceso a miles de modelos de todos los deportes y ligas. Contáctanos por WhatsApp con la imagen o descripción de lo que buscas."
    },
    {
      question: "¿Hay devoluciones o cambios?",
      answer: "Sí, aceptamos cambios por talla incorrecta dentro de los primeros 7 días, siempre que el producto esté en perfectas condiciones. El cliente cubre el costo de envío del cambio. No aceptamos devoluciones por jerseys personalizados."
    },
    {
      question: "¿Los jerseys son réplicas o originales?",
      answer: "Nuestros jerseys son réplicas de alta calidad AAA+. Utilizamos los mismos materiales y técnicas de confección que las marcas originales, pero a precios accesibles. La calidad es tan buena que 'juegan como originales'."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencia bancaria, depósito, Oxxo Pay, y pago contra entrega en Mazatlán y Guadalajara. Para pedidos foráneos requerimos el 50% de anticipo."
    },
    {
      question: "¿Hacen pedidos especiales para equipos?",
      answer: "Sí, manejamos pedidos especiales para equipos deportivos, escuelas, y empresas. Ofrecemos descuentos por volumen y podemos conseguir modelos específicos. Contáctanos para cotizaciones personalizadas."
    },
    {
      question: "¿Los jerseys tienen garantía?",
      answer: "Todos nuestros jerseys tienen garantía de 30 días contra defectos de fabricación. Si tu jersey presenta algún problema de calidad, lo cambiamos sin costo adicional."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-8 text-center bg-blue-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Tienes otra pregunta?
          </h3>
          <p className="text-gray-600 mb-4">
            Nuestro equipo está listo para ayudarte con cualquier duda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/526691234567?text=Hola,%20tengo%20una%20pregunta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              📱 WhatsApp Mazatlán
            </a>
            <a
              href="https://wa.me/523312345678?text=Hola,%20tengo%20una%20pregunta"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              📱 WhatsApp Guadalajara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
