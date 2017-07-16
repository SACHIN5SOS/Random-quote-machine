$(document).ready(function(){

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
      $(this).html('"'+data.quoteText+'"').fadeIn();
      
      $(this).css("color",color);
    
  });
     $("#authorname").fadeOut(function(){
    $(this).html('-'+data.quoteAuthor).fadeIn();
    $(this).css("color",color);
     });
    });
  
$.ajax({
  url: "https://api.unsplash.com/photos/random?client_id=eb7fd1e52a0958796d923eaaf344e1ed326598d361370fa6b2d5d730df21dd12",
  cache: false,
  success: function(result){
    randomPhoto = result.urls.regular;
    photoName = result.user.name;
  
    $('body').css('background-image', 'url('+randomPhoto+')');  
 $('.photographer').html('Random Quotes & Images &copy by Che Mug | Photo by ' + photoName);
    
  }
  
});
  
  };
 

$("#newquote").on("click",function(){
  getQuote(); 
 
  });
$("#tweet").on("click",function(){
  var randomquote=$("#quote").text();
  window.open("https://twitter.com/intent/tweet?text="+randomquote);
});
});