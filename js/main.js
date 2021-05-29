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
        speed: 500,
        waitUntilVisible: false
      }).go();



