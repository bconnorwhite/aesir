<div id="contact">
	<div class="wrap">
		<h2>Let's Work Together!</h2>
		<p>I am currently accepting projects and would love to discuss yours.</p>
		<p id="thanks">Thanks! Your message has been recorded.</p>
		<form name="contact" action="" method="POST" onsubmit="return false;">
			<div class="info">
				<div class="field">
					<p>Name:</p>
					<input onfocus="this.parentNode.style.opacity=0.8" onblur="this.parentNode.style.opacity=1" name="name" type="text" name="name" />
				</div>
				<div class="field">
					<p>Email:</p>
					<input onfocus="this.parentNode.style.opacity=0.8" onblur="this.parentNode.style.opacity=1" name="email" type="text" name="email" required />
				</div>
			</div>
			<textarea name="message" name="message" placeholder="Message:" rows="5" required></textarea>
			<div class="send">
				<input name="submit" type="submit" name="submit" value="Send" onclick='sendEmail("<?php echo(bloginfo('template_url')) .'/mail.php'; ?>")' />
			</div>
		</form>
	</div>
</div>
<script async type="text/javascript" src="<?php bloginfo('template_url'); ?>/scripts/contact.js"></script>
