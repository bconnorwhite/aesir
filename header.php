<!DOCTYPE html>
<html id="html" class="<?php echo get_theme_mod( 'theme_color', 'hodr' ); ?>">
    <head>
        <?php if(is_front_page()){ ?>
        	<title><?php bloginfo('name'); ?> | <?php bloginfo('description'); ?></title>
        <?php } else { ?>
        	<title><?php wp_title(); ?> | <?php bloginfo('name'); ?></title>
        <?php } ?>
        <link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/img/<?php echo get_theme_mod('theme_color', 'hodr'); ?>_favicon.ico" />
        <meta name="description" content="A showcase of the work of Connor White, a web developer specializing in Wordpress.">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="robots" content="index,follow">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0">
        <meta property="og:image" content="<?php bloginfo('template_url'); ?>/img/connor_white.jpg" />
        <meta property="og:description" content="As a web developer, I use technology to bring vision to reality. Have a challenge that needs solving?" />
        <!--[if IE]>
          <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css"/>
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,300i,400,600|Source+Sans+Serif:400,600&#038;subset=latin' type='text/css' media='all' />
        <![endif]-->
        <?php wp_head(); ?>
    </head>
    <body <?php if(is_front_page()){ ?>class="home"<?php } ?>>
      <!--[if !IE]> -->
        <link rel='stylesheet' href="<?php bloginfo('template_url'); ?>/style.css" lazyload="1"/>
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,300i,400,600|Source+Sans+Serif:400,600&#038;subset=latin' type='text/css' media='all' />
      <!-- <![endif]-->
      <header id="header" <?php if(!is_front_page()){?>class="barMenu"<?php } ?>>
        <div class="wrap">
          <a id="top-bar-name" href="/#top"><h1>Connor <strong>White</strong></h1></a>
          <?php wp_nav_menu(array('theme_location' => 'top-nav')); ?>
          <svg id="hamburger"><use xlink:href="<?php bloginfo('template_url'); ?>/img/hamburger.svg#hb" /></svg>
        </div>
      </header>
