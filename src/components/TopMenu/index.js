import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import MenuMap from '_src/constants/menu';
import './index.less';

const { Item } = Menu;

class LeftMenu extends React.Component {
  state = {
    collapsed: false,
    currentPath: '/'
  }

  componentDidMount() {
    const {pathname} = window.location;

    this.updateMenuSelectKeys(pathname);
  }

  // 点击菜单
  onClickMenuItem = (e) => {
    this.props.history.push(e.key);
    this.updateMenuSelectKeys(e.key);
  }

  updateMenuSelectKeys = (path) => {
    this.setState({
      currentPath: path
    });
  }

  render() {
    const { currentPath } = this.state;

    return (
      <div className="top-menu-wrap">
        <Menu
          mode="horizontal"
          selectedKeys={[currentPath]}
          onClick={this.onClickMenuItem}
        >
          {
            MenuMap.map((item) => {
              return (
                <Item key={item.href}>
                  <span>{item.title}</span>
                </Item>
              );
            })
          }
        </Menu>
      </div>
    );
  }
}
export default withRouter(LeftMenu);