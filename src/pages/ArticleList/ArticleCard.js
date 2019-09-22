import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Icon } from 'antd';
import './index.less';
import './ArticleCard.less';

class ArticleList extends React.Component {
  render() {
    const { title, author, createdDate, outline, id } = this.props;
    return (
      <Card
        title={title}
        className="article-card"
        extra={<div className="flex flex-align-center more-icon">
          <a className="article-detail" href={`/details/${id}`}>
            继续阅读
            <Icon type="double-right" />
          </a>
        </div>}
        // style={{ width: 300 }}
      >
        <div className="author">
          {author || '暂无作者信息'} {createdDate}
        </div>
        <p className="article-outline"> {outline || '暂无文章缩略信息'} </p>
      </Card>
    );
  }
}

export default withRouter(ArticleList);
