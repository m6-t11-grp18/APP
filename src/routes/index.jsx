import { Route, Routes } from 'react-router-dom';
import React from 'react';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <LandingPage />} />
      <Route
        path="/product/:id"
        element={ <ProductItem />}
      />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/home" element={ <HomePage />} />
    </Routes>
  );
}

export default Router;
