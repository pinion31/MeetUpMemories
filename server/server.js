const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const Meetup = require("meetup");
const mup = new Meetup({
   clientId: process.env.CLIENT_ID_MEETUP,
   clientSecret: process.env.CLIENT_KEY_MEETUP ,
   redirectUri:"http://localhost:8080/access"
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../static')));

app.get('/auth/meetup', (req, res) => {
  res.send(mup.getAuthorizeUrl());
});

app.get('/access', (req,res) => {
  var code = req.query.code;
  res.redirect('/#access=' + code);
});

app.get('/getUserEvents', (req,res) => {
  const code = req.query.data;
  mup.getAccessToken(code, function(err, access, refresh, others) {
    if (err) {
        console.log('error', err );
       // do something about it
    } else {
       // at this point mup is automatically configured with the access token
       // you are free to start making requests here
       mup.get('/self/events?desc=true&page=20', (err,data) => {
        //res.redirect('/eventList');
        res.json(data);
       });
    }
  });

});

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started');
});

module.exports = app;
