var timer;

$(document).ready(function() {
 
	$.ajaxSetup({cache:false});
	
	var $page = $('#page');
	var $postlink = $(".post-link");
	var $loading = $("#loading");
		
	$postlink.on('click', function(e){
					
		e.preventDefault();
		
		clearInterval(timer);
		timer = null;
		
		
		var $post_container = $("#single-post-container");
		
		var $link_href = $(this).attr("href");
		
		$.ajax({
			type: "GET",
			url: $link_href,
			//data: "url="+url,
			beforeSend: function(){
				// Handle the beforeSend event
				$loading.show();
			},
			success: function(data){
				
				$loading.hide();
				
				$post_container.css('opacity', 0).slideDown(700).animate(
					{ opacity: 1 },
					{ queue: false, duration: 700 }
				);

				$post_container.html(data);
				
				
				// close link
				var $closepost = $("#close-post");	
				$("#close-post").on('click', function() {
					
					clearInterval(timer);
					timer = null;
			
					//console.log('clicked');
					$post_container.hide(700);
					$post_container.empty();
					//return false;

				
				});			
			}
		});
	});
});

$(document).ajaxComplete(function() {
	//slideshow
		
	clearInterval(timer);
	timer = null;	
	  
	  $("#slides > div:gt(0)").hide();

		timer = setInterval(function() { 
		  $('#slides > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slides');
		},  7000);
	
	/*
	var $slideChildren = $('#slides ul li');
	
	$slides.bjqs({
		'height' : '100%',
		'width' : 'auto',
		 showmarkers : false,
		 showcontrols : false
	});	
	
	// align images in centre
	$slideChildren.children().each(function(index, element) {
		console.log($(this).width());
	});
		*/
	
});