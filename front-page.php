<?php get_header(); ?>
<div id='main' class="front">
	<div id='top'>
		<img id="header-image" alt="Connor White" />
		<div class="shade"></div>
		<div class='wrap'>
			<div id='title'>
				<h1>Connor <strong>White</strong></h1>
				<h2><i><?php bloginfo('description'); ?></i></h2>
			</div>
		</div>
	</div>
	<?php if(is_active_sidebar('about')){
		dynamic_sidebar('about');
	} ?>
	<?php if(is_active_sidebar('services')){ ?>
		<div id="services">
			<h2>Services</h2>
			<div class="wrap">
				<?php dynamic_sidebar('services'); ?>
			</div>
    </div>
	<?php } ?>
	<div id='portfolio' class="portfolio">
		<h2>Portfolio</h2>
		<?php
			$sticky_posts = get_option( 'sticky_posts' );
			foreach ($sticky_posts as $post) : setup_postdata($post); ?>
				<a href="<?php the_permalink(); ?>">
					<?php include 'inc/case-study.php'; ?>
				</a>
			<?php endforeach;
		?>
	</div>
	<?php include 'inc/contact.php'; ?>
</div>
<?php get_footer(); ?>
