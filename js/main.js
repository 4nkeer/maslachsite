// import * as functions from './js/lib'

// functions.load();


// загрузочный экран
$(window).on('load', function () {
    var $preloader = $('#preloader');
        $preloader.delay(1100).fadeOut('slow');
});

new TypeIt("#loading", {
    waitUntilVisible: false
  })
    .type("Loading")
    .exec(async () => {
      //-- Return a promise that resolves after something happens.
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve();
        }, 100);
      });
    })
    .type("...")
    .go();



// смена контента
$('#games').click(function () {
    $('.container').load('./content/games.html');
    });

$('#discord').click(function(){
    $('.container').load('./content/discord.html');
});


// анимация описания
    new TypeIt("#hellotext", {
        strings: "Hello World!",
        speed: 150,
        waitUntilVisible: false
      }).go();

$('#ex').click(function(){
  $('#ex1').modal({
    fadeDuration: 100,
    showClose: false
  });
  return false;
});

// анимация описания
new TypeIt("#secret", {
  strings: "Не скажу :)",
  speed: 200,
  waitUntilVisible: true,
  cursor: false
}).go();

