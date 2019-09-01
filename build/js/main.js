$(document).ready(function () {
  //открытие попапа вакансий
  $('.js-popup-open').click(function () {
    $('body').toggleClass('overflow');
    $('.popups-wrapper').fadeIn();
    $('#' + $(this).attr('data-popup')).fadeIn();
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
