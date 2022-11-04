import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const API = process.env.REACT_APP_API_KEY

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

