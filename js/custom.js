$(document).ready(function () {
	//banner slider
	$(".image-slider").slick({
		autoplay: true,
		arrows: false,
		infinite: true,
		dots: true,
		speed: 2000,
		fade: true,
		cssEase: "linear",
	});
	//dj-image  slider
	$(".dj-slider")
		.on("afterChange init", function (event, slick, direction) {
			console.log("afterChange/init", event, slick, slick.$slides);
			// remove all prev/next
			slick.$slides.removeClass("prev").removeClass("next");
			for (var i = 0; i < slick.$slides.length; i++) {
				var $slide = $(slick.$slides[i]);
				if ($slide.hasClass("slick-current")) {
					$slide.prev().addClass("prev");
					$slide.next().addClass("next");
					break;
				}
			}
		})
		.on("beforeChange", function (event, slick) {
			// optional, but cleaner maybe
			// remove all prev/next
			slick.$slides.removeClass("prev").removeClass("next");
		})
		.slick({
			arrows: true,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 5,
			slidesToScroll: 1,
			prevArrow: "<i class='fas fa-chevron-left prev-arw'></i>",
			nextArrow: "<i class='fas fa-chevron-right next-arw'></i>",
			autoplay: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});

	// countdown js
	$(".count1").countdown("2022/12/31", function (event) {
		$(this).html(event.strftime("%D"));
	});
	$(".count2").countdown("2050/01/01", function (event) {
		$(this).html(event.strftime("%H"));
	});
	$(".count3").countdown("2050/01/01", function (event) {
		$(this).html(event.strftime("%M"));
	});
	$(".count4").countdown("2050/01/01", function (event) {
		$(this).html(event.strftime("%S"));
	});

	// events slider js

	//dj-image  slider
	$(".events-sliders").slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: "<i class='fas fa-chevron-left prev-arw'></i>",
		nextArrow: "<i class='fas fa-chevron-right next-arw'></i>",
		autoplay: true,
		focusOnSelect: true,
	});
	// $(".blog-slider").slick({
	// 	arrows: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	prevArrow: "<i class='fas fa-chevron-left prev-arw'></i>",
	// 	nextArrow: "<i class='fas fa-chevron-right next-arw'></i>",
	// 	autoplay: false,
	// 	focusOnSelect: true,
	// });
	$(".testi-slider").slick({
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: "<i class='fas fa-chevron-left prev-arw'></i>",
		nextArrow: "<i class='fas fa-chevron-right next-arw'></i>",
		autoplay: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});

	// venobox js
	$(".venobox").venobox();
});
