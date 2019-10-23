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
    issuesStore.getIssueList();
  }

  render() {
    const { issuesStore, commonStore } = this.props;
    const { issueList } = issuesStore;
    const { loadingController } = commonStore;

    return (
      <Spin spinning={loadingController.issueList}>
        <div className="flex flex-column article-list-wrap">
          {
            issueList.map((issue, index) => {
              return (
                <ArticleCard
                  key={issue.id}
                  id={issue.id}
                  title={issue.title}
                  author={issue.user}
                  createdDate={issue.created_at}
                  outline={issue.outline}
                  body={issue.body}
                  labels={issue.labels}
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
