$(document).ready(function(){ 

	$('.bxslider li').click(function(){ 

		var targ1 = $(this).index();
		var targ2 = $('.slider_box').eq(targ1);

		$('.slider_box').slideUp();
		$(targ2).slideDown();



	});

	jQuery('.slider_box').eq(3).slideDown();


	// jQuery('.slider_block_massive').click(function() {
	// 	jQuery('.slider_block_massive').css("border", "3px solid orange");

	// });



	// /*Добавление удаление класса на фоне Черного Опасити*/	
	jQuery('.slider_block_plastic, .slider_block_massive, .slider_block_mdf').prepend ('<div class="black_block"></div>');
	jQuery('.slider_block_massive').find('.black_block').css('display', 'none');



	jQuery('.bxslider li').click(function() {

		jQuery('.bxslider li').find('.black_block').css('display', 'block');

		jQuery(this).find('.black_block').css('display', 'none');

	});

	/*Добавление удаление класса на фоне Черного Опасити*/










	// jQuery('.slider_block_massive').click(function() {
	// 	jQuery('.slider_block_massive').removeClass('black');

	// });




}); 
