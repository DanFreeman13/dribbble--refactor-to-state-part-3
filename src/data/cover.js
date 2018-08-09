import React, { Component } from 'react';

class Cover extends React.Component {
  render() {
    return (

      <figure>
        <img src={ this.props.i } alt='' />
      </figure>

      );
    }
  }

  export default Cover;
