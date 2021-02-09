import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BarContextProvider } from './Context/BarConext';
import { CartContextProvider } from './Context/CartContext';
import { AuthContextProvider } from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <BarContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </CartContextProvider>
    </BarContextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
