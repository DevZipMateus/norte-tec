import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/6296c6cc-d6ec-48d3-8833-92193359aa7a.png" 
                alt="Norte Tecnologia" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Consultoria especializada em sistemas de gestão para micro e pequenas empresas. 
              Damos o norte certo para sua gestão com soluções personalizadas.
            </p>
            <div className="text-primary font-semibold text-lg">
              Norte Tecnologia. Sua gestão no rumo certo.
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:+5545998518223"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (45) 99851-8223
              </a>
              <a 
                href="tel:+5545998127609"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                (45) 99812-7609
              </a>
              <a 
                href="mailto:comercial@nortecnologia.com"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                comercial@nortecnologia.com
              </a>
              <a 
                href="https://wa.me/5545998518223"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tecnologia.norte/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578164181936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Seguir no Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
            
            <div className="text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Norte Tecnologia. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
