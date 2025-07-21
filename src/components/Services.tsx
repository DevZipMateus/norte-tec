
import React from 'react';
import { 
  FileText, 
  BarChart3, 
  Package, 
  CreditCard, 
  Settings, 
  Users, 
  ArrowRight,
  CheckCircle,
  Target
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Emissão de Notas Fiscais',
      description: 'Implementação e configuração de sistema para emissão automática de notas fiscais, garantindo conformidade fiscal.',
      features: ['Configuração automática', 'Integração com marketplaces', 'Backup na nuvem'],
      delay: '0ms'
    },
    {
      icon: Package,
      title: 'Controle de Estoque',
      description: 'Organização completa do seu estoque com controle de entrada, saída e alertas de reposição.',
      features: ['Controle em tempo real', 'Alertas de estoque baixo', 'Relatórios detalhados'],
      delay: '100ms'
    },
    {
      icon: CreditCard,
      title: 'Fluxo de Caixa',
      description: 'Gestão financeira completa com controle de receitas, despesas e projeções futuras.',
      features: ['Relatórios financeiros', 'Projeções de caixa', 'Controle de pagamentos'],
      delay: '200ms'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Gerenciais',
      description: 'Dashboards e relatórios personalizados para tomada de decisões estratégicas.',
      features: ['Dashboards interativos', 'Análise de vendas', 'Indicadores de performance'],
      delay: '300ms'
    },
    {
      icon: Settings,
      title: 'Integrações',
      description: 'Conectamos seu sistema com marketplaces, bancos e ferramentas fiscais.',
      features: ['Marketplaces', 'Bancos digitais', 'Sistemas fiscais'],
      delay: '400ms'
    },
    {
      icon: Users,
      title: 'Suporte e Treinamento',
      description: 'Acompanhamento contínuo e treinamento da equipe para máximo aproveitamento.',
      features: ['Suporte especializado', 'Treinamento da equipe', 'Consultoria contínua'],
      delay: '500ms'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Analisamos sua rotina e identificamos pontos de melhoria'
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Criamos um plano personalizado para sua empresa'
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Configuramos e integramos as ferramentas necessárias'
    },
    {
      number: '04',
      title: 'Acompanhamento',
      description: 'Seguimos junto até sua empresa estar no rumo certo'
    }
  ];

  return (
    <section id="servicos" className="section gradient-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            Soluções completas para sua gestão
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
            Oferecemos consultoria especializada e implementação de sistemas de gestão 
            personalizados para micro e pequenas empresas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="feature-card animate-fade-in-up group"
              style={{ animationDelay: service.delay }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-in-up">
              Como trabalhamos
            </h3>
            <p className="text-muted-foreground animate-fade-in-up delay-200">
              Nosso processo estruturado garante resultados efetivos e duradouros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-fade-in-up delay-600">
              Pronto para dar o norte certo à sua gestão?
            </h3>
            <p className="text-muted-foreground mb-8 animate-fade-in-up delay-700">
              Converse com nossos consultores e descubra como podemos transformar a gestão da sua empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-800">
              <a
                href="https://wa.me/5545998518223"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
                aria-label="Solicitar consultoria no WhatsApp"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
                  </svg>
                  Solicitar Consultoria
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="mailto:comercial@nortecnologia.com"
                className="btn-secondary"
                aria-label="Enviar e-mail para comercial"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
