$(document).ready(function(){
    $('.team-persons').slick({
        infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    /*prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left control-icon"></i></button>',*/
		/*nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right control-icon"></i></button>'*/
	   // responsive:
    });

    $('.feedback-info').slick();

    /*$(".showBlock").click(function(e){
    	e.preventDefault();
	    $(this).toggleClass('active');
	    $(".showBlock").not(this).removeClass('active');
	});*/


	$(".sale-info").not(":first").hide();
		$(".sale-who .showBlock").click(function() {
			/*e.preventDefault();*/
			$(".sale-who .showBlock").removeClass("active").eq($(this).index()).addClass("active");
			$(".sale-info").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");	


});
