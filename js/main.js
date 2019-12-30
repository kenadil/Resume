$(document).scroll(function(){
	var y = $(this).scrollTop();

	if (y > 200) {
		$('.hideable').fadeIn();
	}
	else {
		$('.hideable').fadeOut();
	}

	if (y > 700) {
		$('.hideable2').fadeIn();
	}
	else {
		$('.hideable2').fadeOut();
	}

	if (y > 1500) {
		$('.hideable3').fadeIn();
	}
	else {
		$('.hideable3').fadeOut();
	}
});
var width = $(window).width();
$(window).on('resize', function() {
  if ($("header").width() != width) {
    width = $(this).width();
    console.log(width);
  }
});
