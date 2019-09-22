import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './index.less';

const { Item } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
    currentSelectKey: ''
  }

  componentDidMount() {
    const pathname = window.location.pathname;
    this.updateSelectKey(pathname);
  }

  // 点击菜单
  onClickMenuItem = (e) => {
    this.props.history.push(e.key);
    this.updateSelectKey(e.key);
  }

  updateSelectKey = (key) => {
    this.setState({
      currentSelectKey: key
    });
  }

  render() {
    const { title, menuList } = this.props;
    const { currentSelectKey } = this.state;

    return (
      <div className="left-menu-wrap">
        <span className="menu-title">{title || ''}</span>
        <Menu
          onClick={this.onClickMenuItem}
          selectedKeys={[currentSelectKey]}
        >
          {
            menuList.map((item) => {
              return (
                <Item key={item.href}>
                  <Icon type={item.icon || ''} />
                  {item.title}
                </Item>
              );
            })
          }
        </Menu>
      </div>
    );
  }
}
export default withRouter(App);