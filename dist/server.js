'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');

var app = express();

var Meetup = require("meetup");
var mup = new Meetup({
  clientId: process.env.CLIENT_ID_MEETUP,
  clientSecret: process.env.CLIENT_KEY_MEETUP,
  redirectUri: "http://localhost:8080/access"
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../static')));

app.get('/auth/meetup', function (req, res) {
  res.send(mup.getAuthorizeUrl());
});

app.get('/access', function (req, res) {
  var code = req.query.code;
  res.redirect('/#access=' + code);
});

app.get('/getUserEvents', function (req, res) {
  var code = req.query.data;
  mup.getAccessToken(code, function (err, access, refresh, others) {
    if (err) {
      console.log('error', err);
      // do something about it
    } else {
      // at this point mup is automatically configured with the access token
      // you are free to start making requests here
      mup.get('/self/events?desc=true&page=20', function (err, data) {
        //res.redirect('/eventList');
        res.json(data);
      });
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App started');
});

module.exports = app;
//# sourceMappingURL=server.js.map