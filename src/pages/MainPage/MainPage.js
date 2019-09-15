/**
 * @desc [文章列表展示主页面]
 */
import React from 'react';
import './MainPage.less';

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <section className="side-bar">
          <div className="logo">
            <span className="logo-name">OKFE.Club</span>
          </div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <div className="item-wrap">
                <i className="item-pic fa fa-home fa-lg"></i>
                <a className="item-text" href="/#/main">首页</a>
              </div>
            </li>
            <li className="nav-list-item">
              <div className="item-wrap">
                <i className="item-pic fa fa-folder-open fa-lg"></i>
                <a className="item-text" href="/#/archive">归档</a>
              </div>
            </li>

            <li className="nav-list-item">
              <div className="item-wrap">
                <i className="item-pic fa fa-user fa-lg"></i>
                <a className="item-text" href="/#/about">关于</a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default MainPage;
