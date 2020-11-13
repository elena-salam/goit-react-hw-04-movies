import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/AppHW'

import './index';
// import Movies from './views/MoviesPage';

ReactDOM.render(
  <BrowserRouter>
    
    <App/>
  </BrowserRouter>,
  document.querySelector('#root'),
);

