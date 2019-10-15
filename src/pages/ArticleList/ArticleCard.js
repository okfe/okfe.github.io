import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import ReactMarkdown from '_src/components/ReactMarkdown';
import './index.less';
import './ArticleCard.less';

@withRouter
@inject('issuesStore')
@observer
export default class ArticleList extends React.Component {
  toArticle = () => {
    const { history, id } = this.props;
    history.push(`/details/${id}`);
  }

  render() {
    const { title, author, createdDate, body = '' } = this.props;
    const { login, html_url } = author;

    return (
      <div className="card-wrap">
        <div className="flex flex-align-center flex-space-between card-header">
          <div className="title-wrap">
            <a
              className="article-title"
              onClick={this.toArticle}
            >
              {title}
            </a>
            <a
              className="article-author"
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {login}
            </a>
          </div>
          <span className="article-date">
            <Icon type="calendar" />
            <span>{createdDate}</span>
          </span>
        </div>
        <div className="card-body">
          <ReactMarkdown
            className={'markdown'}
            source={body}
          />
        </div>
        <div className="card-footer"></div>
      </div>
    );
  }
}
