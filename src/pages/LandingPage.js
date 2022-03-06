import React from 'react';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsletterSection from '../components/NewsletterSection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TheamSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewsletterSection />
    </>
  );
}

export default LandingPage;
