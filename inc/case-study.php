<div class="case-study">
  <img <?php if(is_front_page()){ ?>class="deferred"<?php } ?> alt="<?php echo strip_tags(get_the_title()); ?>" src="<?php if(!is_front_page()){ the_post_thumbnail_url(); } ?>" <?php if(is_front_page()){ ?> data-src="<?php the_post_thumbnail_url() ?>"<?php } ?> />
  <div class="shade"></div>
  <h3><?php the_title(); ?></h3>
</div>
