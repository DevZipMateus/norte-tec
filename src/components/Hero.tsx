
import React from 'react';
import { ArrowRight, CheckCircle, Target, Compass } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="inicio" className="pt-20 pb-16 md:pt-24 md:pb-20 gradient-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-8">
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Compass className="w-4 h-4 mr-2" />
              Sua consultoria em gestão empresarial
            </div>
            
            <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl lg:text-6xl'} font-bold text-foreground leading-tight mb-6 animate-fade-in-up delay-200`}>
              Dê um{' '}
              <span className="text-gradient">Norte</span>{' '}
              para sua gestão
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-300">
              Transformamos micro e pequenas empresas com{' '}
              <strong className="text-primary">sistemas de gestão personalizados</strong>.
              Saia do improviso e ganhe um rumo claro para crescer com segurança.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up delay-400">
              <div className="flex items-center text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Consultoria personalizada</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Implementação completa</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span>Suporte contínuo</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
              <a
                href="https://wa.me/5545998518223"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
                aria-label="Iniciar conversa no WhatsApp"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
                  </svg>
                  Falar com Consultor
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
                aria-label="Conhecer mais sobre a empresa"
              >
                Conhecer a Norte
              </a>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 animate-scale-in delay-500">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Gestão Eficiente</h3>
                      <p className="text-muted-foreground text-sm">Controle total do seu negócio</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Notas Fiscais</span>
                      <span className="text-sm font-medium text-primary">Em dia</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Controle de Estoque</span>
                      <span className="text-sm font-medium text-primary">Organizado</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4 animate-pulse delay-100"></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Fluxo de Caixa</span>
                      <span className="text-sm font-medium text-primary">Controlado</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-float delay-700">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float delay-500">
              <Compass className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
