
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone,
  ShoppingBag
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'WhatsApp', icon: MessageCircle, url: '#' }
  ];

  const quickLinks = [
    { name: 'Inicio', action: () => navigate('/') },
    { name: 'Deportes', action: () => scrollToSection('deportes') },
    { name: 'Destacados', action: () => scrollToSection('destacados') },
    { name: 'Muestrario', action: () => navigate('/muestrario') },
    { name: 'Precios', action: () => navigate('/precios') },
    { name: 'Tallas', action: () => navigate('/tallas') },
    { name: 'FAQ', action: () => scrollToSection('faq') }
  ];

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">DreamTeam</h3>
                <p className="text-sm text-gray-400">Sport Jerseys</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Réplicas que juegan como originales. Tu tienda de confianza 
              para jerseys deportivos de alta calidad.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Mazatlán */}
          <div>
            <h4 className="font-semibold text-white mb-4">Mazatlán</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Zona Dorada<br />
                  Mazatlán, Sinaloa
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-gray-400 text-sm">669 123 4567</p>
              </div>
              <a
                href="https://wa.me/526691234567?text=Hola,%20estoy%20interesado%20en%20un%20jersey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Guadalajara */}
          <div>
            <h4 className="font-semibold text-white mb-4">Guadalajara</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Zona Metropolitana<br />
                  Guadalajara, Jalisco
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-gray-400 text-sm">33 1234 5678</p>
              </div>
              <a
                href="https://wa.me/523312345678?text=Hola,%20estoy%20interesado%20en%20un%20jersey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DreamTeam Sport Jerseys. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
