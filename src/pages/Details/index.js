/**
 * @desc [文章详情页]
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Spin } from 'antd';
import ReactMarkdown from '_src/components/ReactMarkdown';
import './index.less';

@inject('issuesStore', 'commonStore')
@observer
class Details extends React.Component {
  componentDidMount() {
    const { issuesStore } = this.props;
    const { articleId } = this.props.match.params;

    issuesStore.getIssueDetail(articleId);
  }

  render() {
    const { issuesStore, commonStore } = this.props;
    const { issueDetail = '' } = issuesStore;

    return (
      <Spin spinning={commonStore.loadingController.issueDetail}>
        <div className="detail-wrap">
          <ReactMarkdown
            className={'markdown'}
            source={`${issueDetail}`}
          />
        </div>
      </Spin>
    );
  }
}

export default Details;
