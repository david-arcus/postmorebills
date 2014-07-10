<?php $id = get_the_ID(); ?>
<div class="post-index">
	<div class="image-container">
		<a data-id="<?php echo $id; ?>" href="<?php the_permalink(); ?>" class="post-link"><img src="<?php the_field('preview_image'); ?>" /></a>
 	</div>
		<a data-id="<?php echo $id; ?>" href="<?php the_permalink(); ?>" class="post-link"><span class="title"><?php the_title(); ?></span></a>
		<span class="date"><?php echo get_the_date(); ?></span>
		<a data-id="<?php echo $id; ?>" href="<?php the_permalink(); ?>" class="post-link"><span class="description"><?php echo wp_strip_all_tags( get_the_excerpt() ); ?></span></a>
</div>