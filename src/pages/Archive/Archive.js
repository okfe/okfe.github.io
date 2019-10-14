/**
 * @desc [归档页面]
 */
import React from 'react';
import './Archive.less';
import issueListJson from '../../data/issueList.json';
import moment from 'moment';

const ERR_OK = 0;

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArticleList: []
    };
  }

  componentWillMount() {
    const result = this.getIssueList();
    this.setState({
      ArticleList: result
    });
  }

  getIssueList() {
    if (issueListJson.code === ERR_OK) {
      const data = issueListJson.data;
      data.map((res) => {
        res.time = moment(res.updated_at[0]).format('YYYY年M月');
        res.created_at = moment(res.updated_at[0]).format('YYYY年M月D日 HH:MM');
        const classify = res.updated_at[0].match('^[0-9]\\S{1,6}');
        res.belong = new Date(classify).getTime();
        res.updated_at = res.updated_at[0].match('^[0-9]\\S{1,9}');
      });
      return data;
    }
    return [];
  }

  render() {
    const ArticleList = this.state.ArticleList;
    const lastBelong = '';
    return (
      <header className="App-header">
        {
          ArticleList.map((res, key) => {
            return (
              <div key={key}>
                {
                  res.belong !== lastBelong ? <div className='issue-classify'>${res.time}</div> : ''
                }
                <div className="issue-items">
                  <a className="issue-title" href= {`/details/${res.id}`}>·&nbsp; {res.title}</a>
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
