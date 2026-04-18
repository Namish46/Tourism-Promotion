import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlacesSection from './components/PlacesSection';
import FoodsSection from './components/FoodsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PlacesSection />
      <FoodsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
