$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:1,
		speed:1000,
		autoplay:true,
		autoplaySpeed:2000,
		pauseOnDotsHover:true,
		touchThreshold:10,
		touchMove:true,
		mouseMove:false
	});

	$('.crew').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		centerMode: true,
		infinite:true,
		speed:1000,
		autoplay:true,
		autoplaySpeed:5000,
		touchThreshold:10,
		touchMove:true,
		mouseMove:false,
		asNavFor: '.secondary-slider',
		focusOnSelect: true,
		responsive:[
			{
			  breakpoint: 1200,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 720,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1
			  }},
			  {
				breakpoint: 420,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerMode:false,
				}
			}]
	});

	$('.secondary-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.crew',
	});

	$('.secondary-slider').children().children().children().children().children().attr('style', '');
});