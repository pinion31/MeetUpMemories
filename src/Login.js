$(document).ready(function(){

  $("#login").on('click', function() {
      console.log('login');
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
          window.location = data;
        }
      });
  });
});
