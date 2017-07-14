$(document).ready(function(){

  function getQuote()
  {
var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"; 
  $.getJSON(url,function(data){
    $("#quote").fadeOut(function(){
      $(this).html('"'+data.quoteText+'"').fadeIn();
  });
     $("#authorname").fadeOut(function(){
    $(this).html('-'+data.quoteAuthor).fadeIn();
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