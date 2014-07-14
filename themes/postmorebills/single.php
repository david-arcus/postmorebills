<div id="post-gallery" class="border-box">
<?php
if ( get_post_gallery() ) :
	echo get_post_gallery();
endif;
?> 
</div>
<div id="post-description" class="border-box">
<?php
	while ( have_posts() ) : the_post();
		echo '<p>' . get_the_title() . '<br />';
		echo get_the_date() . '</p>';
	endwhile;
	
	global $post;

	echo nl2br(strip_shortcodes($post->post_content));
?>
<div id="close-post"><img src="<?php echo get_template_directory_uri(); ?>/img/close.png" /></div>
</div>