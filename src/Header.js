import React, { Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div className="header">

            <div className="aboutSection">
                <div className='adHomeLink'><Link to='/' className='buttonLink'>Home</Link></div>
                <div ><Link to='/about' className='newItemLink'>About</Link></div>
                <div className="logoutButton"><Link to='/charity' className='buttonLink'>Charity</Link></div>
            </div>
            <div></div>
            <div className="dashTitle">{this.props.titleName}</div>
            <div className="logoutSection">
            </div>
        
    </div>
        )
    }
}

export default Header;