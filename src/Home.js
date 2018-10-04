import React, { Component } from 'react';
import './Home.css';
import Header from './Header';
import Wheel from './Wheel';

class Home extends Component {

  render() {
    return (
      <div className='homeBackground'>
      <Header titleName='Off My Back'/>
      <div className='wheelHouse'>
      <Wheel/>
      
      
      
      </div>
      </div>
    );
  }
}

export default Home;
