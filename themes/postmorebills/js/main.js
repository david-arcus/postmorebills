$(document).ready(function() {
 
	$.ajaxSetup({cache:false});
	
	$(".post-link").click(function(){
		
		var post_link = $(this).attr("href");
		var post_container = $("#single-post-container");
		
		post_container.show();
		post_container.html("content loading");
		post_container.load(post_link);
		
		return false;
		
	});

});