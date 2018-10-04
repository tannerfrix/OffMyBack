import React, { Component } from 'react';
import './AdHome.css';
import AdHeader from './AdHeader';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ListItem from './ListItem';

class AdHome extends Component {
    constructor(){
        super()

        this.state = {
          itemList: []
        }
    }

    componentDidMount(){
      axios.get('/wheel').then( res => {
          function getItems(){
              let list = []
              for(let i =0;i < res.data.length;i++){
                  list.push(res.data[i])
              }
              return list
          }
          this.setState({itemList: getItems()})
      })

  }

  deleteItem(val){
    axios.post('/delete', {itemid: val})
  }

  render() {
    let itemDisplay = this.state.itemList.map( (el, ind) => {
    return( <ListItem key={ind} item={el}/>)
    })
    return (
      <div className='homeBackground'>
      <AdHeader titleName='Admin Page'/>
      <div className='itemBox'>
      
      {itemDisplay}
      
     
      </div>



      </div>
    );
  }
}

export default AdHome;
