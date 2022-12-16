import React from 'react';
import './style/styleGuide.css';
import './style/resetCSS.css';
import Router from './routes/index.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
