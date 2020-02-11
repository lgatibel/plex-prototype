import React, { Component } from 'react';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';

import { Menu, Icon, Switch, Layout, Col, Row } from 'antd';
const { SubMenu } = Menu;
import 'antd/es/menu/style/css';
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
    state = {
        collapsed: true,
        theme: 'dark',
        textColor: 'rgba(255, 255, 255, 0.65)',
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    toogleTheme = () => {
        this.setState({
            theme: 'dark' === this.state.theme ? 'light' : 'dark',
            textColor: 'dark' === this.state.theme ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)',
        })
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    theme={this.state.theme}
                    style={{ minHeight: '100vh' }}
                >
                    {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button> */}
                    <Row
                        justify="end"
                        style={{ color: this.state.textColor }}
                    ><Col
                        span={10}
                        offset={8}
                    >Theme:<Switch size="small" checked={'dark' === this.state.theme} onChange={this.toogleTheme} />
                        </Col>
                        
                    </Row>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme={this.state.theme}
                        // inlineCollapsed={this.state.collapsed}
                        style={{ bottom: 0 }}
                    >
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Movies</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="unordered-list" />
                                    <span>Action Movies</span>
                                </span>
                            }
                        >
                            <Menu.Item key="3">PlayList One</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4">
                            <Icon type="save" />
                            <span>Watch later</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="setting" />
                            <span>Settings</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>

                </Content>
            </Layout>
        )
    }
}

export default Home;
