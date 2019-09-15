import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Archive from './pages/Archive/Archive';
import AboutUs from './pages/AboutUs/AboutUs';
import Details from './pages/Details/Details';
import ArticleCard from './pages/ArticleCard/ArticleCard';
import issueListJson from './data/issueList.json';

let routerList = [];

class BasicRoute extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        routerList = this.getIssueList();
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
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={ArticleCard}/>
                    <Route exact path="/main" component={ArticleCard}/>
                    <Route exact path="/archive" component={Archive}/>
                    <Route exact path="/about" component={AboutUs}/>
                    <Route exact path="/details/:name" component={Details}/>
                </Switch>
        </HashRouter>
    )
    }
}


export default BasicRoute;
