import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </Fragment> 
);