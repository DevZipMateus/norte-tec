
import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    {
      number: '100+',
      label: 'Empresas atendidas',
      description: 'Micro e pequenas empresas transformadas',
      icon: Users
    },
    {
      number: '5+',
      label: 'Anos de experiência',
      description: 'Especialização em gestão empresarial',
      icon: Award
    },
    {
      number: '95%',
      label: 'Taxa de sucesso',
      description: 'Clientes satisfeitos com os resultados',
      icon: TrendingUp
    }
  ];

  const values = [
    {
      title: 'Personalização',
      description: 'Cada empresa é única, e nossa consultoria é moldada especificamente para suas necessidades.',
      icon: Target
    },
    {
      title: 'Acompanhamento',
      description: 'Não abandonamos você após a implementação. Seguimos junto até sua empresa estar no rumo certo.',
      icon: CheckCircle
    },
    {
      title: 'Resultados',
      description: 'Nosso foco é entregar resultados práticos que transformem sua gestão de verdade.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Sobre a Norte Tecnologia
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            Sua bússola para o crescimento empresarial
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
            Nascemos da observação de uma realidade comum: todo pequeno negócio começa com coragem... 
            e um monte de planilhas soltas. É aí que entramos como sua bússola digital.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossa história e propósito
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Foi vendo essa cena se repetir com empreendedores de todo o Brasil que criamos a 
                <strong className="text-primary"> Norte Tecnologia</strong>: uma consultoria independente 
                que age como bússola para micro e pequenas empresas em início de jornada.
              </p>
              
              <p>
                Nós escutamos sua rotina, entendemos onde dói e{' '}
                <strong className="text-primary">entregamos o sistema de gestão online</strong> que 
                melhor combina com o seu modelo de negócio, sem empurrar ferramentas genéricas.
              </p>
              
              <p>
                Depois seguimos junto na implantação, passo a passo: emissão de notas, controle de estoque, 
                fluxo de caixa e integrações essenciais (marketplaces, dados fiscais, etc.).
              </p>
              
              <p className="text-primary font-semibold">
                Você sai do improviso e ganha um rumo claro para crescer com segurança.
              </p>
            </div>
            
            <div className="mt-8">
              <a
                href="https://wa.me/5545998518223"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg hover:shadow-xl"
                aria-label="Falar com consultor no WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69" />
                </svg>
                Falar com Consultor
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Values */}
          <div className="space-y-6 animate-fade-in-up delay-400">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossos valores
            </h3>
            
            {values.map((value, index) => (
              <div key={index} className="feature-card group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-in-up">
              Resultados que falam por si
            </h3>
            <p className="text-muted-foreground animate-fade-in-up delay-200">
              Números que demonstram nosso compromisso com o sucesso dos nossos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mt-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 animate-fade-in-up delay-600">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa missão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Guiar micro e pequenas empresas através da transformação digital da gestão, 
              oferecendo soluções personalizadas que eliminem o caos operacional e 
              estabeleçam bases sólidas para o crescimento sustentável.
            </p>
            <div className="text-2xl font-bold text-gradient">
              Norte Tecnologia. Sua gestão no rumo certo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
