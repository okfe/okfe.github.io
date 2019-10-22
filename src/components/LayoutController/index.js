import React, { useState } from 'react';
import { Layout, Icon } from 'antd';
import LeftMenu from '_src/components/LeftMenu';
import TopMenu from '_src/components/TopMenu';
import './index.less';

const { Sider, Header, Content, Footer } = Layout;

export default function ({ type, children }) {
  const [collapsed, setCollapsed] = useState(false);

  if (type === 'vertical') {
    return (
      <Layout className="app-vertical">
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed);
          }}
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
            {children}
          </Content>
          <Footer>
            <div className="flex flex-justify-center copyright">
              &copy;okfe.club
            </div>
          </Footer>
        </Layout>
      </Layout>
    );
  }

  return (
    <Layout className="app-horizontal">
      <Header>
        <div className="logo">OKFE</div>
        <TopMenu />
        {/* <div className="">
          <Icon type="github" />
        </div> */}
      </Header>
      <Content className="main-content">
        {children}
      </Content>
      <Footer>
        &copy;&nbsp;OK前端团队
        &nbsp;<Icon type="github" onClick={() => { }} />
      </Footer>
    </Layout>
  );
}