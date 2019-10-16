import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import '_src/less/style.less';
import '_src/less/markdown.less';
import '_src/less/highlight.less';
import store from '_src/store';

ReactDOM.render(
  <Provider {...store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
