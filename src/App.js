import React, { Component } from 'react';
import Header from './data/header.js'
import Shots from './data/Shots.js'
import './App.css'


import { name, year } from './data/author.js'

const styles = {
  textAlign: 'center',
  margin: '35px 0',
  fontSize: '13px',
  color: '#AAA'
}

class App extends Component {
  render() {
    return (
      <div id="">
        <Header />
        <Shots />
        <p style={ styles }>Written by { name } { year }</p>
      </div>
    );
  }
}

export default App;
