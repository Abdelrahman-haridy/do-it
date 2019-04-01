import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header clearfix">
        <Link to="/"><span className="menu-hamburger pull-left"></span></Link>
        <Link to="/about"><span className="eye pull-right"></span></Link>
            <h2 className="title">DO it</h2>
        </div>
      </div>
    )
  }
}

export default Header
