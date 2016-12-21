$(document).on("pagecreate", "#Pagelogn", function() {
	$('input').on('focus',function(){
	    $('input').css({'position':'static'})

	});
	$('input').on('blur',function(){
	    $('input').css({'position':'fixed'})
	});
});