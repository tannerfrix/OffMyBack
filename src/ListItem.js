import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ListItem.css';
import axios from 'axios';

class ListItem extends Component {
    constructor(){
        super()

    
        this.state = {
            id: 10,
            requests: 0
        }
    }

    componentDidMount(){
        axios.get(`/requests/${this.props.item.id}`).then( res => {
            this.setState({requests: res.data.length})
          })
    }

    render(){
        return(
            <div className='listAdminItem'>
            <div><Link to={`viewReqs/${this.props.item.id}`} style={{
                textDecoration: 'none', color: 'white'}}>{this.props.item.name}</Link></div>
               
               
             <div className='requestBox'>
            Requests: {this.state.requests}
            
             </div>
              <div className='listEditDelete'>
                <div className='listEditButton'> <Link to={`adItem/${this.props.item.id}`}
                style={{textDecoration: 'none', color: 'white'}}>Edit</Link></div>
                <div className='deleteButton' onClick={ () => 
                  this.deleteItem(this.props.item.id)}>Delete</div>
              </div>
        </div>
        )
    }
}

export default ListItem;