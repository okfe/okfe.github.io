import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutController from '_src/components/LayoutController';

const LayoutMode = {
  vertical: 'vertical', // 水平方向
  horizontal: 'horizontal'  // 垂直方向
};

@withRouter
export default class App extends React.Component {
  render() {
    return (
      <Layout className="app">
        <LayoutController type={LayoutMode.horizontal}>
          {this.props.children}
        </LayoutController>
      </Layout >
    );
  }
}