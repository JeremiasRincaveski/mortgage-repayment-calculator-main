import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import GlobalStyled from './GlobalStyled';
import CalculatorProvider from './context/CalculatorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);
