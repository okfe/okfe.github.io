/**
 * @desc [文章详情页]
 */
import React from 'react';
import './Details.less';
import { inject, observer } from 'mobx-react';
import MD from 'markdown-it';

const md = new MD();
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

    return (
      <div style={{ display: this.props.isShow }}>
        {/* <div dangerouslySetInnerHTML={{ __html: this.state.item }}></div> */}
        <div dangerouslySetInnerHTML={{ __html: md.render(issueDetail.body || '') }}></div>
      </div>
    );
  }
}

export default Details;
