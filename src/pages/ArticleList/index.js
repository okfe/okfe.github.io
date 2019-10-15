/**
 * @desc [每一个文章card]
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Spin } from 'antd';
import ArticleCard from './ArticleCard';
import './index.less';

@inject('issuesStore', 'commonStore')
@observer
class ArticleList extends React.Component {

  componentDidMount() {
    const { issuesStore } = this.props;
    issuesStore.getIssuesList();
  }

  render() {
    const { issuesStore, commonStore } = this.props;
    const { issuesList } = issuesStore;
    const { loadingController } = commonStore;

    return (
      <Spin spinning={loadingController.issuesList}>
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
                  body={issue.body}
                />
              );
            })
          }
        </div>
      </Spin>
    );
  }
}

export default withRouter(ArticleList);