<div id="post-gallery" class="border-box">
</div>
<div id="post-description" class="border-box">
<?php
	while ( have_posts() ) : the_post();
		the_content();
	endwhile;
?>
</div>