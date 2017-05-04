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
	//Main stylesheet
	wp_enqueue_style('style', get_template_directory_uri() . "/css/style.css", array(), null);
	//Google Fonts
	$query_args = array(
		'family' => 'Source+Sans+Pro:200,300,300i,400,400i,600|Source+Sans+Serif:400,600',
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
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/css/font-awesome.css', array(), null);
};
add_action('get_footer', 'enqueue_footer_styles');

/*Remove versions from scripts and styles */
function remove_script_version( $src ){
	$parts = explode( '?ver', $src );
	return $parts[0];
}
add_filter( 'script_loader_src', 'remove_script_version', 15, 1 );
add_filter( 'style_loader_src', 'remove_script_version', 15, 1 );

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
		'aesir_options',
		array(
			'title'       => __( 'Aesir Options', 'aesir' ),
			'priority'    => 100,
			'capability'  => 'edit_theme_options',
			'description' => __('Aesir custom options.', 'aesir'),
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
			'section'  => 'aesir_options',
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
	$wp_customize->add_setting( 'header_style',
		array(
			'default' => 'vertical'
		)
	);
	$wp_customize->add_control( new WP_Customize_Control(
		$wp_customize,
		'header_style_control',
		array(
			'label'    => __( 'Header Style', 'aesir' ),
			'section'  => 'aesir_options',
			'settings' => 'header_style',
			'priority' => 10,
			'type' 		 => 'select',
			'choices'  => array(
					'vertical'		=> __( 'Vertical' ),
					'Horizontal'=> __( 'Horizontal' ),
					'Glass'			=> __( 'Glass' ),
					'Solid'  		=> __( 'Solid' )
			),
			'default'  => 'vertical'
		)
	));
}
add_action( 'customize_register' , 'aesir_options' );

/* Register Sidebars-------- */
function aesir_widgets_init() {
	register_sidebar( array(
		'name'          => 'About',
		'id'            => 'about'
	) );
	register_sidebar( array(
		'name'          => 'Services',
		'id'            => 'services'
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
		$text = apply_filters('text', $instance['text']);
		$style = apply_filters('style', $instance['style']); ?>
		<div id="about" class="<?php echo $style ?>">
			<div class="container">
				<div class="wrap">
					<p><?php echo $text ?></p>
					<a class='button' href="mailto:connor@connorwhite.org">Let's Chat</a>
				</div>
			</div>
		</div>
	<?php }
	public function form($instance){
		$text = !empty($instance['text']) ? $instance['text'] : '';
		$style = !empty($instance['style']) ? $instance['style'] : ''; ?>
		<p>
    	<label for="<?php echo $this->get_field_id('text'); ?>">Text:</label><br />
    	<textarea rows="5" id="<?php echo $this->get_field_id('text'); ?>" class="widefat" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea><br />
			<label for="<?php echo $this->get_field_id('style'); ?>">Style:</label><br />
			<select name="<?php echo $this->get_field_name('style'); ?>">
  			<option <?php selected( $instance['style'], 'normal'); ?> value="normal">Normal</option>
				<option <?php selected( $instance['style'], 'box'); ?>value="box">Box</option>
  			<option <?php selected( $instance['style'], 'slash'); ?>value="slash">Slash</option>
				<option <?php selected( $instance['style'], 'slash box'); ?>value="slash box">Slash-Box</option>
			</select>
		</p>
	<?php }
	public function update($new_instance, $old_instance){
		$instance = $old_instance;
		$instance['text'] = $new_instance['text'];
		$instance['style'] = $new_instance['style'];
		return $instance;
	}
}

class service_widget extends WP_Widget {
	public function __construct() {
		$widget_options = array(
			'classname' => 'service_widget',
			'description' => 'Service Widget',
		);
		parent::__construct( 'service_widget', 'Service Widget', $widget_options);
	}
	public function widget($args, $instance){
		$service_icon = apply_filters('service_icon', $instance['service_icon']);
		$service_name = apply_filters('service_name', $instance['service_name']);
		$service_text = apply_filters('service_text', $instance['service_text']);
		$service_link = apply_filters('service_link', $instance['service_link']);
		$service_url = apply_filters('service_url', $instance['service_url']); ?>
		<div class="service">
				<?php echo file_get_contents((get_template_directory() . "/img/services/" . $service_icon)); ?>
				<h3><?php echo $service_name ?></h3>
				<p><?php echo $service_text ?></p>
				<br />
				<a href="<?php echo $service_url ?>"><?php echo $service_link ?></a>
		</div>
	<?php }
	public function form($instance){
		$service_icon = !empty($instance['service_icon']) ? $instance['service_icon'] : '';
		$service_name = !empty($instance['service_name']) ? $instance['service_name'] : '';
		$service_text = !empty($instance['service_text']) ? $instance['service_text'] : '';
		$service_link = !empty($instance['service_link']) ? $instance['service_link'] : '';
		$service_url = !empty($instance['service_url']) ? $instance['service_url'] : ''; ?>
		<p>
    	<label for="<?php echo $this->get_field_id('service_icon'); ?>">Service Icon Filename:</label><br />
    	<textarea rows="1" id="<?php echo $this->get_field_id('service_icon'); ?>" class="widefat" name="<?php echo $this->get_field_name('service_icon'); ?>"><?php echo $service_icon; ?></textarea><br />
			<label for="<?php echo $this->get_field_id('service_name'); ?>">Service Name:</label><br />
    	<textarea rows="1" id="<?php echo $this->get_field_id('service_name'); ?>" class="widefat" name="<?php echo $this->get_field_name('service_name'); ?>"><?php echo $service_name; ?></textarea><br />
			<label for="<?php echo $this->get_field_id('service_text'); ?>">Service Description:</label><br />
    	<textarea rows="5" id="<?php echo $this->get_field_id('service_text'); ?>" class="widefat" name="<?php echo $this->get_field_name('service_text'); ?>"><?php echo $service_text; ?></textarea><br />
			<label for="<?php echo $this->get_field_id('service_link'); ?>">Service Link:</label><br />
    	<textarea rows="1" id="<?php echo $this->get_field_id('service_link'); ?>" class="widefat" name="<?php echo $this->get_field_name('service_link'); ?>"><?php echo $service_link; ?></textarea><br />
			<label for="<?php echo $this->get_field_id('service_url'); ?>">Service URL:</label><br />
			<textarea rows="2" id="<?php echo $this->get_field_id('service_url'); ?>" class="widefat" name="<?php echo $this->get_field_name('service_url'); ?>"><?php echo $service_url; ?></textarea><br />
		</p>
	<?php }
	public function update($new_instance, $old_instance){
		$instance = $old_instance;
		$instance['service_icon'] = $new_instance['service_icon'];
		$instance['service_name'] = $new_instance['service_name'];
		$instance['service_text'] = $new_instance['service_text'];
		$instance['service_link'] = $new_instance['service_link'];
		$instance['service_url'] = $new_instance['service_url'];
		return $instance;
	}
}

function register_widgets() {
	register_widget('about_widget');
	register_widget('service_widget');
}
add_action('widgets_init', 'register_widgets');
