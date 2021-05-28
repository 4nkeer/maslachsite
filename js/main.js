// import * as functions from './js/lib'

// functions.load();

$(window).on('load', function () {
    var $preloader = $('#preloader');
        $preloader.delay(1100).fadeOut('slow');
});

$('#games').click(function () {
    $('.content').load('./content/games.html');
    });

$('#discord').click(function(){
    $('.content').load('/content/discord.html');
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


    new TypeIt("#hellotext", {
        strings: "Hello World!",
        speed: 500,
        waitUntilVisible: true
      }).go();