$(function(){
//this is where the entire jQuery goes.

$("div.plate > button").click(function(){
  var button = $("div.plate > button")
  if (button.hasClass('switch on')) {
    button.removeClass("switch on").addClass("switch off");
    $('body').removeClass("switch on").addClass("dark");
    $('.status').empty().append("Hey, who turned the lights off????ouch!");
  }
  else {
    button.removeClass("switch off").addClass("switch on");
    $('body').removeClass("dark").addClass("light");
    $('.status').empty().append("It's so bright in here!");
  }
});



});






















})
