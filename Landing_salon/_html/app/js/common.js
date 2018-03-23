$(document).ready(function() {

	$('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right']
       /* navbar: {
            title: 'LOGO'
        },
         offCanvas: {
            position: 'right'
        } */
    });


	/*var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
	    console.log('lalala');
	    $('.hamburger').addClass('is-active');
    });
    api.bind('close:before', function() {
        $('.hamburger').removeClass('is-active');
    });*/

	var arr=5;
    console.log(arr);
});
