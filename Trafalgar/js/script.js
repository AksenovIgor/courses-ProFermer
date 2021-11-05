function Init(){
  reviewSlider();
  initAOS();
  initRellax();
}
Init();
// Funktions
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
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
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-100}, 200);
	});
});


$(document).ready(function(){
	$('.card-item__img_actual img').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	});
});