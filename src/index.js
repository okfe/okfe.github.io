import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import MainPage from './pages/MainPage/MainPage';
import ArticleCard from './pages/ArticleCard/ArticleCard';
import Layout from './pages/layout/layout';
import './index.css';

ReactDOM.render(
  <div>
      <Layout>
          {/*<ArticleCard />*/}
          <Router />
      </Layout>
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
