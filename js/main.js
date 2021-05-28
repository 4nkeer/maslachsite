
    $('#headd').hover(onIn, onOut);


function onIn() {
    $('.heading font').css("bacground", "green")
}

function onOut() {
    $('#descr').toggleClass('')
}

$(window).on('load', function () {
    
        $('#load').delay(2500).fadeOut('slow');
    
    });