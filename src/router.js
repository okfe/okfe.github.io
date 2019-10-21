import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Archive from './pages/Archive/Archive';
import About from './pages/About';
import Details from './pages/Details';
import Home from './pages/Home';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/about" component={About} />
            <Route exact path="/details/:articleId" component={Details} />
          </Switch>
        </App>
      </Router>
    );
  }
}

export default BasicRoute;
