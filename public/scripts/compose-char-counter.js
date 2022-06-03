//Counter for tweets that includes logic for when limit is reached and passed which changes counter color

$(document).ready(function() {
  $("#tweet-text").on('input', function() {
     $(".counter").text(140 - $(this).val().length);
     let max = 140
     let charsleft =  max - $(this).val().length
     if (charsleft < 0) {
       $(".counter").css({"color": "red"})
     } else {
       $(".counter").css({"color": "black"})
     }
  });
});