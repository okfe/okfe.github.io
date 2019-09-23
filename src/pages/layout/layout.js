import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Router from '../../router';
import './layout.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
            breadcrumbList: [{
                index: 1,
                text: '首页',
            }],
        };
    }

    componentDidMount() {
        this.switchBreadcrumb();
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    goHome = () => {
        document.location.href = 'http://www.okfe.club'
    };

    switchBreadcrumb = () => {
        const breadcrumbList = [
            {
                index: 1,
                text: '首页',
                func: this.breadCrumbFunc,
            },
            {
                index: 2,
                text: '文章详情',
                func: ''
            }
        ];
        this.setState({
            breadcrumbList
        })
    };

    setBreadCrumb = (breadcrumbList = this.state.breadcrumbList) => {
        this.setState({
            breadcrumbList
        });
    };

    breadCrumbFunc = () => {
        console.log('hello world');
        return false;
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" onClick={this.goHome}>
                        <img src="https://img.bafang.com/cdn/assets/imgs/MjAxOTk/ADB183A37757C96B03CA4FD3F0A7C7F6.png" alt="" />
                        <span className="logo-text">
                            OKFE.CLUB
                        </span>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="folder-open" />
                            <span>归档</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="bulb" />
                            <span>关于</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff'}} className="layout-header">
                        好好学习，天天向上
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {
                                this.state.breadcrumbList.map((item) => {
                                    return (
                                        <Breadcrumb.Item
                                            key={item.index}
                                            onClick={item.func ? () => {item.func()} : null}
                                        >
                                            {item.text}
                                        </Breadcrumb.Item>
                                    )
                                })
                            }
                            {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                        </Breadcrumb>
                        <div className="main-content">
                            {/*{this.props.children}*/}
                            <Router setBreadCrumb />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        高效快乐的工作
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
