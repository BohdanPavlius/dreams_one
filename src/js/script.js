//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
// require slick.min.js
//=require masonry.pkgd.min.js 

;(function($){
	$(window).on('load', function(){
			$('.portfolio-gallery').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.portfolio-gallery__item',
		  // use element for option
		  columnWidth: '.portfolio-gallery__sizer',
		  percentPosition: true
		});

	});

	$(document).ready(function(){
			
		
	});

})(jQuery);