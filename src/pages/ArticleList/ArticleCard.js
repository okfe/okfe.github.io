import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import ReactMarkdown from '_src/components/ReactMarkdown';
import moment from 'moment';
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
    const { title, author, createdDate, body = '', labels } = this.props;
    const { login, html_url } = author;
    const date = new Date(Date.parse(createdDate));

    return (
      <div className="card-wrap">
        <div className="card-header">
          <div className="title-wrap">
            <a
              className="article-title"
              onClick={this.toArticle}
            >
              {title}
            </a>
          </div>
          <a
            className="article-author"
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {login}
          </a>
          <span className="article-date">
            <Icon type="calendar" />
            {/* <span>{createdDate}</span> */}
            <span>{moment(date).format('YYYY-MM-DD HH:MM')}</span>
          </span>
        </div>
        <div className="card-body">
          <ReactMarkdown
            className={'markdown'}
            source={body}
          />
        </div>
        <div className="card-footer">
          <div className="flex tags-wrap">
            {labels.length ?
              labels.map(label => {
                return (
                  <div className="tag-wrap" key={label.id}>
                    <Icon type="tag" />
                    <span className="tag-name">{label.name}</span>
                  </div>
                );
              }) :
              (
                <div className="tag-wrap">
                  <Icon type="tag" />
                  <span className="tag-name">无</span>
                </div>

              )
            }
          </div>
        </div>
      </div>
    );
  }
}
