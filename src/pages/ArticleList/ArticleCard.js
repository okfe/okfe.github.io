import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { inject, observer } from 'mobx-react';
import ReactMarkdown from 'react-markdown';
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
          <ReactMarkdown className={'markdown'}
            //必须是false不然img标签渲染不出来
            escapeHtml={false}
            source={body}
          // renderers={{
          //   code: CodeBlock
          // }}
          />
        </p>
      </Card>
    );
  }
}
