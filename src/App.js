import React from 'react';
import './style/styleGuide.css';
import './style/resetCSS.css';
import { StyleProvider } from './provider/styleProvider';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <StyleProvider>
        <Router />
      </StyleProvider>
    </BrowserRouter>
  );
}

export default App;
