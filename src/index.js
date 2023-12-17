import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import ControlledCarousel from './components/slider/Slider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ControlledCarousel />
  </React.StrictMode>
);

