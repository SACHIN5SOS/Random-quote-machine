  require('!style-loader!css-loader!./style.css');  
  function getQuote()
  {
    //for random color
    var letters = '0123456789ABCDEF';
     var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //json property  colectinting through ajax and json
  var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"; 
  $.getJSON(url,function(data){
    $("#quote").fadeOut(function(){
      $.ajax({
    url: "https://api.unsplash.com/photos/random?client_id=b3e6bd91754c4a908d00b9eef529b613536ac06204e26ca54c802c5d0d9d2e6b",
      cache: false,
      success: function(result){
        randomPhoto = result.urls.regular;
          photoName = result.user.name;
  
     $('body').css('background-image', 'url('+randomPhoto+')');  
  $('#photographer').html(photoName);
    
      }
  ``
                });
      $(this).html('"'+data.quoteText+'"').fadeIn();
        
      $(this).css("color",color);
    
  });
     $("#authorname").fadeOut(function(){
    $(this).html('-'+data.quoteAuthor).fadeIn();
    $(this).css("color",color);
     });
    });
  

  
  };
 

$("#newquote").on("click",function(){
  getQuote(); 
 
  });
$("#tweet").on("click",function(){
  var randomquote=$("#quote").text();
  window.open("https://twitter.com/intent/tweet?text="+randomquote);
});
