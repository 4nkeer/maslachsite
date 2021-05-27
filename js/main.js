jQuery(function($) {
    //подвешиваем на событие клик по кнопке
    $('.btn').on('click', function(e) {
      //отключение ее
      $(e.currentTarget).attr('disabled', true);
      // показываем процесс закгрузки
      $('.loader').toggleClass('hide');
      $('.btn').toggleClass('hide');
      $('p').toggleClass('hide');

      // подвешиваем паузу на 5 секунд
      setTimeout(function() {
        // скрываем процесс загрузки
        $('.loader').toggleClass('hide');
        // делаем кнопку активной
        $(e.currentTarget).attr('disabled', false);
        $('.btn').removeClass('hide')
        $('p').toggleClass()
      }, 5000)
    });
  });