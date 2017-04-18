<?php
/* FUWP-------- */
show_admin_bar( false );

/* Add Menus-------- */
function register_menus(){
	register_nav_menus(array('top-nav' => __('Top Nav'),));
}
add_action('init', 'register_menus');

/* Add Theme Support-------- */
if (function_exists('add_theme_support')) {
	add_theme_support('post-thumbnails', array('post'));
	//set_post_thumbnail_size(460, 460, true);
}

/* Register Styles and Scripts-------- */
function register(){
	wp_register_style('style', get_stylesheet_uri());
	$query_args = array(
		'family' => 'Open+Sans:300,300i,400|Merriweather:300,400,700',
		'subset' => 'latin,latin-ext');
	wp_register_style( 'google_fonts', add_query_arg( $query_args, "//fonts.googleapis.com/css" ), array(), null );

}
add_action( 'wp_enqueue_scripts', 'register' );

/* Enque Styles and Scripts-------- */
function enqueue(){
	wp_enqueue_style('style');
	wp_enqueue_style('google_fonts');
}
add_action( 'wp_enqueue_scripts', 'enqueue' );

/* Custom Login Screen-------- */
function my_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/style-login.css' );
}
add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );

function my_login_logo_url() {
	return get_bloginfo( 'url' );
}
add_filter( 'login_headerurl', 'my_login_logo_url' );

/* List Categories------------*/
function add_post_cats($postcats){
	if ($postcats) {
		for($c=0; $c<count($postcats); $c++) {
			echo $postcats[$c]->name;
			if($c!=(count($postcats)-1))
				echo ', ';
		}
	}
}

/* List Tags------------*/
function add_post_tags($posttags){
	if ($posttags) {
		for($t=0; $t<count($posttags); $t++) {
			echo $posttags[$t]->name;
			if($t!=(count($posttags)-1))
				echo ', ';
		}
	}
}
