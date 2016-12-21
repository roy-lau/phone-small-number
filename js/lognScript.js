$(document).on("pagecreate", "#Pagelogn", function() {
	$('input').on('focus',function(){
	    $('#bottom').css({'position':'static'})

	});
	$('input').on('blur',function(){
	    $('#bottom').css({'position':'fixed'})

	});
});