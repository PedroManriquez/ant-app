import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const { Sider } = Layout;

class AppSideNav extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render () {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Router>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            <Menu.Item key="0">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/about">
                <Icon type="desktop" />
                <span>About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Router>
      </Sider>
    );
  }
}

export default AppSideNav;
