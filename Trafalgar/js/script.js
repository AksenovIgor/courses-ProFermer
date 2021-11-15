function Init(){
  reviewSlider();
  initAOS();
  initRellax();
}
Init();
// Funktions
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 2) {
      $("header").addClass("header__scroll");
  } else {
      $("header").removeClass("header__scroll");
  }
});
function reviewSlider(){
  new Swiper('.JS-review-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    fadeEffect:{
      crossFade: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
  });
}
function initAOS(){
  AOS.init();
}
function initRellax(){
  var rellax = new Rellax('.rellax', {
    horizontal:true,
  });
}
// плавный скролл
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
    
	var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-100}, 200);
	});
});

// скроллспай
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
});

// зум на карточках
$(document).ready(function(){
	$('.card-item__img_actual img').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});
});

// гамбургер
var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    
  });

 

  $(document).ready(function () {
    $(".navbar-nav a").click(function (e) {
        e.preventDefault();
        $('.navbar-collapse.show').collapse('hide');
        $hamburger.removeClass("is-active");
    });
});