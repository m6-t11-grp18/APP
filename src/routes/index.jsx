import { Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/landing';
import Seller from '../pages/seller';
import HomePage from '../pages/home';
import ProductMobile from '../pages/product';
import Login from '../pages/login';
import Register from '../pages/register';

/* 
seller => inserir :id depois
*/
function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/seller" element={<Seller />} />
      {/* <Route
        path="/product/:id"
        element={ <ProductItem />}
      />*/}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/product/:id"
        element={<ProductMobile />}
      />
    </Routes>
  );
}

export default Router;
