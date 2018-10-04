import React, { Component } from 'react';
import './AdLog.css';
import {Link} from 'react-router-dom';

class AdLog extends Component {
    constructor(){
        super()

        this.state = {
            user: '',
            password: ''
        }
    }

    userChange(val){
        this.setState({user: val})
    }

    passChange(val){
        this.setState({pass: val})
    }

    loginCheck(){
        if((this.state.user === 'mytchell') && (this.state.pass === 'gordon')){
            return true;
        }
        else return false;
    }


  render() {
    return (
      <div className='adLogBackground'>
        <div className='loginBox'>
            

               Username<input className='adUserInput' onChange={ (e) => {this.userChange(e.target.value)}}/>


                Password<input className='adPassInput' type='password'
                onChange={ (e) => {this.passChange(e.target.value)}}/>

            
           {  this.loginCheck() ? <button className='adLogButton'><Link to='/adHome' 
            className='buttonLink'>Login</Link></button> : 
        <button className='adLogButton' onClick={ () => {alert('Try again, meatball')}}>Login</button> } 
        
        
        </div>
      </div>
    );
  }
}

export default AdLog;
