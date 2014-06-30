<div class="post-index">
	
	<img src="http://lorempixel.com/300/200/animals/<?php echo rand(1, 10); ?>" />
	
	<?php the_title(); ?><br />
	<?php echo get_the_date(); ?>
	<?php the_content(); ?>

</div>