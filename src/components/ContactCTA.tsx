import React from 'react';

const ContactCTA = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-100 p-6 rounded-xl border">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          ¿Listo para hacer tu pedido?
        </h3>
        <p className="text-gray-600 mb-4">
          Contáctanos por WhatsApp para confirmar disponibilidad, precios y realizar tu pedido
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/526699123456?text=Hola, estoy interesado en un jersey, ¿me puedes apoyar?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center font-medium"
          >
            📱 WhatsApp Mazatlán
          </a>
          <a
            href="https://wa.me/523312345678?text=Hola, estoy interesado en un jersey, ¿me puedes apoyar?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center font-medium"
          >
            📱 WhatsApp Guadalajara
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;