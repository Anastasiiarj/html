$(function(){

	 var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(1500).fadeOut('slow');

    $('.hamburger').click(function(){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.main-menu').toggleClass('hamb-menu');
	});  

	// Animation
    $(window).scroll(function() {
        $('.advantage__subtitle').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("fadeInUp");
            }
        });
    });

    // Modal
    $('.btn__phone, .btn__more, .btn__consult').click(function(e){
    	e.preventDefault();
    	$('#exampleModal').arcticmodal();
    });
    
	// плавное перемещение страницы к нужному блоку
	$("a.go_to").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1000);
    });   

	// Параллакс от движения мыши
    if ($(window).width() > 960) {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.consult__img',
                    'properties': {  
                        'y': {
                            'bottom': {
                                'initial': 6,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });
    };


	// Slider
    $('.service-slider').slick({
		dots: true,
		autoplay: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left control-icon"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right control-icon"></i></button>'
	});   

});