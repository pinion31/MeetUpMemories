$(document).ready(function(){

  $("#login").on('click', function() {
    //window.location = 'https://secure.meetup.com/oauth2/authorize?client_id=c428g4kkavi0me7nru8qtogubm&response_type=code&redirect_uri=http://localhost:8080/access';
      console.log('sending ajax request');
      $.ajax({
        url:'/auth/meetup',
        crossDomain: true,
        cors: true,
        contentType:'application/json',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials' : 'true',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        method: 'GET',
        success: function(data) {
          console.log('redirecting');
          console.log(data);
          window.location = data;
        }
      });
  });

});