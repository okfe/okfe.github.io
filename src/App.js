import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import LeftMenu from '_src/components/LeftMenu';
import menuList from '_src/constants/menu';

const { Sider, Content, Footer } = Layout;

class App extends React.Component {
  // 点击菜单
  onClickMenuItem = (e) => {
    this.props.history.push(e.key);
    // this.updateSelectKey(e.key);
  }

  render() {
    return (
      <Layout hasSider collapsible>
        <Sider theme="light">
          <LeftMenu title="OKFE" menuList={menuList} />
        </Sider>
        <Layout>
          <Content>
            {this.props.children}
          </Content>
          <Footer>&copy;okfe.club</Footer>
        </Layout>
      </Layout >
    );
  }
}
export default withRouter(App);