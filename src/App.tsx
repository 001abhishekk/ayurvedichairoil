import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import WhyOurOil from './components/WhyOurOil';
import ProductDisplay from './components/ProductDisplay';
import ContactSection from './components/ContactSection';
import StickyContact from './components/StickyContact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Header />
      <HeroSection />
      <ProblemSection />
      <WhyOurOil />
      <ProductDisplay />
      <ContactSection />
      <StickyContact />
    </div>
  );
}

export default App;