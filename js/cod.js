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
      maquina("center",result,90,1);
    }});    

  $('nav').show(6000);

  $('.home').click(function(){
    $('body').removeClass('white');

    $.ajax({url: "html/central.html", success: function(result){
      maquina("center",result,90,1);
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
  //https://es.stackoverflow.com/questions/61215/realizar-efecto-m%C3%A1quina-de-escribir-con-pausa
  function maquina(contenedor,texto,intervalo,n){
    var i=0,
     // Creamos el timer
     timer = setInterval(function() {
     if ( i<texto.length ) {
      // Si NO hemos llegado al final del texto..
      // Vamos añadiendo letra por letra y la _ al final.
      $("#"+contenedor).html(texto.substr(0,i++) + "_");
     } else {
      // En caso contrario..
      // Salimos del Timer y quitamos la barra baja (_)
      clearInterval(timer);
      $("#"+contenedor).html(texto);
      // Auto invocamos la rutina n veces (0 para infinito)
      if ( --n!=0 ) {
       setTimeout(function() {
        maquina(contenedor,texto,intervalo,n);
       },3600);
      }
     }
    },intervalo);
   };

});