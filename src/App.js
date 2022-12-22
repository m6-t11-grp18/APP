import React from 'react';
import './style/styleGuide.css';
import './style/resetCSS.css';
import { StyleProvider } from './provider/styleProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from './style/theme';
import Router from './routes';
import { MotorShopProvider } from './provider/motorShopProvider';

function App() {
  return (
    <BrowserRouter>
      <MotorShopProvider>
        <StyleProvider>
          <ThemeProvider theme={themes['light']}>
            <Router />
          </ThemeProvider>
        </StyleProvider>
      </MotorShopProvider>
    </BrowserRouter>
  );
}

export default App;
