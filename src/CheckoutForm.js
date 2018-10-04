import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }


async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Purchase Complete!")
        if (response.ok) alert("Donation has been sucessfully completed!")
      }
  

  render() {
    return (
      <div className="checkout">
        <p>The Road Home is a private non-profit social services agency that assists individuals and families experiencing
             homelessness in Salt Lake County and along the Wasatch Front. The Road Home provides multiple services to help people overcome homelessness.</p>
        <img src='https://www.theroadhome.org/images/logo.png' alt="" className='roadHomeLogo'/>
        <CardElement />
        <button className='stripeSendButton' onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);