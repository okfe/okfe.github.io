import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import LeftMenu from '_src/components/LeftMenu';

const { Sider, Content, Footer } = Layout;

@withRouter
export default class App extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = (collapsed) => {
    this.setState({
      collapsed: collapsed
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <Layout className="app">
        <Sider
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="flex flex-justify-center logo">OKFE</div>
          <LeftMenu />
        </Sider>

        <Layout style={{ minHeight: '100vh', marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
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