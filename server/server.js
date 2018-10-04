const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const session = require('express-session');
const Auth0Strategy = require('passport-auth0');
const controller = require('../src/controller');
const stripe = require('stripe')("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

require('dotenv').config();


const app = express();
app.use( session({
    secret: 'session secret',
    resave: 'false',
    saveUninitialized: 'false'
}));
app.use( passport.initialize() );
app.use( passport.session() );
app.use( bodyParser.json());
app.use( cors() );
app.use( express.static( `${__dirname}/../build` ) );

passport.use( new Auth0Strategy({
    domain:       process.env.DOMAIN,
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:  '/login',
    scope: "openid email profile"
   },
   function(accessToken, refreshToken, extraParams, profile, done) {
     return done(null, profile);
   }
  ) );

passport.serializeUser( (user, done) => {
    done(null, { id: user.id })
});

passport.deserializeUser(function(obj, done) {
    done(null, obj)
});

app.get( '/login',
  passport.authenticate('auth0',
    { successRedirect: process.env.PASSPORT_REDIRECT, failureRedirect: '/login', failureFlash: true }
  )
);

app.get('/home', (req, res, next) => {
    if ( !req.user ) {
        res.redirect('/login');
    } else {
         req.session.user = req.session.passport.user;
        res.status(200).send(req.session.user)   }
})

app.get('/wheel', controller.getItems);
app.post('/delete', controller.deleteItem);
app.get('/adItem/:id', controller.getItem);
app.put('/adItem/:id', controller.updateItem);
app.post('/newItem', controller.addNewItem);
app.get('/requests/:id', controller.getRequests);
app.post('/reqItem/:id', controller.addRequests);
app.post('/reqLink/:id', controller.reqLink);
app.get('/viewReqs/:id', controller.joinRequest);

app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

massive( process.env.CONNECTION_STRING).then( dbInstance => {app.set('db', dbInstance)});

const port = process.env.PORT || 5000
app.listen(port, () => {console.log(`Listening on Port ${port}`)});