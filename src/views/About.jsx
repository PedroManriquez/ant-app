import React from 'react';
import logo from '../assets/img/logo.svg';
import { Divider } from 'antd';

class About extends React.Component {
  render() {
    return (
      <div>
        <h3>About page!</h3>
        <Divider />
        <img src={logo} alt="react logo" className="react-logo"/>
      </div>
    );
  }
}

export default About;
