/**
 * @desc [归档页面]
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
// import moment from 'moment';
import './Archive.less';

@inject('issuesStore')
@observer
class Archive extends React.Component {
  componentDidMount() {
    const { issuesStore } = this.props;
    issuesStore.getIssueList();
  }

  getIssueList() {
    const { issuesStore } = this.props;
    const { issueList } = issuesStore;

    return issueList.map((res) => {
      // res.time = moment(res.updated_at[0]).format('YYYY年M月');
      // res.created_at = moment(res.updated_at[0]).format('YYYY年M月D日 HH:MM');
      // const classify = res.updated_at[0].match('^[0-9]\\S{1,6}');
      // res.belong = new Date(classify).getTime();
      // res.updated_at = res.updated_at[0].match('^[0-9]\\S{1,9}');

      return res;
    });
  }


  render() {
    const { issuesStore } = this.props;
    const { issueList } = issuesStore;
    const lastBelong = '';

    return (
      <header className="App-header">
        {
          issueList.map((res, key) => {
            return (
              <div key={key}>
                {
                  res.belong !== lastBelong ? <div className='issue-classify'>${res.time}</div> : ''
                }
                <div className="issue-items">
                  <a className="issue-title" href={`/details/${res.number}`}>·&nbsp; {res.title}</a>
                  <div className="issue-time">{res.updated_at}</div>
                </div>
              </div>
            );
          })
        }
      </header>
    );
  }
}

export default Archive;
