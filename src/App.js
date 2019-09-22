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
      <Layout hasSider>
        <Sider
          theme="light"
          style={{
            width: 200,
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <LeftMenu title="OKFE" menuList={menuList} />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{ margin: '24px 16px 0', overflow: 'initial' }}
          >
            {this.props.children}
          </Content>
          <Footer>&copy;okfe.club</Footer>
        </Layout>
      </Layout >
    );
  }
}
export default withRouter(App);