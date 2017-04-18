<?php get_header(); ?>
<div id="main" class="post">
	<div id="portfolio">
		<?php include 'case-study.php'; ?>
	</div>
	<div class="content">
		<div class="wrap">
				<h2><?php the_title() ?></h2>
				<div class="info">
					<div class="left">
						<h3>Scope</h3>
						<p>
							<?php add_post_cats(get_the_category()); ?>
						</p>
					</div>
					<div class="right">
						<h3>Tools</h3>
						<p>
							<?php add_post_tags(get_the_tags()); ?>
						</p>
					</div>
				</div>
				<h3>Summary</h3>
				<?php echo $post->post_content; ?>
				<div class="button-div">
					<a class="button" href="<?php echo get_the_excerpt(); ?>" target="_blank">View Project</a>
				</div>
		</div>
	</div>
	<?php include 'contact.php'; ?>
</div>
<?php get_footer(); ?>
