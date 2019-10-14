import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Archive from './pages/Archive/Archive';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details/Details';
import ArticleList from './pages/ArticleList';

class BasicRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={ArticleList} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/details/:name" component={Details} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default BasicRoute;
