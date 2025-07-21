
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import EgestorERP from '../components/EgestorERP';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <EgestorERP />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
