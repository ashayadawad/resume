window.onload = () => {
	'use strict';
  
	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker
			   .register('./serviceWorker.js');
	}
  }

'use strict';


$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});


(function($) {

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});




})(jQuery);

