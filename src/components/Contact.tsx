
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem estruturada para WhatsApp
    const message = `🌟 *Nova Solicitação de Consultoria - Norte Tecnologia*

👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
🏢 *Empresa:* ${formData.company || 'Não informado'}
📱 *Telefone:* ${formData.phone}

💬 *Mensagem:*
${formData.message}

---
_Mensagem enviada através do site www.nortecnologia.com_`;

    const whatsappUrl = `https://wa.me/5545998518223?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário após envio
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(45) 99851-8223',
      link: 'tel:+5545998518223',
      description: 'Ligue para falar com nossa equipe'
    },
    {
      icon: Phone,
      title: 'Telefone Alternativo',
      info: '(45) 99812-7609',
      link: 'tel:+5545998127609',
      description: 'Número alternativo para contato'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'comercial@nortecnologia.com',
      link: 'mailto:comercial@nortecnologia.com',
      description: 'Envie sua mensagem por e-mail'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(45) 99851-8223',
      link: 'https://wa.me/5545998518223',
      description: 'Fale conosco pelo WhatsApp'
    }
  ];

  const businessHours = [
    { day: 'Segunda à Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: 'Fechado' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  return (
    <section id="contato" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            Vamos conversar sobre sua empresa
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
            Estamos prontos para ajudar você a dar o norte certo para sua gestão. 
            Entre em contato e vamos juntos transformar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Solicite uma consultoria gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="(45) 99999-9999"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                    placeholder="Conte-nos sobre sua empresa e como podemos ajudar..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary group"
                  aria-label="Enviar mensagem"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Enviar via WhatsApp
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-400">
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Formas de contato
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{contact.title}</div>
                          <div className="text-primary font-medium">{contact.info}</div>
                          <div className="text-sm text-muted-foreground">{contact.description}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Horário de Funcionamento
                </h3>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Redes Sociais
                </h3>
                
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/tecnologia.norte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform"
                    aria-label="Seguir no Instagram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/profile.php?id=61578164181936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform"
                    aria-label="Seguir no Facebook"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
