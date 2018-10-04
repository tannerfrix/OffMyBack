import React, { Component} from 'react';
import './AdHeader.css';
import {Link} from 'react-router-dom';

class AdHeader extends Component{

    render(){
        return(
            <div className="adHeader">

                    <div className="adAboutSection">
                        <div ><Link to='/newItem' className='newItemLink'>New Item</Link></div>
                        <div className='adHomeLink'><Link to='/adHome' className='buttonLink'>Admin Home</Link></div>
                        <div className="logoutButton"><Link to='/' className='buttonLink'>Logout</Link></div>
                    </div>
                    <div></div>
                    <div className="dashTitle">{this.props.titleName}</div>
                    <div className="logoutSection">
                    </div>
                
            </div>
        )
    }
}

export default AdHeader;