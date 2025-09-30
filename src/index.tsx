import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; 

import 'bootstrap/dist/css/bootstrap.min.css'; 

// Luego tu CSS personalizado
import './css/style_index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);