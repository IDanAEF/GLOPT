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

function setSlide(i, offset) {
  sliderItems.forEach(item => item.classList.remove('active'));
  sliderItems[i].classList.add('active');
  sliderLine.style.transform = `translateX(-${offset}px)`;
}

//slider 
const sliderItems = document.querySelectorAll('.review__item'),
      sliderLine = document.querySelector('.review__line'),
      slider = document.querySelector('.review__slider'),
      nextSlide = document.querySelector('.review__next'),
      prevSlide = document.querySelector('.review__prev'),
      width = window.getComputedStyle(slider).width.replace(/\D/g, '');

let offset = +width, count = 1;

sliderItems.forEach(item => item.style.width = +width + 'px');

sliderLine.style.width = (sliderItems.length * 100) + '%';

setSlide(count, offset);

nextSlide.addEventListener('click', () => {
  if (offset == (sliderItems.length - 1) * +width) {
    offset = 0;
    count = 0;
  } else {
    offset += +width;
    count++;
  }

  setSlide(count, offset);
});

prevSlide.addEventListener('click', () => {
  if (offset == 0) {
    offset = (sliderItems.length - 1) * +width;
    count = sliderItems.length - 1;
  } else {
    offset -= +width;
    count--;
  }

  setSlide(count, offset);
});