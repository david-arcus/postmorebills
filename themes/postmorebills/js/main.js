var timer;
var mobileMenuActive = false;

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
	
	var $mobileNav = $('#mobile-nav-button');
	
	$mobileNav.on('click', function() {
		
		if (mobileMenuActive == false) {
		
			$mobileNav.animate({'padding-left':'260px'});
			$('#secondary').animate({'left':'0px'});
			$('#post-preview-wrapper').animate({'padding-left':'260px'});
			mobileMenuActive = true;
			
		} else {
			
			$mobileNav.animate({'padding-left':'0px'});
			$('#secondary').animate({'left':'-260px'});
			$('#post-preview-wrapper').animate({'padding-left':'0px'});
			mobileMenuActive = false;
			
		}
		
	});
		
	$postlink.on('click', function(e){
		
		clearInterval(timer);
		timer = null;
		
		$("#single-post-container").remove();
					
		e.preventDefault();
		
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
				//$loading.show();
			},
			success: function(data){
				
				//$loading.hide();
				
				$post_container.css('opacity', 0).slideDown(700).animate(
					{ opacity: 1 },
					{ queue: false, duration: 700 }
				);

				$post_container.html(data);
				
				
				$post_container.html(data).promise().done(function() {
					var $slides = $('#slides');
					var $images = $('#slides img');
					var $galleryContainer = $('#post-gallery');
										
					// align images in centre
					$images.each(function(index, element) {
						
						var left = parseInt(($galleryContainer.width() - $(this).width()) / 2);
						
						$(this).css('left',left + 'px');
					});
					
					$("#slides img").first().animate({'opacity':'1'});
					
					//$images.first().animate({'opacity':'1'});
        		});
				
				
				
				// close link
				var $closepost = $("#close-post");	
				$("#close-post").on('click', function() {
			
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
	  
	//$("#slides > div:gt(0)").css({'visibility': 'hidden', 'opacity':'1'});
		
	var $next = $('#next');
	var $prev = $('#prev');
	
	var $total = $('#total');
	var $current = $('#current');
	
	$total.html($("#slides img").length);
	$current.html('1');
    
	var timer = setInterval(getNext, 5000); // milliseconds
	
    $('#next').on('click', getNext);
    $('#prev').on('click', getPrev);

	function getNext() {
		var $curr = $('#slides img:visible'),
			$next = ($curr.next().length) ? $curr.next() : $('#slides img').first();
	
		transition($curr, $next);
	}
	
	function getPrev() {
		var $curr = $('#slides img:visible'),
			$next = ($curr.prev().length) ? $curr.prev() : $('#slides img').last();
		transition($curr, $next);
	}
	
	function transition($curr, $next) {
		clearInterval(timer);
	
		$next.css('z-index', 2).fadeIn('slow', function () {
			$curr.hide().css('z-index', 0);
			$next.css('z-index', 1);
			$current.html($('#slides img:visible').index()+1);
		});
	}	
	
	
});