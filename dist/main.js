!function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=2)}([function(t,o){},function(t,o){$("#newquote").on("click",function(){!function(){for(var t="#",o=0;o<6;o++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(o){$("#quote").fadeOut(function(){$.ajax({url:"https://api.unsplash.com/photos/random?client_id=b3e6bd91754c4a908d00b9eef529b613536ac06204e26ca54c802c5d0d9d2e6b",cache:!1,success:function(t){randomPhoto=t.urls.regular,photoName=t.user.name,$("body").css("background-image","url("+randomPhoto+")"),$("#photographer").html(photoName)}}),$(this).html('"'+o.quoteText+'"').fadeIn(),$(this).css("color",t)}),$("#authorname").fadeOut(function(){$(this).html("-"+o.quoteAuthor).fadeIn(),$(this).css("color",t)})})}()}),$("#tweet").on("click",function(){var t=$("#quote").text();window.open("https://twitter.com/intent/tweet?text="+t)})},function(t,o,e){e(1),t.exports=e(0)}]);