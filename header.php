<!DOCTYPE html>
<html id="html" class="<?php echo get_theme_mod( 'theme_color', 'hodr' ); ?>">
    <head>
        <?php if(is_front_page()){ ?>
        	<title><?php bloginfo('name'); ?> | <?php bloginfo('description'); ?></title>
        <?php } else { ?>
        	<title><?php wp_title(); ?> | <?php bloginfo('name'); ?></title>
        <?php } ?>
        <link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/img/<?php echo get_theme_mod('theme_color', 'hodr'); ?>/favicon.ico" />
        <meta name="description" content="A showcase of the work of Connor White, a web developer specializing in Wordpress.">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="robots" content="index,follow">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0">
        <meta property="og:image" content="<?php bloginfo('template_url'); ?>/img/connor_white.jpg" />
        <meta property="og:description" content="As a web developer, I use technology to bring vision to reality. Have a challenge that needs solving?" />
        <?php if(is_front_page()){ ?>
          <script type='text/javascript'>var aesir = {"themeUrl":"<?php bloginfo('template_url') ?>","themeColor":"<?php echo get_theme_mod( 'theme_color', 'hodr' ); ?>"};</script>
          <script type='text/javascript' async="async" src='<?php bloginfo('template_url')?>/js/priority.min.js'></script>
        <?php } ?>
        <?php wp_head(); ?>
    </head>
    <body id="body" <?php if(is_front_page()){ ?>class="home"<?php } ?>>
      <header id="header" class="<?php if(!is_front_page()){ echo "barMenu"; } else { echo get_theme_mod( 'header_style', 'vertical' ); } ?>">
        <div class="wrap">
          <a id="top-bar-name" href="/#top"><h1>Connor <strong>White</strong></h1></a>
          <?php wp_nav_menu(array('theme_location' => 'top-nav')); ?>
          <svg id="hamburger"><use xlink:href="<?php bloginfo('template_url'); ?>/img/hamburger.svg#hb" /></svg>
        </div>
      </header>
