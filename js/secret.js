// всплывающее окно
$('#ex').click(function(){
    $('#ex1').modal({
      fadeDuration: 100,
      showClose: false
    });
    return false;
  });
  
new TypeIt("#secret", {
    strings: "Не скажу :)",
    speed: 200,
    waitUntilVisible: true,
    cursor: false,
  }).go();
  
  