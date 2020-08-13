$(document).ready(function() {
	$('.main__burger').click(function(event) {
		$('.main__span1, .main__span2, .main__span3, .burger__menu').toggleClass('active');
	});
});
jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".main__span1, .main__span2, .main__span3, .burger__menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active'); // скрываем его
		}
	});
});
$(function(){
var btn = $('.scrollup');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '2000');
  });
})
	var h_hght = 94; // высота шапки
	var h_mrg = -10;    // отступ когда шапка уже не видна

	$(function(){

		var elem = $('.header-wrapper');
		var top = $(this).scrollTop();

		if(top > h_hght){
			elem.css('top', h_mrg);
		}           

		$(window).scroll(function(){
			top = $(this).scrollTop();

			if (top+h_mrg < h_hght) {
				elem.css('top', (h_hght-top));
			} else {
				elem.css('top', h_mrg);
			}
		});
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
	});


$(document).ready(function() {
	$('.open_filter u').click(function(event) {
		$('.main__filter, .open_filter').toggleClass('open');
	});
	$('.close__filter').click(function(event) {
		$('.main__filter, .open_filter').removeClass('open');
	});
});



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items: 1,

  });
});