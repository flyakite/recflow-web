(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#test-my-website-button').click(function(e){
      console.log('te');
      e.preventDefault();
      document.getElementById('url-warning-msg').style.visibility = 'hidden';
      var url = document.getElementById('url-to-test').value;
      var re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
      if(!re.test(url)){
        console.log('asdf');
        document.getElementById('url-warning-msg').style.visibility = 'visible';
        return false;
      }
      url = encodeURIComponent(url);
      window.open('http://console.recflow.com/screenshot?url=' + url,'_blank');
      return false;
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space