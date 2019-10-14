import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import LeftMenu from '_src/components/LeftMenu';

const { Sider, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    this.setState({
      collapsed: collapsed
    });
  }

  render() {
    return (
      <Layout className="app" style={{ height: '100vh' }}>
        <Sider
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="flex flex-justify-center logo">OKFE</div>
          <LeftMenu />
        </Sider>

        <Layout>
          <Content className="main-content">
            {this.props.children}
          </Content>
          <Footer>
            <div className="flex flex-justify-center copyright">
              &copy;okfe.club
            </div>
          </Footer>
        </Layout>

      </Layout >
    );
  }
}
export default withRouter(App);