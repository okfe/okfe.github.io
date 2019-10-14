/**
 * @desc [每一个文章card]
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import './index.less';
import { inject, observer } from 'mobx-react';

@inject('issuesStore')
@observer
class ArticleList extends React.Component {

  componentDidMount() {
    const { issuesStore } = this.props;
    issuesStore.getIssuesList();
  }

  render() {
    const { issuesStore } = this.props;
    const { issuesList } = issuesStore;

    return (
      <div className="flex flex-column article-list-wrap">
        {
          issuesList.map((issue, index) => {
            return (
              <ArticleCard
                key={issue.id}
                id={issue.number}
                title={issue.title}
                author={issue.user}
                createdDate={issue.created_at}
                outline={issue.outline}
              />
            );
          })
        }
      </div>
    );
  }
}

export default withRouter(ArticleList);
