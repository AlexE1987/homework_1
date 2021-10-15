import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    return <h1 className="header">{this.props.headerTitle}</h1>;
  }
}

export default Header;
