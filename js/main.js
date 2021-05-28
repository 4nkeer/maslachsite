
$(window).on('load', function () {
    
        $('#load').delay(2500).fadeOut('slow');
    
    });


$('#games').click(function () {
    $('.contenthide').toggleClass('content')
    $('.contenthide').load('./content/content.html');
    });