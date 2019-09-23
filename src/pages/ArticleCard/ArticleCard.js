/**
 * @desc [每一个文章card]
 */
import React from 'react';
import './ArticleCard.less';
import api from '../api/index';
import { Card } from 'antd';

const issueList = api.getIssueList();
class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [],
    };

  }

  componentDidMount() {
    const breadcrumbList = [
      {
        index: 1,
        text: '首页',
      },
      {
        index: 2,
        text: '文章列表',
      }
    ];
    // this.props.setB(breadcrumbList);
  }

  getIssue(id) {
    if (id) {
      let issue = '';
      const contentList = [];
      fetch(`./data/${id}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }

      }).then(response => response.json())// 解析为Promise
          .then(data => {
            issue = data.data;
            this.setState({
              item: issue
            });
          });
    }
  }

  render() {
    console.log(this.props);
    return (
        <React.Fragment>
          {
            issueList.map(function(issue, index) {
              return (
                  <Card
                      key={index}
                      className="issue-card"
                      size="small"
                      title={issue.title}
                      // extra={<a href="#">详情</a>}
                      style={{ width: 300 }}
                      actions={[
                        <div className='issue-time'>发布于：{issue.created_at}</div>
                      ]}
                      onClick={() => {
                        window.location.href = `/#/details/${issue.id}`
                      }}
                  >
                    <div className="card-desc">
                      {issue.outline || '文章内容加载失败'}
                    </div>
                  </Card>

              );
            })
          }
        </React.Fragment>
    );
  }
}

export default ArticleCard;
