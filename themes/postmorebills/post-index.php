<?php $id = get_the_ID(); ?>
<div class="post-index" id="postid-<?php echo $i; ?>" data-url="<?php the_permalink(); ?>">
	<div class="image-container">
		<a href="<?php the_permalink(); ?>" class="post-link"><img src="<?php the_field('preview_image'); ?>" /></a>
 	</div>
		<a href="<?php the_permalink(); ?>" class="post-link"><span class="title"><?php the_title(); ?></span></a>
		<span class="date"><?php echo get_the_date(); ?></span>
		<a href="<?php the_permalink(); ?>" class="post-link"><span class="description"><?php echo wp_strip_all_tags( get_the_excerpt() ); ?></span></a>
</div>