import React from 'react';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

class AppHeader extends React.Component {
  render () {
    return (
      <Header style={{ background: '#fff', padding: 0, height: '40px' }}>
        <Menu>
          <Menu.Item key="1"> Ant Design</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default AppHeader;
