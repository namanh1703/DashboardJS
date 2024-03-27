import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Login',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Profile',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Upload',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        height: 'calc(100vh - 88px)',
                        overflow: 'auto',
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;