<?php 

get_header(); 

	if ( have_posts() ) :
	
		while ( have_posts() ) : the_post();
	
			get_template_part( 'post', 'index' );
	
		endwhile;
		
	else :
		
		echo 'No posts found.';
	
	endif;
	
get_sidebar();
get_footer();