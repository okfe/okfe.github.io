import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from "react-router-dom";
import './Detail.less';

@withRouter
@inject('issuesStore')
@observer
export default class CategoryDetail extends React.Component {
  componentDidMount() {
    const { issuesStore } = this.props;
    const id = `${window.location.pathname.split('/').slice(-1)}`;
    issuesStore.getCateroryIssueList(id);
  }

  render() {
    const { issuesStore } = this.props;
    const { cateroryIssueList } = issuesStore;
    console.log(cateroryIssueList);

    return (
      <ul className="article-in-category">
        {
          cateroryIssueList.length ?
            cateroryIssueList.map(item => {
              return <li key={item.id}>{item.title}</li>;
            }) :
            <span className="no-article">该分类暂无文章</span>
        }
      </ul>
    );
  }
}