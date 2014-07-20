var timer;

function insertAtIndex(i) {
    if(i === 1) {
     $("#post-preview-wrapper").prepend("<div id='single-post-container'></div>");        
     return;
    }

    $("#post-preview-wrapper > div:nth-child(" + (i - 1) + ")").after("<div id='single-post-container'></div>");
}

$(document).ready(function() {
 
	$.ajaxSetup({cache:false});
	
	var $page = $('#page');
	var $postlink = $("#post-preview-wrapper .post-index");
	var $loading = $("#loading");
		
	$postlink.on('click', function(e){
		
		$("#single-post-container").remove();
					
		e.preventDefault();
		
		clearInterval(timer);
		timer = null;
		
		var $link_href = $(this).data("url");
		var $leftOffset = $(this).offset().left;
		
		/*
		Object {top: 65, left: 268} main.js:32
		Object {top: 465, left: 604} main.js:32
		Object {top: 865, left: 940} main.js:32
		*/
		
		if ($leftOffset <= 268) {
			insertAtIndex($(this).index()+1);
		}
		
		
		if (($leftOffset > 268)  && ($leftOffset <= 604)) {
			
			insertAtIndex($(this).index());	
			
		}
		
		if ($leftOffset > 604) {
			
			insertAtIndex($(this).index()-1);	
			
		}	
		
		var $post_container = $("#single-post-container");
				
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
				
				
				$post_container.html(data).promise().done(function() {
					var $slides = $('#slides');
					var $images = $('#slides div');
					var $galleryContainer = $('#post-gallery');
										
					// align images in centre
					$images.children().each(function(index, element) {
						
						var left = parseInt(($galleryContainer.width() - $(this).width()) / 2);
						
						$(this).parent().css('left',left + 'px');
					});
					
					$("#slides div").first().animate({'opacity':'1'});
					
					//$images.first().animate({'opacity':'1'});
        		});
				
				
				
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
		}); // ajax
		
		
	});
});

$(document).ajaxComplete(function() {
	//slideshow
	
	clearInterval(timer);
	timer = null;	
	  
	$("#slides > div:gt(0)").css({'visibility': 'hidden', 'opacity':'1'});
	$("#slides div").first().addClass('currentSlide');
		
	var $next = $('#next');
	var $prev = $('#prev');
	
	timer = setInterval(function() { 
		$('#slides > div:first')
			.removeClass('currentSlide')
			.fadeOut(1000)
			.next()
			.css('visibility', 'visible')
			.addClass('currentSlide')
			.fadeIn(1000)
			.end()
			.appendTo('#slides');
			
	},  7000);
	
	
	$next.on('click', function() {
		
		$('#slides div.currentSlide')
			.removeClass('currentSlide')
			.fadeOut(1000)
			.next()
			.css('visibility', 'visible')
			.addClass('currentSlide')
			.fadeIn(1000)
			.end()
			.appendTo('#slides');
			
	});
	
	$prev.on('click', function() {
		
		
	});
		
	
	
});