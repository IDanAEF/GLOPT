$(document).ready(function(){
  $('.review__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
    infinite: true,
    arrows: true
  });
});

$('.hamburger').on('click', function() {
  $('.menu').addClass('active');
});

$('.menu__close').on('click', function() {
  $('.menu').removeClass('active');
});

$("a[href^=#]").click(function() {
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});