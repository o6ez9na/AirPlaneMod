import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ClientView from './components/ClientView/ClientView';
import Admin from './components/Admin/Admin';
import Card from './components/Card/Card';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ClientView />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

