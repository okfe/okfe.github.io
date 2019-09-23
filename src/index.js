import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Layout from './pages/layout/layout';
import './index.css';

ReactDOM.render(
  <div>
      <Layout />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
