import React from 'react';

import Header from './components/Header.tsx'; 
import Footer from './components/Footer.tsx'; 
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        {/* Outlet renderiza el componente de la ruta anidada */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
