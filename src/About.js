import React, { Component } from 'react';
import './About.css';
import Header from './Header';
import {Link} from 'react-router-dom';

class About extends Component {
  
    render() {
    return (
      <div className='adItemBackground'>
      <Header titleName='About'/>
        <div className='aboutBox'>
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
            
        </div>
      </div>
    );
  }
}

export default About;