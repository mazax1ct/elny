$(document).ready(function () {
  //открытие попапа
  $('.js-popup-open').click(function () {
    $('body').addClass('overflow');
    $('.popups-wrapper').fadeIn();
    $('.n-popup').hide();
    $('#' + $(this).attr('data-popup')).fadeIn();
    return false;
  });

  //закрытие попапа
  $('.js-popup-close').click(function () {
    $('body').removeClass('overflow');
    $('.n-popup').fadeOut();
    $('.popups-wrapper').fadeOut();
    return false;
  });
});
