import React, { Component } from 'react';
import './Charity.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import StripeTest from './StripeTest';
import StripeCheckout from 'react-stripe-checkout';

class Charity extends Component {
    constructor() {
        super()

        this.state = {
            toggle: false
        }
    }

    toggleChange() {
        this.setState({ toggle: true })
    }

    onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        })}
    

    render() {
        return (
            <div className='charityBackground'>
                <Header titleName='Charity' />

                    <div className='charityBox'> 
                        {/* <div className='charityBlurb'> Off My Back works with a number of
                            charities to better our community. 
                            Click the button below to donate! </div> */}

                        <div className="checkout">
                            <p>The Road Home is a private non-profit social services agency that assists individuals and families experiencing
                            homelessness in Salt Lake County and along the Wasatch Front. The Road Home provides multiple services to help people overcome homelessness.</p>
                             <img src='https://www.theroadhome.org/images/logo.png' alt="" className='roadHomeLogo'/>
                            <p style={{fontSize: '3vh'}}>Click the button below to donate $5 to The Road Home!</p>
                        </div>

                        <StripeCheckout className='stripeButton' token={this.onToken} 
                                stripeKey="pk_test_woHw3mwFAfkVUAFO4psrtt4k"/>

                        </div>
                    </div>
        );
    }



}


export default Charity;