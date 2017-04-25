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
}
set_post_thumbnail_size(1600, 460);

/* Register Styles and Scripts-------- */
function enqueue_assets(){
	//Priority JS
	if(is_front_page()){
		wp_register_script('priority-min-js', get_template_directory_uri() . "/js/priority.min.js", array(), null, false);
		wp_enqueue_script('priority-min-js');
		$translation_array = array( 'themeUrl' => get_stylesheet_directory_uri(), 'themeColor' => get_theme_mod( 'theme_color', 'hodr' ) );
		wp_localize_script( 'priority-min-js', 'aesir', $translation_array );
	}
	//Main stylesheet
	wp_enqueue_style('style', get_template_directory_uri() . "/css/style.css", array(), null);
	//Google Fonts
	$query_args = array(
		'family' => 'Source+Sans+Pro:200,300,300i,400,600|Source+Sans+Serif:400,600',
		'subset' => 'latin');
	wp_enqueue_style('google_fonts', add_query_arg( $query_args, "//fonts.googleapis.com/css"), array(), null);
	//Secondary JS
	wp_register_script('secondary-min-js', get_template_directory_uri() . "/js/secondary.min.js", array(), null, true);
	wp_enqueue_script('secondary-min-js');
}
add_action( 'wp_enqueue_scripts', 'enqueue_assets' );

/* Set Async  -------- */
function add_async_attribute($tag, $handle) {
    return str_replace(' src', ' async="async" src', $tag);
}
add_filter('script_loader_tag', 'add_async_attribute', 10, 2);

/* Register Non-Critical Styles in Footer  -------- */
function enqueue_footer_styles(){
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/font-awesome/style.css', array(), null);
};
add_action('get_footer', 'enqueue_footer_styles');

/* Custom Login Screen-------- */
function enqueue_login_stylesheet() {
    wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/css/style-login.css', array(), null);
}
add_action('login_enqueue_scripts', 'enqueue_login_stylesheet');

function login_logo_url() {
	return get_bloginfo( 'url' );
}
add_filter('login_headerurl', 'login_logo_url');

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

/* Customizer------------*/
function aesir_options( $wp_customize ) {
	$wp_customize->add_section(
		'theme_colors',
		array(
			'title'       => __( 'Theme Color', 'aesir' ),
			'priority'    => 100,
			'capability'  => 'edit_theme_options',
			'description' => __('Change theme colors here.', 'aesir'),
		)
	);
	$wp_customize->add_setting( 'theme_color',
		array(
			'default' => 'hodr'
		)
	);
	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		'theme_color_control',
		array(
			'label'    => __( 'Theme Color', 'aesir' ),
			'section'  => 'theme_colors',
			'settings' => 'theme_color',
			'priority' => 10,
			'type' 		 => 'select',
			'choices'  => array(
					'hodr'		=> __( 'Höðr' ),
					'njordr' 	=> __( 'Njörðr' ),
					'freyja'	=> __( 'Freyja' ),
					'tyr'  		=> __( 'Tyr' )
			),
			'default'  => 'hodr'
		)
	));
}
add_action( 'customize_register' , 'aesir_options' );

/* Register Sidebars-------- */
function aesir_widgets_init() {
	register_sidebar( array(
		'name'          => 'About',
		'id'            => 'about',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
	) );
}
add_action( 'widgets_init', 'aesir_widgets_init' );

/*Custom Widgets-------- */
class about_widget extends WP_Widget {
	public function __construct() {
		$widget_options = array(
			'classname' => 'about_widget',
			'description' => 'About Widget',
		);
		parent::__construct( 'about_widget', 'About Widget', $widget_options);
	}
	public function widget($args, $instance){
		$text = apply_filters('widget_text', $instance['text']);?>
		<div id="about">
			<div id="slash">
				<div class="wrap">
					<p><?php echo $text ?></p>
					<a class='button' href="mailto:connor@connorwhite.org">Let's Chat</a>
				</div>
			</div>
		</div>
	<?php }
	public function form($instance){
		$text = !empty($instance['text']) ? $instance['text'] : ''; ?>
		<p>
    	<label for="<?php echo $this->get_field_id('text'); ?>">Text:</label><br />
    	<textarea rows="3" id="<?php echo $this->get_field_id('text'); ?>" class="widefat" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea><br />
		</p>
	<?php }
	public function update($new_instance, $old_instance){
		$instance = $old_instance;
		$instance['text'] = $new_instance['text'];
		return $instance;
	}
}

function register_widgets() {
	register_widget('about_widget');
}
add_action('widgets_init', 'register_widgets');
