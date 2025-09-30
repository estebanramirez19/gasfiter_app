import React from 'react';
// Asegúrate de que las rutas de importación sean correctas para tu estructura de carpetas
import Carousel from './components/Carousel.tsx';
import HorizontalProductCards from './components/HorizontalProductCards.tsx';
import ProductsSection from './components/ProductsSection.tsx';
import Pagination from './components/Pagination.tsx';

function HomePage() {
  return (
    <>
      <Carousel />
      <HorizontalProductCards />
      
      {/* Secciones de productos con props para título, categoría y un ID único */}
      <ProductsSection title="Plantas De Exterior" category="exterior" id="plantas-exterior" />
      <ProductsSection title="Plantas De Interior" category="interior" id="plantas-interior" />
      <ProductsSection title="Maceteros" category="macetero" id="maceteros" />
      <ProductsSection title="Ofertas" category="ofertas" id="ofertas" /> {/* id="ofertas" ya estaba bien */}
      
      <Pagination />
    </>
  );
}

export default HomePage;
