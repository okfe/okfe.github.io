import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Archive from './pages/Archive/Archive';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details/Details';
import ArticleCard from './pages/ArticleCard';
import issueListJson from './data/issueList.json';

class BasicRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const routerList = this.getIssueList();
  }

  getIssueList() {
    if (issueListJson.code === 0) {
      const data = issueListJson.data;
      return data;
    }
    return [];
  }

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={ArticleCard} />
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
