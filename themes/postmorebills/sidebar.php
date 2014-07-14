<div id="secondary" class="border-box">
	<?php
		$name = get_bloginfo( 'name', 'display' );
		if ( ! empty ( $name ) ) :
	?>
	<h1 class="site-name"><?php echo esc_html( $name ); ?></h1>
	<?php endif; ?>
	
	<p><?php echo date('d.m.y'); ?></p>
	
	<?php
	
		$slug = 'sidebar';
		$args=array(
		  'name' => $slug,
		  'post_type' => 'page',
		  'post_status' => 'publish',
		  'numberposts' => 1
		);
		$post = get_posts($args);
		
		if( $post ) {
		  echo '<p>' . nl2br($post[0]->post_content) . '</p>';
		}
		
	?>
	
<div id="loading"><img src="<?php echo get_template_directory_uri(); ?>/img/loading.gif" /></div>	
</div><!-- #secondary -->
