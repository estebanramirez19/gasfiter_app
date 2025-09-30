// src/App.tsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// ... tus otras importaciones ...
import Layout from './routes/layout.tsx';
import HomePage from './routes/homePage.tsx';//homePage
import FormPage from './components/FormPage.tsx'; 
import BasePlantPage from './components/BasePlantPage.tsx';
import AboutUsPage from './components/AboutUsPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import PrivacyPolicyPage from './components/PrivacyPolicyPage.tsx';
import LoginPage from './components/LoginPage.tsx'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='register' element={<FormPage />} />
            <Route path='login' element={<LoginPage />} /> 
            <Route path='ficusElastica' element={<BasePlantPage />} />
            <Route path='aboutus' element={<AboutUsPage />} />
            <Route path='contactus' element={<ContactPage />} />
            <Route path='privacity' element={<PrivacyPolicyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;