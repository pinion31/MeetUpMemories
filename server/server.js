const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

const Meetup = require("meetup");
const mup = new Meetup({
   clientId:"c428g4kkavi0me7nru8qtogubm",
   clientSecret:"p3ehh7i7noplbkaq0aea2kgu9i",
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

  //mup.getAuthorizeUrl();
  res.send(mup.getAuthorizeUrl());


    /*
  mup.getAccessToken(code, function(err, access, refresh, others) {
      console.log('getting token');
    if (err) {
        console.log('error', err );
       // do something about it
    } else {
       // at this point mup is automatically configured with the access token
       // you are free to start making requests here
       console.log('ready to make requests');
       mup.get('/self/events?desc=true&page=1', (err,data) => {
        console.log(data);
       });
    }
});*/
  //res.send('done');

 // res.redirect('https://secure.meetup.com/oauth2/authorize?client_id=c428g4kkavi0me7nru8qtogubm&response_type=code&redirect_uri=http://localhost:8080/access')
});

app.get('/access', (req,res) => {
  var code = req.query.code;

  mup.getAccessToken(code, function(err, access, refresh, others) {
    if (err) {
        console.log('error', err );
       // do something about it
    } else {
       // at this point mup is automatically configured with the access token
       // you are free to start making requests here
       mup.get('/self/events?desc=true&page=1', (err,data) => {
        res.json(data);
       });
    }
});
  /*
  var payload = {
    client_id: 'c428g4kkavi0me7nru8qtogubm',
    client_secret: 'p3ehh7i7noplbkaq0aea2kgu9i',
    grant_type: 'authorization_code',
    redirect_uri : 'http://localhost:8080/auth/user',
    code,
  };*/

 /* axios.post('https://secure.meetup.com/oauth2/access', {
     client_id:'c428g4kkavi0me7nru8qtogubm',
     client_secret: 'p3ehh7i7noplbkaq0aea2kgu9i',
  }).then((token) => {
      console.log('token', token);
    }).catch(err => {
        console.log('there was an error', err);
    });*/

/*
  axios({
    method: 'post',
    url: 'https://secure.meetup.com/oauth2/access',
    headers :{ 'Content-Type': 'application/x-www-form-urlencoded'},
    data: {
     client_id:'c428g4kkavi0me7nru8qtogubm',
     client_secret: 'p3ehh7i7noplbkaq0aea2kgu9i',
    },
  }).then((token) => {
      console.log('token', token);
    }).catch(err => {
        console.log('there was an error', err);
    });*/
  //res.send('token received');
});

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started for your convenience');
});

module.exports = app;
