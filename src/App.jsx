import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import UIComponent from './components/'
import './assets/sass/main.scss';
import RouterView from './router/Router'

const { Content } = Layout;
const { AppHeader, AppSideNav, AppFooter } = UIComponent;

class SiderDemo extends React.Component {
  render() {
    return (
      <Router>
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
                <RouterView />
              </div>
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default SiderDemo;

// ReactDOM.render(<SiderDemo />, mountNode);
