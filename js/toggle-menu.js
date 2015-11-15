$(document).ready(function(){
	$('.menu-trigger').click(function(){
		$('.bottom_parth ul').slideToggle(500);
	});

	$(window).resize(function(){
		if ($(window).width() > 960 ) {
			$('.bottom_parth ul').removeAttr('style');
		}

	});

});



<!-- Для фиксированного меню-->

$(document).ready(function(){
	$('.menu-trigger-stiky').click(function(){
		$('.bottom_parth_stiky ul').slideToggle(500);
	});

	$(window).resize(function(){
		if ($(window).width() > 960 ) {
			$('.bottom_parth_stiky ul').removeAttr('style');
		}

	});

});