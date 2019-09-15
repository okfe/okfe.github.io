import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/MainPage/MainPage';
import * as serviceWorker from './serviceWorker';
import Router from './router';

ReactDOM.render(
  <div>
    <MainPage />
    <Router />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
