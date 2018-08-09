import React, {Component} from 'react'
import Shot from './shot.js'
import { listOfObjects } from './shots.js'

class Shots extends Component {
  render() {
    return (
      <div className='container'>
        { listOfObjects.map(function(frame) {
          return <Shot key= {frame.key} image={ frame.img } views={ frame.stats[0] }
          comments={ frame.stats[1] } likes={ frame.stats[2] }
          avatar={ frame.author.avatar } authorName={ frame.author.name }/>
        }) }
      </div>
    );
  }
}

export default Shots;
