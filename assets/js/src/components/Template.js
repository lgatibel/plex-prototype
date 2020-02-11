import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/es/menu/style/css';
import Menu from './Menu';
const { Header, Content, Footer, Sider } = Layout;

class Template extends Component {
    
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    // theme={this.state.theme}
                    style={{ minHeight: '100vh' }}
                >
                    {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button> */}
                    
                    <Menu/>
                </Sider>
                <Content>
                {this.props.children}
                </Content>
            </Layout>
        )
    }
}

export default Template;
