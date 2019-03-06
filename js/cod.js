$(document).ready(function () {

    $.ajax({url: "html/central.html", success: function(result){
        $("#center").html(result);
      }});    

    $('#home').click(function(){
        $.ajax({url: "html/central.html", success: function(result){
            $("#center").html(result);
          }});
    });

    $('#info').click(function(){
        $.ajax({url: "html/info.html", success: function(result){
            $("#center").html(result);
          }});
    });

    $('#project').click(function () { 
        
        $.ajax({url: "html/projects.html", success: function(result){
            $("#center").slideDown("slow").html(result);
          }});

    });

});