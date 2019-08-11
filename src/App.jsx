import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import UIComponent from './components/'
import logo from './assets/img/logo.svg';
import './assets/sass/main.scss';

const { Content } = Layout;
const { AppHeader, AppSideNav, AppFooter } = UIComponent;

class SiderDemo extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <AppSideNav />
        <Layout>
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="app-content">
              <img src={logo} alt="react logo" className="react-logo"/>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

// ReactDOM.render(<SiderDemo />, mountNode);
