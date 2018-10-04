import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import AdLog from './AdLog';
import NewItem from './NewItem';
import AdHome from './AdHome';
import Item from './Item';
import {HashRouter, Route} from 'react-router-dom';
import AdItem from './AdItem';
import ReqItem from './ReqItem';
import Charity from './Charity';
import ViewReqs from './ViewReqs';
import CheckoutForm from './CheckoutForm';
import StripeTest from './StripeTest';


ReactDOM.render(
<HashRouter>

<div>
<Route path='/test' component={StripeTest}/>
<Route path='/newItem' component={NewItem} />
<Route path='/adItem/:id' component={AdItem}/>
<Route path='/adHome' component={AdHome}/>
<Route path='/adlog' component={AdLog}/>
<Route path='/item/:id' component={Item}/>
<Route path='/reqItem/:id' component={ReqItem}/>
<Route path='/charity' component={Charity}/>
<Route path='/viewReqs/:id' component={ViewReqs}/>
<Route path='/about' component={About} />
<Route exact path='/' component={Home}/>
</div>   
</HashRouter>,   
    
    document.getElementById('root'));
// registerServiceWorker();
