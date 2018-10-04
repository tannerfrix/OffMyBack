import React, { Component } from 'react';
import './NewItem.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AdHeader from './AdHeader';

class NewItem extends Component {
    constructor(){
        super()

        this.state = {
            id: 10,
            name: '',
            picture: '',
            date: '',
            desc: ''
        }
    }

    componentDidMount(){

    }


    // id serial primary key
    nameUpdate(val){
        this.setState({name: val})
    }

    descUpdate(val){
        this.setState({desc: val})
    }

    picUpdate(val){
        this.setState({picture: val})
    }

    dateUpdate(val){
        this.setState({date: val})
    }

    fillCheck(){
        if((this.state.name !== '') && (this.state.desc !== '') 
        && (this.state.picture !== '') && (this.state.date !== '')){
            return true;
        }
        else return false;
    }

    addNewItem(){
        axios.post('/newItem', {name: this.state.name, description: this.state.desc, 
        picture: this.state.picture, date: this.state.date})
    }

  render() {
    return (
      <div className='adItemBackground'>
      <AdHeader titleName='New Item'/>
        <div className='adItemBox'>
            <img className='adItemPic' src={this.state.picture}/>
            <div className='adItemNameBox'>
               <div className='adItemName'>Name:</div>
               <input className='adItemNameInput' value={this.state.name} onChange={ (e)=>
             this.nameUpdate(e.target.value)}/>
            
            </div>
            <div className='adItemNameBox'>
               <div className='adItemDesc'>Desc:</div>
               <textarea className='adItemDescInput' value={this.state.desc} onChange={ (e)=>
                this.descUpdate(e.target.value)}/>
            
            </div>
            <div className='adItemPicBox'>
               <div className='adItemName'>Pic:</div>
               <input className='adItemPicInput' value={this.state.picture} onChange={ (e)=> 
                this.picUpdate(e.target.value)}/>
            
            </div>
            <div className='adItemDateBox'>
               <div className='adItemName'>Date:</div>
               <input type='date'className='adItemDateInput' value={this.state.date} onChange={ (e) =>
                this.dateUpdate(e.target.value)}/>
            
            </div>
        
            <div className='adItemButtonBox'>

            {this.fillCheck() ? <button className='adButton' onClick={ () => this.addNewItem()}> 
            <Link to='/adHome'style={{textDecoration: 'none'}} 
            className='adButtonLink'>Add</Link></button> : <button className='adButton'
            onClick={ ()=> alert('All forms must be filled out to continue')}>Add</button>}

            <button className='adButton'><Link to='/adHome'style={{textDecoration: 'none'}} 
            className='adButtonLink'>Cancel</Link> </button>
            </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
