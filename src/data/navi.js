import React, { Component } from 'react';


class Navi extends Component {
  render() {
    return (
      <ul className="secondNav">
        <li>Popular <i className="fas fa-angle-down"></i></li>
        <li>Shots <i className="fas fa-angle-down"></i></li>
        <li>Now <i className="fas fa-angle-down"></i></li>
      </ul>
    );
  }
}

export default Navi;
