import React from 'react';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services/ServicesSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </>
  );
}

export default LandingPage;
