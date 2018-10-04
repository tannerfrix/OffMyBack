import React, { Component } from 'react';
import './AdItem.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AdHeader from './AdHeader';

class AdItem extends Component {
    constructor(){
        super()

        this.state = {
            id: '',
            name: '',
            picture: '',
            date: '',
            desc: ''
        }
    }

    componentDidMount(){
        axios.get(`/adItem/${this.props.match.params.id}`).then(
            res => {
                this.setState({id: res.data[0].id, name: res.data[0].name, 
                picture: res.data[0].picture, date: res.data[0].date, 
                desc: res.data[0].description})
                console.log(this.props.match.params.id)
            }
        )
    }

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

    updateItem(){
        axios.put(`/adItem/${this.props.match.params.id}`, {name: this.state.name, description: this.state.desc, 
        picture: this.state.picture, date: this.state.date})
    }

  render() {
    return (
      <div className='adItemBackground'>
      <AdHeader titleName={this.state.name}/>
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
            <button className='adButton' onClick={ ()=> this.updateItem()}> <Link to='/adHome'style={{textDecoration: 'none'}} 
            className='adButtonLink'>Update</Link></button>
            <button className='adButton'><Link to='/adHome'style={{textDecoration: 'none'}} 
            className='adButtonLink'>Cancel</Link> </button>
            </div>
        </div>
      </div>
    );
  }
}

export default AdItem;
