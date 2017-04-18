<?php get_header(); ?>
<div id='main' class="front">
	<div id='top'>
		<div class='wrap'>
			<div id='title'>
				<h1>Connor <strong>White</strong></h1>
				<h2><i>Developer | Designer | Dreamer</i></h2>
			</div>
		</div>
	</div>
	<div id='about'>
		<div class='wrap'>
			<p>As a <strong>web developer</strong>, I use technology to bring <strong>vision to reality.</strong> Have a challenge that needs solving?</p>
			<a class='button' href="mailto:connor@connorwhite.org">Let's Chat</a>
		</div>
	</div>
	<div id='portfolio'>
		<?php
			$sticky_posts = get_option( 'sticky_posts' );
			foreach ($sticky_posts as $post) : setup_postdata($post); ?>
				<a href="<?php the_permalink(); ?>">
					<?php include 'case-study.php'; ?>
				</a>
			<?php endforeach;
		?>
	</div>
	<?php include 'contact.php'; ?>
</div>
<?php get_footer(); ?>
