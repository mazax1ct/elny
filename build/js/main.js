$(document).ready(function () {
  //открытие меню в шапке
  $('.js-menu-open').click(function () {
    $('body').toggleClass('overflow');
    $(this).toggleClass('is-active');
    $('.menu-top').toggleClass('is-open');
    return false;
  });

  //открытие меню каталога
  $('.js-catalog-menu-open').click(function () {
    $(this).toggleClass('is-active');
    $('.catalog-menu-mobile').toggleClass('is-open');
    return false;
  });

  //открытие формы поиска в шапке
  $('.js-search-open').click(function () {
    if($('body').width() < 992) {
      $('body').addClass('overflow');
    }
    $(this).addClass('is-active');
    $('.search__closer').addClass('is-active');
    $('.search__form').addClass('is-open');
    $('.search__input').focus();
    return false;
  });

  //потеря фокуса поля поиска
  $('.search__input').blur(function() {
    if ($(this).val() == 0) {
      $('.search__form').removeClass('is-open');
      $('.search__opener').removeClass('is-active');
      $('.search__closer').removeClass('is-active');
      $('body').removeClass('overflow');
    }
  });

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
