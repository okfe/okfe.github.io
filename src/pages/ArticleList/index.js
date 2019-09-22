/**
 * @desc [每一个文章card]
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import api from '../api/index';
import './index.less';

const issueList = api.getIssueList();
class ArticleList extends React.Component {
  render() {
    return (
      <div className="flex flex-column article-list-wrap">
        {
          issueList.map((issue, index) => {
            return (
              <ArticleCard
                key={issue.id}
                id={issue.id}
                title={issue.title}
                author={issue.author}
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
