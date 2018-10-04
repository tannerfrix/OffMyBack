import React, {Component} from 'react';
import './ViewReqs.css';
import axios from 'axios';
import AdHeader from './AdHeader';
import {Link} from 'react-router-dom';

class ViewReqs extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            list: []
        }
    }

    componentDidMount(){
        axios.get(`/viewReqs/${this.props.match.params.id}`).then(
            res => {
                function getItems(){
                    let list = []
                    for(let i =0;i < res.data.length;i++){
                        list.push(res.data[i])
                    }
                    return list
                }
                this.setState({list: getItems()})
                console.log(this.state.list)
            }
        )

        axios.get(`/adItem/${this.props.match.params.id}`).then(
            res => {
                this.setState({name: res.data[0].name})
            }
        )
    }

    render() {

    let listDisplay = this.state.list.map( (el, ind) => {
                return(
                        <div className='reqListing' key={ind}>
                    <div className='reqTopRow'>{`${el.name} ${el.phone}`}</div>
                    <div className='reqMiddleRow'>{`${el.address} ${el.city} ${el.state}, ${el.zipcode}`}</div>
                    <div className='reqBottomRow'>{el.email}</div>
                        </div> )
      })

        return (
          <div className='viewItemBackground'>
          <AdHeader titleName={this.state.name}/>
            <div className='viewReqBox'>

{listDisplay}


            </div>
          </div>
        );
      }



}

export default ViewReqs;