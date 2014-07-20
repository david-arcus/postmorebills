<?php 

get_header();

	$i = 1; // use this as index for each post item for referencing in jquery

	if ( have_posts() ) :
	
		while ( have_posts() ) : the_post();
	
			//get_template_part( 'post', 'index' );
			include(locate_template('post-index.php'));
			
			$i++;
	
		endwhile;
		
	else :
		
		echo 'No posts found.';
	
	endif;
	
get_sidebar();
get_footer();