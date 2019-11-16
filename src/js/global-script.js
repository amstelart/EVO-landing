// Если на проекте jQuery
$( document ).ready(function() {

  // https://github.com/blivesta/drawer/
  $('.drawer').drawer();

  // https://github.com/digitalBush/jquery.maskedinput
  $(".phone-mask").mask("+7(999) 999-9999");

  //animate header
  var fixNav = 122;
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll >= fixNav ) {
        $('.drawer-navbar').addClass('drawer-navbar--fixed');
      }
      else {
          $('.drawer-navbar').removeClass('drawer-navbar--fixed');
      }
  });
  //animate header end

  var mainNav = $('.drawer-navbar'),
      contentSections = $('.scroll-section');

  $(window).on('scroll', function(){

		//on desktop - update the active link in the secondary fixed navigation
		updatemainNavigation();
	});

  function updatemainNavigation() {
		contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = mainNav.find('.a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - mainNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - mainNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			}else {
				actualAnchor.removeClass('active');
			}
		});
	}

  //smooth scrolling when clicking on the secondary navigation items
	mainNav.find('ul .drawer-menu-item').on('click', function(event){
      event.preventDefault();
      var target= $(this.hash);
      $('body,html').animate({
      	'scrollTop': target.offset().top - mainNav.height() + 1
      	}, 400
      );
      //on mobile - close secondary navigation
      $('.drawer').drawer('close');
  });

  // https://www.jqueryscript.net/time-clock/psg-countdown-timer.html
  var timer = new PsgTimer({
      selector: '#avtorTimer',
      currentDateTime: Date.UTC(2019, 10, 14, 12, 0, 0),
      endDateTime: Date.UTC(2019, 10, 31, 12, 0, 0),
      multilpeBlocks: true,
      animation: 'fade',
      labels: {
          days: 'Дней',
          hours: 'Часов',
          minutes: 'Минут',
          seconds: 'Секунд'
      },
      callbacks: {
          onInit: function () {
              console.log('Hello world!');
          }
      }
  });
});

// Слайдер этапы работы
$('.vertical-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    autoplay: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    autoplaySpeed: 7000,
    adaptiveHeight: true
});

// Слайдер отзывы
$('.slider').slick({
  // slidesToShow: 4,
  // slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<div class="slider-prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="slider-next"><i class="fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: true
      }
    },
  ]
});

// Слайдер отзывы
$('.reviews-carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<div class="reviews-prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="reviews-next"><i class="fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false
      }
    },
  ]
});

// Слайдер портфолио
$('.portfolio').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<div class="reviews-prev"><i class="fas fa-chevron-left"></i></div>',
  nextArrow: '<div class="reviews-next"><i class="fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
  ]
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
