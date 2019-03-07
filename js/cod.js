$(document).ready(function () {

  $("#nav2").click(function(event){
    $("#nav3").stop().slideToggle();
  });

  $('nav').mouseover(function () { 
    $('nav').addClass('navGrey');
  });
  $('nav').mouseleave(function () { 
    $('nav').removeClass('navGrey');
  });

  $.ajax({url: "html/central.html", success: function(result){
      $("#center").html(result);
    }});    

  $('.home').click(function(){
    $('body').removeClass('white');

    $.ajax({url: "html/central.html", success: function(result){
        $("#center").html(result);
      }});
  });

  $('.info').click(function(){
    $('body').addClass('white');

    $.ajax({url: "html/info.html", success: function(result){
        $("#center").html(result);
      }});
  });

  $('.project').click(function () { 
      
    $('body').removeClass('white');

    $.ajax({url: "html/projects.html", success: function(result){
        $("#center").slideDown("slow").html(result);
      }});

  });

});