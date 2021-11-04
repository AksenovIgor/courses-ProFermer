



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
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top-100}, 200);
	});
});
      
