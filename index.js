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
      $('body').fadeIn(2000).css("background-color",color);
      $(this).css("color",color);
      $('.content').css("background-color","white");
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
});