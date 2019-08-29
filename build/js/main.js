$(document).ready(function () {
  //открытие попапа вакансий
  $('.js-vacancy-popup').click(function () {
    $('body').toggleClass('overflow');
    $('.popups-wrapper').fadeIn();
    $('#vacancy').fadeIn();
    return false;
  });

  //закрытие попапа
  $('.js-popup-close').click(function () {
    $('body').toggleClass('overflow');
    $('.n-popup').fadeOut();
    $('.popups-wrapper').fadeOut();
    return false;
  });
});
