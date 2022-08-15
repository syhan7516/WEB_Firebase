import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// firebase file import 후 확인
import firebase from './firebase';
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
