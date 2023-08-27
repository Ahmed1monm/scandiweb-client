import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './screens/home/App';
import AddProduct from './screens/add_product/AddProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/addproduct' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


