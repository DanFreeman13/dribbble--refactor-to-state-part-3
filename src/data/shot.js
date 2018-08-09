import React, { Component } from 'react';
import Cover from './cover.js'
import Stats from './Stats/stats.js'

class Shot extends React.Component {
  render() {
    return (

      <article className='shot'>
        <Cover i={this.props.image} />

        <Stats v={ this.props.views } c={ this.props.comments }
        l={ this.props.likes } av= { this.props.avatar } au= { this.props.authorName }/>

      </article>

      );
    }
  }

  export default Shot;
