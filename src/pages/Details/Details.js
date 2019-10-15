/**
 * @desc [文章详情页]
 */
import React from 'react';
import './Details.less';
import { inject, observer } from 'mobx-react';
import ReactMarkdown from '_src/components/ReactMarkdown';

@inject('issuesStore')
@observer
class Details extends React.Component {
  state = {
    item: ''
  }

  componentDidMount() {
    const { issuesStore } = this.props;
    const { articleId } = this.props.match.params;

    issuesStore.getIssueDetail(articleId);
  }

  render() {
    const { issuesStore } = this.props;
    const { issueDetail } = issuesStore;
    const { body = '' } = issueDetail;

    return (
      <div style={{ display: this.props.isShow }}>
        <ReactMarkdown
          className={'markdown'}
          source={body}
        />
      </div>
    );
  }
}

export default Details;
