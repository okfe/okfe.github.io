import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
// import moment from 'moment';
import './index.less';
import './ArticleCard.less';

@withRouter
export default class ArticleList extends React.Component {
  toArticle = () => {
    const { history, id } = this.props;
    history.push(`/details/${id}`);
  }

  render() {
    const { title, author, createdDate, outline } = this.props;
    const { login, html_url } = author;

    return (
      <Card
        className="article-card"
        title={
          <div className="article-head">
            <a
              className="article-title-item article-title"
              onClick={this.toArticle}
            >
              {title}
            </a>
            <a
              className="article-title-item article-author"
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {login}
            </a>
            <span className="article-title-item">
              {createdDate}
            </span>
          </div>
        }
      >
        <p className="article-outline">
          {outline || '暂无文章缩略信息'}
        </p>
      </Card>
    );
  }
}
