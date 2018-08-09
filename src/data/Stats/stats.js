import React, { Component } from 'react';
import './stats.css'

class Stats extends React.Component {

  constructor(props) {
    super();

    this.state = {
      likes: props.l,
      counterClicks: 0
    };
  }

  incrementLikes= (e) => {
    e.preventDefault();


    if(this.state.counterClicks === 0) {
      this.setState({
        likes: parseInt(this.state.likes)+1
      });
      this.state.counterClicks++;
    } else {
      this.setState({
        likes: parseInt(this.state.likes)-1
      });
      this.state.counterClicks--;
    }



  }

  render() {



    return (

      <div className='shots__stats'>
        <ul className='shots__list'>
          <li><i className='fa fa-eye' />{ this.props.v }</li>
          <li><i className='fa fa-comment' />{ this.props.c }</li>
          <li><a href="#" onClick={ this.incrementLikes }><i className='fa fa-heart' />{ this.state.likes }</a></li>
        </ul>
        <div className="author"><img className="avatarImage" src={ this.props.av } />
          <a href="#" className="link">{ this.props.au }</a>
        </div>
      </div>

      );
    }
  }

  export default Stats;

//incrementLikes= () =>  {} es como se cambia el estado de una función
