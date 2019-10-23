import React from 'react';
import { withRouter } from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import './index.less';

@withRouter
@inject('issuesStore')
@observer
export default class Category extends React.Component {
  componentDidMount() {
    const { issuesStore } = this.props;
    issuesStore.getCategoryList();
  }

  render() {
    const { issuesStore } = this.props;
    const { categoryList } = issuesStore;

    return (<ul className="flex flex-column category-wrap">
      {
        categoryList.map((item) => {

          return (
            item.blogs.length ?
              <li
                key={item.id}
                className="category-item"
                onClick={() => {
                  this.props.history.push(`/category/${item.id}`);
                }}>
                <Icon type="tag" style={{ color: `#${item.color}` }} />
                <span className="category-name">{item.name}({item.blogs.length})</span>
              </li> :
              null
          );
        })
      }
    </ul>);
  }
}