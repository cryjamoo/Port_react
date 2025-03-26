import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ ReactDOM.createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ใช้ ReactDOM.createRoot แทน ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// หากต้องการวัดประสิทธิภาพของแอป
reportWebVitals();
