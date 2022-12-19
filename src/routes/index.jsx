import { Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/landing';
import Seller from '../pages/seller';
/* 
seller => inserir :id depois
*/
function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <LandingPage />} />
      <Route path="/seller" element={ <Seller />} />
      {/* <Route
        path="/product/:id"
        element={ <ProductItem />}
      />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/home" element={ <HomePage />} /> */}
    </Routes>
  );
}

export default Router;
