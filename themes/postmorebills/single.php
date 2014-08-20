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
		echo '<p><span style="font-size:14px;">' . get_the_title() . '</span><br />';
		echo get_the_date() . '</p>';
	endwhile;
	
	global $post;

	echo nl2br(strip_shortcodes($post->post_content));
?>
<div id="close-post"><img src="<?php echo get_template_directory_uri(); ?>/img/close.png?z=aer" /></div>
<div id="slide-controls">
	<span id="prev"><</span> <span id="next">></span> <span id="current"></span> / <span id="total"></span>
</div>
</div>