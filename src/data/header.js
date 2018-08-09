import React, { Component } from 'react';
import Navi from './navi.js'


class Header extends Component {
  render() {
    return (
      <div>
      <nav>
        <div id='header'>
          <img src='https://cdn.dribbble.com/assets/logo-small-2x-9fe74d2ad7b25fba0f50168523c15fda4c35534f9ea0b1011179275383035439.png' alt='Dribbble logo' />
        </div>
      </nav>
      <nav>
        <Navi />
      </nav>
      </div>
    );
  }
}

export default Header;
