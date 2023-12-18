import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.module.css"
import './style.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import ControlledCarousel from './components/slider/Slider'
import SearchAirplanes from './components/search/SearchAirplanes'
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ControlledCarousel />
    <SearchAirplanes />
    <App />
  </React.StrictMode>
);

