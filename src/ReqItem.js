import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import './ReqItem.css';
import {Link} from 'react-router-dom';

class ReqItem extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            email: '',
            item: ''
        }

    }

    
    componentDidMount(){
        axios.get(`/adItem/${this.props.match.params.id}`).then(
            res => {
                this.setState({item: res.data[0].name})
            }
        )
    }

    nameChange(val){
        this.setState({name: val})
    }
    phoneChange(val){
        this.setState({phone: val})
    }
    addressChange(val){
        this.setState({address: val})
    }
    cityChange(val){
        this.setState({city: val})
    }
    stateChange(val){
        this.setState({state: val})
    }
    zipcodeChange(val){
        this.setState({zipcode: val})
    }
    emailChange(val){
        this.setState({email: val})
    }

    submitRequest(){
        axios.post(`/reqItem/${this.props.match.params.id}`, {name: this.state.name, phone: this.state.phone, 
        address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, email: this.state.email})

        axios.post(`/reqLink/${this.props.match.params.id}`);
        alert('Your request has been made. Look out for an email if you are selected.')
    }

    fillCheck(){
        if((this.state.name !== '') && (this.state.phone !== '') 
        && (this.state.address !== '') && (this.state.city !== '') 
        && (this.state.state !== '') && (this.state.zipcode !== '') && (this.state.email !== '')){
            return true;
        }
        else return false;
    }

    render(){
        return(
            <div className='viewItemBackground'>
      <Header titleName={this.state.item}/>
        
        <div className='reqItemBox'>
            <div className='reqItemTopBox'>
            <div className='reqItemTitles'>
                <div>Name:</div>
                <div>Phone #:</div>
                <div>Address:</div>
                <div>City:</div>
                <div>State:</div>
                <div>Zipcode:</div>
                <div>Email:</div>
            </div>
            <div className='reqItemInputBox'>
                <input className='reqItemInput' onChange={ (e) => this.nameChange(e.target.value)} />
                <input className='reqItemInput' onChange={ (e) => this.phoneChange(e.target.value)} placeholder='123-456-7890'/>
                <input className='reqItemInput' onChange={ (e) => this.addressChange(e.target.value)}/>
                <input className='reqItemInput' onChange={ (e) => this.cityChange(e.target.value)}/>
                <input className='reqItemInput' onChange={ (e) => this.stateChange(e.target.value)}/>
                <input className='reqItemInput' onChange={ (e) => this.zipcodeChange(e.target.value)}/>
                <input className='reqItemInput' onChange={ (e) => this.emailChange(e.target.value)}/>
            </div>
            </div>
            <div className='reqButtonBox'>
               {this.fillCheck() ? <button className='reqItemSubmit' onClick={()=> this.submitRequest()}>
                <Link to='/'style={{textDecoration: 'none'}} className='adButtonLink'>Submit</Link></button> : 
                <button className='reqItemSubmit' onClick={ () => alert('Form must be fully completed to continue')}>
                Submit</button>} 
                <button className='reqItemSubmit'><Link to='/'style={{textDecoration: 'none'}} 
            className='adButtonLink'>Cancel</Link></button>
            </div> 
        </div>
      </div>
        )
    }
}

export default ReqItem; 