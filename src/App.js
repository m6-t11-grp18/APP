import React from 'react';
import './style/styleGuide.css';
import './style/resetCSS.css';
import { StyleProvider } from './provider/styleProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <StyleProvider>
      </StyleProvider>
    </BrowserRouter>
  );
}

export default App;
