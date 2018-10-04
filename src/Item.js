import React, { Component } from 'react';
import './Item.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';

class Item extends Component {
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

    dateFixer(val){
        let year = ''
        let date = ''
        for(let i = 0;i < 4;i++){
            year += val.charAt([i])
        }
        for(let i = 5;i < val.length; i++ ){
          date += val.charAt([i])
        }
        return date + '-' + year;
    }

  render() {
    return (
      <div className='viewItemBackground'>
      <Header titleName={this.state.name}/>
        <div className='viewItemBox'>
            <img className='viewItemPic' src={this.state.picture}/>
            <div className='viewItemName'>{this.state.name}</div>
            <div className='viewItemDesc'>{this.state.desc}</div>
            <div className='viewItemDate'>Giveaway Date: {this.dateFixer(this.state.date)}</div>
            <button className='viewItemButton'><Link to={`/reqItem/${this.props.match.params.id}`}
             style={{textDecoration: 'none'}} 
            className='adButtonLink'>Request</Link></button>
        </div>
      </div>
    );
  }
}

export default Item;