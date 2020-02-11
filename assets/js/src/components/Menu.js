import React, { Component } from 'react';
import { Menu, Icon, Switch, Col, Row } from 'antd';

const { SubMenu } = Menu;

import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            collapsed: true,
            theme: 'dark',
            textColor: 'rgba(255, 255, 255, 0.65)',
        };
    }

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
        const loading = this.state.loading;
        return (
            <div>
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
                    mode="inline"
                    theme={this.state.theme}
                    // inlineCollapsed={this.state.collapsed}
                    style={{ bottom: 0 }}
                >
                    <Menu.Item key="1">
                        <Link to="/">
                            <Icon type="home" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/movies">
                            <Icon type="desktop" />
                            <span>Movies</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>

                                <Link to="/Playlists">
                                    <Icon type="unordered-list" />
                                    <span>Playlists</span>
                                </Link>
                            </span>
                        }
                    >
                        <Menu.Item key="3">PlayList One</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">
                        <Link to="/watch-later">
                            <Icon type="save" />
                            <span>Watch later</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/settings">
                            <Icon type="setting" />
                            <span>Settings</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default Home;
