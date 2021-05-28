
$(window).on('load', function () {
    
        $('#load').delay(2500).fadeOut('slow');
    
    });


$('#games').click(function () {
    $('.content').load('./content/games.html');
    });

$('#discord').click(function(){
    $('.content').load('/content/discord.html');
})