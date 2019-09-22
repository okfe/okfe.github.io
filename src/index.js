import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import '_src/less/style.less';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

serviceWorker.unregister();
